"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Availability = () => {
  const [availability, setAvailability] = useState([]);

  async function fetchAvailability () {
    try {
      const response = await fetch("https://schedules-r-us-78b737cd078f.herokuapp.com/availability")
      const data = await response.json();
      setAvailability(data)
      console.log("Aavailability:", data)
    } catch (error) {
      console.log("Error:", error)
    }
  }

  useEffect(()=>{
    fetchAvailability();
  },[])

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="mt-5">
      <div className="flex font-bold text-[24px] mb-10 p-2 items-center justify-center bg-indigo-950 text-white rounded-sm">
        <h1>Staff Availability</h1>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "resourceTimelineWook, dayGridMonth,timeGridWeek,listMonth",
        }}
        themeSystem="bootstrap5"
        height={"100vh"}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
        events={availability}
        select={(info) => {
          const title = prompt("Please enter a new event title:");
          if (title) {
            addEvent({
              title,
              start: info.startStr,
              end: info.endStr,
            });
          }
        }}
      />
    </div>
  );
};

export default Availability;
