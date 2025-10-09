"use client";

import { time } from 'console';
import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//sample data
const eventData = [
  {
    id: 1,
    title: "Board Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Monthly board meeting to discuss school policies.",
  },
  {
    id: 2,
    title: "Board Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Monthly board meeting to discuss school policies.",
  },
  {
    id: 3,
    title: "Board Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Monthly board meeting to discuss school policies.",
  },
];

const CalendarEvents = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default CalendarEvents