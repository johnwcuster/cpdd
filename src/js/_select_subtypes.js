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
