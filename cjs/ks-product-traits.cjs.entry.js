'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const productStore = require('./product-store-e1a028d5.js');

const productTraitsCss = "ks-product-traits{display:block;font-family:var(--font-regular);font-size:16px;line-height:16px;margin-left:-2px}ks-product-traits:not(:empty){margin-top:20px;margin-bottom:10px}ks-product-traits .trait{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;border-radius:15px}ks-product-traits .select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-product-traits label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px 15px 18px;background-color:var(--color-secondary);color:var(--text-color-dark)}ks-product-traits select{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0px 20px;border-radius:15px 0px 0px 15px;outline-style:none;background-color:#f3f3f3;border:solid 1px #cacaca;font-family:var(--font-regular);font-size:16px;line-height:16px;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-traits select::-ms-expand{display:none}ks-product-traits ks-icon{position:absolute;top:12px;right:10px}ks-product-traits .select:hover{background-color:#e2e2e2}ks-product-traits .select:active{background-color:#d3d3d3}ks-product-traits select option{background-color:white !important}@media only screen and (max-width: 1200px){ks-product-traits,ks-product-traits select{font-size:14px;line-height:14px}}";

const ProductCount = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.traitChange = index.createEvent(this, "traitChange", 7);
  }
  traitChangeHandler() {
    const selects = this.root.querySelectorAll(".trait select");
    const data = productStore.store.get("traits").map((trait, index) => {
      const select = selects[index];
      return [trait, trait.items[select.selectedIndex]];
    });
    this.traitChange.emit(data);
  }
  componentDidRender() {
    this.traitChangeHandler();
  }
  render() {
    return productStore.store.get("traits").map((trait) => index.h("div", { class: "trait" }, index.h("div", { class: "select" }, index.h("select", { onChange: () => this.traitChangeHandler() }, trait.items.map(item => index.h("option", { value: item.id }, item.name))), index.h("ks-icon", { name: "chevron-down" })), index.h("label", null, trait.name)));
  }
  get root() { return index.getElement(this); }
};
ProductCount.style = productTraitsCss;

exports.ks_product_traits = ProductCount;
