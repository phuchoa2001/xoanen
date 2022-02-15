import Styles from "./index.module.css";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router";
function Search(props) {
  const [key, setKey] = useState(props.text);
  const { history } = props;
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  }, [key]);
  function handleChange(e) {
    setKey(e.target.value);
  }
  function handleSearch() {
    history.replace(`/blog/search?timkiem=${key}`);
  }
  return (
    <div className={Styles.search}>
      <div className={Styles.boxsearch}>
        <div className={Styles.boxsearch_boxinput}>
          <input
            ref={input}
            type="text"
            className={Styles.boxsearch_input}
            placeholder="Search..."
            value={key || ""}
            onChange={handleChange}
          />
          <div className={Styles.boxsearch_boxicon} onClick={handleSearch}>
            <i
              className={clsx("fa fa-search", Styles.boxsearch_icon)}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Search);
