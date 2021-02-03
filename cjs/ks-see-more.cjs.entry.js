'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c91bddc.js');

const SeeMore = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = "";
    this.text = "";
  }
  render() {
    return (index.h("div", { class: "uk-flex uk-flex-center uk-margin-top" }, index.h("a", { href: this.href, class: "uk-button uk-button-default uk-margin-auto", style: {
        backgroundColor: "white",
        padding: "3px 30px",
        border: "none",
        borderRadius: "50px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)"
      } }, this.text)));
  }
};

exports.ks_see_more = SeeMore;
