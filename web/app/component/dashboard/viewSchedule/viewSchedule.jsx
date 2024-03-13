"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { BASE_URL } from "@/app/constants/Config";

const ViewScheduleOnly = () => {
  const [schedule, setSchedule] = useState([]);

  async function fetchSchedule() {
    try {
      const response = await fetch(`${BASE_URL}/scheduleInfo`);
      const data = await response.json();
      setSchedule(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <div className="mt-5">
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
        events={schedule}
      />
    </div>
  );
};

export default ViewScheduleOnly;
