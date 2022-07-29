import * as typesXoaNen from "../contants/xoanen"
var initiaState = null;
function counterReducer(state = initiaState, action) {
    switch (action.type) {
        case typesXoaNen.ON_SETSUBMIT_XOANEN :
            const { url } =  action ;
            return url
        default:
            return state
    }
}
export default counterReducer;