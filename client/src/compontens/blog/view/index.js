import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import Author from "../../../commons/blog/author";
import { useEffect } from "react";
import "./index.css";
function ViewPost({ ListWier }) {
  const { title } = ListWier;
  useEffect(() => {
    const p = document.querySelectorAll(".Blog_post_id p");
    for (let i = 0; i < p.length; i++) {
      const textAlign = p[i].style.textAlign;
      if (textAlign) {
        p[i].style.justifyContent = textAlign
      }
    }
  })
  return (
    <div>
      <h3>{title}</h3>
      <Author author={"Đặng phúc hòa"} />
      {
        <div className="dashbroad_blog_add_view_post Blog_post_id">
          {ReactHtmlParser(ListWier.html)}
        </div>
      }
    </div>
  );
}
const MapStatusToProps = (state) => {
  return {
    ListWier: state.Blog.view,
  };
};
export default connect(MapStatusToProps, null)(ViewPost);
