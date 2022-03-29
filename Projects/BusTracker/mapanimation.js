const busStops = [
  [-71.118625, 42.374863],
  [-71.117585, 42.373016],
  [-71.115476, 42.372085],
  [-71.113095, 42.370218],
  [-71.110799, 42.369192],
  [-71.108717, 42.368355],
  [-71.106067, 42.366806],
  [-71.103476, 42.365248],
  [-71.099558, 42.362953],
  [-71.0958, 42.360698],
  [-71.094915, 42.360175],
  [-71.093729, 42.359244],
];

//Access Token
mapboxgl.accessToken =
  "pk.eyJ1IjoiemFyaW4wMSIsImEiOiJjbDB6dDNxYm8wbmFzM2VzMTUwcWt0c25oIn0.lMPMuDrVXpc0xkIsy4L6UQ";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/zarin01/cl0ztoa2z003815o31ytn332i",
  center: [-71.118625, 42.374863],
  zoom: 14,
});

//markUp
let marker = new mapboxgl.Marker()
  .setLngLat([-71.118625, 42.374863])
  .addTo(map);
let counter = 0;
function move() {
  //how fast the bus moves
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
