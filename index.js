const map = L.map('map').setView([50, 4], 13);

const layer1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map)

const layer2 = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
}).addTo(map)

const control = L.control.layers({
    'Vue OSM': layer1,
    'Vue Satellite': layer2
}).addTo(map)

const icon = L.icon({
    iconUrl: 'm.png',
    iconSize: [40, 40],
})

const marker = L.marker([50, 4], {
    icon
}).addTo(map);