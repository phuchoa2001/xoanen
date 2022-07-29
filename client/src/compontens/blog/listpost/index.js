import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Item from "../../../commons/blog/item2";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Search from "../../../commons/blog/search";
import * as ActionBlog from "../../../actions/blog";
import { useState } from "react";
function Listpost(props) {
  const List = useSelector(state => state.Blog.List)
  const { page } = props.match.params;
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(+page);
  const isDisplayPrevious = pagination === 1 ? false : true;
  const isDisplayPaginations = pagination > 1 ? true : false;
  useEffect(() => {
    dispatch(ActionBlog.requestServer(page));
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps
  function handlePage_Start() {
    setPagination(1);
  }
  function handlePage(e) {
    const page = +e.target.innerHTML;
    setPagination(page);
  }
  function handlePrevious() {
    setPagination((prev) => prev - 1);
  }
  function handleNext() {
    setPagination((prev) => prev + 1);
  }
  return (
    <div className="col shadow-sm  bg-body rounded pagination_list ">
      <h4>
        <i
          className="fa fa-asterisk pagination_list_icon"
          aria-hidden="true"
        ></i>
        Tin mới Trang {pagination}
      </h4>
      <Search />
      <div className="listpost">
        <div className="row">
          {List.length !== 0 ? List.map((item, index) => (
            <Item
              key={index}
              id={item["_id"]}
              title={item.title}
              author={"Đặng Phúc Hòa"}
              time={item.time}
              img={item.img}
            />
          )) : <p>Kho của chúng tôi chưa cập nhật thêm</p>}
        </div>
        <nav aria-label="...">
          <ul className="pagination">
            {isDisplayPrevious && (
              <>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/blog/page/1`}
                    onClick={handlePage_Start}
                  >
                    {"<<"}
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/blog/page/${pagination - 1}`}
                    onClick={handlePrevious}
                  >
                    {"<"}
                  </Link>
                </li>
              </>
            )}
            {isDisplayPaginations && (
              <li className="page-item">
                <Link
                  className="page-link"
                  to={`/blog/page/${pagination - 1}`}
                  onClick={handlePage}
                >
                  {pagination - 1}
                </Link>
              </li>
            )}
            <li className="page-item active">
              <Link
                className="page-link"
                to={`/blog/page/${pagination}`}
                onClick={handlePage}
              >
                {pagination}
              </Link>
            </li>
            <li className="page-item" aria-current="page">
              <Link
                className="page-link"
                to={`/blog/page/${pagination + 1}`}
                onClick={handlePage}
              >
                {pagination + 1}
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link"
                to={`/blog/page/${pagination + 2}`}
                onClick={handlePage}
              >
                {pagination + 2}
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link"
                to={`/blog/page/${pagination + 1}`}
                onClick={handleNext}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default withRouter(Listpost);
