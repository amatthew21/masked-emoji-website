function addToCart(productName, productPrice) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push({ name: productName, price: productPrice });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function displayCart() {
    let cart = getCart();
    let cartContainer = document.getElementById('cart-container');

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let cartHTML = "<ul>";
    cart.forEach(item => {
        cartHTML += `<li>${item.name} - $${item.price}</li>`;
    });
    cartHTML += "</ul>";

    cartContainer.innerHTML = cartHTML;
}