import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actionalarm from "../../../actions/alarm";
function AlrmaddTime(props) {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.Alarm.job);
  const { time, timeselected } = job;
  function beautifyTime(hour, minute, second) {
    dispatch(
      Actionalarm.ChangeJobalarm({
        value: { hour, minute, second },
        name: "time",
      })
    );
  }
  function handleChangeTime(e) {
    const value = e.target.value;
    const name = e.target.name;
    const newTime = {
      ...time,
      [name]: +value,
    };
    dispatch(
      Actionalarm.ChangeJobalarm({
        value: newTime,
        name: "time",
      })
    );
  }
  function handleChange(e) {
    dispatch(Actionalarm.ChangeSelectJobalarm(e.target.value));
    if (e.target.value !== "option") {
      const d = new Date();
      const value = e.target.value;
      let hour = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();
      minutes = minutes + value * 1;
      if (minutes >= 60) {
        hour++;
        minutes = minutes - 60;
      }
      if (hour >= 24) {
        hour -= 24;
      }
      beautifyTime(hour, minutes, seconds);
    }
  }
  return (
    <div className="col-xl-4 col-xl-4 col-xl-12 col-sm-12">
      <div className="row">
        <select
          className="form-select Congviec-time"
          aria-label="Default select example"
          onChange={handleChange}
          value={timeselected}
        >
          <option value="9999">Bấm vào để Báo thức</option>
          <option value="1">1 Phút </option>
          <option value="10">10 Phút </option>
          <option value="30">30 Phút</option>
          <option value="60">60 Phút</option>
          <option value="option">Tùy chọn</option>
        </select>
      </div>
      <div
        className="row Congviec-settime"
        style={{
          display: `${timeselected === "option" ? "flex" : "none"}`,
        }}
      >
        <div className="col">
          <input
            type="text"
            onChange={handleChangeTime}
            name="hour"
            className="form-control sethours"
            placeholder=" Giờ"
            aria-label="gio"
            value={time.hour}
          />
        </div>
        <div className="col">
          <input
            type="text"
            onChange={handleChangeTime}
            name="minute"
            className="form-control setminutes"
            placeholder=" Phút"
            aria-label="phut"
            value={time.minute}
          />
        </div>
        <div className="col">
          <input
            type="text"
            onChange={handleChangeTime}
            name="second"
            className="form-control setseconds"
            placeholder=" Giây"
            aria-label="giay"
            value={time.second}
          />
        </div>
      </div>
    </div>
  );
}
export default AlrmaddTime;
