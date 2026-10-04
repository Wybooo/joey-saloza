# Joey R. Saloza — Minimal Portfolio

A black-and-white minimalist portfolio built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Included
- Original-color circular profile portrait with decorative orbit frame
- Resume and full CV
- CDAA credential image and certificate
- Machine Learning Using Python certificate (August 2, 2024)
- Other uploaded certificates with visual preview + PDF links
- GARDiaScope thesis presentation, opened from the project card
- 9-slide auto-playing thesis presentation in the exact uploaded order
- Keyboard and arrow navigation, slide dots, pause/play controls
- Responsive layout and scroll reveal animations

## Thesis slide order
1. `slide-01.jpg` — 1777384830214
2. `slide-02.jpg` — 1777384830214 (1)
3. `slide-03.jpg` — 1777384830214 (2)
4. `slide-04.jpg` — 1777384830214 (3)
5. `slide-05.jpg` — 1777384830214 (4)
6. `slide-06.jpg` — 1777384830214 (5)
7. `slide-07.png` — 1777384830214
8. `slide-08.png` — 1777384830214 (1)
9. `slide-09.jpg` — 1777384830214 (6)

## Run locally
Open `index.html` in VS Code with Live Server, or open it directly in a browser.

## GitHub Pages
Push the entire `joey-portfolio-v2` folder to a GitHub repository, then enable **Settings → Pages → Deploy from a branch** and select the branch containing `index.html`.


### Projects
1. **GARDiaScope** is one project card: title, one description, one stack list, one metric, and the product film (`assets/projects/gardiascope-product-film.mp4`). The thesis lives inside it: **EXPLORE THESIS ↗** opens the 9-chapter thesis reel, with the 95% mAP, 50-sample and κ = 0.61 detail.
2. **TapBiyahe** has a muted looping product film (`assets/projects/tapbiyahe-product-film.mp4`).
3. **ParkIT** has a muted looping product film (`assets/projects/parkit-product-film.mp4`).
4. **Employee Churn Analytics** opens the Tableau Public dashboard.

### Project films
- Every film autoplays muted and loops inside its card (`playsinline`, so it also plays inline on phones).
- Clicking a film card opens a larger player with sound on, after the click.
- `gardiascope-product-film.mp4` is a 1080p / 30 fps web version of the original 4K / 60 fps `GARDIASCOPE_WT.mp4` (459 MB), which is far over GitHub's 100 MB per-file limit.
