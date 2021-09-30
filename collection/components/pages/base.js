import { Component, h, Prop, Host, Build } from '@stencil/core';
import { common } from "../../global/data/common";
import { commonDynamic } from "../../global/data/commonDynamic";
export class PageBase {
  componentWillLoad() {
    const commonDataElement = document.getElementById(this.commonData);
    const commonData = JSON.parse(commonDataElement.innerHTML);
    Object.keys(commonData).map(key => {
      common.set(key, commonData[key]);
    });
    if (Build.isBrowser) {
      const commonDynamicDataElement = document.getElementById(this.commonDynamicData);
      const commonDynamicData = JSON.parse(commonDynamicDataElement.innerHTML);
      Object.keys(commonDynamicData).map(key => {
        commonDynamic.set(key, commonDynamicData[key]);
      });
    }
  }
  render() {
    return h(Host, null,
      h("ks-page-header", null),
      h("slot", null),
      h("ks-page-footer", null));
  }
  static get is() { return "ks-page-base"; }
  static get properties() { return {
    "commonData": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "common-data",
      "reflect": false
    },
    "commonDynamicData": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "common-dynamic-data",
      "reflect": false
    }
  }; }
}
