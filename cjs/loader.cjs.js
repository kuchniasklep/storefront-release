'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-b5b9a7c7.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy(JSON.parse("[[\"ks-cart-discount-container.cjs\",[[0,\"ks-cart-discount-container\",{\"codeBanner\":[1,\"code-banner\"],\"codePlaceholder\":[1,\"code-placeholder\"],\"pointsPlaceholder\":[1,\"points-placeholder\"],\"pointsMessage\":[1,\"points-message\"],\"loginMessage\":[1,\"login-message\"],\"infoMessage\":[1,\"info-message\"],\"noPointsHeading\":[1,\"no-points-heading\"],\"noPointsMessage\":[1,\"no-points-message\"],\"thresholdHeading\":[1,\"threshold-heading\"],\"thresholdMessage\":[1,\"threshold-message\"],\"loginUrl\":[1,\"login-url\"],\"loggedIn\":[4,\"logged-in\"],\"disablePoints\":[4,\"disable-points\"],\"pointsForOrder\":[2,\"points-for-order\"],\"productValue\":[2,\"product-value\"],\"points\":[16],\"discount\":[16],\"RemoveDiscount\":[16],\"DiscountCodeAdd\":[16],\"DiscountPointsAdd\":[16],\"DiscountRemove\":[16]}]]],[\"ks-cart-product-container.cjs\",[[0,\"ks-cart-product-container\",{\"productValue\":[2,\"product-value\"],\"productAmount\":[2,\"product-amount\"],\"loadingProducts\":[2,\"loading-products\"],\"totalShippingTime\":[1,\"total-shipping-time\"],\"products\":[16],\"RemoveProduct\":[16],\"ProductCount\":[16]}]]],[\"ks-favourites-header.cjs\",[[0,\"ks-favourites-header\",{\"value\":[1]}]]],[\"ks-product-wide.cjs\",[[4,\"ks-product-wide\",{\"unavailable\":[4],\"name\":[1],\"img\":[1],\"link\":[1],\"currentPrice\":[1,\"current-price\"],\"previousPrice\":[1,\"previous-price\"],\"productId\":[1,\"product-id\"],\"uniqueId\":[1,\"unique-id\"],\"cartLoading\":[32],\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-product-info.cjs\",[[4,\"ks-product-info\",{\"dataId\":[1,\"data-id\"],\"shippingApi\":[1,\"shipping-api\"],\"traitApi\":[1,\"trait-api\"],\"cartApi\":[1,\"cart-api\"],\"cartCountApi\":[1,\"cart-count-api\"],\"favouritesApi\":[1,\"favourites-api\"],\"suggestionApi\":[1,\"suggestion-api\"]},[[0,\"countChange\",\"CountChange\"],[0,\"traitChange\",\"TraitChange\"],[0,\"addToCart\",\"AddToCart\"],[0,\"addToFavourites\",\"AddToFavourites\"]]]]],[\"ks-cart-deal-container.cjs\",[[0,\"ks-cart-deal-container\",{\"productValue\":[2,\"product-value\"],\"productAmount\":[2,\"product-amount\"],\"deals\":[16],\"dealGroups\":[16]}]]],[\"ks-product-images.cjs\",[[0,\"ks-product-images\"]]],[\"ks-cart-select-payment.cjs\",[[0,\"ks-cart-select-payment\",{\"name\":[513],\"valid\":[1540],\"error\":[1540],\"payment\":[16],\"activePayment\":[2,\"active-payment\"],\"PaymentChange\":[16],\"active\":[32],\"toggled\":[32],\"loading\":[32],\"StartLoading\":[64],\"ResetLoading\":[64],\"Validate\":[64]},[[4,\"click\",\"OutsideClickHandler\"]]]]],[\"ks-cart-select-shipping.cjs\",[[0,\"ks-cart-select-shipping\",{\"name\":[513],\"valid\":[1540],\"error\":[1540],\"shipping\":[16],\"activeShipping\":[2,\"active-shipping\"],\"ShippingChange\":[16],\"active\":[32],\"toggled\":[32],\"loading\":[32],\"StartLoading\":[64],\"ResetLoading\":[64],\"Validate\":[64]},[[4,\"click\",\"OutsideClickHandler\"]]]]],[\"ks-product-price.cjs\",[[0,\"ks-product-price\",{\"cartAnimation\":[32],\"favouritesAnimation\":[32]}]]],[\"ks-cart.cjs\",[[4,\"ks-cart\",{\"api\":[1],\"productRemove\":[1,\"product-remove\"],\"productCount\":[1,\"product-count\"],\"addDeal\":[1,\"add-deal\"],\"countryChange\":[1,\"country-change\"],\"shippingChange\":[1,\"shipping-change\"],\"paymentChange\":[1,\"payment-change\"],\"discountCode\":[1,\"discount-code\"],\"discountPoints\":[1,\"discount-points\"],\"discountRemove\":[1,\"discount-remove\"],\"data\":[32]}]]],[\"ks-cart-country-select.cjs\",[[4,\"ks-cart-country-select\",{\"CountryChange\":[16]}]]],[\"ks-cart-shipping-message.cjs\",[[0,\"ks-cart-shipping-message\",{\"shippingMessage\":[1,\"shipping-message\"]}]]],[\"ks-cart-summary-container.cjs\",[[0,\"ks-cart-summary-container\",{\"totalValue\":[2,\"total-value\"],\"productValue\":[2,\"product-value\"],\"otherValues\":[16]}]]],[\"ks-error-popup.cjs\",[[0,\"ks-error-popup\",{\"name\":[32],\"message\":[32],\"stack\":[32],\"visible\":[32],\"show\":[64],\"hide\":[64]}]]],[\"ks-info-banner.cjs\",[[0,\"ks-info-banner\",{\"name\":[1],\"color\":[1],\"image\":[1],\"link\":[1],\"width\":[514],\"height\":[514],\"disabled\":[32]}]]],[\"ks-order-address-section.cjs\",[[4,\"ks-order-address-section\",{\"heading\":[1],\"link\":[1],\"hideOnMobile\":[4,\"hide-on-mobile\"],\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-product-negotiate.cjs\",[[4,\"ks-product-negotiate\",{\"api\":[1],\"price\":[1],\"oldPrice\":[1,\"old-price\"],\"name\":[1],\"heading\":[1],\"paragraph\":[1],\"successInfo\":[1,\"success-info\"],\"loading\":[32],\"success\":[32],\"failure\":[32]}]]],[\"ks-recipe-info.cjs\",[[4,\"ks-recipe-info\",{\"time\":[1],\"yield\":[1],\"cuisine\":[1],\"cuisineLink\":[1,\"cuisine-link\"],\"category\":[1],\"categoryLink\":[1,\"category-link\"],\"image\":[1]}]]],[\"ks-cart-buttons.cjs\",[[0,\"ks-cart-buttons\",{\"href\":[1],\"loading\":[2],\"loadingDelayed\":[32]}]]],[\"ks-cart-progress-bar.cjs\",[[0,\"ks-cart-progress-bar\",{\"productValue\":[2,\"product-value\"],\"shippingProgress\":[16],\"numberPlacement\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-contact.cjs\",[[4,\"ks-contact\",{\"phone\":[1],\"email\":[1]}]]],[\"ks-input-select-dynamic.cjs\",[[0,\"ks-input-select-dynamic\",{\"name\":[1],\"label\":[1],\"api\":[1],\"apiData\":[1537,\"api-data\"],\"selectedId\":[1,\"selected-id\"],\"lightUp\":[1028,\"light-up\"],\"data\":[32],\"loading\":[32],\"message\":[32],\"Validate\":[64],\"IsValid\":[64]}]]],[\"ks-order-confirmation-form.cjs\",[[4,\"ks-order-confirmation-form\",{\"action\":[1],\"method\":[1],\"loading\":[32]}]]],[\"ks-order-country-select.cjs\",[[4,\"ks-order-country-select\",{\"name\":[1],\"label\":[1],\"connectTo\":[1,\"connect-to\"],\"lightUp\":[4,\"light-up\"]}]]],[\"ks-order-document-select.cjs\",[[0,\"ks-order-document-select\",{\"name\":[1],\"api\":[1],\"loading\":[32],\"Validate\":[64],\"IsValid\":[64]}]]],[\"ks-order-form.cjs\",[[4,\"ks-order-form\",{\"action\":[1],\"method\":[1],\"destination\":[1],\"loading\":[32]}]]],[\"ks-order-login.cjs\",[[4,\"ks-order-login\",{\"api\":[1],\"action\":[1],\"passwordMessage\":[1,\"password-message\"],\"passwordRecovery\":[1,\"password-recovery\"]}]]],[\"ks-order-toggle-section.cjs\",[[4,\"ks-order-toggle-section\",{\"left\":[1],\"right\":[1],\"lValue\":[1,\"l-value\"],\"rValue\":[1,\"r-value\"],\"name\":[1],\"value\":[1025]}]]],[\"ks-breadcrumbs.cjs\",[[4,\"ks-breadcrumbs\",{\"center\":[4],\"mobile\":[4]}]]],[\"ks-mini-cart.cjs\",[[0,\"ks-mini-cart\",null,[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-order-address-field.cjs\",[[4,\"ks-order-address-field\",{\"name\":[1]}]]],[\"ks-order-check-section.cjs\",[[4,\"ks-order-check-section\",{\"label\":[1],\"name\":[1],\"active\":[1540],\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-order-summary-container.cjs\",[[4,\"ks-order-summary-container\",{\"heading\":[1],\"returnHeading\":[1,\"return-heading\"],\"returnLink\":[1,\"return-link\"]}]]],[\"ks-article-card_34.cjs\",[[0,\"ks-navbar\",{\"logo\":[1],\"promo\":[1],\"promoLink\":[1,\"promo-link\"],\"cartLink\":[1,\"cart-link\"],\"cartCount\":[2,\"cart-count\"],\"heartLink\":[1,\"heart-link\"],\"heartCount\":[2,\"heart-count\"],\"loginLink\":[1,\"login-link\"],\"logoutLink\":[1,\"logout-link\"],\"accountLink\":[1,\"account-link\"],\"categoryUrl\":[1,\"category-url\"],\"phone\":[1],\"email\":[1],\"contact\":[1],\"mobile\":[32],\"IncrementCart\":[64],\"DecrementCart\":[64],\"IncrementHeart\":[64],\"DecrementHeart\":[64]},[[9,\"resize\",\"resizeHandler\"]]],[4,\"ks-article-card\",{\"image\":[1],\"heading\":[1],\"date\":[1],\"views\":[1],\"link\":[1],\"hideOnOdd\":[4,\"hide-on-odd\"]}],[0,\"ks-recipe-card\",{\"image\":[1],\"heading\":[1],\"cuisine\":[1],\"category\":[1],\"views\":[1],\"link\":[1],\"hideOnOdd\":[4,\"hide-on-odd\"]}],[0,\"ks-banner\",{\"name\":[1],\"color\":[1],\"image\":[1],\"link\":[1],\"sync\":[4]}],[0,\"ks-featured\",{\"image\":[1],\"alt\":[1],\"link\":[1]}],[4,\"ks-footer\",{\"softwareLink\":[1,\"software-link\"],\"logo\":[1],\"phone\":[1],\"email\":[1]}],[0,\"ks-footer-button\",{\"image\":[1],\"href\":[1]}],[4,\"ks-info-message\",{\"name\":[1],\"disabled\":[1540],\"animating\":[1540]}],[4,\"ks-banner-container\"],[4,\"ks-featured-container\"],[4,\"ks-footer-links\",{\"heading\":[1]}],[4,\"ks-grid\"],[4,\"ks-homepage-info\",{\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]],[4,\"ks-homepage-products\"],[0,\"ks-newsletter-popup\",{\"api\":[1],\"loginLink\":[1,\"login-link\"],\"registerLink\":[1,\"register-link\"],\"loggedIn\":[4,\"logged-in\"],\"email\":[1],\"agreement\":[1],\"mobile\":[32],\"loading\":[32],\"success\":[32],\"failure\":[32],\"message\":[32],\"Show\":[64]},[[9,\"resize\",\"resizeHandler\"]]],[4,\"ks-section\",{\"muted\":[4],\"dark\":[4],\"darker\":[4],\"expand\":[4],\"marginTop\":[4,\"margin-top\"],\"mobileCollapse\":[4,\"mobile-collapse\"]}],[0,\"ks-see-more\",{\"href\":[1],\"text\":[1]}],[0,\"ks-navbar-categories\"],[0,\"ks-navbar-contact-panel\",{\"phone\":[1],\"email\":[1],\"contact\":[1],\"toggled\":[1540],\"mobile\":[32],\"height\":[32],\"width\":[32],\"menuWidth\":[32],\"initialized\":[32],\"visible\":[32],\"Toggle\":[64]},[[9,\"resize\",\"resizeHandler\"]]],[0,\"ks-navbar-sidebar\"],[0,\"ks-navbar-search\"],[0,\"ks-navbar-search-mobile\"],[0,\"ks-category-view\",{\"category\":[16],\"hidden\":[32],\"hiddenO\":[32],\"active\":[32]},[[1,\"mouseover\",\"MouseOverHandler\"],[1,\"mouseout\",\"MouseOutHandler\"]]],[0,\"ks-category-simple\",{\"category\":[16],\"hidden\":[32],\"hiddenO\":[32]},[[1,\"mouseover\",\"MouseOverHandler\"],[1,\"mouseout\",\"MouseOutHandler\"]]],[0,\"ks-navbar-button\",{\"link\":[1],\"icon\":[1],\"count\":[2],\"name\":[1],\"toggle\":[4],\"animatedToggle\":[4,\"animated-toggle\"]}],[4,\"ks-card\",{\"padding\":[4],\"small\":[4],\"margin\":[4],\"height\":[4]}],[4,\"ks-flex\",{\"center\":[4],\"between\":[4],\"around\":[4],\"middle\":[4],\"gutter\":[4],\"column\":[4],\"reverse\":[4],\"height\":[4],\"small\":[4],\"match\":[4]}],[0,\"ks-product-card\",{\"unavailable\":[4],\"linkOnly\":[4,\"link-only\"],\"name\":[1],\"img\":[1],\"link\":[1],\"currentPrice\":[1,\"current-price\"],\"previousPrice\":[1,\"previous-price\"],\"productId\":[1,\"product-id\"],\"uniqueId\":[1,\"unique-id\"],\"cartLoading\":[32],\"favLoading\":[32]}],[0,\"ks-button-cart\",{\"productId\":[513,\"product-id\"],\"name\":[513],\"count\":[1537],\"traits\":[513],\"expand\":[4],\"padding\":[4],\"icon\":[4],\"disabled\":[4],\"product\":[4],\"loading\":[32],\"AddToCart\":[64],\"SetCount\":[64]}],[0,\"ks-button-fav\",{\"productId\":[513,\"product-id\"],\"subtract\":[4],\"expand\":[4],\"padding\":[4],\"loading\":[32],\"success\":[32]}],[0,\"ks-product-suggestions\",{\"productId\":[513,\"product-id\"],\"name\":[1],\"api\":[1],\"loaded\":[32]}],[0,\"ks-image\",{\"src\":[1],\"alt\":[1],\"width\":[1],\"height\":[1],\"sync\":[4],\"cover\":[4],\"contain\":[4],\"loaded\":[32],\"loadAnimated\":[32],\"loadCheck\":[64]}],[0,\"ks-icon\",{\"name\":[1],\"size\":[2]}],[0,\"ks-img\",{\"src\":[513],\"alt\":[1],\"target\":[1],\"sync\":[4],\"vertical\":[4],\"contained\":[4],\"left\":[4],\"right\":[4],\"center\":[4],\"width\":[2],\"height\":[2],\"loaded\":[32],\"loadAnimated\":[32]}]]],[\"ks-navbar-panel.cjs\",[[4,\"ks-navbar-panel\",{\"hideMenu\":[4,\"hide-menu\"],\"mobile\":[32],\"menuWidth\":[32],\"active\":[32],\"initialized\":[32],\"animate\":[32]},[[9,\"resize\",\"resizeHandler\"],[4,\"click\",\"OutsideClickHandler\"]]]]],[\"ks-cart-tile.cjs\",[[4,\"ks-cart-tile\",{\"name\":[1],\"color\":[1],\"logo\":[1],\"price\":[1]}]]],[\"ks-description-image.cjs\",[[0,\"ks-description-image\",{\"image\":[1]}]]],[\"ks-description-text-image.cjs\",[[4,\"ks-description-text-image\",{\"image\":[1],\"align\":[1],\"size\":[1]}]]],[\"ks-listing-header.cjs\",[[4,\"ks-listing-header\"]]],[\"ks-order-summary-payment.cjs\",[[0,\"ks-order-summary-payment\",{\"text\":[1],\"image\":[1],\"color\":[1],\"hover\":[1],\"active\":[1]}]]],[\"ks-product-admin.cjs\",[[4,\"ks-product-admin\",{\"editLink\":[1,\"edit-link\"],\"homeQuantity\":[1,\"home-quantity\"],\"externalQuantity\":[1,\"external-quantity\"],\"availability\":[1],\"overwrite\":[4],\"distributors\":[4],\"expanded\":[32]}]]],[\"ks-product-attribute.cjs\",[[4,\"ks-product-attribute\",{\"href\":[1],\"name\":[1],\"image\":[513],\"emphasis\":[516]}]]],[\"ks-product-comments.cjs\",[[4,\"ks-product-comments\",{\"link\":[1],\"message\":[1],\"hiddenComments\":[32]}]]],[\"ks-product-simple.cjs\",[[0,\"ks-product-simple\",{\"name\":[1],\"img\":[1],\"link\":[1],\"currentPrice\":[1,\"current-price\"],\"previousPrice\":[1,\"previous-price\"]}]]],[\"ks-product-tab.cjs\",[[4,\"ks-product-tab\",{\"open\":[4],\"name\":[1],\"mobile\":[32]},[[9,\"resize\",\"ResizeHandler\"]]]]],[\"ks-product-tabs.cjs\",[[4,\"ks-product-tabs\",{\"mobile\":[32],\"nameList\":[32]},[[9,\"resize\",\"ResizeHandler\"]]]]],[\"ks-product-traits.cjs\",[[0,\"ks-product-traits\"]]],[\"ks-product-variant.cjs\",[[0,\"ks-product-variant\",{\"image\":[1],\"name\":[1],\"link\":[1],\"active\":[516],\"unavailable\":[516]}]]],[\"ks-radio-tile.cjs\",[[0,\"ks-radio-tile\",{\"name\":[1],\"value\":[1],\"color\":[1],\"logo\":[1],\"price\":[1],\"service\":[1],\"time\":[1],\"active\":[1540],\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-recent-card.cjs\",[[0,\"ks-recent-card\",{\"name\":[1],\"img\":[1],\"link\":[1]}]]],[\"ks-top-banner.cjs\",[[4,\"ks-top-banner\",{\"name\":[1],\"newsletter\":[16],\"shipping\":[1]}]]],[\"ks-comment.cjs\",[[4,\"ks-comment\",{\"author\":[1],\"when\":[1],\"separator\":[4]}]]],[\"ks-container.cjs\",[[4,\"ks-container\",{\"padding\":[516]}]]],[\"ks-description-text.cjs\",[[4,\"ks-description-text\"]]],[\"ks-filter.cjs\",[[4,\"ks-filter\",{\"name\":[1],\"active\":[4]}]]],[\"ks-filter-checkbox.cjs\",[[4,\"ks-filter-checkbox\",{\"name\":[1],\"filterId\":[1,\"filter-id\"],\"active\":[4]}]]],[\"ks-filter-color.cjs\",[[0,\"ks-filter-color\",{\"name\":[1],\"filterId\":[1,\"filter-id\"],\"color\":[1],\"active\":[4],\"hex\":[32],\"material\":[32]}]]],[\"ks-filter-sidebar.cjs\",[[4,\"ks-filter-sidebar\",{\"baseUrl\":[1,\"base-url\"]}]]],[\"ks-filter-slider.cjs\",[[0,\"ks-filter-slider\",{\"name\":[1],\"ids\":[1],\"values\":[1],\"snap\":[4],\"step\":[2],\"from\":[2],\"to\":[2],\"fromId\":[32],\"toId\":[32]},[[0,\"swipeLeft\",\"swipeLeftHandler\"],[0,\"click\",\"clickHandler\"]]]]],[\"ks-form.cjs\",[[4,\"ks-form\",{\"name\":[1],\"action\":[1],\"method\":[1]}]]],[\"ks-input-check.cjs\",[[0,\"ks-input-check\",{\"name\":[1],\"label\":[1],\"value\":[1],\"radio\":[4],\"checkbox\":[4],\"checked\":[4],\"required\":[4],\"valid\":[32],\"validMessage\":[32],\"IsValid\":[64],\"Validate\":[64]}]]],[\"ks-input-date.cjs\",[[0,\"ks-input-date\",{\"name\":[1],\"placeholder\":[1],\"label\":[1],\"required\":[4],\"valid\":[32],\"validMessage\":[32],\"IsValid\":[64],\"Validate\":[64]}]]],[\"ks-input-dynamic.cjs\",[[4,\"ks-input-dynamic\",{\"api\":[1],\"message\":[1],\"loading\":[32],\"Validate\":[64],\"IsValid\":[64]}]]],[\"ks-input-textarea.cjs\",[[0,\"ks-input-textarea\",{\"name\":[1],\"placeholder\":[1],\"label\":[1],\"rows\":[2],\"min\":[2],\"max\":[2],\"required\":[4],\"valid\":[32],\"validMessage\":[32],\"IsValid\":[64],\"Validate\":[64]}]]],[\"ks-order-button-pair.cjs\",[[4,\"ks-order-button-pair\",{\"linkLeft\":[1,\"link-left\"],\"linkRight\":[1,\"link-right\"],\"split\":[2],\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-order-enable-section.cjs\",[[4,\"ks-order-enable-section\",{\"heading\":[1],\"name\":[1],\"value\":[1],\"active\":[1540]}]]],[\"ks-order-guest.cjs\",[[4,\"ks-order-guest\"]]],[\"ks-order-inpost.cjs\",[[0,\"ks-order-inpost\",{\"search\":[1],\"api\":[1],\"description\":[32],\"address\":[32],\"code\":[32],\"valid\":[32],\"Validate\":[64],\"IsValid\":[64]}]]],[\"ks-order-pocztapunkt.cjs\",[[0,\"ks-order-pocztapunkt\",{\"search\":[1025],\"api\":[1],\"description\":[32],\"address\":[32],\"code\":[32],\"valid\":[32],\"Validate\":[64],\"IsValid\":[64]}]]],[\"ks-order-progress.cjs\",[[0,\"ks-order-progress\",{\"current\":[2],\"mobile\":[32]},[[9,\"resize\",\"resizeHandler\"]]]]],[\"ks-order-separator.cjs\",[[0,\"ks-order-separator\",{\"dark\":[4]}]]],[\"ks-order-summary-field.cjs\",[[4,\"ks-order-summary-field\",{\"dark\":[4],\"large\":[4],\"single\":[4]}]]],[\"ks-pagination.cjs\",[[0,\"ks-pagination\",{\"count\":[2],\"current\":[2],\"base\":[1],\"pattern\":[1],\"space\":[32],\"edges\":[32]},[[9,\"resize\",\"handleResize\"]]]]],[\"ks-product-admin-distributor.cjs\",[[0,\"ks-product-admin-distributor\",{\"name\":[1],\"time\":[1],\"quantity\":[1],\"unavailableMode\":[1,\"unavailable-mode\"],\"warning\":[1],\"overwrite\":[4]}]]],[\"ks-product-button.cjs\",[[4,\"ks-product-button\",{\"large\":[516],\"medium\":[516]}]]],[\"ks-product-calculator-ca.cjs\",[[4,\"ks-product-calculator-ca\",{\"price\":[1],\"parameters\":[1],\"width\":[2],\"height\":[2]}]]],[\"ks-product-calculator-payu.cjs\",[[4,\"ks-product-calculator-payu\",{\"price\":[1],\"posId\":[1,\"pos-id\"],\"apiKey\":[1,\"api-key\"]}]]],[\"ks-product-container.cjs\",[[4,\"ks-product-container\"]]],[\"ks-product-info-points.cjs\",[[0,\"ks-product-info-points\",{\"count\":[1],\"value\":[1],\"message\":[1],\"internal\":[516],\"external\":[516]}]]],[\"ks-product-points.cjs\",[[0,\"ks-product-points\",{\"count\":[2],\"value\":[2]}]]],[\"ks-product-shipping.cjs\",[[0,\"ks-product-shipping\"]]],[\"ks-product-title.cjs\",[[0,\"ks-product-title\"]]],[\"ks-product-variants.cjs\",[[4,\"ks-product-variants\",{\"more\":[32],\"toggle\":[32],\"width\":[32],\"maxHeight\":[32]},[[9,\"resize\",\"ResizeHandler\"]]]]],[\"ks-product-youtube.cjs\",[[0,\"ks-product-youtube\",{\"videoId\":[1,\"video-id\"],\"active\":[32]}]]],[\"ks-recent-products.cjs\",[[4,\"ks-recent-products\",{\"image\":[1],\"mobile\":[32]},[[9,\"resize\",\"handleResize\"]]]]],[\"ks-recipe-ingredient.cjs\",[[0,\"ks-recipe-ingredient\",{\"name\":[1],\"amount\":[1]}]]],[\"ks-recipe-nutrition.cjs\",[[0,\"ks-recipe-nutrition\",{\"type\":[1],\"value\":[1]}]]],[\"ks-recipe-procedure.cjs\",[[4,\"ks-recipe-procedure\"]]],[\"ks-section-heading.cjs\",[[4,\"ks-section-heading\"]]],[\"ks-sorting.cjs\",[[0,\"ks-sorting\",{\"post\":[1]}]]],[\"ks-lightbox.cjs\",[[0,\"ks-lightbox\",{\"data\":[16],\"show\":[64],\"hide\":[64]}]]],[\"ks-alert.cjs\",[[0,\"ks-alert\",{\"message\":[1]}]]],[\"ks-cart-message.cjs\",[[0,\"ks-cart-message\",{\"message\":[1],\"visibility\":[32],\"messageDelay\":[32]}]]],[\"ks-cart-summary.cjs\",[[0,\"ks-cart-summary\",{\"text\":[513],\"price\":[1],\"large\":[4],\"emphasis\":[4]}]]],[\"ks-contact-buttons.cjs\",[[0,\"ks-contact-buttons\",{\"phone\":[1],\"email\":[1]}]]],[\"ks-order-login-prompt.cjs\",[[0,\"ks-order-login-prompt\",{\"message\":[1]}]]],[\"context-consumer.cjs\",[[0,\"context-consumer\",{\"context\":[16],\"renderer\":[16],\"subscribe\":[16],\"unsubscribe\":[32]}]]],[\"ks-cart-deal_2.cjs\",[[0,\"ks-cart-deal\",{\"ikey\":[513],\"name\":[1],\"img\":[1],\"link\":[1],\"price\":[1],\"AddDeal\":[16],\"loading\":[32]}],[0,\"ks-cart-deal-group\",{\"ikey\":[513],\"name\":[1],\"deals\":[16],\"AddDeal\":[16],\"currentDeal\":[32],\"loading\":[32]}]]],[\"ks-cart-select-item.cjs\",[[0,\"ks-cart-select-item\",{\"logo\":[513],\"name\":[513],\"price\":[513],\"color\":[1]}]]],[\"ks-loader_2.cjs\",[[0,\"ks-loader\",{\"running\":[516],\"oversized\":[516]}],[0,\"ks-product-count\"]]],[\"ks-order-button_2.cjs\",[[4,\"ks-order-button\",{\"href\":[1],\"mobile\":[4],\"wide\":[4]}],[0,\"ks-order-heading\",{\"heading\":[1],\"link\":[1]}]]],[\"ks-cart-heading.cjs\",[[4,\"ks-cart-heading\",{\"center\":[4]}]]],[\"ks-cart-spinner.cjs\",[[0,\"ks-cart-spinner\",{\"name\":[1],\"initialValue\":[1026,\"initial-value\"],\"max\":[2],\"value\":[32],\"SetAmount\":[64]}]]],[\"ks-input-number.cjs\",[[0,\"ks-input-number\",{\"name\":[1],\"placeholder\":[1],\"label\":[1],\"center\":[4],\"emphasis\":[4],\"min\":[2],\"max\":[2],\"required\":[4],\"step\":[2],\"value\":[2],\"valid\":[32],\"validMessage\":[32],\"IsValid\":[64],\"Validate\":[64]}]]],[\"ks-input-select.cjs\",[[4,\"ks-input-select\",{\"name\":[1],\"label\":[1],\"error\":[4],\"lightUp\":[1028,\"light-up\"],\"IsValid\":[64],\"Validate\":[64]}]]],[\"ks-input-text.cjs\",[[0,\"ks-input-text\",{\"name\":[1],\"placeholder\":[1],\"label\":[1],\"value\":[1025],\"digits\":[4],\"price\":[4],\"email\":[4],\"password\":[4],\"sameAs\":[1,\"same-as\"],\"required\":[4],\"regex\":[1],\"regexMessage\":[1,\"regex-message\"],\"min\":[2],\"max\":[2],\"center\":[4],\"large\":[4],\"emphasis\":[4],\"novalidate\":[1540],\"message\":[1537],\"IsValid\":[64],\"Validate\":[64]}]]],[\"ks-order-form-modal.cjs\",[[0,\"ks-order-form-modal\",{\"message\":[1],\"Show\":[64],\"Hide\":[64]}]]],[\"ks-order-toggle.cjs\",[[0,\"ks-order-toggle\",{\"name\":[1],\"value\":[1],\"text\":[1],\"active\":[1540]}]]],[\"ks-cart-product_3.cjs\",[[0,\"ks-cart-product\",{\"ikey\":[513],\"name\":[1],\"img\":[1],\"link\":[1],\"price\":[2],\"shippingTime\":[1,\"shipping-time\"],\"amount\":[514],\"maxAmount\":[2,\"max-amount\"],\"removable\":[4],\"loading\":[32],\"mobile\":[32],\"ResetLoading\":[64]},[[9,\"resize\",\"resizeHandler\"]]],[0,\"ks-cart-product-heading\",{\"removable\":[4]}],[0,\"ks-cart-product-price\",{\"price\":[2],\"amount\":[2],\"shippingTime\":[1,\"shipping-time\"],\"editLink\":[1,\"edit-link\"],\"loading\":[2],\"loadingDelayed\":[32]}]]],[\"ks-overlay.cjs\",[[4,\"ks-overlay\",{\"dark\":[516],\"show\":[64],\"hide\":[64]}]]],[\"ks-cart-discount-code_6.cjs\",[[0,\"ks-cart-discount-code\",{\"placeholder\":[1],\"image\":[1],\"loading\":[32],\"ResetLoading\":[64]}],[0,\"ks-cart-discount-points\",{\"placeholder\":[1],\"message\":[1],\"points\":[2],\"orderPoints\":[2,\"order-points\"],\"loading\":[32],\"ResetLoading\":[64]}],[4,\"ks-cart-discount-message\",{\"name\":[1]}],[0,\"ks-cart-discount-points-login\",{\"message\":[1],\"loginUrl\":[1,\"login-url\"],\"points\":[2]}],[0,\"ks-cart-discount-points-message\",{\"heading\":[1],\"message\":[1],\"points\":[2]}],[0,\"ks-cart-discount-ticket\",{\"name\":[1],\"value\":[1],\"loading\":[32]}]]]]"), options);
  });
};

exports.defineCustomElements = defineCustomElements;
