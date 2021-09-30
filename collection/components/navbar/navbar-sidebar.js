import { Component, h, State, Method, Element } from '@stencil/core';
import { common } from "../../global/data/common";
import { commonDynamic } from "../../global/data/commonDynamic";
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
    const favouritesCount = commonDynamic.get("heartCount");
    return h("ks-sidepanel", null,
      h("ul", null,
        h("li", { class: "header" }, "MENU"),
        h("li", { class: "divider" }),
        !commonDynamic.get("loggedIn") ?
          h("li", null,
            h("a", { href: common.get("loginLink") },
              "Zaloguj si\u0119 ",
              h("ks-icon", { name: "log-in" })))
          : null,
        h("li", { class: "small" },
          h("a", { href: common.get("heartLink") },
            "Schowek",
            favouritesCount && favouritesCount != 0 ?
              h("span", { class: "badge" }, favouritesCount) :
              h("ks-icon", { name: "star" }))),
        commonDynamic.get("loggedIn") ?
          h("li", null,
            h("a", { href: common.get("accountLink") },
              "Panel Klienta ",
              h("ks-icon", { name: "user" })))
          : null,
        commonDynamic.get("loggedIn") ?
          h("li", null,
            h("a", { href: common.get("logoutLink") },
              "Wyloguj si\u0119 ",
              h("ks-icon", { name: "log-out" })))
          : null,
        h("li", { class: "header" }, "KATEGORIE"),
        h("li", { class: "divider" })),
      common.get('categories').map(category => h("ks-category-sidebar", { category: category })));
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
