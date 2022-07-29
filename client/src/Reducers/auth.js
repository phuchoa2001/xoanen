import * as typeAuth from "../contants/auth";
var initiaState = {
  auth_login: false,
  message: "",
  error: false,
};
function counterReducer(state = initiaState, action) {
  switch (action.type) {
    case typeAuth.LOGIN_AUTH:
      const { file } = action.account;
      if (file.name === "Phuchoa00.png") {
        localStorage.setItem("Xoanen_auth_token", true);
        return {
          error: false,
          message: "",
          auth_login: true,
        };
      } else {
        return {
          error: true,
          message: "hình ảnh hoặc mất khẩu bị sai",
          auth_login: false,
        };
      }
    case typeAuth.ON_CHANGE_INPUT:
      return {
        ...state,
        error: false,
      };
    case typeAuth.CHECK_AUTH:
      const bool = localStorage.getItem("Xoanen_auth_token") ?  true : false;
      
      return {
        ...state,
        auth_login: bool,
      };
    default:
      return state;
  }
}
export default counterReducer;
