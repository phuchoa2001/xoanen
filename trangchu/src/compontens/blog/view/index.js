import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import Author from "../../../commons/blog/author";
function ViewPost({ ListWier }) {
  const { title } = ListWier;
  return (
    <div>
      <h3>{title}</h3>
      <Author author={"Đặng phúc hòa"} />
      {
        <div className="dashbroad_blog_add_view_post">
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
