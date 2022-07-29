import { Component } from "react";
import Menumobile from "../menu/menumobie";
import { connect } from "react-redux";
import * as actions from '../../../actions/index'
import { withRouter } from "react-router";
import '../../../assets/css/slide.css';
import '../../../assets/css/slide_gird.css';
import Boxemail from "../../../compontens/username/Email/boxemail"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from '../../../router/index';
import MenuPc from "./menupc";
class menu extends Component {
  componentDidMount() {
    if (window.innerWidth > 1023) {
      // đây phải mobile nếu bị mobile chạy cái này ;
      this.props.togglemenumobile();
    }
  }
  hidemenu = () => {
    if (window.innerWidth < 1023) {
      this.props.togglemenumobile();
    }
  }
  render() {
    var { isDisplayMenu, Account } = this.props;
    var verifyEmail = Account.verifyEmail || !Account.Username ? '' : < Boxemail />;
    return (
      <Router>
        <div className="row menu g-0 header ">
          <Menumobile />
          < MenuPc isDisplayMenu={isDisplayMenu} hidemenu={this.hidemenu} />
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
}
const MapStatusToProp = state => {
  return {
    Account: state.Account,
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
