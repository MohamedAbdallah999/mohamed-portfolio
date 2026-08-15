# Page Dependency Trees

## `/` - Portfolio home

Entry: `src/main.tsx`

Dependencies:

- `src/main.tsx`
  - `src/App.tsx`
    - `src/data/portfolio.ts`
    - `src/styles.css` (loaded by `src/main.tsx`)
  - `src/styles.css`
- `index.html`
- `tailwind.config.js`
- `vite.config.ts`

The target splash screen is the conditional preloader rendered in `src/App.tsx:185:205`. It uses state and a 2800ms timeout from `src/App.tsx:139:149`, styling from `src/styles.css:70:249`, animation keyframes from `src/styles.css:997:1110`, and compact responsive rules from `src/styles.css:1223:1257`.
