import { r as registerInstance } from './index-f323e182.js';
import { e as eachTracker } from './store-06ef0521.js';
import './index-6478ec90.js';

const TrackerProduct = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.currency = "PLN";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.product(this.productId, this.name, this.price, this.currency));
  }
};

export { TrackerProduct as ks_tracker_product };
