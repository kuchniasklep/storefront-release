import { Component, h, Prop } from '@stencil/core';
export class Footer {
  render() {
    return [
      h("div", { class: "about" },
        h("div", { class: "links" },
          h("slot", null),
          h("div", { class: "contact" },
            h("span", null, "Kontakt"),
            h("a", { href: `mailto:${this.email}` },
              " ",
              h("ks-icon", { name: "mail" }),
              " ",
              this.email,
              " "),
            h("a", { href: `tel:${this.phone}` },
              " ",
              h("ks-icon", { name: "phone" }),
              " ",
              this.phone,
              " "),
            h("span", null,
              h("ks-icon", { name: "clock", size: 0.9 }),
              " ",
              this.time),
            h("span", null,
              h("ks-icon", { name: "home", size: 0.9 }),
              " ",
              this.company),
            h("span", null,
              h("ks-icon", { name: "map-pin", size: 0.9 }),
              " ",
              this.address))),
        h("div", { class: "newsletter" },
          h("div", null, "Zapisz si\u0119 do naszego newslettera i zyskaj"),
          h("div", null, "KUPON 10Z\u0141"),
          h("ks-button", { light: true, border: true, name: "ZAPISZ SI\u0118", onClick: () => document.querySelector('ks-newsletter-popup').Show() }))),
      h("div", { class: "portals" },
        h("div", null,
          h("slot", { name: "social" })),
        h("div", null,
          h("slot", { name: "reviews" }))),
      h("div", { class: "software" },
        h("a", { href: this.softwareLink, rel: "nofollow" }, "Oprogramowanie sklepu ShopGold"))
    ];
  }
  static get is() { return "ks-footer"; }
  static get originalStyleUrls() { return {
    "$": ["footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["footer.css"]
  }; }
  static get properties() { return {
    "softwareLink": {
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
      "attribute": "software-link",
      "reflect": false
    },
    "phone": {
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
      "attribute": "phone",
      "reflect": false
    },
    "email": {
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
      "attribute": "email",
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
    "company": {
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
      "attribute": "company",
      "reflect": false
    },
    "address": {
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
      "attribute": "address",
      "reflect": false
    }
  }; }
}
