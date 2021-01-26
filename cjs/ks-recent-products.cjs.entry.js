'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const RecentProducts = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
  }
  limitItemCount() {
    const containerWidth = this.mobile ? window.innerWidth - 20 : this.containter.offsetWidth - 20;
    const itemWidth = this.items[0].offsetWidth;
    const count = Math.floor(containerWidth / itemWidth);
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (i < count)
        item.style.display = "block";
      else
        item.style.display = "none";
    }
  }
  mobileLayout() {
    if (window.innerWidth <= 960)
      this.mobile = true;
    else
      this.mobile = false;
  }
  componentWillLoad() {
    this.mobileLayout();
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.containter = this.root.querySelector("#ks-recent-products-items");
    this.items = this.containter.querySelectorAll("ks-recent-card");
    this.limitItemCount();
  }
  handleResize() {
    this.mobileLayout();
    this.limitItemCount();
  }
  render() {
    return (index.h("div", { class: "uk-flex uk-flex-between uk-flex-middle " + (this.mobile ? "uk-flex-column" : "") }, index.h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", style: { fontSize: "20px", color: "white", padding: "5px 20px" } }, "OSTATNIO PRZEGL\u0104DANE"), index.h("div", { id: "ks-recent-products-items", class: "uk-overflow-hidden uk-width-1-1 uk-flex-1 uk-flex " + (this.mobile ? "uk-flex-center" : "uk-flex-right") }, index.h("slot", null))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_recent_products = RecentProducts;
