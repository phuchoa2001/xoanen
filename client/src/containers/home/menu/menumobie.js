import { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../../actions';
import { withRouter } from "react-router";
class menumobile extends Component{
    showMenu = () => {
        this.props.togglemenumobile();
    }
    gohome = () => {
         const {history} = this.props;
         history.push("/");
    }
    render() {
        var {isDisplayMenu} = this.props;
        var iconmobile = isDisplayMenu === false ? "fa fa-bars" : "fa fa-times" ; 
    return (
        <div className=" menumobile">
            <div className="menumobile-logo">
               <h3 onClick={this.gohome}>Xóa Nền</h3>
            </div>
            <div className="menumobile-icon" onClick={this.showMenu} >
            <i className={iconmobile} aria-hidden="true"></i>
            </div>
        </div>
   );
}
}
const MapStatusToProp = status => {
    return{
        isDisplayMenu : status.isDisplayMenu
    }
  }
const mapDispacthToProps = (dispatch , props) => {
    return {
    togglemenumobile:() => {
          dispatch(actions.togglemenumobile());
      }
    }
}
export default connect(MapStatusToProp , mapDispacthToProps)(withRouter(menumobile));
