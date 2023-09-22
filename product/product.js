// Function to add an item to the cart
function addToCart(button) {
  const productElement = button.parentElement;
  const product = {
    name: productElement.getAttribute('data-product'),
    price: parseFloat(productElement.getAttribute('data-price')),
  };

  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex(item => item.name === product.name);

  if (existingProductIndex !== -1) {
    // If the product exists, increment its quantity
    cart[existingProductIndex].quantity++;
  } else {
    // If it doesn't exist, add it to the cart with quantity 1
    product.quantity = 1;
    cart.push(product);
  }

  // Update the cart display
  updateCart();

  // Save the updated cart data to Local Storage
  localStorage.setItem('cart', JSON.stringify(cart));
}
