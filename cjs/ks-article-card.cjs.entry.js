'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c2b39b63.js');

const articleCardCss = "ks-article-card{display:block}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}";

const ArticleCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return (index.h("ks-card", { height: true }, index.h("div", { class: "uk-flex uk-flex-column uk-flex-between uk-height-1-1" }, index.h("a", { href: this.link }, index.h("ks-image", { src: this.image, alt: this.heading, cover: true, width: "600", height: "300" })), index.h("div", { class: "uk-padding-small uk-text-small uk-flex-1" }, index.h("h3", { class: "uk-margin-small-bottom" }, index.h("a", { class: "uk-link-heading", href: this.link }, this.heading)), index.h("div", { class: "uk-text-meta" }, index.h("span", { "uk-icon": "icon: calendar" }), " ", this.date, index.h("span", { "uk-icon": "search", class: "uk-margin-left" }), " ", this.views), index.h("p", { class: "uk-margin-remove-bottom" }, index.h("slot", null))), index.h("div", { class: "uk-card-footer uk-padding-small uk-text-center" }, index.h("a", { class: "uk-button uk-button-text", href: this.link }, "Zobacz wi\u0119cej")))));
  }
  get root() { return index.getElement(this); }
};
ArticleCard.style = articleCardCss;

exports.ks_article_card = ArticleCard;
