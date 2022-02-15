
import * as Config from '../../contants/Config' ; 
import axiosService from "./apiService";
export const updateavatar =  Data => {
    return axiosService.put(Config.API_URL_UPDATEAVATAR , Data);
}
export const updatebeerphoto =  Data => {
    console.log(Config.API_URL_UPBEERPHOTO);
    return axiosService.put(Config.API_URL_UPBEERPHOTO , Data);
}
export const updatedescrpition =  Data => {
    return axiosService.put(Config.API_URL_UPDATEDESCRPITION, Data);
}
export const changepassword =  Data => {
    return axiosService.put(Config.API_URL_CHANGPASSWORD, Data);
}
export const verifyemail =  Data => {
    return axiosService.put(Config.API_URL_VERIFYEMAIL, Data);
}