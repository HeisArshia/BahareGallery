
/* ========================================
   1. CATEGORY FILTERING
======================================== */

const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
const visibleCount = document.querySelector("#visible-count");

let activeFilter = "all";

function applyFilter(category) {
    activeFilter = category;

    let count = 0;

    galleryItems.forEach((item) => {
        const matches =
            category === "all" ||
            item.dataset.category === category;

        item.hidden = !matches;

        if (matches) {
            count++;
        }
    });

    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === category;

        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    if (visibleCount) {
        visibleCount.textContent = count;
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyFilter(button.dataset.filter);
    });
});

applyFilter("all");


/* ========================================
   2. LIGHTBOX ELEMENTS
======================================== */

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");

const closeButton = document.querySelector("#lightbox-close");
const previousButton = document.querySelector("#lightbox-prev");
const nextButton = document.querySelector("#lightbox-next");

let currentIndex = 0;
let previousFocus = null;

function getVisibleItems() {
    return galleryItems.filter((item) => !item.hidden);
}

function showImage(index) {
    const visibleItems = getVisibleItems();

    if (visibleItems.length === 0) return;

    // Wrap around at either end of the gallery.
    currentIndex =
        (index + visibleItems.length) % visibleItems.length;

    const item = visibleItems[currentIndex];
    const thumbnail = item.querySelector("img");

    lightboxImage.src = item.dataset.full || thumbnail.src;
    lightboxImage.alt = item.dataset.alt || thumbnail.alt;

    lightboxCaption.textContent =
        `${currentIndex + 1} / ${visibleItems.length} — ` +
        item.dataset.category;
}

function openLightbox(item) {
    const visibleItems = getVisibleItems();

    currentIndex = visibleItems.indexOf(item);
    previousFocus = item;

    showImage(currentIndex);

    if (!lightbox.open) {
        lightbox.showModal();
    }
}

function closeLightbox() {
    if (lightbox.open) {
        lightbox.close();
    }
}


/* ========================================
   3. LIGHTBOX EVENT LISTENERS
======================================== */

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        openLightbox(item);
    });
});

closeButton.addEventListener("click", closeLightbox);

previousButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
});

// Clicking the backdrop closes the lightbox.
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Restore keyboard focus when the dialog closes.
lightbox.addEventListener("close", () => {
    if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
    }
});

// Keyboard navigation while the lightbox is open.
document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }
});
