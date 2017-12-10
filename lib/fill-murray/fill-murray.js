function getImage(width, height, gray) {
    const g = gray ? 'g/' : '';

    return `<img src="http://fillmurray.com/${g}${width}/${height}" alt="Filler image featuring Bill Murray" />`
}

class FillMurray extends HTMLElement {
    constructor() {
        super();
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
      this.initShadowDom();
    }

    initShadowDom() {
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = getImage(this.width, this.height, this.gray);
    }
}

customElements.define('fill-murray', FillMurray);
