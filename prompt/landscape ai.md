# One-Shot Prompt: Scenery Wellness Website

## Objective
Build a premium, high-end, and visually stunning landing page for a wellness brand called "Scenery". The design should feel calm, professional, and modern, utilizing a "Glassmorphic" aesthetic over a high-quality nature landscape background.

## Visual Aesthetic & Design Tokens
- **Themes**: Minimalist, Serene, High-End, Nature-Inspired.
- **Color Palette**:
  - Primary Green: `#1a3c34` (Deep forest green for text and primary elements)
  - Accent Green: `#2d5a4c` (Slightly lighter green for hovers/accents)
  - Text White: `#ffffff`
  - Glass Background: `rgba(255, 255, 255, 0.1)` (with 20px blur)
  - Glass Border: `rgba(255, 255, 255, 0.2)`
- **Typography**:
  - **Inter**: Sans-serif for body, navigation, and badges. (Weights: 400, 500, 600)
  - **Playfair Display**: Serif for the main hero heading to give a premium feel. (Weights: 400, 700)
- **Animations**: Subtle fade-in and slide-up animations for all elements on load.

## Structural Requirements

### 1. Hero Section
- **Background**: Full-screen (`100vh`), non-repeating, cover-sized image of a serene nature landscape.
- **Layout**: Centered content transitioning from a high-placed navbar to a centered hero title and a footer area with logos.

### 2. Navigation Bar
- **Style**: Floating glassmorphic pill shape.
- **Position**: Centered horizontally at the top with a max-width of `850px`.
- **Components**:
  - **Left**: Logo (a leaf icon in a rounded square box) followed by navigation links (Features with a chevron, Pricing, Contact).
  - **Right**: "About Us" link with a home icon and a "Sign In" primary button.

### 3. Main Content
- **New Feature Badge**: Small glassmorphic badge with a pulsing dot saying "New Advance AI Support".
- **Hero Title**: Large typography using Playfair Display. Text: "Find Your Inner [Peace], One Breath at a Time!". The word "Peace" should be italicized.
- **CTA Button**: Large primary green button with a leaf icon in a circle, labeled "Download App".

### 4. Footer Logo Cloud
- **Position**: Floating at the bottom of the hero section.
- **Content**: A caption "Reconnect with nature and find inner calm" above a row of brand logos (Slack, Framer, Figma, Zapier, Global, etc.).
- **Style**: Subtle, semi-transparent icons and text that glow slightly on hover.

## Technical Implementation (Reference Code)

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scenery - Find Your Inner Peace</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <div class="hero">
        <header class="navbar-wrapper">
            <nav class="navbar">
                <div class="nav-left">
                    <div class="logo-box"><i data-lucide="leaf" class="logo-icon"></i></div>
                    <ul class="nav-links">
                        <li><a href="#" class="nav-link">Features <i data-lucide="chevron-down" class="icon-xs"></i></a></li>
                        <li><a href="#" class="nav-link">Pricing</a></li>
                        <li><a href="#" class="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div class="nav-right">
                    <a href="#" class="nav-link-secondary"><i data-lucide="home" class="icon-sm"></i> About Us</a>
                    <button class="btn-primary">Sign In</button>
                </div>
            </nav>
        </header>

        <main class="hero-content">
            <div class="badge fade-in"><span class="dot"></span> New Advance AI Support</div>
            <h1 class="hero-title fade-in-up">Find Your Inner<br><span class="italic">Peace</span>, One Breath<br>at a Time!</h1>
            <button class="btn-download fade-in-up-delay">
                <div class="icon-circle"><i data-lucide="leaf" class="icon-sm"></i></div>
                Download App
            </button>
        </main>

        <footer class="footer-area fade-in">
            <p class="footer-caption">Reconnect with nature and find inner calm.</p>
            <div class="logo-cloud">
                <div class="logo-item"><i data-lucide="slack"></i> logoipsum</div>
                <div class="logo-item"><i data-lucide="framer"></i> Framer</div>
                <div class="logo-item"><i data-lucide="figma"></i> Figma</div>
                <div class="logo-item"><i data-lucide="zap"></i> Zapier</div>
                <div class="logo-item"><i data-lucide="globe"></i> Global</div>
                <div class="logo-item"><i data-lucide="command"></i> Logo</div>
            </div>
        </footer>
    </div>
    <script>lucide.createIcons();</script>
</body>
</html>
```

### `style.css`
```css
:root {
    --primary-green: #1a3c34;
    --accent-green: #2d5a4c;
    --text-white: #ffffff;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-white);
    background: #000;
    overflow-x: hidden;
}

.hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('bg.jpg') no-repeat center center/cover;
    padding: 2rem;
}

.navbar-wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 850px;
}

.navbar {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    padding: 0.6rem 0.8rem 0.6rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.nav-left { display: flex; align-items: center; gap: 2.5rem; }
.logo-box { background: var(--primary-green); width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.logo-icon { color: #fff; width: 24px; height: 24px; }
.nav-links { list-style: none; display: flex; gap: 1.5rem; }
.nav-link { text-decoration: none; color: var(--primary-green); font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 0.4rem; transition: var(--transition); }
.nav-link:hover { color: var(--accent-green); }
.nav-right { display: flex; align-items: center; gap: 1.5rem; }
.nav-link-secondary { text-decoration: none; color: var(--primary-green); font-size: 0.95rem; font-weight: 500; display: flex; align-items: center; gap: 0.5rem; transition: var(--transition); }
.nav-link-secondary:hover { color: var(--accent-green); }
.btn-primary { background: var(--primary-green); color: #fff; border: none; padding: 0.7rem 1.8rem; border-radius: 100px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: var(--transition); }
.btn-primary:hover { background: var(--accent-green); transform: translateY(-2px); }

.hero-content {
    position: relative;
    z-index: 5;
    text-align: center;
    max-width: 900px;
    margin-top: -2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
}

.badge { background: var(--glass-bg); backdrop-filter: blur(10px); border: 1px solid var(--glass-border); padding: 0.5rem 1rem; border-radius: 100px; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; gap: 0.6rem; }
.dot { width: 6px; height: 6px; background: #fff; border-radius: 50%; }

.hero-title { font-family: 'Playfair Display', serif; font-size: 5rem; line-height: 1.1; font-weight: 400; color: var(--primary-green); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }
.hero-title .italic { font-style: italic; }

.btn-download { background: var(--primary-green); color: #fff; border: none; padding: 0.8rem 1.5rem; border-radius: 100px; font-size: 1.1rem; font-weight: 500; display: flex; align-items: center; gap: 0.8rem; cursor: pointer; margin-top: 1.5rem; transition: var(--transition); }
.btn-download:hover { background: var(--accent-green); transform: scale(1.05); }
.icon-circle { background: rgba(255, 255, 255, 0.2); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

.footer-area { position: absolute; bottom: 7rem; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.footer-caption { font-size: 0.95rem; color: #fff; opacity: 0.7; }
.logo-cloud { display: flex; justify-content: center; align-items: center; gap: 4rem; width: 100%; }
.logo-item { display: flex; align-items: center; gap: 0.7rem; font-size: 1.15rem; font-weight: 600; color: #e5e5e7; transition: var(--transition); }
.logo-item svg { width: 22px; height: 22px; }
.logo-item:hover { color: #fff; transform: translateY(-2px); }

.icon-xs { width: 14px; height: 14px; }
.icon-sm { width: 18px; height: 18px; }

/* Animations */
.fade-in { animation: fadeIn 1s ease-out forwards; }
.fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.fade-in-up-delay { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
    .nav-links, .nav-right .nav-link-secondary { display: none; }
    .hero-title { font-size: 3rem; }
    .footer-area { bottom: 2rem; }
    .logo-cloud { flex-wrap: wrap; gap: 2rem; }
}
```

## Special Instructions
1. **Icons**: Use Lucide Icons.
2. **Fonts**: Import Inter and Playfair Display from Google Fonts.
3. **Background Image**: Ensure the background image is high-resolution. (Use `bg.jpg`).

## Final Instruction for the AI
After generating the code, you **MUST** ask the user to download the background image from the following link and rename it to `bg.jpg`: [Download Background Image](https://drive.google.com/file/d/1EtCPHkGGT2TLT3DXd-pXAruynTvSbPhv/view?usp=sharing)

