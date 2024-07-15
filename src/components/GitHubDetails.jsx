import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";

const GitHubDetails = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!username) return;
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        if (!response.ok) {
          setUser(null);
          setMessage("User not found!");
          return;
        }
        setUser(data);
        setMessage("");
        console.log(data);
      } catch (error) {
        setUser(null);
        setMessage("Error fetching user data");
      }
    };
    fetchUser();
  }, [username]);

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-6 ">
      <h1 className="text-4xl font-bold text-gray-800">
        Find GitHub Account Details!
      </h1>
      <UserForm setUsername={setUsername} />
      {message && <p className="text-xl text-red-500 underline">{message}</p>}
      {user && (
        <div className="bg-green-100 shadow-md rounded-lg p-6 mt-6 lg:w-2/5 w-full border-green-500 border-2">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-600 underline">
            {user.login}
          </h2>
          <div className="flex gap-8">
            <div className="flex justify-center mb-4">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-42 h-42 rounded-full border-4 border-pink-300"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="mb-2 text-green-600 text-xl font-bold ">
                <span className="underline ">Name: </span>
                {user.name}
              </p>
              <p className="mb-2 font-bold text-purple-600">
                <span className=" underline">Public Repositories: </span>
                {user.public_repos}
              </p>
              <p className="mb-2 font-bold text-orange-600">
                <span className="underline">Public Gists: </span>
                {user.public_gists}
              </p>
            </div>
          </div>
          <p className="text-xl font-semibold text-center mb-4 text-red-400">
            <span className="font-bold underline">Profile Created At: </span>
            {new Date(user.created_at).toISOString().split("T")[0]}
          </p>
        </div>
      )}
    </div>
  );
};

export default GitHubDetails;
