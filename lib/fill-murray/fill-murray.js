function getImage(width, height, gray) {
    const g = gray ? 'g/' : '';

    return `<img src="http://fillmurray.com/${g}${width}/${height}" alt="Filler image featuring Bill Murray" />`
}

class FillMurray extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return ['width', 'height', 'gray'];
    }

    get width() {
        return this.getAttribute('width') || 200;
    }

    get height() {
        return this.getAttribute('height') || 150;
    }

    get gray() {
        return this.hasAttribute('gray');
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
      this.shadowRoot.innerHTML = getImage(this.width, this.height, this.gray);
    }
}

customElements.define('fill-murray', FillMurray);
