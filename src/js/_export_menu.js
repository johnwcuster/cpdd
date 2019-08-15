// export_menu.js
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
