import maplibre from 'maplibre-gl';

import { addLayers } from "../sources/addLayers";
import { showCagBudInfoPopup } from "../popups/addGeojsonPopup";

import { LayerToggleControl } from '../controls/layerToggleControl';
import { BasemapToggleControl } from '../controls/basemapToggleControl';

export function addMapEvent(map) {
    const popup = new maplibre.Popup();
    let layerControl;

    // Use style.load instead of load so that each time the basemap changes, the layers are re-applied
    map.on("style.load", function () {
        const layer = addLayers(map);

        if (!layerControl) {
            // Initialize layer control
            layerControl = new LayerToggleControl([
                { id: layer.cagarbudaya, label: 'Cagar Budaya Titik' },
                { id: layer.district, label: 'District' },
                { id: layer.province, label: 'Province' }
            ]);
            map.addControl(layerControl, 'bottom-right');

            // Initialize basemap control
            const basemaps = [
                {
                    id: 'carto',
                    label: 'Carto Positron',
                    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
                },
                {
                    id: 'osm',
                    label: 'OpenStreetMap',
                    style: {
                        version: 8,
                        sources: {
                            'osm': {
                                type: 'raster',
                                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                                tileSize: 256,
                                attribution: '&copy; OpenStreetMap Contributors'
                            }
                        },
                        layers: [{
                            id: 'osm-layer',
                            type: 'raster',
                            source: 'osm',
                            minzoom: 0,
                            maxzoom: 19
                        }]
                    }
                }
            ];
            const basemapControl = new BasemapToggleControl(basemaps, 'carto');
            map.addControl(basemapControl, 'bottom-left');

            map.on("click", layer.cagarbudaya, function (event) {
                popup.remove();
                // showCagBudInfoPopup(event, popup).addTo(map);
            });

            map.on("mouseenter", layer.cagarbudaya, function (event) {
                popup.remove();
                showCagBudInfoPopup(event, popup).addTo(map);
            });

            map.on("touchstart", layer.cagarbudaya, function (event) {
                popup.remove();
                showCagBudInfoPopup(event, popup).addTo(map);
            });

            // map.on("mouseleave", layer.cagarbudaya, function (event) {
            //     popup.remove();
            // });
        } else {
            // Whenever the basemap is changed, the layer visibility must be restored
            layerControl.syncVisibility();
        }
    });
}