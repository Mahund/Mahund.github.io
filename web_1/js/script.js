// Estoy en carpeta del index!

// Crear mapa
var mymap = L.map('mapid').setView([-33.4377968, -70.6504451], 14);

// Leer archivo y poblar mapa
d3.csv('./dataset/data-iic1005-2019.csv').then(dataset => {

    dataset.forEach(robo => {
        var text = robo.marca + " " + robo.modelo;
        // acciones dentro del for
        L.marker([robo.lat, robo.lng]).addTo(mymap)
            .bindPopup(text);
    });
    console.log(dataset);
    // acciones fuera del for
});

// Desplegar mapa
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Mapa de autos robados',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFodW5kIiwiYSI6ImNqdTRubnJzMjBnOHY0NW53OXU4b2t0bXAifQ.YU0VaYQKvdF2fa_HZIsD4g'
}).addTo(mymap);