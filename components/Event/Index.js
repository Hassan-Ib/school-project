import React from "react";
import Event from "./Event";
const EventList = ({ events }) => {
  return (
    <ul>
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
