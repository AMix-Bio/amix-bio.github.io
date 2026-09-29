const pfarenaNavLinks = Array.from(document.querySelectorAll("[data-nav-target]"));
const pfarenaNavSections = pfarenaNavLinks
  .map((link) => document.getElementById(link.dataset.navTarget))
  .filter(Boolean);
let pfarenaPinnedNavTarget = null;

function setPFArenaActiveNav(sectionId) {
  pfarenaNavLinks.forEach((link) => {
    const active = link.dataset.navTarget === sectionId;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updatePFArenaActiveNav() {
  const isEnglish = document.documentElement.lang === "en";
  const visibleSections = pfarenaNavSections.filter(section => section.id.endsWith("-en") === isEnglish);
  if (!visibleSections.length) return;

  if (pfarenaPinnedNavTarget) {
    setPFArenaActiveNav(pfarenaPinnedNavTarget);
    return;
  }

  const page = document.documentElement;
  const distanceFromBottom = page.scrollHeight - (window.scrollY + window.innerHeight);
  const finalSection = visibleSections[visibleSections.length - 1];

  if (distanceFromBottom <= 80) {
    setPFArenaActiveNav(finalSection.id);
    return;
  }

  const readingLine = Math.min(120, window.innerHeight * 0.15);
  let activeSection = visibleSections[0];

  visibleSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= readingLine) {
      activeSection = section;
    }
  });

  setPFArenaActiveNav(activeSection.id);
}

window.addEventListener("scroll", updatePFArenaActiveNav, { passive: true });
window.addEventListener("resize", updatePFArenaActiveNav);
window.addEventListener("hashchange", () => requestAnimationFrame(updatePFArenaActiveNav));
window.addEventListener("load", updatePFArenaActiveNav);

document.querySelectorAll(".locale-button").forEach((button) => {
  button.addEventListener("click", syncPFArenaNavigation);
});

pfarenaNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    pfarenaPinnedNavTarget = link.dataset.navTarget;
    setPFArenaActiveNav(pfarenaPinnedNavTarget);
  });
});

function releasePFArenaPinnedNav() {
  if (!pfarenaPinnedNavTarget) return;
  pfarenaPinnedNavTarget = null;
  requestAnimationFrame(updatePFArenaActiveNav);
}

window.addEventListener("wheel", releasePFArenaPinnedNav, { passive: true });
window.addEventListener("touchstart", releasePFArenaPinnedNav, { passive: true });
window.addEventListener("pointerdown", releasePFArenaPinnedNav, { passive: true });
window.addEventListener("keydown", releasePFArenaPinnedNav);

function syncPFArenaNavigation() {
  const isEnglish = document.documentElement.lang === "en";
  const currentId = window.location.hash.slice(1);
  const sectionId = currentId.replace(/-en$/, "");
  const nextId = isEnglish ? `${sectionId}-en` : sectionId;
  if (pfarenaNavSections.some(section => section.id === nextId) && currentId !== nextId) {
    window.history.replaceState(window.history.state, "", `#${nextId}`);
  }
  pfarenaPinnedNavTarget = pfarenaPinnedNavTarget ? (isEnglish ? `${pfarenaPinnedNavTarget.replace(/-en$/, "")}-en` : pfarenaPinnedNavTarget.replace(/-en$/, "")) : null;
  requestAnimationFrame(updatePFArenaActiveNav);
}

syncPFArenaNavigation();
updatePFArenaActiveNav();
