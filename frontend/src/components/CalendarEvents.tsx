"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarEvents = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div></div>
  )
}

export default CalendarEvents