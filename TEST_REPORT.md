# Joey Saloza Portfolio — Comprehensive QA Report

## APN Experience fix

The APN evidence gallery was rebuilt as one authoritative component under **05 — EXPERIENCE**.

Required order:
1. Certificate of Completion
2. Workplace / laptop photo
3. Operations Environment / telephone photo

The third source image was verified against the supplied telephone photo and is an exact pixel match after normalization.

### Removed from the APN Experience section
- `APN · OJT EVIDENCE`
- `Proof behind the experience.`
- The explanatory evidence paragraph beginning `Three selected pieces...`

The gallery remains directly under the OJT experience content; no additional subsection was added.

## Static QA — 45/45 PASS

- 05 — EXPERIENCE section exists.
- Exactly 3 APN evidence cards exist.
- Card order and titles are correct.
- All 3 APN image files exist and decode successfully.
- All local image and `data-image` references resolve.
- All images have alt text.
- No broken internal anchors detected.
- No legacy/unscoped APN gallery CSS remains.
- Desktop APN gallery is explicitly 3 columns.
- Mobile APN gallery preserves all 3 cards in a horizontal scroll track.
- JavaScript syntax check passes.
- ParkIT section remains present.
- GARDiaScope section remains present.
- Employee Churn Analytics section remains present.
- Existing ZIP archive is readable.

## Source-image verification

The telephone card uses:
`assets/experience/apn-work-environment.jpg`

This file was compared with the supplied telephone image and matched exactly after resizing both to the same comparison dimensions.

## Interaction checks

The existing JavaScript binds `.evidence-card` to the portfolio's image modal. The third card therefore uses the same full-size preview interaction as the first two cards.

## Responsive hardening

The APN gallery now has explicit behavior at:
- Desktop: 3 cards in one row.
- Tablet: 3-card horizontal scroll track.
- Mobile: 3-card horizontal scroll track with card-sized snap positions.

The previous conflicting two-row APN rules were removed.

## Browser-environment note

A direct Chromium live-page navigation test is blocked by the sandbox environment with `ERR_BLOCKED_BY_ADMINISTRATOR`. This is an environment restriction, not a portfolio asset/reference failure. Static DOM, CSS, JavaScript, image decoding, archive, and rendered gallery checks were performed instead.
