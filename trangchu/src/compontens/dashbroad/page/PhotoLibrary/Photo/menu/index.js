import clsx from "clsx";
import Styles from "./index.module.css";
import {useDispatch} from 'react-redux';
import * as ActionCloudinary from '../../../../../../actions/cloudinary_upload'
function Menu({ public_id  , open , OnOpenMenu , cloudinarySaveDataRequets , onDelete}) {
  const dispatch = useDispatch();
  function handleOpenMenu(e){
    e.stopPropagation();
    OnOpenMenu();
  }
  function handleDeteleImage(e) {
    const {id} = e.target;
    const idImage = window.confirm(`bạn có muốn xóa hình ảnh có id : ${id}`);
    if (idImage) {
      dispatch(ActionCloudinary.cloudinaryDeleteImageRequets(id));
    }
  }
  return (
    <div className={Styles.menu} onClick={handleOpenMenu}>
      <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      {open && (
        <ul className={clsx("bg-body rounded shadow-sm", Styles.submenu)}>
          <li className={Styles.item}>
            <p id={public_id} onClick={handleDeteleImage}>Xóa hình ảnh </p>
          </li>
        </ul>
      )}
    </div>
  );
}
export default Menu;
