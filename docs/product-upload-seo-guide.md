# Product Upload & SEO Guide

> Upload products normally in Shopify Admin — the theme automatically uses your data, variants, metafields, tags, images, and collections to create strong SEO and conversion pages.

---

## Table of Contents

1. [Required Fields](#1-required-fields)
2. [Product Description Formula](#2-product-description-formula)
3. [Shopify Metafields](#3-shopify-metafields)
4. [Tags & Collections](#4-tags--collections)
5. [Product Images](#5-product-images)
6. [SEO Title & Description](#6-seo-title--description)
7. [How the Theme Uses Your Data](#7-how-the-theme-uses-your-data)
8. [Checklist (printable)](#8-checklist)

---

## 1. Required Fields

### Product Title

Write a clear, descriptive title that includes the product name and key differentiator.

**Good:** Classic Brown Full-Grain Leather Belt — 35mm  
**Avoid:** Belt

The title displays as the `h1` heading on the product page.

### Product Description

Write your description using [the formula below](#2-product-description-formula). The theme renders this below the product form in a dedicated description section.

### Product Type

Select or create a product type (e.g., "Belt", "Wallet", "Accessory"). This is used for filtering and categorization.

### Vendor

Set to your brand name (e.g., "TheBeltCo"). The theme displays the vendor on product cards and uses it in structured data for Google.

### Tags

Tags power badge indicators, filtering, and SEO. See [Tags & Collections](#4-tags--collections).

### Collections

Add the product to at least one collection. Collections generate collection pages, breadcrumbs, navigation, and internal linking.

### Price

- **Price:** The selling price in ZAR.
- **Compare-at Price:** The original/retail price. If higher than the selling price, a "Sale" badge appears and a strikethrough price is shown.

### Variants

For size or color options (e.g., 32", 34", 36" or Black, Brown). Each variant can have its own:
- SKU
- Price (optional override)
- Compare-at price (optional override)
- Inventory quantity
- Image (optional)

### SKU

Enter a unique SKU for the product (or per variant). The theme displays "SKU: [value]" in the product info bar when enabled in theme settings.

### Inventory

Set inventory tracking and quantities. The theme shows:
- **In stock** (green checkmark) — when quantity > 5 or tracking is off
- **Low stock** — "Only X left" when quantity ≤ 5
- **Sold out** — when quantity = 0

---

## 2. Product Description Formula

Write one paragraph for each section below, separated by blank lines.

```
Paragraph 1 — One-line benefit
Starts with what the customer gains. Leads with the strongest sales angle.

Paragraph 2 — Material & leather detail
Specifies the leather type, origin, and quality markers.

Paragraph 3 — Best use case
Describes where and how the product fits into daily life.

Paragraph 4 — Fit & width info
Gives sizing guidance and physical dimensions.

Paragraph 5 — Care note
Brief care instruction to reinforce quality.

Paragraph 6 — Delivery & returns reassurance
Shipping timeline, free delivery threshold, return window.
```

### Example

> A everyday belt that looks sharp from the boardroom to the braai — made to be your go-to for years.
>
> Handcrafted from premium South African full-grain leather. Each hide is selected for its natural grain, strength, and character — no corrected grains, no bonded leather.
>
> Perfect for office wear, weekend outings, and formal occasions. The classic design pairs with chinos, jeans, or tailored trousers.
>
> 35mm wide, available in waist sizes 30–42. Order your usual pant size. If between sizes, size up.
>
> Wipe clean with a damp cloth. Condition with leather balm every few months to maintain the finish.
>
> Free delivery on orders over R500. 30-day easy returns — if you're not happy, send it back.

---

## 3. Shopify Metafields

The theme reads these **product metafields** from the `custom` namespace. Define them once in your Shopify Admin → Settings → Metafields → Products, then fill them per product.

| Metafield Key | Type | What It Does | Example |
|---|---|---|---|
| `custom.leather_type` | Single line text | Shows a "leather" badge at the top of the product page | Full-Grain Leather |
| `custom.material` | Multi-line text | Renders in the "Materials" accordion tab | Crafted from premium full-grain leather with a durable nickel-free buckle. |
| `custom.belt_width` | Single line text | Shows a "width" badge at the top of the product page | 35mm |
| `custom.buckle_material` | Single line text | Used in product structured data (Google Shopping) | Nickel-Free Brass |
| `custom.ideal_for` | Single line text | Displays as small tag badges below the price | Office, Weekend, Formal |
| `custom.care_instructions` | Multi-line text | Renders in the "Care" accordion tab | Wipe clean with a damp cloth. Condition with leather balm every few months. |
| `custom.size_guide_note` | Multi-line text | Renders in the "Size Guide" accordion tab | Order your usual pant size. If between sizes, size up. |
| `custom.delivery_note` | Multi-line text | Renders in the "Delivery & Returns" accordion tab | Free delivery on orders over R500. Orders dispatched within 1-2 business days. |
| `custom.return_note` | Multi-line text | Renders in the "Delivery & Returns" accordion tab | We offer a 30-day easy returns policy. |
| `custom.seo_keywords` | Single line text | Injected as `<meta name="keywords">` in the page head | full-grain leather belt, South Africa, premium belt, handcrafted |
| `custom.product_highlights` | Multi-line text | Shows as a bullet list near the price. One highlight per line. | Genuine full-grain leather<br>Nickel-free buckle<br>Handcrafted in South Africa<br>30-day returns |
| `custom.country_of_origin` | Single line text | Shows a "Made in [country]" badge | South Africa |

### How to Create These Metafields

1. Go to **Shopify Admin → Settings → Metafields → Products**
2. Click **Add definition** for each metafield listed above
3. Use the **Type** specified in the table
4. No namespace is needed — all use the `custom.` prefix automatically

### Fallback Behaviour

When a metafield is **empty**, the theme falls back gracefully:

| Missing Metafield | What Shows Instead |
|---|---|
| `custom.leather_type` | No badge |
| `custom.belt_width` | No badge |
| `custom.country_of_origin` | No badge |
| `custom.product_highlights` | Nothing (section hidden) |
| `custom.ideal_for` | Nothing (section hidden) |
| `custom.material` | Falls back to **theme settings default material text** |
| `custom.care_instructions` | Falls back to **theme settings default care text** |
| `custom.size_guide_note` | Falls back to **size guide page** (set in section settings), otherwise hidden |
| `custom.delivery_note` | Falls back to **theme settings delivery text** |
| `custom.return_note` | Falls back to **theme settings returns text** |
| `custom.seo_keywords` | No meta keywords tag |

---

## 4. Tags & Collections

### Tag-based badges

Add these tags to products for automatic badge display:

| Tag | Badge |
|---|---|
| `new` | "New" badge (green) |
| `best-seller` or `best_seller` | "Best Seller" badge |

No Liquid edits needed — these work automatically on product cards and collection pages.

### Collections for SEO

- Add each product to its **most specific collection** (e.g., "Men's Leather Belts")
- Collections generate **dedicated collection pages** with their own URL, title, and description
- The theme automatically generates **breadcrumb links** back through collections
- Collection pages include **CollectionPage** structured data

---

## 5. Product Images

- Upload at least **2 images** per product (the second image is used as a hover image on collection cards)
- Recommended resolution: **2000×2000px** (square)
- Supported formats: JPEG, PNG, WebP
- The first image is the **primary** image with `fetchpriority: high`
- Gallery shows **thumbnails** when 2+ images exist
- Set **alt text** on each image for accessibility and SEO

### Media Types Supported

- Images (JPEG, PNG, WebP)
- Video (MP4) — plays inline in gallery
- YouTube/Vimeo embeds
- 3D models (GLB)

---

## 6. SEO Title & Description

### SEO Title

Shopify Admin → Product → **Search engine listing preview** → **Page title**

- Include primary keyword and brand
- 50–60 characters recommended
- Example: "Classic Brown Leather Belt | Full-Grain | TheBeltCo"

The theme renders this as `<title>` — if left blank, Shopify auto-generates from the product title.

### SEO Description

Shopify Admin → Product → **Search engine listing preview** → **Meta description**

- 150–160 characters recommended
- Include a call to action and key benefit
- Example: "Handcrafted from premium South African full-grain leather. 35mm wide, nickel-free buckle, and built to last. Free delivery on orders over R500."

The theme renders this as `<meta name="description">` and `og:description`.

### Meta Keywords (from metafield)

The `custom.seo_keywords` metafield is automatically injected as:

```html
<meta name="keywords" content="full-grain leather belt, South Africa, premium belt, handcrafted">
```

---

## 7. How the Theme Uses Your Data

| Product Field | Where It Appears |
|---|---|
| Title | `<h1>` heading, `<title>`, og:title, structured data |
| Description | Product description section, `<meta name="description">`, structured data |
| Price | Product page price, collection cards, structured data |
| Compare-at price | Strikethrough price + "Sale" badge (when higher) |
| Variants | Radio button selector, structured data per-offer |
| SKU | Product info bar (when enabled) |
| Images | Gallery, thumbnails, hover on collection cards, structured data |
| Tags | "New"/"Best Seller" badges on cards |
| Collections | Breadcrumbs, structured data category, navigation |
| Vendor | Product card, structured data brand |
| metafields.* | See [metafields table](#3-shopify-metafields) above |

### Structured Data (JSON-LD)

The theme automatically injects these schema.org types:

| Page | Schema Type |
|---|---|
| Product | `Product` — name, description, brand, offers, images, SKU, MPN, aggregate rating, material, color, size |
| Product | Each variant as a separate `Offer` with price, availability, SKU |
| Collection | `CollectionPage` |
| Homepage | `WebSite` |
| Blog | `Blog` |
| Article | `Article` |
| Page | `WebPage` |
| Organization | `Organization` — name, URL, logo, social links, contact |
| Breadcrumbs | `BreadcrumbList` |

---

## 8. Checklist

### Per product — before publishing

- [ ] **Title** — descriptive, includes key differentiator
- [ ] **Description** — follows the 6-paragraph formula
- [ ] **Product type** — set (e.g., Belt, Wallet)
- [ ] **Vendor** — set to your brand
- [ ] **Tags** — add `new` or `best-seller` if applicable
- [ ] **Collections** — in at least one collection
- [ ] **Price** — ZAR selling price
- [ ] **Compare-at price** — set if on sale
- [ ] **Variants** — sizes/colors with individual SKUs and inventory
- [ ] **Images** — 2+ high-res images with alt text
- [ ] **SEO title** — 50–60 chars with keyword
- [ ] **SEO description** — 150–160 chars with call to action

### Metafields — set when relevant

- [ ] `custom.leather_type` — e.g., "Full-Grain Leather"
- [ ] `custom.material` — paragraph for Materials accordion
- [ ] `custom.belt_width` — e.g., "35mm"
- [ ] `custom.buckle_material` — e.g., "Nickel-Free Brass"
- [ ] `custom.ideal_for` — e.g., "Office, Weekend, Formal"
- [ ] `custom.care_instructions` — paragraph for Care accordion
- [ ] `custom.size_guide_note` — sizing guidance
- [ ] `custom.delivery_note` — shipping info
- [ ] `custom.return_note` — return policy info
- [ ] `custom.seo_keywords` — comma-separated keywords
- [ ] `custom.product_highlights` — one per line
- [ ] `custom.country_of_origin` — e.g., "South Africa"
