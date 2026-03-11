export class LayerToggleControl {
    constructor(layers) {
        this.layers = layers;
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
        title.textContent = 'Map Layers';
        title.style.margin = '0 0 5px 0';
        this._container.appendChild(title);

        this.layers.forEach(layer => {
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.style.marginBottom = '5px';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `toggle-${layer.id}`;
            checkbox.checked = true; // Assumes all layers are visible initially
            checkbox.style.cursor = 'pointer';

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = layer.label;
            label.style.marginLeft = '5px';
            label.style.cursor = 'pointer';

            checkbox.addEventListener('change', (e) => {
                const mapLayer = this._map.getLayer(layer.id);
                if (mapLayer) {
                    this._map.setLayoutProperty(
                        layer.id,
                        'visibility',
                        e.target.checked ? 'visible' : 'none'
                    );
                }
            });

            row.appendChild(checkbox);
            row.appendChild(label);
            this._container.appendChild(row);
        });

        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }

    syncVisibility() {
        if (!this._map) return;
        this.layers.forEach(layer => {
            const checkbox = document.getElementById(`toggle-${layer.id}`);
            if (checkbox && this._map.getLayer(layer.id)) {
                this._map.setLayoutProperty(
                    layer.id,
                    'visibility',
                    checkbox.checked ? 'visible' : 'none'
                );
            }
        });
    }
}
