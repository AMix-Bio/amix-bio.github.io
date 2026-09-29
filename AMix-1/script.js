const amix1NavLinks = Array.from(document.querySelectorAll("[data-nav-target]"));
const amix1NavSections = amix1NavLinks
  .map((link) => document.getElementById(link.dataset.navTarget))
  .filter(Boolean);
let amix1PinnedNavTarget = null;

function setAMix1ActiveNav(sectionId) {
  amix1NavLinks.forEach((link) => {
    const active = link.dataset.navTarget === sectionId;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateAMix1ActiveNav() {
  const isChinese = document.documentElement.lang === "zh-CN";
  const visibleSections = amix1NavSections.filter((section) => section.id.endsWith("-zh") === isChinese);
  if (!visibleSections.length) return;

  if (amix1PinnedNavTarget) {
    setAMix1ActiveNav(amix1PinnedNavTarget);
    return;
  }

  const page = document.documentElement;
  const distanceFromBottom = page.scrollHeight - (window.scrollY + window.innerHeight);
  const finalSection = visibleSections[visibleSections.length - 1];

  if (distanceFromBottom <= 80) {
    setAMix1ActiveNav(finalSection.id);
    return;
  }

  const readingLine = Math.min(120, window.innerHeight * 0.15);
  let activeSection = visibleSections[0];

  visibleSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= readingLine) {
      activeSection = section;
    }
  });

  setAMix1ActiveNav(activeSection.id);
}

window.addEventListener("scroll", updateAMix1ActiveNav, { passive: true });
window.addEventListener("resize", updateAMix1ActiveNav);
window.addEventListener("hashchange", () => requestAnimationFrame(updateAMix1ActiveNav));
window.addEventListener("load", updateAMix1ActiveNav);

document.querySelectorAll(".locale-button").forEach((button) => {
  button.addEventListener("click", () => requestAnimationFrame(updateAMix1ActiveNav));
});

amix1NavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    amix1PinnedNavTarget = link.dataset.navTarget;
    setAMix1ActiveNav(amix1PinnedNavTarget);
  });
});

function releaseAMix1PinnedNav() {
  if (!amix1PinnedNavTarget) return;
  amix1PinnedNavTarget = null;
  requestAnimationFrame(updateAMix1ActiveNav);
}

window.addEventListener("wheel", releaseAMix1PinnedNav, { passive: true });
window.addEventListener("touchstart", releaseAMix1PinnedNav, { passive: true });
window.addEventListener("pointerdown", releaseAMix1PinnedNav, { passive: true });
window.addEventListener("keydown", releaseAMix1PinnedNav);

updateAMix1ActiveNav();
requestAnimationFrame(updateAMix1ActiveNav);
