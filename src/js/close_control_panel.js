// close_control_panel.js
function closeControlPanel() {
    const chartWrap = document.getElementById("chart_wrap"),
      controlsCloseOverlay = document.getElementById("control_panel_overlay"),
      controlPanel = document.getElementById("control_panel"),
      controlsToggle = document.getElementById("toggle_control_panel"),
      siteFooterLogos = document.getElementById("site_footer_logos"),
      siteHeader = document.getElementById("site_header");

    controlPanel.classList.remove("js_visible");
    controlsCloseOverlay.classList.remove("js_visible");
    chartWrap.classList.remove("control_panel_open");


    if(document.body.clientWidth >= 992) {
      siteHeader.classList.remove("is_animated");
      siteFooterLogos.classList.remove("is_animated");
      controlsToggle.classList.remove("is_animated");

    }
    if(document.body.clientwidth>=1344) {
      chartWrap.classList.remove("control_panel_open--xl");
      controlPanel.classList.remove("control_panel_open--xl");
      controlsToggle.classList.remove("control_panel_open--xl");
      siteHeader.classList.remove("control_panel_open--xl");
    }

}
