'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const productTabCss = "ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";

const ProductTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.ImageReplacer();
  }
  render() {
    return [
      index.h("button", { class: "accordion", onClick: () => this.onOpen() }, this.name, index.h("ks-icon", { name: this.open ? "minus" : "plus" })),
      index.h("div", { class: "tab-content" }, index.h("slot", null))
    ];
  }
  onOpen() {
    this.open = !this.open;
    if (this.open) {
      const tabs = Array.from(this.root.parentElement.children);
      const index = tabs.indexOf(this.root);
      tabs.forEach(element => element.removeAttribute("main"));
      this.main = true;
      this.root.closest('ks-product-tabs').active = index;
    }
  }
  ImageReplacer() {
    const images = this.root.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const ksImage = document.createElement("ks-img");
      ksImage.setAttribute("src", image.getAttribute("data-src"));
      ksImage.setAttribute("alt", image.getAttribute("alt"));
      ksImage.setAttribute("limit", "limit");
      let height = image.style.height.replace("px", "");
      let width = image.style.width.replace("px", "");
      if (width)
        ksImage.style.maxWidth = image.style.width;
      if (image.style.maxWidth) {
        ksImage.style.maxWidth = image.style.maxWidth;
        width = image.style.maxWidth;
      }
      ksImage.style.display = "inline-block";
      if (height)
        ksImage.setAttribute("height", height);
      if (width)
        ksImage.setAttribute("width", width);
      const margin = image.style.margin;
      if (margin.includes("auto"))
        ksImage.style.margin = "auto";
      else if (margin) {
        ksImage.style.padding = margin;
        ksImage.style.boxSizing = "border-box";
      }
      image.parentNode.replaceChild(ksImage, image);
    }
  }
  get root() { return index.getElement(this); }
};
ProductTab.style = productTabCss;

exports.ks_product_tab = ProductTab;
