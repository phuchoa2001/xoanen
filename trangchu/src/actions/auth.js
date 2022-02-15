import * as typeAuth from "../contants/auth";
export const LoginAuth = (account) => {
  return {
    type: typeAuth.LOGIN_AUTH,
    account,
  };
};
export const OnInputChange = () => {
  return {
    type: typeAuth.ON_CHANGE_INPUT,
  };
};
export const CheckAuth = () => {
  return {
    type: typeAuth.CHECK_AUTH,
    
  };
};
