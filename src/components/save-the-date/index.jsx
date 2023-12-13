import React, {useEffect, useState} from "react";
import "./style.css";
import Clock from "../clock/clock";

SaveTheDate.propTypes = {};

function SaveTheDate(props) {
  const [seconds, setSeconds] = useState(59);
  const [time, setTime] = useState(0);
  const defaultTime = {
    days: 30,
    seconds: 59,
    hours: 23,
    minutes: 59
  }
  const backgroundUrl = `${process.env.PUBLIC_URL}/bg1.JPG`;
  console.log("backgroundUrl", backgroundUrl)
  const style = {
    background: `url(${backgroundUrl}) center center/cover no-repeat local`,
    padding: '120px 0',
  };
  useEffect(() => {
    return () => setInterval(updateCountdown, 1000);
  });
  function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date("2024-01-01T00:00:00"); // Thay đổi ngày giờ cần đếm ngược đến

    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const timerId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        setSeconds(59);
      }
    }, 1000);
    if (timeDifference <= 0) {
      clearInterval(timerId);
      document.getElementById("countdown").innerHTML = "Đã hết thời gian!";
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      setTime({
        days: days,
        hours: hours,
        seconds: seconds,
        minutes: minutes
      })
    }
  }
  return (
    <div style={style} >
      <h2 className="font-family text-white font-medium	text-6xl">Save The Date</h2>
      <h4 className="text-white size-30px">-- January 1, 2024 --</h4>
      <div className="block-clock flex justify-content-evenly">
        <Clock time={time?.days} />
        <Clock time={time?.hours} />
        <Clock time={time?.minutes} />
        <Clock time={time?.seconds} />
      </div>
    </div>
  );
}

export default SaveTheDate;
