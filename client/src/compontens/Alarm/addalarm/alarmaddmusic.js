import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actionalarm from "../../../actions/alarm";
function Alarmaddmusic(props) {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.Alarm.job.music);
  const audio = useRef();
  useEffect(() => {
    audio.current.src = `/music/${music}`;
  }, [music]);
  function handleChange(e) {
    const { value, name } = e.target;
    dispatch(
      Actionalarm.ChangeJobalarm({
        value,
        name,
      })
    );
  }
  return (
    <div className="col-xl-4 col-xl-4 col-xl-12 col-sm-12">
      <div className="row">
        <select
          className="form-select Congviec-music"
          aria-label="Default select example"
          name="music"
          onChange={handleChange}
          value={music}
        >
          <option value="">Cài Đặt Nhạc Chuông</option>
          <option value="music1.mp3">Nhạc Chuông 1</option>
          <option value="music2.mp3">Nhạc Chuông 2</option>
          <option value="music3.mp3">Nhạc Chuông 3</option>
        </select>
      </div>
      <div
        className="row Congviec-setmusic"
        style={{ display: `${music ? "block" : "none"}` }}
      >
        <div className="music-set">
          <audio controls ref={audio}>
            <source src={`/music/`} />
          </audio>
        </div>
      </div>
    </div>
  );
}
export default Alarmaddmusic;
