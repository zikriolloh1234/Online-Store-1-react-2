import React, { useState, useEffect } from "react";

const Countdown = () => {
  // 👉 Укажи дату, до которой идёт отсчёт
  const targetDate = new Date("2025-09-30T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign:"center", display: "flex", gap: "20px", fontFamily: "sans-serif" }}>
      <div>
        <p>Days</p>
        <h2>{timeLeft.days}</h2>
      </div>
      <span style={{ color: "red", fontSize:"25px", marginTop:"50px" }}>:</span>
      <div>
        <p>Hours</p>
        <h2>{timeLeft.hours}</h2>
      </div>
      <span style={{ color: "red", fontSize:"25px", marginTop:"50px" }}>:</span>
      <div>
        <p>Minutes</p>
        <h2>{timeLeft.minutes}</h2>
      </div>
      <span style={{ color: "red",fontSize:"25px", marginTop:"50px" }}>:</span>
      <div>
        <p>Seconds</p>
        <h2>{timeLeft.seconds}</h2>
      </div>
    </div>

    
  );
};

export default Countdown;
