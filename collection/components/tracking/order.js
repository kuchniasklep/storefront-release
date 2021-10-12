import { Component, Prop } from '@stencil/core';
import { eachTracker } from '../../global/data/tracker';
export class TrackerOrder {
  constructor() {
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
  static get is() { return "ks-tracker-order"; }
  static get properties() { return {
    "checkout": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "checkout",
      "reflect": false,
      "defaultValue": "false"
    },
    "form": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "form",
      "reflect": false,
      "defaultValue": "false"
    },
    "placed": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placed",
      "reflect": false,
      "defaultValue": "false"
    },
    "eventId": {
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
      "attribute": "event-id",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "products": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ITrackerProduct[] | string",
        "resolved": "ITrackerProduct[] | string",
        "references": {
          "ITrackerProduct": {
            "location": "import",
            "path": "../../global/data/tracker"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "products",
      "reflect": false
    },
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "currency": {
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
      "attribute": "currency",
      "reflect": false,
      "defaultValue": "\"PLN\""
    }
  }; }
}
