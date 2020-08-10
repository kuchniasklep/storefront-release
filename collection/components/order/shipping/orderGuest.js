import { Component, h, Element } from '@stencil/core';
export class OrderGuest {
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("div", { class: "uk-padding" },
                h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } },
                    h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "ZAM\u00D3W BEZ LOGOWANIA"),
                    h("slot", null)))
        ];
    }
    static get is() { return "ks-order-guest"; }
    static get elementRef() { return "root"; }
}
