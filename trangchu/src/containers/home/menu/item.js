import { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from "react-router";
class item extends Component {
  handleNextpage = () => {
    const { history, url, Goverment } = this.props;
    console.log(url, Goverment);
    Goverment ? history.push(url) : window.location = url
  }
  render() {
    return (
      <Router>
        <div className=" col-sm-12 col-lg-6 col-md-6 col-xl-3 col-xxl-3 app-item shadow-sm p-3 bg-body rounded" id="p-3">
          <div className="card" style={{ width:"18rem"}}>
            <img src={process.env.PUBLIC_URL + this.props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="menu-item-title">{this.props.name}</h5>
              <p className="menu-item-text">{this.props.Context}.</p>
              <button className="btn btn-primary" onClick={this.handleNextpage}>
                Đến Ứng dụng
              </button >
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default (withRouter(item));
