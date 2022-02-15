import * as types from '../contants/Actiontypes'
var initiaState = false ; 
function counterReducer (state = initiaState , action) {
  switch(action.type) {
    case types.HIDE_MENUMOBILE :
    return false;
    case types.TOGGLE_MENUMOBILE :
    return !state;
    default: 
    return state
  }
}
export default counterReducer;