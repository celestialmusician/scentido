//==================================================
// LINO - QUICK VIEW
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("quickView");

    if (!modal) return;

    const closeBtn = document.getElementById("quickClose");

    const quickImage = document.getElementById("quickImage");
    const quickTitle = document.getElementById("quickTitle");
    const quickSubtitle = document.getElementById("quickSubtitle");
    const quickPrice = document.getElementById("quickPrice");
    const quickLink = document.getElementById("quickProductLink");

    const cartBtn = document.getElementById("quickCartBtn");
    const buyNowBtn = document.getElementById("quickBuyNowBtn");
    const wishlistBtn = document.getElementById("quickWishlistBtn");

    const qtyMinus = document.getElementById("quickQtyMinus");
    const qtyPlus = document.getElementById("quickQtyPlus");
    const qtyValue = document.getElementById("quickQty");

    let quantity = 1;

const buttons = document.querySelectorAll(".quick-view-btn");   

buttons.forEach(button => {
    console.log(button.dataset.link);
});


//--------------------------------------
    // OPEN QUICK VIEW
    //--------------------------------------

    buttons.forEach((button) => {

        button.addEventListener("click", (e) => {

    // Explore button click cheythaal normal link follow cheyyatte
    if (e.target.closest(".btn-luxury")) {
        return;
    }

    e.preventDefault();

    quickImage.src = button.dataset.image;
    quickTitle.textContent = button.dataset.name;
    quickSubtitle.textContent = button.dataset.subtitle;
    quickPrice.textContent = button.dataset.price;

    if (button.dataset.link) {
        quickLink.href = button.dataset.link;
        console.log(quickLink.href);
    }

            if (cartBtn) {

                cartBtn.dataset.slug = button.dataset.slug;
                cartBtn.dataset.name = button.dataset.name;
                cartBtn.dataset.price = button.dataset.price;
                cartBtn.dataset.image = button.dataset.image;

            }

            if (buyNowBtn) {

                buyNowBtn.dataset.slug = button.dataset.slug;
                buyNowBtn.dataset.name = button.dataset.name;
                buyNowBtn.dataset.price = button.dataset.price;
                buyNowBtn.dataset.image = button.dataset.image;

            }

            if (wishlistBtn) {

                wishlistBtn.dataset.slug = button.dataset.slug;
                wishlistBtn.dataset.name = button.dataset.name;
                wishlistBtn.dataset.price = button.dataset.price;
                wishlistBtn.dataset.image = button.dataset.image;

            }

            quantity = 1;
            qtyValue.textContent = quantity;

            quantity = 1;
qtyValue.textContent = quantity;

let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

const exists =
    wishlist.find(item => item.slug === button.dataset.slug);

if (exists) {

    wishlistBtn.innerHTML = `
        <i class="fa-solid fa-heart"></i>
        Wishlisted
    `;

} else {

    wishlistBtn.innerHTML = `
        <i class="fa-regular fa-heart"></i>
        Wishlist
    `;

}

            modal.classList.add("active");

            const whatsapp =
    document.getElementById("whatsappWidget");

if (whatsapp){

    whatsapp.classList.add("whatsapp-hidden");

}
            

if (window.lenis) {
    window.lenis.stop();
}
document.documentElement.classList.add("lenis-stopped");
document.body.style.overflow = "hidden";

        });

    });

    //--------------------------------------
    // QUANTITY PLUS
    //--------------------------------------

    if (qtyPlus) {

        qtyPlus.addEventListener("click", () => {

            quantity++;
            qtyValue.textContent = quantity;

        });

    }

    //--------------------------------------
    // QUANTITY MINUS
    //--------------------------------------

    if (qtyMinus) {

        qtyMinus.addEventListener("click", () => {

            if (quantity > 1) {

                quantity--;
                qtyValue.textContent = quantity;

            }

        });

    }

    //--------------------------------------
    // ADD TO BAG
    //--------------------------------------

    if (cartBtn) {

        cartBtn.addEventListener("click", (e) => {

            e.preventDefault();

            const product = {

                name: cartBtn.dataset.name,
                price: cartBtn.dataset.price,
                image: cartBtn.dataset.image,
                slug: cartBtn.dataset.slug,
                quantity: quantity

            };

            addToCart(product);

            cartBtn.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                Added To Bag
            `;

            setTimeout(() => {

                cartBtn.innerHTML = `
                    <i class="fa-solid fa-bag-shopping"></i>
                    Add To Bag
                `;

            }, 1500);

        });

    }

    //--------------------------------------
    // BUY NOW
    //--------------------------------------

    if (buyNowBtn) {

        buyNowBtn.addEventListener("click", (e) => {

            e.preventDefault();

            const product = {

                name: buyNowBtn.dataset.name,
                price: buyNowBtn.dataset.price,
                image: buyNowBtn.dataset.image,
                slug: buyNowBtn.dataset.slug,
                quantity: quantity

            };

            addToCart(product);

            window.location.href = "/checkout/";

        });

    }

//--------------------------------------
// WISHLIST
//--------------------------------------

if (wishlistBtn) {

    wishlistBtn.addEventListener("click", (e) => {

        e.preventDefault();

        let wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const product = {

            slug: wishlistBtn.dataset.slug,
            name: wishlistBtn.dataset.name,
            price: wishlistBtn.dataset.price,
            image: wishlistBtn.dataset.image

        };

        const exists = wishlist.find(item => item.slug === product.slug);

        if (!exists) {

            wishlist.push(product);

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            wishlistBtn.innerHTML = `
                <i class="fa-solid fa-heart"></i>
                Wishlisted
            `;

        } else {

            wishlist = wishlist.filter(
                item => item.slug !== product.slug
            );

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            wishlistBtn.innerHTML = `
                <i class="fa-regular fa-heart"></i>
                Wishlist
            `;

        }

    });

}   

    //--------------------------------------
    // CLOSE MODAL
    //--------------------------------------

    function closeModal() {

        modal.classList.remove("active");

        const whatsapp =
    document.getElementById("whatsappWidget");

if (whatsapp){

    whatsapp.classList.remove("whatsapp-hidden");

}

if (window.lenis) {
    window.lenis.start();
}
document.documentElement.classList.remove("lenis-stopped");
document.body.style.overflow = "";

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", closeModal);

    }

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    if (quickLink) {

    quickLink.addEventListener("click", function (e) {

        e.preventDefault();

        const url = this.href;

        closeModal();

        setTimeout(() => {
            window.location.href = url;
        }, 300);

    });

}

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });

});