function initMap() {
  var mymap = L.map('mapid').setView([52.069167, 19.480556], 5);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid29qY2lrb3dza2kxIiwiYSI6ImNrcnhocXJpeDA3eGIydm1zbXFubjduOHIifQ.pm2jjfLo11_yQVODavHTmA'
}).addTo(mymap);
var marker = L.marker([53.261111, 20.899167]).addTo(mymap);
  }