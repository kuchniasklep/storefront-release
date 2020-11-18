import { Component, h, Prop, State, Method, Listen, Element } from '@stencil/core';
import Tunnel from './navbar-data';
export class Navbar {
  constructor() {
    this.data = { links: {}, categories: [] };
    this.mobile = false;
  }
  async componentDidLoad() {
    let cachedCategories = sessionStorage.getItem("category-data");
    if (cachedCategories == null) {
      var headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      const json = await fetch(this.categoryUrl, { method: 'GET', headers: headers })
        .then(response => response.json());
      const jsonString = JSON.stringify(json);
      sessionStorage.setItem("category-data", jsonString);
      cachedCategories = jsonString;
    }
    this.data.categories = JSON.parse(cachedCategories);
    this.render();
  }
  componentWillLoad() {
    this.data.links = {
      cartLink: this.cartLink,
      cartCount: this.cartCount,
      favouritesCount: this.heartCount,
      favouritesLink: this.heartLink,
      loginLink: this.loginLink,
      logoutLink: this.logoutLink,
      accountLink: this.accountLink
    };
    this.resizeHandler();
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 960 ? true : false;
  }
  async IncrementCart(count = "1") {
    const countInt = parseInt(count);
    const data = Object.assign({}, this.data);
    data.links.cartCount += countInt;
    this.data = data;
  }
  async DecrementCart() {
    const data = Object.assign({}, this.data);
    if (data.links.cartCount > 0) {
      data.links.cartCount--;
      this.data = data;
    }
  }
  async IncrementHeart() {
    const data = Object.assign({}, this.data);
    data.links.favouritesCount++;
    this.data = data;
  }
  async DecrementHeart() {
    const data = Object.assign({}, this.data);
    if (data.links.favouritesCount > 0) {
      data.links.favouritesCount--;
      this.data = data;
    }
  }
  render() {
    const favouritesCount = this.data.links.favouritesCount;
    const cartCount = this.data.links.cartCount;
    return [
      h("nav", null,
        h("ks-img", { contained: true, class: "logo", sync: true, src: this.logo, width: 217, height: 35, alt: "kuchniasklep.pl" }),
        h("ks-navbar-search", null),
        h("ks-navbar-contact-panel", { phone: this.phone, email: this.email, contact: this.contact }),
        h("div", { id: "ks-navbar-menu-buttons" },
          h("ks-navbar-button", { name: "Kontakt", icon: "phone", onClick: () => this.root.querySelector("ks-navbar-contact-panel").Toggle() }),
          this.accountLink ?
            h("ks-navbar-button", { name: "Twoje konto", link: this.accountLink, icon: "user", class: "desktop" })
            : null,
          h("ks-navbar-button", { name: "Schowek", link: this.heartLink, icon: "star", count: favouritesCount, class: "tablet-desktop" }),
          h("ks-navbar-button", { name: "Koszyk", link: this.cartLink, icon: "shopping-bag", count: cartCount, class: "tablet-desktop" }),
          this.loginLink ?
            h("ks-navbar-button", { name: "Zaloguj", link: this.loginLink, icon: "key", class: "desktop" })
            : null,
          this.logoutLink ?
            h("ks-navbar-button", { name: "Wyloguj", link: this.logoutLink, icon: "log-out", class: "desktop" })
            : null,
          h("ks-navbar-button", { name: "Menu", link: "#navbar-sidebar", toggle: true, icon: "menu", class: "mobile-tablet" }))),
      h(Tunnel.Provider, { state: this.data }, !this.mobile ?
        h("ks-navbar-categories-expanded", null)
        : [
          h("ks-navbar-search-mobile", null),
          h("ks-navbar-sidebar", null)
        ])
    ];
  }
  static get is() { return "ks-navbar"; }
  static get originalStyleUrls() { return {
    "$": ["navbar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar.css"]
  }; }
  static get properties() { return {
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
    "cartLink": {
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
      "attribute": "cart-link",
      "reflect": false
    },
    "cartCount": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cart-count",
      "reflect": false
    },
    "heartLink": {
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
      "attribute": "heart-link",
      "reflect": false
    },
    "heartCount": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "heart-count",
      "reflect": false
    },
    "loginLink": {
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
      "attribute": "login-link",
      "reflect": false
    },
    "logoutLink": {
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
      "attribute": "logout-link",
      "reflect": false
    },
    "accountLink": {
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
      "attribute": "account-link",
      "reflect": false
    },
    "categoryUrl": {
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
      "attribute": "category-url",
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
    "contact": {
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
      "attribute": "contact",
      "reflect": false
    }
  }; }
  static get states() { return {
    "data": {},
    "mobile": {}
  }; }
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
