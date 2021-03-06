import React from "react";
import PropTypes from "prop-types";
const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

const DateDisplay = ({ date }) => {
  // BUG
  // [ ] date note working as it should.
  const createdAt = new Date(date);
  const year = createdAt.getFullYear().toString();
  const day = createdAt.getDate();
  const month = createdAt.getUTCMonth();
  // console.log("current mili sec", Date.now() - createdAt);

  const hoursAgo = Math.floor(
    (Date.now() - createdAt.getTime()) / (1000 * 60 * 60)
  );
  const daysAgo = Math.floor(hoursAgo / 24); // hours > 23
  const monthsAgo = Math.floor(daysAgo / 30); // days > 30
  const yearsAgo = Math.floor(monthsAgo / 12); // yearsAgo > 12

  let since = `less than an hour ago`;
  //check for hours
  if (hoursAgo > 0) {
    since = `${hoursAgo} hours ago`;
  }
  // check for day
  if (daysAgo) {
    since = `${daysAgo} days ago`;
  }
  //check for month
  if (monthsAgo) {
    since = `${monthsAgo} ${monthsAgo < 2 ? "month" : "months"} ago`;
  }
  if (yearsAgo) {
    // yearsAgo > 0
    since = `${yearsAgo} ${monthsAgo < 2 ? "year" : "years"}  ago`;
  }

  return (
    <time className="opacity-80 hover:opacity-100 transition-all duration-150">
      Published, {months[month]} {day} {year}, {since}
    </time>
  );
};

export default DateDisplay;

DateDisplay.proptypes = {
  date: PropTypes.string.isRequired,
};
