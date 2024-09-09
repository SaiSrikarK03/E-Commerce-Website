//filter
function showSection() {
    var sectionId = document.getElementById("sectionSelect").value;
    var sections = document.getElementsByClassName('data-section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }
    if (sectionId === "all") {
      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('active');
      }
    } else {
      var section = document.getElementById(sectionId);
      section.classList.add('active');
    }
  }
  // Global variables
let cartItems = [];
let totalPrice = 0;
// Function to add item to the cart
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  totalPrice += price;
  updateCartDisplay();
}
// Function to update the cart display
function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}
// Function to handle the checkout process
function checkout() {
  alert(`Total: $${totalPrice.toFixed(2)}\nThank you for shopping with us!`);
  cartItems = [];
  totalPrice = 0;
  updateCartDisplay();
}