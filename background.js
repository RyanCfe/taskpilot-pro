importScripts("data.js");

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "taskpilot-root",
      title: "TaskPilot Pro",
      contexts: ["selection"]
    });
    CONTEXT_ACTIONS.forEach(action => {
      chrome.contextMenus.create({
        id: action.id,
        parentId: "taskpilot-root",
        title: action.title,
        contexts: ["selection"]
      });
    });
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (!info.selectionText) return;
  const action = CONTEXT_ACTIONS.find(a => a.id === info.menuItemId);
  if (!action) return;
  const fullPrompt = `${action.prompt}\n\nSelected text:\n${info.selectionText}`;
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  await chrome.storage.local.set({
    ["prompt_" + id]: {
      prompt: fullPrompt,
      selectedText: info.selectionText,
      tool: action.tool,
      title: action.title
    }
  });
  chrome.tabs.create({ url: chrome.runtime.getURL("prompt.html?id=" + encodeURIComponent(id)) });
});
