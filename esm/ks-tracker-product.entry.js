import { r as registerInstance } from './index-a14dfead.js';
import { e as eachTracker } from './tracker-dce0f039.js';
import './index-c53317e0.js';

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
