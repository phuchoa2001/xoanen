import {Component} from 'react'; 
import Boxbttnform from '../../common/boxbtnform';
import {connect} from 'react-redux';
import * as ActionPFPOST from '../../../actions/profile-post';
import Cookies from '../../../commons/login/cookie';
class etiondescription extends Component{
  state = {
    boxtextarea: ""
  }
  onChange = (e) => {
    var {value} = e.target;
     this.setState({
      boxtextarea : value
     })
  }
  onSubmit = (e) => {
    const {boxtextarea} = this.state
    e.preventDefault();
    const Cookie = Cookies("get");
    this.props.Ondescrpition({
      newdescrpition : boxtextarea , 
      cookies : Cookie
    });
  }
  render() {
    const {description} = this.props.account;
  return (
    <div className="app-profile-diglog-description-box">
    <div className="app-profile-diglog-description">
      <div className="app-profile-diglog-description-boxtext">
         <p className="app-profile-diglog-description-text">Cập nhật mô tả bản thân</p>
      </div>
      {/* chưa có thẻ div */}
      <form className="app-profile-diglog-description-boxtextarea-form" onSubmit={this.onSubmit}>
       <div class="form-floating app-profile-diglog-description-boxtextarea">
       <textarea className="form-control form-floating app-profile-diglog-description-textarea"
        placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={this.onChange}  >
        {description}
       </textarea>
       <label for="floatingTextarea2" className="app-profile-diglog-description-boxtextarea-heading">Sự miêu tả</label>
      </div>
      < Boxbttnform namebutton="Thay đổi Mô tả" />
      </form>
      </div>
      </div>
      
  );
  }
}
const MapStatusToProps = status => {
  return {
     account: status.Account
  }
}
const MapDispacthToProps = dispatch => {
  return {
    Ondescrpition: (text) => {
      dispatch(ActionPFPOST.opupdatDescrpit(text))
    }
  }
}
export default connect(MapStatusToProps , MapDispacthToProps)(etiondescription);
