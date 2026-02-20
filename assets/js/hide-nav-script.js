let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // scrolling down
        navbar.classList.add("hide-nav");
    } else {
        // scrolling up
        navbar.classList.remove("hide-nav");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});