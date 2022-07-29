import "./index.css";
import { Switch, Route } from "react-router-dom";
import { ModuleDashbroad } from "./module";
import { withRouter, Redirect } from "react-router";
import Links from "./Links";
import { router } from "../dashbroad/router/index";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./gird.css";
function Dashbroad(props) {
  const { id } = props.match.params;
  const [active, setActive] = useState(id);
  const stateAuth = useSelector((state) => state.Auth);
  if (!stateAuth.auth_login) {
     return <Redirect push to="/admin/auth" />;
  }
  return (
    <div className="row g-0">
      <div className="col-12 Sidebar col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
        <div className="Sidebar_memu">
          <ul>{showModule(ModuleDashbroad, active)}</ul>
        </div>
      </div>
      <div className="col-12 page col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
        <Switch>{showRouter(router)}</Switch>
      </div>
    </div>
  );
  function onEvent(active) {
    setActive(active);
  }
  function showRouter(router) {
    var result = null;
    if (router.length > 0) {
      result = router.map((router, index) => {
        return (
          <Route
            key={index}
            path={"/dashbroad" + router.path}
            exact={router.exact}
            component={router.mani}
          />
        );
      });
    }
    return result;
  }
  function showModule(Modules, id) {
    var result = null;
    if (Modules.length > 0) {
      result = Modules.map((module, index) => {
        return (
          <Links
            key={index}
            label={module.module}
            to={module.url}
            arrays={module.array}
            path={module.path}
            id={id}
            icon={module.icon}
            activeOnlyWhenExact={module.activeOnlyWhenExact}
            list={module.list}
            onEvent={onEvent}
          />
        );
      });
    }
    return result;
  }
}
export default withRouter(Dashbroad);
