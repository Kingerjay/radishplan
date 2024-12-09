const navEL = document.querySelector(".main-nav")


const mainNavEL = document.querySelector(".main-nav ul")

const rightnavEL = document.querySelector(".right-nav")

const hamburgerEl = document.querySelector(".hamburger")

hamburgerEl.addEventListener("click", () => {
    navEL.classList.toggle("nav--open");
    rightnavEL.classList.toggle("nav-open");
    hamburgerEl.classList.toggle("hamburger--open")
});

mainNavEL.addEventListener("click", () => {
    navEL.classList.remove("nav--open");
    rightnavEL.classList.remove("nav-open");
    hamburgerEl.classList.remove("hamburger--open")
});

rightnavEL.addEventListener("click", () => {
    navEL.classList.remove("nav--open");
    rightnavEL.classList.remove("nav-open");
    hamburgerEl.classList.remove("hamburger--open")
});

