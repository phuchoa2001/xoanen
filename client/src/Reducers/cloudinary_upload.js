import * as typeCloudinary from "../contants/cloudinary_upload";
var initiaState = {
  url: "",
  list: [],
};
function counterReducer(state = initiaState, action) {
  switch (action.type) {
    case typeCloudinary.CLOUDINARY_SAVE_DATA:
      const { data } = action;
      return {
        ...state,
        list: data,
      };
    case typeCloudinary.CLOUDINARY_UPLOAD:
      const {url} = action ;
      return {
        ...state,
        url
      };
    case typeCloudinary.CLOUDINARY_DELETE:
      const { id } = action;
      const index = state.list.findIndex((item) => item.public_id === id);
      state.list.splice(index, 1);
      const result = state;
      return {
        ...result,
      };
    default:
      return state;
  }
}
export default counterReducer;
