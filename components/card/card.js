export class Card {
    constructor(data) {
        this.data = data;
        this.template = '';
        this.loadTemplate().then(_ => function () {});
    }

    async loadTemplate() {
        const response = await fetch('card.html');
        this.template = await response.text();
    }

    render() {
        const html = this.template
            .replace('{{ imageSrc }}', this.data.imageSrc)
            .replace('{{ title }}', this.data.title)
            .replace('{{ description }}', this.data.description)
            .replace('{{ price }}', this.data.price)
            .replace('{{ buttonLabel }}', this.data.buttonLabel);

        const cardElement = document.createElement('div');
        cardElement.innerHTML = html.trim();

        return cardElement.firstChild;
    }
}

customElements.define('card-component', Card);