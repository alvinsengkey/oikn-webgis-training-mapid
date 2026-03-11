import maplibre from 'maplibre-gl';

export function addHandler(map) {
    // map.boxZoom.disable();
    console.log("Box zoomm", map.boxZoom.isEnabled());
    console.log("Keyboard handlerr", map.keyboard.isEnabled());
    console.log("Scroll zoomm", map.scrollZoom.isEnabled());
    console.log("Touch zoom rotatee", map.touchZoomRotate.isEnabled());
}