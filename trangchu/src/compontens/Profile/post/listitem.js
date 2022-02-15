import {Component} from 'react'; 
import Item from './item'
class listitem extends Component{
  render() {
  return (
    <div className="app-profile-box-list-item shadow-sm p-3 bg-body rounded g-0">
         <Item />
      </div>
  );
  }
}

export default listitem;
