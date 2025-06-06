document.addEventListener('DOMContentLoaded', () => {
  // Select all "Add to Cart" buttons
  const buttons = document.querySelectorAll('.product-card button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h4').textContent;
      alert(`"${productName}" has been added to your cart!`);
    });
  });
});
