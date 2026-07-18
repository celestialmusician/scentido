document.addEventListener("DOMContentLoaded", () => {

    const widget = document.querySelector(".whatsapp-widget");

    if (!widget) return;

    /* Slide In */

    widget.style.opacity = "0";
    widget.style.transform = "translateX(80px)";

    setTimeout(() => {

        widget.style.transition = "all .6s ease";

        widget.style.opacity = "1";

        widget.style.transform = "translateX(0)";

    }, 700);

    /* Idle Pulse */

    setInterval(() => {

        widget.classList.add("pulse");

        setTimeout(() => {

            widget.classList.remove("pulse");

        }, 900);

    }, 8000);

});