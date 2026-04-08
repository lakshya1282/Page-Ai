# 🚀 One-Shot AI Prompt: Nexora Premium Hero Section

Copy and paste the entire block below into any AI coding assistant to recreate this high-end website hero section.

---

## **Prompt Start**

"I want you to build a premium, visually stunning hero section for a tech startup named **Nexora**. The design must be clean, sophisticated, and professional, utilizing glassmorphism and high-performance video backgrounds.

### **🚨 Pre-Coding Instructional Step**
Before you begin writing any code, you **MUST** pause and ask the user to download the high-quality video asset required for this design from the following link:
[Download Background Video](https://drive.google.com/file/d/1kiCzzwOQ-6mej1iP7mCgyBePKcK9sb-M/view?usp=sharing)

### **🏗️ Core Project Requirements**
1.  **Frameworks**: Use valid HTML5 and Vanilla CSS (no Tailwind unless specifically requested).
2.  **Typography**: 
    - Import 'Inter' from Google Fonts for general UI.
    - Import 'Playfair Display' (Italic) for the "The Future" highlight text.
3.  **Color Palette**: 
    - Highlight Color: `#f5e74e` (Vibrant Yellow).
    - Text: **Solid Black** for the main heading and subheading to ensure readability on the light video background.
    - Glass Elements: Semi-transparent white with `backdrop-filter: blur(15px)`.

### **⚙️ Section-Specific Details**
- **Navigation Navbar**: 
    - Fixed at the top (centered). 
    - Glassmorphic pill-shape with a subtle border. 
    - Logo text: 'Nexora®'. 
    - Include links: Solutions, Technology, Insight, Support, About, Contact. 
    - Yellow "Get Started" button that transitions smoothly.
- **Hero Content**:
    - **Vertical Positioning**: The entire content block must be shifted significantly **upwards** (use `transform: translateY(-450px)`) to ensure the center-bottom of the video remains visible.
    - **Innovation Badge**: A small, centered glass pill with a sparkle icon (✦) and black text.
    - **Main Heading**: "The Smartest Way To Navigate <span class='highlight'>The Future</span>" (High-contrast black text).
    - **Subheading**: "Harness intelligent systems to optimize, predict, and scale—seamlessly." (High-contrast black text).
- **Search Interaction Area**:
    - A pill-shaped **Solid White** container with a subtle shadow.
    - Left-aligned search icon + "Enter a use case..." input field.
    - Right-aligned yellow "Explore Solutions" button.

### **🔧 Code Implementation Reference**
Ensure the video spans the full viewport:
```css
.video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
}
#bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### **🏁 Final Post-Coding Step**
After providing the code, remind the user to rename the downloaded video file to `Human_still_in_202604081909.mp4` and place it in the project root folder."

## **Prompt End**
