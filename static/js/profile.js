document.addEventListener("DOMContentLoaded", () => {

    // Check Demo Login

    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {

        window.location.href = "/login/";

        return;

    }

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const logoutBtn = document.getElementById("logoutBtn");

    // Load Demo User

    const name = localStorage.getItem("userName") || "Guest User";

    const email = localStorage.getItem("userEmail") || "guest@scentido.com";

    userName.textContent = name;

    userEmail.textContent = email;

    // Logout

    if (logoutBtn) {

        logoutBtn.addEventListener("click", (e) => {

            e.preventDefault();

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");

            alert("Logged out successfully.");

            window.location.href = "/";

        });

    }

});