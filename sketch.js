let options;

const mappa = new Mappa('Leaflet');
let myMap;

let canvas;

var locationData;

function preload(){
    locationData =  getCurrentPosition();
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);

    // Create a tile map and overlay the canvas on top.
    options = {
        lat: locationData.latitude,
        lng: locationData.longitude,
        zoom: 4,
        style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);

    myMap.onChange(drawOnMap);

    fill('#fff5'); 
    stroke('#000');
}

function draw() {

}

function drawOnMap() {
    // Clear the canvas
    clear();

    const pos = myMap.latLngToPixel(locationData.latitude,locationData.longitude);
    ellipse(pos.x,pos.y,20);

}