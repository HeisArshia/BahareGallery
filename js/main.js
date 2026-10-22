/* ========================================
   1. MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Uses the translated text from lang.js when available.
function menuLabel(key, fallback) {
    return window.i18n ? window.i18n.t(key) : fallback;
}

if (menuToggle && navLinks) {
    function closeMenu() {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            menuLabel("menu.open", "Open navigation menu")
        );
    }

    function openMenu() {
        navLinks.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute(
            "aria-label",
            menuLabel("menu.close", "Close navigation menu")
        );
    }

    menuToggle.addEventListener("click", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu after choosing a navigation link.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close the menu when the user presses Escape.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });

    // Close the mobile menu when returning to desktop layout.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            closeMenu();
        }
    });

    // Keep the button label correct after a language change.
    document.addEventListener("i18n:change", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? menuLabel("menu.close", "Close navigation menu")
                : menuLabel("menu.open", "Open navigation menu")
        );
    });
}


/* ========================================
   2. AUTOMATIC COPYRIGHT YEAR
======================================== */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
