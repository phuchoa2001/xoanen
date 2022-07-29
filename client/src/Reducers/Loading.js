import * as Loadings from "../contants/Loading"
var initiaState = {
    isDisplayLoading: false ,
}
function counterReducer (state = initiaState , action) {
    switch(action.type) {
        case Loadings.SHOW_LOADING :
        return  {
            ...state , 
            isDisplayLoading : true
        };
        case Loadings.HIDE_LOADING :
        return {
            ...state,
            isDisplayLoading : false
        }
        case Loadings.SHOW_LOADINGPAGE :
           const href =  action.href
        return {
            ...state,
            Loadingpage : true,
            href : href
        }
        case Loadings.HIDE_LOADINGPAGE :
        return {
            ...state,
            Loadingpage : false ,
            href : ''
        }
        default:
        return state
    }
}
export default  counterReducer;