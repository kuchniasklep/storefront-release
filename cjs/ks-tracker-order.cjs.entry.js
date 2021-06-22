'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');
const store = require('./store-c010abe7.js');
require('./index-b0bdcebf.js');

const TrackerOrder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.checkout = false;
    this.form = false;
    this.placed = false;
    this.currency = "PLN";
  }
  componentWillLoad() {
    const products = typeof this.products == "string" ?
      JSON.parse(this.products) : this.products;
    store.eachTracker(item => {
      if (this.checkout)
        item === null || item === void 0 ? void 0 : item.order_checkout(products, this.value, this.currency);
      else if (this.form)
        item === null || item === void 0 ? void 0 : item.order_form(products, this.value, this.currency);
      else if (this.placed)
        item === null || item === void 0 ? void 0 : item.order_placed(products, this.value, this.currency);
    });
  }
};

exports.ks_tracker_order = TrackerOrder;
