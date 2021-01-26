import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const productCommentsCss = "ks-product-comments{display:block;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:var(--card-background);color:var(--card-text-color)}ks-product-comments .message{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:30px}ks-product-comments .message ks-icon{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:15px;max-width:50px;width:100%}ks-product-comments .message p{width:100%;text-align:center}@media (min-width: 1200px){ks-product-comments .message{padding:30px 40px}}ks-product-comments hr,ks-product-comments .more{margin:0}ks-product-comments .expand,ks-product-comments .add{width:100%;line-height:40px;padding:0 10px;outline:none;border:none;text-align:center;text-decoration:none;text-transform:none;color:white !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-comments .expand{width:100%;line-height:40px;padding:0 10px;vertical-align:middle;background-color:var(--color-dark)}ks-product-comments .expand:hover{background-color:var(--color-dark-hover)}ks-product-comments .expand:active{background-color:var(--color-dark-active)}ks-product-comments .add{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:8px;background-color:var(--color-secondary)}ks-product-comments .add:hover{background-color:var(--color-secondary-hover)}ks-product-comments .add:active{background-color:var(--color-secondary-active)}ks-product-comments ks-comment{border-top:solid 1px #dddddd}";

const ProductTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.link = "";
    this.message = "";
    this.expand = false;
  }
  render() {
    return [
      h("div", { class: "message" }, h("ks-icon", { name: "mail", size: 2.5 }), h("p", null, this.message)),
      h("slot", null),
      h("div", { class: "more", hidden: !this.expand }, h("slot", { name: "hidden" })),
      h("button", { onClick: () => this.expand = !this.expand, class: "expand" }, h("ks-icon", { name: this.expand ? "chevron-up" : "chevron-down", size: 1.5 })),
      this.link ?
        h("a", { href: this.link, rel: "nofollow", class: "add", "aria-label": "Napisz recenzj\u0119" }, h("ks-icon", { name: "plus-circle", size: 1.5 }))
        : null
    ];
  }
  get root() { return getElement(this); }
};
ProductTab.style = productCommentsCss;

export { ProductTab as ks_product_comments };
