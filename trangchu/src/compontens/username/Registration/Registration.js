import {Component} from 'react'; 
import { Link} from 'react-router-dom';
import '../../../assets/css/formlogin.css';
import '../../../assets/css/formlogingirl.css';
import checkregtration from '../../../commons/login/checkregtration';
import * as LoginActions from '../../../actions/login';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Messger from '../../common/messger'
class Registration extends Component{
  constructor(props){
    super(props) 
    this.state = {
      Username : '' , 
      Email : '' ,
      Password: '' ,
      checkpassword: '' ,
      checkbox: '',
      messger: '' , 
      showpassword:  false , 
      showcheckpassword: false,
    }
  }
  onChange = (e) => {
    var target = e.target ; 
    var name = target.name; 
    var value =  target.type === "checkbox" ? true : target.value;
    this.setState({
      [name] : value
    })
    var obj = {
      name ,
      value
    }
    const {LoginActions} = this.props ; 
    const {oncheckaccount} = LoginActions;
    oncheckaccount(obj);
    this.props.account.messger  =  '';
    this.props.account.onmessger  =  false;
  }
  OnShow = (e) => { // show mất khẩu 
    var name = e.target.getAttribute("name");
    var names = this.state.[name];
    this.setState({
      [name] : !names
    })
  }
  onRegistration = (e) => {
     var {history} = this.props
      e.preventDefault();
      if(checkregtration({submit:"submit"} , this.state) === null) {

         var {Username , Email , Password} = this.state;
         Username.toLowerCase();
        var obj = {
          Username ,
          Email , 
          Password
        }
        const {LoginActions} = this.props ; 
        const {onregtration} = LoginActions;
        onregtration(obj);
        history.push("/login/Verifyemail")
      }else{
        this.setState({
        })
        this.props.account.messger = checkregtration({submit:"submit"} , this.state) ;
        this.props.account.onmessger  =  true;
      }
  }
  render() {
    var {Username , Email , Password , checkpassword , checkbox  , showpassword , showcheckpassword  } = this.state ;
    var { account , Usernameaccount} = this.props;
    if(Usernameaccount) {
      window.location="/";
    }
    var messger  = account.onmessger  ? < Messger /> : '' ;
  return (
<div className=" registration-form col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12" >
  <div className="registration-box">
  <form className="form-registration" onSubmit={this.onRegistration}>
    <h1>Hãy Đăng Nhập Tại Đây</h1>
     { messger }
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Tên đăng nhập</label>
     <input 
     type="text" 
     className="form-control" 
     aria-describedby="emailHelp" 
     onChange = {this.onChange}
     onBlur = {this.onBlur}
     name="Username"
     value ={Username}
     />
   </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
     <input 
     type="text" 
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp" 
     name="Email"
     onChange={this.onChange}
     onBlur = {this.onBlur}
     value ={Email}
     />
  </div>
   <div className="mb-3">
     <label for="exampleInputPassword1" className="form-label">Mật Khẩu</label>
     <div className="box-password">
    <input 
    type={showpassword ? "text" : "password"}
    className="form-control" 
    id="exampleInputPassword1"
    name="Password"
    onChange = {this.onChange}
    value ={Password}
    />
    <div className="password-box-icon"  name="showpassword"  onClick={this.OnShow} >
     <i className={`${showpassword ? "fa fa-eye-slash" : "fa fa-eye"} password-icon`} name="showpassword" aria-hidden="true"></i>
    </div>
  </div>
  </div>
  <div className="mb-3">
     <label for="exampleInputPassword1" className="form-label">Nhập Lại Mất Khẩu</label>
     <div className="box-checkpassword">
    <input 
    type={showcheckpassword ? "text" : "password"}
    className="form-control" 
    id="exampleInputPassword1" 
    name="checkpassword"
    onChange = {this.onChange}
    onBlur = {this.onBlur}
    value ={checkpassword}
    />
    <div 
    className="checkpassword-box-icon" 
    name="showcheckpassword"
    onClick={this.OnShow}>
    <i className={`${showcheckpassword ? "fa fa-eye-slash" : "fa fa-eye"} password-icon`}  name="showcheckpassword" aria-hidden="true"></i>
    </div>
    </div>
  </div>
  <div className="mb-3 form-check">
    <input 
    type="checkbox" 
    className="form-check-input" 
    name="checkbox"
    id="exampleCheck1" 
    onChange={this.onChange}
    value ={checkbox}
    />
    <label className="form-check-label" for="exampleCheck1">Đồng ý với quy định của chúng tôi</label>
  </div>
  <div className="mb-3 form-check">
    <Link  to="/login" className="form-login-btnregistration">Đăng Nhập Tại Đây</Link>
  </div>
  <button type="submit" className="btn btn-primary">Đăng Ký</button>
 </form>
    </div>
 </div>
  );
  }
}
const MapStateToProps = state => {
  return {
    account : state.Account , 
    Usernameaccount:state.Account.Username
  }
}
const MapDispatchToProps = (dispatch , props) => {
  return{
    LoginActions : bindActionCreators(LoginActions , dispatch)
  }
}
export default connect(MapStateToProps , MapDispatchToProps) (Registration);
