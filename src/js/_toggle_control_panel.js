// toggle_control_panel.js

(function(){
  const controlsClose = document.getElementById("close_control_panel"),
  controlsCloseOverlay = document.getElementById("control_panel_overlay"),
  controlsToggle = document.getElementById("toggle_control_panel");

  controlsClose.addEventListener("click", toggleControlPanel, true);
  controlsCloseOverlay.addEventListener("click", closeControlPanel, true);
  controlsToggle.addEventListener("click", toggleControlPanel, true);

}());

function toggleControlPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const chartWrap = document.getElementById("chart_wrap"),
    controlPanel = document.getElementById("control_panel"),
    controlsToggle = document.getElementById("toggle_control_panel"),
    rightPanel = document.getElementById("table_details_panel"),
    siteFooterLogos = document.getElementById("site_footer_logos"),
    siteHeader = document.getElementById("site_header");


  controlPanel.classList.toggle("js_visible");

  if(document.body.clientWidth < 992) {
    controlsCloseOverlay.classList.toggle("js_visible");
  }

  if(document.body.clientWidth >= 992) {
    controlsToggle.classList.toggle("is_animated");
    siteHeader.classList.toggle("is_animated");
    chartWrap.classList.toggle("control_panel_open");

    if(document.body.clientWidth <1344) {
      chartWrap.classList.remove("details_panel_open");
      rightPanel.classList.remove("is_animated");
    }

    if(document.body.clientHeight < 640) {
      siteFooterLogos.classList.toggle("is_animated");
    }
  }
}
