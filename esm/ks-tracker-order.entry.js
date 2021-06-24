import { r as registerInstance } from './index-f323e182.js';
import { e as eachTracker } from './store-06ef0521.js';
import './index-6478ec90.js';

const TrackerOrder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkout = false;
    this.form = false;
    this.placed = false;
    this.currency = "PLN";
  }
  componentWillLoad() {
    const products = typeof this.products == "string" ?
      JSON.parse(this.products) : this.products;
    eachTracker(item => {
      if (this.checkout)
        item === null || item === void 0 ? void 0 : item.order_checkout(products, this.value, this.currency);
      else if (this.form)
        item === null || item === void 0 ? void 0 : item.order_form(products, this.value, this.currency);
      else if (this.placed)
        item === null || item === void 0 ? void 0 : item.order_placed(products, this.value, this.currency);
    });
  }
};

export { TrackerOrder as ks_tracker_order };
