const localeButtons = document.querySelectorAll(".locale-button");

function setDetailLanguage(language) {
  const nextLanguage = language === "zh" ? "zh" : "en";
  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  localeButtons.forEach((button) => {
    const active = button.dataset.lang === nextLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("amix-bio-language", nextLanguage);
}

localeButtons.forEach((button) => button.addEventListener("click", () => setDetailLanguage(button.dataset.lang)));
setDetailLanguage(localStorage.getItem("amix-bio-language") || "en");
