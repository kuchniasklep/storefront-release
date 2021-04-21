import { Component, h, Prop, Element, Method } from '@stencil/core';
export class PromotionalPopup {
  constructor() {
    this.color = "#FFFFFF";
    this.textureOpacity = "1.0";
    this.textureSize = "200";
    this.displayOnLoad = false;
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector("ks-dialog");
    const cookieName = this.name + "Popup";
    if (this.displayOnLoad && document.cookie.search(`${cookieName}=tak`) == -1) {
      setTimeout(() => {
        this.Show();
      }, 4000);
    }
  }
  async Show() {
    this.dialog.show();
  }
  SetCookie() {
    const cookieName = this.name + "Popup";
    var expiration = "";
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    expiration = "expires=" + expirationDate.toUTCString() + "; ";
    document.cookie = `${cookieName}=tak; ` + expiration + "path=/";
  }
  render() {
    const bgstyle = {
      backgroundColor: this.color
    };
    const texturestyle = {
      backgroundImage: `url("${this.texture}")`,
      backgroundSize: `${this.textureSize}px ${this.textureSize}px`,
      opacity: this.textureOpacity
    };
    return [
      h("ks-dialog", { smallmobile: true, dark: true, nopadding: true, onClosed: () => this.SetCookie() },
        h("div", { class: "info", style: bgstyle },
          h("div", { class: "texture", style: texturestyle }),
          h("ks-img2", { src: this.image })))
    ];
  }
  static get is() { return "ks-promotional-popup"; }
  static get originalStyleUrls() { return {
    "$": ["promotional-popup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["promotional-popup.css"]
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
    "image": {
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
      "attribute": "image",
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
      "reflect": false,
      "defaultValue": "\"#FFFFFF\""
    },
    "texture": {
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
      "attribute": "texture",
      "reflect": false
    },
    "textureOpacity": {
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
      "attribute": "texture-opacity",
      "reflect": false,
      "defaultValue": "\"1.0\""
    },
    "textureSize": {
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
      "attribute": "texture-size",
      "reflect": false,
      "defaultValue": "\"200\""
    },
    "displayOnLoad": {
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
      "attribute": "display-on-load",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "Show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
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
  static get elementRef() { return "root"; }
}
