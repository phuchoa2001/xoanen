import {Component} from 'react'; 
import { BrowserRouter as Router  , NavLink} from 'react-router-dom'; 

class btn extends Component{
  render() {
    const {to , classname ,  classNamei , label} = this.props
  return (
    <Router>
    <NavLink to={to} className={classname} onClick={this.props.click}>
    <i className={classNamei} aria-hidden="true"  >
    </i>
    {label}
    </NavLink>
    </Router>
  );
  }
}

export default btn;


// to // classname / class i /// label // 
