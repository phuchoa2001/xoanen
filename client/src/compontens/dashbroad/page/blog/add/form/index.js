import { Editor } from "react-draft-wysiwyg";
import convertBase64 from "../../../../../../commons/post/convertbase64";
import Diglog from "./diglog";
import Styles from "./index.module.css";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
function Form({
  onChange,
  onUpload,
  onChangeTag,
  onEditorStateChange,
  onSubmit,
  onChangeDescription,
  post,
  onSetfile,
  edit,
  onEditorStateChangeToHTML
}) {
  function handleChange(e) {
    const { value } = e.target;
    onChange(value);
  }
  function handleUpload(e) {
    const file = e.target.files[0];
    onSetfile(file);
    const base64 = convertBase64(file);
    base64.then((res) => {
      onUpload(res);
    });
  }
  function handleEditorStateChange(editor) {
    const Tohtml = draftToHtml(convertToRaw(editor.getCurrentContent()));
    onEditorStateChange(editor);
    onEditorStateChangeToHTML(Tohtml);
  }
  function handleChangeTag(e) {
    onChangeTag(e.target.value.split(","))
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  function handleChangeDescription(e) {
    const value = e.target.value;
    onChangeDescription(value);
  }
  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={post.title}
        className={Styles.input}
        placeholder="Tiêu Đề"
        onChange={handleChange}
      />
      <textarea
        className={Styles.description}
        value={post.description}
        placeholder="Mô tả"
        onChange={handleChangeDescription}
      ></textarea>
      <input
        type="text"
        value={post.tag.join(",")}
        className={Styles.input}
        placeholder="Thẻ tag"
        onChange={handleChangeTag}
      />
      <input
        type="file"
        id="file"
        className={Styles.file}
        onChange={handleUpload}
      />
      <Editor
        editorState={post.array}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorStateChange}
      />
      <button type="submit" className={Styles.btn}>
        {edit ? "sửa bài viết" : "đăng bài viết"}
      </button>
      <Diglog />
    </form>
  );
}
export default Form;
