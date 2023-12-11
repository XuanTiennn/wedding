import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Clock from "../clock/clock";
SaveTheDate.propTypes = {};

function SaveTheDate(props) {
  const [seconds, setSeconds] = useState(59);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timerId);
  });
  return (
    <div className="save-the-date">
      <h2 className="font-family text-white font-medium	text-6xl">Save The Date</h2>
      <h4 className="text-white size-30px">-- January 1, 2024 --</h4>
      <div className="block-clock flex justify-content-evenly">
        <Clock time={new Date(1/1/2024)-new Date()} />
        <Clock time={30} />
        <Clock time={22} />
        <Clock time={seconds} />
      </div>
    </div>
  );
}

export default SaveTheDate;
