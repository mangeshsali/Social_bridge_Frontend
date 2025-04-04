import React from "react";

const PersonSearch = ({ resultData }) => {
  return (
    <div className="h-[300px] overflow-hidden overflow-y-scroll max-w-2xl  mt-6">
      {/* <h1>People Search</h1> */}

      {Array.isArray(resultData.result) ? (
        <div className="flex flex-col gap-y-1">
          {resultData?.result?.map((info) => {
            const { firstName, lastName, bio, profile } = info || {};
            return (
              <div
                className="flex justify-between items-center w-full p-1 gap-y-2 rounded-xl bg-deep-navy cursor-pointer"
                key={info._id}
              >
                <div className="flex gap-6 items-center">
                  <div className="w-[40px] h-[40px]">
                    <img
                      src={profile}
                      className="rounded-full object-cover"
                      alt={`${firstName} ${lastName}`}
                    />
                  </div>

                  <div className="space-y-1">
                    <h1 className="text-md">{`${firstName} ${lastName}`}</h1>
                    <p className="text-xs text-gray-400">{bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" my-4">
          <h1 className=" text-md font-bold">Person Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default PersonSearch;
