import {BrowserRouter as Router ,Switch , Route   } from 'react-router-dom';
import {Component} from 'react'; 
import RouterProfile from '../router'
class home extends Component{
  render() {
  return (
    <Router>
   <div className="app-profile-diglog shadow p-3 mb-5 bg-body col-xl-12 col-lg-12 col-md-12 col-sm-12 " >
   <Switch>
    {this.showRouter(RouterProfile)};
  </Switch>
   <div className="barslide-digbox"> 
   </div>
   </div>
</Router>
  );
  }
  showRouter = (router) => {
    var result = null ; 
     if(router.length > 0) {
       result =  router.map((router , index) => {
         return(
           <Route
           key ={index}
           path={`${router.path}`}
           component={router.mani} 
           />
         )
       })
     }
    return result;
  }
}

export default home;