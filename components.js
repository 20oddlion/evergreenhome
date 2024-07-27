
  document.addEventListener('DOMContentLoaded', function() {
    // Select all 'Add to Cart' buttons
    const buttons = document.querySelectorAll('.add-to-cart');

    // Add click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the product ID from the button's data attribute
        const productId = this.getAttribute('data-product-id');

        // Logic to add the product to the cart
        addToCart(productId);
      });
    });
  });

  function addToCart(productId) {
    // Here you would handle adding the item to the cart
    // For simplicity, we'll just log the product ID
    console.log('Added product with ID:', productId);

    // For a real application, you might want to send this data to the server or update local storage
    // Example:
    // fetch('/add-to-cart', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ productId })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Product added to cart:', data);
    // });
  }
