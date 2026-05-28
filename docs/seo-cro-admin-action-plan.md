# TheBeltCo SEO, CRO, Performance, And QA Admin Plan

This checklist tracks the Shopify Admin work that should not be hard-coded into the theme.

## Shipping

- Confirm the Shopify shipping profile qualifies orders for free delivery at exactly R700 or more.
- Keep customer-facing copy consistent: "Free delivery on orders of R700 or more".
- Update policy pages if Shopify Admin content still uses any non-exact delivery-threshold wording.

## Collections

- Keep `/collections/belts` as the main commercial SEO landing page.
- Confirm `/collections/belts` contains belts only.
- Move leather cream, bags, and accessories into separate collections if they exist.
- Do not use `/collections/all` as the primary navigation target unless it has a clear purpose.
- If `/collections/all` duplicates `/collections/belts`, reduce its SEO importance by avoiding internal links to it and consider a canonical/noindex strategy.

## Navigation And Links

- Main menu should be: Home, Shop Belts, Belt Size Guide, Leather Care Guide, Contact.
- Shop Belts should link to `/collections/belts`.
- Footer menu should include: Delivery & Returns, Leather Care Guide, Belt Size Guide, Privacy Policy, Refund Policy, Terms of Service, Contact.
- Choose one canonical URL for Belt Size Guide and one for Leather Care Guide.
- Add 301 redirects from duplicate guide URLs to the chosen canonical URLs.

## SEO Fields

- Homepage title: Leather Belts South Africa | Genuine Leather & Ratchet Belts | TheBeltCo
- Homepage meta description: Shop durable leather belts in South Africa from TheBeltCo. Genuine leather, everyday styles, ratchet belts, easy sizing, and free delivery on orders of R700 or more.
- Belts collection title: Leather Belts South Africa | Men's Genuine Leather Belts | TheBeltCo
- Belts collection meta description: Browse TheBeltCo leather belts for everyday wear, work, smart casual outfits, and gifting. Durable styles, clear sizing, and delivery across South Africa.
- Product title pattern: `{Product title} | Leather Belt South Africa | TheBeltCo`
- Product meta description pattern: `Shop the {product title} from TheBeltCo. A durable belt for everyday wear with clear sizing, secure checkout, and delivery across South Africa.`

## Product Data

- Use "Size" as the variant option name for belt sizes where possible.
- Fill real product metafields for material, belt width, buckle type, best use, care instructions, delivery note, and returns note.
- Do not add aggregate ratings or review snippets unless they come from a real reviews app or verified review source.
- Add matching leather care and other belt colour cross-sells through related collections or product recommendations.

## Analytics

- Verify GA4 and Google Search Console through Shopify Customer Events, sales channels, or verified Admin integrations.
- Verify Meta Pixel only if it is actively used.
- Do not duplicate tracking snippets in theme code.
- Confirm ecommerce events can track view_item, add_to_cart, begin_checkout, and purchase.

## Content Strategy

- Prepare helpful guides before publishing: belt size guide, leather care guide, ratchet belt vs traditional belt, workwear belt guide, leather belt gift guide, and genuine leather buying guide.
- Each guide should have one H1, clear H2s, real product photos where possible, helpful FAQs, and internal links to relevant products.
- Avoid thin AI content and unsupported claims.

## QA Before Publish

- Test homepage, `/collections/belts`, one top product page, cart, checkout button, search, and WhatsApp on mobile and desktop.
- Confirm the hamburger menu opens, links are clickable, Escape closes it, close button works, cart still opens, search still opens, and no grey overlay blocks clicks.
- Run `shopify theme check --verbose`.
- Run Lighthouse or PageSpeed checks for homepage, `/collections/belts`, and one top product page.
- Validate one product page and one breadcrumb-enabled page with Google Rich Results Test.
