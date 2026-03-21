# Taste & Toniq — Restaurant Website

A premium, conversion-focused website for **Taste & Toniq**, a multi-cuisine fine-dining restaurant in Lucknow.

## Features

- **Hero** — Full-width hero with headline, CTAs, and trust badge
- **About** — Story-driven section with interior gallery
- **Menu** — Signature dishes grid (Handi Paneer, Chicken Tikka Masala, Hakka Noodles, Pizza, Veggie Burger, Chocolate Shake, Cold Coffee)
- **Why Choose Us** — Icon-based features (Multi-Cuisine, Affordable, Ambiance, Seating, Late Hours, Friendly Service)
- **Reviews** — Customer testimonials with 4.4 rating
- **Gallery** — Masonry-style image grid with hover zoom
- **Location & Contact** — Address, phone, hours, map embed, Get Directions / Call Now
- **Final CTA** — Reserve Now & Order Online (WhatsApp)
- **Footer** — Logo, quick links, contact, social

## Design

- **Colors:** Deep Charcoal (#1E1E1E), Warm Beige (#F5E9DA), Gold (#C9A45C), Olive Green (#6B8E23)
- **Fonts:** Cormorant Garamond (headings), Poppins (body)
- **Responsive:** Mobile-first, sticky nav, smooth scrolling

## Run Locally

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/**

> **Note:** If `npm run dev` fails due to the `&` in the folder name, run:  
> `node ./node_modules/vite/bin/vite.js`

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

## Update Instagram Link

Replace the placeholder in `src/components/Footer.jsx`:

```jsx
<a href="https://instagram.com/your-handle" ...>
```
