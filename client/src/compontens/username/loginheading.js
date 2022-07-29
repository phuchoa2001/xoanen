import {Component} from 'react'; 
import img from '../../assets/img/anhnenfullstack.jpg'
class Loginheading extends Component{
  render() {
  return (
    <div className="login-img-heading">
    <img src={img} alt="?" className="login-img-heading-background" />
    <div className="login-img-heading-box">
    <p className="login-img-heading-text">
      <strong>HEllO YOU !</strong>
      </p>
      <p className="login-img-heading-content"><small>Chào mừng bạn đến với
        <span className="img-heading-light"> đăng nhập </span>
          .. Hãy đăng nhập để trải nghiệm <span className="img-heading-light" > 
      tốt nhất.. </span> </small></p>
      <button type="button" className="btn btn-link img-heading-start ">Hãy nhập vào đây để bắt đầu</button>
    </div>
    </div>
  );
  }
}

export default Loginheading;
