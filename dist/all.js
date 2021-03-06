// add_focus.js
(function(){

  document.body.addEventListener("keydown",

  function addKeyboardFocus(e) {
    const pageWrap = document.getElementById("page_wrap");
    pageWrap.classList.add("has-keyboard");
  }, true);

}());

// hover.js
(function(){

  document.body.addEventListener("mouseover",

  function addKeyboardFocus(e) {
    const pageWrap = document.getElementById("page_wrap");
    pageWrap.classList.add("has-hover");
  }, true);

}());

(function(){

  document.body.addEventListener("keyup", parseInput, false);
  document.body.addEventListener("click", parseInput, false);



  function parseInput(e) {
    if(e.type === "keyup") {
      var key = e.keyCode;
    } else {
      var key = "click";
      var target = e.target,
        parent = target.parentElement,
        grandParent = parent.parentElement,
        ancestor = grandParent.parentElement;
      var button = "";

      if(target) {
        if(target.tagName.toLowerCase()=="button") {
          var button = target;
        }
      }
      if(parent) {
        if(parent.tagName.toLowerCase()=="button") {
          var button = parent;
        }
      }
      if(grandParent) {
        if(grandParent.tagName.toLowerCase()=="button") {
          var button = grandParent;
        }
      }
      if(ancestor) {
        if(ancestor.tagName.toLowerCase()=="button") {
          var button = ancestor;
        }
      }


      // Enter space, or down arrow should be able to trigger a menu
      if(key==="click" || key == 13 || key == 32 || key ==40) {

        // e.preventDefault();

        if(button !== "") {
          if(button.getAttribute("aria-controls") ) {
            var controls = button.getAttribute("aria-controls").toString();

            var thisMenu = document.getElementById(controls);

            var focusID = ""

            if(button.getAttribute("data-returnfocus")) {
              focusID = button.dataset.returnfocus;
              console.log("returnfocus" + focusID);
            }
            if(button.getAttribute("data-tofocus")) {
              focusID = button.dataset.tofocus;
              console.log("tofocus" + focusID);
            }
            if(focusID==="") {
              focusID = controls;
              console.log("aria-controls: " + focusID);
            }


            var focusElem = document.getElementById(focusID);


            var allButtons = document.getElementsByTagName("button");
            var relatedButtons = [];
            for(let i=0; i<allButtons.length; i++) {
              if(allButtons[i].getAttribute("aria-controls") === button.getAttribute("aria-controls")) {
                relatedButtons.push(allButtons[i]);
              }
            }

            if(button.getAttribute("aria-expanded")) {

              // remove the data-visible attribute on the expanded menu
              thisMenu.removeAttribute("data-visible");

              // shift the focus to the returnto
              focusElem.focus();

              // remove the aria-expanded from all of the related buttons
              for(i=0; i<relatedButtons.length; i++) {
                relatedButtons[i].removeAttribute("aria-expanded");
              }

              button.removeAttribute("aria-expanded");
            } else {
              // add the data-visible attribute on the expanded menu
              thisMenu.setAttribute("data-visible", true);

              // shift the focus
              focusElem.focus();

              // remove the aria-expanded from all of the related buttons
              for(i=0; i<relatedButtons.length; i++) {
                relatedButtons[i].setAttribute("aria-expanded", true);
              }
            }
            if(button.classList.contains("button--apply") || button.classList.contains("button--cancel")) {
              e.preventDefault();
            }
          }
        }
      }
    }
  }


  function openOrClose($btn) {
    let b = $btn;
    expanded = b.getAttribute("aria-expanded");
    if(!expanded) {
      // this means that the menu is closed, so open it
      openMenu(b);
    } else {
      // otherwise it's already open, so close it;
      closeMenu(b);
    }
  }

  function openMenu($btn) {
    let b = $btn;
    b.setAttribute("aria-expanded", true);
  }

  function closeMenu($btn) {
    let b = $btn;
    b.removeAttribute("aria-expanded");
  }
}());

// show_chart.js
(function(){
  document.body.addEventListener("click", parseInput, false);

  function parseInput(e) {
    var target = e.target,
      parent = target.parentElement,
      grandParent = parent.parentElement,
      ancestor = grandParent.parentElement;

    var label = "";
    if(target) {
      if(target.tagName.toLowerCase()=="label") {
        var label = target;
      }
    }
    if(parent) {
      if(parent.tagName.toLowerCase()=="label") {
        var label = parent;
      }
    }
    if(grandParent) {
      if(grandParent.tagName.toLowerCase()=="label") {
        var label = grandParent;
      }
    }
    if(ancestor) {
      if(ancestor.tagName.toLowerCase()=="label") {
        var label = ancestor;
      }
    }

    if(label !== "") {
      const mapLayer = document.getElementById("map_layer"),
      chartLayer = document.getElementById("chart_layer"),
      tableLayer = document.getElementById("table_layer");

      let target_id = label.id;

      if (target_id === "map_toggle" || target_id === "map_toggle") {

          mapLayer.classList.add("js_chart_visible");
          chartLayer.classList.remove("js_chart_visible");
          tableLayer.classList.remove("js_chart_visible");

      }
      if (target_id === "bar_toggle" || target_id === "bar_toggle1") {

          mapLayer.classList.remove("js_chart_visible");
          tableLayer.classList.remove("js_chart_visible");
          chartLayer.classList.add("js_chart_visible");

      }
      if (target_id === "column_toggle" || target_id === "column_toggle1") {

          mapLayer.classList.remove("js_chart_visible");
          tableLayer.classList.remove("js_chart_visible");

          chartLayer.classList.add("js_chart_visible");

      }
      if (target_id === "line_toggle" || target_id === "line_toggle1") {

          mapLayer.classList.remove("js_chart_visible");
          tableLayer.classList.remove("js_chart_visible");

          chartLayer.classList.add("js_chart_visible");

      }
      if (target_id === "area_toggle" || target_id === "area_toggle1") {

          mapLayer.classList.remove("js_chart_visible");
          tableLayer.classList.remove("js_chart_visible");

          chartLayer.classList.add("js_chart_visible");

      }
      if (target_id === "table_toggle" || target_id === "table_toggle1") {

          mapLayer.classList.remove("js_chart_visible");
          chartLayer.classList.remove("js_chart_visible");

          tableLayer.classList.add("js_chart_visible");
      }
    }
  }
}());

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
