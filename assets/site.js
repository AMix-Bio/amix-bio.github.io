const translations = {
  en: {
    navHome: "Home",
    eyebrow: "Life Sciences · AI-Powered Discovery",
    heroTitle: "AMix-Bio",
    heroIntro: "Toward the next frontier of AI for Science: intelligence that acts, learns, and remembers. Connecting fast models, real-world feedback, and learnable memory in a continuous cycle of scientific exploration.",
    heroClosing: "Intelligence generates experience. Experience deepens intelligence.",
    worksKicker: "Research publications",
    worksTitle: "Works",
    worksNote: "Models, benchmarks, and tools for protein intelligence.",
    timelineKicker: "Chronology",
    timelineTitle: "Release Timeline",
    footerCopyright: "© 2026 Shanghai Artificial Intelligence Laboratory All rights reserved.",
    footerContact: "Contact",
    footerTop: "Back to top"
  },
  zh: {
    navHome: "首页",
    eyebrow: "生命科学 · 智能探索",
    heroTitle: "AMix-Bio",
    heroIntro: "迈向 AI for Science 的新前沿：能行动、会学习、有记忆的智能。融合高效模型、真实环境反馈与可学习的记忆，构建持续探索科学的智能闭环。",
    heroClosing: "智能创造经验，经验深化智能。",
    worksKicker: "精选研究",
    worksTitle: "研究工作",
    worksNote: "面向蛋白质智能的模型、基准与工具。",
    timelineKicker: "发布顺序",
    timelineTitle: "发布时间线",
    footerCopyright: "© 2026 上海人工智能实验室 版权所有。",
    footerContact: "联系",
    footerTop: "回到顶部"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");

function setLanguage(language) {
  const nextLanguage = translations[language] ? language : "en";
  document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[nextLanguage][node.dataset.i18n];
    if (value) node.textContent = value;
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("amix-bio-language", nextLanguage);
  window.dispatchEvent(new CustomEvent("amix:language", { detail: nextLanguage }));
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem("amix-bio-language") || "en");
