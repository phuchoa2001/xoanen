import { useState } from "react";
import FormData from "form-data";
import { connect } from "react-redux";
import Style from "./index.module.css";
import * as ActionCluodinary from '../../../../../../../actions/cloudinary_upload';
function Diglog({Upload , url}) {
  const [file, setFile] = useState(false);
  async function handleUpLoad(e) {
    const file = e.target.files[0];
    let formdata = new FormData();
    formdata.append("image" , file , file.name);
    await Upload(formdata);
    setFile(prev => !prev)
  }
  return (
    <div className={Style.base64}>
        <h3 className={Style.text}>Chuyển đổi hình ảnh sang base64</h3>
      <input
        type="file"
        id="file"
        name="image"
        className={Style.file}
        onChange={handleUpLoad}
      />
      <textarea 
      className={Style.textarea} 
      value={url}
      callback={file.toString()}
      onChange={() => false}
      ></textarea>
    </div>
  );
}
const MapStatusToProp = state => {
  return {
    url:state.Cloudinary.url
  }
}
const MapDispacthToProps = (dispatch, props) => {
  return {
    Upload: (formdata) => {
      dispatch(ActionCluodinary.cloudinaryUploadRequets(formdata));
    },
  };
};
export default connect(MapStatusToProp , MapDispacthToProps)(Diglog);
