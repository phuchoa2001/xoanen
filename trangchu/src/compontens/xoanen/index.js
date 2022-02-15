import { useState, useEffect , useRef } from 'react';
import FormData from 'form-data';
import * as ActionsXoaNen from '../../actions/xoanen';
import { connect } from 'react-redux';
import './index.css';
import './girl.css';
function Xoanen(props) {
    const [image, setImage] = useState();
    const name = useRef()
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview)
        }
    }, [image]);
    function handleChange(e) {
        let file = e.target.files[0];
        name.current = e.target.value;
        const avatar = {
            files: file,
            preview: URL.createObjectURL(file)
        }
        setImage(avatar);
    }
    function handleClick(e) {
        const a = document.createElement("a");
        a.href = props.xoanen;
        a.download = name.current;
        a.click();
    }
    function handlesubmit(e) {
        e.preventDefault();
        let form = new FormData();
        form.append('avatar', image.files, image.files.name);
        props.submit(form);
        setImage()
        form = '';
    }
    return (
        <div className="container">
            <div className="row">
                <form action="/post" onSubmit={handlesubmit}>
                    <div className="form-group">
                        <div className="row">
                            <input type="file" className="form-control-file xoanen-file" name="avatar" onChange={handleChange} />
                            <div className="image">
                                {image && <img src={image.preview} alt="S" />}
                            </div>
                            {props.xoanen && <div className="imagetransparent">
                                <img src={props.xoanen} alt="S" />
                            </div>
                            }
                            <button type="submit" className="btn btn-success xoanen-submit">Xóa Nền</button>
                            {props.xoanen && <button type="button" className="btn btn-success xoanen-submit" onClick={handleClick}>Tải về</button>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
const MapStatusToProp = state => {
    return {
        xoanen: state.Xoanen
    }
}
const mapDispacthToProps = (dispatch) => {
    return {
        submit: (fd) => {
            dispatch(ActionsXoaNen.onSubmitXoaNen(fd))
        }
    }
}
export default connect(MapStatusToProp, mapDispacthToProps)(Xoanen);