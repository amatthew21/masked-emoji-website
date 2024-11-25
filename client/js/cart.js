function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// Function to remove an item from the cart by index
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);  // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();  // Refresh the cart display
}

function displayCart() {
    let cart = getCart();
    let cartContainer = document.getElementById('cart-container');
    let cartTotalElement = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalElement.innerHTML = "";  // Hide total if cart is empty
        return;
    }

    // Display cart items
    let cartHTML = "<ul>";
    cart.forEach((item, index) => {
        cartHTML += `
            <li>
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </li>`;
    });
    cartHTML += "</ul>";

    cartContainer.innerHTML = cartHTML;

    // Calculate and display total
    let total = calculateTotal(cart);
    cartTotalElement.innerHTML = `Total: $${total}`;
}
