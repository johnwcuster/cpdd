// toggle_more_menu
(function(){
  const moreClose = document.getElementById("close_more_select"),
  moreToggle = document.getElementById("toggle_more_select");

  if(moreToggle) {
    moreToggle.addEventListener("click", toggleMorePanel, true);
  }
  if(moreClose) {
      moreClose.addEventListener("click", toggleMorePanel, true);
  }


}());

function toggleMorePanel(e) {
  console.log("toggleMorePanel(e) initiated");
  e.preventDefault();
  e.stopPropagation();

  const morePanel = document.getElementById("select_more");

  morePanel.classList.toggle("js_visible");

}
