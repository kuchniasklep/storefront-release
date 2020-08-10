import { Component, h } from '@stencil/core';
import Tunnel from '../product-data';
export class ProductTitle {
    render() {
        return (h(Tunnel.Consumer, null, ({ name, breadcrumbs }) => (h("div", { class: "uk-text-center uk-text-left@m uk-margin-bottom" },
            h("h1", { style: { marginBottom: "5px" } },
                h("b", null, name)),
            h("ks-breadcrumbs", { center: true, mobile: true }, breadcrumbs.map(item => h("li", null,
                h("a", { href: item.link }, item.name))))))));
    }
    static get is() { return "ks-product-title"; }
}
