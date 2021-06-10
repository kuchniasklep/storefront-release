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
      const ksImage = document.createElement("ks-img2");
      ksImage.setAttribute("src", image.getAttribute("data-src"));
      ksImage.setAttribute("alt", image.getAttribute("alt"));
      ksImage.setAttribute("horizontal", "horizontal");
      ksImage.className = image.className;
      let height = image.style.height.replace("px", "");
      let width = image.style.width.replace("px", "");
      ksImage.style.width = width + "px";
      ksImage.style.height = "auto";
      ksImage.style.maxWidth = "100%";
      if (ksImage.style.width)
        ksImage.style.width = image.style.width;
      if (image.style.maxWidth)
        ksImage.style.width = image.style.maxWidth;
      if (height && !height.includes("%"))
        ksImage.setAttribute("height", height);
      if (width && !width.includes("%"))
        ksImage.setAttribute("width", width);
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
