import { useEffect, useRef, useState } from "react";
import beautifyTime from "../../../commons/alarm/beautifyTime";
import Item from "./item";
import { useSelector } from "react-redux";
function Tablelarm(props) {
  const [elemt, setElemt] = useState(null);
  const listJob = useSelector((state) => state.Alarm.jobs);
  const id = useRef();
  const startTime = () => {
    id.current = setInterval(() => {
      const d = new Date();
      const hour = d.getHours();
      const minute = d.getMinutes();
      const second = d.getSeconds();
      const StringTime = beautifyTime(hour, minute, second);
      const resultTime = listJob.find(
        (item) =>
          beautifyTime(item.time.hour, item.time.minute, item.time.second) ===
          StringTime
      );
      resultTime &&
        setElemt(() => (
          <Item
            text={resultTime.text}
            time={StringTime}
            music={resultTime.music}
          />
        ));
    }, 1000);
  };
  useEffect(() => {
    startTime();
    return () => {
      clearInterval(id.current);
    };
  });
  return <div className="row result">{elemt}</div>;
}
export default Tablelarm;
