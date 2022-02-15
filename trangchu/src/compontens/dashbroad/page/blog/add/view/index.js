
import ReactHtmlParser from "react-html-parser";
import Author from "../../../../../../commons/blog/author";
function View({post}) {
  return (
    <div className="dashbroad_blog_add_view">
      <div className="dashbroad_blog_add_view_content">
        <h3 className="dashbroad_blog_add_view_heading">{post.title}</h3>
        <div className="dashbroad_blog_add_view_author">
          <Author author={"Đặng phúc hòa"} />
        </div>
        {
          <div className="dashbroad_blog_add_view_post">
            {ReactHtmlParser(
              post.html
            )}
          </div>
        }
      </div>
    </div>
  );
}
export default View;
