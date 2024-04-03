//plugin the FullCalendar Library package for creating calendar interface.

"use client";

import React, { useState, useEffect, Fragment, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import DeleteModal from "../deleteModal/deleteModel";
import AddEvent from "../addEvent/addEvent";
import { BASE_URL } from "@/app/constants/Config";

class ScheduleData {
  constructor(userId, title, allDay, color, start, end, hour) {
    this.userId = userId;
    this.title = title;
    this.allDay = allDay;
    this.color = color;
    this.start = start;
    this.end = end;
    this.hour = hour;
  }
}
const Schedule = () => {
  const [allUser, setAllUser] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    allDay: false,
    id: 0,
  });

  const [hourMap, setHourMap] = useState({}); // Mapping between event IDs and hour differences


  async function fetchGetAllUser() {
    try {
      const response = await fetch(`${BASE_URL}/user`);
      const data = await response.json();
      setAllUser(data);
    } catch (error) {
      console.log("Fetching failed", error);
    }
  }

  useEffect(() => {
    fetchGetAllUser();
    console.log("Fetch User:", allUser);
  });

  async function fetchSchedule() {
    try {
      const response = await fetch(`${BASE_URL}/scheduleInfo`);
      const data = await response.json();
      console.log("Fetch Schedule:", data);
      setSchedule(data);
    } catch (error) {
      console.log("fail", error);
    }
  }

  useEffect(() => {
    fetchSchedule();
    // console.log("fetchSchedule", schedule);
  }, []);

  async function updateEventTime(id, start, end, hour) {
    try {
      await fetch(`${BASE_URL}/scheduleInfo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ start, end, hour }),
      });
      console.log("Event resized successfully");
    } catch (error) {
      console.log("Error updating event time:", error);
      throw new Error(`Unable to update event time: ${error.message}`);
    }
  }

  const handleEventDrop = async (info) => {
    const { event } = info;
    const { id, start, end } = event;
  
    try {
      // Calculate hour difference
      const hourDifference = calculateHourDifference(start, end);
      setHourMap({ ...hourMap, [id]: hourDifference });
  
      await updateEventTime(id, start, end, hourDifference);
      await fetchSchedule();
      console.log("Event Dropped with ID:", id, "Start:", start, "End:", end, "Hour:", hourDifference);
    } catch (error) {
      console.error("Error updating event time:", error);
    }
  };

  const handleEventResize = async (info) => {
    const { event } = info;
    const { id, start, end } = event;
  
    try {
      // Calculate hour difference
      const hourDifference = calculateHourDifference(start, end);
      setHourMap({ ...hourMap, [id]: hourDifference });
  
      await updateEventTime(id, start, end, hourDifference);
      await fetchSchedule();
      console.log("Event resized:", id, start, end, "Hour:", hourDifference);
    } catch (error) {
      console.error("Error updating event time:", error);
    }
  };

  const calculateHourDifference = (start, end) => {
    return Math.abs(new Date(end) - new Date(start)) / (1000 * 60 * 60); // milliseconds to hours
  };

  const draggableElRef = useRef(null); // Ref to store the Draggable instance
  useEffect(() => {
    if (!draggableElRef.current) {
      let draggableEl = document.getElementById("draggable-el");
      if (draggableEl) {
        const draggableInstance = new Draggable(draggableEl, {
          itemSelector: ".fc-event",
          eventData: function (eventEl) {
            let title = eventEl.getAttribute("title");
            let userId = eventEl.getAttribute("userId");
            let start = eventEl.getAttribute("start");
            let end = eventEl.getAttribute("end");
            return { title, userId, start, end };
          },
        });
        draggableElRef.current = draggableInstance; // Store the Draggable instance in the ref
        // console.log("Draggable instance created:", draggableInstance);
      }
    } else {
      // console.log("Draggable instance already exists:", draggableElRef.current);
    }
  }, []);

  async function addEvent(data) {
    const colors = ["#ff5733","#33ff57","#5733ff","#ff33a1","#a133ff","#33a1ff","#f6e05e"];
  
    const newScheduleInfo = new ScheduleData();
    newScheduleInfo.allDay = data.allDay;
    newScheduleInfo.color = colors[schedule.length % colors.length];
  
    if (data.date) {
      const startDate = new Date(data.date);
      const endDate = new Date(data.date);
      newScheduleInfo.start = startDate.toISOString();
      newScheduleInfo.end = endDate.toISOString();
      newScheduleInfo.title = data.draggedEl.getAttribute("title");
      newScheduleInfo.userId = data.draggedEl.getAttribute("userId");
      // Calculate hour difference
      const hourDifference = (endDate - startDate) / (1000 * 60 * 60); // milliseconds to hours
      newScheduleInfo.hour = hourDifference;
  
      try {
        const response = await fetch(`${BASE_URL}/scheduleInfo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newScheduleInfo),
        });
        const createdEvent = await response.json();
        setSchedule([...schedule, createdEvent]);
        console.log("Event added:", createdEvent);
      } catch (error) {
        console.error("Error adding event:", error);
      }
    } else {
      newScheduleInfo.start = new Date().toISOString();
      newScheduleInfo.end = new Date().toISOString();
    }
    newScheduleInfo.allDay = data.allDay;
  
    console.log("addEvent:", newScheduleInfo);
  }

  function handleDeleteModal(data) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
    // console.log('handleDeleteModal:', idToDelete);
  }

  async function handleDelete(id) {
    try {
      await fetch(`${BASE_URL}/scheduleInfo/${id}`, {
        method: "DELETE",
      });
      console.log("Staff Deleted ID:", id);
      // Update the local schedule state after deletion
      setSchedule(schedule.filter((event) => event.id !== id));
      setShowDeleteModal(false);
      setIdToDelete(null);
    } catch (error) {
      console.error("Error handling delete:", error);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  const handleChange = (e) => {
    console.log("Add New Event:", e.target.value);
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Add New Event Submit:", newEvent);
    addEvent(newEvent); // Wait for the addEvent function to complete
    setShowModal(false);
    try {
      // Additional actions after submitting the form, if needed
    } catch (error) {
      // Error handling, if needed
    }
  }

  function handleDateClick(arg) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      end: arg.date,
      allDay: arg.allDay,
      id: arg.id,
    });
    setShowModal(true);
  }

  return (
    <>
      <main className="flex flex-col items-center justify-between mb-10">
        <div className="grid grid-cols-10">
          <div className="col-span-8">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "prev,next today",
                center: "title",
                end: "resourceTimelineWook, dayGridMonth,timeGridWeek,listMonth",
              }}
              themeSystem="bootstrap5"
              height={"100vh"}
              events={schedule}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleDeleteModal(data)}
              eventDrop={handleEventDrop}
              eventResize={handleEventResize}
              dayMaxEvents={true}
            />
          </div>

          {/*Staff Members List*/}
          <div
            id="draggable-el"
            className="ml-10 w-[170px] border-2 p-3 rounded-md mt-16 bg-indigo-950"
          >
            <h1 className="font-bold text-lg text-center text-white">
              Staff Members
            </h1>

            {allUser.map((event) => (
              <div
                className="fc-event border-2 p-1 m-4 w-full text-[14px] rounded-md ml-auto text-center bg-white cursor-pointer"
                title={event.username}
                key={event.id}
                username={event.username}
                userid={event.id}
              >
                {event.username}
              </div>
            ))}
          </div>
        </div>
        <DeleteModal
          showModal={showDeleteModal}
          handleDelete={handleDelete}
          handleCloseModal={handleCloseModal}
          idToDelete={idToDelete}
        />
        <AddEvent
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          newEvent={newEvent}
        />
      </main>
    </>
  );
};

export default Schedule;
