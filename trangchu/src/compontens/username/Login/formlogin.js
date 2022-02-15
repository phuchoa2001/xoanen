import {Component} from 'react'; 
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../actions/login';
import {withRouter} from 'react-router';
import Messger from '../../common/messger';
class formlogin extends Component{
  constructor (props) {
    super(props);
   this.state = {
    username: '' ,
    password:'' ,
    showpassword: false ,
    StyleMessger : false
   }
  }
  OnShow = (e) => {
    var name = e.target.getAttribute("name");
    var names = this.state.[name]
    this.setState({
      [name] : !names
    })
  }
  onChange = (e) => {
   var target = e.target;
   var name = target.name;
   var value = target.value;
   this.setState({
     [name] : value ,
     StyleMessger : false
   })
  }
  onlogin = (e) => {
     e.preventDefault();
     var obj = {
      username : this.state.username.toLowerCase() ,
      password: this.state.password
     }
     this.setState( {
      StyleMessger: true
    });
     this.props.onLogin(obj);
  }
  render() {
    var {password , username , showpassword} = this.state;
    var { account  } = this.props;
    
    if(account.onmessger) {
      var messger = account.logged ? window.location="/" : 
      <Messger />;
    }
  return (
 <form className="form-login"  onSubmit={this.onlogin}>
    <h1>Hãy Đăng Nhập Tại Đây</h1>
    <div className="messger-verifyemail" style={{ display: this.state.StyleMessger ? "block" : "none" }}>
      {messger}
    </div>
    <div className="messger-login">
    </div>
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Tên đăng nhập & email </label>
     <input 
     type="text" 
     className="form-control" 
     id="exampleInputEmail1" 
     aria-describedby="emailHelp" 
     name="username" 
     value = {username}
     onChange = {this.onChange}
     />
  </div>
   <div className="mb-3">
     <label for="exampleInputPassword1" className="form-label">Mật Khẩu</label>
     <div className="box-password">
    <input 
    type={showpassword ? "text" : "password"}
    className="form-control" 
    id="exampleInputPassword1" 
    name="password" 
    value = {password}
    onChange = {this.onChange}
    />
    <div className="password-box-icon"  name="showpassword"  onClick={this.OnShow} >
     <i className={`${showpassword ? "fa fa-eye-slash" : "fa fa-eye"} password-icon`} name="showpassword" aria-hidden="true"></i>
    </div>
  </div>
  </div>
  <div className="mb-3 form-check">
     <Link  to="/login/registration" className="form-login-btnregistration">Đăng Ký Tại Đây</Link>
  </div>
  <button type="submit" className="btn btn-primary">Đăng Nhập</button>
 </form>
  );
  }
}
const  MapStatusToProps = state => {
  return {
    account: state.Account,
  }
}
const MapDispacthToProps = (dispatch , props) => {
  return{
   onLogin: (login) => {
     dispatch(actions.onlogin(login))
   }
  }
}
export default connect(MapStatusToProps , MapDispacthToProps)(withRouter(formlogin));
