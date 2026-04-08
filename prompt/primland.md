# NEXORA: Premium Luxury Hero Section Prompt

You are a senior frontend developer and UI/UX designer. Your goal is to implement a high-end, visually stunning hero section for a luxury real estate brand named **Nexora**. The design must be cinema-grade, featuring a full-screen video background, elegant typography, and smooth entrance animations.

---

## ⚡ CRITICAL PRE-CODING INSTRUCTION
**Before you write any code, you MUST ask the user to download the required video asset for the background.**
Copy and paste this message exactly:
> "To proceed with this premium design, please download the high-quality cloud video background from this link: [Download Video](https://drive.google.com/file/d/1hWdSayL0ir1UdMjD1k-226hvEXDwoET3/view?usp=sharing) and place it in the project root directory as `nexora_background.mp4`."

---

## 🎨 Design Specifications

### 1. Typography & Colors
- **Font A (Serif):** 'Playfair Display' (Google Fonts). Use for the main brand name and poetic descriptions. It should feel timeless and elegant.
- **Font B (Sans-Serif):** 'Outfit' or 'Inter' (Google Fonts). Use for functional navigation and the main punchy headers. High letter-spacing (0.15em to 0.4em) is mandatory for a luxury feel.
- **Color Palette:**
    - Primary: Pure White (#FFFFFF)
    - Background/Overlays: Deep Forest Green/Black (#051105) with 25-40% opacity radial gradients.
    - Accent: Glassmorphism effects (semi-transparent white backgrounds for buttons).

### 2. Layout Structure
- **Full-Screen Video:** The video must cover 100vh and 100vw, centered using `object-fit: cover`.
- **Radial Overlay:** A subtle radial gradient overlay from center (transparent) to edges (darker) to ensure text legibility regardless of video brightness.
- **Navbar:**
    - A 3-column grid layout.
    - Left: "NW" (or similar short identifier).
    - Center: Brand Logo ("Nexora" in Serif, "RESIDENCES" in small Sans-Serif caps below it).
    - Right: "INQUIRE" (Sans-Serif, high letter-spacing).
- **Hero Content (Center-Aligned):**
    - Subtitle: "IN THE HEART OF" (Small caps, wide spacing).
    - Main Title: "THE BLUE RIDGE MOUNTAINS" (Large, bold, broken into two lines, 0.15em letter-spacing).
    - Brief: "Journey to the ultimate adventure paradise" (Italic Serif).
    - Primary Action: A "ghost" or "filled" button labeled "EXPLORE THE MAP" with refined hover states.
- **Footer:**
    - Centered "START WITHOUT AUDIO" button with a thin underline interaction.

### 3. Animations (The "Wow" Factor)
- Implement a staggered entrance animation using CSS keyframes.
- The Navbar should slide down from the top.
- The central content should fade in and slide up slightly (`translateY(30px)` to `0`).
- Use `cubic-bezier(0.2, 0.8, 0.2, 1)` for that "smooth" premium motion.

---

## 🛠️ Implementation Guidance

### Core HTML Structure
```html
<div class="hero">
    <video autoplay muted loop playsinline class="hero-video">
        <source src="nexora_background.mp4" type="video/mp4">
    </video>
    <div class="overlay"></div>
    <nav class="navbar">...</nav>
    <main class="hero-content">...</main>
    <footer class="hero-footer">...</footer>
</div>
```

### Essential CSS Tokens
```css
:root {
    --font-heading: 'Outfit', sans-serif;
    --font-elegant: 'Playfair Display', serif;
    --transition-premium: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    letter-spacing: 0.15em;
    animation: fadeInUp 1.2s var(--transition-premium) forwards;
}

.btn-explore {
    background: rgba(255, 255, 255, 0.95);
    color: #1a1a1a;
    transition: all 0.4s ease;
}
```

---

## 🏁 Final Objective
The final output must be a single `index.html` and a `style.css` that feels "expensive." No placeholders—every pixel must be intentional. If the user hasn't provided the video yet, ensure the code is ready to receive it.
