# Prestige Limousines - Central Coast

## Overview
A luxury limousine hire company website for Central Coast, NSW, Australia. Features a dark, premium theme with gold accents. Multi-page marketing site with contact form functionality.

## Pages
- **Home** (`/`) - Hero with contact form, services overview, fleet preview, testimonials, CTA
- **About** (`/about`) - Company story, values, stats
- **Services** (`/services`) - Wedding limos, airport transfers, corporate, cruise, events, formals
- **Fleet** (`/fleet`) - Vehicle showcase with features and specs
- **Contact** (`/contact`) - Full contact form with company info

## Tech Stack
- Frontend: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- Backend: Express + Drizzle ORM + PostgreSQL
- Routing: wouter
- Animations: framer-motion
- Forms: react-hook-form + zod validation

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
- `client/src/components/` - Shared components (navbar, footer)
- `client/src/hooks/` - Custom hooks (use-page-meta, use-toast)
- `server/` - Express backend with routes and storage
- `shared/schema.ts` - Database schema and validation
- `client/public/images/` - Stock photography assets
