// 1. paramètres généraux et habillage
///Paramètre généraux de la carte
var map = L.map('map',
{
	maxZoom: 18,
	minZoom: 9,
	maxBounds: [
		[40, -6],
		[55, 9]
	],
});

//attribution
var attribMARGINOV = '<b>Données</b> © <a href="http://www.marginov.cnrs.fr/?page_id=214">MARGINOV</a>'


//fond de carte
// création d'une couche "osmfr"
//OSM FR utilise les données OSM avec une charte graphique développé pour le territoire français 
var osmfr = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
{
	attribution: '<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="http://openstreetmap.fr">OSM France</a><br>' + attribMARGINOV,
	opacity: 0.6,
	minZoom: 18,
	maxZoom: 9,
	bounds: [
		[40, -6],
		[55, 9]
	],
});

map.setView([44.4122, -0.5603], 9);

/*///paramètrage de la vue dela carte
var centerMaptest = [coucheTerritoires.getBounds().getCenter().lat,coucheTerritoires.getBounds().getCenter().lng];
//si le centerMap = auto est auto alros centre de gravité de la couche territoires, sinon utilisation de la valeur de centermap
function setMapCenter (centerMap){
	if (centerMap === "auto"){return centerMaptest;}else{return centerMap;}
}
map.setView(setMapCenter (centerMap), zoomMap);*/


// Ajouter la couche "osmfr" à la carte		
// création d'une couche "bwLayer" un fond de carte en grisaille
var bwLayer = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
{
	attribution: '<b>Fond de carte</b> © <a href="http://osm.org/copyright">OpenStreetMap</a><br>' + attribMARGINOV,
	opacity: 0.8,
	maxZoom: 19,
});


//échelle
L.control.scale(
{
	imperial: false,
	maxWidth: 200,
	updateWhenIdle: false
}).addTo(map);

//flèche du nord
var urlNorthArray = '<img src="aceG8oMc4.png" style="width:30px;">'
var north = L.control(
{
	position: "topleft"
});
north.onAdd = function(map)
{
	var div = L.DomUtil.create("div", );
	div.innerHTML = urlNorthArray;
	return div;
}
north.addTo(map);