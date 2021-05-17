'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aaabf9e8.js');
const productStore = require('./product-store-16a88a54.js');
require('./index-856f0267.js');

const productPurchaseCss = "ks-product-purchase{display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:disabled{background-color:var(--color-faded) !important;color:var(--text-color-faded)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform 0.1s ease;transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";

const ProductPurchase = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.addToCart = index.createEvent(this, "addToCart", 7);
    this.addToFavourites = index.createEvent(this, "addToFavourites", 7);
    this.cartAnimation = false;
    this.favouritesAnimation = false;
  }
  addToCartHandler() {
    if (productStore.store.get("availability") > 0 && !productStore.store.get("cartLoading"))
      this.addToCart.emit();
  }
  addToFavouritesHandler() {
    if (!productStore.store.get("favouritesLoading") && !productStore.store.get("favouritesCompleted")) {
      this.addToFavourites.emit();
    }
  }
  render() {
    const available = productStore.store.get("availability") > 0;
    if (productStore.store.get("cartLoading"))
      this.cartAnimation = true;
    else
      setTimeout(() => {
        this.cartAnimation = false;
      }, 300);
    if (productStore.store.get("favouritesLoading"))
      this.favouritesAnimation = true;
    else
      setTimeout(() => {
        this.favouritesAnimation = false;
      }, 300);
    const favClass = [
      "fav",
      productStore.store.get("favouritesCompleted") ? "completed" : null,
      productStore.store.get("favouritesLoading") ? "loading" : null
    ];
    return [
      index.h("button", { disabled: !available, onClick: () => this.addToCartHandler(), class: "cart " + (productStore.store.get("cartLoading") ? "loading" : "") }, available ? "DO KOSZYKA" : "NIEDOSTĘPNY", index.h("ks-loader", { oversized: true, running: this.cartAnimation })),
      available ? index.h("ks-product-count", null) : null,
      index.h("button", { onClick: () => this.addToFavouritesHandler(), class: favClass.join(" ") }, index.h("ks-icon", { name: "star" }), index.h("ks-loader", { running: this.favouritesAnimation }), index.h("ks-icon", { class: "completed", name: "check" }))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductPurchase.style = productPurchaseCss;

exports.ks_product_purchase = ProductPurchase;
