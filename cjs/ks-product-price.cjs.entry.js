'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
require('./index-e2b63d60.js');
const productStore = require('./product-store-35faa98d.js');

const productPriceCss = "ks-product-price{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:10px 0 20px 0}ks-product-price .price{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-bottom:5px;font-family:var(--product-price-font);font-weight:700;margin-right:20px}ks-product-price .price .previous{display:inline-block;color:var(--color-dark);font-size:var(--product-price-size);line-height:var(--product-price-size);position:relative;margin-bottom:5px}ks-product-price .price .previous::after{background-color:var(--color-dark);content:\"\";height:0.1em;left:-3px;right:-3px;position:absolute;top:46%}ks-product-price .price .current{color:var(--color-secondary);font-size:var(--product-price-size-emphasis);line-height:var(--product-price-size)}ks-product-price>button{position:relative;overflow:hidden;-webkit-box-flex:1;-ms-flex:1;flex:1;border-style:none;outline-style:none;border-radius:50px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:var(--product-price-size);font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-price button:disabled{background-color:var(--color-faded) !important;color:var(--text-color-faded)}ks-product-price button:hover{background-color:var(--color-secondary-hover)}ks-product-price button:active{background-color:var(--color-secondary-active)}@media only screen and (max-width: 1200px){ks-product-price button{font-family:var(--product-price-font);font-size:var(--product-price-size-small)}}@media only screen and (max-width: 560px){ks-product-price{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-price .price{display:block;width:100%;margin-bottom:20px;margin-right:0px;text-align:center}}ks-product-price .fav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:15px 15px;margin-left:8px;line-height:0px}ks-product-price .fav ks-icon{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform 0.1s ease;transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-price .fav:hover ks-icon{-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg)}ks-product-price button.loading{color:transparent}ks-product-price button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-price button.loading ks-loader{opacity:1}ks-product-price button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-price button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-price button.fav.completed ks-icon.completed{opacity:1}";

const ProductPrice = class {
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
    const previousPrice = productStore.store.get("previousPrice").replace('.', ',');
    const currentPrice = productStore.store.get("currentPrice").replace('.', ',') + " zł";
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
      index.h("div", { class: "price" }, previousPrice ? index.h("div", { class: "previous" }, previousPrice) : null, index.h("div", { class: "current" }, currentPrice)),
      available ? index.h("ks-product-count", null) : null,
      index.h("button", { disabled: !available, onClick: () => this.addToCartHandler(), class: productStore.store.get("cartLoading") ? "loading" : "" }, available ? "DO KOSZYKA" : "NIEDOSTĘPNY", index.h("ks-loader", { oversized: true, running: this.cartAnimation })),
      index.h("button", { onClick: () => this.addToFavouritesHandler(), class: favClass.join(" ") }, index.h("ks-icon", { name: "star" }), index.h("ks-loader", { running: this.favouritesAnimation }), index.h("ks-icon", { class: "completed", name: "check" }))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductPrice.style = productPriceCss;

exports.ks_product_price = ProductPrice;
