import { cagarBudayaSource } from "./addSources";

export function addLayers(map) {
    const layers = {
        province: 'province-cagarbudaya',
        district: 'district-cagarbudaya',
        cagarbudaya: 'cagarbudaya-titik'
    }

    const cbSource = cagarBudayaSource(map);

    map.addLayer({
        id: layers.district,
        type: 'fill',
        source: cbSource.district,
        'source-layer': 'district',
        paint: {
            'fill-color': '#ffffffff',
            'fill-opacity': 0.7,
            'fill-outline-color': '#9d9d9dff'
        }
    });

    map.addLayer({
        id: layers.province,
        type: 'fill',
        source: cbSource.province,
        'source-layer': 'province',
        paint: {
            'fill-color': '#83c59dff',
            'fill-opacity': 0.5,
            'fill-outline-color': '#000000ff'
        }
    });

    map.addLayer({
        id: layers.cagarbudaya,
        type: "circle",
        source: cbSource.cagarbudaya,
        'source-layer': 'cagarbudaya_joined',
        paint: {
            'circle-color': '#ed1a44ff',
            'circle-radius': 3,
            'circle-stroke-color': '#2a2a2aff',
            'circle-stroke-width': 1
        }
    });

    return layers;
}