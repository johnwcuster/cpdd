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
