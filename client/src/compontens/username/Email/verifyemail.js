import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/formlogin.css';
import '../../../assets/css/formlogingirl.css'
import * as actions from '../../../actions/login';
import { connect } from 'react-redux'
import Messger from '../../common/messger'
class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verifySMS: '',
      StyleMessger: false ,
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value ,
      StyleMessger : false
    })
  }
  onverifyEmail = (e) => {
    var { account } = this.props
    var { verifySMS } = this.state;
    var obj = {
      cookies: account.cookies,
      verifySMS: verifySMS
    }
    e.preventDefault();
    this.setState( {
      StyleMessger: true
    });
    this.props.verifyEmail(obj);
  }
  render() {
    var { verifySMS } = this.state;
    var { account } = this.props;
    console.log(account.verifyEmail);
    console.log(account.onmessger);
    if(account.onmessger){
      var messger = account.verifyEmail ? window.location='/' : 
      <Messger />;
    }
    return (
      <div className=" registration-form col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12" >
        <div className="registration-box">
          <form className="form-registration" onSubmit={this.onverifyEmail}>
            <h1>Trang Xác Nhận Email</h1>
            <p>Để xác nhận tài khoản, hãy nhập mã gồm 6 chữ số mà chúng tôi gửi đến:
              <b> {" " + account.Email} </b></p>
            <div className="messger-verifyemail" style={{ display: this.state.StyleMessger ? "block" : "none" }}>
              {messger}
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Nhập Mã Xác Nhận</label>
              <input
                type="text"
                className="form-control"
                placeholder="mã xác nhận có 6 số"
                onChange={this.onChange}
                name="verifySMS"
                maxlength="6"
                value={verifySMS}
              />
            </div>
            <div className="mb-3 form-check">
              <Link to="/login" className="form-login-btnregistration">Đăng Nhập Tại Đây</Link>
            </div>
            <button type="submit" className="btn btn-primary">Xác nhận Mã</button>
          </form>
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    account: state.Account,
  }

}
const MapDispatchToProps = (dispatch, props) => {
  return {
    verifyEmail: (verifyemail) => {
      dispatch(actions.onverifyemailRequets(verifyemail));
    }
  }
}
export default connect(MapStateToProps, MapDispatchToProps)(Registration);
