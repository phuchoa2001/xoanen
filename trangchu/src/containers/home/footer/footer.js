import { Component } from "react";
import FooterContext from "./footercontext";
import Nocopy from "./nocopy";
class footer extends Component{
    render() {
    return (
        <div className="container footer ">
           <div className="footer-context row g-0">
            <FooterContext />
           </div>
           <Nocopy />
     </div>
   );
}
}

export default footer;
