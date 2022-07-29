import "./index.css";
import { EditorState } from "draft-js";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { withRouter } from "react-router";
import * as ActionsBlog from "../../../../../actions/blog";
import Form from "./form";
import View from "./view";
import FormData from "form-data";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// convert Html to raft tự định nghĩa
import HtmlToDraftfc from '../../../../../commons/blog/Htmltodraft';
import BeautifyTime from "../../../../../commons/alarm/beautifyTime";
function Add({ viewPost, history }) {
  const d = new Date();
  const search = useLocation().search;
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const objEdit = useSelector((state) => state.Blog.edit);
  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    if (id) {
      setEdit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [post, setPost] = useState({
    ...objEdit,
    array: objEdit.html !== '' ? HtmlToDraftfc(objEdit.html) : EditorState.createEmpty(),
    html: objEdit.html !== '' ? objEdit.html : ``,
  });
  const [file, Setfile] = useState("");
  function handleChange(value) {
    setPost((prev) => {
      return {
        ...prev,
        title: value,
      };
    });
  }
  function handleChangetag(value) {
    setPost((prev) => {
      return {
        ...prev,
        tag: value,
      };
    });
  }
  function handleSetfile(imageUpload) {
    Setfile(imageUpload);
  }
  function handleChangeDescription(value) {
    setPost((prev) => {
      return {
        ...prev,
        description: value,
      };
    });
  }
  function handleUpload(res) {
    setPost((prev) => {
      return {
        ...prev,
        img: res,
      };
    });
  }
  function handleSubmit() {
    post.time = BeautifyTime(d.getHours(), d.getMinutes(), d.getSeconds());
    post.array = [];
    let formdata = new FormData();
    if (!edit) {
      formdata.append("avatar", file, file.name);
      post.img = "";
    }
    formdata.append("payload", JSON.stringify(post));
    edit ? dispatch(ActionsBlog.EditBlogServer(formdata)) : dispatch(ActionsBlog.postBlogServer(formdata));
    history.push("/dashbroad/blog/warehouse?page=1")
  }
  function handleEditorStateChange(editor) {
    setPost((prev) => {
      return {
        ...prev,
        array: editor,
      };
    });
  }
  function handleEditorStateChangeToHTML(html) {
    setPost((prev) => {
      return {
        ...prev,
        html: html,
      };
    });
  }
  function handleView() {
    dispatch(ActionsBlog.viewPost(post));
    history.push("/blog/post/viewpost");
  }
  return (
    <div className="row dashbroad_blog_add">
      <div className="col-12">
        <Form
          edit={edit}
          onChangeTag={handleChangetag}
          onChange={handleChange}
          onUpload={handleUpload}
          onEditorStateChange={handleEditorStateChange}
          onEditorStateChangeToHTML={handleEditorStateChangeToHTML}
          onSubmit={handleSubmit}
          onChangeDescription={handleChangeDescription}
          onSetfile={handleSetfile}
          post={post}
        />
      </div>
      <div className="col-12">
        <View post={post} />
        <a
          href="#/"
          className="dashbroad_blog_add_viewpost"
          onClick={handleView}
        >
          Đến bài xem trước
        </a>
      </div>
    </div>
  );
}
export default withRouter(Add);
