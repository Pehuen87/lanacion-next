'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      const result = res.data.results[0];
      setUser(result);
    });
  }, []);

  return (
    <div className="ml-4 flex items-center md:ml-3">
      <div className="flex flex-col">
        <span className="mr-2 text-gray-200 font-bold">
          {user.email ? user.email : "Username"}
        </span>
        <span className="mr-2 text-gray-100 text-sm">
          {user.name ? `${user.name.first} ${user.name.last}` : "Name"}
        </span>
      </div>
      {user && (
        <img
          className="h-10 w-10 rounded-full"
          src={user.picture?.thumbnail}
          alt="User Avatar"
        />
      )}
    </div>
  );
}
