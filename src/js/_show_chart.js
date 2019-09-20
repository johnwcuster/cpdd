// show_chart.js
(function(){
  console.log("show_chart.js")
  const mapLayer = document.getElementById("map_layer"),
  chartLayer = document.getElementById("chart_layer"),
  maptoggle = document.getElementById("map_toggle"),
  viewSelect = document.getElementsByName("views");

  const barChart = document.getElementById("bar_chart"),
    colChart = document.getElementById("column_chart"),
    lineGraph = document.getElementById("line_graph"),
    stackedArea = document.getElementById("area_chart"),
    table = document.getElementById("table");

  const charts = document.getElementsByClassName("chart-type");

  for(let i=0; i<viewSelect.length; i++) {
    viewSelect[i].addEventListener("click", chartSelect, true);
}



function chartSelect(e) {
  let target = e.target,
    target_id = target.id;
    console.log(target_id);

    for(let i=0; i<charts.length; i++) {
      chart = charts[i];
      chart.classList.remove("js_chart_visible");
    }

    if (target_id === "map_toggle") {
      if(chartLayer) {
        chartLayer.classList.remove("js_chart_visible");
      }
    }
    if (target_id === "bar_toggle") {
      if(barChart) {
        chartLayer.classList.add("js_chart_visible");
        barChart.classList.add("js_chart_visible");
      }
    }
    if (target_id === "column_toggle") {
      if(colChart) {
        chartLayer.classList.add("js_chart_visible");
        colChart.classList.add("js_chart_visible");

      }
    }
    if (target_id === "line_toggle") {
      if(lineGraph) {
        chartLayer.classList.add("js_chart_visible");
        lineGraph.classList.add("js_chart_visible");
      }
    }
    if (target_id === "area_toggle") {
      if(stackedArea) {
        chartLayer.classList.add("js_chart_visible");
        stackedArea.classList.add("js_chart_visible");
      }
    }
    if (target_id === "table_toggle") {
      if(table) {
        chartLayer.classList.remove("js_chart_visible");
        table.classList.add("js_chart_visible");
      }
    }
}


}());
