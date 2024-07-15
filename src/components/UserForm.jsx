import React, { useState } from "react";

const UserForm = ({ setUsername }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Enter GitHub User Name"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="border-2 border-gray-300 p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => setUsername(inputValue)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default UserForm;
