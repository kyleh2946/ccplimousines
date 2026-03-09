# Prestige Limousines - Central Coast

## Overview
A luxury limousine hire company website for Central Coast, NSW, Australia. Features a dark, premium theme with gold accents. Multi-page marketing site with online booking integration and contact form. Fully SEO-optimised for Central Coast NSW region.

## Pages
- **Home** (`/`) - Hero with CTA, services overview, fleet preview, testimonials
- **About** (`/about`) - Company story, values, stats
- **Services** (`/services`) - Wedding limos, airport transfers, corporate, cruise, events, formals
- **Fleet** (`/fleet`) - Vehicle showcase (Mercedes-Benz E250, BA Falcon Stretch, Chrysler 300C, VW Multivan)
- **Contact** (`/contact`) - Full contact form with company info
- **Book** (`/book`) - Embedded online reservation widget (mylimobiz.com)

## Tech Stack
- Frontend: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- Backend: Express + Drizzle ORM + PostgreSQL
- Routing: wouter
- Animations: framer-motion
- Forms: react-hook-form + zod validation
- Booking: External widget from book.mylimobiz.com (dcetrans)

## Database
- `contact_inquiries` table stores form submissions (fullName, email, phone, message)

## API
- `POST /api/contact` - Submit contact form inquiry

## Theme
- Dark background with gold (amber) primary color
- Fonts: Montserrat (body), Playfair Display (headings)
- All pages use consistent layout with Navbar + Footer

## Project Structure
- `client/src/pages/` - Page components
- `client/src/components/` - Shared components (navbar, footer, structured-data)
- `client/src/hooks/` - Custom hooks (use-page-meta, use-toast)
- `server/` - Express backend with routes and storage
- `shared/schema.ts` - Database schema and validation
- `attached_assets/` - Source images (not served directly; imported via @assets alias)
- `client/public/sitemap.xml` - XML sitemap for search engines
- `client/public/robots.txt` - Robots directives for crawlers

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
- sitemap.xml and robots.txt in public directory
