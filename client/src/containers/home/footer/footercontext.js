import { Component } from "react";
import '../../../assets/css/footer.css';
import '../../../assets/css/footer_gird.css';
class footercontext extends Component{
    render() {
    return (
           <div className="row g-0 footer-context-top ">
               <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xxl-6">
                 <div className="footer-context-left">
                <p className="h5 footer-app">
                   Background remover  
                   <span className="badge bg-dark footer-app-Badges">App</span>
                </p>
                <p className="footer-heading"><em>
                   Những ứng dụng này có thể <mark>Giúp bạn</mark> cái gì đó là  tôi đã rất vui vẻ , 
                   tôi sẽ cố gắng nâng cấp nó lên sau khi tôi rảnh .. cảm ơn các bạn đã ủng hộ
                </em></p>
                <p className="h6 footer-address">
                    <i className="fa fa-address-book footer-address-icon" aria-hidden="true"></i>
                    Khu Phố 5 Thị Trần Hai Riêng - Huyền Sông Hình - Tỉnh Phú Yên</p>
                 </div>
               </div>
               <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xxl-3">
               <div className="footer-context-left"> 
               <p className="h5 footer-app">
                   Tác Giả
               </p>
               <p><small>
                <i className="fa fa-snowflake-o footer-address-icon" aria-hidden="true"></i> 
                Đặng Phúc Hòa</small></p>
               <p  className="footer-context-left-smail"><small>
               <i className="fa fa-facebook-official footer-address-icon" aria-hidden="true">
                </i>https://www.facebook.com/dangphuchoahcm/</small></p>
                </div>
               </div>
               <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xxl-3">
               <div className="footer-context-left">  
               <p className="h5 footer-Menu">
                   Menu
               </p>
               <p className="h5 footer-Menu-app">
                   Xóa Nền
                   <span className="badge bg-dark footer-app-Badges">App</span>
                </p>
               </div>
               </div>
               </div>
               
   );
}
}

export default footercontext;
