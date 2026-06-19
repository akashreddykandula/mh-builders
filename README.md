# M.H Builders & Developers — Website

A premium, fully responsive construction company website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Full-screen hero** with animated counters and background imagery
- **Sticky navbar** that shrinks on scroll with mobile hamburger menu
- **About section** with floating stat card and company highlights
- **8-service grid** with glassmorphism cards and hover animations
- **Why Choose Us** — animated timeline with dual-column layout
- **Project portfolio** with category filtering, modal popup, and masonry grid
- **6-step process timeline** with icon-driven cards
- **Auto-advancing testimonials slider** with dot navigation
- **Trust badges** with star ratings
- **FAQ accordion** with smooth open/close animations
- **Contact section** with WhatsApp-integrated form, phone, map embed
- **Floating WhatsApp button** with animated tooltip
- **Loading screen** with animated logo
- **Scroll-to-top button**
- **SEO meta tags** pre-configured

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Navy | `#0F172A` |
| Gold | `#D4A017` |
| Light Gold | `#F0BF2A` |
| Dark Gold | `#B8860B` |
| White | `#FFFFFF` |
| Light Gray | `#F8FAFC` |

**Fonts:** Playfair Display (headings) + Inter (body)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### Install & Run

```bash
# Navigate to project
cd mh-builders

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Output in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
mh-builders/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with mobile menu
│   │   ├── Footer.jsx          # Footer with links and socials
│   │   └── WhatsAppFloat.jsx   # Floating WhatsApp CTA
│   ├── sections/
│   │   ├── Hero.jsx            # Full-screen hero
│   │   ├── About.jsx           # Company about + stats
│   │   ├── Services.jsx        # 8-card service grid
│   │   ├── WhyChooseUs.jsx     # Reasons timeline
│   │   ├── Projects.jsx        # Portfolio with filter + modal
│   │   ├── Process.jsx         # 6-step process
│   │   ├── Testimonials.jsx    # Auto slider
│   │   ├── FAQ.jsx             # Accordion FAQ
│   │   └── Contact.jsx         # Form + map + contacts
│   ├── App.jsx                 # Root component + loader
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🖼️ Image Placement Guide

The website currently uses **Unsplash CDN images**. For production, replace with your own photos:

| Section | File | Recommended Image |
|---|---|---|
| Hero background | `sections/Hero.jsx` | Aerial view of a premium villa or construction site |
| About (main) | `sections/About.jsx` | Team photo or site supervisors on-site |
| Why Choose Us | `sections/WhyChooseUs.jsx` | Close-up of quality materials or work in progress |
| Projects (all 8) | `sections/Projects.jsx` | Your actual completed project photos |

**Image requirements:**
- Hero: 1920×1080px minimum, JPEG, <500KB
- Project gallery: 800×600px, JPEG, <200KB each
- Use Squoosh (https://squoosh.app) to compress before upload

**To replace an image:**
```jsx
// Find this pattern in the .jsx file:
src="https://images.unsplash.com/..."

// Replace with your hosted image:
src="/images/your-villa-photo.jpg"
// or Cloudinary/Firebase Storage URL
```

Place custom images in `public/images/` folder.

## ⚙️ Customization

### Update Phone Number
Search for `919985123007` across all files and replace with actual number.

### Update Address
Search for `Jyothi Bagh, Akbar Nagar` in `Contact.jsx` and `Footer.jsx`.

### Update Google Maps
In `Contact.jsx`, replace the iframe `src` with your actual Google Maps embed URL:
1. Go to https://maps.google.com
2. Search your location
3. Click Share → Embed a map → Copy HTML
4. Paste the `src` value into the iframe

### Add Real Testimonials
Edit the `testimonials` array in `sections/Testimonials.jsx`.

### Change Colors
Edit `tailwind.config.js` under `theme.extend.colors`.

---

## 🌐 Deployment Guide — Vercel

### Option A: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# From project root
vercel

# Follow prompts:
# - Set up project? Y
# - Project name: mh-builders
# - Framework: Vite
# - Build command: npm run build
# - Output dir: dist
```

### Option B: Deploy via GitHub + Vercel Dashboard

1. Push code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mh-builders.git
git push -u origin main
```

2. Go to https://vercel.com → New Project
3. Import your GitHub repository
4. Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

### Custom Domain on Vercel

1. In Vercel dashboard → Your project → Settings → Domains
2. Add your domain: `www.mhbuilders.in`
3. Update your DNS with the CNAME records Vercel provides
4. SSL is automatic

---

## 📱 Performance Checklist

Before going live:
- [ ] Replace Unsplash images with your compressed photos
- [ ] Verify phone number in all CTAs
- [ ] Test WhatsApp button on mobile device
- [ ] Fill real Google Maps embed
- [ ] Add Google Analytics (optional)
- [ ] Test on mobile (iPhone + Android)
- [ ] Run Lighthouse audit (target 90+ scores)

## 📞 Contact Integration Details

**WhatsApp:** All CTAs link to `wa.me/919985123007` with pre-filled message.

**Phone:** All phone CTAs use `tel:+919985123007`.

**Form submission:** On submit, the contact form opens WhatsApp with all form data pre-filled in the message, making it easy to respond from mobile.

---

Built with ❤️ for M.H Builders & Developers, Hyderabad
