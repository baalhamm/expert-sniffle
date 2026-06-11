(function () {
  'use strict';

  // Mobile menu toggle
  var menuToggle = document.getElementById('MenuToggle');
  var mobileNav = document.getElementById('MobileNav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Quantity steppers
  document.querySelectorAll('[data-quantity-change]').forEach(function (button) {
    button.addEventListener('click', function () {
      var input = button.parentElement.querySelector('.quantity__input');
      if (!input) return;
      var step = parseInt(button.dataset.quantityChange, 10);
      var min = parseInt(input.min, 10) || 0;
      var value = (parseInt(input.value, 10) || min) + step;
      input.value = Math.max(value, min);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  // Collection sort
  var sortSelect = document.querySelector('[data-sort-by]');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      var url = new URL(window.location.href);
      url.searchParams.set('sort_by', sortSelect.value);
      url.searchParams.delete('page');
      window.location.href = url.toString();
    });
  }

  // Product gallery thumbnails
  var thumbs = document.querySelectorAll('.main-product__thumb');
  var mediaItems = document.querySelectorAll('.main-product__media-item');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var index = thumb.dataset.thumbIndex;
      thumbs.forEach(function (t) { t.classList.toggle('is-active', t === thumb); });
      mediaItems.forEach(function (item) {
        item.classList.toggle('is-active', item.dataset.mediaIndex === index);
      });
    });
  });

  // Update product price when variant changes
  var variantSelect = document.getElementById('ProductVariantSelect');
  if (variantSelect) {
    variantSelect.addEventListener('change', function () {
      var option = variantSelect.options[variantSelect.selectedIndex];
      var priceEl = document.getElementById('ProductPrice');
      var parts = option.text.split('—');
      if (priceEl && parts.length > 1) {
        priceEl.innerHTML = '<span class="price">' + parts[parts.length - 1].replace('(sold out)', '').trim() + '</span>';
      }
      var addButton = document.querySelector('.main-product__form [name="add"]');
      if (addButton) {
        var soldOut = option.disabled || option.text.indexOf('(sold out)') !== -1;
        addButton.disabled = soldOut;
        addButton.textContent = soldOut ? 'Sold out' : 'Add to cart';
      }
    });
  }
})();
