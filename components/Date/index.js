import React from "react";
import PropTypes from "prop-types";
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

const DateDisplay = ({ date }) => {
  // BUG
  // [ ] date note working as it should.
  const createdAt = new Date(date);
  const year = createdAt.getFullYear().toString().slice(2);
  const day = createdAt.getDate();
  const month = createdAt.getUTCMonth();
  // console.log("current mili sec", Date.now() - createdAt);
  console.log(day, month);

  const hoursAgo = Math.floor(
    (Date.now() - createdAt.getTime()) / (1000 * 60 * 60)
  );
  const daysAgo = Math.floor(hoursAgo / 24); // hours > 23
  const monthsAgo = Math.floor(daysAgo / 30); // days > 30
  const yearsAgo = Math.floor(monthsAgo / 12); // yearsAgo > 12

  let since = `${hoursAgo} hours ago`;
  // check for days
  if (daysAgo) {
    since = `${daysAgo} days ago`;
  }
  //check for
  if (monthsAgo) {
    since = `${monthsAgo} ${monthsAgo < 2 ? "month" : "months"} ago`;
  }
  if (yearsAgo) {
    // yearsAgo > 0
    since = `${yearsAgo} ${monthsAgo < 2 ? "year" : "years"}  ago`;
  }
  // console.log("since", since);

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
