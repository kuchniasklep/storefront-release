import { Component, h, Prop, State, Method, Listen, Element, Event } from '@stencil/core';
import { store } from "./navbar-store";
export class Navbar {
  constructor() {
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
    store.set("categories", JSON.parse(cachedCategories));
    this.render();
  }
  componentDidRender() {
    this.navbarRendered.emit();
  }
  componentWillLoad() {
    store.set("cartLink", this.cartLink);
    store.set("cartCount", this.cartCount);
    store.set("favouritesCount", this.heartCount);
    store.set("favouritesLink", this.heartLink);
    store.set("loginLink", this.loginLink);
    store.set("logoutLink", this.logoutLink);
    store.set("accountLink", this.accountLink);
    this.resizeHandler();
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 960 ? true : false;
  }
  async IncrementCart(count = "1") {
    const countInt = parseInt(count);
    const incremented = store.get("cartCount") + countInt;
    store.set("cartCount", incremented);
  }
  async DecrementCart() {
    const count = store.get("cartCount");
    if (count > 0)
      store.set("cartCount", count - 1);
  }
  async IncrementHeart() {
    const incremented = store.get("favouritesCount") + 1;
    store.set("favouritesCount", incremented);
  }
  async DecrementHeart() {
    const count = store.get("favouritesCount");
    if (count > 0)
      store.set("favouritesCount", count - 1);
  }
  render() {
    const favouritesCount = store.get("favouritesCount");
    const cartCount = store.get("cartCount");
    return [
      h("nav", null,
        h("div", { class: "logo" },
          h("div", null,
            h("a", { href: "/" },
              h("ks-img", { contained: true, sync: true, src: this.logo, width: 217, height: 35, alt: "kuchniasklep.pl" })),
            this.promo ? this.promoLink && !this.mobile ?
              h("a", { class: "promo", href: this.promoLink }, this.promo) :
              h("span", { class: "promo" }, this.promo)
              : null)),
        h("div", { class: "search" },
          h("ks-navbar-search", null)),
        h("div", { class: "buttons", id: "ks-navbar-menu-buttons" },
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
          h("ks-navbar-button", { name: "Menu", icon: "menu", class: "mobile-tablet", onClick: () => this.root.querySelector("ks-navbar-sidebar").toggle() })),
        h("ks-navbar-contact-panel", { phone: this.phone, email: this.email, contact: this.contact })),
      !this.mobile ?
        h("ks-navbar-categories", null)
        : [
          h("ks-navbar-search-mobile", null),
          h("ks-navbar-sidebar", null)
        ]
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
    "promo": {
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
      "attribute": "promo",
      "reflect": false
    },
    "promoLink": {
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
      "attribute": "promo-link",
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
