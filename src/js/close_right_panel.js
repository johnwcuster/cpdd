// close_right_panel.js
function closeRightPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const chartWrap = document.getElementById("chart_wrap"),
    rightPanel = document.getElementById("table_details_panel"),
    topRightButton = document.getElementById("toggle_export");

  rightPanel.classList.remove("is_animated");
  topRightButton.classList.remove("is_animated");
  chartWrap.classList.remove("details_panel_open");
}
