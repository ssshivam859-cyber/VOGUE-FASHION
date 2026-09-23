
// ========================================
// FASHION WEBSITE - JAVASCRIPT
// ========================================


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// ================================
// SEARCH
// ================================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
    searchBox.classList.add("active");
    searchInput.focus();
});

closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("active");
    searchInput.value = "";
});


// ================================
// PRODUCT SEARCH
// ================================

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

});


// ================================
// CATEGORY FILTER
// ================================

const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.category;

        const products =
            document.querySelectorAll(".product-card");

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

});


// ================================
// CART
// ================================

let  cart = [];

const cartBtn = 
document.getElementById("cartBtn");
const cartPanel = 
document.getElementById("cart");
const cartOverlay = 
document.getElementById("cartOverlay");
const closeCart = 
document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


// Open cart
cartBtn.addEventListener("click", () => {
    cartPanel.classList.add("active");
    cartOverlay.classList.add("active");
});


// Close cart
function hideCart() {
    cartPanel.classList.remove("active");
    cartOverlay.classList.remove("active");
}

closeCart.addEventListener("click", hideCart);
cartOverlay.addEventListener("click", hideCart);


// ================================
// ADD TO CART
// ================================

function addToCart(name, price) {

    const existingProduct =
        cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    cart.classList.add("active");
    cartOverlay.classList.add("active");
}


// ================================
// UPDATE CART
// ================================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    }

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                    × ${item.quantity}
                </p>
            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartCount.textContent = count;

    cartTotal.textContent =
        "₹" + total.toLocaleString("en-IN");

}


// ================================
// REMOVE FROM CART
// ================================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// ================================
// WISHLIST
// ================================

const wishlistButtons =
    document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    });

});


// ================================
// NEWSLETTER
// ================================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        newsletterForm.querySelector("input").value;

    alert(
        `Thank you! ${email} has been subscribed.`
    );

    newsletterForm.reset();

});


// ================================
// CHECKOUT
// ================================

document.querySelector(".checkout")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }

        alert(
            "Checkout system coming soon!"
        );

    });