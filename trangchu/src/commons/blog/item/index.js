import Author from "../author";
import Styles from "./index.module.css";
import TimeAgo from "timeago-react";
import clsx from "clsx";
import { withRouter } from "react-router";
function Item(props) {
  const { title, author, time, img, description , classCss , id , history } = props;
  function handleReadPost() {
    history.push(`/blog/post/${id}`)
  }
  return (
    <div className={clsx(Styles.item , ` ${classCss}`)}  onClick={handleReadPost}>
      <Author author={author} />
      <div className={Styles.item_body}>
        <div className={Styles.item_info}>
          <h3 className={Styles.item_heading}>{title}</h3>
          <p className={Styles.item_context}>{description}</p>
          <p className={Styles.item_date}> <TimeAgo datetime={time} /></p>
        </div>
        <div className={Styles.item_thumb}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
export default withRouter(Item);
