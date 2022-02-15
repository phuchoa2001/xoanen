import {Component} from 'react'; 
import { BrowserRouter as Router, NavLink    } from 'react-router-dom'; 
import Diglog  from '../diglog/index'
import Btn from '../../common/btn';
import {connect} from 'react-redux'
import * as actions from '../../../actions/profile-diglog';
import * as actionsLogin from "../../../actions/login"
import {withRouter} from 'react-router';
class info extends Component{
  isDisplaydiglog = () => {
    this.props.showdiglog();
  }
  logout = () => {
     const {history} = this.props;
     history.push("/")
     this.props.logout();
  }
  render() {
    const {account} = this.props
    const open = this.props.Diglog;
    const avatar = account.avatar ? account.avatar : 
    "";
    const photobeer = account.photobeer ? account.photobeer : 
    "";
  return (
    <Router>
    <div className="app-profile shadow p-3  bg-body rounded col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 ">
    <div className="app-box-profile">
     <div className="app-profile-beerphoto">
      <img className="app-profile-beerphoto-img" src={photobeer} alt="?" />
     </div>
    <div className="app-profile-info">
      <div className="app-profile-info-avatar">
        <div className="app-profile-info-avatar-boximg">
          <img className="app-profile-info-avatar-boximg-img"  src={avatar} alt="?"/>
        </div>
        <Btn to="/profile/updateavatar"
         classname="app-profile-info-avatar-add" 
         classNamei ="fa fa-plus app-profile-info-btn-icon"
         label="Thêm ảnh đại diện"
         click={this.isDisplaydiglog}
        />
      </div>
      <div className="app-profile-info-avatar-username">
       <p>{account.Username}</p>
    </div>
    <div className="app-profile-info-description-box">
      <p className="app-profile-info-description-box-text">
      {account.description}
      </p>
    </div>
    <div className="app-profile-info-description-boxetiontext">
    <NavLink className="app-profile-info-description-text" to="/profile/etiondescription"  onClick={this.isDisplaydiglog}>
     <i className="fa fa-magic app-profile-info-description-text-etiontext" aria-hidden="true">
     </i>
        Viết mô tả bản thân tại đây
    </NavLink>
    </div>
    <div className="app-profile-info-boxbtn">
    <Btn to="/profile/changethepassword"  
     classname="app-profile-info-btn app-profile-info-btn-changepassword " 
     classNamei ="fa fa-key app-profile-info-btn-icon"
     label="Đổi mất khẩu"
     click={this.isDisplaydiglog}
    />
    <Btn to="/profile/updatebeerphoto"  
     classname="app-profile-info-btn app-profile-info-btn-beerphoto-etion" 
     classNamei ="fa fa-camera-retro app-profile-info-btn-icon"
     label="Đổi ảnh bìa"
     click={this.isDisplaydiglog}
     />
    <Btn to="/profile/logout"  
     classname="app-profile-info-btn app-profile-info-btn-logout" 
     classNamei ="fa fa-sign-out app-profile-info-btn-icon"
     label="Đăng xuất"
     click={this.logout}
     />
  </div>
  </div>
  </div>
  {open? <Diglog /> : "" }
  </div>
  </Router>
  );
  }
}
const MapStatusToProps = status => {
  return {
      Diglog : status.Profilerdiglog , 
      account : status.Account
  }
}
const MapDispacthToProps = dispatch => {
  return {
    showdiglog:() => {
      dispatch(actions.onshowisdisplaydiglog())
    } , 
    logout: () => {
      dispatch(actionsLogin.onlogout())
    }
  }
}

export default connect(MapStatusToProps , MapDispacthToProps) (withRouter(info));
