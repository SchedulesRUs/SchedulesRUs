"use client";

import { useState, useEffect } from "react";
import { BASE_URL } from "../Config";

export default function getAllUser() {
  async function fetchGetAllUser() {
    const [allUser, setAllUser] = useState([]);
    const [isError, setErrorStatus] = useState(true);
    try {
      const response = await fetch(`${BASE_URL}/user`);
      const data = await response.json();
      console.log("test", data);
      console.dir(data);
      setAllUser(data);
      setErrorStatus(false);
      // return data;
    } catch (error) {
      setErrorStatus(true);
    }
  }
  useEffect(() => {
    fetchGetAllUser();
  }, []);

  return (
    <div>
      <h1> Meal Ideas</h1>
      <h1> Here are some meal ideas using :</h1>

      <div className="ml-8 p-2">
        <ul>
          {mealsArray ? (
            mealsArray.map((item) => (
              <li class="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                {item.name}
              </li>
            ))
          ) : (
            <p>No meals available</p>
          )}
        </ul>
      </div>
    </div>
  );
}
