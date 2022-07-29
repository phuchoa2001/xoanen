import React, { useRef, useState } from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import JSZip from 'jszip'
import { saveAs } from 'file-saver';
function Cuticon(props) {
    const [image, setImage] = useState({
        width: 0,
        height: 0
    })
    const elemt = useRef();
    const [icon, setIcon] = useState({
        width: 0,
        height: 0
    })
    const [amount, setAmount] = useState(0);
    const hanhdleChangeText = (e) => {
        const { value, name } = e.target;
        setIcon(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleStart() {
        const height = Math.floor(image.height / icon.height);
        const list = document.querySelector(`.${Styles.listImage}`);
        const width = Math.floor(image.width / icon.width);
        list.innerHTML = "";
        setAmount(height  * width);
        const position = {
            x: 0,
            y: 0,
        }
        for (let i = 0; i < height; i++) {
            position.x = 0;
            for (let j = 0; j < width; j++) {
                let c = document.createElement("canvas");
                c.width = icon.width
                c.height = icon.height;
                c.className = Styles.canvas;
                const ctx = c.getContext('2d');
                ctx.drawImage(elemt.current, position.x * -1, position.y * -1);
                list.appendChild(c);
                position.x += (+icon.width);
            }
            position.y += (+icon.height);
        }
    }
    const handleimage = (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        function getMeta(url, callback) {
            var img = new Image();
            img.src = url;
            img.onload = function () { callback(this.width, this.height); }
            elemt.current = img;
        }
        getMeta(
            url,
            function (width, height) {
                setImage({ width, height })
            }
        );
    }
    const handleDownload = () => {
        const canvas = document.querySelectorAll("canvas");
        var zip = new JSZip();
        for (let i = 0; i < canvas.length; i++) {
            let image = canvas[i].toDataURL("image/png", 1.0).replace("data:image/png;base64,", "")
            console.log(image);
            zip.file(`image${i}.png`, image, { base64: true });
        }
        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                // see FileSaver.js
                saveAs(content, "listimage.zip");
            });
    }
    return (
        <div className='shadow-sm  bg-body rounded'>
            <h3 className={Styles.nameapp}>Cắt Icon</h3>
            <div className={Styles.info}>
                <h4>Hình ảnh : {image.width ? `${image.height}c x ${image.width}w` : "không có ảnh"}</h4>
                <h4>Ảnh : {amount}</h4>
                <div className="mb-3">
                    <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={handleimage} />
                </div>
                <div className="row g-2">
                    <div className="col-md">
                        <div className={clsx("form-floating", Styles.input)}>
                            <input type="text"
                                name='height'
                                className="form-control"
                                id="floatingInputGrid"
                                placeholder="Chiều cao Icon"
                                value={icon.height}
                                onChange={hanhdleChangeText}
                            />
                            <label htmlFor="floatingInputGrid">Chiều cao</label>
                        </div>
                        <div className={clsx("form-floating", Styles.input)}>
                            <input
                                type="text"
                                name='width'
                                className="form-control"
                                id="floatingInputGrid"
                                placeholder="Chiều rộng Icon" value={icon.width}
                                onChange={hanhdleChangeText}
                            />
                            <label htmlFor="floatingInputGrid">Chiều rộng</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button" onClick={handleStart}>Bắt đầu cắt ảnh</button>
                    <button className="btn btn-primary" type="button" onClick={handleDownload}>Tải tất cả ảnh</button>
                </div>
            </div>
            <div className={Styles.listImage}>

            </div>
        </div>
    );
}
export default Cuticon;