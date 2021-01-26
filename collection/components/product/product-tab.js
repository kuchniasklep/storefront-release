import { Component, h, Prop, Element } from '@stencil/core';
export class ProductTab {
  componentWillLoad() {
    this.ImageReplacer();
  }
  render() {
    return [
      h("button", { class: "accordion", onClick: () => this.onOpen() },
        this.name,
        h("ks-icon", { name: this.open ? "minus" : "plus" })),
      h("div", { class: "tab-content" },
        h("slot", null))
    ];
  }
  onOpen() {
    this.open = !this.open;
    if (this.open) {
      const tabs = Array.from(this.root.parentElement.children);
      const index = tabs.indexOf(this.root);
      tabs.forEach(element => element.removeAttribute("main"));
      this.main = true;
      this.root.closest('ks-product-tabs').active = index;
    }
  }
  ImageReplacer() {
    const images = this.root.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const ksImage = document.createElement("ks-img");
      ksImage.setAttribute("src", image.getAttribute("data-src"));
      ksImage.setAttribute("alt", image.getAttribute("alt"));
      let height = image.style.height.replace("px", "");
      let width = image.style.width.replace("px", "");
      if (width.includes("%")) {
        if (width == "100%")
          width = "1200";
        else
          width = null;
      }
      if (image.style.maxWidth)
        width = image.style.maxWidth.replace("px", "");
      if (height)
        ksImage.setAttribute("height", height);
      if (width) {
        ksImage.setAttribute("width", width);
        ksImage.style.maxWidth = image.style.width;
      }
      ksImage.style.display = "inline-block";
      const margin = image.style.margin;
      if (margin)
        ksImage.style.padding = margin;
      if (margin.includes("auto")) {
        ksImage.style.textAlign = "center";
        ksImage.style.display = "block";
      }
      image.parentNode.replaceChild(ksImage, image);
    }
  }
  static get is() { return "ks-product-tab"; }
  static get originalStyleUrls() { return {
    "$": ["product-tab.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-tab.css"]
  }; }
  static get properties() { return {
    "main": {
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
      "attribute": "main",
      "reflect": true
    },
    "open": {
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
      "attribute": "open",
      "reflect": true
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
  static get elementRef() { return "root"; }
}
