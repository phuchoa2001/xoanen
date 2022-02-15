import {Component} from 'react'; 
import {connect} from 'react-redux'
class Messger extends Component{
  render() {
   var { account } = this.props;
   this.props.account.onmessger  =  false;
  return (
    <div className="messger-registration messger-registration-changpassword">
       <div className="alert alert-danger" role="alert">{account.messger}</div>
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
    }
  }
export default connect(MapStateToProps, MapDispatchToProps) (Messger);
