const editor = document.getElementById("editor");

window.addEventListener("keydown", ()=>{
  localStorage.editorTextContent = editor.value;
});

(() => {
  editor.value = localStorage.getItem('editorTextContent');
})();
