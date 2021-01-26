import { Component, h, State, Method, Element } from '@stencil/core';
import { store } from "./navbar-store";
export class NavbarSidebar {
  constructor() {
    this.active = undefined;
    this.toggled = false;
  }
  expand(e, index) {
    if (!store.get("categories")[index].children)
      return;
    e.preventDefault();
    if (this.active == index)
      this.active = undefined;
    else
      this.active = index;
  }
  componentDidRender() {
    this.sidepanel = this.root.querySelector("ks-sidepanel");
  }
  childrenHeight(index, category) {
    if (this.active == index)
      return { maxHeight: (category.children.length + 1) * 34 + "px" };
    return { maxHeight: "0px" };
  }
  async toggle() {
    if (this.toggled)
      this.sidepanel.hide();
    else
      this.sidepanel.show();
    this.toggled = !this.toggled;
  }
  render() {
    const loginLink = store.get("loginLink");
    const cartLink = store.get("cartLink");
    const favouritesLink = store.get("favouritesLink");
    const accountLink = store.get("accountLink");
    const logoutLink = store.get("logoutLink");
    const cartCount = store.get("cartCount");
    const favouritesCount = store.get("favouritesCount");
    return h("ks-sidepanel", null,
      h("nav", null,
        h("button", { class: "close", onClick: () => this.toggle() },
          h("ks-icon", { name: "x" })),
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
            h("a", { href: cartLink },
              "Koszyk",
              cartCount && cartCount != 0 ?
                h("span", { class: "badge" }, cartCount) :
                h("ks-icon", { name: "shopping-bag" }))),
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
          h("li", { class: "divider" }),
          store.get("categories").map((category, index) => h("li", { class: category.children ? "parent" : "" },
            h("a", { href: category.children ? "" : category.url, onClick: (e) => this.expand(e, index) },
              category.name,
              category.children ?
                h("ks-icon", { name: (this.active == index) ? "minus" : "plus" })
                : null),
            category.children ?
              h("ul", { class: "children" + (this.active == index ? " active" : ""), style: this.childrenHeight(index, category) },
                category.children.map(child => h("li", null,
                  h("a", { href: child.url }, child.name))),
                h("li", null,
                  h("a", { href: category.url, class: "seeall" }, "Zobacz wszystko")))
              : null)))));
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
    "toggle": {
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
