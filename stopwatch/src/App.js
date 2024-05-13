import { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);


  const intervalRef = useRef(null);
  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let timePassed = (time - now)/1000;

  return (
    <div className="App">
      <h1>StopWatch</h1>
      <h2>Stopwatch: {timePassed.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
