// Tableau Public's official embed API initialises the dashboard and story placeholders.
// The embed codes are already present in index.html, so both views start loading on page open.
window.addEventListener("load", function () {
  // Re-trigger Tableau initialisation after the page layout is ready.
  // The official viz_v1.js script scans Tableau placeholders and loads their views.
  const placeholders = document.querySelectorAll(".tableauPlaceholder");
  placeholders.forEach(function (placeholder) {
    placeholder.style.width = "100%";
  });
});