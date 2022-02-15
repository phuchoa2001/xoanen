import "./index.css";
import Item from "../../../commons/blog/item";
import Styles from "./index.module.css";
import { useSelector } from "react-redux";
function Highrank() {
  const Array = useSelector((state) => state.Blog.newpost);
  return (
    <div className="row highrank">
      <div className=" col-12 shadow-sm  bg-body rounded highrank_col">
        <h4 className={Styles.heading}>Tin Hot</h4>
        <div className={Styles.list}>
          {Array.map((data, index) => (
            <Item
              key={index}
              id={data["_id"]}
              classCss={Styles.item}
              title={data.title}
              author={"Đặng Phúc Hòa"}
              time={data.time}
              img={data.img}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Highrank;
