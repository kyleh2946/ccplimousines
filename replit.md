# Prestige Limousines - Central Coast

## Overview
A luxury limousine hire company website for Central Coast, NSW, Australia. Features a dark, premium theme with gold accents. Multi-page marketing site with online booking integration and contact form. Fully SEO-optimised for Central Coast NSW region. Structured for Azure Static Web Apps deployment.

## Pages
- **Home** (`/`) - Hero with CTA, services overview, fleet preview, testimonials
- **About** (`/about`) - Company story, values, stats
- **Services** (`/services`) - Wedding limos, airport transfers, corporate, cruise, events, formals
- **Fleet** (`/fleet`) - Vehicle showcase (Mercedes-Benz E250, BA Falcon Stretch, Chrysler 300C, VW Multivan)
- **Contact** (`/contact`) - Full contact form with company info
- **Book** (`/book`) - Embedded online reservation widget (mylimobiz.com)

## Tech Stack
- Frontend: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- Backend: Azure Function (Node.js) for contact form email via SMTP2GO
- Routing: wouter
- Animations: framer-motion
- Forms: react-hook-form + zod validation
- Booking: External widget from book.mylimobiz.com (dcetrans)

## Project Structure (Azure SWA Compatible)
```
frontend/           ← app_location (Vite React SPA)
  src/
    pages/          - Page components
    components/     - Shared components (navbar, footer, structured-data)
    hooks/          - Custom hooks (use-page-meta, use-toast)
    lib/            - Utility functions
    components/ui/  - shadcn/ui components
  public/           - Static assets (images, sitemap, robots.txt)
  index.html        - Entry HTML
  dist/             ← output_location (build output)
api/                ← api_location (Azure Functions)
  src/functions/
    contact.js      - POST /api/contact → sends email via SMTP2GO
  host.json         - Azure Functions host config
  package.json      - Azure Functions dependencies
shared/
  schema.ts         - Zod validation schemas (shared between frontend & API)
attached_assets/    - Source images (imported via @assets alias)
vite.config.ts      - Vite configuration (root: frontend, outDir: frontend/dist)
tailwind.config.ts  - Tailwind CSS configuration
tsconfig.json       - TypeScript configuration
```

## Azure SWA Deployment Config
```yaml
app_location: frontend
api_location: api
output_location: dist
```

## API
- `POST /api/contact` - Azure Function that validates form data and sends email via SMTP2GO

## Environment Variables (Azure)
- `MAIL_API_KEY` - SMTP2GO API key
- `MAIL_TO` - Recipient email address
- `MAIL_FROM` - Sender email address

## Theme
- Dark background (hsl(30 10% 6%)), gold primary (hsl(43 74% 49%))
- Fonts: Montserrat (body), Playfair Display (headings)
- All pages use consistent layout with Navbar + Footer

## Booking Integration
- All "Book Now" buttons across the site link to `/book`
- The booking page embeds the mylimobiz.com reservation widget via external script
- Widget script: https://book.mylimobiz.com/v4/widgets/widget-loader.js
- Widget alias: dcetrans

## SEO
- Enhanced `usePageMeta` hook sets title, description, keywords, canonical URL, OG tags, Twitter cards, and geo meta per page
- JSON-LD structured data: LocalBusiness schema on home page, Service schema on services page
- All pages have keyword-rich titles and descriptions targeting Central Coast NSW region
- Location keywords: Central Coast, Gosford, Terrigal, Wyong, Newcastle, Sydney, Hunter Valley
- Service keywords: wedding limousine, airport transfer, corporate car hire, cruise transfer, school formal, stretch limo
- sitemap.xml and robots.txt in frontend/public directory

## Logos
- Navbar: `@assets/logo.png_1772902642052.webp`
- Footer: `@assets/footer-image1.png_1772902642051.webp`

## Development
- Run `npx vite --port 5000 --host 0.0.0.0` for local dev
- Build: `npx vite build` → outputs to `frontend/dist/`
- The Vite dev server proxies `/api` requests to `http://127.0.0.1:7071` (Azure Functions local runtime)
