import React, { useEffect, useState } from "react";
import RequestCard from "../Components/RequestCard";
import toast from "react-hot-toast";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";
import RequestSuggestionCard from "../Components/RequestSuggestionCard";
import { ErrorHandling } from "../Utils/ErrorHandling";

const Request = () => {
  const [RequestList, setRequestList] = useState([]);
  const [connectionSuggestion, setconnectionSuggestion] = useState([]);

  const GetRequestList = async () => {
    try {
      const res = await axios.get(REACT_APP_BASE_URL + "/request/review", {
        withCredentials: true,
      });
      setRequestList(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const GETConnnectionSuggestion = async () => {
    try {
      const res = await axios.get(
        REACT_APP_BASE_URL + "/suggestion?limit=20&page=1",
        {
          withCredentials: true,
        }
      );
      setconnectionSuggestion(res.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const POSTRequestSend = async (status, id) => {
    try {
      const resp = await axios.post(
        REACT_APP_BASE_URL + `/request/send/${status}/${id}`,
        null,
        { withCredentials: true }
      );

      const UpdatedList = connectionSuggestion.filter(
        (conn) => conn._id !== id
      );
      setconnectionSuggestion(UpdatedList);
      toast.success(resp.data.message);
    } catch (error) {
      ErrorHandling(error);
    }
  };
  useEffect(() => {
    GetRequestList();
    GETConnnectionSuggestion();
  }, []);

  const RequestHandler = async (status, id) => {
    try {
      const res = await axios.post(
        REACT_APP_BASE_URL + "/request/review/" + status + `/${id}`,
        null,
        { withCredentials: true }
      );
      const UpdatedList = RequestList.filter((req) => req._id !== id);
      setRequestList(UpdatedList);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className=" p-6 container mx-auto space-y-4 ">
      <p className="text-2xl font-semibold">Request</p>
      <div className="flex flex-col gap-2">
        {RequestList.length === 0 ? (
          <div>
            <p className=" text-lg">No Pending Requests </p>
          </div>
        ) : (
          RequestList.map((request) => {
            return (
              <RequestCard data={request} RequestHandler={RequestHandler} />
            );
          })
        )}
      </div>

      <div>
        <p className=" text-2xl font-semibold">Suggestion</p>
      </div>

      <div className=" flex flex-wrap gap-4">
        {connectionSuggestion &&
          connectionSuggestion.map((connection) => {
            return (
              <RequestSuggestionCard
                connection={connection}
                connectionHandler={POSTRequestSend}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Request;
