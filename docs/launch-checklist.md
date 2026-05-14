# TheBeltCo Launch Checklist

> Final pre-launch verification for the complete Shopify theme and store setup. Run through every item before going live.

---

## 1. Theme Configuration

### Shopify Admin Setup

- [ ] **Theme published** — TheBeltCo theme is set as the live theme (Online Store → Themes → Publish)
- [ ] **Theme name** — Renamed to `TheBeltCo` in theme editor
- [ ] **Theme editor** — Loads all sections without errors
- [ ] **Customizer** — Each section renders its settings correctly

### Theme Settings (Settings → Theme settings)

- [ ] Brand colours match the style guide
- [ ] Logo uploaded and sized correctly (max 300×100px)
- [ ] Favicon uploaded (32×32px)
- [ ] Social media links configured
- [ ] Font selections made (heading + body)
- [ ] Announcement bar text and link set
- [ ] Header sticky setting enabled/disabled as desired
- [ ] Footer menu selected
- [ ] Product gallery style set (thumbnails recommended)
- [ ] Cart drawer enabled
- [ ] Delivery and returns default texts filled in
- [ ] Material and care default texts filled in (fallback when metafields are empty)

---

## 2. Shopify Fundamentals

- [ ] **Store currency** — Set to ZAR (South African Rand)
- [ ] **Store language** — English
- [ ] **Store timezone** — South Africa Standard Time (UTC+2)
- [ ] **Payment providers** — At least PayFast or Yoco configured for SA payments
- [ ] **Shipping rates** — At least one shipping zone with rates for South Africa
- [ ] **Tax settings** — VAT at 15% configured (included in prices)
- [ ] **Customer privacy** — Cookie consent banner enabled and styled
- [ ] **Legal pages** — Privacy Policy, Terms of Service, Shipping Policy, Return Policy created
- [ ] **Navigation** — Main menu, footer menu, and collection menus configured
- [ ] **Domain** — Custom domain connected and SSL active
- [ ] **Email** — Shopify Email or third-party SMTP configured for transactional emails

---

## 3. Navigation & Menus

- [ ] **Main menu** — Links to key collections and pages
- [ ] **Footer menu** — Links to legal pages, size guide, care guide, contact
- [ ] **Collection menus** — Organised by product type (Men's, Women's, Best Sellers)
- [ ] **URL redirects** — Any old URLs redirected (if migrating)

---

## 4. Product Readiness

### Every Product

- [ ] Title is descriptive and SEO-optimised
- [ ] Description follows the 6-paragraph formula (benefit, material, use case, fit, care, delivery/returns)
- [ ] Product type assigned (Belt, Wallet, etc.)
- [ ] Vendor set to "TheBeltCo"
- [ ] At least 2 high-res images with alt text
- [ ] Main image at least 1000×1000px
- [ ] Price set in ZAR
- [ ] Compare-at price set if on sale
- [ ] Variants created with individual SKUs
- [ ] Inventory tracked
- [ ] SEO title set (50–60 characters)
- [ ] SEO description set (150–160 characters)
- [ ] URL handle is clean and keyword-rich
- [ ] Assigned to at least one collection

### Per Product — Metafields

- [ ] `custom.leather_type` — e.g. "Full-Grain Leather"
- [ ] `custom.material` — paragraph for accordion
- [ ] `custom.belt_width` — e.g. "35mm"
- [ ] `custom.buckle_material` — e.g. "Nickel-Free Brass"
- [ ] `custom.ideal_for` — e.g. "Office, Weekend, Formal"
- [ ] `custom.care_instructions` — paragraph for accordion
- [ ] `custom.size_guide_note` — sizing guidance
- [ ] `custom.delivery_note` — shipping info
- [ ] `custom.return_note` — return policy info
- [ ] `custom.seo_keywords` — comma-separated keywords
- [ ] `custom.product_highlights` — one per line
- [ ] `custom.country_of_origin` — "South Africa"
- [ ] `custom.return_policy_days` — "30" (for structured data)

### Per Product — Tags

- [ ] `new` — if a new arrival
- [ ] `best-seller` — if a top seller
- [ ] Gender tags — `mens`, `womens`, `unisex` if used for filtering

---

## 5. Collection Readiness

- [ ] All collections have a unique title and description
- [ ] Collection SEO title and description set
- [ ] Collection image uploaded (at least 800×800px)
- [ ] URL handle is clean and keyword-rich
- [ ] Collection template includes SEO content section (FAQ, description)
- [ ] Collection template includes related collections
- [ ] Collection template includes helpful links (size guide, care guide)

---

## 6. Content & Pages

- [ ] Homepage sections configured (hero, featured collection, best sellers, brand story, testimonials, FAQ, CTA)
- [ ] About page created
- [ ] Contact page created (or contact info in footer)
- [ ] Size guide page created (if used as page-based fallback)
- [ ] Leather care page created (or covered in a guide)
- [ ] FAQ page or section populated
- [ ] Blog set up with "Guides" blog
- [ ] At least 1 guide article published before launch

---

## 7. Page Templates

- [ ] **Homepage (`index.json`)** — All sections render correctly
- [ ] **Product (`product.json`)** — Gallery, info, accordions, related products, recently viewed
- [ ] **Collection (`collection.json`)** — Products, filters, sorting, SEO content, related collections, links
- [ ] **Cart (`cart.json`)** — Cart items, subtotal, checkout button
- [ ] **Search (`search.json`)** — Search form, results, pagination
- [ ] **404 (`404.json`)** — Custom 404 message and link home
- [ ] **Page (`page.json`)** — Title, content, breadcrumbs
- [ ] **Blog (`blog.json`)** — Article list, pagination
- [ ] **Article (`article.json`)** — Full article, tags, meta, breadcrumbs
- [ ] **List collections (`list-collections.json`)** — All collections grid
- [ ] **Customer templates** — Login, register, account, addresses, order — all render correctly

---

## 8. Technical SEO

- [ ] Robots.txt blocks admin, cart, checkout, account, search, tagged pages
- [ ] Sitemap.xml accessible and submitted to Google Search Console
- [ ] Canonical URLs present on all pages
- [ ] Noindex applied to cart, search, account, and filtered collection pages
- [ ] Noindex NOT applied to product, collection, blog, article, or page templates
- [ ] All pages have exactly one `<h1>`
- [ ] Breadcrumb navigation visible on product, collection, article, and page pages
- [ ] JSON-LD structured data renders on product pages (test with Google Rich Results Test)
- [ ] JSON-LD Organization schema renders on all pages
- [ ] JSON-LD BreadcrumbList renders on product, collection, article, and page pages
- [ ] Open Graph tags present on all pages
- [ ] Twitter Card tags present on all pages
- [ ] Alt text on all images (set in Shopify media manager)

---

## 9. Google Search Console

- [ ] Property added and verified
- [ ] Sitemap submitted and processing
- [ ] No crawl errors
- [ ] Core Web Vitals report available

---

## 10. Google Merchant Center

- [ ] Account created and verified
- [ ] Website claimed and verified
- [ ] Shipping settings configured
- [ ] Returns policy configured
- [ ] Tax settings configured (VAT included)
- [ ] Shopify Google & YouTube channel installed
- [ ] Products approved (check Diagnostics tab)
- [ ] Free Listings enabled
- [ ] Feed quality score is acceptable (no critical errors, <5% warnings)

---

## 11. Google Analytics 4

- [ ] GA4 property created
- [ ] Shopify Customer Events integration configured with GA4 Measurement ID
- [ ] Enhanced Ecommerce enabled
- [ ] Conversions configured (purchase, add_to_cart, begin_checkout)
- [ ] Data appearing in GA4 Realtime report (test with a visit)

---

## 12. Performance

- [ ] Lighthouse mobile score ≥ 90
- [ ] Lighthouse desktop score ≥ 95
- [ ] LCP < 2.5s on mobile 4G
- [ ] CLS < 0.1 on mobile 4G
- [ ] TBT < 200ms on mobile 4G
- [ ] All images have width/height attributes or aspect ratio container
- [ ] theme.js loads with `defer`
- [ ] No render-blocking third-party scripts
- [ ] Tested on real mobile device on SA 4G connection

---

## 13. Conversion Readiness

- [ ] Trust badges visible on product pages (delivery, returns, secure checkout)
- [ ] Delivery & Returns accordion open by default on product pages
- [ ] Product highlights (bullet list) visible near price
- [ ] Ideal-for tags visible on product pages
- [ ] Leather type and belt width badges visible
- [ ] Country of origin badge visible
- [ ] Sticky add-to-cart functional on mobile
- [ ] Cart drawer opens and closes smoothly
- [ ] Cart drawer shows items, quantities, subtotal
- [ ] Checkout button in cart drawer works
- [ ] Size guide accessible from product page
- [ ] Materials accordion populated
- [ ] Care accordion populated
- [ ] WhatsApp/contact CTA present (if used)

---

## 14. Analytics & Tracking

- [ ] GA4 integrated via Shopify Customer Events (not theme code)
- [ ] Meta Pixel ready (install via Shopify Customer Events when running ads)
- [ ] TikTok Pixel ready (install via TikTok sales channel when running ads)
- [ ] UTM tracking convention documented and in use
- [ ] Newsletter signup has data attribute for event tracking
- [ ] Shopify Analytics reports configured

---

## 15. Mobile Testing

- [ ] Checkout flow completed on mobile (real device)
- [ ] Product gallery swipe/scroll works
- [ ] Variant selector works (radio buttons or dropdown)
- [ ] Add to cart works (single tap)
- [ ] Cart drawer opens and is usable
- [ ] Mobile menu opens and navigation links work
- [ ] Collection filters open and apply
- [ ] Search works
- [ ] All buttons are at least 48×48px tap targets
- [ ] No horizontal scroll
- [ ] Text is legible at 16px without zoom

---

## 16. Final Browser Checks

| Browser | Status |
|---|---|
| Chrome (latest) | ✅ / ❌ |
| Safari (latest) | ✅ / ❌ |
| Firefox (latest) | ✅ / ❌ |
| Edge (latest) | ✅ / ❌ |
| Chrome for Android | ✅ / ❌ |
| Safari iOS | ✅ / ❌ |

- [ ] No console errors on any page
- [ ] No 404s for assets (check Network tab)
- [ ] SSL certificate valid and all pages load over HTTPS
- [ ] Checkout loads and processes test payment

---

## 17. Pre-Launch Content

- [ ] Homepage hero heading and subheading written
- [ ] Homepage featured collection selected
- [ ] Best sellers collection selected
- [ ] Brand story heading and text written
- [ ] Testimonials populated (from real customers if available)
- [ ] FAQ questions and answers written
- [ ] Final CTA section written
- [ ] At least one guide article published on the blog
- [ ] All placeholder text replaced with real copy

---

## 18. Docs Complete

- [ ] `docs/product-upload-seo-guide.md` — How to upload products with metafields
- [ ] `docs/google-merchant-center-setup.md` — GMC setup and feed quality
- [ ] `docs/ai-search-geo-plan.md` — AI visibility and brand positioning
- [ ] `docs/analytics-tracking-plan.md` — GA4, pixels, events, reports
- [ ] `docs/performance-checklist.md` — Speed testing and maintenance
- [ ] `docs/content-plan.md` — First 10 SEO articles
- [ ] `docs/seo-checklist.md` — Pre-publish SEO verification
- [ ] `docs/shopify-app-policy.md` — App installation rules
- [ ] `docs/launch-checklist.md` — This document

---

## Signature

**Store:** TheBeltCo
**Domain:** https://thebeltco.com
**Launch date:** ________
**Checked by:** ________
