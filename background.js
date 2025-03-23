console.log("The fuck is up with this one then");

browser.commands.onCommand.addListener((command) => {
  if (command === "scroll_one_post") {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["app.js"]
      });
    });
  }
});


