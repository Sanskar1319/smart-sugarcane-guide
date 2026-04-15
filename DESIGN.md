# Design Brief — Smart Sugarcane Farming Guide

**Purpose**: Farmer-friendly mobile app for sugarcane cultivation prediction and guidance. Builds trust through clear design, accessibility, and practical agricultural insights.

**Tone**: Organic, trustworthy, practical. Natural visual language grounded in agriculture. No fluff or decorative excess.

**Differentiation**: Color-coded prediction results (green success, red unsuitable), card-elevated visual hierarchy, large accessible typography (16px+ body), Material Design structure, agricultural imagery on auth screens, AppBar with language toggle.

## Palette

| Token | Value | Usage |
|-------|-------|-------|
| Primary | 0.48 0.13 142 (emerald) | CTAs, navigation, trust element, AppBar background |
| Secondary | 0.55 0.08 73 (terra brown) | Grounding accent, soil association |
| Success | 0.52 0.16 142 (green) | Suitable prediction, positive outcomes |
| Destructive | 0.58 0.21 24 (red-orange) | Not suitable, warnings |
| Neutral | 0.97 0.01 89 (warm beige) | Backgrounds, paper-like feel |
| Foreground | 0.28 0.04 260 (deep slate) | Text, primary content |

## Typography

| Tier | Font | Size | Usage |
|------|------|------|-------|
| Display | General Sans 700 | 24–32px | Screen headers, splash, AppBar |
| Body | DM Sans 400 | 16–18px | Content, input labels, cards, form fields |
| Mono | Geist Mono 400 | 14–16px | Data, temperature values |

## Screens & Components

| Screen | Elements | Treatment |
|--------|----------|-----------|
| **Login** | Email/password fields, login button, social placeholders, forgot password link, register link | AppBar with green gradient header, form centered card, agricultural imagery background |
| **Register** | Name/email/phone/password fields, language dropdown, register button, back link | Same header treatment as Login, multi-step form optional |
| **Home (Dashboard)** | AppBar (logout + language toggle), weather banner, navigation cards | Elevated AppBar with shadow-subtle, weather card with icon/temp display, card grid layout |
| **Account/Profile** | Name/email/phone display, edit form, password change, logout button | Two-section card layout, form inputs with labels, clear CTA buttons |
| **Result** | Color-coded prediction cards, recommendations, save/back buttons | Green success or red unsuitable border-left marker, icon + text per recommendation |
| **Predict Form** | Temperature/humidity/rainfall inputs, soil dropdown, fetch weather button | Full-width form fields, loading spinner on submit |
| **Farming Guide** | Expandable sections, icons, bullet points | Card-elevated with consistent padding, accordion smooth animations |
| **History** | Previous prediction cards, search/filter options | Card list layout with date/inputs/result summary |

## Structural Zones

| Zone | Treatment |
|------|-----------|
| AppBar | `bg-primary` with white text, 1px border-bottom, shadow-subtle, sticky top-0 z-40 |
| Cards | `bg-card` with 4px border-radius, `shadow-subtle` or `shadow-md`, 1px border |
| Buttons | Primary (emerald bg, white text, min 48px height), Secondary (terra border), Outline (primary border) |
| Form inputs | `bg-input` with 1px border, 16px font, visible focus ring, min 44px height |
| Result cards | Green border-left (success) or red border-left (unsuitable) with soft background tint |
| Weather banner | Horizontal card layout with icon, temperature, conditions summary, 4px border-radius |
| Backgrounds | Warm beige (light mode), deep slate (dark mode) |

## Spacing & Rhythm

- **Base unit**: 4px grid. Margins/padding: 16px, 24px, 32px (mobile-first).
- **Card spacing**: 16px gap between cards within sections; 24px between sections.
- **Form spacing**: 16px between input groups, 12px between label and input.
- **Density**: Generous padding (16px–24px) to prioritize readability for farmers. AppBar: 12px–16px padding.

## Component Patterns

- **Form inputs**: 16px font, 12px bottom margin, visible focus state with primary ring, 44px+ minimum height
- **Labels**: Font-medium, 16px, displayed above input with 8px gap
- **Dropdowns**: Custom styled with earthy accent on expand, 16px font
- **Loading states**: Smooth spinner animation using primary green (spin-smooth animation)
- **Navigation buttons**: Full-width or side-by-side, clear tap targets (min 48px height)
- **Icons**: Lucide-react agriculture-themed (leaf, cloud, droplet, soil, history, user, lock, mail, phone)
- **AppBar controls**: Language toggle (EN/MA buttons), logout button, 48px touch target

## Motion

- **Smooth transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- **Button states**: Hover → darker green (bg-primary/90), active → more saturated (bg-primary/80)
- **Card entry**: Fade-in on mount (fade-in animation), no bounce
- **Form transitions**: Slide-up on field focus or section expand
- **Loading indicator**: Smooth rotating spinner (spin-smooth animation, primary green)

## Dark Mode

- **Background**: 0.16 0.01 260 (deep slate-blue)
- **Card**: 0.2 0.01 260 (slightly lighter)
- **Foreground**: 0.92 0.02 260 (near-white)
- **Primary**: 0.65 0.14 142 (brighter green for contrast)
- **AppBar**: Same primary color (0.65 0.14 142) with white text
- **Text**: White/off-white for readability on dark surfaces

## Accessibility

- **Minimum font size**: 16px (body), 24px (headers)
- **Color contrast**: AA+ on all text/background pairs
- **Focus states**: Visible 2px ring in primary color
- **Icons + labels**: Always paired text labels with icons
- **Touch targets**: Minimum 48px × 48px for buttons, 44px × 44px for form inputs
- **Form fields**: Visible labels, error messages, help text where needed
- **Loading states**: Always announce via aria-busy or loading spinner

## Constraints

- **No gradients** on backgrounds (solid colors only)
- **No blur effects** on cards (crisp edges, solid borders)
- **No animations** on scroll (only interactive transitions)
- **Consistent border radius**: 12px for most elements, 8px for inputs, 12px for AppBar corners
- **Success/destructive colors**: Must be distinct from neutral palette for color-blind users
- **AppBar height**: 56–64px (iOS/Android standard) to accommodate controls

## Signature Details

1. **Left-aligned colored border** on result cards (4px emerald for suitable, red-orange for unsuitable). Conveys outcome instantly with icon + bold typography.
2. **Emerald AppBar** with white text, language toggle, and logout — establishes trust and agricultural brand identity.
3. **Weather banner card** on Home screen — displays current conditions with icon, temperature, and summary text in horizontal layout.
4. **Form field elevation** — clear visual hierarchy with labels above inputs, visible focus ring, and minimum 16px font.
