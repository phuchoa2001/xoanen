import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication } from '../../../config/index';
import Navlinkmenu from "../NavLink/menu";
import { Route, NavLink } from 'react-router-dom';
const Links = ({ label, to, activeOnlyWhenExact, image }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            return (
                <li className="col-md-12 col-lg-3 col-xl-3 col-xxl-3 menupc_item">
                    {image && <img src={image} alt="avatar" className='header_avatar' />}
                    <NavLink to={to} >{label}</NavLink >
                </li>
            )
        }} />
    )
}
function MenuPc({ isDisplayMenu, hidemenu }) {
    const [user] = useAuthState(authentication);
    return (
        <>
            {isDisplayMenu &&
                < div className="menupc g-0 shadow-sm  bg-body rounded">
                    <ul className="submenu" onClick={hidemenu}>
                        {showItemMenu(Navlinkmenu)}
                    </ul>
                </div>
            }
        </>
    );
    function showItemMenu(listitem) {
        var result = null;
        if (listitem.length > 0) {
            result = listitem.map((item, index) => {
                if (item.name === "Đăng Nhập") {
                    var Account = user ? user.displayName : item.name;
                    var to = user ? "/profile" : item.to;
                    var image = user ? user.photoURL : null;
                }
                return (
                    <Links
                        image={image}
                        key={index}
                        label={Account || item.name}
                        to={to || item.to}
                        activeOnlyWhenExact={item.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default MenuPc;