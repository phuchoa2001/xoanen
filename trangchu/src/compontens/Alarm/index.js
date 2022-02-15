import Logo from "./logo/index";
import Addalarm from "./addalarm";
import Tablelarm from "./tablealarm/index.js";
import Resutllarm from "./result/index";
import "../../assets/css/alarm.css";
import "../../assets/css/alarm_gird.css";
import * as Actionalarm from "../../actions/alarm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Push from "push.js";
function Alarm(props) {
  const dispatch = useDispatch();
  function start() {
    window.onbeforeunload = function () {
      dispatch(Actionalarm.resetJob());
      dispatch(Actionalarm.setPage());
    };
    dispatch(Actionalarm.startPage());
    Push.create("Nội dung : Kích Hoạt Thành Công!", {
      body: "bạn đã kích hoạt thành công ?",
      icon: "https://png.pngtree.com/png-vector/20190729/ourlarge/pngtree-alarm-clock-icon-flat-design-vector-illustration-png-image_1627999.jpg",
      timeout: 4000,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <Logo />
      <Addalarm />
      <Tablelarm />
      <Resutllarm />
      <a href={`https://xoanen-baothuc.netlify.app`}>
        Vì đây là một trang cho là spam nên báo full quyền website báo thức hãy
        qua trang website https://xoanen-baothuc.netlify.app
      </a>
    </div>
  );
}
export default Alarm;
