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
