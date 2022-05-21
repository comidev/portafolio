const btnToggle = document.querySelector(".toggle_menu");
const iconToggle = document.querySelector(".toggle_menu i");
const navBar = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");

const btnToggleTheme = document.getElementById("theme");
const contentTheme = document.querySelector(".theme-icon");

/*
    <li class="theme-container">
        <button id="theme" class="toggle-theme">
            <span class="theme-icon">D</span>
        </button>
    </li>
*/

// CAMBIANDO DE TEMA

const toggleTheme = (isThemeLight) => {
    if (isThemeLight) {
        btnToggleTheme.style.justifyContent = "flex-end";
        btnToggleTheme.style.backgroundColor = "#57f";
        contentTheme.classList.remove("uil-sun");
        contentTheme.classList.add("uil-moon");
        console.log("Modo dark");
        window.localStorage.setItem("tema", "dark");

        document.body.classList.add("dark-theme");
        contentTheme.classList.remove("light-color");
    } else {
        btnToggleTheme.style.justifyContent = "flex-start";
        btnToggleTheme.style.backgroundColor = "#ccc";
        contentTheme.classList.remove("uil-moon");
        contentTheme.classList.add("uil-sun");
        console.log("Modo light");
        window.localStorage.setItem("tema", "light");

        document.body.classList.remove("dark-theme");
        contentTheme.classList.add("light-color");
    }
};

const verificarTema = () => {
    const tema = window.localStorage.getItem("tema");
    const isThemeLight = tema && tema === "light";
    toggleTheme(!isThemeLight);
};

verificarTema();

btnToggleTheme.addEventListener("click", () => {
    const isThemeLight = btnToggleTheme.style.justifyContent.includes("start");
    toggleTheme(isThemeLight);
});

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
    const changueColor = window.scrollY >= 64;
    if (changueColor) {
        navBar.style.backgroundColor = "var(--bg-color1)";
        navBar.style.boxShadow = "var(--box-bottom)";
    } else {
        navBar.style.backgroundColor = "transparent";
        navBar.style.boxShadow = "0px 1px 1px 1px transparent";
    }
});
