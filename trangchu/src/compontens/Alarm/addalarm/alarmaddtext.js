import { useDispatch, useSelector } from "react-redux";
import * as Actionalarm from "../../../actions/alarm";
function AlarmaddText(props) {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.Alarm.job.text);
  function handleChangeText(e) {
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
      <div className="row Congviec-Texs">
        <textarea
          className="form-control Congviec-Text settext"
          name="text"
          onChange={handleChangeText}
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="hãy gì nội dụng tại đây "
          value={text}
        ></textarea>
      </div>
    </div>
  );
}
export default AlarmaddText;
