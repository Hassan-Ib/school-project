import React from "react";
import PropTypes from "prop-types";
const DateDisplay = ({ date }) => {
  const createdAt = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = createdAt.getFullYear().toString().slice(2);
  const day = createdAt.getDay() - 1;
  const month = createdAt.getUTCMonth();

  const hoursAgo = Math.floor(
    (Date.now() - createdAt.getTime()) / (1000 * 60 * 60)
  );
  const daysAgo = Math.floor(hoursAgo / 24); // hours > 23
  const monthsAgo = Math.floor(daysAgo / 30); // days > 30
  const yearsAgo = Math.floor(monthsAgo / 12); // yearsAgo > 12

  let since = `${hoursAgo} hours ago`;
  //   console.log(" since : ", since);
  // check for days
  if (daysAgo) {
    // days > 0
    since = `${daysAgo} days ago`;
  }
  //check for
  if (monthsAgo) {
    // monthsAgo > 0
    since = `${monthsAgo} days ago`;
  }
  if (yearsAgo) {
    // yearsAgo > 0
    since = `${yearsAgo} days ago`;
  }

  return (
    <time className="opacity-80 hover:opacity-100 transition-all duration-150">
      {months[month]} {day} &apos;{year} ({since})
    </time>
  );
};

export default DateDisplay;

DateDisplay.proptypes = {
  date: PropTypes.string.isRequired,
};
