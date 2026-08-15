# Theme

## Compact token summary

- Framework: React 19 + Vite + TypeScript.
- UI: custom JSX/CSS with Framer Motion and React Three Fiber; Tailwind directives are present but most styling is authored in `src/styles.css`.
- Font: Inter, then `ui-sans-serif`, `system-ui`, Segoe UI, Arial, sans-serif.
- Dark canvas: `#05070d` to `#0d111a`.
- Surfaces: translucent slate `rgba(15, 23, 42, 0.7)` and `rgba(17, 24, 39, 0.92)`.
- Accent sequence: cyan `#38dff5`, blue `#5aa7ff`, violet `#9d8cff`.
- Text: `#f8fafc`; muted `#a7b4c8`; silver `#d7dde8`.
- Borders: white/slate hairlines around 14-20% opacity.
- Radius: 10-18px controls/cards, 22-28px feature surfaces, pill radius for badges.
- Shadow: broad black shadows, e.g. `0 24px 80px rgba(0, 0, 0, 0.38)`.
- Motion: smooth floating and orbiting loops, subtle card depth, gradient scanning, and entrance fades.
- Breakpoints: 1100px, 900px, 760px, plus compact loader treatment at 380px or 640px height.

## Raw Tailwind config

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

## Raw CSS tokens

```css
:root {
  color-scheme: dark;
  --bg: #05070d;
  --bg-soft: #0d111a;
  --surface: rgba(15, 23, 42, 0.7);
  --surface-strong: rgba(17, 24, 39, 0.92);
  --line: rgba(226, 232, 240, 0.14);
  --text: #f8fafc;
  --muted: #a7b4c8;
  --muted-strong: #d8e3f5;
  --cyan: #38dff5;
  --blue: #5aa7ff;
  --violet: #9d8cff;
  --silver: #d7dde8;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
}

.light-mode {
  color-scheme: light;
  --bg: #f5f8fc;
  --bg-soft: #eaf0f8;
  --surface: rgba(255, 255, 255, 0.82);
  --surface-strong: rgba(255, 255, 255, 0.96);
  --line: rgba(20, 30, 48, 0.14);
  --text: #09111f;
  --muted: #42526a;
  --muted-strong: #172033;
  --shadow: 0 22px 70px rgba(24, 40, 72, 0.14);
}

body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at top left, rgba(56, 223, 245, 0.18), transparent 34rem),
    radial-gradient(circle at 78% 12%, rgba(157, 140, 255, 0.12), transparent 32rem),
    linear-gradient(135deg, var(--bg), var(--bg-soft));
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, Segoe UI, Arial, sans-serif;
}
```

The authoritative stylesheet is `src/styles.css`. It is over 900 lines, so design calls should pass `:1:249`, `:997:1110`, and `:1223:1257` for the tokens, current preloader, its keyframes, and compact responsive treatment.
