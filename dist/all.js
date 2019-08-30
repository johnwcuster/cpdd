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
    console.log("not 21 or 13?  " + elem.id);
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
  const mapLayer = document.getElementById("map_layer"),
  chartLayer = document.getElementById("chart_layer"),
  maptoggle = document.getElementById("map_toggle"),
  viewSelect = document.getElementsByName("views");

  for(let i=0; i<viewSelect.length; i++) {
    viewSelect[i].addEventListener("click", function(e){
      let elem = e.target;

      if (elem.id === "map_toggle") {
        chartLayer.classList.remove("js_chart_visible");
        console.log("map visible; map has no overlay");
      } else {
        chartLayer.classList.add("js_chart_visible");
        console.log("chart on top; map has overlay");
      }
    }, true);
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

(function(){
  const controlsClose = document.getElementById("close_control_panel"),
  controlsCloseOverlay = document.getElementById("control_panel_overlay"),
  controlsToggle = document.getElementById("toggle_control_panel");

  if(document.body.clientWidth < 992) {
    controlsClose.addEventListener("click", toggleControlPanel, true);
    controlsCloseOverlay.addEventListener("click", closeControlPanel, true);
  }

  controlsToggle.addEventListener("click", toggleControlPanel, true);

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
      controlPanel.classList.toggle("js_visible");
  }


  if(document.body.clientWidth < 992) {
    controlsCloseOverlay.classList.toggle("js_visible");
  }

  if(document.body.clientWidth >= 992) {

    if(document.body.clientWidth <1344) {
      controlsToggle.classList.toggle("is_animated");
      siteHeader.classList.toggle("is_animated");
      chartWrap.classList.toggle("control_panel_open");
      chartWrap.classList.remove("details_panel_open");
      rightPanel.classList.remove("is_animated");
      exportToggle.classList.remove("is_animated");
    }
    if(document.body.clientWidth >= 1344) {
      chartWrap.classList.toggle("control_panel_open--xl");
      controlPanel.classList.toggle("control_panel_open--xl");
      controlsToggle.classList.toggle("control_panel_open--xl");
      siteHeader.classList.toggle("control_panel_open--xl");
    }

    if(document.body.clientHeight < 640) {
      siteFooterLogos.classList.toggle("is_animated");
    }
  }
}

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
(function (){
  const rightPanelClose = document.getElementById("close_right_panel"),
  topRightButton = document.getElementById("toggle_export");

  rightPanelClose.addEventListener("click",closeRightPanel, true);
  topRightButton.addEventListener("click",closeRightPanel, true);

  // FOR PROTOTYPE ONLY
  const open_right_panel = document.getElementById("open_right_panel");
  open_right_panel.addEventListener("click", openRightPanel, true);
  // END PROTOTYPE ONLY

}());

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

// open_right_panel.js

function openRightPanel(e) {
  e.preventDefault();
  e.stopPropagation();

  const chartWrap = document.getElementById("chart_wrap"),
    controlPanel = document.getElementById("control_panel"),
    controlsToggle = document.getElementById("toggle_control_panel"),
    rightPanel = document.getElementById("table_details_panel"),
    siteFooterLogos = document.getElementById("site_footer_logos"),
    siteHeader = document.getElementById("site_header"),
    topRightButton = document.getElementById("toggle_export");

  rightPanel.classList.add("is_animated");
  topRightButton.classList.add("is_animated");
  chartWrap.classList.add("details_panel_open");

  if(document.body.clientWidth < 1344) {
    controlPanel.classList.remove("is_animated");
    controlPanel.classList.remove("js_toggled");
    controlPanel.classList.remove("js_visible");
    controlsToggle.classList.remove("is_animated");
    siteHeader.classList.remove("is_animated");
    siteFooterLogos.classList.remove("is_animated");
  }
}
