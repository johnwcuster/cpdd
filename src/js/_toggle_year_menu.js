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
