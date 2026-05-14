# Analytics & Tracking Setup Plan

> Track where visitors come from, what they view, what they add to cart, and where they drop off. The goal is clean data without bloating the theme with tracking scripts.

---

## Table of Contents

1. [Core Principle: Sales Channels Over Theme Code](#1-core-principle-sales-channels-over-theme-code)
2. [Shopify Analytics Setup Checklist](#2-shopify-analytics-setup-checklist)
3. [Google Analytics 4 Setup Checklist](#3-google-analytics-4-setup-checklist)
4. [Google Search Console Setup Checklist](#4-google-search-console-setup-checklist)
5. [Google Merchant Center Setup Checklist](#5-google-merchant-center-setup-checklist)
6. [Meta Pixel (Facebook/Instagram) Setup Checklist](#6-meta-pixel-facebookinstagram-setup-checklist)
7. [TikTok Pixel Setup Checklist](#7-tiktok-pixel-setup-checklist)
8. [Event Tracking Reference](#8-event-tracking-reference)
9. [UTM Tracking & Campaign Naming](#9-utm-tracking--campaign-naming)
10. [Monthly Reporting Framework](#10-monthly-reporting-framework)
11. [Data Safety & Privacy](#11-data-safety--privacy)

---

## 1. Core Principle: Sales Channels Over Theme Code

**Do not add tracking scripts directly into the theme files.**

Shopify's built-in **Sales channel integrations** handle tracking more reliably and safely:

| Platform | Integration Method | Theme Edit Required? |
|---|---|---|
| Google Analytics 4 | Shopify Admin → Settings → Customer events → Google Analytics | No |
| Google Search Console | Google Merchant Center or domain DNS verification | No |
| Google Merchant Center | Google & YouTube sales channel app | No |
| Meta Pixel | Shopify Admin → Settings → Customer events → Meta Pixel | No |
| TikTok Pixel | TikTok sales channel app | No |

**Only edit theme code if** a platform is not available as a Shopify sales channel or native integration. As of 2026, all major platforms have native Shopify integrations that inject the necessary scripts via `{{ content_for_header }}` — no theme edits needed.

### Why This Matters

- **Theme updates** — tracking code survives theme changes
- **Performance** — scripts load asynchronously via Shopify's CDN, not render-blocking
- **Compliance** — Shopify handles consent management integration
- **Maintenance** — no Liquid code to break, no developer needed to add/modify pixels
- **Audit trail** — all integrations visible in Shopify Admin → Settings → Customer events

---

## 2. Shopify Analytics Setup Checklist

Shopify's built-in analytics require no setup — they work out of the box. But these settings should be verified.

- [ ] Go to **Shopify Admin → Settings → Analytics**
- [ ] Confirm **Customer events** is enabled (should be by default)
- [ ] Check **Data sharing** settings:
  - [ ] "Shopify collects data from online store" — ON
  - [ ] "Share checkout data with marketing apps" — ON (needed for purchase tracking)
- [ ] Review **GDPR/CCPA compliance settings** under **Customer privacy**:
  - [ ] Cookie consent banner enabled (required for tracking compliance)
  - [ ] Tracking consent set to "Require consent" for EU/UK visitors
- [ ] Set up **Store reports email** — weekly summary to admin inbox
- [ ] Verify **Live view** works and shows real-time visitors

### What Shopify Analytics Tracks Natively

| Event | Tracked? | Notes |
|---|---|---|
| Page views | ✅ | Automatic |
| Product views | ✅ | In "Top products by views" |
| Add to cart | ✅ | In "Sessions by activity" |
| Checkout started | ✅ | In "Abandoned checkouts" |
| Purchases | ✅ | In "Sales reports" |
| Search terms | ✅ | In "Online store search" report |
| Referrer / source | ✅ | In "Sessions by referrer" |
| Device type | ✅ | In "Sessions by device" |

### Shopify Analytics Limitations

Shopify's built-in analytics are useful for daily operations but limited for:
- Cross-device user journeys (Shopify uses first-party cookies, not user IDs)
- Custom funnel analysis beyond checkout stages
- Attribution beyond last-click
- Integration with ad platforms for conversion optimization

This is why GA4 and conversion pixels are needed.

---

## 3. Google Analytics 4 Setup Checklist

### Native Shopify Integration (Recommended)

No theme edits needed. GA4 is connected through Shopify's Customer Events system.

- [ ] Create a **Google Analytics 4 property** at https://analytics.google.com
  - Account name: `TheBeltCo`
  - Property name: `TheBeltCo Online Store`
  - Timezone: `South Africa Standard Time (UTC+2)`
  - Currency: `ZAR`
- [ ] Copy your **GA4 Measurement ID** (starts with `G-`)
- [ ] In Shopify Admin → **Settings → Customer events → Google Analytics**
  - [ ] Paste Measurement ID
  - [ ] Enable **Enhanced Ecommerce** tracking (this enables view_item, add_to_cart, purchase events)
  - [ ] Set **Data sharing** preferences
- [ ] Wait 24–48 hours for data to appear in GA4
- [ ] Verify tracking with **GA4 DebugView** or **Google Tag Assistant**
  - [ ] `page_view` — fires on every page load
  - [ ] `view_item` — fires on product page
  - [ ] `view_item_list` — fires on collection/search pages
  - [ ] `add_to_cart` — fires when product added
  - [ ] `begin_checkout` — fires at checkout start
  - [ ] `purchase` — fires on order confirmation

### Verify Enhanced Ecommerce Events

Open Google Tag Assistant or GA4 DebugView and test:

| Action | Expected Event |
|---|---|
| Browse homepage | `page_view` |
| Click a product | `view_item` + `select_item` |
| Browse collection | `view_item_list` |
| Change collection page | `view_item_list` (again) |
| Use search | `view_search_results` |
| Add item to cart | `add_to_cart` |
| View cart | `begin_checkout` |
| Enter checkout | `add_shipping_info` |
| Complete purchase | `purchase` |

### GA4 Property Settings

- [ ] Set **Default reporting timezone**: South Africa Standard Time
- [ ] Set **Currency**: ZAR
- [ ] Configure **Events → Conversions** — mark these as conversions:
  - [ ] `purchase`
  - [ ] `add_to_cart`
  - [ ] `begin_checkout`
  - [ ] `view_item` (if you want product view tracking)
- [ ] Set up **Audiences** for remarketing:
  - [ ] "All visitors" — base remarketing audience
  - [ ] "Product viewers (last 30 days)" — viewed any product
  - [ ] "Cart abandoners (last 14 days)" — added to cart but didn't purchase
  - [ ] "Past purchasers (last 180 days)" — completed purchase
  - [ ] "High-intent visitors" — visited product page + spent 30+ seconds
- [ ] Link GA4 to **Google Ads** if running campaigns
- [ ] Enable **Google Signals** for cross-device tracking (GDPR-compliant with consent)
- [ ] Configure **Data retention**: 14 months (maximum)

---

## 4. Google Search Console Setup Checklist

- [ ] Go to https://search.google.com/search-console
- [ ] Add property as **Domain** (preferred) or **URL prefix**
- [ ] Verify ownership using one of these methods:
  - [ ] **DNS TXT record** (recommended — survives theme changes)
  - [ ] **Google Analytics** (if GA4 is already verified)
  - [ ] **Google Tag Manager** (if used)
  - [ ] **HTML file upload** (works but needs re-verification if file is removed)
- [ ] Submit **sitemap.xml**:
  - URL: `https://thebeltco.com/sitemap.xml` (Shopify generates this automatically)
  - Check for errors after submission
- [ ] Add **site owner** email addresses (at least 2)
- [ ] Link Search Console to **Google Analytics 4**:
  - GA4 Admin → Property Settings → Search Console links → Link
  - This enables Search Console data inside GA4 reports

### Search Console Monthly Check

- [ ] Review **Performance → Search results** for top queries
- [ ] Review **Index → Pages** for non-indexed pages
- [ ] Review **Experience → Core Web Vitals** for mobile/desktop issues
- [ ] Check **Security & Manual Actions** tab

---

## 5. Google Merchant Center Setup Checklist

- [ ] Google Merchant Center account created and verified (see [google-merchant-center-setup.md](./google-merchant-center-setup.md))
- [ ] Shopify **Google & YouTube** channel installed and linked
- [ ] Products approved in **Products → Feed → Diagnostics**
- [ ] Conversion tracking set up (via GA4 or Google Ads):
  - In Google Ads → **Tools → Conversions** → **Import → Google Analytics 4 (GA4)**
  - Import `purchase`, `add_to_cart`, and `begin_checkout` as conversions
  - Set conversion values and attribution model (use "Data-driven")
- [ ] **Free Listings** enabled
- [ ] Feed quality score checked weekly for first month

---

## 6. Meta Pixel (Facebook/Instagram) Setup Checklist

### Native Shopify Integration (Recommended)

- [ ] Go to **Shopify Admin → Settings → Customer events → Meta Pixel**
- [ ] Click **Connect Meta Pixel**
- [ ] Log in to your Meta Business account
- [ ] Select or create a **Meta Pixel** for TheBeltCo
- [ ] Choose data sharing level:
  - [ ] **Maximum** (recommended) — includes customer data for better attribution
  - [ ] **Standard** — less data but more privacy-compliant per Meta
  - [ ] **Minimum** — least data shared
- [ ] Complete the setup (Shopify injects the pixel via `content_for_header`)

### Verify Meta Pixel Events

- [ ] Install **Meta Pixel Helper** (Chrome extension)
- [ ] Test these events fire correctly:

| Action | Event Name | Notes |
|---|---|---|
| Browse any page | `PageView` | Automatic |
| View product | `ViewContent` | Includes content_ids, content_type, value, currency |
| Add to cart | `AddToCart` | Includes content_ids, value, currency |
| Begin checkout | `InitiateCheckout` | Includes num_items, value, currency |
| Purchase | `Purchase` | Includes value, currency, content_ids, order_id |

- [ ] If using **Facebook/Instagram sales channel** in Shopify:
  - [ ] Install the channel from Shopify App Store
  - [ ] Connect your Meta Business Manager account
  - [ ] Enable **Shop Ads** and **Dynamic Product Ads**
  - [ ] This auto-generates the product catalogue for Dynamic Ads

### CAPI (Conversions API) Setup

For better tracking accuracy (survives ad blockers):

- [ ] In Meta Events Manager → **Settings → Conversions API**
- [ ] Generate an **Access Token**
- [ ] Add it to Shopify:
  - In Meta Pixel integration settings in Shopify
  - Or in a Meta-approved app like **Facebook & Instagram** sales channel
- [ ] Verify CAPI events match Browser events in Meta Events Manager → **Diagnostics**

---

## 7. TikTok Pixel Setup Checklist

Use only if TikTok ads will be run. Do not install pre-emptively.

### Native Shopify Integration (Recommended)

- [ ] Install the **TikTok** sales channel from Shopify App Store
- [ ] Connect your TikTok Business account
- [ ] Complete the setup wizard — it creates the pixel automatically
- [ ] Verify events in TikTok Events Manager:

| Action | Event Name |
|---|---|
| Page view | `PageView` |
| Product view | `ViewContent` |
| Add to cart | `AddToCart` |
| Begin checkout | `InitiateCheckout` |
| Purchase | `PlaceAnOrder` |

- [ ] Set up **Product Catalogue** in TikTok for Dynamic Showcase Ads
- [ ] Enable **Attribution integration** for accurate conversion reporting

---

## 8. Event Tracking Reference

### Complete Event Map

| Event | Trigger | GA4 | Meta Pixel | TikTok Pixel | Available in Shopify Analytics |
|---|---|---|---|---|---|
| `page_view` | Every page load | ✅ Native | ✅ Native | ✅ Native | ✅ |
| `view_item` | Product page viewed | ✅ Enhanced Ecommerce | ✅ Native (ViewContent) | ✅ Native (ViewContent) | ✅ |
| `view_item_list` | Collection/search results viewed | ✅ Enhanced Ecommerce | ❌ (use ViewContent on collection) | ❌ | ✅ |
| `view_search_results` | Search executed | ✅ Enhanced Ecommerce | ❌ | ❌ | ✅ |
| `add_to_cart` | Product added to cart | ✅ Enhanced Ecommerce | ✅ Native | ✅ Native | ✅ |
| `begin_checkout` | Checkout started | ✅ Enhanced Ecommerce | ✅ Native | ✅ Native | ✅ |
| `purchase` | Order confirmed | ✅ Enhanced Ecommerce | ✅ Native | ✅ Native | ✅ |
| `newsletter_signup` | Newsletter form submitted | ⚠️ Custom event needed | ⚠️ Custom event needed | ⚠️ Custom event needed | ❌ |
| `contact_click` | Email/contact link clicked | ⚠️ Custom event needed | ⚠️ Custom event needed | ⚠️ Custom event needed | ❌ |
| `whatsapp_click` | WhatsApp link clicked | ⚠️ Custom event needed | ⚠️ Custom event needed | ⚠️ Custom event needed | ❌ |

### Custom Events: newsletter_signup, contact_click, whatsapp_click

These events are **not tracked natively** by any platform. They require either:
1. A **Shopify app** (e.g., Klaviyo for newsletter tracking)
2. Minimal theme code in the **snippets** that trigger the actions

#### Safe Method for Custom Events

If these events are essential, the safest approach is to use **Shopify's `content_for_header` data attributes** or a **tag manager** rather than editing theme Liquid directly.

**Option A: Google Tag Manager (Recommended for custom events)**
- Install GTM via Shopify Admin → Settings → Customer events → Custom pixel
- Add GTM container snippet (Google provides this)
- Create triggers in GTM for:
  - Newsletter form submission (listen for form submit event)
  - Contact/WhatsApp clicks (listen for click on specific selectors)
- GTM then forwards these events to GA4, Meta, etc.

**Option B: Minimal theme snippet (if GTM is not used)**

If you must add these events without GTM, add a single small tracking snippet at the bottom of theme.liquid (before `</body>`) rather than editing individual sections:

```liquid
{%- if template.name == 'index' or template.name == 'product' or template.name == 'collection' -%}
  <script>
    document.addEventListener('click', function(e) {
      var target = e.target.closest('[data-track-event]');
      if (!target) return;
      var eventData = JSON.parse(target.getAttribute('data-track-event'));
      if (window.gtag) gtag('event', eventData.action, eventData.data);
      if (window.fbq) fbq('track', eventData.fbEvent, eventData.data);
    });
  </script>
{%- endif -%}
```

Then add data attributes to elements:

```html
<a href="mailto:help@thebeltco.com" data-track-event='{"action":"contact","fbEvent":"Contact","data":{}}'>Email us</a>
```

This approach adds **one small script** site-wide with event delegation — no per-element event listeners, no bloat.

---

## 9. UTM Tracking & Campaign Naming

### UTM Parameter Reference

| Parameter | Purpose | Example |
|---|---|---|
| `utm_source` | Platform where the link was clicked | `google`, `facebook`, `instagram`, `newsletter`, `blog` |
| `utm_medium` | Type of traffic | `cpc`, `social`, `email`, `organic`, `referral` |
| `utm_campaign` | Specific campaign name | `fathers_day_2026`, `winter_sale_2026`, `new_collection_launch` |
| `utm_content` | Differentiates same-link variants | `hero_banner`, `sidebar_cta`, `footer_link` |
| `utm_term` | Paid search keyword | `full-grain leather belt south africa` |

### Campaign Naming Convention

Use a consistent naming format:

```
{channel}_{campaign}_{date}_{variant}
```

| Channel | Format | Example |
|---|---|---|
| Google Ads | `google_{campaign}_{mmmyy}` | `google_brand_q126` |
| Facebook/Instagram | `meta_{campaign}_{mmmyy}` | `meta_fathersday_jun26` |
| TikTok | `tiktok_{campaign}_{mmmyy}` | `tiktok_retarget_jan26` |
| Email (Klaviyo) | `email_{campaign}_{mmmyy}` | `email_welcome_2026` |
| Newsletter | `newsletter_{topic}_{mmmyy}` | `newsletter_winter_may26` |
| Influencer | `influencer_{name}_{mmmyy}` | `influencer_thabo_mar26` |
| Guest post / PR | `pr_{publication}_{mmmyy}` | `pr_gqsa_jun26` |
| Social organic | `organic_{platform}_{topic}` | `organic_instagram_leather_care` |
| SMS | `sms_{campaign}_{mmmyy}` | `sms_abandoned_cart_2026` |

### UTM Rules

- **Always use lowercase** — `Google`, `google`, and `GOOGLE` are treated as different sources
- **Use underscores, not spaces** — `fathers_day` not `Father's Day`
- **Be consistent** — always use the same source name (e.g., always `instagram` not sometimes `ig`)
- **No personal data in UTM tags** — never include customer names, email addresses, or user IDs
- **Shorten where possible** — `src` and `cmp` aliases work in most platforms

### UTM Generator

Use https://ga-dev-tools.google/campaign-url-builder/ to create UTM links.

### Where to Use UTMs

| Link Type | Always Tag? | Notes |
|---|---|---|
| Social media bio links | ✅ | Use `utm_source=instagram&utm_medium=social&utm_campaign=bio` |
| Social media posts | ✅ | Differentiate by post content |
| Email campaigns | ✅ | Track which emails drive traffic |
| Newsletter links | ✅ | Differentiate from transaction emails |
| Influencer links | ✅ | Use unique campaign per influencer |
| Guest post links | ✅ | Track PR value |
| Internal links | ❌ | Never use UTMs on your own site links |

### UTM Testing

Before any campaign launch, test the URL:

1. Create the UTM link
2. Click it to visit the site
3. Check GA4 **Realtime → Traffic source** — does it show your utm_source?
4. Run a test purchase — does the purchase attribute to the campaign?

---

## 10. Monthly Reporting Framework

### Report Frequency

| Report | Audience | Frequency | Tools |
|---|---|---|---|
| Daily sales snapshot | Store owner | Daily | Shopify Analytics |
| Weekly traffic check | Store owner | Weekly | GA4 Realtime, Search Console |
| Monthly performance report | Store owner / team | Monthly | GA4 + Search Console + Shopify |
| Quarterly strategy review | Store owner | Quarterly | All sources combined |

### Monthly SEO Report

Compile these metrics from **Google Search Console + GA4 + Shopify Analytics**:

```
SEO Report — [Month Year]

1. Total organic sessions: ___  (vs last month: +/- ___)
2. Total organic revenue: ___  (vs last month: +/- ___)
3. Top 5 organic landing pages:
   - /page1 ___ sessions
   - /page2 ___ sessions
   - ...

4. Top 10 search queries by impressions:
   - query 1: ___ impressions, ___ clicks, ___ avg position
   - ...

5. Top 5 products by organic views:
   - product 1: ___ views
   - ...

6. Core Web Vitals pass rate:
   - Mobile: ___%
   - Desktop: ___%

7. Guide page performance:
   - Guide 1: ___ sessions, ___ conversions
   - Guide 2: ___ sessions, ___ conversions
   - ...

8. New backlinks this month: ___
```

### Monthly Traffic Report

Compile from **GA4**:

```
Traffic Report — [Month Year]

1. Total sessions: ___
2. Total users: ___
3. Bounce rate: ___%
4. Average session duration: ___
5. Pages per session: ___

6. Traffic by source:
   - Organic search: ___%
   - Direct: ___%
   - Social: ___%
   - Email: ___%
   - Paid: ___%
   - Referral: ___%

7. Top 5 landing pages:
   - /page1 ___ sessions
   - ...

8. Top 5 countries: ___
9. Top 5 devices: ___
```

### Top Landing Pages

Create a custom GA4 report or use the **Pages and screens** report:

1. Open **GA4 → Reports → Engagement → Pages and screens**
2. Filter for landing pages (first page viewed)
3. Export to Google Sheets
4. Track month-over-month:
   - Which pages drive the most traffic?
   - Which have the highest engagement rate?
   - Which have the lowest bounce rate?

### Top Converting Products

From **Shopify Analytics → Reports → Top products by sales**:

```
Top 10 Products by Revenue — [Month Year]

1. Product A: R X,XXX (X units)
2. Product B: R X,XXX (X units)
...
```

Cross-reference with **GA4 → Monetization → E-commerce purchases** for attribution data (which source drove the purchase).

### Products Viewed But Not Purchased

Use **Shopify Analytics → Reports → Products with highest views but no purchases**:

1. Go to **Shopify Admin → Analytics → Reports**
2. Use **Sessions by product viewed**
3. Export the report
4. Compare against **Sessions by product purchased**
5. Flag products with high views / low purchase rate as **conversion optimization candidates**
6. For each flagged product, check:
   - Is the price competitive?
   - Are there enough images?
   - Is the description complete?
   - Are reviews present?
   - Is inventory accurate?

### Cart Abandonment

From **Shopify Analytics → Reports → Abandoned checkouts**:

```
Cart Abandonment — [Month Year]

1. Abandoned checkouts: ___
2. Recovery rate (via email): ___%
3. Recovered revenue: R ___
4. Most abandoned products:
   - Product A (X abandonments)
   - Product B (X abandonments)
5. Abandonment by device:
   - Mobile: ___%
   - Desktop: ___%
```

If abandonment rate is above 80%, investigate:
- Shipping costs shown too late in checkout
- Unexpected fees (VAT not included in displayed price)
- Payment method not available
- Mobile checkout friction

### Search Terms Inside the Store

From **Shopify Admin → Analytics → Reports → Online store search**:

```
Internal Search Report — [Month Year]

1. Total searches: ___
2. Searches with no results: ___%
3. Top 10 search terms:
   - term 1: ___ searches
   - ...
4. Search terms with no results (opportunities):
   - term A
   - term B
5. Post-search behaviour:
   - Added to cart: ___%
   - Purchased: ___%
```

**Action items from search terms with no results:**
- Add products that match the search intent, OR
- Redirect the search to a relevant collection
- Create a guide page targeting that term

---

## 11. Data Safety & Privacy

### South African POPIA Compliance

The Protection of Personal Information Act (POPIA) requires:

- [ ] **Consent** — obtain consent before dropping tracking cookies
- [ ] **Purpose limitation** — only collect data needed for analytics and advertising
- [ ] **Data subject rights** — provide a way for users to request data deletion
- [ ] **Security** — ensure tracking scripts send data over HTTPS

### Shopify's Cookie Consent Banner

Shopify has a built-in consent banner:

1. Go to **Shopify Admin → Settings → Customer privacy**
2. Enable **Cookie consent banner**
3. Configure:
   - Banner style (popup or slide-out)
   - Which cookies to require consent for:
     - [x] **Analytics** (GA4, Shopify Analytics)
     - [x] **Marketing** (Meta Pixel, TikTok Pixel)
     - [ ] **Functional** (always on — cart, checkout, session)
4. Set **Consent storage** to 6 months
5. Set **Cookie banner position**: bottom (least intrusive for mobile)

### What Happens When Consent Is Denied

- GA4 should be configured to **not track** when consent is denied (Shopify sends consent signals to GA4)
- Meta Pixel's **Limited Data Use** should be enabled for SA/EU visitors
- TikTok Pixel has similar consent controls in its Shopify integration

### Data Retention

| Platform | Retention Setting | Value |
|---|---|---|
| Google Analytics 4 | Data retention | 14 months (max) |
| Meta Pixel | Automatic event removal | 2 years (default) |
| TikTok Pixel | Event retention | 180 days (default) |
| Shopify Analytics | Order data | Lifetime (required for operations) |
| Klaviyo (email) | Profile data | Until unsubscribed or deletion requested |

### Tracking Inventory

Keep a simple log of all active tracking:

| Platform | Integration Type | Status | Installed Date | Consent Required? |
|---|---|---|---|---|
| Google Analytics 4 | Shopify Customer Events | Active | [date] | Yes |
| Meta Pixel | Shopify Customer Events | Active | [date] | Yes |
| TikTok Pixel | Shopify Sales Channel | Inactive (until ads run) | N/A | Yes |

Update this log whenever a tracking platform is added, removed, or reconfigured.
