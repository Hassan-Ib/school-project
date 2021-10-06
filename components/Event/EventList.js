import React from "react";
import Event from "./Index";
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
