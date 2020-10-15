import { Component, h, Prop } from '@stencil/core';
export class Footer {
  render() {
    return [
      h("div", { class: "about" },
        h("div", { class: "info" },
          h("div", { class: "contact" },
            h("ks-img", { target: "body", class: "logo", src: this.logo }),
            h("a", { href: `mailto:${this.email}` },
              " ",
              this.email,
              " "),
            h("a", { href: `tel:${this.phone}` },
              " ",
              this.phone,
              " ")),
          h("div", { class: "reviews" },
            h("slot", { name: "buttons" }))),
        h("div", { class: "links" },
          h("slot", null))),
      h("div", { class: "newsletter", onClick: () => document.querySelector('ks-newsletter-popup').Show() },
        h("div", null, "Zapisz si\u0119 do naszego newslettera i zyskaj"),
        h("div", null, "KUPON 10Z\u0141")),
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
    }
  }; }
}
