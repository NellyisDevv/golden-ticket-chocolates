# Golden Ticket Chocolates - Project Rules & Styling Guidelines

This document contains all the styling rules and guidelines established for this project. Reference this file when starting a new context window.

---

## 1. Voice & Tone

**IMPORTANT**: Rhett is a one-man operation. All copy uses **first-person singular**:
- Use "I", "me", "my" instead of "we", "us", "our"
- "Find Me" not "Find Us"
- "Contact Me" not "Contact Us"
- "I sell", "I craft", "I accept" etc.

**Warm, Community-Focused Language**:
- Use "neighbors" instead of "those in need" or "impoverished individuals"
- Use "neighbors facing hard times" instead of clinical language
- Use "in our community" instead of "in our area"
- Keep tone personal and grassroots, not corporate

---

## 2. Chocolate Piece Styling (KEY DESIGN ELEMENT)

All containers/cards use a **3D chocolate piece** aesthetic:

### Chocolate Color Variables
```less
@chocolate-dark: #1A0D05;
@chocolate-medium: #2C1608;
@chocolate-light: #4A2814;
@chocolate-highlight: #5C3317;
```

### Chocolate Piece CSS Pattern
Apply this to all card/container components:
```less
.component {
  background: @chocolate-medium;
  border-radius: 0.3em;
  position: relative;

  // 3D raised edges
  border: 0.25em solid @chocolate-light;
  border-bottom-color: @chocolate-dark;
  border-right-color: @chocolate-dark;

  // Depth shadow
  box-shadow:
    0.2em 0.3em 0.6em rgba(0, 0, 0, 0.5),
    0.1em 0.15em 0.3em rgba(0, 0, 0, 0.4),
    inset 0.1em 0.1em 0.2em rgba(255, 255, 255, 0.08),
    inset -0.1em -0.1em 0.3em rgba(0, 0, 0, 0.25);

  // Inner chocolate square pattern
  &::before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    right: 0.5em;
    bottom: 0.5em;
    border: 0.15em solid transparent;
    border-top-color: rgba(255, 255, 255, 0.06);
    border-left-color: rgba(255, 255, 255, 0.06);
    border-bottom-color: rgba(0, 0, 0, 0.15);
    border-right-color: rgba(0, 0, 0, 0.15);
    border-radius: 0.15em;
    pointer-events: none;
  }
}

// Content inside needs z-index: 1 to appear above ::before
.component h3, .component p {
  position: relative;
  z-index: 1;
}
```

### Components Using Chocolate Styling
- `.review-card` - Customer reviews
- `.blog-card` - Blog post cards
- `.benefits-list` - Blog benefits lists
- `.step-card` - Step cards
- `.product-card` - Product listings
- `.impact-item` - Impact sections
- `.value-card` - Core values
- `.process-card` - Process cards
- `.contact-form` - Contact form
- `.sales-locations` - Sales info box
- `.faq-item` - FAQ items
- `.post-cta` - Blog CTA sections

---

## 3. Text Selection & Scrollbar

```less
// Text selection - chocolate brown
::selection {
  background-color: @chocolate-medium;
  color: @white;
}

// Scrollbar - chocolate brown
::-webkit-scrollbar { width: 0.75em; }
::-webkit-scrollbar-track { background: @burgundy-darker; }
::-webkit-scrollbar-thumb { background: @chocolate-medium; border-radius: 0.5em; }
html { scrollbar-color: @chocolate-medium @burgundy-darker; }
```

---

## 4. File Structure

```
golden-ticket-chocolates/
├── index.html
├── about.html
├── contact.html
├── privacy.html
├── terms.html
├── blog/
│   ├── index.html              # Blog listing page
│   └── [post-name].html        # Individual blog posts
├── includes/
│   ├── header.html             # Shared header (use ABSOLUTE paths)
│   └── footer.html             # Shared footer (use ABSOLUTE paths)
├── css/
│   ├── style.less              # LESS source (edit this)
│   └── style.css               # Compiled CSS
├── js/
│   └── script.js               # Loads includes, mobile nav, form validation
├── images/
│   └── logo/
├── package.json                # Only contains LESS compiler
├── netlify.toml                # Netlify deployment config
└── PROJECT_RULES.md
```

---

## 5. Build System

**No Eleventy** - Just LESS for CSS preprocessing.

### package.json
```json
{
  "scripts": {
    "build:css": "lessc css/style.less css/style.css"
  },
  "devDependencies": {
    "less": "^4.2.0"
  }
}
```

### Compile CSS
```bash
npm run build:css
```

### netlify.toml
```toml
[build]
  command = "npm run build:css"
  publish = "."
```

---

## 6. URL Paths

**IMPORTANT**: Header and footer use **absolute paths** (starting with `/`) so they work from any subdirectory (including `/blog/`):

```html
<!-- In includes/header.html and footer.html -->
<a href="/">Home</a>
<a href="/about.html">About</a>
<a href="/blog/">Blog</a>
<img src="/images/logo/logo.png">
```

Blog pages also use absolute paths:
```html
<link rel="stylesheet" href="/css/style.css">
<script src="/js/script.js"></script>
```

---

## 7. Navigation

- Logo links to home (`/`)
- Nav items: About, Products, Impact, **Blog**, Contact
- Mobile hamburger menu for screens < 768px
- Footer includes: About, Products, Our Impact, Blog, Contact, Privacy, Terms

---

## 8. Payment Methods

Display on homepage, products page, and contact page:
- "I accept Cash, Credit, and Debit."

---

## 9. Legal Pages

### Terms & Conditions includes:
- Food Safety Disclaimer: "Golden Ticket Chocolates are made in a home kitchen that is not subject to Florida food safety regulations or inspection."
- Allergen warnings
- 3-package limit per person
- All sales final

---

## 10. Blog Structure

Simple HTML/CSS blog (no static site generator):

1. `blog/index.html` - Lists all blog posts as chocolate-styled cards
2. Individual posts as separate HTML files (e.g., `blog/100-reasons-dark-chocolate.html`)
3. Use `.benefits-list` class for numbered benefit lists in posts
4. Include `.post-cta` section at end of posts

To add a new blog post:
1. Create new HTML file in `blog/` folder
2. Add card linking to it in `blog/index.html`

---

## 11. Color Palette (Updated)

### Primary Burgundy
| Variable | Hex | Usage |
|----------|-----|-------|
| @burgundy-primary | #7A0028 | Header, body background |
| @burgundy-lighter | #8B0030 | Hover states |
| @burgundy-darker | #5A001E | Darker sections |

### Chocolate Colors (for containers)
| Variable | Hex | Usage |
|----------|-----|-------|
| @chocolate-dark | #1A0D05 | Darkest chocolate, borders |
| @chocolate-medium | #2C1608 | Card backgrounds |
| @chocolate-light | #4A2814 | Highlights, borders |
| @chocolate-highlight | #5C3317 | Lighter accents |

### Accent
| Variable | Hex | Usage |
|----------|-----|-------|
| Gold | #DCAE55 | Buttons, headings, accents |

---

## 12. Quick Reminders

1. **Voice**: First-person singular (I/me), warm community tone
2. **Containers**: All cards look like chocolate pieces
3. **Paths**: Use absolute paths (`/`) in includes and blog
4. **Build**: Just `npm run build:css` - no Eleventy
5. **Blog**: Simple HTML files, no templating
6. **Selection/Scrollbar**: Chocolate brown colored
7. **Payment**: Cash, Credit, Debit accepted
8. **Legal**: Food safety disclaimer in terms.html

---

## Version History

- **Initial Build**: Em/VW scaling, 5-page structure
- **Chocolate Styling**: All containers styled as 3D chocolate pieces
- **Voice Update**: Changed from "we/us" to "I/me" (one-man operation)
- **Copy Update**: Warm, community-focused language
- **Blog Added**: Simple HTML/CSS blog structure
- **Eleventy Removed**: Simplified to LESS-only build
- **Selection/Scrollbar**: Chocolate brown styling added
