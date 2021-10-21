var L;

window.onload = function() {
L.mapquest.key = '18gIpGQcFa9B9JVf0TAv664fI4StOKEI';
var map = L.mapquest.map('map', {
    center: [-1.300307, -48.482530],
    layers: L.mapquest.tileLayer('map'),
    zoom: 15
});


L.mapquest.textMarker([-1.300507, -48.482830], {
text: 'Belucio Variedades',
position: 'right',
type: 'marker',
icon: {
    primaryColor: '#095f03',
    secondaryColor: '#09b403',
    shadow: true,
    size: 'md',
    symbol: 'B'
}
})
.bindPopup('<img src="star.jpg"> <h3>Loja Belucio Variedades</h3> <p>R. Antonio Vilena</p> <p>whatsapp: xxxxx-xxxx</p>')
.addTo(map)
}