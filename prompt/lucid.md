You are an expert Frontend Developer and UI/UX Designer. I want you to build a premium, visually stunning web page hero section. Your goal is to recreate a specific layout using HTML5 and Vanilla CSS.

### Project Requirements & Aesthetics
- **Architecture**: Single-page static site (`index.html` and `style.css`). Do NOT use frameworks like React, Next.js, or Tailwind CSS.
- **Typography**: Use Google Fonts: 'Playfair Display' for the primary title, and 'Inter' for everything else.
- **Background**: Full-screen muted, looping background video positioned fixed behind the content.
- **Glassmorphism Elements**: The navigation bar and email input form must have a frosted glass effect (`backdrop-filter: blur()`, semi-transparent backgrounds, subtle borders, and soft shadows).
- **Animations**: Include subtle fade-up animations on load for all text content and the navbar.

### Content & Layout Map

1. **Top Navigation Bar (Pill-shaped, Glassmorphism)**
   - Left: An SVG logo (a simple abstract star or geometric shape).
   - Links: "Journeys", "How it Works", "Pricing", "FAQ", "Log In".

2. **Main Hero Text (Centered)**
   - "Dream deeper." (Line break)
   - "Travel farther."

3. **Waitlist Form (Pill-shaped, Glassmorphism, Below Title)**
   - An email input field `[Enter your email...]`.
   - A dark grey submit button `[Join waitlist]`.

4. **Footer Text (Bottom Center)**
   - A 3-line descriptive text: "Lucid is a guided lucid dreaming experience. Every night, step into hand-crafted dreamscapes—rich, immersive adventures that blend science, sound, and AI-generated visuals."

### Critical Code Snippets to Use

To ensure absolute accuracy in matching the premium UI/UX, you **must use** the following code snippets exactly as provided for the project structure.

#### `index.html` Baseline:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lucid - Dream Deeper</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="video-background">
        <video autoplay muted loop playsinline id="bg-video">
            <source src="Animate_reference_image_202604081549.mp4" type="video/mp4">
        </video>
        <div class="overlay"></div>
    </div>
    
    <div class="content-wrapper">
        <div class="navbar-container">
            <header class="navbar">
                <div class="logo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20"></path>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                </div>
                <nav class="nav-links">
                    <a href="#">Journeys</a>
                    <a href="#">How it Works</a>
                    <a href="#">Pricing</a>
                    <a href="#">FAQ</a>
                    <a href="#">Log In</a>
                </nav>
            </header>
        </div>

        <main class="hero-content">
            <h1 class="hero-title">Dream deeper.<br>Travel farther.</h1>
            
            <div class="waitlist-form-container">
                <form class="waitlist-form" action="#" method="get">
                    <input type="email" placeholder="Enter your email..." required class="email-input">
                    <button type="submit" class="submit-btn">Join waitlist</button>
                </form>
            </div>
            
            <div class="hero-spacer"></div>

            <p class="hero-description">
                Lucid is a guided lucid dreaming experience. Every night, step into hand-<br>
                crafted dreamscapes—rich, immersive adventures that blend<br>
                science, sound, and AI-generated visuals.
            </p>
        </main>
    </div>
</body>
</html>
```

#### `style.css` Structural & Glassmorphism Baseline:
Ensure your CSS contains these key layout and styling blocks to perfect the aesthetics:

```css
:root {
    --text-color: #ffffff;
    --text-muted: rgba(255, 255, 255, 0.7);
    --placeholder-color: rgba(255, 255, 255, 0.5);
    --glass-bg: rgba(255, 255, 255, 0.15);
    --glass-border: rgba(255, 255, 255, 0.2);
    --btn-bg: rgba(20, 20, 20, 0.85);
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-color);
    overflow: hidden; 
    background-color: #000;
}

/* Base Video and Overlay Layout */
.video-background {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1;
}
#bg-video {
    width: 100%; height: 100%; object-fit: cover; object-position: center;
}
.overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.5));
}
.content-wrapper {
    position: relative; width: 100%; height: 100vh; display: flex; flex-direction: column; z-index: 1;
}

/* Glassmorphism Navbar */
.navbar {
    display: inline-flex; align-items: center; gap: 1.5rem; padding: 0.6rem 2rem;
    background: var(--glass-bg); backdrop-filter: blur(8px);
    border: 1px solid var(--glass-border); border-radius: 50px;
}

/* Main Hero Typography & Alignments */
.hero-content {
    flex-grow: 1; display: flex; flex-direction: column; align-items: center; text-align: center;
    padding-top: 10vh;
}
.hero-title {
    font-family: 'Playfair Display', serif; font-size: 5.5rem; font-weight: 500;
    line-height: 1.05; margin-bottom: 2.5rem; text-shadow: 0 4px 30px rgba(0,0,0,0.4);
}

/* Glassmorphism Form */
.waitlist-form {
    display: flex; background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.4);
    border-radius: 50px; padding: 0.35rem 0.35rem 0.35rem 1.5rem;
}
.submit-btn {
    background: var(--btn-bg); color: white; border-radius: 40px;
    padding: 0.8rem 1.8rem; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;
}

/* Pushes the description to the bottom */
.hero-spacer { flex-grow: 1; }
.hero-description {
    font-size: 0.85rem; line-height: 1.6; color: var(--text-muted);
    max-width: 650px; padding-bottom: 3rem; text-shadow: 0 2px 4px rgba(0,0,0,0.6);
}
```

### Video Requirement
At the end of your response, once you have provided the code, you **must explicitly ask the user** the following: 

"**Next Steps:**
Please download the background video from this link: https://drive.google.com/file/d/1NJilofC_TCrL7cOSk8nLYCacnjlQXd0L/view?usp=drive_link

Once downloaded, ensure the filename is `Animate_reference_image_202604081549.mp4` and save it directly into your website's root folder next to the `index.html` file."
