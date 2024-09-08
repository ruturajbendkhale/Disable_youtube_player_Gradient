// Function to apply styles dynamically
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .ytp-gradient-top,
      .ytp-gradient-bottom {
        display: none !important;
      }
      .ytp-chrome-top .ytp-title,
      .ytp-chrome-bottom .ytp-chrome-controls button,
      .ytp-chrome-bottom .ytp-progress-bar-container {
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.8);
      }
      .ytp-chrome-top button svg,
      .ytp-chrome-bottom button svg {
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
      }
      .ytp-time-display {
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.8);
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