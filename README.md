# Golden Ticket Chocolates Website

Premium organic, vegan, non-GMO dark chocolate with a mission to give back. A registered 501(c)(3) non-profit organization.

## Overview

Golden Ticket Chocolates sells premium 75% dark chocolate to fund restaurant gift cards for homeless, impoverished, and less fortunate individuals in our community.

## Site Structure

```
golden-ticket-chocolates/
├── index.html          # Homepage - Hero, mission, how it works, products preview
├── about.html          # About page - Founder story, values, 501(c)(3) info
├── products.html       # Products - Current products, coming soon, impact model
├── impact.html         # Impact - Distribution process, community stories
├── contact.html        # Contact - Form, FAQ, sales locations
├── css/
│   ├── style.less      # LESS source with em/vw scaling system
│   └── style.css       # Compiled CSS
├── js/
│   └── script.js       # Mobile menu & form validation
├── images/
│   ├── logo/           # Logo files (golden-ticket-logo.png)
│   ├── products/       # Product images
│   ├── founder/        # Founder photo
│   └── hero/           # Hero background images
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Responsive Scaling System

This site uses an em/vw-based responsive scaling system:

- **Mobile (320px)**: 15px base font size
- **Desktop (1024px)**: 20px base font size
- **Large screens (2000px+)**: 1vw base font size (continues scaling)

All measurements use `em` calculations based on the base font size, providing fluid responsive scaling without traditional breakpoints.

### CSS Formula

```css
html {
  font-size: min(max(15px, 1.95vw), max(20px, 1vw));
}
```

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **LESS/CSS**: Preprocessor for maintainable styles
- **Vanilla JavaScript**: Mobile menu toggle and form validation
- **Google Fonts**: Playfair Display (headings) + Lato (body)
- **Netlify Forms**: Contact form handling

## Brand Colors

### Primary Burgundy
- Primary: `#660033`
- Lighter: `#800040`
- Darker: `#4D0026`

### Gold
- Primary: `#FFD700`
- Lighter: `#FFFF00`
- Darker: `#B8860B`
- Accent: `#DAA520`

### Purple Accents
- `#4A004A`, `#8A2BE2`, `#C77DFF`, `#6A5ACD`, `#FF69B4`

## Local Development

### Prerequisites

- Node.js (for LESS compilation)
- Web browser

### Setup

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd golden-ticket-chocolates
   ```

2. Add your logo image:
   - Place your logo file at `images/logo/golden-ticket-logo.png`

3. (Optional) If you need to modify LESS and recompile CSS:
   ```bash
   npm install -g less
   lessc css/style.less css/style.css
   ```

4. Open `index.html` in a web browser to preview.

### Adding Images

Replace placeholder images with actual files:

1. **Logo**: `images/logo/golden-ticket-logo.png`
2. **Products**: Add product photos to `images/products/`
3. **Founder**: Add founder photo to `images/founder/`
4. **Hero**: Add hero backgrounds to `images/hero/`

Update image `src` attributes in HTML files as needed.

## Deployment to Netlify

### Option 1: Drag and Drop (Easiest)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up or log in
3. On your Sites dashboard, drag the entire `golden-ticket-chocolates` folder to the drop zone
4. Wait for deployment (usually under a minute)
5. Your site will be live at a `.netlify.app` URL

### Option 2: Git Repository

1. Push this project to GitHub, GitLab, or Bitbucket
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to your Git provider and select the repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` or `/`
6. Click "Deploy site"

### Option 3: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   cd golden-ticket-chocolates
   netlify deploy --prod
   ```

## Netlify Forms Setup

The contact form is pre-configured for Netlify Forms:

1. The form has the `netlify` attribute
2. Hidden `form-name` input is included
3. Form submissions will appear in Netlify dashboard under "Forms"

To receive email notifications:
1. Go to Site settings > Forms > Form notifications
2. Add email notification for the "contact" form

## Custom Domain (Optional)

1. In Netlify, go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Netlify provides free SSL certificates automatically

## Updating the Site

### Content Changes

Edit the HTML files directly:
- `index.html` - Homepage content
- `about.html` - About page content
- `products.html` - Product listings
- `impact.html` - Impact stories
- `contact.html` - Contact info and FAQ

### Style Changes

1. Edit `css/style.less`
2. Recompile to CSS:
   ```bash
   lessc css/style.less css/style.css
   ```
3. Commit and push changes (if using Git deployment)

## Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy (h1-h4)
- Alt text on all images
- Form labels properly associated
- Color contrast meets WCAG AA standards
- Keyboard navigable
- Focus states on interactive elements
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Contact

- **Email**: rhett.j.diez@proton.me
- **Phone**: 813-475-8877

## License

Copyright 2024 Golden Ticket Chocolates. All rights reserved.
