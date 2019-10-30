// hover.js
(function(){

  document.body.addEventListener("mouseover",

  function addKeyboardFocus(e) {
    const pageWrap = document.getElementById("page_wrap");
    pageWrap.classList.add("has-hover");
  }, true);

}());
