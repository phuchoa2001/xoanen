import {Component} from 'react'; 
import '../../assets/css/formlogin.css';
import '../../assets/css/formlogingirl.css'
import Loginheading from './loginheading';
import Routerusername from './router';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
class home extends Component{
  render() {
  return (
    <Router>
     <div className="row login g-0" >
       <div className="login-img col-xxl-4 col-xl-4 col-lg-4 col-md-0 col-sm-0 ">
         <Loginheading />
       </div>
      <Switch>
     {this.showRouter(Routerusername)};
     </Switch>
    </div>
    </Router>
  );
  }
  showRouter = (router) => {
    var result = null ; 
    var {url} = this.props.match;
     if(router.length > 0) {
       result =  router.map((router , index) => {
         return(
           <Route  
           key ={index}
           path={`${url}${router.path}`}
           exact={router.exact} 
           component={router.mani} 
           />
         )
       })
     }
    return result;
  }
}

export default home;
