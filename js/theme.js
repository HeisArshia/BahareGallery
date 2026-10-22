/* ========================================
   THEME SWITCHER (light / dark)

   - First visit: follows the visitor's device setting.
   - After the visitor clicks the button, their choice
     is remembered on every page.
   - This file must load BEFORE lang.js so the right
     theme is applied before the page appears.
======================================== */

(function () {
    "use strict";

    const STORAGE_KEY = "bahare-theme";
    const root = document.documentElement;

    const systemDark = window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const reducedMotion = window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    // Button labels for screen readers / tooltips.
    const LABELS = {
        fa: {
            toDark: "فعال‌سازی حالت تاریک",
            toLight: "فعال‌سازی حالت روشن"
        },
        en: {
            toDark: "Switch to dark mode",
            toLight: "Switch to light mode"
        }
    };

    function getSavedTheme() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "light" || saved === "dark") return saved;
        } catch (error) {
            /* storage can be blocked; ignore */
        }
        return null;
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (error) {
            /* ignore */
        }
    }

    function getInitialTheme() {
        return (
            getSavedTheme() ||
            (systemDark && systemDark.matches ? "dark" : "light")
        );
    }

    function updateButtons(theme) {
        const lang = root.lang === "en" ? "en" : "fa";
        const label =
            theme === "dark" ? LABELS[lang].toLight : LABELS[lang].toDark;

        document.querySelectorAll(".theme-toggle").forEach((button) => {
            button.setAttribute("aria-label", label);
            button.setAttribute("title", label);
        });
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;
        updateButtons(theme);
    }

    function toggleTheme() {
        const next = root.dataset.theme === "dark" ? "light" : "dark";

        // Short, smooth colour fade (skipped for reduced-motion users).
        if (!reducedMotion || !reducedMotion.matches) {
            root.classList.add("theme-animating");
            setTimeout(() => root.classList.remove("theme-animating"), 400);
        }

        saveTheme(next);
        applyTheme(next);
    }


    /* ----------------------------------------
       START
    ---------------------------------------- */
    applyTheme(getInitialTheme());

    document.querySelectorAll(".theme-toggle").forEach((button) => {
        button.addEventListener("click", toggleTheme);
    });

    // Refresh the button label when the language changes.
    document.addEventListener("i18n:change", () => {
        updateButtons(root.dataset.theme);
    });

    // If the visitor never chose, follow the device if it changes.
    if (systemDark && systemDark.addEventListener) {
        systemDark.addEventListener("change", (event) => {
            if (!getSavedTheme()) {
                applyTheme(event.matches ? "dark" : "light");
            }
        });
    }
})();
