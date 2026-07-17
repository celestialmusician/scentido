//==========================================
// SCENTIDO WISHLIST
//==========================================

document.addEventListener("DOMContentLoaded", () => {

    const container =
        document.getElementById("wishlistContainer");

    if (!container) return;

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    //======================================
    // EMPTY
    //======================================

    if (wishlist.length === 0) {

        container.innerHTML = `

        <div class="wishlist-empty">

            <h2>Your Wishlist is Empty</h2>

            <p>

                Save your favourite fragrances
                to view them here.

            </p>

            <a href="/collections/"
               class="btn-luxury">

                <span>

                    Explore Collection

                </span>

            </a>

        </div>

        `;

        return;

    }

    //======================================
    // PRODUCTS
    //======================================

    let html = "";

    wishlist.forEach((item,index)=>{

        html += `

        <div class="wishlist-card">

            <div class="wishlist-image">

                <img src="${item.image}" alt="${item.name}">

            </div>

            <div class="wishlist-content">

                <h2>${item.name}</h2>

                <div class="wishlist-price">

                    ${item.price}

                </div>

                <div class="wishlist-buttons">

                    <a
                        href="/product/${item.slug}/"

                        class="btn-primary">

                        View Product

                    </a>

                    <button

                        class="btn-secondary remove-btn"

                        data-index="${index}">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

    //======================================
    // REMOVE
    //======================================

    document.querySelectorAll(".remove-btn")

    .forEach(btn=>{

        btn.addEventListener("click",()=>{

            wishlist.splice(btn.dataset.index,1);

            localStorage.setItem(

                "wishlist",

                JSON.stringify(wishlist)

            );

            location.reload();

        });

    });

});


