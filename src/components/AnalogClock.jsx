import React, { useState, useEffect } from 'react';

const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return time;
};

const AnalogClock = () => {
  const time = useTime();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="analog-clock">
      <div 
        className="hand hour-hand" 
        style={{ transform: `rotateZ(${hourDeg}deg)` }} 
      />
      <div 
        className="hand minute-hand" 
        style={{ transform: `rotateZ(${minuteDeg}deg)` }} 
      />
      <div 
        className="hand second-hand" 
        style={{ transform: `rotateZ(${secondDeg}deg)` }} 
      />
    </div>
  );
};

export default AnalogClock;
