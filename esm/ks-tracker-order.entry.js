import { r as registerInstance } from './index-a14dfead.js';
import { e as eachTracker } from './store-90a4ba2a.js';
import './index-c53317e0.js';

const TrackerOrder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkout = false;
    this.form = false;
    this.placed = false;
    this.eventId = "";
    this.currency = "PLN";
  }
  componentWillLoad() {
    const products = typeof this.products == "string" ?
      JSON.parse(this.products) : this.products;
    eachTracker(item => {
      if (this.checkout)
        item === null || item === void 0 ? void 0 : item.order_checkout(this.eventId, products, this.value, this.currency);
      else if (this.form)
        item === null || item === void 0 ? void 0 : item.order_form(this.eventId, products, this.value, this.currency);
      else if (this.placed)
        item === null || item === void 0 ? void 0 : item.order_placed(this.eventId, products, this.value, this.currency);
    });
  }
};

export { TrackerOrder as ks_tracker_order };
