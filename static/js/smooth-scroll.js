/*==================================================
            SCENTIDO
        LENIS SMOOTH SCROLL
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    if (typeof Lenis === "undefined") {

        console.error("Lenis library failed to load.");

        return;

    }

    const lenis = new Lenis({

        autoRaf: true,

        duration: 1.2,

        smoothWheel: true,

        syncTouch: true,

        wheelMultiplier: 1,

        touchMultiplier: 1.5,

    });

    window.lenis = lenis;

    console.log("✅ Lenis Loaded");

});