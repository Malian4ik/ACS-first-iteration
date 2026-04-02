# Avulus Cyber Space Frontend

Production-ready frontend scaffold for the Avulus Cyber Space B2C funnel website, implemented from the Stitch project screens.

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## How to install

```bash
npm install
```

## How to run locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Available routes

- `/`
- `/cyberclub`
- `/restaurant`

## Project structure

```text
app/
  cyberclub/
  restaurant/
components/
  layout/
  sections/
  ui/
lib/
  site-data.ts
public/
  images/
```

## Where to replace Stitch assets

- Current page visuals use the exact remote image URLs embedded in the Stitch screens.
- If you want local assets instead, download the images and replace the URLs inside `lib/stitch-site.ts`.
- You can also export final images from Stitch and store them in `public/images`, then update the same file.

## Where to edit CTA links and buttons

- Primary CTA targets are centralized in `lib/stitch-site.ts`.
- Update booking/reservation links in:
  - `contactLinks`
  - `homePage`
  - `cyberclubPage`
  - `restaurantPage`

## Notes

- Stitch HTML extracts used during implementation are stored in `.stitch-extract/` for reference.
- Main editable sources are:
  - `app/page.tsx`
  - `app/cyberclub/page.tsx`
  - `app/restaurant/page.tsx`
  - `lib/stitch-site.ts`
