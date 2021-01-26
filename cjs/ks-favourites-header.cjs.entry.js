'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
const functions = require('./functions-80797821.js');

const FavouritesHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const value = this.value
      .replace(".", ",");
    return [
      index.h("ks-flex", { between: true, middle: true, gutter: true }, index.h("div", { class: "uk-text-center uk-width-1-1 uk-width-auto@m ks-text-decorated", style: { padding: "0 20px" } }, index.h("span", { class: "uk-h1" }, "SCHOWEK: "), index.h("span", { class: "uk-h1 uk-text-danger uk-text-bold", style: { marginLeft: "10px" } }, value)), index.h("div", { class: "uk-text-center uk-width-1-1 uk-width-auto@m" }, index.h("button", { class: "uk-button uk-button-danger uk-border-pill", style: { padding: "3px 30px" }, onClick: () => {
          functions.RemoveAllFavourites();
        } }, "WYCZY\u015A\u0106 SCHOWEK"))),
      index.h("br", { class: "uk-hidden@m" }), index.h("hr", null)
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_favourites_header = FavouritesHeader;
