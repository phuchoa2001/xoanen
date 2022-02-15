import { useLocation } from "react-router-dom";
import { useDispatch  , useSelector} from "react-redux";
import * as ActionsBlog from "../../../actions/blog";
import { useEffect  } from "react";
import Item from "../../../commons/blog/item";
import SearchComponent from "../../../commons/blog/search";
import Styles from "./index.module.css";
function Search(props) {
  const dispatch = useDispatch();
  const search = useLocation().search;
  const Array = useSelector(state => state.Blog.List);
  const searchkey = new URLSearchParams(search).get("timkiem");
  useEffect(() => {
    dispatch(ActionsBlog.SearchBlog(searchkey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <div className="row g-0">
      <div className="col-12 shadow-sm  bg-body rounded ">
        <div className={Styles.boxsearch}>
          <SearchComponent text={searchkey} />
        </div>
        <div className={Styles.list}>
          {Array.length !== 0 ? Array.map((data , index) => (
            <Item
              key={index}
              title={data.title}
              author={"Đặng Phúc Hòa"}
              classCss={Styles.item}
              time={data.createAt}
              img={data.img}
              description={data.description}
            />
          )) : "Không có tin phù hợp văn bản bạn tìm kiếm"}
        </div>
      </div>
    </div>
  );
}

export default Search;
