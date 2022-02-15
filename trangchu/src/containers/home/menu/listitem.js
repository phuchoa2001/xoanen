
import '../../../assets/css/menu.css';
import '../../../assets/css/menu_gird.css';
import array from '../app/menuarr';
import Item from './item'
import { Component } from 'react';
import { connect } from 'react-redux';
import Slide from "../../../compontens/common/slide";
class listitem extends Component{
  render() {
  var listitem = array.map((item , index) => {
    return(
      <Item key={index} name={item.name} Context={item.Context} url={item.url} img ={item.img} Goverment={item.Goverment} />
    )
  })
  return (
    <div className="row list-item col-12 g-0">
      <div className="shadow p-3  bg-body rounded slide-home">
            <Slide girl="true" />   
      </div>
       {listitem}
    </div>
  );
  }
}
const MapStatusToProp = state => {
  return{
    
  }
}
export default connect(MapStatusToProp , null ) (listitem);
