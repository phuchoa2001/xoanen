import Account from './account'
import isDisplayMenu from './isDisplayMenu'
import { combineReducers } from "redux"
import  Profilerdiglog  from './profile-diglog'
import login from './login' ;
import Loading from './Loading';
import Xoanen from './xoanen';
import Alarm from './alram';
import Blog from './blog';
import Cloudinary from './cloudinary_upload';
import Auth from './auth'
const counterReducer = combineReducers ({
    Auth,
    isDisplayMenu , 
    login , 
    Account, 
    Profilerdiglog ,
    Loading,
    Xoanen,
    Alarm , 
    Blog , 
    Cloudinary
})
export default counterReducer; 
