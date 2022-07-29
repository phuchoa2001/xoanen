
import './assets/css/menu.css';
import './assets/css/menu_gird.css';
import { Component } from 'react';
import Menu from './containers/home/menu/Menu';
import { connect } from 'react-redux';
import { BrowserRouter as Router, } from 'react-router-dom'
import Footer from './containers/home/footer/footer';
import * as Actions from './actions/login';
import Loading from './compontens/loading/index';
class App extends Component {
  componentDidMount() {
    this.props.getcookie();
  }
  render() {
    const { isDisplayLoading } = this.props;
    const Loadings = isDisplayLoading ? <Loading /> : '';
    return (
      <Router>
        {Loadings}
        <div className="container ">
          <Menu />
        </div>
        <Footer />
      </Router>
    );
  }
}
const MapStatusToProp = status => {
  return {
    isDisplayLoading: status.Loading.isDisplayLoading
  }
}
const mapDispacthToProps = (dispatch, props) => {
  return {
    getcookie: () => {
      dispatch(Actions.ongetcookie());
    }
  }
}
export default connect(MapStatusToProp, mapDispacthToProps)(App);
