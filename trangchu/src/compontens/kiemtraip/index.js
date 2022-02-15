import "./index.css";
import axios from "axios";
import { useEffect } from "react";
function KiemTraip() {
  useEffect(() => {
    axios
      .get("https://api.bigdatacloud.net/data/client-info")
      .then(function (response) {
        // handle success
        console.log(response.data);
        document.querySelector(".ipString").innerHTML = "Đia chị của bạn :" + response.data.ipString;
        document.querySelector(".family").innerHTML = "trình duyệt bạn dùng :" + response.data.family;
        document.querySelector(".device").innerHTML = "dòng máy sử dụng :" + response.data.device;
        document.querySelector(".os").innerHTML = "phiên bản :" + response.data.os;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return <div id="data">
      <p className="ipString"></p>
      <p className="family"></p>
      <p className="device"></p>
      <p className="os"></p>
  </div>;
}
export default KiemTraip;
