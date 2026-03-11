export class BasemapToggleControl {
    constructor(basemaps, initialId) {
        this.basemaps = basemaps;
        this.currentId = initialId;
    }

    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl maplibregl-ctrl-group';
        this._container.style.padding = '10px';
        this._container.style.backgroundColor = 'white';
        this._container.style.fontFamily = 'sans-serif';
        this._container.style.fontSize = '12px';

        const title = document.createElement('h4');
        title.textContent = 'Basemap';
        title.style.margin = '0 0 5px 0';
        this._container.appendChild(title);

        this.basemaps.forEach(bm => {
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.style.marginBottom = '5px';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'basemap';
            radio.id = `bm-${bm.id}`;
            radio.value = bm.id;
            radio.checked = bm.id === this.currentId;
            radio.style.cursor = 'pointer';

            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.textContent = bm.label;
            label.style.marginLeft = '5px';
            label.style.cursor = 'pointer';

            radio.addEventListener('change', (e) => {
                if (e.target.checked) {
                    const selected = this.basemaps.find(b => b.id === e.target.value);
                    if (selected) {
                        this._map.setStyle(selected.style);
                        this.currentId = selected.id;
                    }
                }
            });

            row.appendChild(radio);
            row.appendChild(label);
            this._container.appendChild(row);
        });

        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}
