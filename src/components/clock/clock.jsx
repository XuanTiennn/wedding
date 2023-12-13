import React from "react";
import "./style.css";

Clock.propTypes = {};

function Clock(props) {
  const { time } = props;
  return (
    <div className="clock flex justify-content-center align-items-center font-family">
        <span className="overlay"></span>
      <span className="time">{time}</span>
    </div>
  );
}

export default Clock;
