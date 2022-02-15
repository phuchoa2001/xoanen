import TimeAgo from "timeago-react";
import { withRouter } from "react-router";
import "./index.css";
function Item(props) {
  const {id , title , author , time , img  , history} = props;
  function handleClick(){
    history.push(`/blog/post/${id}`);
  }
  return (
    <div className="item" onClick={handleClick}>
      <img src={ process.env.PUBLIC_URL + img} alt="" />
       <div className="content">
           <h3>{title}</h3>
           <p className="item_time">
              <span className="item_time_author">
                tác giả : {author}
              </span>
              <span className="item_time_date">
              <TimeAgo datetime={time} />
              </span>
           </p>
       </div>
    </div>
  );
}
export default withRouter(Item);
