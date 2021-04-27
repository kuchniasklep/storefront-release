import { Component, h, State, Method, Element } from '@stencil/core';
import { store } from "./navbar-store";
export class NavbarSidebar {
  constructor() {
    this.active = undefined;
    this.toggled = false;
  }
  componentDidRender() {
    this.sidepanel = this.root.querySelector("ks-sidepanel");
  }
  async show() {
    this.sidepanel.show();
  }
  render() {
    const loginLink = store.get("loginLink");
    const favouritesLink = store.get("favouritesLink");
    const accountLink = store.get("accountLink");
    const logoutLink = store.get("logoutLink");
    const favouritesCount = store.get("favouritesCount");
    return h("ks-sidepanel", null,
      h("ul", null,
        h("li", { class: "header" }, "MENU"),
        h("li", { class: "divider" }),
        loginLink ?
          h("li", null,
            h("a", { href: loginLink },
              "Zaloguj si\u0119 ",
              h("ks-icon", { name: "log-in" })))
          : null,
        h("li", { class: "small" },
          h("a", { href: favouritesLink },
            "Schowek",
            favouritesCount && favouritesCount != 0 ?
              h("span", { class: "badge" }, favouritesCount) :
              h("ks-icon", { name: "star" }))),
        accountLink ?
          h("li", null,
            h("a", { href: accountLink },
              "Panel Klienta ",
              h("ks-icon", { name: "user" })))
          : null,
        logoutLink ?
          h("li", null,
            h("a", { href: logoutLink },
              "Wyloguj si\u0119 ",
              h("ks-icon", { name: "log-out" })))
          : null,
        h("li", { class: "header" }, "KATEGORIE"),
        h("li", { class: "divider" })),
      h("slot", null));
  }
  static get is() { return "ks-navbar-sidebar"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-sidebar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-sidebar.css"]
  }; }
  static get states() { return {
    "active": {}
  }; }
  static get methods() { return {
    "show": {
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
