(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    (() => {
        const mobileMenu = document.querySelector(".js-menu-container");
        const openMenuBtn = document.querySelector(".js-open-menu");
        const closeMenuBtn = document.querySelector(".js-close-menu");
        const closeMenuLink = document.querySelectorAll(".nav-menu-link");
        const toggleMenu = () => {
            const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
            openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
            mobileMenu.classList.toggle("is-open");
        };
        openMenuBtn.addEventListener("click", toggleMenu);
        closeMenuBtn.addEventListener("click", toggleMenu);
        closeMenuLink.forEach((link => link.addEventListener("click", toggleMenu)));
        window.matchMedia("(min-width: 1200px)").addEventListener("change", (e => {
            if (!e.matches) return;
            mobileMenu.classList.remove("is-open");
            openMenuBtn.setAttribute("aria-expanded", false);
        }));
    })();
    "use strict";
    document.addEventListener("click", documentClick);
    function documentClick(e) {
        const targetItem = e.target;
        if (targetItem.closest(".modal-scroll")) document.documentElement.classList.toggle("is-active");
    }
    window["FLS"] = true;
    isWebp();
})();