import { Component, h, Prop, Element, State, Listen } from '@stencil/core';
export class ProductTab {
  constructor() {
    this.mobile = false;
  }
  ResizeHandler() {
    if (window.innerWidth < 960)
      this.mobile = true;
    else
      this.mobile = false;
  }
  componentWillLoad() {
    this.ResizeHandler();
    this.ImageReplacer();
  }
  render() {
    const isOpen = this.open ? " uk-open" : null;
    if (this.mobile)
      return (h("div", { class: "uk-margin-small-top " + isOpen },
        h("a", { class: "uk-accordion-title uk-h3", href: "#" }, this.name),
        h("div", { class: "uk-accordion-content uk-margin-bottom" },
          h("slot", null))));
    else
      return h("slot", null);
  }
  ImageReplacer() {
    const images = this.root.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const ksImage = document.createElement("ks-image");
      let width = image.style.width.replace("px", "");
      if (width.includes("%")) {
        if (width == "100%")
          width = "1200";
        else
          width = null;
      }
      if (image.style.maxWidth)
        width = image.style.maxWidth.replace("px", "");
      const margin = image.style.margin;
      ksImage.setAttribute("src", image.getAttribute("data-src"));
      ksImage.setAttribute("alt", image.getAttribute("alt"));
      if (width)
        ksImage.setAttribute("width", width);
      ksImage.style.display = "inline-block";
      ksImage.style.margin = margin;
      if (margin.includes("auto")) {
        ksImage.style.textAlign = "center";
        ksImage.style.display = "block";
      }
      image.parentNode.replaceChild(ksImage, image);
    }
  }
  static get is() { return "ks-product-tab"; }
  static get properties() { return {
    "open": {
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
      "attribute": "open",
      "reflect": false
    },
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
    }
  }; }
  static get states() { return {
    "mobile": {}
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "ResizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
