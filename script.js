const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
  });
});

const setHeaderTone = () => {
  if (!header) return;

  const hero = document.querySelector(".hero-full");
  if (!hero) {
    header.classList.add("on-light");
    return;
  }

  const headerHeight = header.getBoundingClientRect().height;
  const heroBottom = hero.getBoundingClientRect().bottom;
  header.classList.toggle("on-light", heroBottom <= headerHeight + 8);
};

setHeaderTone();
window.addEventListener("scroll", setHeaderTone, { passive: true });
window.addEventListener("resize", setHeaderTone);
