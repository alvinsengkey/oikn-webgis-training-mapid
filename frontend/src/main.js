import { createMap } from "./map/createMapV2";
import { addControl } from "./controls/addControl";
import { jakarta, nusantara, myLocation } from "./markers/addCityMarker";
// import { addHandler } from "./handlers/addHandler";
import { addMapEvent } from "./events/addMapEvents";
import { myLocationPopup } from "./popups/addCityPopup";

const map = createMap();

addControl(map);
jakarta.addTo(map);
nusantara.addTo(map);
myLocation.addTo(map);

// addHandler(map);

addMapEvent(map);

myLocationPopup.on('open', () => {
    const zoomBtn = document.getElementById('btn-zoom-to-location');

    if (zoomBtn) {
        zoomBtn.addEventListener('click', () => {
            map.flyTo({ center: myLocation.getLngLat(), zoom: 10 });
        });
    }
});