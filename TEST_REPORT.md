# Portfolio QA Report — single GARDiaScope project + product films

## What changed

**Projects section only.** About, Toolkit, Experience (APN), Credentials, Resume/CV, certificates, header/navigation and the hero are byte-identical to the base ZIP.

- **GARDiaScope is now one project (01).** Before: the project block, a second "THESIS PROJECT / From microscope to mobile" block with a second description and stack, a 09-chapter reel, and a second 95% mAP row. Now: label, name, tagline, one description, one stack list (`YOLOv8 · Python · Computer Vision · Android`), one metric (`95% mAP`), the product film, and one action, `EXPLORE THESIS ↗`.
- **The thesis is a layer inside the project.** `EXPLORE THESIS ↗` expands it in place. It keeps all 9 slides and chapters, the role/scope detail, and the `95% mAP / 50 samples / κ = 0.61` validation detail. The header's "Thesis" link and `/#thesis` open the same layer. The slideshow timer and arrow keys run only while it is open.
- **GARDiaScope product film** (`assets/projects/gardiascope-product-film.mp4`, poster `gardiascope-product-film.jpg`): muted, looping, autoplaying, `playsinline`; cinematic overlay (viewfinder corners, PRODUCT FILM / 4:04 readout, Watch film button); click opens the large player with sound.
- **TapBiyahe / ParkIT:** films renamed to `tapbiyahe-product-film.mp4` and `parkit-product-film.mp4` and re-encoded from 30 MB / 29 MB to 10.5 MB / 10.3 MB (1080p / 30 fps H.264, PSNR 39 to 47 dB against the originals), so every file is under the 25 MB limit of the github.com browser uploader. The whole card now opens the large player, and each card has a PRODUCT FILM badge. Project text, tags and posters are unchanged.
- **Employee Churn Analytics:** unchanged content; the whole card now opens the Tableau dashboard (previously only the button did). Not a video project.

## Video handling

`GARDIASCOPE_WT.mp4` was 4K / 60 fps / **459 MB**. GitHub Pages rejects files over 100 MB, so the site ships a 1080p / 30 fps H.264 + AAC version (**17.1 MB**, fast-start, same 4:04 runtime). Measured PSNR against the source: 40.0 dB (field footage) and 41.2 dB (app UI frame); side-by-side crops are visually identical. The original 459 MB file is not in the ZIP.

## Results

| Check | Result |
|---|---|
| Static / structure / redundancy / integrity (`verify_static`) | 59 / 59 |
| Browser interaction (Chromium, desktop + 5 widths) | 55 / 55 |
| Playback logic (autoplay, loop, unmuted modal, pause/resume) | 8 / 8 |
| Full decode of all 3 MP4s with ffmpeg (0 errors) | 3 / 3 |
| `unzip -t` on the final archive | passed |

Every file in the ZIP is under 25 MB (largest: 17.1 MB), so the github.com drag-and-drop uploader accepts all of them.

Highlights: every local asset reference resolves (37 checked); exact Tableau URL present once; main GARDiaScope card contains one heading, one description, one stack list, one `95% mAP`; thesis layer sits inside the GARDiaScope `<article>`; all 9 chapters select and each slide image decodes; modal opens with `muted=false, volume=1`, Escape/X/backdrop close it and release the source; all 9 PDFs, 30 images and 9 thesis slides are byte-identical to the base.

## Honest limits

- The headless test browser has no H.264 decoder, so real MP4 playback was verified by ffmpeg full-decode plus a VP9 stand-in test of the same JavaScript, not by playing the shipped MP4s in a browser. Standard H.264 High / AAC in MP4 plays in all current browsers.
- **Pre-existing, untouched:** the hero's rotated dashed orbit ring is 2–16 px wider than a phone viewport (a small sideways scroll). It is in the hero, which was out of scope. The base ZIP also had a ~1,500 px sideways scroll on phones caused by the thesis chapter strip; the new layout fixes that.
