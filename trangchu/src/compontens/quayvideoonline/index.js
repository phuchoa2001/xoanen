import { useEffect } from 'react';
import './index.css'
function Quayvideoonline() {

  function FileJS() {
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const download = document.getElementById("download");
    const video = document.querySelector("video");
    const resolution = document.querySelectorAll(".resolution");
    const frameRate = document.querySelectorAll(".frameRate");
    const timeStart = document.querySelector(".start--time");
    let seconds = 0;
    let minute = 0;
    let hours = 0;
    let widthvideo = 1280;
    let frameRateVideo = 30;
    let heightvideo = 720;
    let recorder, stream;
    function handleClickFrameRate() {
      console.log(document.querySelector(".frameRate.frameRatecheck"));
      document.querySelector(".frameRate.frameRatecheck").classList.remove("frameRatecheck")
      this.classList.add("frameRatecheck")
      frameRateVideo = this.getAttribute("frameRatevideo") * 1;
    }
    function handleClickResolution() {
      document.querySelector(".resolution.resolutioncheck").classList.remove("resolutioncheck")
      this.classList.add("resolutioncheck")
      heightvideo = this.getAttribute("resolutionheight") * 1;
      widthvideo = this.getAttribute("resolutionwidth") * 1;
    }
    for (let i = 0; i < resolution.length; i++) {
      resolution[i].onclick = handleClickResolution;
    }
    for (let i = 0; i < frameRate.length; i++) {
      frameRate[i].onclick = handleClickFrameRate;
    }
    async function startRecording() {
      if (!navigator.mediaDevices.getDisplayMedia) {
        alert("không có getDisplayMedia")
      }
      stream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: { mediaSource: "screen", width: widthvideo, height: heightvideo ,frameRate :  frameRateVideo }
      });
      recorder = new MediaRecorder(stream);
      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      var timeRecording = setInterval(() => {
        seconds += 1;
        if (seconds === 60) {
          seconds = 0;
          minute++;
          if (minute === 60) {
            minute = 0;
            hours = 1;
          }
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        timeStart.innerHTML = hours + ":" + minute + ":" + seconds;
        seconds *= 1;
        minute *= 1
        hours *= 1
      }, 1000);
      recorder.onstop = e => {
        clearInterval(timeRecording);
        const completeBlob = new Blob(chunks, { type: 'video/mp4' });
        video.src = URL.createObjectURL(completeBlob);
        var url = video.getAttribute("src");
        video.play();
        download.setAttribute("href", url);
        download.download = "video.mp4";
      };
      recorder.start();
    }
    start.addEventListener("click", () => {
      [seconds, minute, hours] = [0, 0, 0];
      start.style.color = "red";
      start.setAttribute("disabled", true);
      stop.removeAttribute("disabled");
      startRecording();
    });

    stop.addEventListener("click", () => {
      start.style.color = "#eee";
      stop.setAttribute("disabled", true);
      start.removeAttribute("disabled");
      recorder.stop();
      stream.getVideoTracks()[0].stop();
    });
  }
  useEffect(() => {
    FileJS()
  }, [])
  return (
    <>
      <div className="bar-btn" href={() => false} >
        <li><a id="start" href={() => false} ><i className="fa fa-video-camera" aria-hidden="true"></i>
          Quay Video Màn Hình
        </a><span className="start--time"></span></li>
        <li> <a id="stop" href={() => false} disabled > <i className="fa fa-stop" aria-hidden="true"></i>
          Kết Thúc
        </a></li>
        <li>
          <a id="download" href={() => false} download>
            <i className="fa fa-file-video-o" aria-hidden="true"></i>
            Tải Video
          </a>
        </li>
      </div >
      <h3>Độ phân giải</h3>
      <ul className="list-resolution">
        <li className="resolution" resolutionheight="2160" resolutionwidth="3840"><a href="#/">2160p</a></li>
        <li className="resolution" resolutionheight="1440" resolutionwidth="2560"><a href="#/">1440p</a></li>
        <li className="resolution" resolutionheight="1080" resolutionwidth="1920"><a href="#/">1080p</a></li>
        <li className="resolution resolutioncheck" resolutionheight="720" resolutionwidth="1280"><a href="#/">720p</a></li>
        <li className="resolution" resolutionheight="480" resolutionwidth="854" > <a href="#/">480p</a></li >
        <li className="resolution" resolutionheight="360" resolutionwidth="640" > <a href="#/">360p</a></li >
        <li className="resolution" resolutionheight="240" resolutionwidth="426" > <a href="#/">240p</a></li >
      </ul>
      <h3>tỷ lệ khung hình</h3>
      <ul className="list-resolution">
        <li className="frameRate" frameRatevideo="60"><a href="#/">60</a></li>
        <li className="frameRate" frameRatevideo="50"><a href="#/">50</a></li>
        <li className="frameRate" frameRatevideo="48"><a href="#/">48</a></li>
        <li className="frameRate frameRatecheck" frameRatevideo="30"><a href="#/">30</a></li>
        <li className="frameRate" frameRatevideo="24" > <a href="#/">24</a></li >
        <li className="frameRate" frameRatevideo="20" > <a href="#/">20</a></li >
        <li className="frameRate" frameRatevideo="10" > <a href="#/">10</a></li >
      </ul>
      <video />
    </>
  )
}
export default Quayvideoonline;