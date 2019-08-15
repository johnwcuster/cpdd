// listens for keyboard input and adds css classes for keyboard focus
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


// toggles & subtoggles for the control panel and secondary menus
(function(){

  const docBody = document.body;
    siteHeader = document.getElementById("site_header"),
    controlsToggle = document.getElementById("toggle_control_panel"),
    controlsClose = document.getElementById("close_control_panel"),
    controlsCloseOverlay = document.getElementById("control_panel_overlay"),
    controlPanel = document.getElementById("control_panel"),
    viewsToggle = document.getElementById("toggle_view_select"),
    viewsClose = document.getElementById("close_view_select"),
    viewsPanel = document.getElementById("select_view"),
    typesToggle = document.getElementById("toggle_type_select"),
    typesClose = document.getElementById("close_type_select"),
    typesPanel = document.getElementById("select_types"),
    countriesToggle = document.getElementById("toggle_country_select"),
    countriesClose = document.getElementById("close_country_select"),
    countriesPanel = document.getElementById("select_countries"),
    chartHeader = document.getElementById("chart_header"),
    chartTitle = document.getElementById("chart_title")
    chartSubTitle = document.getElementById("chart_subtitle"),
    chartLabel = document.getElementById("chart_label"),
    siteFooterLogos = document.getElementById("site_footer_logos"),
    financeListItem = document.getElementById("finance_list_item"),
    financeTypeOption = document.getElementById("21_diplomacy_type"),
    financeSubTypeList = document.getElementById("finance_subtypes"),
    visitsListItem = document.getElementById("visits_list_item"),
    visitsTypeOption = document.getElementById("13_diplomacy_type"),
    visitsSubTypeList = document.getElementById("visits_subtypes"),


    pdTypeSelect = document.getElementsByName("pd_type");

    for(let i=0; i<pdTypeSelect.length; i++) {
      pdTypeSelect[i].addEventListener("input", showSubTypes, true);
    }


  controlsToggle.addEventListener("click", toggleControlPanel, true);
  controlsCloseOverlay.addEventListener("click", closeControlPanel, true);
  controlsClose.addEventListener("click", toggleControlPanel, true);
  viewsToggle.addEventListener("click", toggleViewsPanel, true);
  viewsClose.addEventListener("click", toggleViewsPanel, true);
  typesToggle.addEventListener("click", toggleTypesPanel, true);
  typesClose.addEventListener("click", toggleTypesPanel, true);
  countriesToggle.addEventListener("click", toggleCountriesPanel, true);
  countriesClose.addEventListener("click", toggleCountriesPanel, true);
  // financeTypeOption.addEventListener("input", showSubTypes, true);
  // visitsTypeOption.addEventListener("input", showSubTypes, true);

  function getWidth() {
    let width = document.body.clientWidth;
    return width;
  }



  function closeControlPanel() {

      controlPanel.classList.remove("js_visible");
      controlsCloseOverlay.classList.remove("js_visible");

      if(document.body.clientWidth >= 992) {
        siteHeader.classList.remove("is_animated");
        siteFooterLogos.classList.remove("is_animated");
        controlsToggle.classList.remove("is_animated");
      }

  }

  function toggleControlPanel(e) {
    e.preventDefault();
    e.stopPropagation();

    controlPanel.classList.toggle("js_visible");
    if(document.body.clientWidth < 992) {
      controlsCloseOverlay.classList.toggle("js_visible");
    }
    if(document.body.clientWidth >= 992) {
      controlsToggle.classList.toggle("is_animated");
      siteHeader.classList.toggle("is_animated");
      siteFooterLogos.classList.toggle("is_animated");
    }
  }

  function toggleViewsPanel(e) {
    e.preventDefault();
    e.stopPropagation();
    viewsPanel.classList.toggle("js_visible");
    closeControlPanel();
  }

  function toggleTypesPanel(e) {
    e.preventDefault();
    e.stopPropagation();
    typesPanel.classList.toggle("js_visible");
    closeControlPanel();

  }

  function toggleCountriesPanel(e) {
    e.preventDefault();
    e.stopPropagation();
    countriesPanel.classList.toggle("js_visible");
    closeControlPanel();
  }

  function showSubTypes(e) {
    let elem = e.target;


    if (elem.value === "21") {
      financeTypeOption.classList.add("js_toggled");
      financeListItem.classList.add("js_toggled");
      financeSubTypeList.classList.add("js_toggled");

      visitsTypeOption.classList.remove("js_toggled");
      visitsListItem.classList.remove("js_toggled");
      visitsSubTypeList.classList.remove("js_toggled");
    }
    if (elem.value === "13") {
      visitsTypeOption.classList.add("js_toggled");
      visitsListItem.classList.add("js_toggled");
      visitsSubTypeList.classList.add("js_toggled");
      financeTypeOption.classList.remove("js_toggled");
      financeListItem.classList.remove("js_toggled");
      financeSubTypeList.classList.remove("js_toggled");
    }
    if (elem.value !== "21" && elem.value !== "13") {
      console.log("not 21 or 13?  " + elem.value);
      financeTypeOption.classList.remove("js_toggled");
      financeListItem.classList.remove("js_toggled");
      financeSubTypeList.classList.remove("js_toggled");
      visitsTypeOption.classList.remove("js_toggled");
      visitsListItem.classList.remove("js_toggled");
      visitsSubTypeList.classList.remove("js_toggled");
    }
  }

}());

// toggle for the right panel (table details)
(function (){
  const rightPanel = document.getElementById("table_details_panel"),
  rightPanelClose = document.getElementById("close_right_panel"),
  topRightButton = document.getElementById("toggle_export");

  rightPanelClose.addEventListener("click",closeRightPanel, true);
  topRightButton.addEventListener("click",closeRightPanel, true)

  // FOR PROTOTYPE ONLY
  const open_right_panel = document.getElementById("open_right_panel");
  open_right_panel.addEventListener("click", openRightPanel, true);
  // END PROTOTYPE ONLY

  function closeRightPanel(e) {
    console.log("click");
    e.preventDefault();
    e.stopPropagation();
    rightPanel.classList.remove("is_animated");
    topRightButton.classList.remove("is_animated");
  }

  function openRightPanel(e) {
    e.preventDefault();
    e.stopPropagation();
    rightPanel.classList.add("is_animated");
    topRightButton.classList.add("is_animated");
  }
}());

// toggles & subtoggles for the export options panel
(function(){
  const exportDataOptions = document.getElementById("export_data_options"),
    exportToggle = document.getElementById("toggle_export"),
    exportToggle2 = document.getElementById("toggle_export_mobile"),
    exportOptions = document.getElementById("export_options"),
    closeExports = document.getElementById("close_export_options"),
    exportPanel = document.getElementsByName("export_type");

  for(let i=0; i<exportPanel.length; i++) {
    exportPanel[i].addEventListener("input", showDataOptions, true);
  }

  exportToggle.addEventListener("click", toggleExports, true);
  exportToggle2.addEventListener("click", toggleExports, true);
  closeExports.addEventListener("click", toggleExports, true);

  function toggleExports(e) {
    e.preventDefault();
    e.stopPropagation();
    exportOptions.classList.toggle("is_animated");
  }


  function showDataOptions(e) {
    let elem = e.target;

    if (elem.value === "1") {
      exportDataOptions.classList.add("js_toggled");
    } else {
      exportDataOptions.classList.remove("js_toggled");
    }
  }
}());

// toggle dark & light theme
(function (){
  const pageWrap = document.getElementById("page_wrap"),
    themeSelect = document.getElementsByName("theme"),
    themeSelect2 = document.getElementsByName("theme2");

  if(document.body.clientWidth >= 992) {
    for(let i=0; i<themeSelect.length; i++) {
      themeSelect[i].addEventListener("input", toggleTheme, true);
    }
  }
  if(document.body.clientWidth < 991) {
    for(let i=0; i<themeSelect2.length; i++) {
      themeSelect2[i].addEventListener("input", toggleTheme, true);
    }
  }

  function toggleTheme(e) {
    let elem = e.target;
    if (elem.value === "0") {
      pageWrap.classList.add("theme--dark");
      pageWrap.classList.remove("theme--light")
    }
    if (elem.value === "1") {
      pageWrap.classList.add("theme--light");
      pageWrap.classList.remove("theme--dark");
    }
  }


}());
