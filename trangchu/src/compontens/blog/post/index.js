import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import clsx from "clsx";
import * as ActionsBlog from "../../../actions/blog";
import Author from "../../../commons/blog/author";
import Styles from "./index.module.css";
import "./index.css";
function Post({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  useEffect(() => {
    dispatch(ActionsBlog.getPostServer(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ListPost = useSelector((state) => state.Blog.view);
  return (
    <div className={clsx(Styles.box, "Blog_post_id")}>
      <h3>{ListPost.title}</h3>
      <Author author={"Đặng phúc hòa"} />
      {
        <div className="dashbroad_blog_add_view_post">
          {ReactHtmlParser(ListPost.html)}
        </div>
      }
    </div>
  );
}

export default withRouter(Post);
