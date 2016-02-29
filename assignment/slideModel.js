/* ================================
Week 6 Assignment: Slide Model
================================ */
var dataset='https://data.phila.gov/resource/xtnp-ykmq.geojson'
$.ajax(url).done(function(data){
  var.geoJsonData=JSON.parse(data)
  L.geoJsonData,{
    filter:filterFunction, style: myStyle
  }), addTo(map);
});

var myStyle=function(feature){
    switch(feature){
      case(): return 'red';break;
      case(): return 'blue'; break;

    }
}
