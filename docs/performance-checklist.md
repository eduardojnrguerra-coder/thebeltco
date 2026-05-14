# Performance Checklist

> Steps to test, audit, and maintain TheBeltCo theme performance. Run before launch and repeat monthly.

---

## Table of Contents

1. [PageSpeed Test Steps](#1-pagespeed-test-steps)
2. [Mobile Testing](#2-mobile-testing)
3. [Image Compression Rules](#3-image-compression-rules)
4. [App Audit Rules](#4-app-audit-rules)
5. [Theme Validation Steps](#5-theme-validation-steps)
6. [Monthly Maintenance](#6-monthly-maintenance)

---

## 1. PageSpeed Test Steps

### Tools to Use

| Tool | URL | What It Tests |
|---|---|---|
| PageSpeed Insights | https://pagespeed.web.dev | Lab + field data for mobile/desktop |
| Lighthouse (Chrome DevTools) | Open DevTools → Lighthouse tab | Detailed diagnostics |
| Web Vitals (Chrome extension) | Chrome Web Store | Real-time CLS, LCP, INP |
| Search Console Core Web Vitals | https://search.google.com/search-console | Field data from real users |
| GTmetrix | https://gtmetrix.com | Waterfall view, video recording |
| WebPageTest | https://www.webpagetest.org | Multi-location, connection throttling |

### Test Procedure

```
1. Open PageSpeed Insights
2. Enter store URL
3. Select "Mobile" (primary)
4. Run test
5. Record scores:
   - Performance: ___ / 100  (target: ≥ 90)
   - LCP: ___ s              (target: < 2.5s)
   - CLS: ___                (target: < 0.1)
   - INP: ___ ms             (target: < 200ms)
   - TBT: ___ ms             (target: < 200ms)
6. Repeat for Desktop (target: ≥ 95)
7. Test at least 5 pages:
   - Homepage
   - Product page
   - Collection page
   - Cart page
   - Blog/article page
```

### What PageSpeed Scores Mean

| Score | Rating | Action |
|---|---|---|
| 90–100 | Good | No action needed |
| 50–89 | Needs improvement | Investigate top 3 diagnostics |
| 0–49 | Poor | Blocking launch — must fix |

---

## 2. Mobile Testing

### Real Device Testing

Test on actual hardware, not just DevTools emulation:

| Device | Connection | Test |
|---|---|---|
| iPhone 12/13/14 (or similar) | South African 4G (10 Mbps, 50ms latency) | Full browse + checkout |
| Mid-range Android (Samsung A-series) | South African 5G | Full browse + checkout |
| Budget Android | South African 3G / throttled "Slow 3G" | Critical path only |
| Any tablet (iPad / Samsung Tab) | WiFi | Responsive layout check |

### What to Test on Mobile

- [ ] **First paint** — Does content appear within 2 seconds on 4G?
- [ ] **Hero image loads** — Does it render without a flash of broken layout?
- [ ] **Above-fold content** — Is the heading, CTA, and price visible immediately?
- [ ] **Tap targets** — Are buttons and links at least 48×48px?
- [ ] **Font legibility** — Is body text readable at 16px without zoom?
- [ ] **No horizontal scroll** — Content fits within viewport width
- [ ] **Cart drawer** — Opens and closes smoothly
- [ ] **Add to cart** — Works with a single tap
- [ ] **Product gallery** — Swipe/scroll works without lag
- [ ] **Checkout** — Shopify checkout loads within 5 seconds on 4G

### Connection Throttling (Chrome DevTools)

```
1. Open DevTools → Network tab
2. Select "Slow 3G" or "Fast 3G" from throttling dropdown
3. Add custom profile: "SA 4G":
   - Download: 10 Mbps
   - Upload: 5 Mbps
   - Latency: 50ms
4. Reload and test all critical paths
```

---

## 3. Image Compression Rules

### Allowed Formats (by priority)

| Format | Best For | Max File Size |
|---|---|---|
| WebP | All product/hero images | 200KB (hero), 100KB (product), 50KB (thumbnails) |
| JPEG | Photos where WebP not supported | Same as above |
| PNG | Logos, graphics with transparency | 20KB |
| SVG | Icons, illustrations | 5KB |

### Image Sizing Guide

| Usage | Max Width | Max Height | Resolution | Aspect Ratio |
|---|---|---|---|---|
| Hero background | 1600px | 900px | 72dpi | 16:9 |
| Product main image | 1000px | 1000px | 72dpi | 1:1 |
| Product hover image | 600px | 600px | 72dpi | 1:1 |
| Collection card | 600px | 600px | 72dpi | 1:1 |
| Logo | 300px | 100px | 72dpi | ~3:1 |
| Thumbnail | 120px | 120px | 72dpi | 1:1 |
| Cart image | 100px | 100px | 72dpi | 1:1 |
| Blog/article | 1200px | 675px | 72dpi | 16:9 |
| SEO social share | 1200px | 630px | 72dpi | 1.91:1 |

### Shopify Image Sizing (responsive)

When adding images in Shopify, always upload the **largest needed size** — Shopify serves responsive sizes automatically. Do not upload multiple versions of the same image at different sizes.

| Image Sizes Available | Use |
|---|---|
| 100×100, 200×200, 300×300, 400×400 | Thumbnails |
| 600×600, 800×800 | Product cards |
| 1000×1000, 1200×1200 | Product page gallery |
| 1600×1600, 2000×2000 | Hero / full-width |
| 2048×2048 | Max recommended upload |

### Compression Tools

| Tool | Type | Notes |
|---|---|---|
| Squoosh (https://squoosh.app) | Web app | Best for manual compression |
| ImageOptim (Mac) | Desktop | Batch lossless compression |
| TinyPNG / TinyJPG (https://tinypng.com) | Web app | PNG/JPEG compression |
| Shopify CDN (automatic) | Built-in | Re-compresses on upload. WebP served automatically to supported browsers |

### Compression Rules

1. **Always use WebP** as primary format. Fallback JPEG/PNG only for email clients
2. **Never upload an uncompressed image** — always run through Squoosh or ImageOptim first
3. **Max hero image**: 200KB (at 1600×900 WebP)
4. **Max product image**: 100KB (at 1000×1000 WebP)
5. **Max thumbnail**: 50KB (at 600×600 WebP)
6. **No image should exceed 200KB** on the storefront
7. **Alt text required** on every image for SEO + accessibility
8. **Avoid base64-encoded images** in CSS or HTML (bloat)

### Bulk Image Audit Steps

```
1. Open PageSpeed Insights → Diagnostics → "Properly size images"
2. Note all oversized URLs
3. Re-export at correct dimensions
4. Re-compress with Squoosh (WebP, quality 75-85)
5. Re-upload to Shopify
6. Verify new file sizes in DevTools → Network tab
```

---

## 4. App Audit Rules

Run this audit every month alongside the performance check.

### App Audit Procedure

```
1. Open Shopify Admin → Apps
2. For each app, record:
   - App name
   - Is it actively used? (Yes/No)
   - Could the theme do this? (Yes/No)
   - Monthly cost (ZAR)
   - Current star rating
   - Last updated date
   - JS weight (from DevTools → Coverage)
3. Remove apps that:
   - Are not actively used
   - Duplicate theme features
   - Drop below 4 stars
   - Haven't been updated in 6+ months
   - Add more than 50KB of JS
```

### App Performance Check

For every installed app, run:

- [ ] **Lighthouse without app** — Disable the app, run Lighthouse, record score
- [ ] **Lighthouse with app** — Enable the app, run Lighthouse, record score
- [ ] **Difference** — If Performance drops by ≥ 5 points, flag for removal
- [ ] **Network tab** — Check total KB added by the app on page load
- [ ] **Render-blocking** — Does the app inject blocking `<script>` tags?
- [ ] **Layout shift** — Does the app cause visible CLS (e.g., popups, banners)?

### App Limit Reminder

| App Type | Max Allowed |
|---|---|
| Total apps | 15 |
| Apps with JS on every page | 5 |
| Tracking scripts | 2 |

---

## 5. Theme Validation Steps

### Before Every Theme Deployment

- [ ] **Lighthouse mobile** ≥ 90 Performance
- [ ] **Lighthouse desktop** ≥ 95 Performance
- [ ] **LCP** < 2.5s on mobile 4G
- [ ] **CLS** < 0.1 on mobile 4G
- [ ] **TBT** < 200ms on mobile 4G
- [ ] **No JavaScript errors** in console
- [ ] **No 404s** in console (missing assets, broken links)
- [ ] **Shopify Theme Editor** loads all section settings without errors
- [ ] **All pages** render without breaking (home, product, collection, cart, search, 404, blog, article, page, account, login, register)
- [ ] **Cart drawer** opens, shows items, and allows quantity changes
- [ ] **Add to cart** works from product page and collection cards
- [ ] **Checkout** loads correctly (redirects or drawer)
- [ ] **Mobile menu** opens and navigation works
- [ ] **Search** returns results
- [ ] **Product gallery** thumbnails switch the main image
- [ ] **Variant selection** updates price and availability
- [ ] **Collection filtering** and sorting work
- [ ] **Breadcrumbs** render on all applicable pages
- [ ] **Structured data** validates (test with Google Rich Results Test)

### Theme Code Quality

- [ ] No `console.log` statements in production JS
- [ ] No `!important` flags in CSS (except utility classes)
- [ ] No `setTimeout` or `setInterval` for layout logic
- [ ] All images have `width` and `height` or `aspect-ratio` in CSS
- [ ] All `<script>` tags use `defer` or `async`
- [ ] No inline `<style>` blocks in body (only in `<head>`)
- [ ] No duplicate IDs in HTML
- [ ] Fonts use `font-display: swap` (when using web fonts)

---

## 6. Monthly Maintenance

Run these checks on the first Monday of every month.

### Performance

- [ ] Run PageSpeed Insights on 5 key pages (home, product, collection, cart, blog)
- [ ] Compare scores to last month — investigate any 5+ point drops
- [ ] Check Google Search Console Core Web Vitals report
- [ ] Review all images added in the last month for correct sizing/compression
- [ ] Run Lighthouse on all 5 pages with "Slow 3G" throttling

### App Audit

- [ ] Run full App Audit Procedure (Section 4)
- [ ] Check total number of installed apps — remove any exceeding limits
- [ ] Verify tracking scripts load only on required pages

### Theme

- [ ] Check for Shopify theme update notifications
- [ ] Review newly added sections for performance issues
- [ ] Test theme on latest Chrome, Safari, and Firefox versions
- [ ] Test checkout on mobile (real device)

### Reporting

- [ ] Log current scores in a performance dashboard or spreadsheet
- [ ] Note any regressions and what caused them
- [ ] Plan fixes for the next sprint
