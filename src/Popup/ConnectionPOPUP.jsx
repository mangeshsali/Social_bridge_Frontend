import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { ErrorHandling } from "../Utils/ErrorHandling";
import { REACT_APP_BASE_URL } from "../../envSample";

const ConnectionPOPUP = ({ setIsconnectionOpen }) => {
  const [connectionList, setConnectionList] = useState([]);
  const GETConnectionList = async () => {
    try {
      const resp = await axios.get(REACT_APP_BASE_URL + "/connections", {
        withCredentials: true,
      });
      setConnectionList(resp.data.result);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    GETConnectionList();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-deep-navy p-6 rounded-lg shadow-lg w-[550px] relative ">
        <p className="text-2xl font-semibold">Connections</p>
        <div
          className=" absolute top-4 right-4  cursor-pointer"
          onClick={() => setIsconnectionOpen((prev) => !prev)}
        >
          <IoMdCloseCircle className=" text-2xl" />
        </div>
        <div className="flex flex-col gap-4 border rounded-lg border-gray-700 p-4 mt-6 max-h-[400px] overflow-y-scroll">
          {connectionList && connectionList.length == 0 ? (
            <p className=" text-lg font-semibold">NO Connection Found</p>
          ) : (
            connectionList.map((conn) => {
              return (
                <div className="flex gap-x-4 cursor-pointer">
                  <img
                    src={conn.profile}
                    className="w-[50px] h-[50px] object-cover rounded-full"
                  />
                  <div className="flex flex-col">
                    <h1>{conn.firstName + " " + conn.lastName}</h1>
                    <p>{conn.bio}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectionPOPUP;
