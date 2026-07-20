/*==================================================
            LINO NAVBAR
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});





const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}





const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});

/*==========================================
        MOBILE DRAWER MENU
==========================================*/

const mobileMenu = document.querySelector(".mobile-menu");
const mobileOverlay = document.querySelector(".mobile-menu-overlay");
const mobileClose = document.querySelector(".mobile-close");

if (menuToggle && mobileMenu && mobileOverlay) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");
        mobileOverlay.classList.add("active");

        document.body.classList.add("menu-open");

    });

}

if (mobileClose) {

    mobileClose.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

}

if (mobileOverlay) {

    mobileOverlay.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

}

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        mobileOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});