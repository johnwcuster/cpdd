// add_focus.js
(function(){

  document.body.addEventListener("keydown",

  function addKeyboardFocus(e) {

    let links = document.getElementsByTagName("a"),
      buttons = document.getElementsByTagName("button"),
      inputs = document.getElementsByTagName("input"),
      labels = document.getElementsByTagName("label");

      for(let a=0; a<links.length; a++) {
        let link = links[a];
        link.classList.add("show_keyboard_focus");
      }
      for(let b=0; b<buttons.length; b++) {
        let button = buttons[b];
        button.classList.add("show_keyboard_focus");
      }
      for(let i=0; i<inputs.length; i++) {
        let input = inputs[i];
        input.classList.add("show_keyboard_focus");
      }
      for(let l=0; l<labels.length; l++) {
        let label = labels[l];
        label.classList.add("show_keyboard_focus");
      }
  }, true);
}());
