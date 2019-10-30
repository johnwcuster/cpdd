// theme.js
(function (){

  const pageWrap = document.getElementById("page_wrap"),
    theme = document.getElementsByName("theme");

    for(let i=0; i<theme.length; i++) {
      theme[i].addEventListener("click", toggleTheme, true);
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
