import { useState } from "react";
import clsx from "clsx";
import Styles from "./index.module.css";
import * as ActionsAuth from "../../../actions/auth";
import { withRouter, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
function Auth({ history }) {
  const [account, setAccount] = useState({
    file: null,
    password: "",
  });
  const StateAuth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [showInput, setshowInput] = useState(false);
  if (StateAuth.auth_login) {
    return <Redirect push to="/dashbroad/home" />;
  }
  function handleOnChangePassword(e) {
    const { value } = e.target;
    setAccount((prev) => {
      return {
        ...prev,
        password: value,
      };
    });
    dispatch(ActionsAuth.OnInputChange());
  }
  function handleShowInput() {
    setshowInput((prev) => !prev);
  }
  function handleOnchangeFile(e) {
    const file = e.target.files[0];
    setAccount((prev) => {
      return {
        ...prev,
        file: file,
      };
    });
    dispatch(ActionsAuth.OnInputChange());
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(ActionsAuth.LoginAuth(account));
  }
  return (
    <div className={clsx(Styles.box, "row")}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input hidden type="text" autoComplete="username" />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Password :
          </label>
          <div className={Styles.boxinput}>
            <input
              type={showInput ? "type" : "password"}
              className={clsx("form-control", {
                [Styles.error]: StateAuth.error,
              })}
              id="exampleInputPassword"
              aria-describedby="PasswordHelp"
              autoComplete="new-password"
              value={account.password}
              onChange={handleOnChangePassword}
            />
            <div className={Styles.boxIcon} onClick={handleShowInput}>
              <i
                className={`fa fa-eye${showInput ? "-slash" : ""} fa-2x`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div id="PasswordError" className="form-text">
            {StateAuth.message}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputFile1" className="form-label">
            Xác nhận ảnh tại đây :
          </label>
          <input
            type="file"
            className={clsx("form-control", {
              [Styles.error]: StateAuth.error,
            })}
            id="exampleInputFile1"
            onChange={handleOnchangeFile}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default withRouter(Auth);
