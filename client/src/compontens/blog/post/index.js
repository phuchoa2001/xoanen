import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import clsx from "clsx";
import * as ActionsBlog from "../../../actions/blog";
import Author from "../../../commons/blog/author";
import Propose from '../Propose';
import Styles from "./index.module.css";
import "./index.css";
function Post({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  //  đổi css textAlign thành justifyContent;
  useEffect(() => {
    const p = document.querySelectorAll(".Blog_post_id p");
    for (let i = 0; i < p.length; i++) {
      const textAlign = p[i].style.textAlign;
      if (textAlign) {
        p[i].style.justifyContent = textAlign;
      }
    }
  })
  useEffect(() => {
    dispatch(ActionsBlog.getPostServer(id));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
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
      <Propose id={id} />
    </div>
  );
}

export default withRouter(Post);
