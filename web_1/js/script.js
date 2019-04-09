// Script poblador del mapa

// Crear mapa y marcadores
var mymap = L.map('mapid').setView([-33.4377968, -70.6504451], 11);
var markers = L.markerClusterGroup();

// Leer archivo y puebla los marcadores
d3.csv('./dataset/data-iic1005-2019.csv').then(dataset => {
    dataset.forEach(robo => {
        var text = robo.marca + " " + robo.modelo;
        markers.addLayer(L.marker([robo.lat, robo.lng]).bindPopup(text));
    });
    mymap.addLayer(markers);
});

// Desplegar mapa con marcadores
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Mapa de autos robados',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFodW5kIiwiYSI6ImNqdTRubnJzMjBnOHY0NW53OXU4b2t0bXAifQ.YU0VaYQKvdF2fa_HZIsD4g'
}).addTo(mymap);