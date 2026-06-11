# Blue Diamond — Shopify Theme for Blue Diamond Co

A custom Shopify Online Store 2.0 theme with a dark, luxury jewellery aesthetic
(inspired by high-end jewellers such as A Jewellers): near-black canvas,
ice-blue "diamond" accent, serif display headings, and image-led merchandising.

## What's included

| Area | Details |
| --- | --- |
| Homepage | Hero banner, shop-by-category grid, featured collection, brand story, testimonials, newsletter signup |
| Shop | Collection pages with sorting + pagination, collections index, product pages with gallery, variants, quantity, dynamic checkout, collapsible details |
| Commerce | Cart page with order notes, search, contact form, blog/articles, 404 |
| Theming | All colors, fonts, logo, menus, and section content editable in the Shopify theme editor (no code changes needed) |

## Installing the theme

### Option A — Shopify CLI (recommended)

```sh
npm install -g @shopify/cli
git clone https://github.com/baalhamm/expert-sniffle.git
cd expert-sniffle

# Live development preview against your store
shopify theme dev --store your-store.myshopify.com

# Upload to your store as an unpublished theme
shopify theme push --unpublished
```

Then publish it from **Online Store → Themes** in your Shopify admin.

### Option B — Zip upload

1. Zip the theme folders (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`).
2. In Shopify admin go to **Online Store → Themes → Add theme → Upload zip file**.

## Store setup checklist

After installing, do the following in Shopify admin:

1. **Store name** — set to "Blue Diamond Co" under Settings → Store details
   (the theme renders `shop.name` in the header/footer).
2. **Collections** — create collections such as *Rings*, *Pendants & Necklaces*,
   *Bracelets*, *Earrings*, *Watches*, *New Arrivals*, each with a featured image.
3. **Menus** (Online Store → Navigation):
   - `main-menu` — Rings, Necklaces, Bracelets, Watches, Contact, etc.
   - A second menu (e.g. *Customer care*) to assign to the footer.
4. **Theme editor** — open Customize and:
   - Upload a logo and hero image, and pick the collections for the
     "Shop by category" and "Featured collection" sections.
   - Adjust colors/fonts under Theme settings if desired (defaults are
     dark + ice blue with Playfair Display headings).
5. **Pages** — create a *Contact* page and assign the `page.contact` template.
6. **Products** — add products with at least two images each (the product
   cards show the second image on hover).

## Theme structure

```
assets/       base.css, global.js
config/       settings_schema.json (theme settings), settings_data.json
layout/       theme.liquid (HTML shell)
locales/      en.default.json
sections/     header, footer, hero, featured-collection, collection-list,
              image-with-text, testimonials, newsletter, main-* page sections
snippets/     product-card, price, pagination
templates/    JSON templates (index, product, collection, cart, search, ...)
```

Notes:
- Customer account pages use Shopify's hosted "new customer accounts", so no
  `customers/` templates are required.
- If you sell gift cards, add a `templates/gift_card.liquid` before enabling them.
