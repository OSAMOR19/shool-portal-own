"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const eventTypes = [
    { label: "General Holiday", color: "bg-yellow-100" },
    { label: "School Events", color: "bg-teal-100" },
    { label: "Tests", color: "bg-gray-200" },
    { label: "Exams", color: "bg-purple-100" },
    { label: "School Holidays", color: "bg-red-200" },
  ];

  // Calendar data
  const calendarEvents = [
    {
      id: 1,
      title: "P.T.A Meeting",
      startDate: "2022-11-16",
      endDate: "2022-11-16",
      color: "bg-slate-200",
    },
    {
      id: 2,
      title: "Term Day",
      startDate: "2022-11-07",
      endDate: "2022-11-07",
      color: "bg-gray-300",
    },
    {
      id: 3,
      title: "J.S.S Exams",
      startDate: "2022-11-23",
      endDate: "2022-11-25",
      color: "bg-purple-200",
    },
    {
      id: 4,
      title: "Second Term Break",
      startDate: "2022-11-30",
      endDate: "2022-11-30",
      color: "bg-red-200",
    },
  ];

  const subjects = [
    { title: "English", color: "bg-purple-200" },
    { title: "Civics", color: "bg-purple-200" },
    { title: "Literature", color: "bg-purple-200" },
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      date: "25th December, 2022",
      title: "Christmas Day",
      time: "00:00am - 11:59pm",
    },
    {
      date: "26th December, 2022",
      title: "Boxing Day",
      time: "00:00am - 11:59pm",
    },
    {
      date: "4th January, 2023",
      title: "Third Term Resumes",
      time: "00:00am - 11:59pm",
    },
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const year = 2022;
    const month = 10; // November (0-based)
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-gray-100"></div>
      );
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = `2022-11-${String(day).padStart(2, "0")}`;
      const dayEvents = calendarEvents.filter(
        (event) => currentDate >= event.startDate && currentDate <= event.endDate
      );

      days.push(
        <div
          key={day}
          className="h-24 border border-gray-100 p-1 hover:bg-gray-50 transition-colors"
        >
          <div className="text-sm text-gray-500 mb-1">{day}</div>
          <div className="space-y-1">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`${event.color} text-xs p-1 rounded`}
              >
                {event.title}
              </div>
            ))}
            {currentDate === "2022-11-23" && (
              <div className="space-y-1">
                {subjects.map((subject, idx) => (
                  <div
                    key={idx}
                    className={`${subject.color} text-xs p-1 rounded`}
                  >
                    {subject.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  // Modal component
  const AddEventModal = () => (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="bg-white p-6 max-w-md mx-auto rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">
            Add Events
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Type</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type.label} value={type.label}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm mb-2">Event Name</label>
            <Input placeholder="Enter event name" />
          </div>

          <div>
            <label className="block text-sm mb-2">Event Date</label>
            <Input type="date" value="2022-11-20" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Start Time</label>
              <Input type="time" placeholder="Select start time" />
            </div>
            <div>
              <label className="block text-sm mb-2">End Time</label>
              <Input type="time" placeholder="Select end time" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Description</label>
            <Textarea placeholder="Enter event description" />
          </div>

          <Button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => setIsModalOpen(false)}
          >
            Add Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-72">
          <Button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mb-4"
            onClick={() => setIsModalOpen(true)}
          >
            + Create New Event
          </Button>

          <p className="text-gray-500 text-sm mb-4">
            Drag and drop your event or click in the calendar
          </p>

          <div className="space-y-2">
            {eventTypes.map((type) => (
              <div
                key={type.label}
                className={`p-2 rounded cursor-pointer ${type.color} flex items-center gap-2`}
              >
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                {type.label}
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="mt-8">
            <h2 className="font-semibold mb-2">Upcoming Events</h2>
            <p className="text-gray-500 text-sm mb-4">
              Dont miss scheduled events
            </p>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{event.title}</p>
                    <span className="text-xs text-teal-600">{event.time}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Area */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            {/* Calendar Navigation */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <Button variant="outline">←</Button>
                <Button variant="outline">→</Button>
                <Button variant="outline" className="bg-emerald-500 text-white">
                  Today
                </Button>
              </div>
              <h2 className="text-xl font-semibold">NOVEMBER 2022</h2>
              <div className="flex gap-2">
                <Button variant="outline" className="bg-emerald-500 text-white">
                  Month
                </Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Day</Button>
                <Button variant="outline">List</Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center p-2 text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
              {generateCalendarDays()}
            </div>
          </div>
        </div>
      </div>

      <AddEventModal />
    </div>
  );
};

export default CalendarPage;