const btn = document.getElementById("wishlist-btn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
  const product = { name: "Product Name", price: 59.99 };
  localStorage.setItem("wishlist", JSON.stringify(product));
  status.textContent = "Saved to wishlist!";
});
