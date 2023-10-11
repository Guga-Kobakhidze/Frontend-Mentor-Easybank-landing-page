// BurgerMenu Show //

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const body = document.body;

if (navToggle && navClose) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    body.style.background = "rgba(128, 128, 128, 0.797)";
    navToggle.style.display = "none";
    navClose.style.display = "flex";
  });

  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    body.style.background = "var(--Very-Light-Gray)";
    navToggle.style.display = "flex";
    navClose.style.display = "none";
  });
}

/* Remove Menu Mobile */

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  body.style.background = "var(--Very-Light-Gray)";
  navToggle.style.display = "flex";
  navClose.style.display = "none";
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
