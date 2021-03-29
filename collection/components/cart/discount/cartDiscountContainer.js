import { Component, h, Prop, Element } from '@stencil/core';
import { store } from "../cart-store";
export class CartDiscountContainer {
  constructor() {
    this.codeBanner = "";
    this.codePlaceholder = "";
    this.pointsPlaceholder = "";
    this.pointsMessage = "";
    this.loginMessage = "";
    this.infoMessage = "";
    this.noPointsHeading = "";
    this.noPointsMessage = "";
    this.thresholdHeading = "";
    this.thresholdMessage = "";
    this.loginUrl = "";
    this.loggedIn = false;
    this.disablePoints = false;
  }
  render() {
    const discount = store.get("discount");
    const points = store.get("points");
    const pointsForOrder = store.get("pointsForOrder");
    const productValue = store.get("productValue");
    if (Object.keys(discount).length !== 0) {
      return (h("nav", { class: "uk-animation-fade" },
        h("ks-cart-heading", null, discount.heading),
        h("ks-cart-discount-ticket", { name: discount.name, value: discount.value })));
    }
    const pointsMessage = this.pointsMessage
      .replace("{available}", points.available.toString())
      .replace("{value}", points.value.toFixed(2))
      .replace("{points}", pointsForOrder.toFixed(0));
    const loginMessage = this.loginMessage
      .replace("{points}", pointsForOrder.toFixed(0));
    const noPointsMessage = this.noPointsMessage
      .replace("{points}", pointsForOrder.toFixed(0));
    const thresholdMessage = this.thresholdMessage
      .replace("{threshold}", points.threshold.toFixed(2))
      .replace("{points}", pointsForOrder.toFixed(0));
    return [
      h("div", { class: `uk-animation-fade ${!this.disablePoints ? "flex" : ""}` },
        h("div", null,
          h("ks-cart-heading", null, "KOD RABATOWY"),
          h("ks-cart-discount-code", { placeholder: this.codePlaceholder, image: this.codeBanner })),
        !this.disablePoints ?
          h("div", null,
            h("ks-cart-heading", null, "PUNKTY"),
            this.loggedIn ? (points.available > 0 ?
              productValue >= points.threshold || points.threshold == 0 ?
                h("ks-cart-discount-points", { placeholder: this.pointsPlaceholder, message: pointsMessage, points: points.available, orderPoints: pointsForOrder })
                :
                  h("ks-cart-discount-points-message", { heading: this.thresholdHeading, message: thresholdMessage, points: pointsForOrder })
              :
                h("ks-cart-discount-points-message", { heading: this.noPointsHeading, message: noPointsMessage, points: pointsForOrder })) :
              h("ks-cart-discount-points-login", { message: loginMessage, points: pointsForOrder, "login-url": this.loginUrl }))
          : null),
      this.infoMessage != "" ?
        h("ks-cart-discount-message", null,
          h("span", null, this.infoMessage))
        : null
    ];
  }
  static get is() { return "ks-cart-discount-container"; }
  static get originalStyleUrls() { return {
    "$": ["cartDiscountContainer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartDiscountContainer.css"]
  }; }
  static get properties() { return {
    "codeBanner": {
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
      "attribute": "code-banner",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "codePlaceholder": {
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
      "attribute": "code-placeholder",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "pointsPlaceholder": {
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
      "attribute": "points-placeholder",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "pointsMessage": {
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
      "attribute": "points-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "loginMessage": {
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
      "attribute": "login-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "infoMessage": {
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
      "attribute": "info-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "noPointsHeading": {
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
      "attribute": "no-points-heading",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "noPointsMessage": {
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
      "attribute": "no-points-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "thresholdHeading": {
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
      "attribute": "threshold-heading",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "thresholdMessage": {
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
      "attribute": "threshold-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "loginUrl": {
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
      "attribute": "login-url",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "loggedIn": {
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
      "attribute": "logged-in",
      "reflect": false,
      "defaultValue": "false"
    },
    "disablePoints": {
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
      "attribute": "disable-points",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
