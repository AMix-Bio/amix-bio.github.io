(() => {
  const footer = document.currentScript.previousElementSibling;
  const topTarget = footer.dataset.topTarget || "page-title";
  footer.innerHTML = `
    <div class="site-footer-inner">
      <div class="footer-copy">
        <span class="footer-copyright"></span>
      </div>
      <nav class="footer-links">
        <a class="footer-link footer-contact" href="mailto:zhouhao@pjlab.org.cn">
          <span class="footer-contact-label"></span>
          <span>zhouhao@pjlab.org.cn</span>
        </a>
        <a class="footer-link footer-top" href="#${topTarget}"></a>
      </nav>
    </div>`;

  function syncLanguage() {
    const isChinese = document.documentElement.lang === "zh-CN";
    footer.setAttribute("aria-label", isChinese ? "网站页脚" : "Site footer");
    footer.querySelector(".footer-links").setAttribute("aria-label", isChinese ? "页脚链接" : "Footer links");
    footer.querySelector(".footer-copyright").textContent = isChinese
      ? "© 2026 上海人工智能实验室 版权所有。"
      : "© 2026 Shanghai Artificial Intelligence Laboratory, all rights reserved.";
    footer.querySelector(".footer-contact-label").textContent = isChinese ? (footer.dataset.contactZh || "联系") : "Contact";
    footer.querySelector(".footer-top").textContent = isChinese ? "回到顶部" : "Back to top";
  }

  new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  syncLanguage();
})();
