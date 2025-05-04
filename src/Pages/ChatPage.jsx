import BgImg from "../assets/images/Chat_Bg.jpg";
import { BsChatDots } from "react-icons/bs";
import Chat from "../Components/Chat";
import { useEffect, useState } from "react";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";

const ChatPage = () => {
  const [connections, setConnections] = useState([]);
  const [selectedUSer, setSelectedUser] = useState(false);

  const GETConnections = async () => {
    try {
      const response = await axios.get(REACT_APP_BASE_URL + "/connections", {
        withCredentials: true,
      });
      setConnections(response.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    GETConnections();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-deep-navy h-[85%] overflow-y-auto">
        <p className="font-bold text-xl text-ceter p-6 border-b border-gray-800">
          Connections
        </p>
        {connections &&
          connections.map((contact) => (
            <div
              key={contact.id}
              className="p-3 border-b border-gray-800 cursor-pointer flex  gap-4"
              onClick={() => setSelectedUser(contact)}
            >
              <img src={contact.profile} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col ">
                <h1>{contact.firstName + " " + contact.lastName}</h1>
                <p className="text-xs">{contact.bio}</p>
              </div>
            </div>
          ))}
      </div>

      <div
        className="relative flex flex-col w-2/3 h-[85%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>

        {!selectedUSer ? (
          <div className="w-full h-full justify-center items-center flex">
            <div className="bg-gray-300 px-4 py-1 rounded-md">
              <h1 className="text-black  gap-3 flex items-center">
                Select a chat to messsaging{" "}
                <span className="text-xl">
                  <BsChatDots />
                </span>
              </h1>
            </div>
          </div>
        ) : (
          <Chat selectedUSer={selectedUSer} />
        )}
      </div>
    </div>
  );
};

export default ChatPage;
