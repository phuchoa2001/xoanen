import Alrmaddtime from "./alarmaddtime";
import Alrmaddmusic from "./alarmaddmusic";
import AlarmaddText from "./alarmaddtext";
import { useDispatch } from "react-redux";
import * as Actionalarm from "../../../actions/alarm";
function Addalarm(props) {
  const text = "Thêm Công Việc";
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(Actionalarm.Addjobalarm());
  }
  return (
    <div className="row">
      <AlarmaddText />
      <Alrmaddtime />
      <Alrmaddmusic />
      <div className="col-xl-4 col-xl-4 col-xl-12 col-sm-12">
        <div className="row">
          <button
            type="button"
            className="btn btn-secondary Congviec-add"
            onClick={handleClick}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addalarm;
