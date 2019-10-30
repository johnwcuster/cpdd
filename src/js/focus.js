// add_focus.js
(function(){

  document.body.addEventListener("keydown",

  function addKeyboardFocus(e) {
    const pageWrap = document.getElementById("page_wrap");
    pageWrap.classList.add("has-keyboard");
  }, true);

}());
