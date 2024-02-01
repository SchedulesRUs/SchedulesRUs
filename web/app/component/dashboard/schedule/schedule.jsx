"use client";

import React, { useState, useEffect, Fragment} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import DeleteModal from "./deleteModal/deleteModel";
import AddEvent from "./addEvent/addEvent";

const Schedule = () => {
  const [events, setEvents] = useState([
    { id: "1", title: "Paradon" },
    { id: "2", title: "Khang" },
    { id: "3", title: "Felix" },
    { id: "4", title: "Nancy" },
    { id: "5", title: "Sailor"  },
    { id: "6", title: "Khit" }
  ]);

  const [allEvents, setAllEvents] = useState([
    {title: "Paradon",start: "2024-01-31T15:00:00.000Z", end: "2024-01-31T24:00:00.000Z", id: "1", color: "#ff5733"},
    {title: "Khang",start: "2024-02-01T15:00:00.000Z", end: "2024-02-01T18:30:00.000Z", id: "2", color: "#33ff57"},
    {title: "Paradon", start: "2024-02-01T24:00:00.000Z", end: "2024-01-01T05:00:00.000Z", id: "3", color: "#5733ff"},
    {title: "Paradon", start: "2024-02-3T15:00:00.000Z", end: "2024-01-31T24:00:00.000Z", id: "4", color: "#f6e05e"},
  ]);

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

  const handleEventDrop = (info) => {
    const { event } = info;
    const updatedEvent = {
      ...event.toPlainObject(), 
      start: event.start.toISOString(),
      end: event.end ? event.end.toISOString() : null,
    };
    const index = allEvents.findIndex((e) => e.id === updatedEvent.id);
    const updatedEvents = [...allEvents];
    updatedEvents[index] = updatedEvent;

    setAllEvents(updatedEvents);

    console.log('Updated Event:', updatedEvent);

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

    console.log('Resized Event:', resizedEvent);
  };

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          let end = eventEl.getAttribute("end")
          return { title, id, start, end }
        }
      })
    }
  }, [])

  function handleDateClick(arg) {
    setNewEvent({...newEvent,
      start: arg.date, 
      end: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  function addEvent(data) {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33a1", "#a133ff", "#33a1ff", "#f6e05e"];
    
    const event = { ...newEvent, start: data.date.toISOString(), end: data.date.toISOString(), title: data.draggedEl.innerText, allDay: data.allDay, id: new Date().getTime(),color: colors[allEvents.length % colors.length] }
    
    
    setAllEvents([...allEvents, event])
  }


  function handleDeleteModal(data) {
    setShowDeleteModal(true)
    setIdToDelete(Number(data.event.id))
  }

  function handleDelete() {
    setAllEvents(allEvents.filter(event => Number(event.id) !== Number(idToDelete)))
    setShowDeleteModal(false)
    setIdToDelete(null)
  }

  function handleCloseModal() {
    setShowModal(false)
    setNewEvent({
      title: '',
      start: '',
      allDay: false,
      id: 0
    })
    setShowDeleteModal(false)
    setIdToDelete(null)
  }

  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
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
            events={allEvents}
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
          {events.map(event => (
            <div
              className="fc-event border-2 p-1 m-4 w-full text-[14px] rounded-md ml-auto text-center bg-white cursor-pointer"
              title={event.title}
              key={event.id}
            >
              {event.title}
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
