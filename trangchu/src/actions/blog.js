import * as TypeBlog from "../contants/blog";
import callApi from "../commons/Api/apiCaller";
import * as ActionsLoading from "./Loading";
export const viewPost = (object) => {
  return {
    type: TypeBlog.VIEW_POST,
    object,
  };
};
// Lấy bài viết
export const getPost = (post) => {
  return {
    type: TypeBlog.GET_POST,
    post,
  };
};
export const getPostServer = (id) => {
  return (dispatch) => {
    dispatch(ActionsLoading.ShowLoading());
    callApi(`blog/getpost?id=${id}`, "GET", { id }).then((res) => {
      dispatch(ActionsLoading.HideLoading());
      dispatch(getPost(res.data.payload));
    });
  };
};
// Tìm kiếm
export const SaveDataSearch = (data) => {
  return {
    type: TypeBlog.SAVE_DATA_SEARCH,
    data,
  };
};
export const SearchBlog = (key) => {
  return (dispatch) => {
    dispatch(ActionsLoading.ShowLoading());
    callApi(`blog/search?key=${key}`, "GET", {}).then((res) => {
      dispatch(ActionsLoading.HideLoading());
      dispatch(SaveDataSearch(res.data.payload));
    });
  };
};
//  Đăng bài viết
export const postBlog = (payload) => {
  return {
    type: TypeBlog.POST_BLOG,
    payload,
  };
};
export const postBlogServer = (form) => {
  return (dispatch) => {
    dispatch(ActionsLoading.ShowLoading());
    callApi("blog/add", "POST", form).then((res) => {
      dispatch(ActionsLoading.HideLoading());
      console.log(res);
      dispatch(postBlog(res.data));
    });
  };
};
//  sữa bài viết
export const EditBlog = (payload) => {
  return {
    type: TypeBlog.EDIT_BLOG,
    payload,
  };
};
export const EditBlogServer = (form) => {
  return (dispatch) => {
    dispatch(ActionsLoading.ShowLoading());
    callApi("blog/edit", "PUT", form).then((res) => {
      dispatch(EditBlog(res.data.payload));
      dispatch(ActionsLoading.HideLoading());
    });
  };
};
// Lấy bài viết chỉnh sữu
export const getEditBlog = (id) => {
  return {
    type: TypeBlog.GET_EDIT_BlOG,
    id,
  };
};
// Server trả về thì SaveDataServer lưu vào Store;
export const SaveDataServer = (data) => {
  return {
    type: TypeBlog.SAVE_DATA_SERVER,
    data,
  };
};
export const requestServer = (page) => {
  return (dispatch) => {
    callApi(`blog/list?page=${page}`, "GET", { page }).then((res) => {
      dispatch(ActionsLoading.HideLoading());
      dispatch(SaveDataServer(res.data));
    });
    dispatch(ActionsLoading.ShowLoading());
  };
};
// Xóa bài viết ...
export const deleteBlog = (id) => {
  return {
    type: TypeBlog.DETELE_BLOG,
    id,
  };
};
export const deleteBlogServer = (id) => {
  return (dispatch) => {
    callApi("blog/delete", "DELETE", {
      payload: {
        id,
      },
    }).then((res) => {
      dispatch(ActionsLoading.HideLoading());
      dispatch(deleteBlog(id));
    });
    dispatch(ActionsLoading.ShowLoading());
  };
};
