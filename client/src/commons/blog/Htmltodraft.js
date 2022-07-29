import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
function HtmlToDraftfc(text) {
    const contentBlock = htmlToDraft(text);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      return editorState
    } 
}
export default HtmlToDraftfc;