// MENUS AND LAYERS
function varibleList(){
  const chartHeader = document.getElementById("chart_header"),
    chartLabel = document.getElementById("chart_label"),
    chartSubTitle = document.getElementById("chart_subtitle"),
    chartTitle = document.getElementById("chart_title"),
    chartWrap = document.getElementById("chart_wrap"),

    controlPanel = document.getElementById("control_panel"),
    controlsClose = document.getElementById("close_control_panel"),
    controlsCloseOverlay = document.getElementById("control_panel_overlay"),
    controlsToggle = document.getElementById("toggle_control_panel"),

    countriesClose = document.getElementById("close_country_select"),
    countriesPanel = document.getElementById("select_countries"),
    countriesToggle = document.getElementById("toggle_country_select"),

    financeListItem = document.getElementById("finance_list_item"),
    financeSubTypeList = document.getElementById("finance_subtypes"),
    financeTypeOption = document.getElementById("21_diplomacy_type"),

    pdTypeSelect = document.getElementsByName("pd_type"),

    rightPanel = document.getElementById("table_details_panel"),
    rightPanelClose = document.getElementById("close_right_panel"),

    siteFooterLogos = document.getElementById("site_footer_logos"),
    siteHeader = document.getElementById("site_header"),

    topRightButton = document.getElementById("toggle_export"),

    typesClose = document.getElementById("close_type_select"),
    typesPanel = document.getElementById("select_types"),
    typesToggle = document.getElementById("toggle_type_select"),

    viewsPanel = document.getElementById("select_view"),
    viewsClose = document.getElementById("close_view_select"),
    viewsToggle = document.getElementById("toggle_view_select"),

    visitsListItem = document.getElementById("visits_list_item"),
    visitsSubTypeList = document.getElementById("visits_subtypes"),
    visitsTypeOption = document.getElementById("13_diplomacy_type");


  // FOR PROTOTYPE ONLY
  const open_right_panel = document.getElementById("open_right_panel");
  open_right_panel.addEventListener("click", openRightPanel, true);
  // END PROTOTYPE ONLY


};
