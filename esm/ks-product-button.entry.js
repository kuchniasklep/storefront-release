import { r as registerInstance, h } from './index-74ff0cef.js';

const productButtonCss = "ks-product-button{display:block;width:100%;margin:5px 0}ks-product-button button{outline-style:none;border-style:none;border-radius:50px;background-color:var(--color-dark);color:var(--text-color-dark);font-family:var(--product-button-font);font-weight:700;width:100%;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-button button{font-size:var(--product-button-size);padding:10px 20px}ks-product-button[large] button{font-size:var(--product-button-size-large);padding:15px 40px}ks-product-button[medium] button{font-size:var(--product-button-size-medium);padding:15px 40px}ks-product-button button:hover{background-color:var(--color-dark-hover)}ks-product-button button:active{background-color:var(--color-dark-active)}";

const ProductButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.large = false;
    this.medium = false;
  }
  render() {
    return h("button", null, h("slot", null));
  }
};
ProductButton.style = productButtonCss;

export { ProductButton as ks_product_button };
