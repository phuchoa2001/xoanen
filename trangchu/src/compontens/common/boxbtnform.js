import {Component} from 'react'; 
import {connect} from 'react-redux'
import * as actions from '../../actions/profile-diglog'
class boxbttnform extends Component{
  hideDiglog = () => {
     this.props.hidediglog();
  }
  render() {
    const {namebutton} = this.props
  return (
    <div className="app-profile-diglog-updateimg-boxbtn"> 
    <button className="app-profile-info-btn app-profile-diglog-updateimg-boxbtn--Success">
     <i className="fa fa-check app-profile-info-btn-icon" aria-hidden="true">
     </i> 
    {namebutton}
    </button>
    <button className="app-profile-info-btn app-profile-info-btn--destroy app-profile-diglog-updateimg-boxbtn--destroy" onClick={this.hideDiglog}>
      <i className="fa fa-times app-profile-info-btn-icon" aria-hidden="true">
      </i> 
      Hủy bỏ
    </button>
    </div>
  );
  }
}
const MapDispatchToProps = dispatch => {
    return {
        hidediglog : () => {
            dispatch(actions.onhideisdisplaydiglog());
        }
    }
}

export default connect(null , MapDispatchToProps)(boxbttnform);
