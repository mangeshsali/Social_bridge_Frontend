import React from "react";

const RequestCard = ({ data, RequestHandler }) => {
  const { lastName, firstName, profile } = data.fromUserId;

  return (
    <div className=" flex justify-between  items-center w-2/3 p-4 rounded-xl bg-deep-navy">
      <div className="flex gap-6 items-center">
        <div className=" w-[75px] h-[75px]">
          <img src={profile} className="rounded-full object-cover" />
        </div>

        <div className=" space-y-1">
          <h1 className=" text-xl">{`${firstName} ${lastName}`}</h1>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            nam?
          </p>
        </div>
      </div>

      <div className=" space-x-4">
        <button
          className="btn  bg-blue-btn hover:bg-blue-btn-hover  text-white font-semibold text-md"
          onClick={() => RequestHandler("accepted", data._id)}
        >
          Accept
        </button>
        <button
          className="btn   border border-blue-btn hover:bg-blue-btn-hover  text-blue-btn bg-white font-semibold text-md"
          onClick={() => RequestHandler("rejected", data._id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
