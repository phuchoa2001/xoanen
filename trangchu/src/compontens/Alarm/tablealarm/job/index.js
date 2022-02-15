import * as Actionalarm from "../../../../actions/alarm";
import { useDispatch } from "react-redux";
function Job(props) {
  const dispatch = useDispatch();
  const { id, time, text, music } = props;
  const Stringtime = `${time.hour}:${time.minute}:${time.second}`;
  function handleClickEtion(e) {
    const id = e.target.id * 1;
    dispatch(Actionalarm.etionjobalarm(id));
  }
  function handleClickDetele(e) {
    const id = e.target.id * 1;
    dispatch(Actionalarm.detelejobalarm(id));
  }
  return (
    <tr key={id}>
      <th scope="row">{id}</th>
      <td>{text}</td>
      <td>{Stringtime}</td>
      <td>{music}</td>
      <td className="row">
        <button
          type="button"
          className="btn btn-primary  btn-sm btn-50 btn-etion"
          id={id}
          onClick={handleClickEtion}
        >
          Chỉnh sữa
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-sm btn-50 btn-delete"
          id={id}
          onClick={handleClickDetele}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
export default Job;
