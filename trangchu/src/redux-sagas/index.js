import * as loginTypes from '../contants/Logins';
import { delay, takeLatest , put , call } from 'redux-saga/effects'; 
import { oncheckacccountRequets } from '../actions/login'
import * as ProfilePostTypes from '../contants/profile-post';
import * as ActionLoading from '../actions/Loading';
import * as ActionDiglog from '../actions/profile-diglog';
import * as ActionLogin from '../actions/login'
import * as ActionPF_POST from '../actions/profile-post'
import * as ApiPost from '../commons/Api/apiput';
import * as STATUS from '../contants/status';
function* checkaccount ({payLoad}) {
 yield delay(500);
 yield put(oncheckacccountRequets(payLoad.keyword))
}
function* Upavatar ({payLoad}) { // thay đổi ảnh avatar
     yield put(ActionLoading.ShowLoading());
     yield put(ActionDiglog.onhideisdisplaydiglog());
     const resp = yield call(ApiPost.updateavatar , payLoad.fd);
     const {status , data} = resp;
     if(status === STATUS.STATUS_CODE_SUCCESS) {
         yield put(ActionPF_POST.opupdateAvatarSuccess(data.urlavatar));
         yield put(ActionLoading.ShowLoadingPage("/profile"));
      }
    yield delay(500);
    yield put(ActionLoading.HideLoading());
}
function* Upbeerphoto({payLoad}) { //thay đổi ảnh bia 
    yield put(ActionLoading.ShowLoading());
     yield put(ActionDiglog.onhideisdisplaydiglog());
     const resp = yield call(ApiPost.updatebeerphoto , payLoad.fd);
     const {status , data} = resp;
     if(status === STATUS.STATUS_CODE_SUCCESS) {
         yield put(ActionPF_POST.opupdateBeerPhotoSuccess(data.urlbeer));
         yield put(ActionLoading.ShowLoadingPage("/profile"));
    }
    yield delay(500);
    yield put(ActionLoading.HideLoading());
}
function * updatedescrpition({payLoad}) {
    yield put(ActionLoading.ShowLoading());
     yield put(ActionDiglog.onhideisdisplaydiglog());
     const resp = yield call(ApiPost.updatedescrpition , payLoad.text);
     const {status , data} = resp;
     if(status === STATUS.STATUS_CODE_SUCCESS) {
         yield put(ActionPF_POST.opupdatDescrpitionSuccess(data.text));
         yield put(ActionLoading.ShowLoadingPage("/profile"));
    }
    yield delay(500);
    yield put(ActionLoading.HideLoading());
}
function * onchangepassword({payLoad}) {
  yield put(ActionLoading.ShowLoading());
 const resp = yield call(ApiPost.changepassword , payLoad.state);
 const { data} = resp;
 if(data.messger === "thay đổi mật khẩu thành công") {
     yield put(ActionDiglog.onhideisdisplaydiglog());
    //  yield put(ActionPF_POST.OnchangepasswordSuccess(data.messger));
     yield put(ActionLoading.ShowLoadingPage("/profile"));
 }else {
     yield put(ActionPF_POST.OnchangepasswordFailure(data.messger));
 }
 yield delay(500);
 yield put(ActionLoading.HideLoading());
}
function* onveryemail({payLoad}) {
  yield put(ActionLoading.ShowLoading());
   const resp = yield call(ApiPost.verifyemail , payLoad.verifyemail);
   const {data} = resp;
  if(data.messger === "Verify Email Success") {
     yield put(ActionLogin.onverifyemailsuccess());
    }else{
     yield put(ActionLogin.onverifyemailfailed());
    }
    yield put(ActionLoading.HideLoading());
}
function* rootSage() {
    yield takeLatest(loginTypes.ON_CHECKACCOUNT ,checkaccount);
    yield takeLatest(ProfilePostTypes.ON_UPDATE_AVATAR , Upavatar)
    yield takeLatest(ProfilePostTypes.ON_UPDATE_BEERPHOTO , Upbeerphoto)
    yield takeLatest(ProfilePostTypes.ON_UPDATE_DESCRPITION , updatedescrpition)
    yield takeLatest(ProfilePostTypes.ON_CHANGE_PASSWORD , onchangepassword)
    //login 
    yield takeLatest(loginTypes.ON_VERIFY_REQUETS_EMAIL , onveryemail)

}
rootSage();
export default rootSage;
