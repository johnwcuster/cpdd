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
  // closeControlPanel();
}
