import * as typeClouudinary from "../contants/cloudinary_upload";
import callApi from "../commons/Api/apiCaller";
import * as ActionLoading from "./Loading";
// upload ảnh
export const cloudinaryUpload = (url) => {
  return {
    type: typeClouudinary.CLOUDINARY_UPLOAD,
    url,
  };
};
export const cloudinaryUploadRequets = (formdata) => {
  return (dispatch) => {
    dispatch(ActionLoading.ShowLoading());
    callApi("cloudinary/upload", "POST", formdata).then((res) => {
      dispatch(ActionLoading.HideLoading());
      dispatch(cloudinaryUpload(res.data.payload.url));
    });
  };
};
// Requets Lấy dữ liệu về
export const cloudinarySaveData = (data) => {
  return {
    type: typeClouudinary.CLOUDINARY_SAVE_DATA,
    data,
  };
};
export const cloudinarySaveDataRequets = () => {
  return (dispatch) => {
    dispatch(ActionLoading.ShowLoading());
    callApi("cloudinary", "POST", {}).then((res) => {
      dispatch(ActionLoading.HideLoading());
      dispatch(cloudinarySaveData(res.data));
    });
  };
};
// xóa ảnh .
export const cloudinaryDeleteImgae = (id) => {
  return {
    type: typeClouudinary.CLOUDINARY_DELETE,
    id,
  };
};
export const cloudinaryDeleteImageRequets = (id) => {
  return (dispatch) => {
    dispatch(ActionLoading.ShowLoading());
    dispatch(cloudinaryDeleteImgae(id));
    callApi("cloudinary/delete", "DELETE", { id }).then((res) => {
      dispatch(ActionLoading.HideLoading());
    });
  };
};
