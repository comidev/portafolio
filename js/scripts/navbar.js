const btnToggle = document.querySelector(".toggle_menu");
const iconToggle = document.querySelector(".toggle_menu i");
const navBar = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");

btnToggle.addEventListener("click", () => {
    const isOpen = iconToggle.classList.contains("uil-multiply");
    if (isOpen) {
        iconToggle.classList.remove("uil-multiply");
        iconToggle.classList.add("uil-bars");
        navMenu.style.left = "-17rem";
    } else {
        iconToggle.classList.remove("uil-bars");
        iconToggle.classList.add("uil-multiply");
        navMenu.style.left = "0.5rem";
    }
});

window.addEventListener("scroll", (e) => {
    const changueColor = window.scrollY >= 80;
    if (changueColor) {
        navBar.style.backgroundColor = "var(--color-white)";
        navBar.style.boxShadow = "0px 1px 1px 1px rgba(0, 0, 0, 0.05)";
    } else {
        navBar.style.backgroundColor = "transparent";
        navBar.style.boxShadow = "0px 1px 1px 1px transparent";
    }
});
