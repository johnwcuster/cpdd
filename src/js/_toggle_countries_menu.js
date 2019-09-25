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

  // closeControlPanel();
}
