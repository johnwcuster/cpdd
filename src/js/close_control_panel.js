// close_control_panel.js
function closeControlPanel() {
    const chartWrap = document.getElementById("chart_wrap"),
      controlsCloseOverlay = document.getElementById("control_panel_overlay"),
      controlPanel = document.getElementById("control_panel"),
      controlsToggle = document.getElementById("toggle_control_panel"),
      siteFooterLogos = document.getElementById("site_footer_logos"),
      siteHeader = document.getElementById("site_header");

    if(controlPanel && controlsCloseOverlay) {
        controlPanel.classList.remove("js_visible");
        controlsCloseOverlay.classList.remove("js_visible");
    }


    chartWrap.classList.remove("control_panel_open");


    if(document.body.clientWidth >= 992) {
      if(controlsToggle) {
        controlsToggle.classList.remove("is_animated");
      }
      siteHeader.classList.remove("is_animated");
      siteFooterLogos.classList.remove("is_animated");
    }
    if(document.body.clientwidth>=1344) {
      if(controlPanel && controlsToggle) {
        controlPanel.classList.remove("control_panel_open--xl");
        controlsToggle.classList.remove("control_panel_open--xl");
      }
      chartWrap.classList.remove("control_panel_open--xl");
      siteHeader.classList.remove("control_panel_open--xl");
    }

}
