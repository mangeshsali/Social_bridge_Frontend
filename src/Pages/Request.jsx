import React, { useEffect, useState } from "react";
import RequestCard from "../Components/RequestCard";
import toast from "react-hot-toast";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";

const Request = () => {
  const [RequestList, setRequestList] = useState([]);

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
  useEffect(() => {
    GetRequestList();
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
    <div className=" p-6 container mx-auto space-y-4">
      {RequestList.length === 0 ? (
        <div>
          <p className=" text-lg">No Pending Requests </p>
        </div>
      ) : (
        RequestList.map((request) => {
          return <RequestCard data={request} RequestHandler={RequestHandler} />;
        })
      )}
    </div>
  );
};

export default Request;
