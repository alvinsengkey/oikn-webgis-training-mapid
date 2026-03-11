import maplibre from 'maplibre-gl';

export const jakartaPopup = new maplibre.Popup().setHTML(`
    <h3>Jekardah</h3>
    <img 
        src="src/assets/img/Coat_of_arms_of_Jakarta.svg" 
        alt="Logo Jakarta"
        style="width: 100px">
`);

export const nusantaraPopup = new maplibre.Popup().setHTML(`
    <h3>Nusantara</h3>
    <img 
        src="src/assets/img/64px-Logo_Nusantara.png" 
        alt="Logo Nusantara"
        style="width: 100px">
`);

export const myLocationPopup = new maplibre.Popup().setHTML(`
    <h3>Lokasi Saya</h3>
    <p>Anda berada di sini</p>
    <button id="btn-zoom-to-location">Zoom ke Lokasi Saya</button>
`);