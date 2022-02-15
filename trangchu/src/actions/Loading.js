import * as Loadingtypes from "../contants/Loading"
export const ShowLoading = () => {
     return {
         type: Loadingtypes.SHOW_LOADING
     }
}
export const HideLoading = () => {
    return {
        type: Loadingtypes.HIDE_LOADING
    }
}
export const ShowLoadingPage = (href) => {
    return {
        type: Loadingtypes.SHOW_LOADINGPAGE , 
        href
    }
}
export const HideLoadingPage = () => {
    return {
        type: Loadingtypes.HIDE_LOADINGPAGE
    }
}