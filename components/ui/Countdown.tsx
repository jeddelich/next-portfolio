import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const EXPIRY_DATE = new Date("2026-04-02T23:59:59").getTime();

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(0);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 60000) % 60);
  const hours = Math.floor(timeLeft / 3600000);

  useEffect(() => {
    const updateTimeLeft = () => {
      const remaining = Math.max(0, EXPIRY_DATE - Date.now());
      setTimeLeft(remaining);
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {timeLeft > 0 ? (
        <div className={styles.timeLeft}>
          {hours}h {minutes}m {seconds}s
        </div>
      ) : (
        <div className={styles.timeLeft}>Resume</div>
      )}
    </>
  );
}

export default Countdown;
