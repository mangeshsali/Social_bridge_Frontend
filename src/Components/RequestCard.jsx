import React from "react";

const RequestCard = ({ data, RequestHandler }) => {
  const { lastName, firstName, profile, bio } = data.fromUserId;

  return (
    <div className=" flex justify-between  items-center w-full p-4 rounded-xl bg-deep-navy">
      <div className="flex gap-6 items-center">
        <div className=" w-[55px] h-[55px]">
          <img src={profile} className="rounded-full object-cover" />
        </div>

        <div className=" space-y-1">
          <h1 className=" text-lg">{`${firstName} ${lastName}`}</h1>
          <p className=" text-xs text-gray-400">{bio}</p>
        </div>
      </div>

      <div className=" space-x-4">
        <button
          className="btn  btn-md  bg-blue-btn hover:bg-blue-btn-hover  text-white font-semibold text-md"
          onClick={() => RequestHandler("accepted", data._id)}
        >
          Accept
        </button>
        <button
          className="btn btn-md   border border-blue-btn hover:bg-blue-btn-hover  text-blue-btn bg-white font-semibold text-md"
          onClick={() => RequestHandler("rejected", data._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
