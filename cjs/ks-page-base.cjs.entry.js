'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');
const common = require('./common-2d31a768.js');
const commonDynamic = require('./commonDynamic-c29d1c0d.js');
require('./index-08350893.js');

const PageBase = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const commonDataElement = document.getElementById(this.commonData);
    const commonData = JSON.parse(commonDataElement.innerHTML);
    Object.keys(commonData).map(key => {
      common.common.set(key, commonData[key]);
    });
    {
      const commonDynamicDataElement = document.getElementById(this.commonDynamicData);
      const commonDynamicData = JSON.parse(commonDynamicDataElement.innerHTML);
      Object.keys(commonDynamicData).map(key => {
        commonDynamic.commonDynamic.set(key, commonDynamicData[key]);
      });
    }
  }
  render() {
    return index.h(index.Host, null, index.h("ks-page-header", null), index.h("slot", null), index.h("ks-page-footer", null));
  }
};

exports.ks_page_base = PageBase;
