import {Component} from 'react'; 
import "../../assets/css/loading.css";
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import * as ActionLoading from '../../actions/Loading'
class Loadingpage extends Component{
  render() {
      const {href , history , HideLoading} = this.props;
      history.push(href);
      HideLoading();
  return (
     <div>

    </div>
  );
  }
}
const MapStatusToProp = status => {
    return{
        href : status.Loading.href
    }
}
const mapDispacthToProps = (dispatch , props) => {
    return {
        HideLoading : () => {
            dispatch(ActionLoading.HideLoadingPage());
        }
    }
}
export default connect(MapStatusToProp , mapDispacthToProps)(withRouter(Loadingpage));
