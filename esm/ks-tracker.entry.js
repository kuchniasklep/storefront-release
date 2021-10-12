import { r as registerInstance } from './index-a14dfead.js';
import { t as tracker, r as resolve } from './tracker-dce0f039.js';
import './index-c53317e0.js';

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
  product(_eventID, productId, name, price, currency) {
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
  addToCart(_eventID, productId, name, price, quantity, currency) {
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
  order_checkout(_eventID, products, value, currency) {
    this.ttq.then(ttq => {
      ttq.track('StartCheckout', {
        contents: this.transformProducts(products),
        currency: currency,
        value: value
      });
    });
  }
  order_form(_eventID, products, value, currency) {
    this.ttq.then(ttq => {
      ttq.track('AddBilling', {
        contents: this.transformProducts(products),
        value: value,
        currency: currency
      });
    });
  }
  order_placed(_eventID, products, value, currency) {
    this.ttq.then(ttq => {
      ttq.track('Checkout', {
        contents: this.transformProducts(products),
        value: value,
        currency: currency
      });
    });
  }
  // @ts-ignore
  search(query) {
    /*
    this.ttq.then(ttq => {
        ttq.track('Search', {
            query: query
        });
    });*/
  }
  transformProducts(products) {
    return products.map(product => {
      return {
        content_id: product.id,
        content_type: 'product',
        content_name: product.name,
        quantity: product.quantity,
        price: product.price
      };
    });
  }
}

class FacebookTracker {
  constructor(ids) {
    const id_array = ids.split(", ");
    this.pixel = new Promise(resolve => {
      // @ts-ignore
      !function (f, b, e, v, n, t, s) {
        if (f.fbq)
          return;
        n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq)
          f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      id_array.forEach(id => {
        fbq('init', id);
      });
      resolve(fbq);
    });
  }
  pageview(eventID) {
    this.pixel.then(fbq => {
      fbq('track', 'PageView', {}, { eventID: eventID });
    });
  }
  product(eventID, productId, name, price, currency) {
    this.pixel.then(fbq => {
      fbq('track', "ViewContent", {
        content_type: 'product',
        content_name: name,
        value: price,
        currency: currency,
        content_ids: [productId]
      }, {
        eventID: eventID
      });
    });
  }
  addToCart(eventID, productId, name, price, quantity, currency) {
    this.pixel.then(fbq => {
      fbq('track', 'AddToCart', {
        content_type: 'product',
        content_name: name,
        value: price,
        currency: currency,
        contents: [
          { id: productId, quantity: quantity }
        ]
      }, {
        eventID: eventID
      });
    });
  }
  order_checkout(eventID, products, value, currency) {
    this.pixel.then(fbq => {
      fbq('track', "InitiateCheckout", {
        contents: this.transformProducts(products),
        content_type: 'product',
        value: value,
        currency: currency
      }, {
        eventID: eventID
      });
    });
  }
  // @ts-ignore
  order_form(eventID, products, value, currency) {
  }
  order_placed(eventID, products, value, currency) {
    this.pixel.then(fbq => {
      fbq('track', 'Purchase', {
        contents: this.transformProducts(products),
        content_type: 'product',
        value: value,
        currency: currency
      }, {
        eventID: eventID
      });
    });
  }
  search(query) {
    this.pixel.then(fbq => {
      fbq('track', "Search", {
        search_string: query
      });
    });
  }
  transformProducts(products) {
    return products.map(product => {
      return {
        id: product.id,
        quantity: product.quantity
      };
    });
  }
}

const Tracker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    tracker.get("loaded").then(() => {
      if (this.tiktok)
        this.appendTracker(new TikTokTracker());
      if (this.facebook)
        this.appendTracker(new FacebookTracker(this.facebook));
      resolve();
    });
  }
  appendTracker(obj) {
    tracker.set("trackers", [...tracker.get('trackers'), obj]);
  }
};

export { Tracker as ks_tracker };
