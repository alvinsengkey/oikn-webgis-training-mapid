export function cagarBudayaSource(map) {
    const layers = {
        province: 'CagarBudaya Province',
        district: 'CagarBudaya District',
        cagarbudaya: 'CagarBudaya Titik'
    }

    map.addSource(layers.province, {
        type: 'vector',
        tiles: [
            `${window.location.origin}/geoserver/gwc/service/tms/1.0.0/tugas_vin:province@EPSG:900913@pbf/{z}/{x}/{y}.pbf`
        ],
        scheme: 'tms',
        minzoom: 0,
        maxzoom: 14
    });

    map.addSource(layers.district, {
        type: 'vector',
        tiles: [
            `${window.location.origin}/geoserver/gwc/service/tms/1.0.0/tugas_vin:district@EPSG:900913@pbf/{z}/{x}/{y}.pbf`
        ],
        scheme: 'tms',
        minzoom: 0,
        maxzoom: 14
    });

    map.addSource(layers.cagarbudaya, {
        type: 'vector',
        tiles: [
            `${window.location.origin}/geoserver/gwc/service/tms/1.0.0/tugas_vin:cagarbudaya_joined@EPSG:900913@pbf/{z}/{x}/{y}.pbf`
        ],
        scheme: 'tms',
        minzoom: 0,
        maxzoom: 14
    });

    return layers
}