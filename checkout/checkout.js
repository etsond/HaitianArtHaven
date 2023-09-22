document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    const paymentForm = document.getElementById('payment-form');

    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart display and total
    function updateCheckoutCart() {
        cartItems.innerHTML = ''; // Clear previous items in cart

        if (cart.length === 0) {
            const emptyCartMessage = document.createElement('p');
            emptyCartMessage.textContent = 'Your cart is empty.';
            cartItems.appendChild(emptyCartMessage);
            checkoutTotal.textContent = '0.00';
        } else {
            let total = 0;

            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(li);
                total += item.price;
            });

            checkoutTotal.textContent = total.toFixed(2);
        }
    }

    // Initialize the checkout cart
    updateCheckoutCart();

    // Handle the form submission

    // TODO
    // Implement server-side processing here
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Retrieve payment information
        const cardNumber = document.getElementById('card-number').value;
        const expirationDate = document.getElementById('expiration-date').value;
        const cvv = document.getElementById('cvv').value;

        // TODO
        // implement payment processing logic here (API integration)

        // For this example, display a success message
        alert('Payment successful! Thank you for your purchase.');

        // Clear the cart and redirect to the home page
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; // Replace with the actual home page URL
    });
});
