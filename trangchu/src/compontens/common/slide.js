import {Component} from 'react'; 
class slide extends Component{
  render() {
    const {girl} = this.props
    const classNameimg = girl ? "d-block w-100 carousel-item-img home-carousel-item-img" : "d-block w-100 carousel-item-img"
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner">
    <div className="carousel-item home-carousel-item  active">
      <img src="https://i.pinimg.com/564x/d3/1e/1a/d31e1a5eafa6379e2c2c0c75bc4cccc9.jpg" className={classNameimg} alt="/" />
    </div>
    <div className="carousel-item home-carousel-item">
      <img src="https://i.pinimg.com/564x/b6/a4/6d/b6a46d23164285abdd93d116996b2241.jpg" className={classNameimg} alt="/" />
    </div>
    <div className="carousel-item home-carousel-item">
      <img src="https://i.pinimg.com/564x/9c/b8/cf/9cb8cf6826c650e21a5ad4b8b2d809e3.jpg" className={classNameimg} alt="/" />
    </div>
    <div className="carousel-item home-carousel-item">
      <img src="https://i.pinimg.com/564x/c0/d1/bd/c0d1bd0e98ce07ace70717f2324317fa.jpg" className={classNameimg} alt="/" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  );
  }
}

export default slide;
