/* Function For Count Icon */
let cartCount = 0;
function addToCart(productName, productImage, productDescription, productPrice) {
    cartCount++;
    updateCartCount();

    const cartItemsList = document.getElementById("cart-items");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${productName}</h3>
      <img src="${productImage}" alt="${productName}"> 
      <p>${productDescription}</p>
      <p>Price: ₱${productPrice}</p>
      <button class="remove-button" onclick="removeFromCart(this)">Remove</button>
    `;
    cartItemsList.appendChild(listItem);

    alert("Item added to cart!");
}
function removeFromCart(button) {
    const listItem = button.parentNode;
    listItem.remove();
    cartCount--;
    updateCartCount();
}
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartCount;
}

/* Function Cart Modal */
function openCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "block";
    modal.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    modal.style.borderRadius = "10px";
}

function closeCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "none";
}


