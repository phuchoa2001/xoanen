import * as typeBlog from "../contants/blog";
var initiaState = {
  view: {
    title: "",
    img: "",
    array: [],
  },
  edit: {
    title: "",
    img: "",
    array: [],
    tag: [],
    description: "",
    time: "",
    html: "",
  },
  newpost: [],
  Slide: [],
  List: [],
};
function counterReducer(state = initiaState, action) {
  switch (action.type) {
    case typeBlog.VIEW_POST:
      const { object } = action;
      return {
        ...state,
        view: object,
      };
    case typeBlog.SAVE_DATA_SERVER:
      const { data } = action;
      return {
        ...state,
        ...data,
      };
    case typeBlog.SAVE_DATA_SEARCH:
      const data_search = action.data;
      return {
        ...state,
        List: data_search,
      };
    case typeBlog.POST_BLOG:
      const { payload } = action;
      state.List.push(payload);
      const result_POST = state;
      return {
        ...result_POST,
      };
    case typeBlog.GET_POST:
      const { post } = action;
      return {
        ...state,
        view: post,
      };
    case typeBlog.EDIT_BLOG:
      const payload_Edit = action.payload;
      const index_edit = state.List.findIndex(
        (item) => item._id === payload_Edit["_id"]
      );
      state.List[index_edit] = action.payload;
      const result_Edit = state;
      return {
        ...result_Edit,
      };
    case typeBlog.GET_EDIT_BlOG:
      const { id } = action;
      const index = state.List.findIndex((item) => item._id === id);
      return {
        ...state,
        edit: state.List[index],
      };
    case typeBlog.DETELE_BLOG:
      const id_detele = action.id;
      const index_detele = state.List.findIndex(
        (item) => item._id === id_detele
      );
      state.List.splice(index_detele, 1);
      const result_Detele = state;
      return {
        ...result_Detele,
      };
    default:
      return state;
  }
}
export default counterReducer;
