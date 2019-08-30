// export_menu.js
(function(){
  const chartWrap = document.getElementById("chart_wrap"),
    detailsPanelOpen = document.getElementById("open_right_panel"),
    exportDataOptions = document.getElementById("export_data_options"),
    exportToggle = document.getElementById("toggle_export"),
    exportToggle2 = document.getElementById("toggle_export_mobile"),
    exportOptions = document.getElementById("export_options"),
    exportClose = document.getElementById("close_export_options"),
    exportPanel = document.getElementsByName("export_type");

  for(let i=0; i<exportPanel.length; i++) {
    exportPanel[i].addEventListener("click", showDataOptions, true);
  }

  exportToggle.addEventListener("click", openExports, true);
  exportToggle2.addEventListener("click", openExports, true);
  exportClose.addEventListener("click", closeExports, true);

  function openExports(e) {
    e.preventDefault();
    e.stopPropagation();
    exportOptions.classList.add("is_animated");
    exportToggle.classList.remove("is_animated");
    detailsPanelOpen.classList.add("export_panel_open");
    closeRightPanel(e);
    checkChartWidth();
  }
  function closeExports(e) {
    e.preventDefault();
    e.stopPropagation();
    exportOptions.classList.remove("is_animated");
    detailsPanelOpen.classList.remove("export_panel_open");
    closeRightPanel(e);
  }


  function checkChartWidth(e) {
    if(document.body.clientWidth >=992) {
      if(exportOptions.classList.contains("is_animated")) {
        chartWrap.classList.add("export_panel_open");
      } else {
        chartWrap.classList.remove("export_panel_open");
      }
    }
  }


  function showDataOptions(e) {
    let elem = e.target;

    if (elem.id === "export_dataset") {
      exportDataOptions.classList.add("js_toggled");
    } else {
      exportDataOptions.classList.remove("js_toggled");
    }
  }
}());
