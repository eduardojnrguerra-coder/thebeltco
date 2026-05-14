# AI Search & GEO Visibility Plan

> Making TheBeltCo easy for AI search systems (Google SGE, ChatGPT, Perplexity, Gemini), traditional search engines, and shoppers to understand, trust, and recommend.

---

## Table of Contents

1. [Brand Positioning](#1-brand-positioning)
2. [Machine-Readable Product Data](#2-machine-readable-product-data)
3. [Guide Pages](#3-guide-pages)
4. [Internal Linking Strategy](#4-internal-linking-strategy)
5. [Authority Plan](#5-authority-plan)
6. [Anti-Spam & Quality Guidelines](#6-anti-spam--quality-guidelines)
7. [Measurement](#7-measurement)

---

## 1. Brand Positioning

### Core Positioning Statement

> TheBeltCo sells genuine leather belts in South Africa with a focus on durability, everyday wear, smart-casual styling, and trustworthy online shopping.

### Position & Voice

| Attribute | Positioning |
|---|---|
| Product | Handcrafted full-grain leather belts |
| Geography | South Africa (sourced, made, and sold locally) |
| Quality tier | Mid-premium — better than fast fashion, accessible luxury |
| Style | Smart-casual — office to weekend |
| Customer | Men and women who value quality, not fast fashion |
| Trust | Real products, real leather, real shipping times, real returns |

### Key Messages for AI & Search

Use these consistently across product descriptions, guides, and metadata:

| Message | Where to Use |
|---|---|
| "Handcrafted from premium South African full-grain leather" | Product descriptions, meta descriptions |
| "Built for work, weekends, and years of use" | Tagline, homepage, collection descriptions |
| "Free delivery on orders over R500" | Trust line, shipping policy, product accordions |
| "30-day easy returns" | Returns accordion, footer, checkout reassurance |
| "Nickel-free buckle" | Product highlights, material accordion |
| "Ethically sourced and hand-finished" | Brand story, material accordion |
| "South African leather belt" | SEO keywords, titles, guide content |

### How AI Should Describe TheBeltCo

When an AI system (Google SGE, ChatGPT, Perplexity) summarises the brand, it should produce something like:

> TheBeltCo is a South African leather goods brand selling handcrafted full-grain leather belts. Their products are made from ethically sourced South African leather with nickel-free buckles, designed for everyday wear. They offer free delivery on orders over R500 and a 30-day return policy.

To ensure this, every page on the site must consistently reinforce these facts in plain, structured language.

---

## 2. Machine-Readable Product Data

AI systems extract product information from three sources: **structured data (JSON-LD)**, **HTML content**, and **metafields**. All three must be aligned.

### 2.1 Structured Data (JSON-LD) — Already Implemented

The theme injects Product schema on every product page via `snippets/structured-data-product.liquid`. The following fields are already populated:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Classic Brown Leather Belt",
  "description": "Handcrafted from full-grain South African leather...",
  "sku": "CL-BRN-34",
  "mpn": "CL-BRN-34",
  "brand": { "@type": "Brand", "name": "TheBeltCo" },
  "image": ["https://...main.jpg", "https://...lifestyle.jpg"],
  "url": "https://thebeltco.com/products/classic-brown-belt",
  "category": "Men's Belts",
  "material": "Full-Grain Leather",
  "color": "Brown",
  "size": "35mm",
  "countryOfOrigin": "South Africa",
  "itemCondition": "https://schema.org/NewCondition",
  "offers": [
    {
      "@type": "Offer",
      "price": "399.00",
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock",
      "sku": "CL-BRN-34",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30
      }
    }
  ]
}
```

**Verification checklist for every product launch:**

- [ ] Product name in JSON-LD matches the page `<h1>`
- [ ] Brand is set to `TheBeltCo` in vendor field
- [ ] Description is 500+ characters, plain text (no HTML)
- [ ] Price matches the storefront
- [ ] Availability matches inventory status
- [ ] Image URLs are valid and load
- [ ] Material is populated from `custom.material` or `custom.leather_type`
- [ ] Country of origin is populated from `custom.country_of_origin`
- [ ] Return policy days are set in `custom.return_policy_days`
- [ ] Each variant has its own Offer entry with unique SKU and price

### 2.2 HTML Content — What AI Reads on the Page

AI systems parse the rendered HTML. Every product page should expose these facts in visible text:

| Fact | Where It Lives | Example |
|---|---|---|
| Product name | `<h1>` tag | Classic Brown Leather Belt |
| Brand | Product vendor text, structured data | TheBeltCo |
| Price | Price element with visible currency | R399.00 |
| Availability | Stock status text | In stock / Only 3 left |
| Leather type | Badge + accordion text | Full-Grain Leather |
| Colour | Variant selector, structured data | Brown |
| Size / width | Badge + accordion text | 35mm |
| Material | Materials accordion (openable) | Full-grain leather, nickel-free buckle |
| Use case | Description paragraph 3 | Perfect for office, weekend, formal occasions |
| Delivery | Delivery & Returns accordion (open by default) | Free delivery on orders over R500 |
| Returns | Delivery & Returns accordion (open by default) | 30-day easy returns |
| Country of origin | Badge | South Africa |

### 2.3 Metafields — The Source of Truth

All product data flows from these metafields (defined in the [product upload guide](./product-upload-seo-guide.md)):

| Metafield | Used In | AI-Relevant |
|---|---|---|
| `custom.leather_type` | Badge, structured data | Yes — material identification |
| `custom.material` | Accordion, structured data | Yes — material composition |
| `custom.belt_width` | Badge, structured data | Yes — size attribute |
| `custom.buckle_material` | Structured data | Yes — product detail |
| `custom.ideal_for` | Tag badges near price | Yes — use case |
| `custom.care_instructions` | Accordion | Yes — product maintenance |
| `custom.size_guide_note` | Accordion | Yes — sizing help |
| `custom.delivery_note` | Accordion | Yes — shipping policy |
| `custom.return_note` | Accordion | Yes — return policy |
| `custom.seo_keywords` | Meta keywords tag | Yes — semantic relevance |
| `custom.product_highlights` | Bullet list near price | Yes — key features |
| `custom.country_of_origin` | Badge, structured data | Yes — origin indication |
| `custom.reviews_rating` | Structured data | Yes — social proof |
| `custom.reviews_count` | Structured data | Yes — social proof |
| `custom.return_policy_days` | Structured data | Yes — return policy |

### 2.4 Collection Pages — AI Context

Collection pages also feed AI understanding. Each collection page must include:

- A unique `<h1>` (the collection title)
- A collection description (2–3 sentences with relevant keywords)
- Breadcrumb navigation (already implemented)
- CollectionPage structured data (already implemented)
- Product cards with visible prices, vendors, and badges

---

## 3. Guide Pages

Guide pages are the highest-leverage content for AI visibility. AI systems frequently cite buying guides, how-to articles, and comparison posts in their answers.

### 3.1 Guide Topics

Create these guide pages as standard Shopify pages or blog articles:

| # | Title | Target Keyword | Why |
|---|---|---|---|
| 1 | Genuine Leather vs Full-Grain Leather: What's the Difference? | genuine leather vs full-grain leather | High-intent comparison query |
| 2 | How to Choose the Right Belt Size | how to choose belt size | Practical sizing help, reduces returns |
| 3 | Black vs Brown Leather Belts: Which One Should You Choose? | black vs brown belt | Style advice, drives product discovery |
| 4 | Best Men's Leather Belts for Work and Everyday Wear | best leather belts for work | Commercial intent, category link |
| 5 | How to Care for a Leather Belt | how to care for leather belt | After-purchase care, builds authority |
| 6 | Formal vs Casual Belts: Simple Style Guide | formal vs casual belt | Style education, collection linking |
| 7 | Leather Belt Gift Guide South Africa | leather belt gift guide | Seasonal traffic, gift intent |

### 3.2 Guide Page Template

Each guide must follow this structure:

```
Title (H1)
──────────
Opening paragraph — answers the question directly in 2–3 sentences.

Section 1 (H2) — Core explanation
Clear, factual breakdown of the topic.

Section 2 (H2) — Detailed comparison or steps
Tables or bullet points where helpful.

Section 3 (H2) — How this applies to TheBeltCo
Natural mention of what TheBeltCo offers — not a hard sell.

Section 4 (H2) — FAQ (3–5 questions)
Real questions customers ask.

Internal links (scattered naturally throughout):
  → 1 relevant collection
  → 1 related guide
  → 1 product or best-seller section

CTA (optional, soft):
  "Browse our full-grain leather belt collection →"
```

### 3.3 Guide Content Rules

- **Answer the question immediately** — first paragraph must give the direct answer
- **No fluff** — every paragraph serves a purpose
- **Cite facts** — if stating a claim, back it up (e.g., "Full-grain leather lasts 5–10 years with proper care")
- **Link naturally** — links should feel helpful, not forced
- **No fake claims** — never say "best in South Africa" or "world's finest" without proof
- **Read aloud test** — if a paragraph sounds robotic or AI-generated, rewrite it
- **Voice** — conversational, helpful, authoritative. Not salesy, not academic
- **Length** — 800–1500 words per guide
- **Formatting** — short paragraphs (2–4 sentences), bullet points where helpful, bold for key terms

### 3.4 Example — Guide 1 Opening

> **Genuine Leather vs Full-Grain Leather: What's the Difference?**
>
> Full-grain leather and genuine leather are not the same thing — and the difference matters when you're buying a belt you want to last. Full-grain is the highest quality leather available, made from the top layer of the hide with all natural grain intact. Genuine leather is a lower grade, made from the layers beneath after the top grain is split off.
>
> If you want a belt that develops a natural patina over time and lasts for years, choose full-grain. If you're on a tighter budget and need something that looks fine for occasional wear, genuine leather can work — but it won't age the same way.

### 3.5 FAQ Section Requirements

Each guide must include an FAQ section with 3–5 real-world questions. These FAQs serve dual purposes:

1. They capture "People also ask" snippets in Google
2. AI systems extract them directly for featured answers

Format:

```
## FAQ

**Q: Can I wear a full-grain leather belt with a suit?**
A: Yes — full-grain leather belts work with suits, chinos, jeans, and casual trousers. Choose a 35mm width for formal wear and 37mm for casual.

**Q: How do I know what size belt to order?**
A: Measure a belt you already own from the buckle edge to the hole you use most. Alternatively, measure your waist where you wear your belt and add 2 inches (about 5cm).

**Q: How long does a full-grain leather belt last?**
A: With proper care, a full-grain leather belt can last 10 years or more. Condition it every 2–3 months and avoid prolonged exposure to water.
```

---

## 4. Internal Linking Strategy

### 4.1 Minimum Links Per Guide

Every guide page must link to at least:

| Link Type | Example |
|---|---|
| 1 relevant collection | `/collections/mens-leather-belts` |
| 1 related guide | `/blogs/guides/how-to-choose-belt-size` |
| 1 product or best-seller section | `/collections/best-sellers` or a specific product |

### 4.2 Link Placement Rules

- Links must be **contextual** — in the middle of a relevant paragraph, not stacked at the bottom
- Link text must be **descriptive** — use "browse our collection of full-grain leather belts" not "click here"
- Do not link to the same page twice
- Do not use exact-match anchor text more than once per page (looks spammy)
- Links to collections are preferred over links to individual products (keeps navigation flexible)

### 4.3 Site-Wide Linking Architecture

```
Homepage
  ├── Collection: Men's Leather Belts
  │     ├── Product: Classic Brown
  │     ├── Product: Classic Black
  │     └── Guide: How to Choose Belt Size
  ├── Collection: Women's Leather Belts
  ├── Collection: Best Sellers
  ├── Guide: Genuine Leather vs Full-Grain
  │     ├── Link to: Men's Leather Belts collection
  │     ├── Link to: Guide: How to Care for Leather Belt
  │     └── Link to: Best Sellers
  ├── Guide: How to Choose Belt Size
  │     ├── Link to: Men's Leather Belts collection
  │     ├── Link to: Guide: Formal vs Casual Belts
  │     └── Link to: Best Sellers
  ├── Guide: Black vs Brown Leather Belts
  │     ├── Link to: Men's Leather Belts collection
  │     ├── Link to: Guide: Formal vs Casual Belts
  │     └── Link to: Classic Brown product page
  ├── Guide: Best Belts for Work
  │     ├── Link to: Men's Leather Belts collection
  │     ├── Link to: Guide: Black vs Brown Belts
  │     └── Link to: Best Sellers
  ├── Guide: How to Care for Leather Belt
  │     ├── Link to: Men's Leather Belts collection
  │     ├── Link to: Guide: Genuine Leather vs Full-Grain
  │     └── Link to: Leather Care product accordion
  ├── Guide: Formal vs Casual Belts
  │     ├── Link to: Men's Leather Belts collection
  │     ├── Link to: Guide: How to Choose Belt Size
  │     └── Link to: Best Sellers
  └── Guide: Leather Belt Gift Guide SA
        ├── Link to: Best Sellers collection
        ├── Link to: Guide: Black vs Brown Belts
        └── Link to: Gift Card product
```

### 4.4 Product Page Internal Links

Each product page already links to:
- Breadcrumb back to collection
- Related products (via `related-products` section)
- Recently viewed products (via `recently-viewed` section)
- Accordion links to care guide and size guide (via metafield content)

To strengthen this further, add a soft link in the product description where relevant:
> "Pair this belt with your favourite chinos for a smart-casual look. Browse our full collection of men's leather belts."

### 4.5 Collection Page Internal Links

Each collection page already links to:
- Breadcrumb back to home
- Product cards linking to individual products
- Sort and filter controls

Add a content section below the product grid on key collections linking to relevant guides:
> "Not sure which size to order? Read our guide on how to choose the right belt size."

---

## 5. Authority Plan

AI systems weigh domain authority and real-world mentions heavily. Here's how to build both.

### 5.1 Local South African Fashion & Lifestyle Blogs

Target these blogs for product reviews, features, or guest posts:

| Publication | Type | Approach |
|---|---|---|
| GQ South Africa | Men's fashion magazine | Product review / gift guide inclusion |
| Men's Health SA | Men's lifestyle | Feature in "Best Leather Belts" roundup |
| Evening Post (Eastern Cape) | Local news | Small business feature (if based there) |
| Getaway Magazine | Travel / lifestyle | "What to pack" feature |
| SA Fashion Week blog | Fashion industry | New collection announcement |
| 2OceansVibe | Cape Town lifestyle | Local brand feature |
| The Way of Men | Men's style blog | Guest post on belt care or style guide |
| SA Men's Style Blog | Local men's fashion | Product review request |

**Action plan:**
1. Compile a media list with contact details
2. Prepare a press/sample kit (product photos, brand story, sample product)
3. Reach out with a specific pitch (not a generic "review our product")
4. Offer free samples for honest reviews
5. Link back from TheBeltCo blog when published

### 5.2 Gift Guides

Gift guides are a reliable source of seasonal backlinks.

| Season | Guide Pitch | Deadline |
|---|---|---|
| Father's Day (June) | "Best leather belt gifts for dad" | Submit by April |
| Christmas (December) | "Stocking stuffers / gifts under R500" | Submit by October |
| Valentine's Day (February) | "Thoughtful leather gifts for him" | Submit by January |
| Wedding season (September–March) | "Groomsmen gift ideas" | Submit year-round |

### 5.3 Local Business Directories

These are low-effort, high-value citations that strengthen local SEO and AI trust:

| Directory | URL |
|---|---|
| Google Business Profile | https://business.google.com |
| Yelp South Africa | https://www.yelp.co.za |
| HelloPeter | https://www.hellopeter.com |
| SA Business Directory | https://www.sabusinessdirectory.co.za |
| SA Online | https://www.southafricanbusiness.co.za |
| Brabys | https://www.brabys.com |
| Cylex SA | https://www.cylex.co.za |
| Africa Pages | https://www.africapages.com |

**Action plan:**
1. List the business on all directories with consistent NAP (Name, Address, Phone)
2. Use the exact same business description on each
3. Add product categories and website URL
4. Monitor for customer reviews and respond

### 5.4 Google Business Profile

- Complete every field: hours, phone, website, categories, attributes
- Add product feed (GBP supports product listings)
- Post regularly: new products, blog articles, behind-the-scenes
- Respond to every review within 48 hours
- Use GBP Q&A to answer common questions (these feed into AI answers)

### 5.5 Social Media Posts

Each blog/guide page should be promoted with a social post:

| Platform | Post Type | Frequency |
|---|---|---|
| Instagram | Carousel with key tips from the guide | 1x per guide |
| Facebook | Link post with question hook | 1x per guide |
| TikTok | 30–60 second tip from the guide | 1x per guide |
| LinkedIn (personal) | Thought-leadership post | 1x per guide |

Social signals don't directly impact SEO, but they drive traffic, which drives engagement, which drives SEO.

### 5.6 Customer Reviews

Real customer reviews are one of the strongest trust signals for both search engines and AI systems.

- Send review request emails 7 days after delivery
- Respond to every review — positive and negative
- Use a review app that supports structured data (schema markup)
- Display review count and average rating on product pages
- Never fabricate reviews — Google penalises fake reviews

### 5.7 TheBeltCo.com as an Authority Site

Build the site itself into an authority resource:

| Tactic | Output |
|---|---|
| Publish 1 new guide every month | 12 guides per year |
| Update each guide annually | Keep facts current |
| Link guides together | Build topic clusters |
| Answer real customer questions in guides | Target long-tail queries |
| Include a "fact-checked" date on guides | Build trust |
| Cite external sources where relevant | Show research |

---

## 6. Anti-Spam & Quality Guidelines

### 6.1 Never Do These

- ❌ AI-generated blog posts without human editing
- ❌ Pages with no real value (thin content)
- ❌ Keyword stuffing in titles, descriptions, or body text
- ❌ Exact-match anchor text on every link
- ❌ Buying backlinks from link farms or PBNs
- ❌ Duplicate product descriptions (even within the same collection)
- ❌ Fake reviews or fake ratings
- ❌ Pages targeting AI systems instead of humans
- ❌ Excessive internal links on a single page
- ❌ Links to irrelevant products or collections

### 6.2 Always Do These

- ✅ Write for humans first, search engines second
- ✅ Answer the question in the first paragraph
- ✅ Use plain language — no jargon, no fluff
- ✅ Link where it helps the reader, not to inflate link count
- ✅ Give each guide a unique angle and purpose
- ✅ Fact-check every claim
- ✅ Cite sources when making specific claims (e.g., "full-grain leather lasts 10+ years")
- ✅ Update old guides instead of creating new duplicates
- ✅ Use descriptive, natural anchor text
- ✅ Keep paragraphs short and scannable

### 6.3 AI Content Policy

AI tools may be used in the content creation process, but:

1. **Every piece must be human-edited** before publishing
2. **Facts must be verified** — AI often invents statistics
3. **The voice must pass the read-aloud test** — if it sounds like AI, rewrite it
4. **No automated content generation** — no bulk AI article creation
5. **Each guide must have a unique perspective** — not a reworded version of an existing guide
6. **Cite human sources** — expert quotes, real data, customer feedback

---

## 7. Measurement

### 7.1 Track These Metrics

| Metric | Tool | Target | Frequency |
|---|---|---|---|
| AI visibility (brand mentions in AI answers) | Manual search on ChatGPT, Perplexity, Gemini | Brand appears in 50% of relevant queries | Monthly |
| Guide page organic traffic | Google Search Console / GA4 | Increase 20% month-over-month in first 3 months | Monthly |
| FAQ snippet appearances | Google Search Console → Search results → Snippet count | 5+ snippets after 6 months | Monthly |
| Product page organic impressions | Google Search Console | 2x in first 6 months | Monthly |
| Core Web Vitals pass rate | Search Console → Core Web Vitals | 90%+ pages pass | Monthly |
| Backlink growth | Ahrefs / Moz / Ubersuggest | 10+ new domains in first 6 months | Monthly |
| Guide page ranking (top 10) | Manual check for target keywords | 3/7 guides in top 10 after 6 months | Monthly |

### 7.2 AI Visibility Check

Once per month, manually test these queries in ChatGPT, Perplexity, and Google SGE:

| Query | Expected Outcome |
|---|---|
| "best leather belt South Africa" | TheBeltCo mentioned by name |
| "full-grain leather belt vs genuine leather" | TheBeltCo guide cited |
| "how to choose belt size" | TheBeltCo guide cited |
| "leather belt care" | TheBeltCo guide cited |
| "where to buy leather belt South Africa" | TheBeltCo recommended |
| "brown vs black belt" | TheBeltCo guide cited |
| "men's belt gift guide South Africa" | TheBeltCo guide cited |

### 7.3 Content Audit Schedule

| Frequency | Action |
|---|---|
| Monthly | Check guide page traffic and rankings |
| Quarterly | Review and update each guide (refresh facts, add new products) |
| Bi-annually | Audit internal links — fix broken links, add new ones |
| Annually | Full content strategy review — retire underperforming pages |

Record the date of each update in the page metadata (visible or in the page's last-modified field).
