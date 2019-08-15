// _toggle_details_panel.js
(function (){
  const rightPanelClose = document.getElementById("close_right_panel"),
  topRightButton = document.getElementById("toggle_export");

  rightPanelClose.addEventListener("click",closeRightPanel, true);
  topRightButton.addEventListener("click",closeRightPanel, true);

  // FOR PROTOTYPE ONLY
  const open_right_panel = document.getElementById("open_right_panel");
  open_right_panel.addEventListener("click", openRightPanel, true);
  // END PROTOTYPE ONLY

}());
