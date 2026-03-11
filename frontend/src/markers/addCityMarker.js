import maplibre from 'maplibre-gl';
import { jakartaPopup, nusantaraPopup, myLocationPopup } from '../popups/addCityPopup';

export const jakarta = new maplibre.Marker({
  color: "#fcba03"
}).setLngLat([106.87992, -6.1591])
  .setPopup(jakartaPopup);

export const nusantara = new maplibre.Marker({
  color: "#11bf11"
}).setLngLat([116.67839, -0.89674])
  .setPopup(nusantaraPopup);

export const myLocation = new maplibre.Marker({
  color: "#95cabf",
  // draggable: true
}).setLngLat([118, -2.5]) // Default
  .setPopup(myLocationPopup);

// Using Current location
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      myLocation.setLngLat([lng, lat]);
      console.log("Location successfully updated to:", lng, lat);
    },
    (error) => {
      console.error("Error getting location:", error.message);
    }
  );
}
