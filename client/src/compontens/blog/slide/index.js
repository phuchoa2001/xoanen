import { useRef, useState } from "react";
import "./index.css";
import Item from "./item";
import { useSelector } from "react-redux";
function Blog() {
  const slideItem = useRef();
  const [numberSlide, setNumberSlide] = useState(0);
  const [marginSlide, setMarginSlide] = useState(0);
  const SlideItem = document.querySelectorAll(".slide-item").length;
  const Arrays = useSelector(state => state.Blog.Slide);
  function handleClick(e) {
    const elemt = e.target.parentNode.getAttribute("name");
    setNumberSlide((prev) => {
      const keyNew = elemt;
      setMarginSlide(keyNew * slideItem.current.clientWidth);
      return keyNew;
    });
  }
  function handleBack() {
    setNumberSlide((prev) => {
      const keyNew = prev === 0 ? 0 : --prev;
      setMarginSlide(keyNew * slideItem.current.clientWidth);
      return keyNew;
    });
  }
  function handleNext() {
    setNumberSlide((prev) => {
      const keyNew = prev === SlideItem - 1 ? SlideItem - 1 : ++prev;
      setMarginSlide(keyNew * slideItem.current.clientWidth);
      return keyNew;
    });
  }
  return (
    <>
      <div className="col  shadow-sm  bg-body rounded">
        <div className="silde">
          <div className="slide-list">
            <div
              className="slide-box"
              style={{ marginLeft: "-" + marginSlide + "px" }}
              item={numberSlide}
            >
              {Arrays.map((item, index) => (
                <div className="slide-item" ref={slideItem} key={index}>
                  <Item
                    id={item["_id"]}
                    title={item.title}
                    author={"Đặng Phúc Hòa"}
                    time={item.time}
                    img={item.img}
                  />
                </div>
              ))}
              <div className="silde-back" onClick={handleBack}>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div className="silde-next" onClick={handleNext}>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="silde-navigation">
          {Arrays.map((item, index) => (
            <label
              key={index}
              htmlFor="r1"
              className="slide-bar slide-active"
              name={index}
              onClick={handleClick}
            >
              <img src={item.img} alt="?" />
            </label>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
