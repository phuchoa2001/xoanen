import {Component} from 'react';
import Boxbttnform from '../../common/boxbtnform';
import {connect} from 'react-redux';
import  {withRouter} from 'react-router';
import * as ActionPFPOST from '../../../actions/profile-post';
import Cookies from '../../../commons/login/cookie';
class updatebeerphoto extends Component{
  state = {
    selectedFire : null
  }
  fileSelectedHandler = e => {
    this.setState({
      selectedFire: e.target.files[0]
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    const Cookie = Cookies("get");
    const {selectedFire} = this.state;
    console.log(selectedFire);
    fd.append("avatar", selectedFire);
    fd.append("cookies", Cookie);
    this.props.Onbeerphoto(fd);
  }
  render() {
  return (
    <div className="app-profile-diglog-updateimg-box">
    <div className="app-profile-diglog-updateimg">
      <div className="app-profile-diglog-updateimg-boxtext">
        <p className="app-profile-diglog-updateimg-text">Cập nhật ảnh bia</p>
      </div>
      <div className="app-profile-diglog-updateimg-boxupdate">
      <div className="app-profile-diglog-updateimg-boximg">
        <img className="app-profile-diglog-updateimg-img" src="https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg" alt="?" />
        </div>
      </div>
      <div className="app-profile-diglog-updateimg-updatebtn">
        <form className="app-profile-diglog-updateimg-updatebtn-form" onSubmit={this.onSubmit}>
         <label for="formFileSm" className="app-profile-diglog-updateimg-updatebtn-btn"><i className="fa fa-plus app-profile-diglog-updateimg-updatebtn-btn-icon" aria-hidden="true"></i>Thay đổi ảnh bìa</label>
         <input type="file" className="app-profile-diglog-updateimg-updatebtn-input" id="formFileSm" name="img" onChange={this.fileSelectedHandler} />
         <Boxbttnform namebutton="Thay đổi ảnh bia" /> 
         </form>
      </div>
    </div>
    </div>
  );
  }
}
const MapStatusToProps = status => {
  return {
     
  }
}
const MapDispacthToProps = dispatch => {
  return {
    Onbeerphoto: (fd) => {
      dispatch(ActionPFPOST.opupdateBeerPhoto(fd))
    }
  }
}
export default connect(MapStatusToProps , MapDispacthToProps)(withRouter(updatebeerphoto));
