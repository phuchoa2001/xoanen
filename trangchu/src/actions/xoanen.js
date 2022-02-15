import * as typesXoaNen from "../contants/xoanen";
import callApi from "../commons/Api/apiCaller";
export const onSubmitXoaNen = (fd) => {
  return (dispatch) => {
    callApi("xoanen", "POST", fd).then((res) => {
      dispatch(OnSetSubMitXoaNen("data:image/png;base64," + res.data.messger));
    });
  };
};
export const OnSetSubMitXoaNen = (url) => {
  return {
    type: typesXoaNen.ON_SETSUBMIT_XOANEN,
    url,
  };
};
