import { r as registerInstance, h, H as Host } from './index-a14dfead.js';
import { c as common } from './common-cf003c43.js';
import { c as commonDynamic } from './commonDynamic-4e28152d.js';
import './index-c53317e0.js';

const PageBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const commonDataElement = document.getElementById(this.commonData);
    const commonData = JSON.parse(commonDataElement.innerHTML);
    Object.keys(commonData).map(key => {
      common.set(key, commonData[key]);
    });
    {
      const commonDynamicDataElement = document.getElementById(this.commonDynamicData);
      const commonDynamicData = JSON.parse(commonDynamicDataElement.innerHTML);
      Object.keys(commonDynamicData).map(key => {
        commonDynamic.set(key, commonDynamicData[key]);
      });
    }
  }
  render() {
    return h(Host, null, h("ks-page-header", null), h("slot", null), h("ks-page-footer", null));
  }
};

export { PageBase as ks_page_base };
