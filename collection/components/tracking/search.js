import { Component, Prop } from '@stencil/core';
import { eachTracker } from './store';
export class TrackerProduct {
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.search(this.query));
  }
  static get is() { return "ks-tracker-search"; }
  static get properties() { return {
    "query": {
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
      "attribute": "query",
      "reflect": false
    }
  }; }
}
