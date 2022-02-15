import {Component} from 'react'; 
class item extends Component{
  render() {
  return (
    <div className="app-profile-box-item">
           <div className="app-profile-box-item-box-account">
            <div className="app-profile-box-item-box-username">
              <div className="app-profile-box-item-box-username-boximg">
                <img className="app-profile-box-item-box-username-img" src="/avatar" alt="" />
              </div>
              <div className="app-profile-box-item-box-username-BoxHeading">
              <div className="app-profile-box-item-box-username-Heading">
                <h3 className="app-profile-box-item-box-username-Heading-name" >Username</h3>
              </div>
              <div className="app-profile-box-item-box-username-BoxTime">
                <p className="app-profile-box-item-box-username-Time">Time</p>
              </div>
              </div>
            </div>
             <div className="app-profile-box-item-box-menu">
               <i className="fa fa-ellipsis-h app-profile-box-item-box-menu-icon" aria-hidden="true"></i>
               <div className="app-profile-box-item-boxsubmenu">
                 <ul className="app-profile-box-item-box-submenu shadow p-3 bg-body rounded">
                   <li className="app-profile-box-item-box-submenu-item">
                     <p className="app-profile-box-item-box-submenu-item-text">
                       Sữa bài Viết
                     </p>
                     <i className="fa fa-pencil-square-o fa app-profile-box-item-box-submenu-item-icon" aria-hidden="true"></i>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="app-profile-box-item-box-menu-content">
              <div className="app-profile-box-item-box-menu-content-heading">
              <p className="app-profile-box-item-box-menu-content-heading-text">
              Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển
              . Nó cung cấp giao diện trang web,
              ứng dụng trên thiết bị di động cho hệ điều hành Android và 
              iOS và giao diện lập trình ứng dụng giúp nhà phát
              </p>
              </div>
              <div className="app-profile-box-item-box-menu-content-boximage">
                <img className="app-profile-box-item-box-menu-content-image" 
                src="https://i.pinimg.com/236x/86/56/05/865605cf3da783aabb0fc55705b4638d.jpg" alt="?" />
              </div>
           </div>
           <div className="app-profile-box-item-box-menu-bar">
              <div className="app-profile-box-item-box-menu-bar-like app-profile-box-item-box-menu-bar-like-border">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span className="app-profile-box-item-box-menu-bar-like-stt">0</span>
                <p>Like</p>
              </div>
              <div className="app-profile-box-item-box-menu-bar-comment">
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <p><span className="app-profile-box-item-box-menu-bar-comment-stt">0</span>Comment</p>
              </div>
           </div>
           <div className="app-profile-box-item-box-comment">
            <div className="app-profile-box-item-box-comment-item">
             <div className="app-profile-box-item-box-comment-avatar">

             </div>
             <div className="app-profile-box-item-box-comment-bar-create">
               <div className="app-profile-box-item-box-comment-bar-create-user">
                <div className="app-profile-box-item-box-comment-bar-create-user-name">
                 Username
                </div>
                <div className="app-profile-box-item-box-comment-bar-create-text">
                kỹ thuật dữ liệu cũng giống như này luôn hả anh
                </div>
               </div>
               <div className="app-profile-box-item-box-comment-bar-create-menu">
                <i className="fa fa-ellipsis-h app-profile-box-item-box-comment-bar-create-menu-icon" aria-hidden="true"></i>
                <div className="app-profile-box-item-box-comment-bar-create-menu-boxsubmenu">
                  <ul className="app-profile-box-item-box-comment-bar-create-menu-submenu shadow p-3 bg-body rounded">
                    <li className="app-profile-box-item-box-comment-bar-create-menu-submenu-item">
                      <p className="app-profile-box-item-box-comment-bar-create-menu-submenu-item-text">Sữa Binh luận </p>
                       <i className="fa fa-pencil-square-o fa app-profile-box-item-box-comment-bar-create-menu-submenu-item-icon" aria-hidden="true"></i>
                    </li>
                    <li className="app-profile-box-item-box-comment-bar-create-menu-submenu-item">
                      <p className="app-profile-box-item-box-comment-bar-create-menu-submenu-item-text">Xóa binh luận</p>
                       <i className="fa fa-trash fa app-profile-box-item-box-comment-bar-create-menu-submenu-item-icon" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
               </div>
             </div>
             </div>
             {/* Dưới chat */}
             <div className="app-profile-box-item-boxcreate-comment-item">
             <div className="app-profile-box-item-boxcreate-comment-avatar">

             </div>
             <div className="app-profile-box-item-boxcreate-comment-bar-create">
               <input className="app-profile-box-item-boxcreate-comment-bar-create-input" 
               placeholder="Viết Binh luận tại đây" />
             </div>
             </div>
             <div className="app-profile-box-item-boxcreate-comment-add">
                <h3 className="app-profile-box-item-boxcreate-comment-add-text">Xem Thêm Binh Luận</h3>
             </div>
          </div>
         </div>
  );
  }
}

export default item;
