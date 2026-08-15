# Mohamed Abdallah Portfolio Design System

## Product context

This is a single-page software-engineering portfolio for Mohamed Abdallah Mohamed. The experience should feel technical, confident, cinematic, and recruiter-friendly. The splash screen is a short 2.8-second introduction before the homepage appears.

## Brand character

- Futuristic software-engineering atmosphere without gamer-style clutter.
- Dark, high-contrast canvas with translucent slate glass and crisp hairline borders.
- Primary visual DNA comes from the homepage's 3D metallic cubes, star field, and cyan wireframe torus knot.
- Mohamed's full name is the strongest textual signature.
- Tone: precise, ambitious, forceful, and technically sophisticated.

## Color palette

- Background: `#05070d`, `#0d111a`, and near-black `#020617`.
- Primary cyan: `#38dff5`.
- Secondary blue: `#5aa7ff`.
- Accent violet: `#9d8cff`.
- Highlight silver: `#d7dde8` and white `#f8fafc`.
- Muted text: `#a7b4c8`.
- Use cyan/blue/violet glows at low opacity. Avoid introducing unrelated warm colors.

## Typography

- Font: Inter, ui-sans-serif, system-ui, Segoe UI, Arial, sans-serif only.
- Mohamed's name may be large, condensed through tight line-height and bold 800-950 weight, but must stay fully legible.
- Technical labels use small uppercase text with controlled tracking.
- Avoid decorative, serif, handwritten, or sci-fi novelty fonts.

## Shape and surface language

- Metallic cubes: teal, blue, violet, and silver with specular highlights.
- Wireframe torus knot: cyan, energetic, luminous, and central to the motion language.
- Glass panels: translucent slate, subtle blur, 1px border, large dark shadow.
- Corners: 18-28px for feature surfaces; 10-14px for small objects; pills only for status labels.
- Grid or scanning lines may appear as atmospheric layers, never as dense noise.

## Splash-screen requirements

- Full viewport and fully responsive down to 320px.
- Total duration remains approximately 2.8 seconds.
- The composition must visually connect to the homepage 3D scene.
- Aggressive motion means rapid fly-ins, whip rotations, elastic collisions, depth rushes, and a decisive final convergence—not random shaking.
- Motion must have a readable sequence: objects enter -> accelerate/orbit -> converge around the name -> flash or sweep -> transition to homepage.
- Show the full name exactly as `Mohamed Abdallah Mohamed`.
- Include a compact loading/progress signal, but it must not compete with the name.
- Respect `prefers-reduced-motion`: reduce transforms and eliminate rapid spinning while keeping the splash understandable.

## Motion timing

- 0-400ms: dark field activates; grid/star traces and objects enter from beyond the viewport.
- 400-1500ms: cubes and torus knot rotate aggressively in depth with staggered paths.
- 900-1900ms: the full name resolves sharply in the visual center.
- 1800-2500ms: objects converge or streak past the name; progress completes.
- 2500-2800ms: bright cyan sweep and clean exit to the existing homepage.

## Responsive behavior

- Desktop can use a wide cinematic composition with the name across the center and objects crossing on multiple depth planes.
- Mobile must keep the name within two or three balanced lines, keep objects away from text, and reduce object scale while preserving speed.
- No horizontal overflow at any breakpoint.

## Accessibility and performance

- The name must remain real text, not baked into an image.
- Decorative objects are `aria-hidden`; the container keeps `role="status"` and polite live-region behavior.
- Favor CSS 3D transforms and lightweight Three.js geometry already present in the project.
- Avoid expensive particle counts or textures that would delay the homepage.
