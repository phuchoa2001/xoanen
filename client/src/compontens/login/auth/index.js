import React, { useEffect } from 'react';
import clsx from 'clsx';
import Styles from './index.module.css';
import { authentication } from '../../../config/index';
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory } from "react-router-dom";
function Auth() {
    let history = useHistory();
    const [user, loading] = useAuthState(authentication);
    const navigationGoogle = () => {
        history.push("/profile");
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) => {
                navigationGoogle();
            })
            .catch((err) => {
                alert("đăng nhập google không thành công")
            })
    }
    useEffect(() => {
        const fetchName = async () => {
            if (!loading) {
                if (user) {
                    navigationGoogle()
                }
            }
        };
        fetchName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])
    return (
        <div className={clsx(Styles.page, "shadow-sm  bg-body rounded")}>
            <h3 className={Styles.title}>Đặng Nhập</h3>
            <div className={Styles.boxpage}>
                <div className={Styles.boxauth}>
                    <div className={Styles.authBtn} onClick={signInWithGoogle}>
                        <i className="fa fa-google" aria-hidden="true"></i>
                        <p className={Styles.authText}>Đăng nhập google</p>
                    </div>
                    <div className={clsx(Styles.authBtn, Styles.disabled)}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <p className={Styles.authText}>Đăng nhập facebook</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Auth;