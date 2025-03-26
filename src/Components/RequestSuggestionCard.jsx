import React from "react";

const RequestSuggestionCard = ({ connection, connectionHandler }) => {
  const { _id, firstName, lastName, bio, profile } = connection || {};
  return (
    <div class="border rounded-lg w-[250px] bg-gray-900 border-gray-700 p-4 shadow-lg">
      <div class="space-y-4">
        <div class="overflow-hidden">
          <img
            src={profile}
            alt="Profile Image"
            class="w-full h-[200px] object-cover"
          />
        </div>

        <div class="flex flex-col gap-2">
          <h1 class="font-semibold text-lg text-white">
            {firstName + " " + lastName}
          </h1>
          <p class="text-sm text-gray-400">{bio}</p>
        </div>

        <div
          class=" text-center  cursor-pointer block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
          onClick={() => connectionHandler("interested", _id)}
        >
          Add Connection
        </div>
      </div>
    </div>
  );
};

export default RequestSuggestionCard;
