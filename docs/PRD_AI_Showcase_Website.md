# Product Requirements Document
## AI Pages Showcase Website
**Version:** 1.0  
**Date:** April 7, 2026  
**Inspired by:** motionsites.ai

---

## 1. Product Overview

### 1.1 Product Summary
A personal website that acts as a curated gallery of AI-generated web pages. Visitors can browse beautiful thumbnail previews, click to view any page in a mini-screen modal, and copy the AI prompt used to generate it — so they can recreate or remix it in any AI coding tool (v0, Bolt, Lovable, etc.).

### 1.2 Core Value Proposition
- **For visitors:** Discover beautiful, AI-generated web pages with one-click inspiration and ready-to-use prompts.
- **For the owner:** A personal brand showcase that demonstrates AI design fluency and builds an audience.

### 1.3 Target Users
- Frontend developers seeking design inspiration
- AI tool enthusiasts (v0, Bolt, Lovable, Cursor users)
- Designers exploring AI-assisted workflows
- Founders building landing pages on a budget

---

## 2. Feature Requirements

### 2.1 Homepage — Gallery Grid

**Description:**  
A responsive masonry or CSS grid layout displaying all uploaded page thumbnails.

**Requirements:**
- Display pages as cards in a dark-themed grid layout (similar to motionsites.ai)
- Each card shows:
  - **Thumbnail image** (auto-generated screenshot or manually uploaded PNG/WebP)
  - **Page title** (e.g., "Liquid Glass Agency")
  - **Category tag** (e.g., "Landing Page", "Agency", "SaaS", "Portfolio")
  - **Badge** — either `Copy Prompt` (free) or `Premium` (locked)
- Cards have a smooth hover effect: slight scale-up + subtle glow/border highlight
- Grid is responsive: 4 columns on desktop → 2 on tablet → 1 on mobile
- Lazy loading for performance

**Acceptance Criteria:**
- [ ] Grid renders correctly across all breakpoints
- [ ] Hover states are smooth (CSS transition ≤ 200ms)
- [ ] Cards display all 4 elements: thumbnail, title, category, badge
- [ ] Clicking any card opens the mini-screen modal

---

### 2.2 Mini-Screen Preview Modal

**Description:**  
When a user clicks a card, a modal opens showing a scrollable preview of the full page alongside metadata and the copy prompt feature.

**Requirements:**
- Modal overlays the gallery with a dark semi-transparent backdrop
- Modal contains:
  - **Header:** Page title + category label + `Copy Prompt` button + `✕` close button
  - **Preview pane:** Embedded iframe OR tall scrollable image of the page
  - **Scrollable:** User should be able to scroll the preview vertically
- Modal opens with a smooth slide-up or scale-in animation
- Keyboard accessible: `Escape` closes the modal
- Clicking the backdrop also closes the modal
- Mobile-responsive: modal takes up ~95% of viewport on small screens

**Acceptance Criteria:**
- [ ] Modal opens on card click
- [ ] Close works via ✕ button, backdrop click, and Escape key
- [ ] Preview is scrollable inside the modal
- [ ] `Copy Prompt` button is visible and functional in header
- [ ] Animation is smooth (no jank)

---

### 2.3 Copy Prompt Feature

**Description:**  
Each page has an associated AI prompt stored in the system. The "Copy Prompt" button copies this to the clipboard instantly.

**Requirements:**
- Clicking `Copy Prompt` copies the stored prompt text to clipboard
- Button shows visual feedback after copy: label changes to `✓ Copied!` for 2 seconds, then reverts
- Prompt text is stored in the page's metadata (JSON or CMS entry)
- Prompt should be detailed enough to reproduce the design in tools like v0, Bolt, Lovable, or Cursor
- Optional: A small tooltip on hover that says "Copy the AI prompt used to build this page"

**Acceptance Criteria:**
- [ ] Clipboard copy works on all major browsers (Chrome, Firefox, Safari)
- [ ] Visual confirmation feedback shown after copy
- [ ] Prompt is non-empty for all non-Premium pages

---

### 2.4 Content Management — Page Upload System

**Description:**  
The owner (you) needs a simple way to add new pages to the gallery without touching code.

**Option A — Static JSON File (MVP, Simplest)**  
All pages are stored in a `pages.json` file. To add a new page, update the JSON and redeploy.

```json
[
  {
    "id": "liquid-glass-agency",
    "title": "Liquid Glass Agency",
    "category": "Landing Page",
    "thumbnail": "/thumbnails/liquid-glass-agency.png",
    "previewUrl": "/previews/liquid-glass-agency.html",
    "prompt": "Create a dark-themed agency landing page with an ethereal botanical background...",
    "isPremium": false,
    "tags": ["agency", "dark", "minimal"]
  }
]
```

**Option B — Admin Dashboard (Future)**  
A private `/admin` route (password-protected) where you can:
- Upload thumbnail images
- Paste the prompt text
- Set title, category, and Premium/Free status
- Publish or draft pages

**Recommendation:** Start with Option A (JSON), migrate to Option B when you have 50+ pages.

**Acceptance Criteria:**
- [ ] New pages appear in the gallery after JSON update + redeploy (Option A)
- [ ] Each entry has: id, title, category, thumbnail path, preview, prompt, isPremium

---

### 2.5 Filtering & Search (Phase 2)

**Description:**  
As the gallery grows, users need to find relevant pages quickly.

**Requirements:**
- Filter chips at the top of the gallery: `All` | `Landing Page` | `Agency` | `SaaS` | `Portfolio` | `E-commerce` | `NFT` etc.
- Search bar: real-time filtering by title or tag
- Active filter chip is visually highlighted
- Filter state is preserved in URL query params (e.g., `?category=saas`)

**Acceptance Criteria:**
- [ ] Clicking a filter chip updates the visible cards
- [ ] Search filters cards in real-time with no page reload
- [ ] URL updates with active filter for shareability

---

### 2.6 Premium / Free Tier Logic (Optional)

**Description:**  
Some prompts can be gated behind a "Premium" badge to monetize the site.

**Requirements:**
- Free pages: `Copy Prompt` button is fully functional
- Premium pages: `Copy Prompt` button shows a lock icon and triggers an upgrade CTA
- Premium CTA can link to a Gumroad, LemonSqueezy, or email capture page
- Visual distinction: Premium badge uses a gold/amber color vs. free pages

**Acceptance Criteria:**
- [ ] Premium pages show lock icon on the card thumbnail
- [ ] Clicking `Copy Prompt` on a Premium page shows upgrade prompt
- [ ] Free pages copy to clipboard without friction

---

### 2.7 Navigation & Header

**Requirements:**
- Sticky top navigation bar
- Logo / site name on the left (your personal brand)
- Optional nav links: `Browse`, `Submit`, `About`
- Optional: "Submit your page" CTA for community contributions (Phase 2)
- Dark theme consistent with gallery aesthetic

---

### 2.8 SEO & Metadata

**Requirements:**
- Each page entry generates proper `<meta>` tags (title, description, OG image)
- Homepage has a clear `<h1>` and meta description
- Sitemap auto-generated
- Page URLs are human-readable slugs: `yoursite.com/?page=liquid-glass-agency`

---

## 3. Technical Specifications

### 3.1 Recommended Tech Stack

| Layer | Recommended | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSG for performance, easy deploy on Vercel |
| Styling | **Tailwind CSS** | Fast utility-first, dark mode support |
| Animations | **Framer Motion** | Smooth modal and card animations |
| Hosting | **Vercel** | Free tier, instant deploys, CDN |
| Images | **Next/Image** | Auto-optimization, lazy loading |
| CMS (Phase 2) | **Contentful / Notion API / Supabase** | Easy content management |
| Analytics | **Plausible / Umami** | Privacy-friendly, lightweight |

### 3.2 Folder Structure (Next.js)
```
/
├── public/
│   ├── thumbnails/         ← Page thumbnail images (PNG/WebP)
│   └── previews/           ← Full page HTML files or screenshots
├── src/
│   ├── app/
│   │   ├── page.tsx        ← Homepage gallery
│   │   └── layout.tsx      ← Root layout with metadata
│   ├── components/
│   │   ├── GalleryGrid.tsx
│   │   ├── PageCard.tsx
│   │   ├── PreviewModal.tsx
│   │   └── CopyButton.tsx
│   └── data/
│       └── pages.json      ← All page entries
```

### 3.3 Performance Targets
- **LCP:** < 2.5s on 3G
- **CLS:** < 0.1
- **FID:** < 100ms
- Thumbnails served as WebP, max 400KB each
- Modal iframe loads lazily (only on open)

---

## 4. Design Specifications

### 4.1 Visual Style
- **Theme:** Dark (background `#0d0d0d` or `#111111`)
- **Accent:** Cyan, electric blue, or amber (pick one, stay consistent)
- **Font:** A distinctive display font for headings (e.g., Playfair Display, Syne, or Cabinet Grotesk) + clean sans-serif for UI
- **Cards:** Rounded corners (12–16px), subtle dark border, hover glow effect
- **Badges:** Pill-shaped with semi-transparent background

### 4.2 Card Anatomy
```
┌──────────────────────────────┐
│                              │
│        [Thumbnail]           │
│                              │
│                              │
├──────────────────────────────┤
│ Page Title          [Badge]  │
│ Category Tag                 │
└──────────────────────────────┘
```

### 4.3 Modal Anatomy
```
┌──────────────────────────────────┐
│ Page Title  Category  [Copy Prompt] [✕] │
├──────────────────────────────────┤
│                                  │
│         [Scrollable Preview]     │
│         (iframe or tall image)   │
│                                  │
└──────────────────────────────────┘
```

---

## 5. Milestones & Phased Rollout

### Phase 1 — MVP (Week 1–2)
- [ ] Static gallery grid with 10–15 pages
- [ ] Click-to-preview modal
- [ ] Copy Prompt button
- [ ] Mobile responsive layout
- [ ] Deploy to Vercel

### Phase 2 — Growth (Week 3–6)
- [ ] Category filter chips
- [ ] Search bar
- [ ] SEO optimization + sitemap
- [ ] Analytics integration
- [ ] Premium badge + gated prompts

### Phase 3 — Community (Month 2+)
- [ ] Submit-a-page form
- [ ] Admin dashboard for content management
- [ ] Email capture / newsletter for new page drops
- [ ] Social share buttons per page

---

## 6. Success Metrics

| Metric | Target (Month 1) |
|---|---|
| Pages in gallery | 20+ |
| Monthly visitors | 500+ |
| Prompt copies / month | 200+ |
| Avg. session duration | > 2 minutes |
| Mobile traffic share | > 40% |

---

## 7. Open Questions

1. **Preview method:** Should the modal use a live `<iframe>` (full interactivity) or a tall static screenshot image (simpler, faster)? Recommendation: screenshots for MVP, iframes for Phase 2.
2. **Monetization model:** One-time Gumroad purchase for Premium access vs. free-forever?
3. **Domain:** Personal brand name or a product name like `promptpages.dev`?
4. **Submission flow:** Will you accept community submissions from the start, or keep it personal?
5. **Prompt format:** Should prompts include tool-specific prefixes (e.g., "For v0:", "For Bolt:") or be tool-agnostic?

---

*End of PRD*
