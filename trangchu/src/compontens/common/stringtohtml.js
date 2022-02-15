function StringtoHtml(Str) {
     const div = document.createElement("div");
    div.innerHTML = Str;
    return div;
}
export default StringtoHtml;