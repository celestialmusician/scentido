//==================================================
// SCENTIDO - QUICK VIEW
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

    const wishlistBtn =
        document.getElementById("quickWishlistBtn");

    const cartBtn =
        document.getElementById("quickCartBtn");

    const buttons =
        document.querySelectorAll(".quick-view-btn");

    //------------------------------------
    // OPEN QUICK VIEW
    //------------------------------------

    buttons.forEach((button) => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            const product = {

                slug: button.dataset.slug,

                name: button.dataset.name,

                subtitle: button.dataset.subtitle,

                price: button.dataset.price,

                image: button.dataset.image

            };

            quickImage.src = product.image;
            quickImage.alt = product.name;

            quickTitle.textContent = product.name;
            quickSubtitle.textContent = product.subtitle;
            quickPrice.textContent = product.price;

            quickLink.href =
                `/product/${product.slug}/`;

            //--------------------------------
            // Wishlist Dataset
            //--------------------------------

            if (wishlistBtn) {

                wishlistBtn.dataset.slug = product.slug;
                wishlistBtn.dataset.name = product.name;
                wishlistBtn.dataset.price = product.price;
                wishlistBtn.dataset.image = product.image;

            }

            //--------------------------------
            // Cart Dataset
            //--------------------------------

            if (cartBtn) {

                cartBtn.dataset.slug = product.slug;
                cartBtn.dataset.name = product.name;
                cartBtn.dataset.price = product.price;
                cartBtn.dataset.image = product.image;

            }

            //--------------------------------
            // OPEN
            //--------------------------------

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    //------------------------------------
    // CLOSE FUNCTION
    //------------------------------------

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

    //------------------------------------
    // CLOSE BUTTON
    //------------------------------------

    if (closeBtn) {

        closeBtn.addEventListener(

            "click",

            closeModal

        );

    }

    //------------------------------------
    // CLICK OUTSIDE
    //------------------------------------

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

    //------------------------------------
    // ESC KEY
    //------------------------------------

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });

});


/*==========================================
        BUY NOW BUTTON
==========================================*/

.btn-buy-now{

    width:100%;

    height:54px;

    border:none;

    border-radius:14px;

    background:#000;

    color:#fff;

    font-size:15px;

    font-weight:600;

    cursor:pointer;

    transition:.35s;

    margin-top:14px;

}

.btn-buy-now:hover{

    background:#222;

    transform:translateY(-2px);

}
