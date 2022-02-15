import { Component } from "react";
import Menumobile from "../menu/menumobie";
import { connect } from "react-redux";
import * as actions from '../../../actions/index'
import Navlinkmenu from "../NavLink/menu";
import { withRouter } from "react-router";
import '../../../assets/css/slide.css';
import '../../../assets/css/slide_gird.css';
import Boxemail from "../../../compontens/username/Email/boxemail"
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import router from '../../../router/index';
const Links = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      return (
        <li className="col-md-12 col-lg-3 col-xl-3 col-xxl-3">
          <NavLink to={to} >{label}</NavLink >
        </li>
      )
    }} />
  )
}
class menu extends Component {
  componentDidMount() {
    if (window.innerWidth > 769) {
      // đây phải mobile nếu bị mobile chạy cái này ;
      this.props.togglemenumobile();
    }
  }
  hidemenu = () => {
    if (window.innerWidth < 769) {
      this.props.togglemenumobile();
    }
  }
  render() {
    var { isDisplayMenu, Account } = this.props;
    var verifyEmail = Account.verifyEmail || !Account.Username  ? '' : < Boxemail />;
    var menupc = isDisplayMenu === true ? <div className="menupc g-0 shadow-sm  bg-body rounded">
      <ul className="submenu" onClick={this.hidemenu}>
        {this.showItemMenu(Navlinkmenu)}
      </ul>
    </div>
      : '';
    return (
      <Router>
        <div className="row menu g-0 header ">
          <Menumobile />
          {menupc}
          {verifyEmail}
          <Switch>
            {this.showRouter(router)}
          </Switch>
        </div>
      </Router>
    );
  }
  showRouter = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((router, index) => {
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.mani}
          />
        )
      })
    }
    return result;
  }
  showItemMenu = (listitem) => {
    var result = null;
    if (listitem.length > 0) {
      result = listitem.map((item, index) => {
        if (item.name === "Đăng Nhập") {
          const { Username } = this.props;
          var Account = Username ? Username : item.name;
          var to = Username ? "/profile" : item.to
        }
        return (
          <Links
            key={index}
            label={Account || item.name}
            to={to || item.to}
            activeOnlyWhenExact={item.exact}
          />
        )
      })
    }
    return result;
  }
}
const MapStatusToProp = state => {
  return {
    Account : state.Account ,
    isDisplayMenu: state.isDisplayMenu,
    Username: state.Account.Username,
  }
}
const mapDispacthToProps = (dispatch, props) => {
  return {
    togglemenumobile: () => {
      dispatch(actions.togglemenumobile());
    }
  }
}
export default connect(MapStatusToProp, mapDispacthToProps)(withRouter(menu));
