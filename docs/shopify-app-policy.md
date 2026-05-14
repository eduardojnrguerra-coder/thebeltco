# Shopify App Policy

> Rules for choosing, approving, and installing apps on TheBeltCo store. Every app must earn its place — if it doesn't directly improve sales, reviews, payments, email, or tracking, we don't need it.

---

## 1. Core Principle

**Prefer built-in theme features over apps.**

This theme already handles:
- Product galleries, variants, and forms
- Cart drawer and cart page
- Search and predictive search
- Collection filtering and sorting
- Accordions (materials, care, delivery, size guide)
- Trust badges and delivery info
- Sticky add-to-cart
- Product badges (sale, new, best-seller)
- Breadcrumbs and structured data (JSON-LD)
- Social meta tags (Open Graph, Twitter Cards)
- SEO (meta title, description, keywords)
- Announcement bar
- Mobile navigation
- Image galleries with thumbnails
- Recently viewed products
- Related products
- Newsletter signup

Before installing any app, ask: **"Does this theme already do this?"**

If the answer is yes — **do not install the app.** Configure the built-in feature instead.

---

## 2. App Categories: Allowed vs Prohibited

### ✅ Allowed — These directly improve the business

| Category | Examples | Why |
|---|---|---|
| **Payment gateways** | PayFast, Yoco, Ozow, SnapScan | Local South African payments are essential |
| **Email marketing** | Klaviyo, Mailchimp, Omnisend | Owned audience, abandoned cart, welcome flows |
| **Reviews / UGC** | Judge.me, Loox, Okendo | Social proof drives conversion |
| **Shipping** | ShipStation, Collivery, The Courier Guy | Fulfillment efficiency |
| **Accounting** | QuickBooks, Xero, A2X | Business operations |
| **Analytics** | Google Analytics 4, Meta Pixel | Tracking (max 2 tracking apps total) |
| **Customer service** | Gorgias, Zendesk, Tidio | Support at scale |
| **Loyalty / rewards** | Smile.io, Yotpo Loyalty | Repeat purchase incentive |
| **Backup** | Rewind, BackupBear | Disaster recovery |

### ❌ Prohibited — These hurt performance or duplicate theme features

| Category | Examples | Reason |
|---|---|---|
| **Popup apps** | Privy, OptinMonster, Justuno | Blocks content, hurts CLS, hurts UX. Use the built-in newsletter form |
| **Announcement bar apps** | SmartBar, Hextom | Theme has a built-in announcement bar |
| **Countdown timer apps** | Product Countdown, Hurrify | Heavy JS, animation overhead |
| **Sales pop / notification apps** | Nudge, Proofo, Fomo | Fake social proof, performance bloat |
| **Currency converter apps** | Best Currency Converter | Adds JS weight. Target South Africa only — ZAR only |
| **Size chart apps** | Kiwi Size Chart, SizeMe | Theme handles size guide via metafields or page |
| **FAQ apps** | HelpCenter, FAQFox | Theme has a built-in FAQ section |
| **Trust badge apps** | TrustBadge, SealCom | Theme has built-in trust badges |
| **Instagram feed apps** | Instafeed, Snapppt | Heavy JS. Use manual curation in content |
| **Live chat apps** (free tier) | Tawk.to, LiveChat (free) | Only if you have staff to respond 24/7. Otherwise skip |
| **Bundle / upsell apps** (JS-heavy) | Frequently Bought Together, BundleBear | Evaluate performance impact first. Must lazy-load |
| **Animation / effects apps** | Parallax, Confetti, Snow | Zero business value, pure JS weight |

---

## 3. Performance Gate — Must-Pass Checklist

Every app **must pass all** of these checks before installation:

- [ ] **Lighthouse impact** — Run Lighthouse before and after. If Performance drops more than 5 points, reject
- [ ] **JavaScript size** — Total added JS must be under 50KB gzipped. If the app requires 200KB+, reject
- [ ] **Render-blocking** — App scripts must load with `defer` or `async`. No synchronous `<script>` tags in `<head>`
- [ ] **No layout shift** — Enable the app and measure CLS. If CLS increases above 0.1, reject
- [ ] **Mobile-first** — Test on a real 4G/5G mobile connection in South Africa. If it feels slow, reject
- [ ] **No external fonts** — App must not add Google Fonts, Typekit, or any font loading
- [ ] **No jQuery** — App must use vanilla JS or modern framework. jQuery is prohibited
- [ ] **GDPR / POPIA compliant** — Must store data in South Africa or have a valid data processing agreement
- [ ] **Removeable** — Installing the app must not require theme code edits that can't be undone
- [ ] **Reviews** — Must have 4+ stars and 100+ reviews in Shopify App Store

---

## 4. App Installation Rules

### Before Installing

1. Check the **Allowed** list above
2. Run the **Performance Gate** checklist
3. Test in a **staging theme** first (duplicate the theme, install there)
4. Check the app's **privacy policy** and **data storage location**
5. Verify the app supports **Shopify Online Store 2.0** (app blocks)

### During Installation

1. Always install via **Apps → App blocks** when possible (not theme code edits)
2. If the app requires theme code edits, **document every change** in the theme comments
3. Never give an app `write` access to theme files unless absolutely necessary
4. Set the app to **load on specific templates only** if it only needs to run on certain pages

### After Installation

1. Run **Lighthouse** on mobile and desktop
2. Check **Shopify Theme Editor** still loads without errors
3. Test the **full checkout flow** on mobile
4. Check **Web Vitals** in Google Search Console after 1 week
5. Remove the app immediately if any of the Performance Gate checks fail in production

---

## 5. Maximum App Budget

The store has a hard limit on the total number of installed apps:

| Type | Max Count |
|---|---|
| Total apps installed | 15 |
| Apps loading JS on every page | 5 |
| Tracking / analytics scripts | 2 |
| Review / UGC apps | 1 |
| Email marketing | 1 |
| Chat / support | 1 (only with 24/7 staffing) |
| Shipping / fulfillment | 2 |

If you need to add a new app and you're at the limit, **remove an existing app first.**

---

## 6. App Audit (Run Quarterly)

Every 3 months, review all installed apps:

1. Open **Shopify Admin → Apps**
2. For each app, ask:
   - Are we actively using this?
   - Could the theme do this instead?
   - What does this cost per month?
   - Has the Performance Gate checklist changed since install?
3. **Remove** any app that:
   - Isn't actively used
   - Is duplicated by a newer app
   - Fails a re-run of the Performance Gate
   - Has had a data breach or privacy issue
   - Has dropped below 4 stars or 100 reviews
4. **Document** the audit date and findings in this file

---

## 7. Current Approved App Stack

| App | Category | Purpose | JS Weight | Installed |
|---|---|---|---|---|
| *(To be filled at launch)* | | | | |

Only apps listed here with a clear purpose, measured JS weight, and install date are approved for production.
