import {Component} from 'react'; 
import {connect} from 'react-redux'
import * as LoginActions from '../../../actions/login'
import { bindActionCreators } from 'redux';
class confirmEmail extends Component{
    componentDidMount() { // xác nhận Email bằng Link 
        console.log(this.props.match.params.slot)
        const {onconfirmEmail} = this.props ; 
        const {onconfirmEmailLink} = onconfirmEmail;
        onconfirmEmailLink(this.props.match.params.slot);
    }
  render() {
    var { account } = this.props;
    if(account.onmessger) {
      var messger = account.verifyEmail ?  window.location="/" : 
      <div className="alert alert-danger" role="alert">{account.messger}</div>;
    }
  return (
    <div className="confirm-form col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
      <div className="messger-verifyemail" >
         {messger}
       </div>
       <h3>Chào mừng bạn đã Liên kết tài Khoản Tự động</h3>
    </div>
  );
  }
}
const MapStateToProps = state => {
    return {
        account: state.Account,
    }
}
const MapDispatchToProps = dispatch => {
    return{
      onconfirmEmail : bindActionCreators(LoginActions , dispatch)
    }
}
export default connect(MapStateToProps , MapDispatchToProps )(confirmEmail);
