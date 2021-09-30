import { Component, h, State, Method, Listen, Element, Event } from '@stencil/core';
import { common } from '../../global/data/common';
import { commonDynamic } from '../../global/data/commonDynamic';
export class Navbar {
  constructor() {
    this.mobile = false;
  }
  componentDidRender() {
    this.navbarRendered.emit();
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 960 ? true : false;
  }
  async IncrementCart(count = "1") {
    const countInt = parseInt(count);
    const incremented = commonDynamic.get("cartCount") + countInt;
    commonDynamic.set("cartCount", incremented);
  }
  async DecrementCart() {
    const count = commonDynamic.get("cartCount");
    if (count > 0)
      commonDynamic.set("cartCount", count - 1);
  }
  async IncrementHeart() {
    const incremented = commonDynamic.get("heartCount") + 1;
    commonDynamic.set("heartCount", incremented);
  }
  async DecrementHeart() {
    const count = commonDynamic.get("heartCount");
    if (count > 0)
      commonDynamic.set("heartCount", count - 1);
  }
  render() {
    const heartCount = commonDynamic.get("heartCount");
    const cartCount = commonDynamic.get("cartCount");
    return [
      h("nav", null,
        h("div", { class: "logo" },
          h("div", null,
            h("a", { href: "/" },
              h("ks-img", { contained: true, sync: true, src: common.get("logo"), width: 217, height: 35, alt: "kuchniasklep.pl" })),
            common.get("promo") ? common.get("promoLink") && !this.mobile ?
              h("a", { class: "promo", href: common.get("promoLink") }, common.get("promo")) :
              h("span", { class: "promo" }, common.get("promo"))
              : null)),
        h("div", { class: "search" },
          h("ks-navbar-search", null)),
        h("div", { class: "buttons", id: "ks-navbar-menu-buttons" },
          h("ks-navbar-button", { name: "Kontakt", icon: "phone", class: "tablet-desktop", onClick: () => this.root.querySelector("ks-navbar-contact-panel").Toggle() }),
          commonDynamic.get('loggedIn') ?
            h("ks-navbar-button", { name: "Twoje konto", link: common.get('accountLink'), icon: "user", class: "desktop" })
            : null,
          h("ks-navbar-button", { name: "Schowek", link: common.get('heartLink'), icon: "star", count: heartCount, class: "tablet-desktop" }),
          h("ks-navbar-button", { name: "Koszyk", link: common.get('cartLink'), icon: "shopping-bag", count: cartCount }),
          !commonDynamic.get('loggedIn') ?
            h("ks-navbar-button", { name: "Zaloguj", link: common.get('loginLink'), icon: "user", class: "desktop" })
            : null,
          commonDynamic.get('loggedIn') ?
            h("ks-navbar-button", { name: "Wyloguj", link: common.get('logoutLink'), icon: "log-out", class: "desktop" })
            : null,
          h("ks-navbar-button", { name: "Menu", icon: "menu", class: "mobile-tablet", onClick: () => this.root.querySelector("ks-navbar-sidebar").show() })),
        h("ks-navbar-contact-panel", { phone: common.get('phone'), email: common.get('email'), contact: common.get('company') })),
      h("ks-navbar-categories", null),
      h("ks-navbar-sidebar", null),
      h("ks-navbar-search", { mobile: true })
    ];
  }
  static get is() { return "ks-navbar"; }
  static get originalStyleUrls() { return {
    "$": ["navbar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar.css"]
  }; }
  static get states() { return {
    "mobile": {}
  }; }
  static get events() { return [{
      "method": "navbarRendered",
      "name": "navbarRendered",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "IncrementCart": {
      "complexType": {
        "signature": "(count?: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
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
    },
    "DecrementCart": {
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
    },
    "IncrementHeart": {
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
    },
    "DecrementHeart": {
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
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
