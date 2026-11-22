# Settled: Life in the UK study app

## What's here
- `pwa/` — the installable offline version (index.html, service worker, manifest, icons). Host this folder on any HTTPS static host.
- `settled-offline-app.zip` — the same folder zipped, for drag-and-drop hosting.
- `src/` — source: `content.js` (study notes), `questions.js` (537 original questions), `app.html` (the app).
- `tools/build.py` — rebuilds `pwa/` and the single-page artifact from `src/`.

## Install on iPhone or iPad (once it's hosted)
1. Open the hosted link in **Safari** (must be Safari on iOS/iPadOS).
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. Open it once from the home screen while online. It's then cached and works with no connection, e.g. in flight mode.

## Android
Open the link in Chrome → menu → **Install app** (or **Add to Home screen**).

## Moving progress between devices
Progress is stored on each device. Progress tab → **Copy progress code**, then paste it into **Load progress** on the other device.

## Content notes
- Notes and questions are original summaries of *Life in the United Kingdom: A Guide for New Residents* (3rd ed.), not the official question bank.
- Notes marked ⚠️ are facts that changed after the 2013 handbook (monarch, Brexit, NI Assembly size, lottery age, jury age, small-claims limit, Commonwealth size).
- Test facts (24 questions, 45 min, 75% pass, £50, book 3+ days ahead) checked on gov.uk on 22 Nov 2026.
