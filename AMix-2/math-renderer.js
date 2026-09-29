import katex from "./assets/katex/katex-rPiVaalG.js";

const mathPattern = /\\\[((?:.|\n)+?)\\\]|\\\(((?:.|\n)+?)\\\)/g;

function renderTextNode(node) {
  const text = node.nodeValue;
  if (!text || (!text.includes("\\(") && !text.includes("\\["))) return;

  const fragment = document.createDocumentFragment();
  let cursor = 0;
  let match;
  mathPattern.lastIndex = 0;

  while ((match = mathPattern.exec(text))) {
    if (match.index > cursor) {
      fragment.append(document.createTextNode(text.slice(cursor, match.index)));
    }

    const displayMode = Boolean(match[1]);
    const tex = displayMode ? match[1] : match[2];
    const container = document.createElement(displayMode ? "div" : "span");
    container.className = displayMode ? "tex-display" : "tex-inline";

    katex.render(tex, container, {
      displayMode,
      throwOnError: false,
      strict: "ignore",
      trust: false
    });

    fragment.append(container);
    cursor = mathPattern.lastIndex;
  }

  if (cursor < text.length) {
    fragment.append(document.createTextNode(text.slice(cursor)));
  }

  node.parentNode.replaceChild(fragment, node);
}

function shouldSkipNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  return Boolean(parent.closest("script, style, textarea, pre, code, .katex"));
}

window.renderTexMath = function renderTexMath(root = document.querySelector(".content")) {
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
      return /\\\(|\\\[/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(renderTextNode);
};

window.renderTexMath();
