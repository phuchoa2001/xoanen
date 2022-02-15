import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as ActionsAuth from "../../../../actions/auth";
function ProviderAuth(props) {
  const { children } = props;
  const dispatch = useDispatch();
  function CheckAuth() {
    dispatch(ActionsAuth.CheckAuth());
  }
  useEffect(() => {
    CheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children;
}

export default ProviderAuth;
