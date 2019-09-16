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
