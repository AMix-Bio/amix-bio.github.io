(() => {
  const script = document.currentScript;
  const header = script.previousElementSibling;
  const siteRoot = new URL("../", script.src);
  header.innerHTML = `
    <a class="global-nav-logo" href="${siteRoot.href}" aria-label="AMix-Bio home">
      <img src="${new URL("AMix-2/assets/sail-logo.svg", siteRoot).href}" alt="Shanghai Artificial Intelligence Laboratory" />
    </a>
    <div class="global-nav-actions">
      <a class="global-nav-link" href="${siteRoot.href}"><span class="nav-copy-en">Home</span><span class="nav-copy-zh">首页</span></a>
      <div class="locale-switch" aria-label="Language">
        <button class="locale-button" type="button" data-lang="zh" data-language="zh">中</button>
        <button class="locale-button" type="button" data-lang="en" data-language="en">EN</button>
      </div>
    </div>`;

  function syncLanguage() {
    const isChinese = document.documentElement.lang === "zh-CN";
    header.querySelector(".global-nav-logo").setAttribute("aria-label", isChinese ? "AMix-Bio 首页" : "AMix-Bio home");
    header.querySelector("img").alt = isChinese ? "上海人工智能实验室" : "Shanghai Artificial Intelligence Laboratory";
    header.querySelector(".locale-switch").setAttribute("aria-label", isChinese ? "语言" : "Language");
    header.querySelectorAll(".locale-button").forEach(button => {
      const active = button.dataset.lang === (isChinese ? "zh" : "en");
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  syncLanguage();
})();
