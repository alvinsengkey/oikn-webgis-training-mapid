import maplibre from 'maplibre-gl';
import { CustomLogoControl } from './customLogoControls';
// import { HandlerToggleControl } from './handlerToggleControls';

export function addControl(map) {
    map.addControl(new maplibre.NavigationControl());
    map.addControl(
        new maplibre.AttributionControl({
            customAttribution: '&copy Alvin Sengkey 2026'
        }),
        'bottom-left'
    );
    map.addControl(
        new maplibre.ScaleControl({
            unit: 'metric',
            maxWidth: 200
        })
    );
    map.addControl(new maplibre.FullscreenControl());
    map.addControl(new maplibre.GlobeControl());
    map.addControl(new maplibre.LogoControl());
    map.addControl(new CustomLogoControl(), 'top-left');

    // map.addControl(new HandlerToggleControl());
}