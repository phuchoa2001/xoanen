import { useSelector } from "react-redux";
import Job from "./job";
function Tablelarm(props) {
  const ListJobs = useSelector((state) => state.Alarm.jobs);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nội Dung</th>
            <th scope="col">Thời Gian</th>
            <th scope="col">Nhạc Chuông</th>
            <th scope="col" className="th-etion">
              Chỉnh sữa
            </th>
          </tr>
        </thead>
        <tbody className="list-table">
          {ListJobs.map((job, index) => (
            <Job
              key={index}
              id={index}
              time={job.time}
              text={job.text}
              music={job.music}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tablelarm;
