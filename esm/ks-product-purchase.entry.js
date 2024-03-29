import { r as registerInstance, e as createEvent, h, g as getElement } from './index-f323e182.js';
import { s as store } from './product-store-db88169f.js';
import './index-6478ec90.js';

const productPurchaseCss = "ks-product-purchase{display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform 0.1s ease;transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";

const ProductPurchase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addToCart = createEvent(this, "addToCart", 7);
    this.addToFavourites = createEvent(this, "addToFavourites", 7);
    this.cartText = "Do koszyka";
    this.availabilityText = "Powiadom o dostępności";
    this.favouritesIcon = "star";
    this.cartAnimation = false;
    this.favouritesAnimation = false;
  }
  CartHandler() {
    if (store.get("availability") > 0) {
      if (!store.get("cartLoading"))
        this.addToCart.emit();
    }
    else
      document.querySelector("ks-product-notify").show();
  }
  FavouritesHandler() {
    if (!store.get("favouritesLoading") && !store.get("favouritesCompleted")) {
      this.addToFavourites.emit();
    }
  }
  render() {
    const available = store.get("availability") > 0;
    if (store.get("cartLoading"))
      this.cartAnimation = true;
    else
      setTimeout(() => {
        this.cartAnimation = false;
      }, 300);
    if (store.get("favouritesLoading"))
      this.favouritesAnimation = true;
    else
      setTimeout(() => {
        this.favouritesAnimation = false;
      }, 300);
    const favClass = [
      "fav",
      store.get("favouritesCompleted") ? "completed" : null,
      store.get("favouritesLoading") ? "loading" : null
    ];
    return [
      h("button", { onClick: () => this.CartHandler(), class: "cart" + (store.get("cartLoading") ? " loading" : "") + (available ? "" : " disabled") }, available ? this.cartText : this.availabilityText, h("ks-loader", { oversized: true, running: this.cartAnimation })),
      available ? h("ks-product-count", null) : null,
      h("button", { onClick: () => this.FavouritesHandler(), class: favClass.join(" ") }, h("ks-icon", { name: this.favouritesIcon }), h("ks-loader", { running: this.favouritesAnimation }), h("ks-icon", { class: "completed", name: "check" }))
    ];
  }
  get root() { return getElement(this); }
};
ProductPurchase.style = productPurchaseCss;

export { ProductPurchase as ks_product_purchase };
