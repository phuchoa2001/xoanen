import * as logins from "../contants/Logins"
var initiaState = []
function counterReducer (state = initiaState , action) {
    switch(action.type) {
        case logins.ON_LOGIN :
        return state
        case logins.ON_REGTRATION :
        return state
        case logins.ON_CHECKACCOUNT :
        return {
            ...state
        }
        default:
        return state
    }
}
export default  counterReducer;