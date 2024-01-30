"use client";

import React, { useState, useEffect, Fragment} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import DeleteModal from "./deleteModal/deleteModel";
import AddEvent from "./addEvent/addEvent";

const Schedule = () => {
  const [events, setEvents] = useState([
    { title: "Don | Kitchen", id: "1"},
    { title: "Khang | Server", id: "2" },
    { title: "Felix | Bartender", id: "3" },
    { title: "Nancy | Host", id: "4" },
    { title: "Sailor | Kitchen", id: "5" },
    { title: "Khit | Manager", id: "6" },
  ]);

  const [allEvents, setAllEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          return { title, id, start }
        }
      })
    }
  }, [])

  function handleDateClick(arg) {
    setNewEvent({...newEvent,start: arg.date,allDay: arg.allDay,id: new Date().getTime(),});
    setShowModal(true);
  }

  function addEvent(data) {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33a1", "#a133ff", "#33a1ff", "#f6e05e"];
    
    const event = { ...newEvent, start: data.date.toISOString(), title: data.draggedEl.innerText, allDay: data.allDay, id: new Date().getTime(),color: colors[allEvents.length % colors.length] }
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
            droppable={true}
            selectable={true}
            selectMirror={true}
            dateClick={handleDateClick}
            drop={(data) => addEvent(data)}
            eventClick={(data) => handleDeleteModal(data)}
          />
        </div>
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
