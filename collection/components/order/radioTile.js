import { Component, h, Prop, Element, State, Listen, Watch } from '@stencil/core';
export class RadioTile {
  constructor() {
    this.mobile = false;
  }
  CheckHandler() {
    const inputs = document.querySelectorAll(`input[name=${this.name}]`);
    const thisInput = this.root.querySelector("input");
    inputs.forEach((input) => {
      if (input == thisInput)
        this.active = thisInput.checked;
      else {
        const parent = input.parentElement.parentElement;
        parent.active = input.checked;
      }
    });
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.width = "100%";
    this.resizeHandler();
    this.MobileWatcher(this.mobile);
  }
  resizeHandler() {
    if (window.innerWidth <= 620)
      this.mobile = true;
    else
      this.mobile = false;
  }
  MobileWatcher(mobile) {
    this.root.style.maxWidth = mobile ? "100%" : "260px";
  }
  render() {
    const mutedColor = "#eeeeee";
    const titleStyle = {
      backgroundColor: this.active ? this.color : "#a7a7a7",
      transition: "background-color 0.3s ease",
      color: "white",
      height: "50px"
    };
    const priceStyle = {
      fontSize: "20px",
      padding: "5px 10px"
    };
    const infoStyle = {
      backgroundColor: mutedColor,
      padding: "8px",
      fontSize: "16px",
      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.1s ease-in, color 0.1s ease-in"
    };
    return (h("label", null,
      h("input", { hidden: true, type: "radio", name: this.name, value: this.value, onChange: () => this.CheckHandler() }),
      h("div", null,
        this.price ?
          h("div", { class: "uk-flex uk-flex-middle uk-flex-between" + (this.active ? "" : " hover"), style: titleStyle },
            h("div", { class: "uk-flex-auto" },
              h("ks-image", { src: this.logo, alt: this.service, width: "130", height: "40" })),
            h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
          :
            h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle },
              h("ks-image", { src: this.logo, alt: this.service, width: "140", height: "40" })),
        h("div", { class: `uk-flex uk-flex-middle ${this.time ? "uk-flex-between" : "uk-flex-center"}`, style: infoStyle, hidden: this.mobile && !this.active },
          h("div", null, this.service),
          h("div", { class: "uk-text-right" }, this.time)))));
  }
  static get is() { return "ks-radio-tile"; }
  static get originalStyleUrls() { return {
    "$": ["radioTile.css"]
  }; }
  static get styleUrls() { return {
    "$": ["radioTile.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    },
    "color": {
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
      "attribute": "color",
      "reflect": false
    },
    "logo": {
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
      "attribute": "logo",
      "reflect": false
    },
    "price": {
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
      "attribute": "price",
      "reflect": false
    },
    "service": {
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
      "attribute": "service",
      "reflect": false
    },
    "time": {
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
      "attribute": "time",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "active",
      "reflect": true
    }
  }; }
  static get states() { return {
    "mobile": {}
  }; }
  static get elementRef() { return "root"; }
  static get watchers() { return [{
      "propName": "mobile",
      "methodName": "MobileWatcher"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
