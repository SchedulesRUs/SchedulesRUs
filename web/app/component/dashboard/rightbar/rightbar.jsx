"use client";

import React, { useState } from "react";

const Rightbar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Staff Special Request");
  const [date, setDate] = useState("Mar 12, 2024");
  const [note, setNote] = useState(
    "Paradon M.- Request Sick\nKhit K. - Request Vacation\nThu Ngoc - Request Sick",
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform actions to save the edited details (e.g., send a request to the server)
  };

  return (
    <div className="fixed mr-5">
      <div className="relative bg-[#F1EFEFE9] p-4 rounded-sm">
        <div className="flex flex-col gap-4">
          {isEditing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 rounded-md"
              />
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 rounded-md"
              />
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="p-2 rounded-md min-h-max"
              />
              <button
                className="p-1 bg-indigo-950 rounded-md text-white"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>Title: {title}</span>
              <h3>Date: {date}</h3>
              <span>Note:</span>
              <p>{note}</p>
              <button
                className="p-1 bg-indigo-950 rounded-md text-white"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
