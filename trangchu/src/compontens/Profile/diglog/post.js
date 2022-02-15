import { Component } from 'react';
import Boxbttnform from '../../common/boxbtnform';
class post extends Component {
  render() {
    return (
      <div className="app-profile-diglog-post-box">
        <div className="app-profile-diglog-post">
          <div className="app-profile-diglog-post-boxtext">
            <p className="app-profile-diglog-post-text">Đăng Bài</p>
          </div>
          <div className="app-profile-diglog-post-updatebtn">
            <form className="app-profile-diglog-post-updatebtn-form" onSubmit={this.onSubmit}>
              <textarea className="form-control form-floating app-profile-diglog-post-textarea"
                placeholder="hãy ghi nội dung tại đây" id="floatingTextarea2" style={{ height: "180px" }} onChange={this.onChange}  >
              </textarea>
              <div className="app-profile-diglog-post-updatebtn-form-file">
                <div className="app-profile-diglog-post-updatebtn-form-file-listimg">

                </div>
                <label for="formFileSm" className="app-profile-diglog-updateimg-post-btn">
                  <i className="fa fa-plus app-profile-diglog-updateimg-post-btn-icon" aria-hidden="true">
                  </i>
                  Thay đổi ảnh bìa
                </label>
                <input type="file" className="app-profile-diglog-updateimg-post-input" id="formFileSm" name="img"></input>
                <label for="cars" className="app-profile-diglog-updateimg-post-select">Bài viết đăng :</label>
                <select name="cars" id="cars">
                  <option value="volvo">Công khai</option>
                  <option value="saab">Không Công khai</option>
                </select>
              </div>
              <Boxbttnform namebutton="Đăng Bài" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default post;
