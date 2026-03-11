import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export function createMap() {
  return new maplibre.Map({
    container: 'map',
    // style: 'https://demotiles.maplibre.org/style.json',
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    center: [107.326, -6.351],
    zoom: 4,
    // hash: true,
    // boxZoom: false,
    // keyboard: false,
    // interactive: false,
    bearing: 40,
    pitch: 60
  });
};