import { Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
function Links({
  label,
  to,
  arrays,
  path,
  id,
  activeOnlyWhenExact,
  list,
  onEvent,
  icon,
}) {
  function handleClick(e) {
    onEvent(path);
  }
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <li className={path === id ? "active" : ""} onClick={handleClick}>
            <NavLink to={to}>
              <ul className="Sidebar_memu_box-icon">
                <i className={`fa ${icon}`} aria-hidden="true"></i>
                {label}
              </ul>
              {list && <i className="fa fa-sort-desc" aria-hidden="true"></i>}
            </NavLink>
            <ul className="Sidebar_memu_submenu">
              {arrays.length > 0 &&
                arrays.map((array, index) => (
                  <li key={index}>
                    <NavLink to={array.url}>
                      <i className={`fa ${array.icon}`} aria-hidden="true"></i>
                      {array.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </li>
        );
      }}
    />
  );
}
export default withRouter(Links);
