# Global Fuel Prices and Taxation Trend

A responsive website with the Tableau Public **Global Fuel Prices Dashboard** and a Tableau **Story** embedded directly in the page. Both visualisations begin loading when the website opens.

## Files
- `index.html` — page content and the two embedded Tableau views
- `style.css` — responsive dark theme and layout
- `script.js` — small layout helper
- `README.md` — setup and publishing guide

## Run in VS Code
1. Extract the ZIP file.
2. Open the extracted folder in VS Code.
3. Install the **Live Server** extension (if needed).
4. Right-click `index.html` and choose **Open with Live Server**.

An internet connection is required to load the Tableau Public views.

## Publish on GitHub Pages
1. Create a new GitHub repository, for example `global-fuel-prices-taxation-trend`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose branch `main` and folder `/(root)`, then save.
5. Wait for the published URL to appear in the Pages section.

## Tableau embeds
The supplied dashboard embed identifies `GlobalFuelPricesandTaxationTrends20202026_17933937215950/GlobalFuelPricesDashboard`. The supplied story embed identifies the shared view `Q9DQXR2PW`. Both are embedded directly in `index.html`. If you update either view or its privacy settings on Tableau Public, check the public page again.

## Notes
- Tableau Public visualisations are public; do not embed confidential data.
- The decorative petrol/diesel cards and hero chart are illustrative. Actual project values come from the Tableau views.
- On small screens, Tableau visualisations may need vertical scrolling inside the page because Tableau controls the chart's internal layout.
