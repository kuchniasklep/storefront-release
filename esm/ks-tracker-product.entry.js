import { r as registerInstance } from './index-5edb5049.js';
import { e as eachTracker } from './store-a33839ba.js';
import './index-4223a160.js';

const TrackerProduct = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventId = "";
    this.currency = "PLN";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.product(this.eventId, this.productId, this.name, this.price, this.currency));
  }
};

export { TrackerProduct as ks_tracker_product };
