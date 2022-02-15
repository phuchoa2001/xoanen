import { Component } from 'react';
import '../../../assets/css/post.css';
import '../../../assets/css/post_gird.css';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import Listitem from './listitem';
import * as actions from '../../../actions/profile-diglog';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Diglog from '../diglog/index'
class post extends Component {
  isDisplaydiglog = () => {
    this.props.showdiglog();
  }
  render() {
    const open = this.props.Diglog;
    return (
      <Router>
        <div className=" app-profile-box col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12">
          <div className="row g-0 app-profile-box-createpost  ">
            <div className="shadow-sm p-3 bg-body rounded app-profile-box-text" onClick={this.isDisplaydiglog} >
               <NavLink to="/profile/post" className="app-profile-box-text-link" >Đăng bài</NavLink>
            </div>
            <Listitem />
          </div>
          {open ? <Diglog /> : ""}
        </div>
      </Router>
    );
  }
}
const MapStatusToProps = status => {
  return {
    Diglog: status.Profilerdiglog,
  }
}
const MapDispacthToProps = dispatch => {
  return {
    showdiglog: () => {
      dispatch(actions.onshowisdisplaydiglog())
    },
  }
}
export default connect(MapStatusToProps, MapDispacthToProps)(withRouter(post))
