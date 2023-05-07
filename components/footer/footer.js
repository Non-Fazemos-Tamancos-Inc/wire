class Footer extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        fetch('components/footer/footer.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();

                shadowRoot.appendChild(template.content.cloneNode(true));
            });
    }
}

customElements.define('footer-component', Footer);