import React, { useEffect, useState } from "react";
import "./Test.css"; // external CSS file

const Test = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);

  const handleStart = () => setRunning(true);
  const handleStop = () => {
    setTimer(0);
    setMinutes(0);
    setRunning(false);
  };
  const handlePause = () => setRunning(false);

  useEffect(() => {
    if (running) {
      let sum = setInterval(() => {
        setTimer((e) => {
          if (e === 10) {
            setMinutes((m) => m + 1);
            return 0;
          } else {
            return e + 1;
          }
        });
      }, 100); // set to 1 second instead of 100ms
      return () => clearInterval(sum);
    }
  }, [running]);

  return (
    <div className="timer-container">
      <div className="timer-card">
        <h1 className="title">React Timer</h1>
        <h3 className="time-display">
          {String(minutes).padStart(2, "0")}:{String(timer).padStart(2, "0")}
        </h3>
        <div className="button-group">
          <button className="btn start" onClick={handleStart}>Start</button>
          <button className="btn pause" onClick={handlePause}>Pause</button>
          <button className="btn stop" onClick={handleStop}>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
