// toggle_control_panel.js
/*
(function(){

  const controlsClose = document.getElementById("close_control_panel"),
  controlsCloseOverlay = document.getElementById("control_panel_overlay"),
  controlsToggle = document.getElementById("toggle_control_panel");

  if(controlsClose && controlsCloseOverlay && controlsToggle) {

    if(document.body.clientWidth < 992) {
      controlsClose.addEventListener("click", toggleControlPanel, true);
      controlsCloseOverlay.addEventListener("click", closeControlPanel, true);
    }

    controlsToggle.addEventListener("click", toggleControlPanel, true);
  }

}());

function toggleControlPanel(e) {

  e.preventDefault();
  e.stopPropagation();

  const chartWrap = document.getElementById("chart_wrap"),
    controlsCloseOverlay = document.getElementById("control_panel_overlay"),
    controlPanel = document.getElementById("control_panel"),
    controlsToggle = document.getElementById("toggle_control_panel"),
    exportToggle = document.getElementById("toggle_export"),
    rightPanel = document.getElementById("table_details_panel"),
    siteFooterLogos = document.getElementById("site_footer_logos"),
    siteHeader = document.getElementById("site_header");

  if(document.body.clientWidth < 1344) {
    if(controlPanel) {
      controlPanel.classList.toggle("js_visible");
    }
  }


  if(document.body.clientWidth < 992) {
    if(controlsCloseOverlay) {
        controlsCloseOverlay.classList.toggle("js_visible");
    }
  }

  if(document.body.clientWidth >= 992) {

    if(document.body.clientWidth <1344) {
      if(controlsToggle) {
        controlsToggle.classList.toggle("is_animated");
      }

      siteHeader.classList.toggle("is_animated");
      chartWrap.classList.toggle("control_panel_open");
      chartWrap.classList.remove("details_panel_open");
      rightPanel.classList.remove("is_animated");
      exportToggle.classList.remove("is_animated");
    }
    if(document.body.clientWidth >= 1344) {
      if(controlPanel && controlsToggle) {
        controlPanel.classList.toggle("control_panel_open--xl");
        controlsToggle.classList.toggle("control_panel_open--xl");
      }
      chartWrap.classList.toggle("control_panel_open--xl");
      siteHeader.classList.toggle("control_panel_open--xl");
    }

    if(document.body.clientHeight < 640) {
      siteFooterLogos.classList.toggle("is_animated");
    }
  }
}
*/
