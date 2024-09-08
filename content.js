// Function to apply styles dynamically
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .ytp-gradient-top,
      .ytp-gradient-bottom {
        display: none !important;
      }
      .ytp-chrome-top,
      .ytp-chrome-bottom {
        background-color: rgba(0, 0, 0, 0.5);
      }
      .ytp-chrome-top .ytp-title {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
      }
    `;
    document.head.appendChild(style);
  }
  
  // Apply styles immediately
  applyStyles();
  
  // Re-apply styles on navigation (for single-page app behavior)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      applyStyles();
    }
  }).observe(document, {subtree: true, childList: true});