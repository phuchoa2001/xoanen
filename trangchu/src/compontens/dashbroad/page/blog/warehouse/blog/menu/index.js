import clsx from "clsx";
import Styles from "./index.module.css";
import { withRouter } from "react-router";
import { useDispatch  } from "react-redux";
import * as Actionsblog from "../../../../../../../actions/blog";
function Menu({ open, OnOpenMenu, id, history  }) {
  const dispatch = useDispatch();
  function handleOpenMenu(e) {
    e.stopPropagation();
    OnOpenMenu(true);
  }
  function handleEdit() {
    dispatch(Actionsblog.getEditBlog(id));
    history.push(`/dashbroad/blog/edit?id=${id}`);
  }
  function hanhleDetele() {
    dispatch(Actionsblog.deleteBlogServer(id));
  }
  return (
    <div className={Styles.menu}>
      <i
        className="fa fa-ellipsis-h"
        aria-hidden="true"
        onClick={handleOpenMenu}
      ></i>
      {open && (
        <ul className={clsx("bg-body rounded shadow-sm", Styles.submenu)}>
          <li className={Styles.item} onClick={hanhleDetele}>
            <p>Xóa bài viết </p>
          </li>
          <li className={Styles.item} onClick={handleEdit}>
            <p>Sửa bài viết</p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default withRouter(Menu);
