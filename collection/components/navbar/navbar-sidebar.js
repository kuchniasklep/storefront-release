import { Component, h } from '@stencil/core';
import Tunnel from './navbar-data';
export class NavbarSidebar {
    render() {
        return (h(Tunnel.Consumer, null, ({ categories, links }) => (h("nav", null,
            h("div", { id: "navbar-sidebar", class: "uk-hidden@m", "uk-offcanvas": "flip: true; overlay: true", style: { zIndex: "2147483648" } },
                h("div", { class: "uk-offcanvas-bar uk-width-expand uk-width-medium@s" },
                    h("button", { class: "uk-offcanvas-close", type: "button", "uk-close": true }),
                    h("ul", { class: "uk-nav-default uk-nav-parent-icon", "uk-nav": true },
                        h("li", { class: "uk-nav-header uk-hidden@m" }, "Menu"),
                        h("li", { class: "uk-nav-divider uk-hidden@m" }),
                        links.loginLink ?
                            h("li", null,
                                h("a", { href: links.loginLink },
                                    "Zaloguj si\u0119",
                                    h("span", { "uk-icon": "icon: sign-in", class: "uk-float-right" })))
                            : null,
                        h("li", { class: "uk-hidden@s" },
                            h("a", { href: links.cartLink },
                                "Koszyk",
                                links.cartCount && links.cartCount != "0" ?
                                    h("span", { class: "uk-badge uk-float-right", style: { transform: "translateX(4px)" } }, links.cartCount) :
                                    h("span", { "uk-icon": "icon: cart", class: "uk-float-right" }))),
                        h("li", { class: "uk-hidden@s" },
                            h("a", { href: links.favouritesLink },
                                "Schowek",
                                links.favouritesCount && links.favouritesCount != "0" ?
                                    h("span", { class: "uk-badge uk-float-right", style: { transform: "translateX(4px)" } }, links.favouritesCount) :
                                    h("span", { "uk-icon": "icon: heart", class: "uk-float-right" }))),
                        links.accountLink ?
                            h("li", null,
                                h("a", { href: links.accountLink },
                                    "Panel Klienta",
                                    h("span", { "uk-icon": "icon: user", class: "uk-float-right" })))
                            : null,
                        links.logoutLink ?
                            h("li", null,
                                h("a", { href: links.logoutLink },
                                    "Wyloguj si\u0119",
                                    h("span", { "uk-icon": "icon: sign-out", class: "uk-float-right" })))
                            : null,
                        h("li", { class: "uk-nav-header uk-margin-top" }, "Kategorie"),
                        h("li", { class: "uk-nav-divider" }),
                        categories.map(category => h("li", { class: category.children ? "uk-parent" : "" },
                            h("a", { href: category.children ? "#" : category.url }, category.name),
                            category.children ?
                                h("ul", { class: "uk-nav-sub" }, category.children.map(child => h("li", null,
                                    h("a", { href: child.url }, child.name))))
                                : null)))))))));
    }
    static get is() { return "ks-navbar-sidebar"; }
}
