import React from "react";
import Event from "./Event";
const EventList = ({ events }) => {
  return (
    <ul className="flex flex-col gap-6">
      <li>
        <Event />
      </li>
      <li>
        <Event />
      </li>
    </ul>
  );
};

export default EventList;
