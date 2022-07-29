
import Slide from "./slide";
import Highrank from "./highrank";
import Listpost from "./listpost";
import "./gird.css";
function Blog() {
  // react-hooks/exhaustive-deps
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
          <Slide />
          <Listpost />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
          <Highrank />
        </div>
      </div>
    </div>
  );
}
export default Blog;
