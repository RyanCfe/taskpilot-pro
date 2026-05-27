
let selectedCategoryKey = null;
let selectedTask = null;
const $ = (id) => document.getElementById(id);

function toast(message = "Copied!") {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1300);
}

async function getStorage(key, fallback) {
  const result = await chrome.storage.local.get([key]);
  return result[key] ?? fallback;
}
async function setStorage(key, value) { await chrome.storage.local.set({ [key]: value }); }
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); toast("Copied!"); }
  catch (error) { console.error(error); toast("Copy failed"); }
}

function normalizeData() {
  Object.keys(TOOL_DATA.categories).forEach((categoryKey) => {
    const category = TOOL_DATA.categories[categoryKey];
    category.tasks = category.tasks.map((task) => ({
      ...task,
      tools: task.tools.map((tool, index) => ({
        name: tool[0], url: tool[1], why: tool[2], tags: tool[3].split(","), rank: index + 1
      }))
    }));
  });
}

function renderQuick() {
  const quick = [
    ["Coding","coding"], ["PPT","ppt"], ["AI Detector","detector"],
    ["Math","math"], ["Papers","research paper"], ["Books","books"],
    ["Trading","trading"], ["Shopping","shopping"]
  ];
  $("quickRow").innerHTML = quick.map(([label, q]) => `<button class="quick" data-q="${q}">${label}</button>`).join("");
  document.querySelectorAll(".quick").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab("tools");
      $("searchInput").value = btn.dataset.q;
      renderSearch(btn.dataset.q);
    });
  });
}

function showCategories() {
  $("taskSection").classList.add("hidden");
  $("toolSection").classList.add("hidden");
  $("categoriesBlock").classList.remove("hidden");
  renderCategories();
}

function renderCategories() {
  const grid = $("categoryGrid");
  grid.innerHTML = "";
  const keys = Object.keys(TOOL_DATA.categories);
  $("categoryCount").textContent = `${keys.length} groups`;

  keys.forEach((key) => {
    const category = TOOL_DATA.categories[key];
    const taskCount = category.tasks.length;
    const toolCount = category.tasks.reduce((sum, t) => sum + t.tools.length, 0);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-title">${category.name}</div>
      <div class="card-subtitle">${category.subtitle}</div>
      <span class="badge">${taskCount} task${taskCount > 1 ? "s" : ""} · ${toolCount} ranked tools</span>
    `;
    card.addEventListener("click", () => { selectedCategoryKey = key; renderTasks(key); });
    grid.appendChild(card);
  });
}

function renderTasks(categoryKey) {
  const category = TOOL_DATA.categories[categoryKey];
  $("categoriesBlock").classList.add("hidden");
  $("toolSection").classList.add("hidden");
  $("taskSection").classList.remove("hidden");
  $("selectedCategoryTitle").textContent = category.name;
  $("taskList").innerHTML = "";

  category.tasks.forEach((task) => {
    const topTools = task.tools.slice(0,3).map(t => t.name).join(" · ");
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <div class="card-title">${task.name}</div>
      <div class="card-subtitle">Top: ${topTools}</div>
      <span class="badge">${task.tools.length} ranked tools</span>
    `;
    card.addEventListener("click", () => { selectedTask = task; renderTools(task); });
    $("taskList").appendChild(card);
  });
}

function renderRisk(task) {
  const riskBox = $("riskBox");
  const risk = task.risk || "low";
  let text = "Low-risk task. Use normal judgment and verify important outputs.";
  if (risk === "medium") text = "Medium-risk task. Verify sources, prices, claims, citations, or privacy implications before acting.";
  if (risk === "high") text = "High-risk task. Do not treat AI output as financial/legal/security advice. Verify with official sources and professionals where needed.";
  riskBox.className = `risk-box risk-${risk}`;
  riskBox.textContent = `Risk note: ${text}`;
}

async function renderTools(task) {
  $("taskSection").classList.add("hidden");
  $("toolSection").classList.remove("hidden");
  $("selectedTaskTitle").textContent = task.name;
  $("promptText").value = task.prompt;
  $("toolList").innerHTML = "";
  renderRisk(task);

  const favorites = await getStorage("favorites", []);
  const exists = favorites.some((f) => f.name === task.name && f.prompt === task.prompt);
  $("favoriteTaskBtn").textContent = exists ? "★ Saved" : "☆ Save";

  task.tools.forEach((tool) => {
    const card = document.createElement("div");
    card.className = "tool-card";
    const rankClass = tool.rank <= 3 ? `r${tool.rank}` : "";
    card.innerHTML = `
      <div class="rank ${rankClass}">#${tool.rank}</div>
      <div class="tool-info">
        <div class="tool-name">${tool.name}</div>
        <div class="tool-why">${tool.why}</div>
        <div class="tool-tags">${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
      <button>${tool.rank === 1 ? "Open #1" : "Open"}</button>
    `;
    card.querySelector("button").addEventListener("click", async () => {
      await copyText($("promptText").value);
      chrome.tabs.create({ url: tool.url });
    });
    $("toolList").appendChild(card);
  });
}

function renderSearch(query) {
  $("categoriesBlock").classList.add("hidden");
  $("taskSection").classList.remove("hidden");
  $("toolSection").classList.add("hidden");
  $("selectedCategoryTitle").textContent = "Search Results";
  $("taskList").innerHTML = "";
  let found = 0;

  Object.keys(TOOL_DATA.categories).forEach((categoryKey) => {
    const category = TOOL_DATA.categories[categoryKey];
    category.tasks.forEach((task) => {
      const text = [
        category.name, category.subtitle, task.name, task.prompt,
        ...task.tools.flatMap(t => [t.name, t.why, ...t.tags])
      ].join(" ").toLowerCase();

      if (text.includes(query.toLowerCase())) {
        found++;
        const topTools = task.tools.slice(0,3).map(t => t.name).join(" · ");
        const card = document.createElement("div");
        card.className = "task-card";
        card.innerHTML = `<div class="card-title">${task.name}</div><div class="card-subtitle">${category.name} · Top: ${topTools}</div>`;
        card.addEventListener("click", () => { selectedCategoryKey = categoryKey; selectedTask = task; renderTools(task); });
        $("taskList").appendChild(card);
      }
    });
  });
  if (!found) {
    $("taskList").innerHTML = `<div class="task-card"><div class="card-title">No result found</div><div class="card-subtitle">Try: cursor, ai detector, math, research paper, books, trading, shopping, security</div></div>`;
  }
}

async function saveFavorite(task) {
  const prompt = $("promptText") ? $("promptText").value : task.prompt;
  const favorites = await getStorage("favorites", []);
  const exists = favorites.some((f) => f.name === task.name && f.prompt === prompt);
  if (!exists) {
    favorites.push({ name: task.name, prompt, tools: task.tools, savedAt: Date.now() });
    await setStorage("favorites", favorites);
    toast("Saved!");
  } else {
    await setStorage("favorites", favorites.filter((f) => !(f.name === task.name && f.prompt === prompt)));
    toast("Removed!");
  }
  await renderTools({ ...task, prompt });
  renderFavorites();
}

async function renderFavorites() {
  const favorites = await getStorage("favorites", []);
  $("favoritesList").innerHTML = "";
  if (!favorites.length) {
    $("favoritesList").innerHTML = `<div class="fav-card"><div class="card-title">No saved prompts yet</div><p>Open a task and press Save.</p></div>`;
    return;
  }
  favorites.slice().reverse().forEach((fav) => {
    const firstName = fav.tools?.[0]?.name || "ChatGPT";
    const card = document.createElement("div");
    card.className = "fav-card";
    card.innerHTML = `<div class="card-title">${fav.name}</div><p>${fav.prompt}</p><div class="button-row"><button class="copy-fav">Copy</button><button class="open-fav secondary">Open ${firstName}</button></div>`;
    card.querySelector(".copy-fav").addEventListener("click", () => copyText(fav.prompt));
    card.querySelector(".open-fav").addEventListener("click", async () => {
      await copyText(fav.prompt);
      chrome.tabs.create({ url: fav.tools?.[0]?.url || "https://chatgpt.com" });
    });
    $("favoritesList").appendChild(card);
  });
}

async function renderChecklist() {
  const done = await getStorage("launchChecklistDone", {});
  $("checklist").innerHTML = "";
  LAUNCH_CHECKLIST.forEach((item) => {
    const card = document.createElement("div");
    card.className = "check-card";
    card.innerHTML = `
      <input type="checkbox" ${done[item.id] ? "checked" : ""} />
      <div>
        <div class="check-title">${item.title}</div>
        <div class="check-desc">${item.desc}</div>
        <div class="check-prompt">${item.prompt}</div>
        <div class="check-actions"><button class="copy-check">Copy Prompt</button><button class="open-chat secondary">Open ChatGPT</button></div>
      </div>
    `;
    card.querySelector("input").addEventListener("change", async (e) => {
      done[item.id] = e.target.checked; await setStorage("launchChecklistDone", done); updateProgress(done);
    });
    card.querySelector(".copy-check").addEventListener("click", () => copyText(item.prompt));
    card.querySelector(".open-chat").addEventListener("click", async () => { await copyText(item.prompt); chrome.tabs.create({ url: "https://chatgpt.com" }); });
    $("checklist").appendChild(card);
  });
  updateProgress(done);
}

function updateProgress(done) {
  const completed = LAUNCH_CHECKLIST.filter(i => done[i.id]).length;
  const total = LAUNCH_CHECKLIST.length;
  $("progressText").textContent = `${completed}/${total} done`;
  $("progressFill").style.width = `${Math.round((completed / total) * 100)}%`;
}

function buildPrompt() {
  const task = $("builderTask").value;
  const input = $("builderInput").value.trim() || "[paste your input here]";
  const style = $("builderStyle").value;
  const styleMap = {
    simple: "Keep it simple and beginner-friendly.",
    professional: "Make the output professional, polished, and practical.",
    exam: "Make it exam-ready, step-by-step, and include formulas/definitions before applying them.",
    action: "Give an action plan/checklist with clear next steps."
  };
  const templates = {
    explain: `Explain this clearly: ${input}\n\n${styleMap[style]}\nInclude examples, assumptions, and common mistakes.`,
    code: `Help me build/fix this code problem: ${input}\n\n${styleMap[style]}\nGive corrected code first, then explain the bug, file structure, run steps, and security concerns.`,
    ppt: `Create a presentation from this: ${input}\n\n${styleMap[style]}\nGive slide titles, bullets, visual ideas, and speaker notes.`,
    research: `Research this topic: ${input}\n\n${styleMap[style]}\nUse reliable sources, include citations, compare viewpoints, and separate facts from uncertainty.`,
    math: `Solve this math/statistics problem: ${input}\n\n${styleMap[style]}\nState the formula first, substitute values, and show every step.`,
    resume: `Improve this career/resume content: ${input}\n\n${styleMap[style]}\nMake it achievement-focused, ATS-friendly, and natural.`,
    shopping: `Compare products for this need: ${input}\n\n${styleMap[style]}\nCompare options, price/value, reviews, hidden costs, reliability, and what to avoid.`,
    trading: `Analyze this market/trading idea for education only: ${input}\n\n${styleMap[style]}\nCover trend, support/resistance, risks, news, invalidation, and never give guaranteed advice.`,
    security: `Review this app/code for launch security: ${input}\n\n${styleMap[style]}\nCheck privacy, RLS/database rules, exposed keys, validation, CORS, CAPTCHA, rate limits, safe errors, and OWASP-style issues.`
  };
  $("builtPrompt").value = templates[task];
}

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabName));
  document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
  $(`${tabName}View`).classList.add("active");
  if (tabName === "favorites") renderFavorites();
}

$("copyPromptBtn").addEventListener("click", () => copyText($("promptText").value));
$("copyOpenFirstBtn").addEventListener("click", async () => {
  if (!selectedTask) return;
  await copyText($("promptText").value);
  chrome.tabs.create({ url: selectedTask.tools[0].url });
});
$("favoriteTaskBtn").addEventListener("click", () => { if (selectedTask) saveFavorite(selectedTask); });
$("backToCategories").addEventListener("click", () => { $("searchInput").value = ""; showCategories(); });
$("backToTasks").addEventListener("click", () => { if (selectedCategoryKey) renderTasks(selectedCategoryKey); });
$("searchInput").addEventListener("input", () => {
  const q = $("searchInput").value.trim();
  if (!q) showCategories(); else renderSearch(q);
});
$("resetChecklist").addEventListener("click", async () => { await setStorage("launchChecklistDone", {}); renderChecklist(); });
$("clearFavorites").addEventListener("click", async () => { await setStorage("favorites", []); renderFavorites(); });
$("buildPromptBtn").addEventListener("click", buildPrompt);
$("copyBuiltPrompt").addEventListener("click", () => copyText($("builtPrompt").value));
$("openBuiltChat").addEventListener("click", async () => { await copyText($("builtPrompt").value); chrome.tabs.create({ url: "https://chatgpt.com" }); });
document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => switchTab(tab.dataset.tab)));

normalizeData();
renderQuick();
renderCategories();
renderChecklist();
renderFavorites();
buildPrompt();
