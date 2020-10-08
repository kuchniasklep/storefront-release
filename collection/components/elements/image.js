import { Component, h, Prop, State, Method, Watch } from '@stencil/core';
/** @deprecated Ks-image is deprecated. Use ks-img instead. */
export class Image {
  constructor() {
    this.sync = false;
    this.cover = false;
    this.contain = false;
    this.loaded = false;
    this.loadAnimated = false;
  }
  async loadCheck(e) {
    if (e.target instanceof HTMLElement && !e.target.getAttribute("src").includes('data:image'))
      this.loaded = true;
  }
  componentDidUpdate() {
    if (this.loaded && !this.loadAnimated) {
      setTimeout(() => {
        this.loadAnimated = true;
      }, 1000);
    }
  }
  srcListener() {
    this.loaded = false;
    this.loadAnimated = false;
  }
  render() {
    let imageStyle = "";
    if (!this.loaded)
      imageStyle = "uk-invisible uk-position-center";
    else if (!this.loadAnimated)
      imageStyle = "uk-animation-fade";
    if (this.sync)
      return h("img", { src: this.src, width: this.width, height: this.height, alt: this.alt });
    else if (this.cover)
      return (h("div", { class: "uk-cover-container" },
        h("canvas", { width: this.width, height: this.height }),
        !this.loaded ? h("div", { class: "ks-spinner uk-position-center" }) : null,
        h("img", { "uk-cover": true, onLoad: e => this.loadCheck(e), class: imageStyle, width: this.width, height: this.height, "data-src": this.src, alt: this.alt, "uk-img": "target: !ks-image" })));
    else if (this.contain)
      return (h("div", { class: "uk-position-relative" },
        h("canvas", { width: this.width, height: this.height }),
        !this.loaded ? h("div", { class: "ks-spinner uk-position-center" }) : null,
        h("img", { onLoad: e => this.loadCheck(e), class: imageStyle + " uk-position-center uk-responsive-height", "data-src": this.src, width: this.width, height: this.height, alt: this.alt, "uk-img": "target: !ks-image" })));
    else
      return (h("div", { class: "uk-position-relative" },
        !this.loaded ? [
          h("canvas", { width: this.width, height: this.height }),
          h("div", { class: "ks-spinner uk-position-center" })
        ] : null,
        h("img", { onLoad: e => this.loadCheck(e), class: imageStyle, "data-src": this.src, width: this.width, height: this.height, alt: this.alt, "uk-img": "target: !ks-image" })));
  }
  static get is() { return "ks-image"; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
      "reflect": false
    },
    "alt": {
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
      "attribute": "alt",
      "reflect": false
    },
    "width": {
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
      "attribute": "width",
      "reflect": false
    },
    "height": {
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
      "attribute": "height",
      "reflect": false
    },
    "sync": {
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
      "attribute": "sync",
      "reflect": false,
      "defaultValue": "false"
    },
    "cover": {
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
      "attribute": "cover",
      "reflect": false,
      "defaultValue": "false"
    },
    "contain": {
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
      "attribute": "contain",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "loaded": {},
    "loadAnimated": {}
  }; }
  static get methods() { return {
    "loadCheck": {
      "complexType": {
        "signature": "(e: Event) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Event": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "src",
      "methodName": "srcListener"
    }]; }
}
