import { Component, h } from '@stencil/core';
import { store } from "./navbar-store";
export class NavbarSidebar {
  render() {
    const loginLink = store.get("loginLink");
    const cartLink = store.get("cartLink");
    const favouritesLink = store.get("favouritesLink");
    const accountLink = store.get("accountLink");
    const logoutLink = store.get("logoutLink");
    const cartCount = store.get("cartCount");
    const favouritesCount = store.get("favouritesCount");
    return h("nav", null,
      h("div", { id: "navbar-sidebar", class: "uk-hidden@m", "uk-offcanvas": "flip: true; overlay: true", style: { zIndex: "2147483648" } },
        h("div", { class: "uk-offcanvas-bar uk-width-expand uk-width-medium@s" },
          h("button", { class: "uk-offcanvas-close", type: "button", "uk-close": true }),
          h("ul", { class: "uk-nav-default uk-nav-parent-icon", "uk-nav": true },
            h("li", { class: "uk-nav-header uk-hidden@m" }, "Menu"),
            h("li", { class: "uk-nav-divider uk-hidden@m" }),
            loginLink ?
              h("li", null,
                h("a", { href: loginLink },
                  "Zaloguj si\u0119 ",
                  h("ks-icon", { name: "log-in", class: "uk-float-right" })))
              : null,
            h("li", { class: "uk-hidden@s" },
              h("a", { href: cartLink },
                "Koszyk",
                cartCount && cartCount != 0 ?
                  h("span", { class: "uk-badge uk-float-right", style: { transform: "translateX(4px)" } }, cartCount) :
                  h("ks-icon", { name: "shopping-bag", class: "uk-float-right" }))),
            h("li", { class: "uk-hidden@s" },
              h("a", { href: favouritesLink },
                "Schowek",
                favouritesCount && favouritesCount != 0 ?
                  h("span", { class: "uk-badge uk-float-right", style: { transform: "translateX(4px)" } }, favouritesCount) :
                  h("ks-icon", { name: "star", class: "uk-float-right" }))),
            accountLink ?
              h("li", null,
                h("a", { href: accountLink },
                  "Panel Klienta",
                  h("ks-icon", { name: "user", class: "uk-float-right" })))
              : null,
            logoutLink ?
              h("li", null,
                h("a", { href: logoutLink },
                  "Wyloguj si\u0119",
                  h("ks-icon", { name: "log-out", class: "uk-float-right" })))
              : null,
            h("li", { class: "uk-nav-header uk-margin-top" }, "Kategorie"),
            h("li", { class: "uk-nav-divider" }),
            store.get("categories").map(category => h("li", { class: category.children ? "uk-parent" : "" },
              h("a", { href: category.children ? "#" : category.url }, category.name),
              category.children ?
                h("ul", { class: "uk-nav-sub" }, category.children.map(child => h("li", null,
                  h("a", { href: child.url }, child.name))))
                : null))))));
  }
  static get is() { return "ks-navbar-sidebar"; }
}
