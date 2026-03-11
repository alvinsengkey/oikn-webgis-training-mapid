// import maplibre from 'maplibre-gl';

export function showCagBudInfoPopup(event, popup) {
    const feature = event.features[0];
    const properties = feature.properties;
    console.log('properties:', properties);
    // const geometry = feature.geometry.coordinates;

    const content = `
        <div style="width: 200px; font-family: sans-serif; padding: 2px">
            <h3 style="margin: 0 0 10px 0;">${properties.name}</h3>
            <p style="margin: 4px 0;"><strong>District:</strong> ${properties.district_name || 'Tidak tersedia'}</p>
            <p style="margin: 4px 0;"><strong>Province:</strong> ${properties.province_name || 'Tidak tersedia'}</p>
            <hr style="border: 0; border-top: 1px solid #ccc; margin: 10px 0;">
            <div style="max-height: 230px; overflow-y: auto; overflow-x: hidden; width: 100%; box-sizing: border-box;">
                <p style="margin: 0; padding-right: 5px; text-align: justify; font-size: 13px; word-wrap: break-word; overflow-wrap: break-word;">${properties.description || 'Tidak tersedia'}</p>
            </div>
        </div>
    `

    return popup
        .setLngLat(event.lngLat)
        .setHTML(content);
}