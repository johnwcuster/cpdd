// show_chart.js
(function(){
  const mapLayer = document.getElementById("map_layer"),
  chartLayer = document.getElementById("chart_layer"),
  maptoggle = document.getElementById("map_toggle"),
  viewSelect = document.getElementsByName("views");

  for(let i=0; i<viewSelect.length; i++) {
    viewSelect[i].addEventListener("click", function(e){
      let elem = e.target;

      if (elem.id === "map_toggle") {
        chartLayer.classList.remove("js_chart_visible");
        console.log("map visible; map has no overlay");
      } else {
        chartLayer.classList.add("js_chart_visible");
        console.log("chart on top; map has overlay");
      }
    }, true);
}
}());
