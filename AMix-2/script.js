const inlineMath = {
  xTextInst: "\\(x_{\\text{text}}^{\\text{inst}}\\)",
  xProt: "\\(x_{\\text{prot}}\\)",
  pJoint: "\\(p_{\\text{joint}}\\)",
  k: "\\(k\\)",
  xTildeT: "\\(\\tilde{x}_t\\)",
  x0: "\\(x_0\\)"
};

const copy = {
  zh: {
    date: "2026 年 5 月",
    title: "AMix-2",
    titleRest: "Mix-2",
    summary:
      "上海人工智能实验室推出的新一代蛋白质大模型，以扩散大语言模型为核心架构，统一建模自然语言、蛋白质序列、蛋白语义理解与功能序列设计。",
    reportButton: "技术报告",
    tryButton: "敬请期待",
    navContext: "背景",
    navOverview: "概述",
    navParadigm: "建模范式",
    navMethod: "核心方法",
    navEvaluation: "科学评测",
    navConclusion: "总结",
    footerCopyright: "© 2026 上海人工智能实验室 版权所有。",
    footerContact: "联系",
    footerGithub: "GitHub",
    footerReport: "技术报告",
    footerTop: "回到顶部",
    backgroundLead:
      "2026 年 2 月下旬，Anthropic CEO Dario Amodei 在访谈中预言：<em>大模型的下一个关键战场，将出现在生物科技领域</em>。4 月，Claude Opus 4.7 因生物能力评测表现引发业内关注，OpenAI 也紧随其后推出生物医药推理模型 GPT-Rosalind。短时间内，全球 AI 巨头密集加码生命科学，竞争迅速升温。",
    overviewTitle: "概述",
    overviewOne:
      "AMix-2 是上海人工智能实验室推出的新一代蛋白质大模型。在 2025 年 7 月推出的蛋白质大模型 <a href=\"https://arxiv.org/abs/2507.08920\" target=\"_blank\" rel=\"noreferrer\">AMix-1</a> 的基础上，以扩散大语言模型（Diffusion Large Language Models, dLLMs）为核心架构，引入蛋白质模态，对自然语言、蛋白质序列、蛋白语义理解、功能序列设计统一建模，从而将蛋白质作为一种原生的模态融入大模型中，推动大模型由工具调用向蛋白原生理解与设计升级。",
    overviewTwo:
      "AMix-2 采用扩散语言模型的技术路线，该架构天然支持双向上下文理解，可全面兼顾蛋白质序列的前后关联关系；支持局部区域编辑能力，能针对蛋白质关键功能区域开展精准优化。",
    overviewThree:
      "团队通过实验证明了统一蛋白质文本扩散语言模型的优越性：在蛋白质通用问答，蛋白质层级分类和蛋白质功能设计等任务上，AMix-2 领先于主流大模型、蛋白质语言模型、以及专有生信工具。特别是在蛋白质设计任务上，它的表现显著大幅领先于相同数据训练的自回归架构，证明了这一技术路线的有效性。",
    dllmCaption:
      "AMix-2采用分块扩散语言模型架构，统一建模蛋白质和文本",
    paradigmTitle: "建模范式：指令遵循统一理解和生成",
    paradigmIntro:
      "AMix-2 构建了一个统一的离散词表，将自然语言与蛋白质序列映射到共享的表征空间中。模型能够在统一的“指令遵循”目标下同时处理蛋白质理解和生成任务：",
    understandingLead: "蛋白质理解：",
    understandingText:
      `读取文本指令 ${inlineMath.xTextInst} 和蛋白质序列 ${inlineMath.xProt}，生成文本回答：`,
    understandingFormula:
      "\\(p\\!\\left(x_{\\text{text}}^{\\text{ans}} \\;\\middle|\\; x_{\\text{text}}^{\\text{inst}},\\, x_{\\text{prot}}\\right)\\)",
    designLead: "蛋白质设计：",
    designText:
      `读取包含特定功能需求的蛋白质设计文本指令 ${inlineMath.xTextInst}，生成蛋白质序列：`,
    designFormula:
      "\\(p\\!\\left(x_{\\text{prot}}^{\\text{ans}} \\;\\middle|\\; x_{\\text{text}}^{\\text{inst}}\\right)\\)",
    methodTitle: "核心方法：扩散架构融合蛋白与文本",
    methodIntro:
      "蛋白质残基间存在非局部的长程耦合（如催化三联体、盐桥配对等），严格的从左到右生成无法在预测当前位置时参考下游约束。为此，AMix-2 采用<strong>分块扩散（Block-wise Diffusion）</strong>架构，通过掩码吸收扩散实现 block 内残基的联合预测，通过分块因果建模稳定传递跨 block 的全局约束。",
    maskTitle: "掩码吸收扩散：",
    maskText:
      `为了捕捉残基间的协同约束，AMix-2 以掩码吸收离散扩散（mask-absorbing discrete diffusion）实现 block 内的联合分布 ${inlineMath.pJoint}。在第 ${inlineMath.k} 个 block 内的所有 token 通过双向注意力彼此交互，模型从带噪序列 ${inlineMath.xTildeT} 预测干净序列 ${inlineMath.x0}：`,
    maskFormula:
      "\\[p_{\\theta}\\!\\left(x_0 \\mid \\tilde{x}_t,\\, x^{(\\lt k)},\\, c\\right)\\]",
    maskMore:
      "该去噪目标在一次训练步骤中同时预测 block 内多个遮蔽位置，相比逐 token 自回归提供了更密集的监督信号。同时，联合预测要求模型学习残基之间的搭配规则和相互约束，隐式捕捉协同进化关系，起到更强的正则化作用，使模型在有限数据下仍能生成多样且合理的新序列。",
    blockTitle: "分块因果建模：",
    blockText:
      "为了减小组合爆炸式自由度的同时传递全局约束（例如给定的功能描述、家族特征等），AMix-2 在 block 间引入因果自回归分解，提供了一种稳定的顺序先验来传递条件，使得模型在较长范围内保持一致性：",
    blockFormula:
      "\\[p(x \\mid c)=\\prod_k p_{\\text{joint}}\\!\\left(x^{(k)} \\mid x^{(\\lt k)}, c\\right)\\]",
    blockMore:
      "在 AMix-2 中序列被切分为长度为 32 的连续 blocks，block 间按因果顺序依次生成：推理时，当前 block 内所有位置初始化为 [MASK]，模型经多步迭代去噪逐步恢复，每个 block 完成去噪后作为后续 block 的固定上下文，稳定锚定全局条件。",
    methodGifCaption:
      "AMix-2 的分块扩散过程：block 间因果生成，block 内并行去噪。",
    resultsTitle: "科学评测：严格划分验证真实泛化性",
    resultsText:
      "为了避免随机切分带来的同源泄漏，团队提出 <strong>ProteinArena</strong>。测试集只保留 2025 年后公开的 Swiss-Prot 蛋白，并要求它们之前已发布序列的同源 identity 低于 30%。评测过程不允许外部检索、数据库查询或复杂工具链编排，重点衡量模型内部的蛋白质能力。",
    resultsMore:
      "ProteinArena 覆盖三类任务：481 个样本、16 个类别的<strong>通用蛋白问答</strong>；EC 和 CATH 四级<strong>层级分类</strong>；以及特定条件下的<strong>功能序列设计</strong>。理解类任务以模型预测的准确率作为评价标准，而设计任务同时考察结构质量 pLDDT、InterPro 功能恢复率、n 元重复率、序列新颖性和独特性。",
    resultsNumbers:
      "在低同源性的设置下，<strong>AMix-2 dLLM</strong> 在通用蛋白问答任务上达到 65.70% overall accuracy；在功能设计中达到 74.75 结构质量 pLDDT 和 62.61% InterPro 功能恢复率，并把 5-元重复性 控制在 1.23。与相同数据上训练的 <strong>AMix-2 AR</strong> 自回归模型相比，扩散语言模型在设计质量和功能恢复上提升明显，说明扩散架构比自回归架构生成更适合蛋白质设计。",
    resultsClosing:
      "在层级分类上，AMix-2 的表现几乎与存在结构先验的专用蛋白模型和生物信息学工具持平，且在生成式 LLM 类别中表现突出，超越了对比的所有前沿大语言模型。",
    perfCaption:
      "AMix-2在各种蛋白质理解设计任务上领先于主流大模型和蛋白质语言模型",
    takeawayTitle: "总结",
    takeawayText:
      "AMix-2 通过指令遵循，扩散建模，科学评测的技术路线，验证了蛋白质可以作为原生的模态纳入到大模型生成中，并取得领先的性能。在生命科学逐渐成为大模型新战场的今天，这种自然语言指令与蛋白质原生理解生成的技术路线，提供了比专用模型更统一的交互方式，也避免了纯工具调用的“盲人摸象”式理解，有望成为蛋白质大模型的“通专融合”的新范式。"
  },
  en: {
    date: "May 2026",
    title: "AMix-2",
    titleRest: "Mix-2",
    summary:
      "AMix-2 is a new-generation protein–text foundation model developed by the Shanghai Artificial Intelligence Laboratory, built on diffusion large language models for native protein understanding and design.",
    reportButton: "Paper",
    tryButton: "Coming Soon",
    navContext: "Context",
    navOverview: "Overview",
    navParadigm: "Paradigm",
    navMethod: "Method",
    navEvaluation: "Evaluation",
    navConclusion: "Conclusion",
    footerCopyright: "© 2026 Shanghai Artificial Intelligence Laboratory All rights reserved.",
    footerContact: "Contact",
    footerGithub: "GitHub",
    footerReport: "Paper",
    footerTop: "Back to top",
    backgroundLead:
      "In February 2026, Anthropic CEO Dario Amodei made a bold prediction in an interview: <em>biotechnology is entering a new renaissance, ultimately driven by AI</em>. Just two months later, that forecast already seemed to be coming true. In April, Claude Opus 4.7 drew widespread attention for its strong biological capabilities, and OpenAI soon answered with the release of GPT-Rosalind, its biomedical reasoning model. Almost overnight, global AI giants have heavily escalated their bets on life sciences, pushing the competition into a new phase.",
    overviewTitle: "Overview",
    overviewOne:
      "AMix-2 is a new-generation protein–text foundation model developed by the Shanghai Artificial Intelligence Laboratory. Built upon the July 2025 protein foundation model <a href=\"https://arxiv.org/abs/2507.08920\" target=\"_blank\" rel=\"noreferrer\">AMix-1</a> and adopting Diffusion Large Language Models (dLLMs) as its core architecture, AMix-2 introduces the protein modality and unifies the modeling of natural language and protein sequences. In doing so, it successfully integrates protein as a native modality into the multimodal cognitive framework of large language models (LLMs), moving them beyond tool invocation toward native protein understanding and design.",
    overviewTwo:
      "Following the paradigm of diffusion language models, AMix-2 inherently supports bidirectional contextual understanding, allowing it to fully capture both upstream and downstream dependencies within protein sequences. Local region editing is also supported, enabling fine-grained optimization of functionally critical regions of proteins.",
    overviewThree:
      "Through extensive experiments, our team has demonstrated the superiority of this unified protein-text diffusion language model architecture: across tasks including general protein question answering, hierarchical classification, and functional sequence design, AMix-2 outperforms frontier LLMs and demonstrates competitive performance to task-specific protein language models and specialized bioinformatics tools. In particular, on protein design tasks, AMix-2 substantially surpasses its autoregressive counterpart trained upon the same data, underscoring the effectiveness of the dLLM architecture.",
    dllmCaption:
      "AMix-2 adopts a block-wise diffusion language model architecture to jointly model proteins and text.",
    paradigmTitle: "Modeling Paradigm: Instruction Following Unifies Understanding and Generation",
    paradigmIntro:
      "AMix-2 builds a unified discrete vocabulary that maps natural language and protein sequences into a shared representation space. Under a single instruction-following formulation, the model can handle both protein understanding and protein design:",
    understandingLead: "Protein Understanding: ",
    understandingText:
      `given a textual instruction ${inlineMath.xTextInst} and a protein sequence ${inlineMath.xProt}, the model generates a textual answer:`,
    understandingFormula:
      "\\(p\\!\\left(x_{\\text{text}}^{\\text{ans}} \\;\\middle|\\; x_{\\text{text}}^{\\text{inst}},\\, x_{\\text{prot}}\\right)\\)",
    designLead: "Protein Design: ",
    designText:
      `given a textual instruction ${inlineMath.xTextInst} that specifies the desired functional requirements, the model generates a protein sequence:`,
    designFormula:
      "\\(p\\!\\left(x_{\\text{prot}}^{\\text{ans}} \\;\\middle|\\; x_{\\text{text}}^{\\text{inst}}\\right)\\)",
    methodTitle: "Method: Fusing Protein and Text through a Diffusion Architecture",
    methodIntro:
      "Protein residues are governed not only by global long-range couplings, but also by abundant medium-range dependencies within local motifs, such as β-hairpins, zinc-finger domains, and transmembrane helices. A strictly left-to-right generation scheme cannot consult downstream joint constraints when predicting the current position. To address this limitation, AMix-2 adopts a <strong>Block-wise Diffusion</strong> architecture: mask-absorbing diffusion enables joint prediction of residues within each block, while block-wise causal modeling stably propagates global constraints across blocks.",
    maskTitle: "Mask-Absorbing Diffusion: ",
    maskText:
      `To capture inter-residue constraints, AMix-2 models the intra-block joint distribution ${inlineMath.pJoint} via mask-absorbing discrete diffusion. All tokens within the ${inlineMath.k}-th block interact through bidirectional attention, and the model predicts the clean sequence ${inlineMath.x0} from the noised sequence ${inlineMath.xTildeT}:`,
    maskFormula:
      "\\[p_{\\theta}\\!\\left(x_0 \\mid \\tilde{x}_t,\\, x^{(\\lt k)},\\, c\\right)\\]",
    maskMore:
      "This denoising objective predicts multiple masked positions within a block in a single training step, providing a denser supervision signal than token-by-token autoregression. Moreover, joint prediction forces the model to learn the co-occurrence patterns of multiple residues under mutual constraints, implicitly capturing co-evolutionary relationships and exerting a stronger regularizing effect. As a result, the model can generate diverse yet plausible novel sequences even under data-constrained settings.",
    blockTitle: "Block-wise Causal Modeling: ",
    blockText:
      "To reduce the combinatorial explosion of the search space while still transmitting global constraints (e.g., given functional descriptions, family features), AMix-2 introduces a causal autoregressive factorization across blocks. This provides a stable sequential prior for conditioning, allowing the model to maintain consistency over long ranges:",
    blockFormula:
      "\\[p(x \\mid c)=\\prod_k p_{\\text{joint}}\\!\\left(x^{(k)} \\mid x^{(\\lt k)}, c\\right)\\]",
    blockMore:
      "In AMix-2, sequences are partitioned into consecutive blocks of length 32, and the blocks are generated sequentially in causal order. At inference, all positions within the current block are initialized as [MASK] and progressively restored through multi-step iterative denoising. Once a block has been denoised, it serves as fixed context for subsequent blocks, thereby stably anchoring the global conditions.",
    methodGifCaption:
      "AMix-2 Block-wise Diffusion: causal generation across blocks, parallel denoising within each block.",
    resultsTitle: "Scientific Evaluation: Rigorous Time-aware and Homology-aware Data Splits",
    resultsText:
      "To avoid homology leakage introduced by random data splitting, the team developed <strong>ProteinArena</strong>. Its test set retains only Swiss-Prot proteins released after 2025, and further requires that each test protein share less than 30% sequence identity with any previously released homolog. The evaluation prohibits external retrieval, database queries, or complex tool-chain orchestration, focusing on measuring the model's intrinsic protein capabilities.",
    resultsMore:
      "ProteinArena covers three task families: <strong>General Protein QA</strong>, with 481 samples spanning 16 categories; four-level <strong>Hierarchical Classification</strong> of EC and CATH; and <strong>Functional Sequence Design</strong> under specified constraints. The understanding-based tasks measure prediction accuracy, while the design setting jointly evaluates structural quality (pLDDT), InterPro functional recovery, n-gram repetition, sequence novelty, and uniqueness.",
    resultsNumbers:
      "Under the low-homology setting, <strong>AMix-2 dLLM</strong> achieves 65.70% overall accuracy on General Protein QA. In functional design, it reaches a structural quality pLDDT of 74.75 and an InterPro functional recovery rate of 62.61%, while keeping 5-gram repetition at 1.23. Compared with <strong>AMix-2 AR</strong>, which is trained autoregressively on the same data, the diffusion language model variant delivers clear gains in both design quality and functional recovery, indicating that the diffusion architecture is better suited to protein design than its autoregressive counterpart.",
    resultsClosing:
      "On hierarchical classification, AMix-2 trails specialized protein models and bioinformatics tools that benefit from structural priors, while standing out among generative language models, outperforming all frontier LLMs reported as baselines.",
    perfCaption:
      "AMix-2 leads mainstream large language models and protein language models across protein understanding and design tasks.",
    takeawayTitle: "Conclusion",
    takeawayText:
      "Through instruction following, diffusion-based modeling, and  rigorous scientific evaluation, AMix-2 demonstrates that proteins can be incorporated into large language models as a native modality while achieving leading performance. As life science increasingly emerges as a new horizon for LLMs, this technical pathway of combining natural-language instruction with native protein understanding and generation offers a more unified mode of interaction than specialized models, while avoiding the piecemeal style of understanding inherent in pure tool calling. It is poised to become a new paradigm for protein foundation models that fuses generality with specialization."
  }
};

const localeButtons = document.querySelectorAll(".locale-button");
const nodes = document.querySelectorAll("[data-i18n]");
const htmlNodes = document.querySelectorAll("[data-i18n-html]");
const localizedVisuals = document.querySelectorAll("[data-locale-visual]");
const navLinks = Array.from(document.querySelectorAll("[data-nav-target]"));
const navSections = navLinks
  .map((link) => document.getElementById(link.dataset.navTarget))
  .filter(Boolean);

function renderMath() {
  if (typeof window.renderTexMath === "function") window.renderTexMath();
}

function setLanguage(lang) {
  const dictionary = copy[lang] || copy.zh;

  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      const value = dictionary[key];
      node.textContent = value;
      node.hidden = value === "";
    }
  });

  htmlNodes.forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      const value = dictionary[key];
      node.innerHTML = value;
      node.hidden = value === "";
    }
  });

  localeButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localizedVisuals.forEach((visual) => {
    visual.hidden = visual.dataset.localeVisual !== lang;
  });

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  localStorage.setItem("amix-bio-language", lang);
  renderMath();
}

localeButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const active = link.dataset.navTarget === sectionId;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateActiveNav() {
  if (!navSections.length) return;

  const page = document.documentElement;
  const distanceFromBottom = page.scrollHeight - (window.scrollY + window.innerHeight);
  const finalSection = navSections[navSections.length - 1];

  if (
    distanceFromBottom <= 180 ||
    finalSection.getBoundingClientRect().top <= window.innerHeight * 0.7
  ) {
    setActiveNav(finalSection.id);
    return;
  }

  const readingLine = window.innerHeight * 0.38;
  let activeSection = navSections[0];

  navSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= readingLine) {
      activeSection = section;
    }
  });

  setActiveNav(activeSection.id);
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
window.addEventListener("hashchange", () => requestAnimationFrame(updateActiveNav));
window.addEventListener("load", updateActiveNav);

setLanguage(localStorage.getItem("amix-bio-language") || "en");
updateActiveNav();
requestAnimationFrame(updateActiveNav);
