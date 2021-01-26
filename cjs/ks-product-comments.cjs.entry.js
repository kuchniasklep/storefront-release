'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const productCommentsCss = "ks-product-comments{display:block;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:var(--card-background);color:var(--card-text-color)}ks-product-comments .message{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:30px}ks-product-comments .message ks-icon{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:15px;max-width:50px;width:100%}ks-product-comments .message p{width:100%;text-align:center}@media (min-width: 1200px){ks-product-comments .message{padding:30px 40px}}ks-product-comments hr,ks-product-comments .more{margin:0}ks-product-comments .expand,ks-product-comments .add{width:100%;line-height:40px;padding:0 10px;outline:none;border:none;text-align:center;text-decoration:none;text-transform:none;color:white !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-comments .expand{width:100%;line-height:40px;padding:0 10px;vertical-align:middle;background-color:var(--color-dark)}ks-product-comments .expand:hover{background-color:var(--color-dark-hover)}ks-product-comments .expand:active{background-color:var(--color-dark-active)}ks-product-comments .add{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:8px;background-color:var(--color-secondary)}ks-product-comments .add:hover{background-color:var(--color-secondary-hover)}ks-product-comments .add:active{background-color:var(--color-secondary-active)}ks-product-comments ks-comment{border-top:solid 1px #dddddd}";

const ProductTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.link = "";
    this.message = "";
    this.hasMore = false;
    this.expand = false;
  }
  render() {
    return [
      index.h("div", { class: "message" }, index.h("ks-icon", { name: "mail", size: 2.5 }), index.h("p", null, this.message)),
      index.h("slot", null),
      index.h("div", { class: "more", hidden: !this.expand }, index.h("slot", { name: "hidden" })),
      this.hasMore ?
        index.h("button", { onClick: () => this.expand = !this.expand, class: "expand" }, index.h("ks-icon", { name: this.expand ? "chevron-up" : "chevron-down", size: 1.5 }))
        : null,
      this.link ?
        index.h("a", { href: this.link, rel: "nofollow", class: "add", "aria-label": "Napisz recenzj\u0119" }, index.h("ks-icon", { name: "plus-circle", size: 1.5 }))
        : null
    ];
  }
  get root() { return index.getElement(this); }
};
ProductTab.style = productCommentsCss;

exports.ks_product_comments = ProductTab;
