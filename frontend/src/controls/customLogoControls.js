export class CustomLogoControl {
    onAdd(map) {
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = 
            `
            <a href="https://www.ikn.go.id/" target="_blank">
            <img 
                src="src/assets/img/Logo_of_Ibu_Kota_Nusantara.svg" 
                alt="Logo IKN" 
                style="width:100px"
            ></a>`;

        return this._container
    };

    onRemove() {
        this._container.parentNode.removeChild(this._container);
    }
}