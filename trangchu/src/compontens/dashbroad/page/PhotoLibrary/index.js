import Photo from "./Photo";
import * as ActionCloudinary from "../../../../actions/cloudinary_upload";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function PhotoLibrary({ cloudinaryDeteleImageRequets }) {
  const listPhoto = useSelector((state) => state.Cloudinary.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionCloudinary.cloudinarySaveDataRequets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="row">
      {listPhoto.map((Photos, index) => (
        <Photo
          key={index}
          _id={Photos._id}
          width={Photos.width}
          url={Photos.url}
          public_id={Photos.public_id}
          height={Photos.height}
          format={Photos.format}
        />
      ))}
    </div>
  );
}
export default PhotoLibrary;
