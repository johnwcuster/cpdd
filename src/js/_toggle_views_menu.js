// toggle_views_menu.js
(function(){
  const viewsClose = document.getElementById("close_view_select"),
    viewsToggle = document.getElementById("toggle_view_select");

  viewsClose.addEventListener("click", toggleViewsPanel, true);
  viewsToggle.addEventListener("click", toggleViewsPanel, true);

}());

function toggleViewsPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const viewsPanel = document.getElementById("select_view");

  viewsPanel.classList.toggle("js_visible");
  // closeControlPanel();
}
