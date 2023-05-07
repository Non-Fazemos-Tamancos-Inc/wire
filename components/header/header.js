class Header extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        fetch('components/header/header.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();

                shadowRoot.appendChild(template.content.cloneNode(true));
            });
    }
}

customElements.define('header-component', Header);