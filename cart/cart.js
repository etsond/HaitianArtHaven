 // Retrieve the cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Function to update the cart display
        function updateCart() {
          const cartContainer = document.querySelector('.cart');

          // Clear existing cart items
          cartContainer.innerHTML = '';

          // Loop through the cart items and generate HTML for each item
          cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.imageSrc;
            itemImage.alt = item.name;

            const itemDetails = document.createElement('div');
            itemDetails.classList.add('cart-item-details');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const artist = document.createElement('p');
            artist.textContent = `Artist: ${item.artist}`;

            const price = document.createElement('p');
            price.textContent = `Price: $${item.price.toFixed(2)}`;

            const itemPrice = document.createElement('div');
            itemPrice.classList.add('cart-item-price');
            itemPrice.textContent = `$${item.price.toFixed(2)}`;

            const itemControls = document.createElement('div');
            itemControls.classList.add('cart-item-controls');

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteCartItem(item));

            const addMoreButton = document.createElement('a');
            addMoreButton.classList.add('add-more-button');
            addMoreButton.href = '../product/products.html';
            addMoreButton.textContent = 'Add More';

            itemDetails.appendChild(itemName);
            itemDetails.appendChild(artist);
            itemDetails.appendChild(price);

            itemControls.appendChild(deleteButton);
            itemControls.appendChild(addMoreButton);

            cartItem.appendChild(itemImage);
            cartItem.appendChild(itemDetails);
            cartItem.appendChild(itemPrice);
            cartItem.appendChild(itemControls);

            cartContainer.appendChild(cartItem);
          });

          // Calculate and display the total price
          const cartTotal = document.createElement('div');
          cartTotal.classList.add('cart-total');

          const totalAmount = cart.reduce((total, item) => total + item.price, 0);
          const totalParagraph = document.createElement('p');
          totalParagraph.textContent = `Total: $${totalAmount.toFixed(2)}`;

          cartTotal.appendChild(totalParagraph);
          cartContainer.appendChild(cartTotal);
        }

        // Function to delete a cart item
        function deleteCartItem(item) {
          // Find the index of the item in the cart
          const itemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

          // If the item exists, remove it from the cart
          if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
          }

          // Update the cart display
          updateCart();

          // Save the updated cart data to local storage
          localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Initial cart display
        updateCart();

    