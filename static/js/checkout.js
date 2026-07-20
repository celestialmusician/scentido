//==================================================
// LINO - CHECKOUT
//==================================================

const container = document.getElementById("checkoutItems");
const subtotal = document.getElementById("subtotal");
const grandTotal = document.getElementById("grandTotal");
const placeOrderBtn = document.getElementById("placeOrderBtn");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

//--------------------------------------
// EMPTY CART
//--------------------------------------

if (cart.length === 0) {

    container.innerHTML = `

        <div class="empty-checkout">

            <h3>Your Bag is Empty</h3>

            <p>Add your favourite fragrance to continue.</p>

        </div>

    `;

    subtotal.textContent = "₹0";
    grandTotal.textContent = "₹0";

} else {

    cart.forEach(item => {

        const price =
            Number(item.price.replace(/[^\d]/g, ""));

        const itemTotal =
            price * item.quantity;

        total += itemTotal;

        container.innerHTML += `

            <div class="checkout-item">

                <img src="${item.image}"
                     alt="${item.name}">

                <div class="checkout-info">

                    <h4>${item.name}</h4>

                    <p>Qty : ${item.quantity}</p>

                </div>

                <strong>

                    ₹${itemTotal.toLocaleString("en-IN")}

                </strong>

            </div>

        `;

    });

    subtotal.textContent =
        `₹${total.toLocaleString("en-IN")}`;

    grandTotal.textContent =
        `₹${total.toLocaleString("en-IN")}`;

}

//--------------------------------------
// PLACE ORDER
//--------------------------------------

if (placeOrderBtn) {

    placeOrderBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        const loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn !== "true") {

            const goToLogin = confirm(
                "🔒 You need to sign in first to place your order.\n\nGo to Login page?"
            );

            if (goToLogin) {

                window.location.href = "/login/";

            }

            return;

        }

        //--------------------------------------
// SAVE ORDER
//--------------------------------------

let orders = JSON.parse(localStorage.getItem("orders")) || [];

cart.forEach(item => {

    orders.push({

        id: "SCN" + Date.now(),

        name: item.name,

        image: item.image,

        quantity: item.quantity,

        price: item.price,

        date: new Date().toLocaleDateString("en-IN", {

            day: "2-digit",
            month: "short",
            year: "numeric"

        }),

        status: "Delivered"

    });

});

localStorage.setItem(

    "orders",

    JSON.stringify(orders)

);

        localStorage.removeItem("cart");

        if (typeof updateCartCount === "function") {

            updateCartCount();

        }

        window.location.href = "/order-success/";

    });

}