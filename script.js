// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
  zoom: 18,
  minZoom: 18,
});

// create a new tile layer
var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,
{
    attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
    maxZoom: 18
});

// add the layer to the map
map.addLayer(layer);

var tccenter = [[30.85810,75.86039], [30.92361,75.81607]];
var enterpgmbaadminaudilibenter = [[30.86042,75.85958], [30.86045,75.86033],
[30.85990,75.86017], [30.85887,75.86032], [30.85890,75.86080], [30.85828,75.86042], [30.8840,75.8749]];
var entergroundgurudwaradispencanteenworkshopsportsenter = [[30.86042,75.85958], [30.86140,75.85966],  [30.86204,75.86056],
[30.86141,75.86115], [30.86113,75.86269], [30.85954,75.86167],  [30.85865,75.86354],  [30.8840,75.8749]];

map.fitBounds(enterpgmbaadminaudilibenter);

//========================================================================
var marker1 = L.Marker.movingMarker(tccenter, [10000]).addTo(map);
L.polyline(pgenter).addTo(map);
marker1.once('click', function () {
    marker1.start();
    marker1.closePopup();
    marker1.unbindPopup();
    marker1.on('click', function() {
        if (marker1.isRunning()) {
            marker1.enterse();
        } else {
            marker1.start();
        }
    });
    setTimeout(function() {
        marker1.bindPopup('<b>Click me to enterse !</b>').openPopup();
    }, 2000);
});

marker1.bindPopup('<b>Click me to start !</b>', {closeOnClick: false});
marker1.openPopup();

//========================================================================

var marker2 = L.Marker.movingMarker(enterpgmbaadminaudilibenter,
    [3000, 9000, 9000, 4000, 4000, 5000, 3000], {autostart: true}).addTo(map);
L.polyline(enterpgmbaadminaudilibenter, {color: 'red'}).addTo(map);


marker2.on('end', function() {
    marker2.bindPopup('<b>Welcome to enter !</b>', {closeOnClick: false})
    .openPopup();
});

//=========================================================================

var marker3 = L.Marker.movingMarker(entergroundgurudwaradispencanteenworkshopsportsenter,
    [2000, 2000, 2000, 2000,2000, 2000, 2000, 2000], {autostart: true, loop: true}).addTo(map);

marker3.loops = 1;
marker3.bindPopup('', {closeOnClick: false});

//=========================================================================

var marker4 = L.Marker.movingMarker([[30.85879, 75.86304]], []).addTo(map);

marker3.on('loop', function(e) {
    marker3.loops++;
    if (e.elapsedTime < 50) {
        marker3.getPopup().setContent("<b>Loop: " + marker3.loops + "</b>")
        marker3.openPopup();
        setTimeout(function() {
            marker3.closePopup();

            if (! marker1.isEnded()) {
                marker1.openPopup();
            } else {
                if (marker4.getLatLng().equals([30.85879, 75.86304])) {
                    marker4.bindPopup('Click on the map to move me !');
                    marker4.openPopup();
                }

            }

        }, 2000);
    }
});

map.on("click", function(e) {
    marker4.moveTo(e.latlng, 2000);
});


