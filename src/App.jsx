import { useState, useEffect, useMemo } from "react";

import NumberDisplay from "./components/NumberDisplay/index";

import styles from "./styles.module.css";
import dayjs from "dayjs";

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function App() {
  const [time, setTime] = useState(Date.now().valueOf());
  const [numberString, setNumberString] = useState("0.123");

  //random
  // useEffect(() => {
  //   setInterval(() => {
  //     setNumberString(getRandomNumber(100, 999).toString());
  //   }, 1000);
  // }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now().valueOf());
    }, 1000);
  }, []);

  const timeStr = useMemo(() => {
    return dayjs(time).format('HH:mm:ss');
  }, [time]);

  return (
    <div className={styles.app}>
      <NumberDisplay numberString={timeStr} />
    </div>
  );
}

export default App;
