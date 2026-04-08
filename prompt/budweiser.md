# Bud Website One-Shot Prompt

## Purpose
This document is a complete handoff prompt for another coding agent so it can rebuild this website in one pass with high fidelity. It is based on the current implementation in this repository and includes the stack, structure, copy, assets, layout rules, motion behavior, responsive behavior, important code patterns, and delivery requirements.

Use this as the exact prompt to another coding agent if your goal is:

1. Recreate the current site faithfully.
2. Preserve the current visual language and scroll choreography.
3. Keep the build in React + Vite.
4. Reuse the existing assets in this repo.

---

## Copy-Paste One-Shot Prompt
```md
Build a single-page premium beverage landing page in React 19 + Vite that matches the existing `bud` website in this repository as closely as possible. The site is a scroll-driven, parallax-heavy hero/product experience with a fixed animated bottle, a large drifting background logo, oversized typography, editorial copy blocks, circular ingredient callouts, and a final product lineup showcase.

You must implement the full site end-to-end, not a partial mock. Deliver working code, wired assets, responsive behavior, and polished styling. Reuse local assets already present in the repo. Do not redesign the site into something generic. Preserve the current structure, palette, motion logic, and overall personality.

## Tech stack requirements
- Use React 19 with Vite.
- Keep the app as a single-page experience rendered from `src/App.jsx`.
- Use `@studio-freight/lenis` for smooth scrolling.
- Use `aos` for section-level fade-up animations where currently used.
- Keep styling in CSS files, primarily `src/App.css` and `src/index.css`.
- Keep Google Fonts loading in `index.html` for `Anton` and `Dancing Script`.

## Asset usage requirements
Use these existing assets:
- `src/assets/logi.png` as the large drifting hero background logo.
- `src/assets/premium.png` as the main fixed bottle and one showcase bottle.
- `src/assets/bud-tap.svg` in the showcase lineup.
- `src/assets/bud-can.svg` in the showcase lineup.
- `src/assets/bud-tall-can.svg` in the showcase lineup.
- `/l2.svg` from `public` as the fixed top-left header logo.

Do not substitute placeholders if the local asset exists.

## Site architecture
The page is a single long scroll experience composed of these layers and sections:

1. Fixed side navigation / mobile bottom navigation.
2. Fixed top header with brand logo and CTA.
3. Fixed background layer containing a large centered logo that drifts upward as scroll increases.
4. Fixed foreground bottle layer containing the main bottle image, centered at first, slightly rotated, then scaled down and repositioned during the showcase transition.
5. Scroll content layer containing:
   - large hero copy and description
   - right-side stats panel
   - giant MOUTHFEELS section with oversize red title and editorial copy
   - ingredient circles section with three large circular callouts and side text
   - final YEAR ROUND showcase with a 5-column product lineup

## Required content structure

### Navigation
- Desktop:
  - fixed left vertical nav, 60px wide
  - hamburger/menu icon near top
  - search icon below
- Mobile:
  - convert nav into a fixed bottom bar
  - include a centered or prominent `BUY NOW` mobile CTA button
  - keep menu and search icons as touch targets

### Header
- Fixed header offset to the right of desktop side nav.
- Header logo uses `/l2.svg`.
- Desktop only top-right CTA button: `BUY NOW`.
- On mobile, hide the header CTA and use the bottom nav CTA instead.

### Fixed background hero logo
- Use `src/assets/logi.png`.
- Place it absolutely centered inside a full-screen fixed layer.
- It should move upward based on scroll:
  - desktop speed factor around `1.5`
  - mobile speed factor around `0.8`
- Keep opacity around `0.8`.
- Keep it behind the bottle.

### Fixed hero bottle
- Use `src/assets/premium.png`.
- It must remain fixed in the center early on.
- Initial visual treatment:
  - top: `50%`
  - left: `50%`
  - max-height around `80vh`
  - strong multi-layer drop shadows
  - slightly increased brightness/contrast/saturation
- Animated behavior:
  - start with a rotation around `15deg` that decreases with scroll
  - add subtle `rotateY` wobble based on a sine of scroll value
  - scale down significantly when entering the showcase section
  - move from center toward the final lineup area and then continue translating upward after showcase lock

### Hero content section
- Create a large top spacer around `65vh` so the fixed bottle is the first thing users see.
- Use a 2-column content grid on desktop and stacked layout on mobile.
- Left column:
  - subtitle: `UNLIMITED RELEASE`
  - title:
    - line 1: `BUDWEISER`
    - line 2: `PREMIUM`
  - descriptive paragraph exactly as follows:

    `Lagunitas IPA was our first seasonal way back in 1995. The recipe was formulated with malt and hops working together to balance it all out on your ‘buds so you can knock back more than one without wearing yourself out. Big on the aroma with a hoppy-sweet finish that’ll leave you wantin’ another sip. Made with 43 different hops and 65 various malts, this redolent ale will likely float your boat, whatever planet you’re on.`

  - CTA button: `BUY NOW`
- Right column:
  - bordered stats box
  - three stat blocks:
    - `ABV` / `6.2%` / `Alcohol by Volume`
    - `IBU` / `51.1`
    - `OG` / `1.059` / `Original Gravity`

### Mouthfeels section
- Oversized section title text: `MOUTHFEELS`
- This title should be huge, span nearly full width, use red gradient text, and sit as a background layer.
- Section should scale down slightly as the user scrolls deeper.
- Content aligned mostly to the right on desktop.
- Intro paragraph:

  `A well-rounded, highly drinkable IPA packed with “C-word” hops and rounded out with some simcoe. The taste is a clean mix of refreshing citrus, sweet caramel and pleasant bitterness. Lagunitas IPA has a light orange body, a long lasting head, a full bodied aroma, and a nice sharp hop finish. Pairs with mild blue cheese, heavy metal and bluegrass.`

- Style block:
  - heading: `STYLE`
  - floating emphasized paragraph:

    `In the world of India Pale Ales, our darling is a bit of a rare gem. We’ve been called easy (to drink). We’ve been called high (ly drinkable). But don’t let the names others call us limit your perception, man. We proudly brew Lagunitas IPA year round as a friendly, well balanced beer that’s great for IPA beginners and lifelong IPA lovers.`

  - normal paragraph:

    `A well-rounded, highly drinkable IPA with more personality than a monk on acid. This is an India Pale Ale that craft beer newbies and lifelong IPA fans both love.`

- There is no video in the current implementation. Keep the left video area absent or hidden.
- Apply AOS fade-up animations to the intro paragraph, the `STYLE` heading, the floating paragraph, and the final paragraph.

### Ingredients circles section
- Create a vertical stack of three giant circular callouts.
- Each circle should feel dimensional with a deep shadow and inset shadow.
- Circle 1:
  - title: `PINE`
  - icon: `🌲`
  - description: `The pine, from hops, brings balance to the citrus and caramel flavors.`
  - color: `#D92323`
- Circle 2:
  - title: `CARAMEL - MALT`
  - icon: `♨️`
  - description: `English caramel malt brings a depth of flavor and a clean finish.`
  - color: `#1a1a1a`
- Circle 3:
  - title: `ORANGE - C HOPS`
  - icon: `🍋`
  - description: `Old school C-hops bring a touch of bright and deep citrus flavor.`
  - color: `#D92323`

- Add side text between circles:
  - `A harmonious blend of`
  - `43 hop varieties`
  - `and`
  - `65 various malts`

- Emphasize the numeric parts in red.
- Side text becomes visible only after a scroll threshold.

### Product showcase section
- Header:
  - small script label: `Availability:`
  - huge title: `YEAR ROUND`
- Product lineup is a 5-item row on desktop and stacked on mobile.
- Items in order:
  1. `On tap` with `bud-tap.svg`
  2. `22 oz bottles / 6-PACK` with `premium.png`
  3. center slot with no image, only a placeholder so the animated hero bottle can visually land there
  4. `12 oz cans` with `bud-can.svg`
  5. `19.2 oz cans` with `bud-tall-can.svg`
- The center slot label must read:
  - `12 oz bottles`
  - `6- OR 12-PACK`
- Keep the center label shifted slightly left to compensate visually.

## Motion behavior requirements
Use actual scroll-linked behavior, not fake static transforms.

### Lenis
- Initialize Lenis in a `useEffect`.
- Use a custom easing function:
  - `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- Run Lenis via `requestAnimationFrame`.
- Listen to Lenis scroll events and store the animated scroll value in React state.

### Scroll state
- Maintain:
  - `scrollY`
  - `isMobile`
- Update `isMobile` on resize using `window.innerWidth <= 768`.

### Hero logo transform
- Compute:
  - `translate(-50%, calc(-50% - ${scrollY * factor}px))`
- Desktop factor about `1.5`
- Mobile factor about `0.8`

### Bottle choreography
- Start with these approximate values:
  - desktop base scale `1.1`
  - mobile base scale `0.7`
  - final scale `0.2`
  - desktop landing shift `510`
  - mobile landing shift `1200`
  - desktop landing position `460`
  - mobile landing position `1150`
- Create a showcase trigger:
  - desktop around `2600`
  - mobile around `5500`
- Over roughly `800` scroll units:
  - scale the bottle from base to final
  - translate it downward from `-50%` to about `-85%`
  - move it into the central showcase slot
- After the showcase end point, continue moving the bottle up relative to additional scroll so it feels pinned then released.

### Hero text fade/scale
- Once the user scrolls past about `500`, progressively:
  - scale hero text down toward `0.7`
  - fade opacity toward `0`

### Mouthfeels parallax
- Scale section down slightly after a trigger:
  - desktop trigger around `1500`
  - mobile trigger around `3000`
- Move the giant `MOUTHFEELS` title downward on scroll.
- Move the content block upward on scroll for opposite-direction parallax.

### Ingredient circles
- Implement each circle with an `IngredientCircle` component.
- Each circle should accept:
  - `title`
  - `icon`
  - `desc`
  - `color`
  - `scrollY`
  - `trigger`
  - `factor`
- Compute upward translation roughly as:
  - `Math.max(0, (scrollY - trigger) * factor)`
- Apply via `transform: translateY(${-progress}px)`.
- Use different trigger/factor values for each circle and adjust for desktop/mobile.

### Showcase section scaling
- Slightly scale down the showcase section after the showcase trigger to preserve the zoomed editorial feel.

## Visual design system

### Palette
- Base background: warm textured beige `#E8E4C9`
- Main dark text/border: `#1a1a1a`
- Accent red: `#D92323`
- Deep red gradient endpoint: `#8B0000`
- Body text gray: around `#333` to `#444`

### Background treatment
- Use a subtle noise texture on the beige page background with an inline SVG noise data URI.
- Keep the page enclosed in a dark border:
  - desktop about `12px`
  - mobile about `4px`

### Typography
- `Anton` for large headings and bold labels.
- `Dancing Script` for handwritten/script accents like `UNLIMITED RELEASE` and `Availability:`.
- `Inter` for paragraph text and smaller UI text.

### General style
- Strong editorial poster feel.
- Oversized typography.
- Premium beverage ad aesthetic.
- Bold shadows and textured background.
- No glassmorphism-heavy SaaS styling.
- No generic startup layout patterns.

## Layout and responsive behavior

### Desktop
- Side nav fixed left.
- Header shifted right by side nav width.
- Main content in wide editorial composition with lots of whitespace.
- Hero bottle dominates the center of the viewport.

### Mobile
- Convert left nav into a bottom nav bar with blur background.
- Hide top header CTA.
- Stack main content into a single column.
- Increase total scrollable height significantly.
- Increase spacing between product lineup items.
- Ingredient circles become full-width circular blocks using `aspect-ratio: 1`.
- Mouthfeels layout becomes vertically stacked and text centered.

## File structure expectations
- `src/main.jsx`
- `src/App.jsx`
- `src/App.css`
- `src/index.css`
- `index.html`
- existing assets under `src/assets` and `public`

## Important implementation details
- Put all app rendering in `App.jsx`.
- Import and initialize:
  - `Lenis`
  - `AOS`
  - `aos/dist/aos.css`
- Use `useEffect` for Lenis and AOS setup.
- Clean up:
  - resize event listener
  - `lenis.destroy()`
- Keep `will-change` on major animated elements.
- Prefer `transform` and `opacity` animations only.
- Keep pointer events disabled on fixed decorative layers where appropriate.

## Exact structural reference
Build the JSX tree in this approximate order:

1. outer `.page-container`
2. `.side-nav`
3. `.main-header`
4. `.fixed-layer` containing the large drifting logo
5. fixed `.hero-bottle`
6. `.scroll-content`
7. `.spacer`
8. `.content-grid`
9. `.mouthfeel-section`
10. `.ingredients-circles-container`
11. `.showcase-section`

## Important code patterns to preserve

### IngredientCircle component pattern
Use a dedicated component that translates itself upward based on scroll progress:

```jsx
function IngredientCircle({ title, icon, desc, color, scrollY, trigger, factor }) {
  const progress = Math.max(0, (scrollY - trigger) * factor)

  return (
    <div
      className="ingredient-circle-wrapper"
      style={{
        transform: `translateY(${-progress}px)`,
        backgroundColor: color,
      }}
    >
      <div className="circle-content">
        <span className="circle-icon">{icon}</span>
        <h3 className="circle-title">{title}</h3>
        <p className="circle-desc">{desc}</p>
      </div>
    </div>
  )
}
```

### Lenis integration pattern
Use this integration pattern:

```jsx
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
  })

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  lenis.on('scroll', (e) => {
    setScrollY(e.scroll)
  })

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
    lenis.destroy()
  }
}, [])
```

### Bottle transform pattern
Use computed values for rotation, scale, translate, and top position:

```jsx
let rotation = Math.max(0, 15 - (scrollY / 20))
let scale = baseScale
let translateY = -50

if (scrollY > showcaseTrigger) {
  const factor = Math.min(1, (scrollY - showcaseTrigger) / showcaseDuration)
  scale = baseScale - (factor * (baseScale - finalScale))
  translateY = -50 - (factor * 35)
}

const lockShift = scrollY > showcaseTrigger
  ? -50 + Math.min(landingShift, ((scrollY - showcaseTrigger) / showcaseDuration) * landingShift)
  : -50

const tilt = Math.sin(scrollY / 1000) * 8
const bottleTransform = `translate(-50%, ${translateY}%) rotate(${rotation}deg) rotateY(${tilt}deg) scale(${scale})`
```

## CSS requirements
Implement the following major classes with production-ready styling:
- `.page-container`
- `.side-nav`
- `.nav-item`
- `.main-header`
- `.header-logo`
- `.header-cta`
- `.fixed-layer`
- `.hero-logo`
- `.hero-bottle`
- `.scroll-content`
- `.spacer`
- `.content-grid`
- `.left-column`
- `.right-column`
- `.hero-text-container`
- `.hero-subtitle`
- `.hero-title`
- `.description-container`
- `.description-text`
- `.cta-button`
- `.stats-box`
- `.stat-item`
- `.stat-label`
- `.stat-value`
- `.stat-desc`
- `.mouthfeel-section`
- `.mouthfeel-content-grid`
- `.mf-right`
- `.mf-intro`
- `.mf-style-block`
- `.floating-text-block`
- `.ingredients-circles-container`
- `.ingredient-circle-wrapper`
- `.circle-icon`
- `.circle-title`
- `.circle-desc`
- `.parallax-side-text`
- `.showcase-section`
- `.showcase-header`
- `.availability-label`
- `.year-round-title`
- `.product-lineup`
- `.lineup-item`
- `.product-visual`
- `.product-label`
- `.shift-label-left`
- `.bottle-placeholder`
- `.bottom-cta`

## Base CSS behaviors to include
- Lenis compatibility classes:
  - `html.lenis`
  - `.lenis.lenis-smooth`
  - `.lenis.lenis-stopped`
  - `.lenis.lenis-scrolling iframe`
- Global background texture on `html, body`
- `overflow-x: hidden`
- performance hints with `will-change`
- responsive breakpoints around `1200px` and `768px`

## Head metadata requirements
In `index.html`:
- keep UTF-8
- keep viewport meta
- preload/preconnect Google Fonts
- load `Anton` and `Dancing Script`
- mount React at `#root`

You may improve the page title from the current generic `Vite + React`, but do not otherwise alter the tech setup unnecessarily.

## Fidelity notes
Some brand/content references are intentionally mixed in the current implementation. Preserve the current copy exactly unless explicitly asked to clean it up. That means:
- header logo alt says Lagunitas in the current app
- body copy heavily references Lagunitas IPA even though the visual branding is Budweiser-oriented
- keep the current text content as-is for fidelity

## Delivery requirements
- Return completed code, not just a plan.
- Ensure `npm run build` succeeds.
- Do not leave TODOs or placeholders.
- Preserve desktop and mobile behavior.
- Preserve scroll-linked motion.
- Keep the visual feel bold, tactile, and premium.

## Acceptance checklist
- Fixed bottle animates correctly through the page.
- Large background logo drifts upward behind bottle.
- Hero text fades/scales on scroll.
- Stats box appears on the right on desktop.
- `MOUTHFEELS` section has giant parallax background text.
- Ingredient circles animate upward based on scroll.
- Side text appears between circles.
- Final product lineup contains five slots with a center placeholder.
- Desktop side nav becomes bottom nav on mobile.
- Buttons, typography, colors, spacing, and borders match the existing design language.
- Build passes.
```

---

## Current Repo Reference

### Stack
- React 19.2
- Vite 7.3
- Lenis 1.0.42
- AOS 2.3.4

### Actual current files involved
- [src/App.jsx](D:\websites\bud\src\App.jsx)
- [src/App.css](D:\websites\bud\src\App.css)
- [src/main.jsx](D:\websites\bud\src\main.jsx)
- [src/index.css](D:\websites\bud\src\index.css)
- [index.html](D:\websites\bud\index.html)
- [package.json](D:\websites\bud\package.json)

### Asset files used by the current app
- [src/assets/logi.png](D:\websites\bud\src\assets\logi.png)
- [src/assets/premium.png](D:\websites\bud\src\assets\premium.png)
- [src/assets/bud-tap.svg](D:\websites\bud\src\assets\bud-tap.svg)
- [src/assets/bud-can.svg](D:\websites\bud\src\assets\bud-can.svg)
- [src/assets/bud-tall-can.svg](D:\websites\bud\src\assets\bud-tall-can.svg)
- [public/l2.svg](D:\websites\bud\public\l2.svg)

---

## Useful Notes For The Next Agent

### What matters most
- This is not a normal landing page. The fixed bottle and layered scroll math are the product.
- The visual hierarchy depends on absolute/fixed layers sitting above and behind scroll content.
- The site uses manual scroll math rather than GSAP timelines.
- Mobile behavior is not just scaled-down desktop; navigation and layout change significantly.

### What should not be “cleaned up” unless asked
- Mixed Budweiser/Lagunitas copy and alt text.
- Hard-coded scroll trigger values.
- Inline transform styles for hero layers.
- The placeholder center slot in the showcase lineup.

### What can be improved safely
- Document title in `index.html`
- minor cleanup of unused imports like `useRef` if it remains unused
- accessibility labels if they do not alter layout
- small CSS refactors that preserve appearance

---

## Short Summary
If you only need the shortest possible instruction: tell the next coding agent to recreate the current repo’s single-page React/Vite premium beer landing page exactly as implemented, preserving Lenis-powered smooth scrolling, fixed bottle choreography, giant drifting logo, editorial typography, ingredient circles, and final five-slot showcase, while reusing the existing assets and current text verbatim.
