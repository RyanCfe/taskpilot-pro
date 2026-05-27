
function $(id) { return document.getElementById(id); }
function toast(message = "Copied!") {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1300);
}
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); toast("Copied!"); }
  catch (e) { toast("Copy failed"); }
}
async function loadPrompt() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const result = await chrome.storage.local.get(["prompt_" + id]);
  const data = result["prompt_" + id];
  if (!data) {
    $("promptOut").value = "Prompt not found.";
    return;
  }
  $("promptOut").value = data.prompt;
  $("selectedText").value = data.selectedText;
  $("copyBtn").addEventListener("click", () => copyText($("promptOut").value));
  $("openToolBtn").addEventListener("click", async () => {
    await copyText($("promptOut").value);
    chrome.tabs.create({ url: data.tool || "https://chatgpt.com" });
  });
}
loadPrompt();
