import * as logins from '../contants/Logins';
import callApi from "../commons/Api/apiCaller";
import Cookies from '../commons/login/cookie';
import checkrestration from '../commons/login/checkregtration'
import confirmEmailLink from '../commons/login/comfirmemaillink';
import * as ActionMessger from './messger';
import * as ActionLogin from './Loading'
export const onlogin = (obj) => { //đăng nhập
    return (dispatch) => {
        dispatch(ActionLogin.ShowLoading())
        callApi("login" , "POST" , obj).then( res => {
            if(res.data.messger === "password false") {
                dispatch(onloginfailed());
                dispatch(ActionLogin.HideLoading())
            }else{
                Cookies("set" , res.data.cookies);
                dispatch(onaccount(res.data));
                dispatch(ActionMessger.flasemessgeron());
                dispatch(ActionLogin.HideLoading())
            }
        })
    }
}
export const onloginsuccess= () => { //đăng nhập thành công
    return {
        type: logins.ON_LOGIN_SUCCESS
    }
}
export const onlogout= () => { // đăng xuất 
    Cookies("Detele");
    return {
        type: logins.ON_LOGOUT
    }
}
export const onloginfailed= () => { // đăng nhập thất bại 
    return {
        type: logins.ON_LOGIN_FAILED
    }
}
export const onaccount = (account) => { // xét lấy account
    return {
        type: logins.ON_ACCOUNT ,
        account
    }
}
export const onregtration = (obj) => { // đăng ký 
    obj.cookies = Cookies();
    obj.confirmEmailLink = confirmEmailLink(obj);
    console.log(obj);
    console.log(confirmEmailLink(obj));
    return (dispatch) => {
        dispatch(ActionLogin.ShowLoading())
        callApi("login/regtration" , "POST" , obj).then( res => {
            if(res.status === 200) {
                dispatch(onaccount(res.data))
                dispatch(ActionMessger.flasemessgeron());
                dispatch(ActionLogin.HideLoading())
            } 
        })
    }
}
export const onverifyemailsuccess= () => { // xác nhận email  thành công
    return {
        type: logins.ON_VERIFY_EMAIL_SUCCESS
    }
}
export const onverifyemailfailed= () => { // xác nhận email thất bại
    return {
        type: logins.ON_VERIFY_EMAIL_FAILED
    }
}
export const onverifyemailRequets = (verifyemail) => { // gữi lên server xác nhận email 
    return {
        type: logins.ON_VERIFY_REQUETS_EMAIL ,
        payLoad : {
            verifyemail
        }
    }
}
export const onalreadyexist = (check) => { // gữi tin nhắn về 
    return {
        type: logins.ON_ALREADY_EXIST , 
        check
    }
}
export const oncheckacccountRequets = (checkaccount) => {
    return dispatch =>{
        var erroraccount = checkrestration(checkaccount); 
        console.log(erroraccount);
        if(erroraccount === null) {
           callApi("login/checkaccount" , "POST" , checkaccount).then(res => {
            if(res.data.messger === "already exist") {
                dispatch(onalreadyexist(checkaccount.name + ` đã tồn tại `));
            }
        });
        }else {
            dispatch(onalreadyexist(erroraccount));
        }
    }
}
export const oncheckaccount = keyword => ({ // nhận xác tài khoản và email đã tồn tài chưa ở Form đăng ký 
    type: logins.ON_CHECKACCOUNT , 
    payLoad: {
      keyword ,
    }
})
export const onconfirmEmailLink = (id) => { // xác nhận email bằng link 
    return (dispatch) => {
        dispatch(ActionLogin.ShowLoading())
        callApi("login/confirmemaillink" , "PUT" , {link:id}).then( res => {
            if(res.data.messger === "Verify Email Success") {
                dispatch(onverifyemailsuccess());
                dispatch(ActionLogin.HideLoading())
            }else{
                dispatch(onverifyemailfailed());
                dispatch(ActionLogin.HideLoading())
            }
        })
    }
}
export const ongetcookie = () => { // lấy tài khoản bằng cookie .
    return (dispatch)  =>{
       const cookies = Cookies("get")
       if(cookies) {
        dispatch(ActionLogin.ShowLoading())
        callApi("login/getcookie" , "POST" , {cookies}).then( res => {
            console.log(res.data);
            if(res.status === 200) {
              dispatch(onaccount(res.data));
              dispatch(ActionLogin.HideLoading())
            }else {
                dispatch(ActionLogin.HideLoading())
            }
        })
       }
    }
}