
import {Component} from 'react'; 
import Boxbttnform from '../../common/boxbtnform';
import {connect} from 'react-redux';
import  {withRouter} from 'react-router';
import * as ActionPFPOST from '../../../actions/profile-post';
import Cookies from '../../../commons/login/cookie';
import convertBase64 from '../../../commons/post/convertbase64';
class updateavatar extends Component{
  state = {
    selectedFire : null ,
    base64 : 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg'
  }
    fileSelectedHandler = async(e) => {
    const file = e.target.files[0];
     const base64 = await  convertBase64(file);
    this.setState({
      selectedFire: file , 
      base64 : base64 ,
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    const Cookie = Cookies("get");
    const {selectedFire} = this.state
    fd.append("avatar", selectedFire);
    fd.append("cookies", Cookie);
    this.props.Onavatar(fd);
  }
  render() {
    const {base64 } = this.state;
    console.log(base64);
  return (
    <div className="app-profile-diglog-updateimg-box">
    <div className="app-profile-diglog-updateimg">
      <div className="app-profile-diglog-updateimg-boxtext">
        <p className="app-profile-diglog-updateimg-text">Cập nhật ảnh đại diện</p>
      </div>
      <div className="app-profile-diglog-updateimg-boxupdate">
      <div className="app-profile-diglog-updateimg-boximg">
        <img className="app-profile-diglog-updateimg-img" src={base64} alt="?" />
        </div>
      </div>
      <div className="app-profile-diglog-updateimg-updatebtn">
        <form className="app-profile-diglog-updateimg-updatebtn-form" onSubmit={this.onSubmit}>
        <label htmlFor="formFileSm" className="app-profile-diglog-updateimg-updatebtn-btn" name="avatar"><i className="fa fa-plus app-profile-diglog-updateimg-updatebtn-btn-icon" aria-hidden="true">
         </i>Thay đổi ảnh đại diện</label>
         <input type="file" className="app-profile-diglog-updateimg-updatebtn-input" id="formFileSm" name="avatar" onChange={this.fileSelectedHandler}  aria-describedby="formFileSm" />
         <Boxbttnform namebutton="Thay đổi ảnh đại diện" />
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
    Onavatar: (fd) => {
      dispatch(ActionPFPOST.opupdateAvatar(fd))
    }
  }
}
export default connect(MapStatusToProps , MapDispacthToProps)(withRouter(updateavatar));
