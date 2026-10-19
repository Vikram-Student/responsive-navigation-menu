
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Mobile navigation toggle
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close mobile navigation after selecting a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    dropdownMenu.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  });
});

// Services dropdown toggle
dropdownToggle.addEventListener("click", () => {
  const isOpen = dropdownMenu.classList.toggle("open");
  dropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close dropdown when clicking outside it
document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  }
});

// Close menus using Escape
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const dropdownIsOpen = dropdownMenu.classList.contains("open");
  const mobileMenuIsOpen = navLinks.classList.contains("open");

  if (dropdownIsOpen) {
    dropdownMenu.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdownToggle.focus();
  }

  if (mobileMenuIsOpen) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.focus();
  }
});

// Reset mobile menu when returning to desktop width
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});
