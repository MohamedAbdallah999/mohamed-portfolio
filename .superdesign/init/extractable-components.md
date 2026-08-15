# Extractable Components

The app has no standalone shared layout components, so Superdesign component extraction should be skipped for this splash-screen task.

## HeroScene

- Source: `src/App.tsx`
- Category: basic
- Description: Decorative Three.js homepage scene with stars, floating metallic cubes, and a torus knot.
- Extractable props: none
- Hardcoded: geometry, colors, light positions, star count, camera, and controls

## Section

- Source: `src/App.tsx`
- Category: basic
- Description: Repeated animated content-section wrapper.
- Extractable props: `id`, `eyebrow`, `title`, `children`
- Hardcoded: Framer Motion timing and class names

## DownloadLink

- Source: `src/App.tsx`
- Category: basic
- Description: Download action shared by document and certificate areas.
- Extractable props: `href`, `children`, `className`
- Hardcoded: download icon and visual styling
