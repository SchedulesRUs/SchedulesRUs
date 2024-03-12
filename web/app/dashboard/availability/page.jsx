"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Availability = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      user_id: 40,
      title: "Paradon",
      allDay: false,
      start: "2024-03-10T00:00:00",
      end: "2024-03-13T00:00:00",
      color: "blue",
    },
    {
      id: 2,
      user_id: 43,
      title: "Khit",
      start: "2024-03-11T00:00:00",
      end: "2024-03-14T00:00:00",
      color: "red",
    },
    {
      id: 3,
      user_id: 31,
      title: "Thu Ngoc",
      start: "2024-03-12T00:00:00",
      end: "2024-03-15T00:00:00",
      color: "green",
    },
    {
      id: 4,
      user_id: 40,
      title: "Paradon",
      start: "2024-03-17T00:00:00",
      end: "2024-03-20T00:00:00",
      color: "blue",
    },
  ]);

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
        editable={false}
        droppable={true}
        selectable={true}
        selectMirror={true}
        events={events}
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
