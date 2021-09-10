import { r as registerInstance } from './index-f323e182.js';
import { e as eachTracker } from './store-06ef0521.js';
import './index-6478ec90.js';

const TrackerPageView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventId = "";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview(this.eventId));
  }
};

export { TrackerPageView as ks_tracker_pageview };
