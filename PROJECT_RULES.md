# Golden Ticket Chocolates - Project Rules & Styling Guidelines

This document contains all the styling rules and guidelines established for this project. Reference this file when starting a new context window.

---

## 1. Responsive Typography - Em/VW Scaling System

The site uses a fluid typography system that scales based on viewport width:

```css
html {
  font-size: min(max(14px, 1.56vw), max(16px, 0.8vw));
}
```

**Scaling Behavior:**
- **Mobile (small screens)**: 14px minimum base font size
- **Desktop (~1024px)**: 16px base font size
- **Large screens (2000px+)**: Continues scaling with 0.8vw

**All measurements use em calculations**: `desired-px / base-px = em`

---

## 2. Color Palette

### Primary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary Burgundy | `#3C0013` | Header, footer, primary brand color |
| Burgundy Lighter | `#58001D` | Hover states |
| Burgundy Darker | `#28000D` | Footer background, darker accents |

### Secondary/Accent Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Secondary Gray | `#4C4C4C` | Accent elements, icons, borders |
| Gray Lighter | `#5C5C5C` | Hover states |
| Gray Darker | `#3C3C3C` | Darker accents |

### Button Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary Button | `#C1AA76` | Main CTA buttons (warm gold/tan) |
| Primary Button Hover | `#A89460` | Hover state |

### Background Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Main Background | `#F9F6F1` | Site background (super light beige, NOT white) |
| Off-white | `#F5F2ED` | Alternate sections |
| Light Gray | `#F0EDE8` | Cards, alternate backgrounds |

**Important**: Use beige tones instead of pure white (#fff) for backgrounds.

---

## 3. Typography

### Fonts
| Usage | Font Family | Source |
|-------|-------------|--------|
| Headings | "Catseye W00 Bold" | `@import url(https://db.onlinewebfonts.com/c/df14e18d9891b8928d15a6143bbe40e3?family=Catseye+W00+Bold)` |
| Body Text | "VAG Rundschrift" | `@import url(https://db.onlinewebfonts.com/c/e37dabd00ca099f100dbfc2d18f08d72?family=VAG+Rundschrift)` |

**Note**: Google Fonts (Playfair Display, Lato) were replaced with these custom fonts.

---

## 4. Component Structure

### Header
- Stored in `includes/header.html`
- Loaded via JavaScript into `<div id="header-placeholder"></div>`
- Contains logo image (not text)
- **No "Home" link** in navigation - users click logo to go home
- Navigation items: About, Products, Impact, Contact
- Background color: Primary Burgundy (`#3C0013`)

### Footer
- Stored in `includes/footer.html`
- Loaded via JavaScript into `<div id="footer-placeholder"></div>`
- **Centered layout** with:
  1. Logo at top
  2. Stacked navigation links (About Us, Products, Our Impact, Contact)
  3. Email and phone number **inline and underlined** (so users know to click)
  4. Copyright at bottom (year 2026)
- Background color: Primary Burgundy (`#3C0013`)

### Hero Section (Homepage)
- **Separate from header** (header stays solid burgundy)
- Uses **background image with dark tint overlay**
- Overlay: `rgba(60, 0, 19, 0.75)` for text readability
- White text on top of overlay
- Two-column layout: text on left, logo on right
- Mobile: stacks vertically with logo on top

### Buttons on Dark Backgrounds
- Buttons in dark sections (CTA banner, etc.) should be **white/light colored**
- Use `.btn-outline` with white border and text
- Hover: white background with dark text

---

## 5. File Structure

```
golden-ticket-chocolates/
├── index.html
├── about.html
├── products.html
├── impact.html
├── contact.html
├── includes/
│   ├── header.html    # Shared header component
│   └── footer.html    # Shared footer component
├── css/
│   ├── style.less     # LESS source (edit this)
│   └── style.css      # Compiled CSS (auto-generated)
├── js/
│   └── script.js      # Loads includes, mobile nav, form validation
├── images/
│   └── logo/          # Logo files
└── PROJECT_RULES.md   # This file
```

### Compiling CSS
After editing `style.less`, compile with:
```bash
npx lessc css/style.less css/style.css
```

---

## 6. General Styling Rules

1. **No animations or transitions** - Keep design simple and static
2. **Mobile-first approach** - Design for mobile, scale up
3. **Em-based measurements** - Use em units calculated from base font size
4. **Minimal media queries** - Rely on em/vw scaling system for responsiveness
5. **Good color contrast** - Ensure WCAG AA compliance
6. **Semantic HTML5** - Use proper elements (header, nav, main, section, footer)

---

## 7. Contrast Rules

When placing text on colored backgrounds:

| Background | Text Color |
|------------|------------|
| Burgundy (`#3C0013`) | White/Light beige (`#F9F6F1`) |
| Dark overlay | White |
| Light beige background | Dark gray (`#333333`) or Burgundy |
| Gray accent (`#4C4C4C`) | White |

**Never**: Dark text on dark backgrounds

---

## 8. Navigation

- Logo links to home (index.html)
- Nav items: About, Products, Impact, Contact
- Mobile hamburger menu for screens < 768px
- Active page indicated with `nav-link active` class (optional, handled per-page)

---

## 9. Form Styling (Contact Page)

- Netlify form integration (`netlify` attribute)
- Required fields marked with asterisk
- Form validation via JavaScript
- Success message shown after submission

---

## 10. Quick Reference - LESS Variables

```less
// Primary Burgundy
@burgundy-primary: #3C0013;
@burgundy-lighter: #58001D;
@burgundy-darker: #28000D;

// Secondary/Accent (Gray)
@gold-primary: #4C4C4C;
@gold-lighter: #5C5C5C;
@gold-darker: #3C3C3C;

// Backgrounds
@white: #F9F6F1;
@off-white: #F5F2ED;
@light-gray: #F0EDE8;

// Text
@dark-gray: #333333;
@medium-gray: #888888;
```

---

## Version History

- **Initial Build**: Em/VW scaling system, 5-page structure
- **Color Updates**: Primary changed from #660033 → #3C0013
- **Font Updates**: Replaced Google Fonts with Catseye W00 Bold and VAG Rundschrift
- **Structure Updates**: Header and footer moved to includes folder
- **Hero Update**: Separated from header, added background image with overlay

## Updated Captured Rules (if any of these rules override the initial rules, the updated rules take precedence):
1. Em/VW Scaling System - 14px → 16px → 0.8vw formula
2. Color Palette - Primary burgundy #3C0013, secondary gray #4C4C4C, button #C1AA76, background #F9F6F1
3. Typography - Catseye W00 Bold (headings), VAG Rundschrift (body)
4. Component Structure - Header/footer in includes folder, hero with background image overlay
5. Contrast Rules - Light text on dark backgrounds, dark text on light
6. Navigation - No "Home" link, logo links home
7. Footer Layout - Centered with stacked links, inline underlined contact info
8. LESS Variables - Quick reference for all color variables
9. Compile Command - npx lessc css/style.less css/style.css