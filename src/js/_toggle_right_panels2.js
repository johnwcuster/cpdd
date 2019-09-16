(function(){
  const rightTogglesWrap = document.getElementById("right_controls_toggles"),
    openExportToggle = document.getElementById("open_export"),
    openGraphDetailsToggle = document.getElementById("open_graph_details"),
    openHelpToggle = document.getElementById("open_help"),
    closeExportToggle = document.getElementById("close_export_options"),
    closeGraphDetailsToggle = document.getElementById("close_graph_details"),
    closeTableDetailsToggle = document.getElementById("close_table_details"),
    closeHelpToggle = document.getElementById("close_help"),
    helpPanel = document.getElementById("help_panel"),
    exportPanel = document.getElementById("export_options"),
    tableDetailsPanel = document.getElementById("table_details_panel"),
    graphDetailsPanel = document.getElementById("graph_details_panel"),
    chartWrap = document.getElementById("chart_wrap");

    const openToggles = document.getElementsByClassName("toggles-right-flyout");
    const rightPanels = document.getElementsByClassName("right-flyout-panel");
    const tableToggles = document.getElementsByClassName("js_table_toggle");

    if(openToggles) {
      for (let i=0; i<openToggles.length; i++) {
        let openToggle = openToggles[i];
        openToggle.addEventListener("click", open_right_panel2, true);
      }
    }
    if(tableToggles) {
      for(let i=0; i<tableToggles.length; i++) {
        let tableToggle = tableToggles[i];
        tableToggle.addEventListener("click", open_right_panel2, true);
      }
    }
    if(closeExportToggle) {
      closeExportToggle.addEventListener("click", close_right_panel2, true);
    }
    if(closeGraphDetailsToggle) {
      closeGraphDetailsToggle.addEventListener("click", close_right_panel2, true);
    }
    if(closeTableDetailsToggle) {
      closeTableDetailsToggle.addEventListener("click", close_right_panel2, true);
    }
    if(closeHelpToggle) {
      closeHelpToggle.addEventListener("click", close_right_panel2, true);
    }

    function open_right_panel2(e){
      let this_event = e,
        target = this_event.target,
        target_id = target.id;

      // call close_right_panel2() in order to:
        // clear flyouts that might be open
        // view hidden toggles
      close_right_panel2(this_event);

      // animate the chart wrap & toggles wrap
      chartWrap.classList.add("right_panel_open");
      rightTogglesWrap.classList.add("right_panel_open");

      // open the right panel and hide the right toggle

      if(target_id === openExportToggle.id) {
        openExportToggle.classList.add("right_panel_open");
        exportPanel.classList.add("right_panel_open");
      }
      if(target_id === openGraphDetailsToggle.id) {
        openGraphDetailsToggle.classList.add("right_panel_open");
        graphDetailsPanel.classList.add("right_panel_open");
      }
      if(target_id === openHelpToggle.id) {
        openHelpToggle.classList.add("right_panel_open");
        helpPanel.classList.add("right_panel_open");
      }
      if(target.classList.contains("js_table_toggle")) {
        openGraphDetailsToggle.classList.add("right_panel_open");
        tableDetailsPanel.classList.add("right_panel_open");
      }
    }
    function close_right_panel2(e){
      let this_event = e,
        target = this_event.target,
        target_id = target.id;

      // clear the toggles
      for(let i=0;i<openToggles.length; i++) {
        let openToggle = openToggles[i];
        openToggle.classList.remove("right_panel_open");
      }

      // clear the flyouts
      for(let i=0; i<rightPanels.length; i++) {
        let panel = rightPanels[i];
        panel.classList.remove("right_panel_open");
      }

      if(!target.classList.contains("toggles-right-flyout")) {
        chartWrap.classList.remove("right_panel_open");
        rightTogglesWrap.classList.remove("right_panel_open");
      }
    }
})();
