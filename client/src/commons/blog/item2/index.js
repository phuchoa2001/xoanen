import "./index.css";
import Styles from './index.module.css';
import { withRouter } from "react-router";
import clsx from "clsx";
function Item(props) {
  const { title, author, time, img, id, history } = props;
  function handleReadPost() {
    history.push(`/blog/post/${id}`);
  }
  return (
    <div className={clsx(Styles.item, "col-12 col-sm-12 col-xxl-3 col-xl-3 col-lg-4 col-md-4")} onClick={handleReadPost}>
      <div className={Styles.thunk}>
        <img src={img} alt="?" />
      </div>
      <div className={Styles.content}>
        <h3 className={Styles.content_name}>
          {title}
        </h3>
        <div className={Styles.content_author}>
          <p className={Styles.content_author_name}>{author}</p>
          <p className={Styles.content_author_date}>{time}</p>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Item);
