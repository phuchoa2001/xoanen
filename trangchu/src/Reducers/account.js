import * as logins from "../contants/Logins";
import * as TypePFPost from "../contants/profile-post";
import * as TypeMessger from '../contants/messger'
var initiaState = {
    name: null , 
    Email: null , 
    cookies: null,
    avatar: null ,
    photobeer:null,
    onmessger: false ,
    description:null ,
    messger:null , 
    verifyEmail:null
}
function counterReducer (state = initiaState , action) {
    switch(action.type) {
        case logins.ON_ACCOUNT:
        if(action.account)
        state = action.account;
        return {
            ...state ,
            onmessger : false
        };
        case logins.ON_VERIFY_EMAIL_SUCCESS :
        return {
            ...state , 
            onmessger : true ,
            verifyEmail : true
        };
        case TypeMessger.FLASE_MESSGER_ON :
        return {
            ...state , 
            onmessger : false ,
            messger : ''
        };
        case logins.ON_VERIFY_EMAIL_FAILED :
        return {
            ...state , 
            onmessger: true ,
            messger : "mã nhận xác bị sai !"
        }
        case logins.ON_LOGIN_FAILED :
        return {
            ...state , 
            logged : false ,
            onmessger: true ,
            messger : "Mất Khẩu của bạn bị sai !"
        }
        case logins.ON_LOGIN_SUCCESS :
        return {
            ...state , 
            logged : true ,
            onmessger: true ,
        }
        case logins.ON_ALREADY_EXIST : 
        return {
            ...state , 
            onmessger: true ,
            messger :action.check
        }
        case logins.ON_LOGOUT : 
        return initiaState
        case TypePFPost.ON_UPDATE_AVATAR_SUCCESS : 
        const { url} = action.payLoad;
        return {
          ...state , 
          avatar : url
        }
        case TypePFPost.ON_UPDATE_AVATAR_BEERPHOTO_SUCCESS : 
        const { urlbeer } = action.payLoad;
        return {
          ...state , 
          photobeer : urlbeer
        }
        case TypePFPost.ON_UPDATE_DESCRPITION_SUCCESS : 
        const { text } = action.payLoad;
        return {
          ...state , 
          description : text
        }
        case TypePFPost.ON_CHANGE_PASSWORD_FAILURE: 
        const { messger } = action.payLoad;
        return {
            ...state , 
            onmessger: true ,
            messger : messger,
        }
        default:
        return state
    }
}
export default  counterReducer;