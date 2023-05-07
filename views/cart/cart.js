class CartComponent extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Load the selected items from local storage
        const selectedItems = JSON.parse(localStorage.getItem('selectedItems'));

        // Create a container for the cart items
        const cartItemsContainer = document.createElement('div');
        cartItemsContainer.setAttribute('id', 'cart-items');
        shadow.appendChild(cartItemsContainer);

        // Render the cart items
        selectedItems.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            const image = document.createElement('img');
            image.src = item.imageSrc;
            cartItem.appendChild(image);
            const title = document.createElement('h3');
            title.textContent = item.title;
            cartItem.appendChild(title);
            const description = document.createElement('p');
            description.textContent = item.description;
            cartItem.appendChild(description);
            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = item.price;
            cartItem.appendChild(price);
            cartItemsContainer.appendChild(cartItem);
        });

        // Calculate and display the total price
        const totalPrice = selectedItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
        const totalPriceContainer = document.createElement('div');
        totalPriceContainer.setAttribute('id', 'total-price');
        totalPriceContainer.textContent = `Total Price: ${totalPrice} ETH`;
        shadow.appendChild(totalPriceContainer);
    }
}

// Define the custom element
customElements.define('cart-component', CartComponent);