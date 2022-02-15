import {Component} from 'react'; 
import '../../assets/css/profile.css' ;
import '../../assets/css/profile_gird.css' ;
import '../../assets/css/profilecommons.css';
import Post from './post';
import Info from './info';
class home extends Component{
  render() {
  return (
    <div className="container app-profile">
     <div className="row g-0 ">
    <Info />
    <Post />
      </div>
    </div>
  );
  }
}

export default home;
