const publications = [
  {
    id: "pfarena",
    releaseMonth: "2026-09",
    category: "benchmark",
    title: "PFArena",
    timelineTitle: "PFArena: Benchmarking Language Models for Protein Modification",
    tag: { en: "Benchmark", zh: "Benchmark" },
    description: {
      en: "An assay-grounded benchmark for evaluating language models across four controlled protein engineering tasks, designed around practical experimental decisions scientists face.",
      zh: "一个以蛋白实验测定数据为基础的语言模型评测基准，围绕四类受控的蛋白质工程任务，从实际科学决策需求出发评估模型能力。"
    },
    meta: { en: "View Details", zh: "查看研究详情" },
    release: { en: "Sep 2026", zh: "2026 年 9 月" },
    href: "./PFArena/",
    tagClass: "tag--benchmark",
    image: "./figures/PFArena_main.png",
    art: "pfarena"
  },
  {
    id: "amix-2",
    releaseMonth: "2026-05",
    category: "foundation-model",
    title: "AMix-2",
    timelineTitle: "AMix-2: Establishing Protein as a Native Modality in Large Language Models",
    tag: { en: "Foundation model", zh: "Foundation model" },
    description: {
      en: "A new-generation protein–text foundation model developed by the Shanghai Artificial Intelligence Laboratory, built on diffusion large language models for native protein understanding and design.",
      zh: "上海人工智能实验室推出的新一代蛋白质大模型，以扩散大语言模型为核心架构，统一建模自然语言、蛋白质序列、蛋白语义理解与功能序列设计。"
    },
    meta: { en: "View Details", zh: "查看研究详情" },
    release: { en: "May 2026", zh: "2026 年 5 月" },
    href: "./AMix-2/",
    tagClass: "tag--model",
    image: "./figures/AMix-2_main.png",
    art: "amix2"
  },
  {
    id: "amix-1",
    releaseMonth: "2025-07",
    category: "foundation-model",
    title: "AMix-1",
    timelineTitle: "AMix-1: A Pathway to Test-Time Scalable Protein Foundation Model",
    tag: { en: "Foundation model", zh: "Foundation model" },
    description: {
      en: "A protein foundation model built on Bayesian Flow Networks and empowered by a systematic training methodology spanning pretraining scaling laws, emergent capability analysis, in-context learning, and test-time scaling.",
      zh: "一款基于贝叶斯流网络构建的蛋白质基础模型，由预训练扩展定律、涌现能力分析、上下文学习和推理时扩展等系统化的训练方法支撑。"
    },
    meta: { en: "View Details", zh: "查看研究详情" },
    release: { en: "Jul 2025", zh: "2025 年 7 月" },
    href: "./AMix-1/",
    tagClass: "tag--model",
    image: "./figures/AMix-1_main.png",
    art: "amix1"
  },
  // {
  //   id: "project-04",
  //   title: "Project 04",
  //   tag: { en: "Coming soon", zh: "即将发布" },
  //   description: {
  //     en: "A new AMix-Bio research project is taking shape. More details will be shared here soon.",
  //     zh: "AMix-Bio 的新研究项目正在推进中，更多信息将于此发布。"
  //   },
  //   meta: { en: "In progress", zh: "研究进行中" },
  //   href: null,
  //   tagClass: "tag--soon",
  //   art: "future-a"
  // },
  // {
  //   id: "project-05",
  //   title: "Project 05",
  //   tag: { en: "Coming soon", zh: "即将发布" },
  //   description: {
  //     en: "The next addition to our open research portfolio. Watch this space for the full release.",
  //     zh: "即将加入我们的开放研究版图，完整内容将在此更新。"
  //   },
  //   meta: { en: "In progress", zh: "研究进行中" },
  //   href: null,
  //   tagClass: "tag--soon",
  //   art: "future-b"
  // }
];

const artwork = {
  pfarena: `<svg viewBox="0 0 640 360" role="img" aria-label="PFArena abstract benchmark landscape"><defs><linearGradient id="pfg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07111f"/><stop offset="1" stop-color="#0b2449"/></linearGradient></defs><rect width="640" height="360" fill="url(#pfg)"/><g fill="none" stroke="#4b8dff"><path d="M62 276c116-158 212-162 291-65s139 57 229-93" opacity=".75"/><path d="M62 310c116-135 208-128 290-48s148 45 230-75" opacity=".3"/><circle cx="190" cy="178" r="56" opacity=".65"/><circle cx="436" cy="190" r="75" opacity=".4"/></g><g fill="#75a8ff"><circle cx="190" cy="178" r="8"/><circle cx="436" cy="190" r="8"/><circle cx="354" cy="211" r="5"/></g><text x="48" y="64" fill="#f4f7ff" font-family="sans-serif" font-size="24" font-weight="600">PFARENA</text><text x="48" y="90" fill="#75a8ff" font-family="sans-serif" font-size="11" letter-spacing="3">EVALUATE · COMPARE · ADVANCE</text></svg>`,
  amix2: `<svg viewBox="0 0 640 360" role="img" aria-label="AMix-2 diffusion blocks"><rect width="640" height="360" fill="#090e20"/><g transform="translate(78 82)"><g fill="#4b8dff"><rect width="88" height="88" rx="12"/><rect x="198" width="88" height="88" rx="12" opacity=".62"/><rect x="396" width="88" height="88" rx="12" opacity=".3"/></g><g fill="#fff" font-family="sans-serif" font-size="30" font-weight="500" text-anchor="middle"><text x="44" y="55">A</text><text x="242" y="55">M</text><text x="440" y="55">2</text></g><g stroke="#75a8ff" stroke-width="2" stroke-dasharray="6 8"><path d="M100 44h86"/><path d="M298 44h86"/></g><g transform="translate(0 145)" fill="#75a8ff"><circle cx="12" cy="12" r="12"/><circle cx="52" cy="12" r="12" opacity=".72"/><circle cx="92" cy="12" r="12" opacity=".48"/><circle cx="132" cy="12" r="12" opacity=".24"/></g></g></svg>`,
  amix1: `<svg viewBox="0 0 640 360" role="img" aria-label="AMix-1 protein and language strands"><rect width="640" height="360" fill="#07131f"/><g fill="none" stroke-linecap="round" stroke-width="8"><path d="M58 130c94-88 164 88 254 0s168 88 270 0" stroke="#4b8dff"/><path d="M58 238c94 88 164-88 254 0s168-88 270 0" stroke="#75a8ff" opacity=".42"/></g><g fill="#f4f7ff" font-family="sans-serif"><text x="58" y="65" font-size="25" font-weight="600">AMix-1</text><text x="58" y="89" fill="#75a8ff" font-size="10" letter-spacing="3">PROTEIN INTELLIGENCE</text></g><g fill="#07131f" stroke="#75a8ff" stroke-width="2"><circle cx="190" cy="181" r="12"/><circle cx="320" cy="181" r="12"/><circle cx="450" cy="181" r="12"/></g></svg>`,
  "future-a": `<svg viewBox="0 0 640 360" role="img" aria-label="Abstract forthcoming project"><rect width="640" height="360" fill="#090d15"/><g fill="none" stroke="#34435d"><circle cx="320" cy="172" r="112"/><circle cx="320" cy="172" r="74"/><circle cx="320" cy="172" r="37"/><path d="M320 35v274M183 172h274"/></g><circle cx="320" cy="172" r="8" fill="#4b8dff"/><text x="320" y="330" fill="#66748d" font-family="sans-serif" font-size="10" font-weight="600" letter-spacing="4" text-anchor="middle">COMING SOON</text></svg>`,
  "future-b": `<svg viewBox="0 0 640 360" role="img" aria-label="Abstract forthcoming project"><rect width="640" height="360" fill="#080d16"/><g transform="translate(110 62)" fill="none" stroke="#34435d" stroke-width="2"><path d="M0 198C72 18 143 18 210 122S350 226 420 24"/><path d="M0 140c72 122 143 122 210 20S350 56 420 230"/></g><g fill="#4b8dff"><circle cx="180" cy="165" r="8"/><circle cx="320" cy="180" r="8"/><circle cx="460" cy="156" r="8"/></g><text x="320" y="330" fill="#66748d" font-family="sans-serif" font-size="10" font-weight="600" letter-spacing="4" text-anchor="middle">IN DEVELOPMENT</text></svg>`
};

const grid = document.getElementById("publication-grid");
const timeline = document.getElementById("publication-timeline");
let currentLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
let timelineFrame = 0;

const filterCopy = {
  en: {
    kicker: "Filters", title: "Filter Works", clear: "Clear filters", release: "Release year",
    category: "Work category",
    categoryHint: "Select one or more categories; all unselected shows every category.",
    empty: "No works match these filters. Adjust the years or categories, or clear the filters.",
    emptyTimeline: "No releases match these filters.",
    count: (count, total) => `Showing ${count} of ${total} works`
  },
  zh: {
    kicker: "筛选条件", title: "筛选工作", clear: "清空筛选", release: "发布年份",
    category: "工作类别",
    categoryHint: "支持多选；不选择标签时显示所有类别。",
    empty: "没有符合条件的工作。请调整年份或类别，或清空筛选。",
    emptyTimeline: "没有符合条件的发布记录。",
    count: (count, total) => `显示 ${count} / ${total} 项工作`
  }
};
const workFilters = { years: new Set(), categories: new Set() };
const yearFilters = document.getElementById("work-year-filters");
const categoryFilters = document.getElementById("work-category-filters");
const clearFiltersButton = document.getElementById("clear-work-filters");
const categoryOptions = new Map(publications.filter(publication => publication.category).map(publication => [publication.category, publication]));

categoryOptions.forEach((publication, category) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tag ${publication.tagClass}`;
  button.dataset.category = category;
  button.setAttribute("aria-pressed", "false");
  categoryFilters.appendChild(button);
});

function hasWorkFilters() {
  return Boolean(workFilters.years.size || workFilters.categories.size);
}

function filteredPublications() {
  if (!hasWorkFilters()) return publications;
  return publications.filter(publication => {
    if (!publication.releaseMonth) return false;
    return (!workFilters.years.size || workFilters.years.has(publication.releaseMonth.slice(0, 4)))
      && (!workFilters.categories.size || workFilters.categories.has(publication.category));
  });
}

function renderFilterState(language, count) {
  const copy = filterCopy[language];
  document.querySelectorAll("[data-filter-i18n]").forEach(node => {
    node.textContent = copy[node.dataset.filterI18n];
  });
  categoryFilters.querySelectorAll("[data-category]").forEach(button => {
    button.textContent = categoryOptions.get(button.dataset.category).tag[language];
    button.setAttribute("aria-pressed", String(workFilters.categories.has(button.dataset.category)));
  });
  yearFilters.querySelectorAll("[data-year]").forEach(button => {
    button.setAttribute("aria-pressed", String(workFilters.years.has(button.dataset.year)));
  });
  clearFiltersButton.disabled = !hasWorkFilters();
  document.getElementById("work-filter-status").textContent = copy.count(count, publications.length);
}

yearFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-year]");
  if (!button) return;
  const year = button.dataset.year;
  if (workFilters.years.has(year)) workFilters.years.delete(year);
  else workFilters.years.add(year);
  renderPublications(currentLanguage);
});
categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  const category = button.dataset.category;
  if (workFilters.categories.has(category)) workFilters.categories.delete(category);
  else workFilters.categories.add(category);
  renderPublications(currentLanguage);
});
clearFiltersButton.addEventListener("click", () => {
  workFilters.years.clear();
  workFilters.categories.clear();
  renderPublications(currentLanguage);
});


function renderPublications(language) {
  currentLanguage = language;
  const visiblePublications = filteredPublications();
  renderFilterState(language, visiblePublications.length);
  grid.innerHTML = visiblePublications.map((publication) => {
    const linkedClass = publication.href ? " is-linked" : "";
    const link = publication.href ? `<a class="card-link" href="${publication.href}" aria-label="${publication.title}: ${publication.meta[language]}"></a>` : "";
    const action = publication.href ? `<span>${publication.meta[language]}</span><span class="card-arrow" aria-hidden="true">↗</span>` : `<span class="card-placeholder">${publication.meta[language]}</span>`;
    const visualClass = publication.image ? "has-image" : `card-visual--${publication.art}`;
    const visual = publication.image ? `<img src="${publication.image}" alt="${publication.title} main figure" loading="lazy" decoding="async" />` : artwork[publication.art];
    const releaseAttribute = publication.release ? ` data-release-date="${publication.release.en}"` : "";
    return `<article id="work-${publication.id}" class="publication-card${linkedClass}" data-work-id="${publication.id}"${releaseAttribute}>
      ${link}
      <div class="card-visual ${visualClass}">${visual}</div>
      <div class="card-body">
        <span class="tag ${publication.tagClass}">${publication.tag[language]}</span>
        <h3 class="card-title">${publication.title}</h3>
        <p class="card-description">${publication.description[language]}</p>
        <div class="card-meta">${action}</div>
      </div>
    </article>`;
  }).join("");
  if (!visiblePublications.length) {
    grid.innerHTML = `<p class="work-filter-empty">${filterCopy[language].empty}</p>`;
  }
  renderTimeline(language, visiblePublications);
  const currentHash = window.location.hash.slice(1);
  if (currentHash.startsWith("work-") && !document.getElementById(currentHash)) {
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
  }
}

function renderTimeline(language, visiblePublications) {
  const releases = visiblePublications.filter(publication => publication.release);
  timeline.classList.toggle("is-empty", !releases.length);
  timeline.innerHTML = releases.map((publication) => {
    return `<a class="timeline-link" href="#work-${publication.id}" data-timeline-id="${publication.id}">
      <span class="timeline-date">${publication.release[language]}</span>
      <span class="timeline-short-title">${publication.title}</span>
      <span class="timeline-name">${publication.timelineTitle}</span>
    </a>`;
  }).join("");
  if (!releases.length) {
    timeline.innerHTML = `<p class="filter-hint">${filterCopy[language].emptyTimeline}</p>`;
  }
  requestTimelineUpdate();
}

function updateTimelineHighlight() {
  timelineFrame = 0;
  const cards = Array.from(grid.querySelectorAll("[data-release-date]"));
  if (!cards.length) return;
  const viewportCenter = window.innerHeight / 2;
  const distances = cards.map((card) => {
    const bounds = card.getBoundingClientRect();
    return { id: card.dataset.workId, distance: Math.abs(bounds.top + bounds.height / 2 - viewportCenter) };
  });
  const closestId = distances.reduce((closest, item) => item.distance < closest.distance ? item : closest).id;
  timeline.querySelectorAll("[data-timeline-id]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.timelineId === closestId);
  });
}

function requestTimelineUpdate() {
  if (timelineFrame) return;
  timelineFrame = window.requestAnimationFrame(updateTimelineHighlight);
}

window.addEventListener("amix:language", (event) => renderPublications(event.detail));
window.addEventListener("scroll", requestTimelineUpdate, { passive: true });
window.addEventListener("resize", requestTimelineUpdate);
timeline.addEventListener("click", (event) => {
  const link = event.target.closest("[data-timeline-id]");
  if (!link) return;
  const target = document.getElementById(`work-${link.dataset.timelineId}`);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "center"
  });
  window.history.pushState(null, "", link.getAttribute("href"));
});
renderPublications(currentLanguage);
