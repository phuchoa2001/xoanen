import { Component } from 'react';
import { connect } from 'react-redux';
import "../../assets/css/loading.css";
import Loadingpage from './Loadingpage';
class Loading extends Component {
  render() {
    const { Loadingpages } = this.props
    const isDisplayLoadingpage = Loadingpages ? <Loadingpage /> : '';
    return (
      <div className="App-Loading">
        <img src={process.env.PUBLIC_URL + '/img/loading.gif'} alt="?" className="App-Login-img" />
        {isDisplayLoadingpage}
      </div>
    );
  }
}
const MapStatusToProp = status => {
  return {
    Loadingpages: status.Loading.Loadingpage
  }
}
export default connect(MapStatusToProp, null)(Loading);
