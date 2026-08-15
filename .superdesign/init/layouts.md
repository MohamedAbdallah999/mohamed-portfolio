# Shared Layouts

There are no standalone shared layout components. The complete page shell is rendered inline by `App` in `src/App.tsx`.

## App shell

- Source: `src/App.tsx`
- Description: A fixed glass header, the full-page preloader, the single scrolling portfolio page, a footer, and a certificate modal.
- Render order: preloader -> scroll progress -> fixed header -> main hero and content sections -> footer -> optional modal.
- Header: `.site-header` contains an `MA` brand mark, horizontal anchor navigation, and theme toggle.
- Footer: `.footer` contains Mohamed's name, professional title, GitHub, LinkedIn, and email links.

The target splash-screen branch is the conditional block at `src/App.tsx:185:205`. The full `App` source remains the authoritative layout implementation and should be passed directly to design generation because the file is under 900 lines.
