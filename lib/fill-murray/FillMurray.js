const template = document.createElement('template');
template.innerHTML = `
    <img src="http://fillmurray.com/200/300" alt="Filler image featuring Bill Murray" />
`;

class FillMurray extends HTMLElement {
    static get observedAttributes() {
        return ['height', 'width'];
    }

    constructor() {
        super();


    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        const image = template.content.cloneNode(true).querySelector('img');
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        const gray = this.hasAttribute('gray') ? 'g/' : '';

        image.setAttribute('src', `http://fillmurray.com/${gray}${width}/${height}`);

        this.shadowRoot.appendChild(image);
    }
}

customElements.define('fill-murray', FillMurray);
