import Blog from "./blog";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import Styles from "./index.module.css";
import { useEffect } from "react";
import * as Actionsblog from "../../../../../actions/blog";
import { useSelector, useDispatch } from "react-redux";
function Warehouse(props) {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("page");
  const Bloglist = useSelector((state) => state.Blog);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(+name);
  const isDisplayPrevious = pagination === 1 ? false : true;
  const isDisplayPaginations = pagination > 1 ? true : false;
  useEffect(() => {
    dispatch(Actionsblog.requestServer(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    <>
        {Bloglist.List.map((blog , index) => (
          <Blog
            key={index}
            id={blog._id}
            title={blog.title}
            description={blog.description}
            img={blog.img}
            createAt={blog.createAt}
          />
        ))}
      <div className={Styles.boxnav}>
        <nav aria-label="..." className={Styles.nav}>
          <ul className="pagination">
            {isDisplayPrevious && (
              <>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/dashbroad/blog/warehouse?page=1`}
                    onClick={handlePage_Start}
                  >
                    {"<<"}
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link"
                    to={`/dashbroad/blog/warehouse?page=${pagination - 1}`}
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
                  to={`/dashbroad/blog/warehouse?page=${pagination - 1}`}
                  onClick={handlePage}
                >
                  {pagination - 1}
                </Link>
              </li>
            )}
            <li className="page-item active">
              <Link
                className="page-link"
                to={`/dashbroad/blog/warehouse?page=${pagination}`}
                onClick={handlePage}
              >
                {pagination}
              </Link>
            </li>
            <li className="page-item" aria-current="page">
              <Link
                className="page-link"
                to={`/dashbroad/blog/warehouse?page=${pagination + 1}`}
                onClick={handlePage}
              >
                {pagination + 1}
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link"
                to={`/dashbroad/blog/warehouse?page=${pagination + 2}`}
                onClick={handlePage}
              >
                {pagination + 2}
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link"
                to={`/dashbroad/blog/warehouse?page=${pagination + 1}`}
                onClick={handleNext}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Warehouse;
