import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export function createMap() {
    return new maplibre.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 1,
      hash: true
    });
};