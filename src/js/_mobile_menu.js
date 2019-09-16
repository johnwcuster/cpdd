(function(){
  console.log("mobile_menu");
  const mobileToggle = document.getElementById("mobile_menu"),
    siteHeader = document.getElementById("site_header"),
    menu1 = document.getElementById("right_controls_toggles"),
    menu2 = document.getElementById("control_panel2"),
    menu3 = document.getElementById("select_years"),
    menu4 = document.getElementById("select_more");

    if(mobileToggle) {
      mobileToggle.addEventListener("click", toggleMobileMenu, true);
    }
    function toggleMobileMenu(e) {
      console.log("toggleMobileMenu");
      mobileToggle.classList.toggle("js_mobile_toggled");
      siteHeader.classList.toggle("js_mobile_toggled");
      menu1.classList.toggle("js_mobile_toggled");
      menu2.classList.toggle("js_mobile_toggled");
      menu3.classList.toggle("js_mobile_toggled");
      menu4.classList.toggle("js_mobile_toggled");
    }
}());
