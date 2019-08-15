// theme.js
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
