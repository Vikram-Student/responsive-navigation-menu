
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (menuToggle && navLinks && dropdownToggle && dropdownMenu) {
  function closeDropdown(returnFocus = false) {
    dropdownMenu.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");

    if (returnFocus) {
      dropdownToggle.focus();
    }
  }

  function closeMobileMenu(returnFocus = false) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    if (returnFocus) {
      menuToggle.focus();
    }
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdownMenu.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeDropdown();
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      closeDropdown();
    }

    if (
      window.innerWidth <= 768 &&
      !event.target.closest(".navbar")
    ) {
      closeDropdown();
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const dropdownIsOpen = dropdownMenu.classList.contains("open");
    const mobileMenuIsOpen = navLinks.classList.contains("open");

    if (dropdownIsOpen) {
      closeDropdown(true);
    }

    if (mobileMenuIsOpen) {
      closeMobileMenu(true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
      closeDropdown();
    }
  });
}
