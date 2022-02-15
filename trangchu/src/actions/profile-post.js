import * as ProfilePost from '../contants/profile-post';
export const opupdateAvatar = (fd) => {
    return {
        type: ProfilePost.ON_UPDATE_AVATAR , 
        payLoad: {
            fd , 
      }
    }
}
export const opupdateAvatarSuccess = (url) => { // up avatar Href lên Store ;
    return {
        type: ProfilePost.ON_UPDATE_AVATAR_SUCCESS , 
        payLoad: {
            url
        }
    }
}
export const opupdateBeerPhoto = (fd) => { // update ảnh bia 
    return {
        type: ProfilePost.ON_UPDATE_BEERPHOTO, 
        payLoad: {
            fd , 
      }
    }
}
export const opupdateBeerPhotoSuccess = (urlbeer) => { // up beer Href lên Store ;
    return {
        type: ProfilePost.ON_UPDATE_AVATAR_BEERPHOTO_SUCCESS , 
        payLoad: {
            urlbeer : urlbeer
        }
    }
}
export const opupdatDescrpit = (text) => { // update mô tả
    return {
        type: ProfilePost.ON_UPDATE_DESCRPITION ,
        payLoad: {
            text , 
      }
    }
}
export const opupdatDescrpitionSuccess = (text) => { // up beer Href lên Store ;
    return {
        type: ProfilePost.ON_UPDATE_DESCRPITION_SUCCESS , 
        payLoad: {
            text
        }
    }
}
export const Onchangepassword = (state) => { // update mô tả
    return {
        type: ProfilePost.ON_CHANGE_PASSWORD ,
        payLoad: {
            state , 
      }
    }
}
export const OnchangepasswordSuccess = (text) => { // up beer Href lên Store ;
    return {
        type: ProfilePost.ON_CHANGE_PASSWORD_SUCCESS , 
        payLoad: {
            text
        }
    }
}
export const OnchangepasswordFailure = (messger) => { // up beer Href lên Store ;
    return {
        type: ProfilePost.ON_CHANGE_PASSWORD_FAILURE , 
        payLoad: {
            messger
        }
    }
}