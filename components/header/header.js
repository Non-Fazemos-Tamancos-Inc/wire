class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('components/header/header.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html.trim();
            });
    }
}

customElements.define('header-component', Header);