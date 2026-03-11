import "./handlerToggleControls.css";

export class HandlerToggleControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl maplibregl-ctrl-group';

        this._handlers = [
            { name: 'boxZoom', label: 'Box Zoom', icon: '↘️' },
            { name: 'keyboard', label: 'Keyboard', icon: '⌨️' },
            { name: 'touchZoomRotate', label: 'Touch Zoom Rotate', icon: '🫳' },
        ]

        this._handlers.forEach(handler => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = handler.icon;
            button.className = 'handler-btn active';
            button.title = `Toggle ${handler.label}`;

            button.addEventListener('click', () => {
                const mapHandler = this._map[handler.name];

                if (mapHandler.isEnabled()) {
                    mapHandler.disable();
                    button.classList.remove('active');
                    button.classList.add('inactive');
                    console.log(handler.name, "is disabled");
                    console.log(handler.name, mapHandler.isEnabled());
                } else {
                    mapHandler.enable();
                    button.classList.add('active');
                    button.classList.remove('inactive');
                    console.log(handler.name, "is enabled");
                    console.log(handler.name, mapHandler.isEnabled());
                }
            });
            this._container.appendChild(button);
        });

        return this._container;
    }

    onRemove(map) {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}