'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');
const store = require('./store-c010abe7.js');
require('./index-b0bdcebf.js');

class TikTokTracker {
  constructor() {
    this.ttq = new Promise(resolve => {
      var checkExist = setInterval(() => {
        if (ttq !== undefined) {
          resolve(ttq);
          clearInterval(checkExist);
        }
      }, 100);
    });
  }
  pageview() {
    this.ttq.then(ttq => {
      ttq.track("Browse");
    });
  }
  product(productId, name, price, currency) {
    this.ttq.then(ttq => {
      ttq.track('ViewContent', {
        content_type: 'product',
        content_id: productId,
        content_name: name,
        currency: currency,
        price: price,
        quantity: 1,
        value: price
      });
    });
  }
  addToCart(productId, name, price, quantity, currency) {
    this.ttq.then(ttq => {
      ttq.track('AddToCart', {
        content_type: 'product',
        content_id: productId,
        content_name: name,
        currency: currency,
        price: price,
        quantity: quantity,
        value: price * quantity
      });
    });
  }
  order_checkout(products, value, currency) {
    this.ttq.then(ttq => {
      ttq.track('StartCheckout', {
        contents: this.transformProducts(products),
        currency: currency,
        value: value
      });
    });
  }
  order_form(products, value, currency) {
    this.ttq.then(ttq => {
      ttq.track('AddBilling', {
        contents: this.transformProducts(products),
        value: value,
        currency: currency
      });
    });
  }
  order_placed(products, value, currency) {
    this.ttq.then(ttq => {
      ttq.track('Checkout', {
        contents: this.transformProducts(products),
        value: value,
        currency: currency
      });
    });
  }
  search(query) {
    this.ttq.then(ttq => {
      ttq.track('Search', {
        query: query
      });
    });
  }
  transformProducts(products) {
    return products.map(product => {
      return {
        content_id: product.id,
        content_type: 'product',
        content_name: product.name,
        quantity: 1,
        price: product.price,
      };
    });
  }
}

const Tracker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    store.tracker.get("loaded").then(() => {
      if (this.tiktok)
        this.appendTracker(new TikTokTracker());
      store.resolve();
    });
  }
  appendTracker(obj) {
    store.tracker.set("trackers", [...store.tracker.get('trackers'), obj]);
  }
};

exports.ks_tracker = Tracker;
