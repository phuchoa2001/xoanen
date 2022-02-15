import { Component } from 'react';
import '../../../assets/css/confirmemail.css';
import '../../../assets/css/confirmemail_gird.css';
import {withRouter} from 'react-router';
import {BrowserRouter as Router , Link} from 'react-router-dom'
class home extends Component {
  history = () => {
    const {history} = this.props;
    history.push("/login/Verifyemail");
  }
  render() { // Báo cho người dung biết nó đã xác Gmail hay chưa
    return (
      <Router>
      <div className="row g-0 shadow-sm  bg-body rounded Box-Confirm-Email">
        <div className="Box-Confirm-Email-box">
          <div className="Box-Confirm-Email-boxtext">
            <h3 className="Box-Confirm-Email-text">
              <i class="fa fa-times-circle  Box-Confirm-Email-text-icon" aria-hidden="true" >
              </i>Email</h3>
          </div>
          <div className="Box-Confirm-Email-boxheading">
            <p className="Box-Confirm-Email-heading">
              <i className="fa fa-envelope Box-Confirm-Email-boxheading-icon" aria-hidden="true">
              </i>
              Bạn chưa xác nhận gmail  hãy<Link to="/login/Verifyemail" onClick={this.history} className="Box-Confirm-Email-heading-link">bấm vào đây để xác nhận Gmail</Link></p>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}
export default withRouter(home);
