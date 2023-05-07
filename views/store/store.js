class NFTStore extends HTMLElement {
    constructor() {
        super();

        // Load the card template
        const cardTemplatePromise = fetch('card.html').then((response) => response.text());

        // Render the featured NFT cards
        const featuredData = [
            {
                imageSrc: 'https://via.placeholder.com/300x200.png?text=Featured+1',
                title: 'Featured NFT 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elit eu odio varius vulputate eu non lorem.',
                price: '1 ETH',
                buttonLabel: 'Buy now'
            },
            {
                imageSrc: 'https://via.placeholder.com/300x200.png?text=Featured+2',
                title: 'Featured NFT 2',
                description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                price: '2 ETH',
                buttonLabel: 'Buy now'
            },
            {
                imageSrc: 'https://via.placeholder.com/300x200.png?text=Featured+3',
                title: 'Featured NFT 3',
                description: 'Etiam ac sapien vel tellus tristique faucibus. Praesent ac diam ut massa bibendum ultrices.',
                price: '3 ETH',
                buttonLabel: 'Buy now'
            }
        ];

        this.featuredCardsContainer = document.createElement('div');
        this.featuredCardsContainer.setAttribute('id', 'featured-cards');

        cardTemplatePromise.then((cardTemplate) => {
            featuredData.forEach((cardData) => {
                const cardHTML = cardTemplate
                    .replace('{{imageSrc}}', cardData.imageSrc)
                    .replace('{{title}}', cardData.title)
                    .replace('{{description}}', cardData.description)
                    .replace('{{price}}', cardData.price)
                    .replace('{{buttonLabel}}', cardData.buttonLabel);
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = cardHTML;
                this.featuredCardsContainer.appendChild(card);
            });
        });

        // Render the trending NFT cards
        const trendingData = [
            {
                imageSrc: 'https://via.placeholder.com/300x200.png?text=Trending+1',
                title: 'Trending NFT 1',
                description: 'Vivamus auctor nisl a velit hendrerit, vel tristique sapien aliquam. Donec efficitur risus sed turpis facilisis, quis vestibulum tortor tristique.',
                price: '4 ETH',
                buttonLabel: 'Buy now'
            },
            {
                imageSrc: 'https://via.placeholder.com/300x200.png?text=Trending+2',
                title: 'Trending NFT 2',
                description: 'Suspendisse potenti. Curabitur pharetra blandit tincidunt. Praesent molestie felis nec odio tincidunt consequat.',
                price: '5 ETH',
                buttonLabel: 'Buy now'
            },
            {
                imageSrc: 'https://via.placeholder.com/300x200.png?text=Trending+3',
                title: 'Trending NFT 3',
                description: 'Mauris vitae dapibus lorem. Sed malesuada sapien vel lorem cursus, quis vestibulum nibh finibus. A'
            }];

        this.trendingCardsContainer = document.createElement('div');
        this.trendingCardsContainer.setAttribute('id', 'trending-cards');

        cardTemplatePromise.then((cardTemplate) => {
            trendingData.forEach((cardData) => {
                const cardHTML = cardTemplate
                    .replace('{{imageSrc}}', cardData.imageSrc)
                    .replace('{{title}}', cardData.title)
                    .replace('{{description}}', cardData.description)
                    .replace('{{price}}', cardData.price)
                    .replace('{{buttonLabel}}', cardData.buttonLabel);
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = cardHTML;
                this.trendingCardsContainer.appendChild(card);
            });
        });

        const graphTemplatePromise = fetch('graph.html').then((response) => response.text());

        const graphData = [
            { date: '2022-01-01', price: 0.5 },
            { date: '2022-01-02', price: 0.6 },
            { date: '2022-01-03', price: 0.7 },
            { date: '2022-01-04', price: 0.8 },
            { date: '2022-01-05', price: 0.9 },
            { date: '2022-01-06', price: 1.0 },
            { date: '2022-01-07', price: 1.1 },
            { date: '2022-01-08', price: 1.2 },
            { date: '2022-01-09', price: 1.3 },
            { date: '2022-01-10', price: 1.4 },
            { date: '2022-01-11', price: 1.5 },
            { date: '2022-01-12', price: 1.6 },
            { date: '2022-01-13', price: 1.7 },
            { date: '2022-01-14', price: 1.8 },
            { date: '2022-01-15', price: 1.9 },
            { date: '2022-01-16', price: 2.0 },
        ];

        graphTemplatePromise.then((graphTemplate) => {
            const graphHTML = graphTemplate.replace('{{data}}', JSON.stringify(graphData));
            this.graph = document.createElement('div');
            this.graph.classList.add('graph');
            this.graph.innerHTML = graphHTML;
        });
    }

    connectedCallback() {
        fetch('views/store/store.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html.trim();
            });
    }
}

customElements.define('store-app', NFTStore);