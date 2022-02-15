import clsx from "clsx";
import TimeAgo from "timeago-react";
import Styles from "./index.module.css";
import Menu from "./menu";
import { useState } from "react";
import { withRouter } from "react-router";
function Blog({ title, description, img, createAt , id  , history }) {
  const [open, setOpen] = useState(false);
  function handleCloseMenu() {
    setOpen(false);
  }
  function handleOpenMenu() {
    setOpen((prev) => !prev);
  }
  function handleRedirect() {
    history.push(`/blog/post/${id}`)
  }
  return (
    <div className={clsx("col-12", Styles.post)} onClick={handleCloseMenu}>
      <div className={clsx("bg-body rounded", Styles.rounded)}>
        <div className={Styles.boximg} onClick={handleRedirect}>
          <img
            src={img !== "" ? img : "/img/blog/blog.png"}
            className={Styles.img}
            alt="img"
          />
        </div>
        <div className={Styles.content}>
          <div className={Styles.bar}>
            <h3 className={Styles.title}>{title}</h3>
            <Menu open={open} OnOpenMenu={handleOpenMenu} id={id} />
          </div>
          <div className={Styles.time}>
            <p className={Styles.author}>tác giả : Đặng phúc hòa</p>
            <p className={Styles.date}>
              <TimeAgo datetime={createAt} />
            </p>
          </div>
          <p className={Styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Blog);
