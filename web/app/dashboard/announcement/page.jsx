"use client";

import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/app/constants/Config";
import styles from "./announcement";

const Announcement = () => {
  // State hooks for each field
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  async function fetchAnnouncement() {
    try {
      const response = await fetch(`${BASE_URL}/announcement`);
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  }

  async function addAnnouncement() {
    try {
      const response = await fetch(`${BASE_URL}/announcement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, date, detail }),
      });
      const newAnnouncement = await response.json();
      setAnnouncements([...announcements, newAnnouncement]);
      setTitle("");
      setDate("");
      setDetail("");
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  }

  async function deleteAnnouncement(id) {
    try {
      console.log("Deleting announcement with ID:", id);
      const response = await fetch(`${BASE_URL}/announcement/${id}`, {
        method: "DELETE",
      });
      console.log("Response received:", response);
      if (response.ok) {
        console.log("Deletion successful");
        // Remove the announcement from the client-side state
        setAnnouncements(
          announcements.filter((announcement) => announcement.id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  }

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    addAnnouncement();
  };


  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "28px" }}>
        Announcement Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="date">
            Date:
          </label>
          <input
            type="date"
            id="date"
            style={styles.input}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="detail">
            Detail:
          </label>
          <textarea
            id="detail"
            style={styles.textArea}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <button style={styles.button} type="submit">
          Submit Form
        </button>
      </form>
      <div style={styles.announcementList}>
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            style={styles.announcementItem}
            className="flex flex-col"
          >
            <h3>{announcement.title}</h3>
            <p>Date: {announcement.date}</p>
            <p>Detail: {announcement.detail}</p>
            <button
              style={{ ...styles.button, ...styles.deleteButton }}
              onClick={() => deleteAnnouncement(announcement.id)}
              className="mt-5"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
