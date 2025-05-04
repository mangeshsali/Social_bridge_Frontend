import axios from "axios";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { REACT_APP_BASE_URL } from "../../envSample";

const Chat = ({ selectedUSer }) => {
  const ProfileData = useSelector((store) => store.Profile);
  const TargetID = selectedUSer._id;
  const LoginID = ProfileData._id;
  const SocketRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  // const [socket, setSocket] = useState(null);

  const handleSend = () => {
    if (input.trim() === "") return;
    SocketRef.current?.emit("message", {
      text: input,
      targetID: TargetID,
      userID: LoginID,
    });
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const GETChatHistory = async () => {
    try {
      const res = await axios.get(`${REACT_APP_BASE_URL}/chat/${TargetID}`, {
        withCredentials: true,
      });

      setMessages(
        res.data.chatHistory.map((recieve) => {
          return {
            userID: recieve.senderId,
            targetID: recieve.receiverId,
            text: recieve.text,
            time: new Date(recieve.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        })
      );

      console.log("Response Chat", res.data);
    } catch (error) {
      console.log("Err", error.message);
    }
  };

  useEffect(() => {
    SocketRef.current = io("http://localhost:3000");

    // /    setSocket(newSocket);
    console.log("mount");
    return () => {
      SocketRef.current?.disconnect();
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    GETChatHistory();

    if (LoginID && TargetID) {
      SocketRef.current?.emit("join", {
        targetID: TargetID,
        userID: LoginID,
      });
    }

    SocketRef.current?.on(
      "recivedMessage",
      ({ userID, targetID, text, time }) => {
        console.log("re", { userID, targetID, text });
        setMessages((prev) => [...prev, { userID, targetID, text, time }]);
      }
    );
    return () => SocketRef.current?.off("recivedMessage");
  }, [LoginID, TargetID]);

  console.log("finale", messages);

  return (
    <div className=" h-full flex flex-col">
      {/* Actual content goes here */}
      <div className="relative p-4 bg-deep-navy border border-gray-800 flex items-center gap-4">
        <img
          src={selectedUSer.profile}
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-white text-md">
          {selectedUSer.firstName + " " + selectedUSer.lastName}
        </h1>
      </div>

      {/* Message Display Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages &&
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat ${
                msg.userID === ProfileData._id ? "chat-end" : "chat-start"
              }`}
            >
              <div
                className={`chat-bubble ${
                  msg.userID === ProfileData._id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
              <div className="chat-footer opacity-50 text-xs">{msg.time}</div>
            </div>
          ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-deep-navy border-t border-gray-600 flex">
        <input
          type="text"
          className="flex-1 border border-gray-500 rounded-xl px-4 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
