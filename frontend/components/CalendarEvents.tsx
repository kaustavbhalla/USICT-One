"use client";

import { time } from 'console';
import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';
import Image from "next/image"
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
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>
          Events
        </h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>

      <div className='flex flex-col gap-4'>
        {eventData.map(event => (
          <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky-custom even:border-t-purple-custom' key={event.id}>
            <div className='flex items-center justify-between'>
              <h1 className='semibold text-gray-600'>
                {event.title}
              </h1>

              <span className='text-gray-300 text-xs'>
                {event.time}
              </span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarEvents