import { useEffect, useRef } from "react";
import Push from "push.js";
function Item({ text, time, music }) {
  const audio = useRef();
  function Play() {
    audio.current.play();
    Push.create(`Nội dung : ${text}`, {
      body: `Thời gian : ${time}`,
      icon: "https://png.pngtree.com/png-vector/20190729/ourlarge/pngtree-alarm-clock-icon-flat-design-vector-illustration-png-image_1627999.jpg",
      timeout: 10000,
      vibrate: 200,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  }
  function handClose() {
    document.querySelector(".result").innerHTML = "";
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1 class="badge bg-secondary">
        Báo Thức Đã Kích Hoạt ! {text} : vào giờ {time}
      </h1>
      <audio id="resutlaudio" controls ref={audio}>
        <source src={`music/${music}`} type="audio/mpeg" />
      </audio>
      <button
        type="button"
        class="btn btn-danger remove-notification"
        onClick={handClose}
      >
        Hủy bỏ thông báo
      </button>
    </>
  );
}
export default Item;
