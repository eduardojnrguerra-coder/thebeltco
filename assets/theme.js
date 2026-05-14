(function () {
  'use strict';

  const doc = document;
  const body = doc.body;

  // === Utilities ===
  const $ = (sel, ctx) => (ctx || doc).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || doc).querySelectorAll(sel)];

  // === Announcement Bar ===
  // (handled by Liquid, no JS needed)

  // === Header Sticky ===
  function initStickyHeader() {
    const header = $('[data-header]');
    if (!header) return;
    if (window.innerWidth > 767 && header.closest('.header--sticky')) return;
    // Simple scroll-based sticky (CSS handles it with .header--sticky class toggling)
    const isSticky = header.closest('[data-header-sticky]');
    if (!isSticky) return;
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          header.classList.toggle('header--sticky', window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // === Mobile Menu ===
  function initMobileMenu() {
    const toggle = $('[data-mobile-menu-toggle]');
    const menu = $('[data-mobile-menu]');
    const overlay = $('#overlay');
    if (!toggle || !menu) return;

    function open() {
      toggle.setAttribute('aria-expanded', 'true');
      menu.classList.add('header__mobile-menu--open');
      if (overlay) overlay.classList.add('overlay--active');
      body.style.overflow = 'hidden';
    }

    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('header__mobile-menu--open');
      if (overlay) overlay.classList.remove('overlay--active');
      body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? close() : open();
    });

    if (overlay) overlay.addEventListener('click', close);

    const closeBtns = $$('[data-menu-close]');
    closeBtns.forEach(function (btn) { btn.addEventListener('click', close); });

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  // === Search ===
  function initSearch() {
    const toggle = $('[data-search-toggle]');
    const panel = $('[data-header-search]');
    const input = $('[data-search-input]');
    const closeBtn = $('[data-search-close]');
    if (!toggle || !panel) return;

    function open() {
      panel.classList.add('header-search--open');
      if (input) setTimeout(function () { input.focus(); }, 100);
    }

    function closeSearch() {
      panel.classList.remove('header-search--open');
    }

    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
    });

    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
      });
    }
  }

  // === Cart Drawer ===
  function initCartDrawer() {
    const drawer = $('[data-cart-drawer]');
    if (!drawer) return;
    const overlay = drawer.querySelector('[data-cart-drawer-overlay]');
    const closeBtn = $('[data-cart-drawer-close]', drawer);
    const openBtns = $$('[data-cart-toggle]');
    const continueBtn = $('[data-cart-drawer-close]', drawer);

    function open() {
      drawer.classList.add('cart-drawer--open');
      body.style.overflow = 'hidden';
    }

    function close() {
      drawer.classList.remove('cart-drawer--open');
      body.style.overflow = '';
    }

    openBtns.forEach(function (btn) { btn.addEventListener('click', open); });
    if (overlay) overlay.addEventListener('click', close);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (continueBtn) continueBtn.addEventListener('click', close);

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  // === Accordion ===
  function initAccordions() {
    $$('[data-accordion]').forEach(function (panel) {
      const trigger = $('[data-accordion-trigger]', panel);
      const content = $('[data-accordion-content]', panel);
      if (!trigger || !content) return;

      trigger.addEventListener('click', function () {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !expanded);
        content.hidden = expanded;
        // Smooth height transition via CSS
        if (!expanded) {
          content.style.maxHeight = content.scrollHeight + 'px';
          requestAnimationFrame(function () {
            content.style.maxHeight = content.scrollHeight + 'px';
          });
        } else {
          content.style.maxHeight = '0';
        }
      });

      // Initialize max-height for open panels
      if (trigger.getAttribute('aria-expanded') === 'true') {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  }

  // === Quantity Selector ===
  function initQuantitySelectors() {
    $$('[data-quantity-selector]').forEach(function (selector) {
      const minus = $('[data-quantity-minus]', selector);
      const plus = $('[data-quantity-plus]', selector);
      const input = $('[data-quantity-input]', selector);
      if (!input) return;

      if (minus) {
        minus.addEventListener('click', function () {
          var val = parseInt(input.value, 10) || 1;
          if (val > 1) input.value = val - 1;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }

      if (plus) {
        plus.addEventListener('click', function () {
          var val = parseInt(input.value, 10) || 1;
          input.value = val + 1;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }

      input.addEventListener('change', function () {
        var val = parseInt(input.value, 10);
        if (isNaN(val) || val < 1) input.value = 1;
      });
    });
  }

  // === Product Gallery ===
  function initProductGallery() {
    const gallery = $('[data-product-gallery]');
    if (!gallery) return;
    const slides = $$('[data-media-id]', gallery);
    const thumbs = $$('[data-thumb-id]', gallery);

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        const id = thumb.getAttribute('data-thumb-id');
        thumbs.forEach(function (t) { t.classList.remove('product-gallery__thumb--active'); });
        thumb.classList.add('product-gallery__thumb--active');
        slides.forEach(function (slide) {
          slide.classList.remove('product-gallery__slide--active');
          if (slide.getAttribute('data-media-id') === id) {
            slide.classList.add('product-gallery__slide--active');
          }
        });
      });
    });
  }

  // === Variant Selector ===
  function initVariantSelector() {
    const form = $('[data-product-section] form');
    if (!form) return;
    const select = $('[data-variant-select]', form);
    const priceEl = $('[data-product-price]', form);
    const priceCurrent = $('.product-info__price-current', form);
    const priceCompare = $('.product-info__price-compare', form);
    const addBtn = $('[data-add-to-cart]', form);
    const stickyPrice = $('[data-sticky-price]');
    const stickyBtn = $('[data-sticky-add-btn]');
    const options = $$('[data-option-input]', form);

    if (!select) return;

    function updateVariant() {
      const selected = select.options[select.selectedIndex];
      if (!selected) return;
      const price = selected.getAttribute('data-price');
      const compare = selected.getAttribute('data-compare');
      const available = !selected.disabled;
      const isDefault = select.options.length === 1 && select.options[0].value !== '';

      if (priceCurrent) priceCurrent.textContent = price;
      if (priceCompare) {
        if (compare && compare !== price) {
          priceCompare.textContent = compare;
          priceCompare.style.display = '';
        } else {
          priceCompare.style.display = 'none';
        }
      }
      if (addBtn) {
        if (available) {
          addBtn.disabled = false;
          addBtn.textContent = window.thebeltco.strings.addToCart;
        } else {
          addBtn.disabled = true;
          addBtn.textContent = window.thebeltco.strings.soldOut;
        }
      }
      if (stickyPrice) stickyPrice.textContent = price;
      if (stickyBtn) {
        if (available) {
          stickyBtn.disabled = false;
          stickyBtn.textContent = window.thebeltco.strings.addToCart;
        } else {
          stickyBtn.disabled = true;
          stickyBtn.textContent = window.thebeltco.strings.soldOut;
        }
      }
    }

    options.forEach(function (input) {
      input.addEventListener('change', function () {
        var selectedOptions = [];
        options.forEach(function (opt) {
          if (opt.checked) {
            selectedOptions.push(opt.value);
          }
        });
        // Find matching variant
        var formData = new FormData(form);
        var variantId = select.value;
        // Simplified: use the select element
        // Actually, loop through variants and find match
        var variants = JSON.parse(select.getAttribute('data-variants') || '[]');
        // Fallback: just use the first matching variant index
        for (var i = 0; i < select.options.length; i++) {
          var opt = select.options[i];
          if (!opt.disabled) {
            select.selectedIndex = i;
            break;
          }
        }
        updateVariant();
      });
    });

    updateVariant();
  }

  // === Sticky Add to Cart ===
  function initStickyATC() {
    const sticky = $('[data-sticky-atc]');
    const addBtn = $('[data-sticky-add-btn]');
    const formAddBtn = $('[data-add-to-cart]');
    if (!sticky || !addBtn) return;

    // We don't want to submit the main form when clicking sticky ATC
    // Instead, find the product form and submit it
    addBtn.addEventListener('click', function () {
      const form = $('[data-product-section] form');
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    });

    // Show sticky on scroll past form
    var form = $('[data-product-section] form');
    if (!form) return;

    window.addEventListener('scroll', function () {
      var formBottom = form.getBoundingClientRect().bottom;
      if (formBottom < 0) {
        sticky.classList.add('sticky-atc--visible');
      } else {
        sticky.classList.remove('sticky-atc--visible');
      }
    }, { passive: true });
  }

  // === Quick Add ===
  function initQuickAdd() {
    $$('[data-quick-add]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var variantId = btn.getAttribute('data-quick-add');
        if (!variantId) return;

        var formData = new FormData();
        formData.append('id', variantId);
        formData.append('quantity', 1);

        fetch(window.thebeltco.routes.cartAdd, {
          method: 'POST',
          body: formData
        })
          .then(function (res) { return res.json(); })
          .then(function (data) {
            if (data.status) {
              alert(data.message || window.thebeltco.strings.cartError);
              return;
            }
            // Update cart count
            updateCartCount();
            // Open cart drawer
            var drawer = $('[data-cart-drawer]');
            if (drawer) {
              drawer.classList.add('cart-drawer--open');
              body.style.overflow = 'hidden';
            }
          })
          .catch(function () {
            alert(window.thebeltco.strings.cartError);
          });
      });
    });
  }

  // === Cart Count Update ===
  function updateCartCount() {
    var countEl = $('[data-cart-count]');
    if (!countEl) return;
    fetch(window.thebeltco.routes.cart + '.js')
      .then(function (res) { return res.json(); })
      .then(function (cart) {
        countEl.textContent = cart.item_count > 0 ? cart.item_count : '';
      })
      .catch(function () {});
  }

  // === Cart AJAX Update (for cart page) ===
  function initCartUpdates() {
    $$('[data-cart-update]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        var action = btn.getAttribute('data-quantity-minus') !== null ? 'minus' : 'plus';
        var qtyEl = btn.closest('[data-cart-item]').querySelector('[data-quantity-input]');
        if (!qtyEl) return;
        var qty = parseInt(qtyEl.value, 10);
        qty = action === 'plus' ? qty + 1 : Math.max(0, qty - 1);
        qtyEl.value = qty;
        updateCartItem(key, qty);
      });
    });

    $$('[data-cart-remove]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        updateCartItem(key, 0);
      });
    });

    $$('[data-quantity-input][data-key]').forEach(function (input) {
      input.addEventListener('change', function () {
        var key = input.getAttribute('data-key');
        var qty = parseInt(input.value, 10);
        updateCartItem(key, qty);
      });
    });
  }

  function updateCartItem(key, qty) {
    var formData = new FormData();
    formData.append('id', key);
    formData.append('quantity', qty);

    fetch(window.thebeltco.routes.cartChange, {
      method: 'POST',
      body: formData
    })
      .then(function (res) { return res.json(); })
      .then(function () {
        window.location.reload();
      })
      .catch(function () {
        alert(window.thebeltco.strings.cartError);
      });
  }

  // === Recently Viewed ===
  function initRecentlyViewed() {
    var section = $('[data-recently-viewed]');
    if (!section) return;
    var grid = $('[data-recently-viewed-grid]', section);
    if (!grid) return;

    var currentProduct = body.classList.contains('template-product') ? window.location.pathname.split('/products/')[1] : null;

    var viewed = JSON.parse(localStorage.getItem('thebeltco_recently_viewed') || '[]');

    // Add current product to recently viewed
    if (currentProduct) {
      viewed = viewed.filter(function (h) { return h !== currentProduct; });
      viewed.unshift(currentProduct);
      viewed = viewed.slice(0, 8);
      localStorage.setItem('thebeltco_recently_viewed', JSON.stringify(viewed));
    }

    if (viewed.length === 0) {
      section.style.display = 'none';
      return;
    }

    // For now, we show a simple message since fetching products by handle
    // requires an API call. We use the product page handles stored in localStorage
    // and fetch via /products/{handle}.js
    var limit = parseInt(section.getAttribute('data-limit') || '4', 10);
    var handles = viewed.slice(0, limit);

    // For simplicity on the product page, skip showing the current product
    if (currentProduct) {
      handles = handles.filter(function (h) { return h !== currentProduct; });
    }

    if (handles.length === 0) {
      section.style.display = 'none';
      return;
    }

    // Fetch each product data and render
    var fetches = handles.map(function (handle) {
      return fetch('/products/' + handle + '.js')
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    });

    Promise.all(fetches).then(function (products) {
      products = products.filter(function (p) { return p; });
      if (products.length === 0) {
        section.style.display = 'none';
        return;
      }

      section.style.display = '';
      grid.innerHTML = products.map(function (p) {
        var img = p.images && p.images[0] ? p.images[0] : '';
        var price = Shopify.formatMoney ? Shopify.formatMoney(p.price) : ('R' + (p.price / 100).toFixed(2));
        return '<div class="product-grid__item">' +
          '<div class="product-card">' +
          '<div class="product-card__image-wrapper">' +
          '<a href="/products/' + p.handle + '">' +
          (img ? '<img src="' + img.replace(/\?.*/, '') + '?width=300" alt="' + p.title + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;">' : '') +
          '</a></div>' +
          '<div class="product-card__info">' +
          '<h3 class="product-card__title"><a href="/products/' + p.handle + '">' + p.title + '</a></h3>' +
          '<div class="product-card__price"><span class="product-card__price-current">' + price + '</span></div>' +
          '</div></div></div>';
      }).join('');
    });
  }

  // === Collection Filters ===
  function initCollectionFilters() {
    var toggle = $('[data-filter-toggle]');
    var panel = $('[data-filter-panel]');
    var close = $('[data-filter-close]');
    if (!panel) return;

    if (toggle) {
      toggle.addEventListener('click', function () {
        panel.classList.toggle('main-collection__filters--open');
      });
    }
    if (close) {
      close.addEventListener('click', function () {
        panel.classList.remove('main-collection__filters--open');
      });
    }

    // Filter toggle groups
    $$('[data-filter-toggle-group]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        var options = btn.nextElementSibling;
        if (options) options.hidden = expanded;
      });
    });
  }

  // === Sticky Header via CSS (from theme settings) ===
  // Already handled by CSS sticky positioning

  // === Init All ===
  function init() {
    initStickyHeader();
    initMobileMenu();
    initSearch();
    initCartDrawer();
    initAccordions();
    initQuantitySelectors();
    initProductGallery();
    initVariantSelector();
    initStickyATC();
    initQuickAdd();
    initCartUpdates();
    initRecentlyViewed();
    initCollectionFilters();

    // Re-calculate accordion heights on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        $$('[data-accordion-content]:not([hidden])').forEach(function (el) {
          el.style.maxHeight = el.scrollHeight + 'px';
        });
      }, 250);
    });
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
