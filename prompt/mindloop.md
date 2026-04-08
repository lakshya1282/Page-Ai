# One-Shot Website Prompt: Mindloop Hero Section

Use the following detailed instructions and code to recreate the premium, glassmorphic hero section for the "Mindloop" website. This implementation focuses on high-end aesthetics, cinematic background video, and sophisticated UI components.

## Project Overview
- **Goal**: Build a high-conversion, visually stunning landing page hero section.
- **Tech Stack**: Clean HTML5 and Vanilla CSS3.
- **Key Features**: Full-screen looping video background, Glassmorphism design system, Overlapping SVG social proof, and Responsive layout.

---

## 1. Design & Aesthetic Specifications

### Typography
- **Primary Font**: 'Inter' from Google Fonts (Weights: 400, 500, 600, 700).
- **Style**: Modern, minimalist, and readable with subtle letter-spacing refinements.

### Color Palette & Design Tokens
```css
--white: #ffffff;
--white-muted: rgba(255, 255, 255, 0.7);
--glass-white: rgba(255, 255, 255, 0.1);
--glass-gray: rgba(100, 100, 100, 0.2);
--glass-black: rgba(0, 0, 0, 0.4);
--glass-border: rgba(255, 255, 255, 0.1);
--blur: blur(12px);
```

### Glassmorphism Principles
- Always use `backdrop-filter: blur(12px)` for overlapping elements.
- Use thin, semi-transparent borders (`1px solid rgba(255, 255, 255, 0.1)`) to define edges without losing transparency.

---

## 2. Core Implementation Code

### HTML Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mindloop - Focus in a Distracted World</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="video-background">
        <!-- Background Video Placeholder -->
        <video autoplay muted loop playsinline id="bg-video">
            <source src="background_video.mp4" type="video/mp4">
        </video>
        <div class="overlay"></div>
    </div>

    <header>
        <nav>
            <div class="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
                <span>Mindloop</span>
            </div>
            <ul class="nav-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div class="nav-actions">
                <a href="#" class="btn-text">Log In</a>
                <a href="#" class="btn-glass">Sign In</a>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="subscriber-info">
                <div class="avatar-stack">
                    <svg class="avatar icon-1" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="11" fill="#4F46E5"/>
                        <circle cx="12" cy="10" r="4" fill="white"/>
                        <path d="M12 14c-4 0-6 2-6 2v1h12v-1s-2-2-6-2z" fill="white"/>
                    </svg>
                    <svg class="avatar icon-2" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="11" fill="#10B981"/>
                        <circle cx="12" cy="10" r="4" fill="white"/>
                        <path d="M12 14c-4 0-6 2-6 2v1h12v-1s-2-2-6-2z" fill="white"/>
                    </svg>
                    <svg class="avatar icon-3" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="11" fill="#F59E0B"/>
                        <circle cx="12" cy="10" r="4" fill="white"/>
                        <path d="M12 14c-4 0-6 2-6 2v1h12v-1s-2-2-6-2z" fill="white"/>
                    </svg>
                </div>
                <span class="subscriber-text">7,000+ people already subscribed</span>
            </div>

            <h1 class="hero-title">Focus in a Distracted World</h1>
            <p class="hero-description">
                Tools for deep work and clarity - say goodbye to constant pings<br>
                and endless tabs. Say hello to intentional productivity.
            </p>

            <form class="waitlist-form">
                <div class="input-group">
                    <input type="email" placeholder="Enter your email..." required>
                    <button type="submit" class="btn-join">Join Waitlist</button>
                </div>
            </form>
        </section>
    </main>
</body>
</html>
```

### CSS Styling (`style.css`)

```css
:root {
    --white: #ffffff;
    --white-muted: rgba(255, 255, 255, 0.7);
    --glass-white: rgba(255, 255, 255, 0.1);
    --glass-gray: rgba(100, 100, 100, 0.2);
    --glass-black: rgba(0, 0, 0, 0.4);
    --glass-border: rgba(255, 255, 255, 0.1);
    --blur: blur(12px);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
    background-color: #000;
    color: var(--white);
    overflow-x: hidden;
    min-height: 100vh;
}

/* Video Background */
.video-background {
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

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
}

/* Header & Nav */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 4rem;
    z-index: 100;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--white-muted);
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--white);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.btn-text {
    text-decoration: none;
    color: var(--white-muted);
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition);
}

.btn-text:hover {
    color: var(--white);
}

.btn-glass {
    padding: 0.6rem 1.5rem;
    background: var(--glass-black);
    backdrop-filter: var(--blur);
    -webkit-backdrop-filter: var(--blur);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    color: var(--white);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition);
}

.btn-glass:hover {
    background: rgba(0, 0, 0, 0.6);
    transform: translateY(-2px);
}

/* Hero Section Positioning */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 22vh 1.5rem 0;
}

.subscriber-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2rem;
    animation: fadeIn 1s ease-out;
}

.avatar-stack {
    display: flex;
    align-items: center;
}

.avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 0, 0, 0.5);
    margin-left: -10px;
}

.avatar:first-child {
    margin-left: 0;
}

.subscriber-text {
    font-size: 0.85rem;
    color: var(--white-muted);
    font-weight: 400;
}

.hero-title {
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--white);
    animation: fadeInDown 1s ease-out;
}

.hero-description {
    font-size: 1.05rem;
    color: var(--white-muted);
    max-width: 550px;
    line-height: 1.6;
    margin-bottom: 3rem;
    animation: fadeIn 1.2s ease-out;
}

/* Waitlist Form - Gray/Black Glassmorphism */
.waitlist-form {
    width: 100%;
    max-width: 500px;
    animation: fadeInUp 1s ease-out;
}

.input-group {
    display: flex;
    padding: 0.5rem;
    background: var(--glass-gray);
    backdrop-filter: var(--blur);
    -webkit-backdrop-filter: var(--blur);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    transition: var(--transition);
}

.input-group:focus-within {
    background: rgba(120, 120, 120, 0.3);
}

.input-group input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--white);
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.btn-join {
    background: var(--glass-black);
    backdrop-filter: var(--blur);
    -webkit-backdrop-filter: var(--blur);
    border: 1px solid var(--glass-border);
    color: var(--white);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.btn-join:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.02);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    header { padding: 1.5rem 2rem; }
    .nav-links { display: none; }
    .hero-title { font-size: 2.8rem; }
    .hero { padding-top: 15vh; }
}

/* Animation Keyframes */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
```

---

## 3. Mandatory Final Step for the User

> [!IMPORTANT]
> To ensure the website looks as intended with the cinematic background, you **MUST** download the background video file.
> 
> 1. Click this link: [Download Background Video](https://drive.google.com/file/d/1uhhCYs2piHj90K00fVhe9JfYnPnAaEKe/view?usp=sharing)
> 2. Save the file as `Boy_writing,_flowers_202604082136.mp4` inside your project's root folder.
> 3. Ensure the `source` tag in `index.html` matches this filename exactly.

---

## 4. One-Shot Prompt for Coding Agents

**Copy/Paste the following into your AI assistant:**

"Act as a Senior Frontend Developer. Build a high-end, premium landing page hero section named 'Mindloop'. Use Vanilla HTML and CSS. The design should be cinematic and minimal. 

Requirements:
1. **Background**: Use a full-screen, muted, looping video (`Boy_writing,_flowers_202604082136.mp4`). Add a radial gradient overlay to the video for text readability.
2. **Typography**: Use 'Inter' from Google Fonts. The headline should be medium-bold (`600`) and sized around `3.4rem`. 
3. **Glassmorphism**: 
   - A navigation bar with a black glassmorphism 'Sign In' button.
   - An eyebrow section with 3 overlapping circle icons and proof text '7,000+ people already subscribed'.
   - An email input bar with a gray glassmorphic background and a black glassmorphic 'Join Waitlist' button.
4. **Layout**: Critical: The hero content (headline, eyebrow, and description) must be shifted upwards towards the top third of the screen, not perfectly centered.
5. **Responsiveness**: Ensure the design is fluid and looks great on mobile by hiding nav links and scaling text.
6. **Interaction**: Include subtle hover effects on all glassmorphic buttons and entrance animations for all hero elements.

---

### CRITICAL FINAL INSTRUCTION FOR AI AGENT:
**After you have provided the complete HTML and CSS code, you must ask the user to download the background video from the following link to complete the project:**
"https://drive.google.com/file/d/1uhhCYs2piHj90K00fVhe9JfYnPnAaEKe/view?usp=sharing"

Instruct the user to save it as `Boy_writing,_flowers_202604082136.mp4` in the root directory.
