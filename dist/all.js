(function(){

// config: also see:  ../src/scss/_config.scss for breakpoints
const $sm_bp = 576,
  $md_bp = 768,
  $l_bp =  992,
  $xl_bp = 1200;



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
  pdTypeSelect = document.getElementsByName("pd_type");

  for(let i=0; i<pdTypeSelect.length; i++) {
    pdTypeSelect[i].addEventListener("input", showFinanceSubTypes, true);
  }


docBody.addEventListener("keydown", addKeyboardFocus, true);
controlsToggle.addEventListener("click", toggleControlPanel, true);
controlsCloseOverlay.addEventListener("click", closeControlPanel, true);
controlsClose.addEventListener("click", toggleControlPanel, true);
viewsToggle.addEventListener("click", toggleViewsPanel, true);
viewsClose.addEventListener("click", toggleViewsPanel, true);
typesToggle.addEventListener("click", toggleTypesPanel, true);
typesClose.addEventListener("click", toggleTypesPanel, true);
countriesToggle.addEventListener("click", toggleCountriesPanel, true);
countriesClose.addEventListener("click", toggleCountriesPanel, true);

financeTypeOption.addEventListener("input", showFinanceSubTypes, true);


function getWidth() {
  let width = document.body.clientWidth;
  return width;
}

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


}

function closeControlPanel() {

    controlPanel.classList.remove("js_visible");
    controlsCloseOverlay.classList.remove("js_visible");

    if(document.body.clientWidth >= $l_bp) {
      // controlsToggle.classList.remove("is_animated");
      siteHeader.classList.remove("is_animated");
      // chartHeader.classList.remove("is_animated");
      siteFooterLogos.classList.remove("is_animated");
    }

}

function toggleControlPanel(e) {
  e.preventDefault();
  e.stopPropagation();
  controlPanel.classList.toggle("js_visible");
  if(document.body.clientWidth < $l_bp) {
    controlsCloseOverlay.classList.toggle("js_visible");
  }
  if(document.body.clientWidth >= $l_bp) {
    controlsToggle.classList.toggle("is_animated");
    siteHeader.classList.toggle("is_animated");
    // chartHeader.classList.toggle("is_animated");
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

function showFinanceSubTypes(e) {
  let elem = e.target;

  if (elem.value === "21") {
    financeTypeOption.classList.add("js_toggled");
    financeListItem.classList.add("js_toggled");
    financeSubTypeList.classList.add("js_toggled");
  } else {
    financeTypeOption.classList.remove("js_toggled");
    financeListItem.classList.remove("js_toggled");
    financeSubTypeList.classList.remove("js_toggled");
  }
}

}());
