class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('views/home/home.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html.trim();
            });
    }
}

customElements.define('home-app', Home);