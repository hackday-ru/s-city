var testData;
$(function(){
    $.getJSON('data_school.json', function(data2) {
        testData = {max:100,data:data2};
//x = JSON.parse(jsonData); 
var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 0.009,
  "maxOpacity": .4, 
  // scales the radius based on map zoom
  "scaleRadius": true, 
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries 
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lng',
  lngField: 'lat',
  valueField: 'count'
};

var heatmapLayer = new HeatmapOverlay(cfg);

var baseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'elalx.pmlkj38f',
    accessToken: 'pk.eyJ1IjoiZWxhbHgiLCJhIjoiY2luMzY3aWcyMDBwcXZ6bHlwb3J5cHRjOCJ9.fj3YlONavtXyuNC-Y4fkRQ'
})

var map = new L.Map('mapid', {
  center: new L.LatLng(59.94, 30.30),
  zoom: 11,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);		
    });
});


