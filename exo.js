(async () => {
    const API_URL = 'https://bruxellesdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/bruxelles_parkings_publics/records?limit=100';
    const parkingIcon = L.icon({
        iconUrl: 'car.png',
        iconSize: [40, 40]
    });

    const loadParkings = () => {
        return new Promise(async (resolve) => {
            const data = await fetch(API_URL);
            const json = await data.json();
            resolve(json.results);
        })
    }

    const createMap = () => {
        const m = L.map('map', {
            layers: [parkingsGroup]
        }).setView([50.85, 4.36], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);
        return m;
    }

    const createPopup = p => `
        <div>
            <p>${p.name_fr}</p>
            <p>Capacité: ${p.capacity}</p>
        </div> 
    ` 
    
    const parkings = await loadParkings();
    const pMarkers = parkings.map(p => 
        L.marker([
            p.geo_point_2d.lat, p.geo_point_2d.lon
        ], { icon: parkingIcon })
        .bindPopup(createPopup(p))
    )

    const parkingsGroup = L.layerGroup(pMarkers);
    const map = createMap();
    L.control.layers({}, {Parkings: parkingsGroup}).addTo(map);
})()