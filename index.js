const map = L.map('map').setView([50, 4], 13);

const layer1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map)

const layer2 = L.tileLayer('https://cdn3.apple-mapkit.com/ti/tile?style=46&size=1&x={x}&y={y}&z={z}&accessKey=1720780277_8222964386991707877_%2F_NBb18V0b7Th3%2F3a0KM2xTAylPD%2BU28pRFwBss%2BoYg4c%3D&emphasis=standard&tint=light', {
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