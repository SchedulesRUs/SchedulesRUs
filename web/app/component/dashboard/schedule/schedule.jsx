//plugin the FullCalendar Library package for creating calendar interface.

"use client";

import React, { useState, useEffect, Fragment,useRef} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import DeleteModal from "./deleteModal/deleteModel";
import AddEvent from "./addEvent/addEvent";
import { staffMembers, empScheudule } from "@/app/constants";

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
  const [events, setEvents] = useState(staffMembers);
  const [allEvents, setAllEvents] = useState(empScheudule);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({title: "",start: "",end: "",allDay: false,id: 0,});

  const [schedule, setSchedule] = useState();
  const [scheduleToPost, setScheduleToPost] = useState();

  // Function to update user state
  const updateSchedule = (newSchedule) => {
    setSchedule(newSchedule);

  };

  const [allUser, setAllUser] = useState([]);
  async function fetchGetAllUser() {
    try {
      const response = await fetch(
        `http://localhost:1000/user`
      );
      const data = await response.json();
      console.log("test", data);
      console.dir(data);
      setAllUser(data);
      // return data;
    } catch (error) {
    }
  }
useEffect(() => {
fetchGetAllUser();
console.log("fetchGetAllUser", allUser);

}, []);

  async function fetchSchedule() {
    try {
      const response = await fetch("http://localhost:1000/scheduleInfo");
      const data = await response.json();
      console.log("test", data);
      updateSchedule(data)
  
    } catch (error) {
      console.log("fail", data);
  
    }
  
  }

    
  useEffect(() => {
    fetchSchedule()
    console.log("schedule", schedule);
    }, []);


  async function createSchedule() {
    const requestBody = JSON.stringify(scheduleToPost);
    try {
      const response = await fetch("http://localhost:1000/scheduleInfo/createSchedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: requestBody
      });
      const data = await response.json();
      // setSchedule([...schedule,data])
      console.log("createSchedule", data);
    } catch (error) {
      console.log("createSchedule", data);
    }

  }



  useEffect(() => {
    if(scheduleToPost != null){
      createSchedule() 
      setScheduleToPost(null)
    }
    console.log("createSchedule:schedule", schedule);

  }, [scheduleToPost]);

  const handleEventDrop = (info) => {
    console.log("handleEventDrop", info);

    const { event, revert } = info;

    const isTitleAlreadyExists = schedule.some(
      (e) =>
        e.title == event.title &&
        e.userId == event.userId &&
        (
          (event.start >= e.start && event.start <= e.end) ||
          (event.end && event.end >= e.start && event.end <= e.end)
        )
    );

    if (isTitleAlreadyExists) {
    // If the title already exists on the same date, revert the drop
    revert();
    alert("Event with the same title already exists on this date!");
    return;
  }


    const updatedEvent = {
      ...event.toPlainObject(),
      start: event.start.toISOString(),
      end: event.end ? event.end.toISOString() : null,
    };
    const index = allEvents.findIndex((e) => e.id === updatedEvent.id);
    const updatedEvents = [...allEvents];
    updatedEvents[index] = updatedEvent;

    setAllEvents(updatedEvents);

    console.log("Updated Event:", updatedEvent);
  };

  const handleEventResize = (info) => {
    const { event } = info;
    const resizedEvent = {
      ...event.toPlainObject(),
      start: event.start.toISOString(),
      end: event.end ? event.end.toISOString() : null,
    };
    const index = allEvents.findIndex((e) => e.id === resizedEvent.id);
    const updatedEvents = [...allEvents];
    updatedEvents[index] = resizedEvent;

    setAllEvents(updatedEvents);

    console.log("Resized Event:", resizedEvent);
  };
  const draggableElRef = useRef(null); // Ref to store the Draggable instance


    useEffect(() => {
      if (!draggableElRef.current) {
        let draggableEl = document.getElementById('draggable-el');
        if (draggableEl) {
          const draggableInstance = new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
              let title = eventEl.getAttribute("title")
              let userId = eventEl.getAttribute("userId")
              let start = eventEl.getAttribute("start")
              let end = eventEl.getAttribute("end")
              return { title, userId, start, end }
            }
          });
          draggableElRef.current = draggableInstance; // Store the Draggable instance in the ref
          console.log('Draggable instance created:', draggableInstance);
        }
      } else {
        console.log('Draggable instance already exists:', draggableElRef.current);
      }

    }, [])

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
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33a1", "#a133ff", "#33a1ff", "#f6e05e"];
    const newScheduleInfo = new ScheduleData();
    newScheduleInfo.allDay = data.allDay
    newScheduleInfo.color = colors[allEvents.length % colors.length]
    newScheduleInfo.start = data.date.toISOString()
    newScheduleInfo.end = data.date.toISOString()
    newScheduleInfo.title = data.draggedEl.getAttribute('title')
    newScheduleInfo.userId = data.draggedEl.getAttribute('userId')
    newScheduleInfo.allDay = data.allDay
    console.log('Add Event newSchedule:', newScheduleInfo);
     setScheduleToPost(newScheduleInfo)
    // if add the event on the month the allday => true, otherwise it would be false
    const event = { ...newEvent, start: data.date.toISOString(), end: data.date.toISOString(), title: data.draggedEl.innerText, allDay: data.allDay, id: 1,color: colors[allEvents.length % colors.length] }
    setAllEvents([...allEvents, event])
  }

  function handleDeleteModal(data) {
    setShowDeleteModal(true)
    setIdToDelete(Number(data.event.id))
    // console.log('handleDeleteModal:', idToDelete);

  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
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
    console.log('Add New Event:', e.target.value);

    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Add New Event Submit:', e.target.value);

    setAllEvents([...allEvents, newEvent]);
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
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
            droppable={handleEventDrop}
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
          
          {allUser.map(event => (
            <div
              className="fc-event border-2 p-1 m-4 w-full text-[14px] rounded-md ml-auto text-center bg-white cursor-pointer"
              title={event.username}
              key={event.id}
              username={event.username}
              userId={event.id}        
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
