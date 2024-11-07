// Sample products data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to display products
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear the list before rendering

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Function to add product to the shopping cart
function addToCart(productId) {
  // Find the product by id
  const product = products.find((p) => p.id === productId);

  // Get cart from sessionStorage
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Add the product to the cart
  cart.push(product);

  // Save updated cart back to sessionStorage
  sessionStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart display
  displayCart();
}

// Function to display the shopping cart
function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Clear the cart list before rendering

  // Get cart from sessionStorage
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Add cart items to the display
  cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price}`;
    cartList.appendChild(li);
  });
}

// Function to clear the cart
function clearCart() {
  // Clear sessionStorage
  sessionStorage.removeItem("cart");

  // Update the cart display
  displayCart();
}

// Event listener for clearing the cart
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

// Initialize the page
function init() {
  // Display products on the page
  displayProducts();

  // Display the cart if there are items in sessionStorage
  displayCart();
}

// Run the init function when the page loads
window.onload = init;
