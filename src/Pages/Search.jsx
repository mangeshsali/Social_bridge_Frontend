// SearchComponent.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ErrorHandling } from "../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";
import PersonSearch from "../Components/Search/PersonSearch";
import PostSearch from "../Components/Search/PostSearch";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("person");
  const [resultData, setResultData] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const GETSearchResult = async () => {
    try {
      const resp = await axios.get(
        REACT_APP_BASE_URL +
          `/searchconnection?search=${searchQuery}&type=${searchType}`,
        { withCredentials: true }
      );
      setResultData(resp.data);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    GETSearchResult();
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Search</h2>
      <div className=" max-w-2xl">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center space-x-4"
        >
          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder={`Search for ${searchType}...`}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Select Dropdown */}
          <select
            value={searchType}
            onChange={handleSearchTypeChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="person">Person</option>
            <option value="post">Post</option>
          </select>

          {/* Search Button with Icon */}
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-lg p-3 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {resultData ? (
        resultData.type === "person" ? (
          <PersonSearch resultData={resultData} />
        ) : (
          <PostSearch resultData={resultData} />
        )
      ) : null}
    </>
  );
};

export default SearchComponent;
