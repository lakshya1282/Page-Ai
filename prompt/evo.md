# One-Shot Prompt: Premium Glassmorphic Hero Section with Video Background

This document contains a comprehensive, production-ready instruction set and complete code to recreate the **.eva** hero section. This prompt is designed to be used with any high-end AI coding agent to achieve a "one-shot" pixel-perfect result.

---

## 🛑 MANDATORY PRE-CODING INSTRUCTION (AI Agent Only)

**IMPORTANT: Before writing any code, you MUST ask the user to download the background video asset and place it in the project root folder.**

> "Please download the background video from the link below and save it as `Mountain_image_looping_202604091317.mp4` in your root folder:
> [Download Video Asset](https://drive.google.com/file/d/1IUseCBprg6K0R91KUICz0dmeYRpdqjgJ/view?usp=sharing)"

---

## 🎨 Design Philosophy & Goals

- **Aesthetic**: Minimalist, cinematic, and premium. The design should feel like a $10,000 corporate website.
- **Glassmorphism**: Use `backdrop-filter: blur()` on all UI elements (buttons, nav) to create a sophisticated layered effect.
- **Typography**: 
    - Use **Outfit** for clean, modern readability.
    - Use **Playfair Display (Italic)** for the emphasis word "peak".
    - Hierarchy: Subtle, smaller headline and extremely low-font-size subtext to emphasize the visual space and video background.
- **Layout**: The content occupies the **top 40%** of the viewport to keep the mountain peek in the video clearly visible.
- **Animations**: Subtle `fade-up` entrance animations for a smooth, high-end feel.

---

## 📂 File Structure

- `index.html`
- `style.css`
- `Mountain_image_looping_202604091317.mp4` (External asset)

---

## 📄 Complete Source Code

### 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>.eva - Your digital partner</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital@1&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="video-container">
        <video autoplay muted loop playsinline id="bg-video">
            <source src="Mountain_image_looping_202604091317.mp4" type="video/mp4">
        </video>
    </div>

    <header>
        <nav class="navbar">
            <div class="logo">.eva</div>
            <ul class="nav-links">
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#use-cases">Use cases</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#invest">Invest</a></li>
            </ul>
            <div class="nav-buttons">
                <a href="#" class="btn btn-login">Login</a>
                <a href="#" class="btn btn-signup">Join Beta</a>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero-section">
            <div class="hero-content">
                <h1 class="fade-up">
                    Your digital partner in everything,<br>
                    helping you to achieve <span class="accent-text">peak</span> productivity
                </h1>
                <p class="subtext fade-up-delay-1">
                    .eva is an Operating System to assist you at all times in anything you do digitally.
                </p>
                <div class="cta-container fade-up-delay-2">
                    <a href="#" class="btn btn-cta">Join Beta</a>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
```

### 2. style.css

```css
:root {
    --white: #ffffff;
    --black: #000000;
    --glass-white: rgba(255, 255, 255, 0.1);
    --glass-black: rgba(0, 0, 0, 0.4);
    --border-glass: rgba(255, 255, 255, 0.1);
    --font-main: 'Outfit', 'Inter', sans-serif;
    --font-accent: 'Playfair Display', serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: var(--font-main);
    color: var(--white);
    background-color: var(--black);
    overflow-x: hidden;
}

/* Video Background */
.video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

#bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
}

.logo {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: var(--white);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 400;
    opacity: 0.9;
    transition: opacity 0.3s ease;
}

.nav-links a:hover {
    opacity: 1;
}

.nav-buttons {
    display: flex;
    gap: 0.8rem;
}

.btn {
    padding: 0.5rem 1.4rem;
    border-radius: 9999px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
}

.btn-login {
    background: var(--white);
    color: var(--black);
}

.btn-signup {
    background: rgba(0, 0, 0, 0.8);
    color: var(--white);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--border-glass);
}

.btn:hover {
    transform: translateY(-1px);
    opacity: 0.9;
}

/* Hero Section */
.hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 15vh;
    text-align: center;
}

.hero-content {
    max-width: 1000px;
    padding: 0 2rem;
}

h1 {
    font-size: 2.8rem;
    line-height: 1.25;
    font-weight: 400;
    margin-bottom: 1.2rem;
    letter-spacing: -0.8px;
}

.accent-text {
    font-family: var(--font-accent);
    font-style: italic;
    font-weight: 400;
}

.subtext {
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.6;
    margin-bottom: 2rem;
    letter-spacing: 0.2px;
}

.btn-cta {
    background: rgba(0, 0, 0, 0.8);
    color: var(--white);
    font-size: 0.85rem;
    padding: 0.7rem 2rem;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid var(--border-glass);
}

/* Animations */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-up {
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.fade-up-delay-1 {
    opacity: 0;
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
}

.fade-up-delay-2 {
    opacity: 0;
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s forwards;
}

/* Responsive */
@media (max-width: 1024px) {
    h1 { font-size: 2.2rem; }
    .navbar { padding: 1.5rem 2rem; }
    .nav-links { display: none; }
}

@media (max-width: 768px) {
    h1 { font-size: 1.8rem; }
    .navbar { padding: 1rem; }
}
```

---

## 🚀 Key Implementation Checklist (AI Verification)

1. **Video Integration**: Ensure the video covers the full screen without scrollbars.
2. **Glass Buttons**: The "Join Beta" and "Login" buttons MUST have `backdrop-filter` for the glass effect.
3. **Typography Check**: Verify the headline fits in exactly 2 lines on desktop. If it overflows, reduce `h1` font size.
4. **Hero Positioning**: The entire content block should start at `15vh` from the top to emphasize the "upper part" occupy requirement.
5. **No Overlay**: Ensure the video container has NO dark overlay or opacity filters.
