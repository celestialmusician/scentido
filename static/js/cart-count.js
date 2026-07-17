document.addEventListener("DOMContentLoaded", () => {

    const badge =
        document.getElementById("cartCount");

    if (!badge) return;

    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let total = 0;

    cart.forEach(item => {

        total += item.quantity || 1;

    });

    badge.textContent = total;

});