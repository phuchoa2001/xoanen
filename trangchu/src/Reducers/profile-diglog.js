import * as Diglogs from "../contants/profile-diglog"
var initiaState = false
function counterReducer (state = initiaState , action) {
    switch(action.type) {
        case Diglogs.ON_SHOW_ISDISPLAYDIGLOG :
        state = !state
        return state
        case Diglogs.ON_HIDE_ISDISPLAYDIGLOG :
        state = false
        return state
        default:
        return state
    }
}
export default  counterReducer;