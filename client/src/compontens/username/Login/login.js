import {Component} from 'react'; 
import '../../../assets/css/formlogin.css';
import '../../../assets/css/formlogin_gird.css'
import Slide from '../../common/slide';
import Formlogin from './../Login/formlogin';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'
class login extends Component{
  render() {
    const {Username , history} =  this.props;
    console.log(history)
    if(Username) {
      window.location="/";
    }
  return (
    <div className=" login-form col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12" >
    <div className="login-box">
      <Slide />
      <Formlogin />
    </div>
 </div>
  );
  }
}
const MapStatusToProp = state => {
  return {
    Username:state.Account.Username
  }
}
export default connect(MapStatusToProp , null)(withRouter(login));
