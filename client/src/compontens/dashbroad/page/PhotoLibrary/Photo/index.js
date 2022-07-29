import Styles from "./index.module.css";
import clsx from "clsx";
import Menu from "./menu";
import { useState } from "react";
function Photo({ _id, width, height, public_id, url, format ,onDelete  }) {
  const [open , setOpen] = useState(false);
  function handleCloseMenu() {
    setOpen(false);
  }
  function handleOpenMenu() {
    setOpen(prev => !prev);
  }
  return (
    <div
      className={clsx("col-12", Styles.photo)}
      id={_id}
      onClick={handleCloseMenu}
    >
      <div className={clsx("bg-body rounded", Styles.rounded)}>
        <div className={Styles.boximg}>
          <img src={url} className={Styles.img} alt="img" />
        </div>
        <div className={Styles.content}>
          <div className={Styles.bar}>
            <h3 className={Styles.name}>{public_id}</h3>
            <Menu public_id={public_id} open={open} OnOpenMenu={handleOpenMenu} onDelete={onDelete} />
          </div>
          <div className={Styles.size}>
            <p className={Styles.width}>chiều rộng : {width}</p>
            <p className={Styles.height}>chiều cao : {height}</p>
          </div>
          <p className={Styles.type}>type : image/{format}</p>
        </div>
      </div>
    </div>
  );
}

export default Photo;
