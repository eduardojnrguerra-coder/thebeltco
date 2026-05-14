# Google Merchant Center Readiness Guide

> Get TheBeltCo products approved for free Google listings and paid Shopping ads. This guide covers account setup, feed quality, required fields, image standards, and common pitfalls.

---

## Table of Contents

1. [Shopify Google & YouTube Channel Setup](#1-shopify-google--youtube-channel-setup)
2. [Merchant Center Account Checklist](#2-merchant-center-account-checklist)
3. [Product Feed Quality Checklist](#3-product-feed-quality-checklist)
4. [Required Product Fields](#4-required-product-fields)
5. [Product Title Formula](#5-product-title-formula)
6. [Product Description Formula](#6-product-description-formula)
7. [Image Requirements](#7-image-requirements)
8. [Common Merchant Center Problems & Fixes](#8-common-merchant-center-problems--fixes)
9. [Launch Checklist](#9-launch-checklist)

---

## 1. Shopify Google & YouTube Channel Setup

### Step 1 — Install the Channel

1. Shopify Admin → **Settings → Apps and sales channels**
2. Click **Shopify App Store**
3. Search for **Google & YouTube**
4. Click **Add app** → **Install**

### Step 2 — Connect to Google

1. Open the Google & YouTube channel from your Shopify admin
2. Click **Start setup**
3. Sign in to the **Google account** that owns or will manage the Merchant Center
4. Grant the requested permissions

### Step 3 — Link Merchant Center

- If you have an existing Merchant Center account: enter the **Merchant Center ID** (found in Merchant Center → Settings → Account)
- If you don't have one: the channel can **create one automatically** during setup

### Step 4 — Configure Feed Settings

1. In the Google & YouTube channel, go to **Settings**
2. Set **Product feed** to **Automatic** (Shopify pushes products daily)
3. Choose **Target country**: South Africa
4. Choose **Language**: English
5. Ensure **Shipping** and **Tax** settings match your Shopify settings

### Step 5 — Verify & Claim Your Website

1. In Google Merchant Center → **Business info → Website**
2. Enter your store URL
3. Click **Claim URL**
4. Shopify handles verification automatically when the Google & YouTube channel is installed

---

## 2. Merchant Center Account Checklist

- [ ] **Account created** at [merchants.google.com](https://merchants.google.com)
- [ ] **Business info complete**: legal business name, address, phone, customer service email
- [ ] **Website claimed and verified**
- [ ] **Shipping settings configured** — rates, carriers, delivery time (see below)
- [ ] **Returns policy configured** — return window, process, who pays
- [ ] **Tax settings configured** — South Africa VAT (15%) included in prices
- [ ] **Programs enabled**: Free Listings, Shopping Ads (when ready)
- [ ] **Phone number verified** — Google may call to verify
- [ ] **Reviewed and accepted** the terms of service

### Shipping Settings

```
Free shipping over R500     R500.00 threshold    Standard: 2-5 business days
Flat rate (under R500)      R65.00               Standard: 2-5 business days
Express shipping            R120.00              Express: 1-2 business days
```

Set these in Merchant Center → **Shipping and returns → Shipping settings**. Keep them aligned with your Shopify Shipping settings.

### Returns Policy

Set in Merchant Center → **Shipping and returns → Return settings**:

```
Return window:      30 days
Restocking fee:     No
Return shipping:    Customer pays (unless faulty)
Refund method:      Original payment method
```

---

## 3. Product Feed Quality Checklist

Google scores feed quality daily. Use this checklist to keep scores high.

- [ ] **Every product has a unique SKU** — no duplicates, no missing values
- [ ] **Every product has a valid price** — matches your storefront exactly
- [ ] **Every product has at least one high-res image** — 800×800px minimum, 1000×1000px recommended
- [ ] **No placeholder images** — all products have real photography
- [ ] **No out-of-stock products submitted** — paused or removed from feed
- [ ] **Product categories are accurate** — Google Product Taxonomy, not generic
- [ ] **Titles follow the formula** (see [Section 5](#5-product-title-formula))
- [ ] **Descriptions are unique** — no boilerplate copied across products
- [ ] **Brand field is filled** — never blank or "Generic"
- [ ] **GTIN or MPN provided** — GTIN preferred, MPN as fallback
- [ ] **Landing pages work** — no 404s, no redirect chains
- [ ] **Price and availability match** — feed status matches live store
- [ ] **Sale prices are valid-dated** — start/end dates set when on sale

### Feed Rejection Reasons to Watch For

| Disapproval | Common Cause | Fix |
|---|---|---|
| Missing value [brand] | Vendor field empty in Shopify | Set vendor on every product |
| Missing value [gtin] | No GTIN submitted | Submit MPN if no GTIN |
| Missing value [shipping] | Shipping not configured in MC | Set up shipping settings |
| Missing value [returns] | Returns policy not set | Add return policy in MC |
| Title/description quality | Keyword stuffing or caps | Use natural language |
| Image quality | Blurry, watermarked, or low-res | Re-shoot at 1000×1000px |
| Price mismatch | Feed price ≠ storefront price | Check for rounding errors |
| Availability mismatch | Feed says in stock, store says OOS | Sync inventory before feed |

---

## 4. Required Product Fields

These are the fields Google needs for optimal Shopping performance. Fields marked with **★** are **required** for approval. The rest are strongly recommended for ranking.

### Identity

| Field | Required | Source in Shopify | Notes |
|---|---|---|---|
| **id** | ★ | `variant.sku` or `variant.id` | Must be unique per variant |
| **title** | ★ | Product title (see formula below) | 70–150 characters |
| **description** | ★ | Product description | 500+ characters recommended |
| **link** | ★ | Auto-generated from product URL | Must be crawlable |
| **image_link** | ★ | First product image | 1000×1000px, no watermarks |
| **additional_image_link** | — | Images 2–10 | Lifestyle, texture, buckle, worn shots |

### Pricing & Availability

| Field | Required | Source in Shopify | Notes |
|---|---|---|---|
| **price** | ★ | `variant.price` | Must include ZAR currency: `399.00 ZAR` |
| **sale_price** | — | `variant.compare_at_price` | Only when compare-at > price |
| **sale_price_effective_date** | — | Set sale start/end | Avoids expired sale prices |
| **availability** | ★ | `variant.inventory_quantity` | `in stock`, `out of stock`, `preorder` |
| **availability_date** | — | Pre-order date | Required for preorders |

### Product Details

| Field | Required | Source in Shopify | Notes |
|---|---|---|---|
| **brand** | ★ | `product.vendor` | Never leave blank |
| **gtin** | — | `variant.barcode` | 12/13/14 digit UPC/EAN/JAN |
| **mpn** | ★ if no GTIN | `variant.sku` | Manufacturer Part Number |
| **sku** | — | `variant.sku` | Internal ID, good for tracking |
| **product_type** | — | `product.type` | Your own category, e.g. "Belt" |
| **google_product_category** | ★ | Shopify → Google mapping | Must use [Google taxonomy](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt) |

#### Recommended Google Product Categories for TheBeltCo

| Product | Google Category ID | Category |
|---|---|---|
| Men's Belt | 188 | Apparel & Accessories > Clothing Accessories > Belts |
| Women's Belt | 188 | Apparel & Accessories > Clothing Accessories > Belts |
| Wallet | 197 | Apparel & Accessories > Clothing Accessories > Wallets & Money Clips |
| Keychain | 191 | Apparel & Accessories > Clothing Accessories > Keychains |
| Gift Set | 503 | Apparel & Accessories > Clothing Accessories > Clothing Accessory Sets |

Map these in the Google & YouTube channel under **Feed → Product category mapping**.

### Variant Attributes

| Field | Required | Source in Shopify | Notes |
|---|---|---|---|
| **item_group_id** | ★ for variants | `product.id` | Groups variants of same product |
| **size** | ★ for belts | Variant option "Size" or `custom.belt_width` | e.g. `34`, `36`, `38` |
| **color** | — | Variant option "Color" or `custom.color` | e.g. `Brown`, `Black`, `Tan` |
| **gender** | — | From collections or tags | `male`, `female`, `unisex` |
| **age_group** | — | Default to `adult` | Belts are adult accessories |
| **material** | ★ | `custom.material` or `custom.leather_type` | e.g. `Full-Grain Leather` |
| **condition** | ★ | Always `new` | All products are new |
| **multipack** | — | Set to `1` | Belts sold individually |

### Shipping & Policy

| Field | Required | Source | Notes |
|---|---|---|---|
| **shipping** | ★ | Merchant Center settings or feed | Rate, delivery time, country |
| **shipping_label** | — | Shopify shipping profile | Free shipping marker |
| **return_address_label** | — | Merchant Center returns | Must match return policy |
| **return_policy_label** | — | Merchant Center returns | Refer to your return policy |

### How to Map Shopify Data → Feed Fields for Belts

| Feed Field | Shopify Source | Example |
|---|---|---|
| `id` | `variant.sku` or `variant.id` | `CL-BRN-34` |
| `item_group_id` | `product.id` | `8293492345` |
| `title` | See [title formula](#5-product-title-formula) | TheBeltCo Full-Grain Leather Belt - Brown Formal 35mm |
| `description` | See [description formula](#6-product-description-formula) | Handcrafted from full-grain South African leather... |
| `brand` | `product.vendor` | TheBeltCo |
| `gtin` | `variant.barcode` | 6001234567890 |
| `mpn` | `variant.sku` | CL-BRN-34 |
| `sku` | `variant.sku` | CL-BRN-34 |
| `price` | `variant.price` | 399.00 ZAR |
| `sale_price` | `variant.compare_at_price` | 499.00 ZAR |
| `availability` | `variant.inventory_quantity > 0` | in stock / out of stock |
| `size` | Variant option or `custom.belt_width` | 34 / 35mm |
| `color` | Variant option or `custom.color` | Brown |
| `material` | `custom.material` or `custom.leather_type` | Full-Grain Leather |
| `gender` | Collection or tag | male / unisex |
| `age_group` | Default | adult |
| `condition` | Default | new |
| `google_product_category` | Shopify Google mapping | 188 |
| `product_type` | `product.type` | Belt |
| `image_link` | First product image | https://example.com/brown-belt-1.jpg |
| `additional_image_link` | Images 2–10 | https://example.com/brown-belt-2.jpg |
| `shipping` | Merchant Center config | ZAR 65.00, Standard |
| `return_address_label` | Merchant Center config | 30-day returns |

---

## 5. Product Title Formula

```
Brand + Product Type + Leather Type + Colour + Width/Style
```

### Formula Breakdown

| Component | Required | Source | Notes |
|---|---|---|---|
| Brand | ★ | Vendor | "TheBeltCo" — consistent across all products |
| Product Type | ★ | Product type | "Belt", "Wallet", etc. |
| Leather Type | ★ | `custom.leather_type` or product title | "Full-Grain Leather" |
| Colour | ★ | Variant option or `custom.color` | "Brown", "Black", "Tan" |
| Width / Style | ★ | `custom.belt_width` or description | "35mm", "37mm", "Formal", "Casual" |

### Examples

| Product | Title |
|---|---|
| Men's brown dress belt | TheBeltCo Full-Grain Leather Belt - Brown Formal 35mm |
| Black everyday belt | TheBeltCo Full-Grain Leather Belt - Black Everyday 35mm |
| Tan leather casual belt | TheBeltCo Full-Grain Leather Belt - Tan Casual 37mm |
| Dark brown reversible belt | TheBeltCo Full-Grain Leather Reversible Belt - Dark Brown 35mm |
| Black leather wallet | TheBeltCo Full-Grain Leather Wallet - Black |

### Rules

- **70–150 characters** — 80–120 is the sweet spot
- **Brand first** — Google prefers brand-leading titles
- **No all-caps** — except for standard abbreviations (e.g. "35mm")
- **No promotional text** — no "Sale", "Free Shipping", "Best" in titles
- **No special characters** — no exclamation marks, stars, emojis
- **Consistent delimiter** — use `—` (em dash) or `-` (hyphen) between segments
- **Variant-specific** — each colour/size variant should have a unique title

---

## 6. Product Description Formula

```
Clear, specific, keyword-rich, no fake claims. One paragraph per section.
```

### Structure

```
Paragraph 1 — What it is + key benefit (include primary keyword)
Paragraph 2 — Material, origin, quality (include secondary keywords)
Paragraph 3 — Use cases + who it's for
Paragraph 4 — Fit, sizing, dimensions
Paragraph 5 — Care + durability
Paragraph 6 — Shipping + returns reassurance
```

### Example

> A premium everyday belt handcrafted from South African full-grain leather. Built for work, weekends, and years of use.
>
> Made from selected full-grain leather with a durable nickel-free buckle. Each hide is ethically sourced and hand-finished by skilled artisans.
>
> Ideal for office wear, casual outings, and formal events. The classic design pairs seamlessly with chinos, jeans, or tailored trousers.
>
> Available in waist sizes 30–42. Width: 35mm. Order your regular pant size; if between sizes, choose the larger size.
>
> Wipe clean with a damp cloth. Condition with leather balm every 2–3 months to preserve the finish and prevent drying.
>
> Free delivery on orders over R500. 30-day easy returns — if you're not completely satisfied, return your belt for a full refund.

### Rules

- **500+ characters** — Google prefers substantial descriptions
- **No duplicate descriptions** — each product must be unique
- **No keyword stuffing** — natural language only
- **No HTML** — plain text for the feed (your store page can use HTML)
- **No pricing or promotional text** — "on sale", "cheap", "discount"
- **No subjective claims** — "best belt ever", "world's finest" without substantiation
- **Include relevant keywords** — full-grain leather, South Africa, handcrafted, nickel-free, 35mm

---

## 7. Image Requirements

### Technical Requirements

| Requirement | Standard |
|---|---|
| Minimum resolution | 800×800px |
| Recommended resolution | 1000×1000px |
| Maximum file size | 16MB |
| Accepted formats | JPEG, PNG, WebP, GIF (non-animated) |
| Background | Clean white or light neutral (RGB: 255/255/255 or close) |
| Watermarks | Not allowed |
| Logos | Not allowed on main image |
| Overlays | Not allowed (text, badges, promotional graphics) |

### Required Images Per Product

| Image | Type | Purpose | Feed Field |
|---|---|---|---|
| 1 | **Main product** | Product front-facing, centred, white background | `image_link` |
| 2 | **Lifestyle** | Belt worn with outfit, real-world setting | `additional_image_link` |
| 3 | **Leather texture** | Close-up showing grain, stitching, finish | `additional_image_link` |
| 4 | **Buckle close-up** | Detailed front and side of buckle hardware | `additional_image_link` |
| 5 | **Worn/fit** | Belt on a person, front view showing fit | `additional_image_link` |
| 6 | **Packaging** (optional) | Belt in its packaging or unboxing | `additional_image_link` |

### Image Guidelines for Belts

- **Main image**: belt laid flat, centred, full length visible, on white/light background
- **Lifestyle image**: belt worn with rolled-up sleeves or tucked-in shirt, natural light, outdoors or studio
- **Texture close-up**: macro shot showing leather grain, edge paint, stitching detail
- **Buckle close-up**: straight-on and slight angle to show depth and finish
- **Worn image**: full or half-body shot showing belt worn at the waist, front view
- **Consistent aesthetic**: same lighting, colour temperature, and styling across all product photos
- **No mannequins** — use real models for lifestyle shots

### Image Naming Convention

```
product-variant-type-order.jpg
```

Examples:
```
classic-brown-belt-main-01.jpg
classic-brown-belt-lifestyle-02.jpg
classic-brown-belt-texture-03.jpg
classic-brown-belt-buckle-04.jpg
classic-brown-belt-worn-05.jpg
```

---

## 8. Common Merchant Center Problems & Fixes

### Missing Shipping / Returns

**Problem**: Feed disapproved because shipping or return policy is missing.

**Fix**: Configure shipping rates and return policy in Merchant Center → **Shipping and returns**. Ensure they match what's shown on your store.

### Low Quality Images

**Problem**: Google flags images as too small, blurry, or containing watermarks.

**Fix**: Upload minimum 1000×1000px, no text overlays, no logos, plain background. Reshoot any image that looks soft or compressed.

### Price Mismatch

**Problem**: Feed price differs from the price on your store page.

**Fix**: Check for currency rounding, outdated cached feeds, or variant price overrides. Always format as `399.00 ZAR`. Force a feed re-fetch after updating.

### Availability Mismatch

**Problem**: Feed says "in stock" but the product page shows "out of stock".

**Fix**: Update inventory in Shopify before the daily feed sync. Enable Shopify inventory tracking. Set out-of-stock variants to "deny" checkout.

### Missing Variant Data

**Problem**: Variants disapproved because `item_group_id`, `size`, or `color` is missing or inconsistent.

**Fix**: Ensure every variant has `item_group_id = product.id`, and variant-specific fields (`size`, `color`, `sale_price`) are populated per variant. Use unique SKUs per variant.

### Fake Reviews

**Problem**: Google flags or penalises products for fake review content.

**Fix**: Never submit fabricated review data. If using a review app, ensure it only sends verified-purchase reviews. Do not include rating data in the feed if it's not from a verified source.

### Misleading Claims

**Problem**: "Genuine leather" on a bonded leather product, or "handcrafted" on a mass-produced item.

**Fix**: Only claim what's true. Google may request proof. If a product is not full-grain leather, describe it accurately. Avoid "100%", "best", "premium" unless you can substantiate it.

### Feed Not Updating

**Problem**: Google still shows old products or old prices.

**Fix**: In the Google & YouTube channel, go to **Feed → Status** and check the last sync time. You can manually **Refresh feed** or wait for the next automatic sync (typically every 24 hours). Check for feed errors in Merchant Center → **Diagnostics**.

### Disapproved for "Missing Value [brand]"

**Problem**: Google requires every product to have a brand.

**Fix**: Set the **Vendor** field in Shopify on every product to "TheBeltCo". In Google & YouTube channel → **Settings**, map Vendor → brand if not auto-mapped.

### Disapproved for "Missing Value [gtin]"

**Problem**: No GTIN submitted and no MPN fallback.

**Fix**: If your product has a barcode/UPC, enter it in the **Barcode** field (variant → Inventory → Barcode). If no barcode exists, ensure `variant.sku` is populated as the MPN.

---

## 9. Launch Checklist

### Pre-launch — Account Setup

- [ ] Google Merchant Center account created and verified
- [ ] Business info complete (name, address, phone, email)
- [ ] Website claimed and verified
- [ ] Shopify Google & YouTube channel installed and linked
- [ ] Shipping rates configured in Merchant Center
- [ ] Returns policy configured in Merchant Center
- [ ] Tax settings match your Shopify setup (VAT included)
- [ ] Phone number verified with Google
- [ ] Two-step authentication enabled on Google account
- [ ] Terms of service accepted

### Pre-launch — Products

- [ ] Every product has a **Vendor** set to "TheBeltCo"
- [ ] Every product has a **unique SKU** (product or variant level)
- [ ] Every variant has a **unique SKU** (if multi-variant)
- [ ] Every product has a **GTIN** (barcode) or an **MPN** (SKU as fallback)
- [ ] Every product has a **Google product category** mapped
- [ ] Every product has a **title** following the brand-first formula
- [ ] Every product has a **unique description** (500+ characters)
- [ ] Product types are assigned consistently (Belt, Wallet, etc.)
- [ ] Collections are organised for navigation and categorisation

### Pre-launch — Images

- [ ] Every product has at least **1 main image** at 1000×1000px
- [ ] Main images have **white/light background**, no watermarks, no text
- [ ] Every product has at least **2 additional images** (lifestyle + texture)
- [ ] No placeholder images or SVGs in the feed
- [ ] Images are sharp, properly exposed, and colour-accurate
- [ ] Image file names follow the naming convention

### Pre-launch — Feed

- [ ] Feed submitted and visible in Merchant Center → **Products → Feed**
- [ ] No critical errors in **Diagnostics** tab
- [ ] No more than 5% warnings (minor issues)
- [ ] Sample products approved (check 3–5 products manually)
- [ ] Prices match between feed and storefront (spot-check 10 products)
- [ ] Availability matches between feed and storefront
- [ ] Landing pages load quickly and are mobile-friendly
- [ ] Sale prices have valid effective dates

### Launch — Free Listings

- [ ] Free Listings program enabled in Merchant Center → **Growth**
- [ ] Products appear in "Free product listings" within 3–7 days
- [ ] Search for your brand + product on Google to verify visibility
- [ ] Click through to confirm landing pages work
- [ ] Monitor **Diagnostics** daily for first 2 weeks

### Post-launch — Ongoing

- [ ] Check Merchant Center **Diagnostics** weekly
- [ ] Check **Feed status** in Google & YouTube channel weekly
- [ ] Update inventory before every feed sync
- [ ] Update prices immediately on change
- [ ] Add new products with all required fields before publishing
- [ ] Remove discontinued products from feed
- [ ] Review **Product title** performance every quarter
- [ ] Review **image** quality quarterly — replace underperformers
- [ ] Keep shipping and return settings aligned with store policy
- [ ] Monitor Google's policy changes (seasonal promotions, new requirements)

### When Moving to Paid Shopping Ads

- [ ] Checkout and conversion tracking installed (Google Ads tag via Shopify)
- [ ] Google Ads account linked to Merchant Center
- [ ] Campaign budget set
- [ ] Product segments defined (by margin, best-seller, season)
- [ ] At least 30 days of free listing data to inform bid strategy
- [ ] Negative keywords list created
- [ ] Audience targeting configured
