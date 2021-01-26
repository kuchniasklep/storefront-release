'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const CartTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const mutedColor = "#eeeeee";
    const titleStyle = {
      backgroundColor: this.color,
      color: "white",
      height: "50px"
    };
    const priceStyle = {
      fontSize: "20px",
      padding: "5px 10px"
    };
    const infoStyle = {
      backgroundColor: mutedColor,
      msFlex: "1 0 auto",
      padding: "8px",
      fontSize: "16px",
      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.1s ease-in, color 0.1s ease-in"
    };
    return (index.h("div", { class: "uk-height-1-1 uk-flex uk-flex-column" }, this.price ?
      index.h("div", { class: "uk-flex uk-flex-middle uk-flex-between", style: titleStyle }, index.h("div", { class: "uk-flex-auto" }, index.h("ks-image", { src: this.logo, alt: this.name, width: "130", height: "40" })), index.h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
      :
        index.h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle }, index.h("ks-image", { src: this.logo, alt: this.name, width: "140", height: "40" })), index.h("div", { class: "uk-flex-1 uk-flex uk-flex-middle", style: infoStyle }, index.h("div", { class: "uk-width-1-1 uk-padding-small uk-text-center" }, index.h("slot", null)))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_cart_tile = CartTile;
