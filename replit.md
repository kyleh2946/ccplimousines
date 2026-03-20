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
frontend/              ← app_location (self-contained for Azure build)
  src/
    pages/             - Page components
    components/        - Shared components (navbar, footer, structured-data)
    hooks/             - Custom hooks (use-page-meta, use-toast)
    lib/               - Utility functions
    components/ui/     - shadcn/ui components
  shared/
    schema.ts          - Zod validation schemas
  assets/              - Source images (imported via @assets alias)
  public/              - Static assets (images, sitemap, robots.txt, staticwebapp.config.json)
  index.html           - Entry HTML
  vite.config.ts       - Vite config (used by Azure build)
  tailwind.config.ts   - Tailwind config
  postcss.config.js    - PostCSS config
  tsconfig.json        - TypeScript config
  package.json         - Frontend dependencies & build scripts
  dist/                ← output_location (build output)
api/                   ← api_location (Azure Functions)
  src/functions/
    contact.js         - POST /api/contact → sends email via SMTP2GO
  host.json            - Azure Functions host config
  package.json         - Azure Functions dependencies
```

### Root-level configs (Replit dev only)
```
vite.config.ts         - Root Vite config (used by Replit dev server)
tailwind.config.ts     - Root Tailwind config
tsconfig.json          - Root TypeScript config
shared/schema.ts       - Root shared schema (mirrored in frontend/shared/)
attached_assets/       - Original source images (mirrored in frontend/assets/)
```

## Azure SWA Deployment Config
```yaml
app_location: frontend
api_location: api
output_location: dist
```

## Dual Config Setup
The project has configs at two levels:
- **Root level** (`vite.config.ts`, `tailwind.config.ts`, etc.) — used by Replit dev server (`npx vite --port 5000`)
- **`frontend/` level** — used by Azure SWA's Oryx builder when deploying

Both resolve the same aliases (`@`, `@shared`, `@assets`) but from their respective directories. The `shared/schema.ts` and image assets are duplicated in `frontend/` so Azure can build without access to root-level directories.

## API
- `POST /api/contact` - Azure Function that validates form data and sends email via SMTP2GO

## Environment Variables (Azure)
- `MAIL_API_KEY` - SMTP2GO API key
- `MAIL_TO` - Recipient email address
- `MAIL_FROM` - Sender email address

## Theme
- True black background (hsl(0 0% 4%)), vivid amber-gold primary (hsl(43 85% 50%))
- Cinematic, high-end feel inspired by burbankhirecars.com.au
- Navbar: transparent over hero, becomes solid black on scroll
- Hero: full-viewport height, centered layout, large italic serif heading, two CTA buttons
- Gold divider lines between section headings and content
- Fonts: Montserrat (body), Playfair Display (serif/headings)
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
- Run `npx vite --port 5000 --host 0.0.0.0` for local dev (uses root vite.config.ts)
- Build from root: `npx vite build` → outputs to `frontend/dist/`
- Build from frontend (Azure): `cd frontend && npx vite build` → outputs to `frontend/dist/`
- The Vite dev server proxies `/api` requests to `http://127.0.0.1:7071` (Azure Functions local runtime)
