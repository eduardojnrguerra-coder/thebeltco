# Upload to Shopify — Final Checklist

## 1. GitHub Repo Setup
- [ ] Create a new GitHub repo (private recommended)
- [ ] Push the theme code to a `main` or `production` branch
- [ ] Do NOT commit `.env` or `config/settings_data.json` if it contains secrets
- [ ] Add a `.gitignore` excluding `node_modules/`, `.DS_Store`, `*.log`

## 2. Shopify GitHub Connection
- [ ] Go to Online Store → Themes → Add theme → Connect from GitHub
- [ ] Select the repo and branch
- [ ] Wait for the first build/deploy
- [ ] Verify the theme appears in your theme list

## 3. ZIP Upload Fallback
- [ ] If GitHub connection fails, download the theme as ZIP
- [ ] Go to Online Store → Themes → Add theme → Upload zip file
- [ ] Upload the ZIP with all files except `node_modules/`, `.git/`

## 4. Theme Preview Testing
- [ ] Publish theme to a preview or test store
- [ ] Check homepage: hero, badges, collections, testimonials, FAQ, CTA
- [ ] Check product page: gallery, form, accordions, sticky ATC
- [ ] Check collection page: image, filters, sorting, grid, SEO content, links
- [ ] Check cart: line items, quantity, summary, drawer
- [ ] Check article/blog pages
- [ ] Check search, 404, account pages
- [ ] Test mobile responsive layout
- [ ] Test cart drawer open/close
- [ ] Test quick add on collection cards
- [ ] Test variant selection and price updates

## 5. Product Setup Checklist
- [ ] Add metafields: `custom.leather_type`, `custom.belt_width`, `custom.country_of_origin`
- [ ] Add metafields: `custom.material`, `custom.care_instructions`, `custom.size_guide_note`
- [ ] Add metafields: `custom.delivery_note`, `custom.return_note`
- [ ] Add metafields: `custom.reviews_rating`, `custom.reviews_count`
- [ ] Add metafields: `custom.color`, `custom.buckle_material`
- [ ] Add metafields: `custom.return_policy_days`, `custom.shipping_details`
- [ ] Add metafields: `custom.related_products` (product list)
- [ ] Set product SKU, vendor, collections
- [ ] Upload high-quality product images (min 1000px)
- [ ] Write unique product descriptions with keywords
- [ ] Set compare-at prices for sale items
- [ ] Verify structured data renders on product page (Google Rich Results Test)

## 6. Collection Setup Checklist
- [ ] Create collections with SEO descriptions
- [ ] Add collection images
- [ ] Configure collection-related blocks if needed
- [ ] Add collection-content SEO text and FAQ blocks
- [ ] Add collection-links with valid URLs (not empty)
- [ ] Set collection sort order and filterable options

## 7. Search Console Setup
- [ ] Verify domain ownership in Google Search Console
- [ ] Submit sitemap.xml (Shopify generates automatically)
- [ ] Check for crawl errors after launch
- [ ] Monitor index coverage

## 8. Google Merchant Center Setup
- [ ] Create Google Merchant Center account
- [ ] Verify and claim website URL
- [ ] Set up shipping settings (rates for South Africa)
- [ ] Set up tax settings (ZA VAT)
- [ ] Create product feed (Shopify Google & YouTube app)
- [ ] Submit feed and fix any disapproval issues

## 9. Analytics Setup
- [ ] Set up Google Analytics 4 property
- [ ] Add GA4 measurement ID to Shopify → Online Store → Preferences
- [ ] Set up Google Ads conversion tracking
- [ ] Enable Shopify analytics for native reporting
- [ ] Check ecommerce events fire correctly

## 10. Final Publish Checklist
- [ ] Run `shopify theme check --verbose` and fix all errors
- [ ] Run `shopify theme check --auto-correct` if available
- [ ] Test checkout flow end-to-end with test order
- [ ] Verify email notifications (order confirmation, shipping)
- [ ] Check all links on homepage, footer, header
- [ ] Review robots.txt.liquid for correct directives
- [ ] Verify favicon appears
- [ ] Check social meta tags render correctly (Facebook Sharing Debugger)
- [ ] Verify structured data (Schema.org) for: Product, Organization, BreadcrumbList, Article, FAQ, CollectionPage, Blog, WebPage, WebSite
- [ ] Remove any placeholder content or debug output
- [ ] Set theme as published (not just preview)
- [ ] Monitor first 24 hours for errors
