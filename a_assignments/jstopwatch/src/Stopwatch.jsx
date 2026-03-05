import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // seconds
  const [status, setStatus] = useState("stopped"); 
  // "running" | "paused" | "stopped"

  const intervalRef = useRef(null);

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [status]);

  const handleStart = () => {
    setTime(0);
    setStatus("running");
  };

  const handleStop = () => {
    setStatus("stopped");
    setTime(0);
  };

  const handlePause = () => {
    setStatus("paused");
  };

  const handleResume = () => {
    setStatus("running");
  };

  return (
    <div style={styles.container}>
      <h1>{time} sec</h1>

      <div style={styles.buttons}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause} disabled={status !== "running"}>
          Pause
        </button>
        <button onClick={handleResume} disabled={status !== "paused"}>
          Resume
        </button>
        <button onClick={handleStop}>Stop</button>
      </div>

      <p>Status: {status}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px"
  }
};

export default Stopwatch;