// add_focus.js
(function(){

  document.body.addEventListener("keydown",

  function addKeyboardFocus(e) {

    let links = document.getElementsByTagName("a"),
      buttons = document.getElementsByTagName("button"),
      inputs = document.getElementsByTagName("input"),
      labels = document.getElementsByTagName("label");

      for(let a=0; a<links.length; a++) {
        let link = links[a];
        link.classList.add("show_keyboard_focus");
      }
      for(let b=0; b<buttons.length; b++) {
        let button = buttons[b];
        button.classList.add("show_keyboard_focus");
      }
      for(let i=0; i<inputs.length; i++) {
        let input = inputs[i];
        input.classList.add("show_keyboard_focus");
      }
      for(let l=0; l<labels.length; l++) {
        let label = labels[l];
        label.classList.add("show_keyboard_focus");
      }
  }, true);
  
}());

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

  if(exportToggle) {
      exportToggle.addEventListener("click", openExports, true);
  }
  if(exportToggle2) {
    exportToggle2.addEventListener("click", openExports, true);
  }
  if(exportClose) {
      exportClose.addEventListener("click", closeExports, true);
  }



  function openExports(e) {
    e.preventDefault();
    e.stopPropagation();
    if(exportOptions) {
        exportOptions.classList.add("is_animated");
    }
    if(exportToggle) {
      exportToggle.classList.remove("is_animated");
    }
    if(detailsPanelOpen) {
      detailsPanelOpen.classList.add("export_panel_open");
    }

    closeRightPanel(e);
    checkChartWidth();
  }
  function closeExports(e) {
    e.preventDefault();
    e.stopPropagation();

    if(exportOptions) {
      exportOptions.classList.remove("is_animated");
    }
    if(detailsPanelOpen) {
      detailsPanelOpen.classList.remove("export_panel_open");
    }


    closeRightPanel(e);
  }


  function checkChartWidth(e) {
    if(document.body.clientWidth >=992) {
      if(exportOptions) {
        if(exportOptions.classList.contains("is_animated")) {
          chartWrap.classList.add("export_panel_open");
        } else {
          chartWrap.classList.remove("export_panel_open");
        }
      }
    }
  }


  function showDataOptions(e) {
    let elem = e.target;
    if(exportDataOptions) {
      if (elem.id === "export_dataset") {
        exportDataOptions.classList.add("js_toggled");
      } else {
        exportDataOptions.classList.remove("js_toggled");
      }
    }
  }
  
}());

(function(){
  console.log("mobile_menu");
  const mobileToggle = document.getElementById("mobile_menu"),
    siteHeader = document.getElementById("site_header"),
    menu1 = document.getElementById("right_controls_toggles"),
    menu2 = document.getElementById("control_panel2"),
    menu3 = document.getElementById("select_years"),
    menu4 = document.getElementById("select_more");

    if(mobileToggle) {
      mobileToggle.addEventListener("click", toggleMobileMenu, true);
    }
    function toggleMobileMenu(e) {
      console.log("toggleMobileMenu");
      mobileToggle.classList.toggle("js_mobile_toggled");
      siteHeader.classList.toggle("js_mobile_toggled");
      menu1.classList.toggle("js_mobile_toggled");
      menu2.classList.toggle("js_mobile_toggled");
      menu3.classList.toggle("js_mobile_toggled");
      menu4.classList.toggle("js_mobile_toggled");
    }
}());

// select_subtypes.js
(function(){

  const pdTypeSelect = document.getElementsByName("pd_type");

  for(let i=0; i<pdTypeSelect.length; i++) {
    pdTypeSelect[i].addEventListener("click", showSubTypes, true);
  }
}());

function showSubTypes(e) {
  let elem = e.target;

  const financeListItem = document.getElementById("finance_list_item"),
    financeSubTypeList = document.getElementById("finance_subtypes"),
    financeTypeOption = document.getElementById("21_diplomacy_type"),
    visitsListItem = document.getElementById("visits_list_item"),
    visitsSubTypeList = document.getElementById("visits_subtypes"),
    visitsTypeOption = document.getElementById("13_diplomacy_type");


  if (elem.id === "21_diplomacy_type") {
    financeTypeOption.classList.add("js_toggled");
    financeListItem.classList.add("js_toggled");
    financeSubTypeList.classList.add("js_toggled");

    visitsTypeOption.classList.remove("js_toggled");
    visitsListItem.classList.remove("js_toggled");
    visitsSubTypeList.classList.remove("js_toggled");
  }
  if (elem.id === "13_diplomacy_type") {
    visitsTypeOption.classList.add("js_toggled");
    visitsListItem.classList.add("js_toggled");
    visitsSubTypeList.classList.add("js_toggled");
    financeTypeOption.classList.remove("js_toggled");
    financeListItem.classList.remove("js_toggled");
    financeSubTypeList.classList.remove("js_toggled");
  }
  if (elem.id !== "21_diplomacy_type" && elem.id !== "13_diplomacy_type") {
    
    financeTypeOption.classList.remove("js_toggled");
    financeListItem.classList.remove("js_toggled");
    financeSubTypeList.classList.remove("js_toggled");
    visitsTypeOption.classList.remove("js_toggled");
    visitsListItem.classList.remove("js_toggled");
    visitsSubTypeList.classList.remove("js_toggled");
  }

}

// show_chart.js
(function(){
  console.log("show_chart.js")
  const mapLayer = document.getElementById("map_layer"),
  chartLayer = document.getElementById("chart_layer"),
  maptoggle = document.getElementById("map_toggle"),
  viewSelect = document.getElementsByName("views");

  const barChart = document.getElementById("bar_chart"),
    colChart = document.getElementById("column_chart"),
    lineGraph = document.getElementById("line_graph"),
    stackedArea = document.getElementById("area_chart"),
    table = document.getElementById("table");

  const charts = document.getElementsByClassName("chart-type");

  for(let i=0; i<viewSelect.length; i++) {
    viewSelect[i].addEventListener("click", chartSelect, true);
}



function chartSelect(e) {
  let target = e.target,
    target_id = target.id;
    console.log(target_id);

    for(let i=0; i<charts.length; i++) {
      chart = charts[i];
      chart.classList.remove("js_chart_visible");
    }

    if (target_id === "map_toggle") {
      if(chartLayer) {
        chartLayer.classList.remove("js_chart_visible");
      }
    }
    if (target_id === "bar_toggle") {
      if(barChart) {
        chartLayer.classList.add("js_chart_visible");
        barChart.classList.add("js_chart_visible");
      }
    }
    if (target_id === "column_toggle") {
      if(colChart) {
        chartLayer.classList.add("js_chart_visible");
        colChart.classList.add("js_chart_visible");

      }
    }
    if (target_id === "line_toggle") {
      if(lineGraph) {
        chartLayer.classList.add("js_chart_visible");
        lineGraph.classList.add("js_chart_visible");
      }
    }
    if (target_id === "area_toggle") {
      if(stackedArea) {
        chartLayer.classList.add("js_chart_visible");
        stackedArea.classList.add("js_chart_visible");
      }
    }
    if (target_id === "table_toggle") {
      if(table) {
        chartLayer.classList.remove("js_chart_visible");
        table.classList.add("js_chart_visible");
      }
    }
}


}());

// theme.js
(function (){

  const pageWrap = document.getElementById("page_wrap"),
    themeSelect = document.getElementsByName("theme"),
    themeSelect2 = document.getElementsByName("theme2");

  if(document.body.clientWidth >= 992) {
    for(let i=0; i<themeSelect.length; i++) {
      themeSelect[i].addEventListener("click", toggleTheme, true);
    }
  }
  if(document.body.clientWidth < 991) {
    for(let i=0; i<themeSelect2.length; i++) {
      themeSelect2[i].addEventListener("click", toggleTheme, true);
    }
  }

  function toggleTheme(e) {
    let elem = e.target;
    if (elem.id === "dark") {
      pageWrap.classList.add("theme--dark");
      pageWrap.classList.remove("theme--light")
    }
    if (elem.id === "light") {
      pageWrap.classList.add("theme--light");
      pageWrap.classList.remove("theme--dark");
    }
  }

  
}());

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

// toggle_countries_menu.js
(function(){
  const countriesClose = document.getElementById("close_country_select"),
  countriesToggle = document.getElementById("toggle_country_select");

  countriesToggle.addEventListener("click", toggleCountriesPanel, true);
  countriesClose.addEventListener("click", toggleCountriesPanel, true);

}());

function toggleCountriesPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const countriesPanel = document.getElementById("select_countries");

  countriesPanel.classList.toggle("js_visible");

  closeControlPanel();
}

// _toggle_details_panel.js
/*
(function (){
  const  rightPanelOpen = document.getElementById("open_right_panel"),
  rightPanelClose = document.getElementById("close_right_panel"),
  topRightButton = document.getElementById("toggle_export");

  if(rightPanelClose) {
    rightPanelClose.addEventListener("click",closeRightPanel, true);
  }
  if(topRightButton) {
    topRightButton.addEventListener("click",closeRightPanel, true);
  }
  if(rightPanelOpen) {
    rightPanelOpen.addEventListener("click", openRightPanel, true);
  }
}());
*/

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
    chartWrap = document.getElementById("chart_wrap"),
    zoomContols = document.getElementById("zoom_controls");

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
      if(zoomContols) {
        zoomContols.classList.add("right_panel_open");
      }

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

      // clear the zoomContols
      if(zoomContols) {
        zoomContols.classList.remove("right_panel_open");
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

// toggle_types_menu
(function(){
  const typesClose = document.getElementById("close_type_select"),
  typesToggle = document.getElementById("toggle_type_select");


  typesClose.addEventListener("click", toggleTypesPanel, true);
  typesToggle.addEventListener("click", toggleTypesPanel, true);
}());

function toggleTypesPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const typesPanel = document.getElementById("select_types");

  typesPanel.classList.toggle("js_visible");
  closeControlPanel();
}

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
  closeControlPanel();
}

// toggle_types_menu
(function(){
  const yearClose = document.getElementById("close_year_select"),
  yearsToggle = document.getElementById("toggle_years_select");

  if(yearsToggle) {
    yearsToggle.addEventListener("click", toggleYearsPanel, true);
  }
  if(yearClose) {
    yearClose.addEventListener("click", toggleYearsPanel, true);
  }
  

}());

function toggleYearsPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const yearsPanel = document.getElementById("select_years");

  yearsPanel.classList.toggle("js_visible");

}

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

// close_right_panel.js
/*
function closeRightPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const chartWrap = document.getElementById("chart_wrap"),
    rightPanel = document.getElementById("table_details_panel"),
    topRightButton = document.getElementById("toggle_export"),
    // rightPanelToggleWrap = document.getElementById("right_controls_toggles");

    // rightPanelToggles = document.getElementsByClassName("toggles-right-flyout");



  rightPanel.classList.remove("is_animated");
  topRightButton.classList.remove("is_animated");
  chartWrap.classList.remove("details_panel_open");
  rightPanelToggleWrap.classList.remove("right_panel_open");

  for(let i=0; i<rightPanelToggles.length; i++) {
      let toggle = rightPanelToggles[i];
      toggle.classList.remove("right_panel_open");
  }
}
*/

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
