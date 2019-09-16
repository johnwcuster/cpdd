// open_right_panel.js
/*
function openRightPanel(e) {
  let activeToggle = e.target;
  console.log(activeToggle.id);
  e.preventDefault();
  e.stopPropagation();

  const chartWrap = document.getElementById("chart_wrap"),
    controlPanel = document.getElementById("control_panel"),
    controlsToggle = document.getElementById("toggle_control_panel"),
    rightPanel = document.getElementById("table_details_panel"),
    siteFooterLogos = document.getElementById("site_footer_logos"),
    siteHeader = document.getElementById("site_header"),
    topRightButton = document.getElementById("toggle_export"),
    rightPanelToggleWrap = document.getElementById("right_controls_toggles");

    rightPanelToggles = document.getElementsByClassName("toggles-right-flyout");

    for(let i=0; i<rightPanelToggles.length; i++) {
        let toggle = rightPanelToggles[i];
        toggle.classList.remove("right_panel_open");
    }
    activeToggle.classList.add("right_panel_open");

  rightPanel.classList.add("is_animated");
  topRightButton.classList.add("is_animated");
  chartWrap.classList.add("details_panel_open");
  rightPanelToggleWrap.classList.add("right_panel_open");

  if(document.body.clientWidth < 1344) {
    if(controlPanel && controlsToggle) {
      controlPanel.classList.remove("is_animated");
      controlPanel.classList.remove("js_toggled");
      controlPanel.classList.remove("js_visible");
      controlsToggle.classList.remove("is_animated");
    }
    siteHeader.classList.remove("is_animated");
    siteFooterLogos.classList.remove("is_animated");

  }
}
*/
