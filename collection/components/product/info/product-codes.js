import { Component, h } from '@stencil/core';
import Tunnel from '../product-data';
export class ProductButtons {
    render() {
        return (h(Tunnel.Consumer, null, (data) => (h("div", { class: "uk-margin-bottom uk-flex uk-flex-center uk-flex-wrap" },
            data.catalog ?
                h("span", { class: "uk-label" },
                    " ",
                    h("b", null, "ID:"),
                    " ",
                    data.catalog,
                    " ")
                : null,
            data.model ?
                h("span", { class: "uk-label" },
                    " ",
                    h("b", null, "Model:"),
                    " ",
                    data.model,
                    " ")
                : null,
            data.ean ?
                h("span", { class: "uk-label" },
                    " ",
                    h("b", null, "EAN:"),
                    " ",
                    data.ean,
                    " ")
                : null,
            data.brand && data.brandLink ?
                h("a", { href: data.brandLink },
                    h("span", { class: "uk-label" },
                        " ",
                        h("b", null, "Producent:"),
                        " ",
                        data.brand,
                        " "))
                : null,
            data.warranty ?
                data.warrantyLink ?
                    h("a", { href: data.warrantyLink },
                        h("span", { class: "uk-label uk-label-danger" },
                            " ",
                            data.warranty,
                            " "))
                    : h("span", { class: "uk-label uk-label-danger" },
                        " ",
                        data.warranty,
                        " ")
                : null))));
    }
    static get is() { return "ks-product-codes"; }
}
