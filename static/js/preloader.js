window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    setTimeout(function () {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        preloader.style.pointerEvents = "none";

    }, 100);

});