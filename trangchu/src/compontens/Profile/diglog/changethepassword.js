import {Component} from 'react'; 
import Boxbttnform from '../../common/boxbtnform';
import {connect} from 'react-redux';
import Cookies from '../../../commons/login/cookie';
import * as ActionPFPOST from '../../../actions/profile-post';
import Messger from '../../common/messger'
class changethepassword extends Component{
  state = {
    passwordold : '' ,
    passwordnew : '' , 
    checkpasswordnew : ''
  }
  onChange = (e) => {
    var target = e.target ; 
    var name = target.name; 
    var value = target.value
    this.setState({
      [name] : value
    })
  }
  Submit = (e) => {
    e.preventDefault();
    const state = this.state;
    console.log(state);
    const Cookie = Cookies("get");
    const obj = {
      ...state , 
      cookies : Cookie
    }
   this.props.Onchangepassword(obj);
  }
  render() {
    var { account} = this.props;
    var messger  = account.onmessger  ?  
     <Messger /> : '';
  return (
    <div className="app-profile-diglog-changethepassword-box">
    <div className="app-profile-diglog-changethepassword">
      <div className="app-profile-diglog-changethepassword-boxtext">
        <p className="app-profile-diglog-changethepassword-text">Đổi Mất Khẩu</p>
      </div>
      <div className="app-profile-diglog-changethepassword-boxupdate">
      <div className="app-profile-diglog-changethepassword-boximg">
      <div className="app-profile-diglog-changethepassword-boximg-boxkey">
       <i class="fa fa-key fa-2x app-profile-diglog-changethepassword-boximg-key" aria-hidden="true"></i>
       </div>
      </div>
      </div>
       {messger}
      <div className="app-profile-diglog-changethepassword-form">
          <form onSubmit={this.Submit}>
          <div className="mb-3 app-profile-diglog-changethepassword-form-box">
             <label for="formGroupExampleInput" className="form-label app-profile-diglog-changethepassword-form-inputpassword">Mất Khẩu cũ</label>
             <input type="text" className="form-control" id="formGroupExampleInput" placeholder="nhập mật khẩu cũ" name="passwordold" onChange={this.onChange} />
          </div>
         <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label app-profile-diglog-changethepassword-form-inputnewpassword">Mất khẩu mới</label>
           <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="nhập mật khẩu mới " name="passwordnew" onChange={this.onChange} />
         </div>
         <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label app-profile-diglog-changethepassword-form-inputchecknewpassword">Nhập lại mất khẩu mới</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="nhập lại mất khẩu mới" name="checkpasswordnew" onChange={this.onChange} />
         </div>
         <Boxbttnform namebutton="Thay đổi mật khẩu" />
          </form>
      </div>
    </div>
    </div>
  );
  }
}
const MapStateToProps = state => {
  return {
    account : state.Account , 
  }
}
const MapDispatchToProps = dispatch  => {
  return{
    Onchangepassword: (state) => {
      dispatch(ActionPFPOST.Onchangepassword(state))
    }
  }
}
export default connect(MapStateToProps , MapDispatchToProps)(changethepassword);
