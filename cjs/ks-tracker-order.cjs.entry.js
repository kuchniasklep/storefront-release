'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');
const store = require('./store-6d62b819.js');
require('./index-08350893.js');

const TrackerOrder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.checkout = false;
    this.form = false;
    this.placed = false;
    this.eventId = "";
    this.currency = "PLN";
  }
  componentWillLoad() {
    const products = typeof this.products == "string" ?
      JSON.parse(this.products) : this.products;
    store.eachTracker(item => {
      if (this.checkout)
        item === null || item === void 0 ? void 0 : item.order_checkout(this.eventId, products, this.value, this.currency);
      else if (this.form)
        item === null || item === void 0 ? void 0 : item.order_form(this.eventId, products, this.value, this.currency);
      else if (this.placed)
        item === null || item === void 0 ? void 0 : item.order_placed(this.eventId, products, this.value, this.currency);
    });
  }
};

exports.ks_tracker_order = TrackerOrder;
