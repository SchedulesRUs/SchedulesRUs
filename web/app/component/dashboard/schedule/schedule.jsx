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

class ScheduleData {
  constructor(userId, title, allDay, color, start, end) {
    this.userId = userId;
    this.title = title;
    this.allDay = allDay;
    this.color = color;
    this.start = start;
    this.end = end;
  }
}
const Schedule = () => {
  const [allUser, setAllUser] = useState([]);

  const [schedule, setSchedule] = useState([]);
  const [scheduleToPost, setScheduleToPost] = useState();

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

  async function fetchGetAllUser() {
    try {
      const response = await fetch(`https://schedules-r-us-78b737cd078f.herokuapp.com/user`);
      const data = await response.json();
      // console.log("test", data);
      // console.dir(data);
      setAllUser(data);
      // return data;
    } catch (error) {}
  }

  useEffect(() => {
    fetchGetAllUser();
    console.log("Fetch User:", allUser);
  }, []);

  async function fetchSchedule() {
    try {
      const response = await fetch("https://schedules-r-us-78b737cd078f.herokuapp.com/scheduleInfo");
      const data = await response.json();
      console.log("Fetch Schedule:", data);
      setSchedule(data);
    } catch (error) {
      console.log("fail", error);
    }
  }

  // async function getScheduleById(id) {
  //   try {
  //     const response = await fetch(`http://localhost:1000/scheduleInfo/${id}`);
  //     const data = await response.json();
  //     console.log("Fetch Schedule by ID:", data);
  //     setSchedule(data);
  //   } catch (error) {
  //     console.log("fail", error);
  //   }
  // }

  useEffect(() => {
    fetchSchedule();
    // console.log("fetchSchedule", schedule);
  }, []);

  async function createSchedule() {
    const requestBody = JSON.stringify(scheduleToPost);
    try {
      const response = await fetch("https://schedules-r-us-78b737cd078f.herokuapp.com/scheduleInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      const data = await response.json();
      setSchedule([...schedule, data])

      console.log("Add Schedule to DB:", data);
    } catch (error) {
      console.log("Add Schedule to DB:", error);
    }
  }

  useEffect(() => {
    if (scheduleToPost != null) {
      createSchedule();
      setScheduleToPost(null);
    }
    // console.log("createSchedule:schedule", schedule);
  }, [scheduleToPost]);

  async function updateEventTime(id, start, end) {
    console.log(id, start, end);
    try {
      await fetch(`https://schedules-r-us-78b737cd078f.herokuapp.com/scheduleInfo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ start, end }),
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
      await updateEventTime(id, start, end);
      console.log("Event Dropped with ID:", id, "Start:", start, "End:", end);
    } catch (error) {
      console.error("Error updating event time:", error);
    }
  };

  const handleEventResize = async (info) => {
    const { event } = info;
    const { id, start, end } = event;

    try {
      await updateEventTime(id, start, end);
      console.log("Event resized:", id, start, end);
    } catch (error) {
      console.error("Error updating event time:", error);
    }
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

  function handleDateClick(arg) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      end: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  function addEvent(data) {
    const colors = [
      "#ff5733",
      "#33ff57",
      "#5733ff",
      "#ff33a1",
      "#a133ff",
      "#33a1ff",
      "#f6e05e",
    ];
    const newScheduleInfo = new ScheduleData();
    newScheduleInfo.allDay = data.allDay;
    newScheduleInfo.color = colors[schedule.length % colors.length];
    newScheduleInfo.start = data.date.toISOString();
    newScheduleInfo.end = data.date.toISOString();
    newScheduleInfo.title = data.draggedEl.getAttribute("title");
    newScheduleInfo.userId = data.draggedEl.getAttribute("userId");
    newScheduleInfo.allDay = data.allDay;
    console.log("addEvent:", newScheduleInfo);
    setScheduleToPost(newScheduleInfo);
    

  }

  function handleDeleteModal(data) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
    // console.log('handleDeleteModal:', idToDelete);
  }

  async function handleDelete(id) {
    try {
      await fetch(`https://schedules-r-us-78b737cd078f.herokuapp.com/scheduleInfo/${id}`, {
        method: "DELETE",
      });
      console.log("Event deleted:", id);
      // Update the local schedule state after deletion
      setSchedule(schedule.filter(event => event.id !== id));
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
    console.log("Add New Event Submit:", e.target.value);
    setSchedule([...schedule, newEvent]);
    setShowModal(false);
    try {
    } catch (error) {}
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
