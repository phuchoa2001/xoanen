import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication } from '../../config/index';
import { signOut } from "firebase/auth"
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import Styles from './index.module.css';
function Profile() {
  const [user, loading] = useAuthState(authentication);
  let history = useHistory();
  const navigationGoogle = () => {
    history.push("/login");
  }
  const signOutGoogle = () => {
    signOut(authentication).then(() => {
      navigationGoogle();
    }).catch(() => {
      alert("đăng xuất google không thành công")
    });
  }
  useEffect(() => {
    const fetchName = async () => {
      if (!loading) {
        if (!user) {
          navigationGoogle();
        }
      }
    };
    fetchName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
  return (
    <div className={clsx("g-0 shadow-sm  bg-body rounded", Styles.page)}>
      <h3 className={Styles.user}> User : {user && user.displayName}</h3>
      <div className={Styles.boxbtn}>
        <div className={clsx(Styles.authBtn, Styles.disabled)} onClick={signOutGoogle}>
          <p className={Styles.authText}>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;