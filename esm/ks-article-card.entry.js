import { r as registerInstance, h, g as getElement } from './index-44e0e252.js';

const articleCardCss = "ks-article-card{display:block}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}";

const ArticleCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return (h("ks-card", { height: true }, h("div", { class: "uk-flex uk-flex-column uk-flex-between uk-height-1-1" }, h("a", { href: this.link }, h("ks-image", { src: this.image, alt: this.heading, cover: true, width: "600", height: "300" })), h("div", { class: "uk-padding-small uk-text-small uk-flex-1" }, h("h3", { class: "uk-margin-small-bottom" }, h("a", { class: "uk-link-heading", href: this.link }, this.heading)), h("div", { class: "uk-text-meta" }, h("span", { "uk-icon": "icon: calendar" }), " ", this.date, h("span", { "uk-icon": "search", class: "uk-margin-left" }), " ", this.views), h("p", { class: "uk-margin-remove-bottom" }, h("slot", null))), h("div", { class: "uk-card-footer uk-padding-small uk-text-center" }, h("a", { class: "uk-button uk-button-text", href: this.link }, "Zobacz wi\u0119cej")))));
  }
  get root() { return getElement(this); }
};
ArticleCard.style = articleCardCss;

export { ArticleCard as ks_article_card };
