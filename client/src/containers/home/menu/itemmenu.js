import { Component } from "react";
import { BrowserRouter as Router, Link  } from 'react-router-dom'
import { withRouter } from "react-router";
class item extends Component {
  render() {
    return (
      <Router >
        <div className=" col-sm-12 col-lg-6 col-md-6 col-xl-3 col-xxl-3 app-item shadow-sm p-3 mb-5 bg-body rounded">
          <div className="card" Style="width: 18rem;">
            <img src={process.env.PUBLIC_URL + `/img/xoanen.png`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="menu-item-title">{this.props.name}</h5>
              <p className="menu-item-text">{this.props.Context}.</p>
              {/* <a href={this.props.url} className="btn btn-primary">Đến Ứng dụng</a> */}
              <Link to={this.props.url} activeClassName="selected" className="btn btn-primary">
              Đến Ứng dụng</Link >
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default (withRouter(item));
