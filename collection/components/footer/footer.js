import { Component, h, Prop } from '@stencil/core';
export class Footer {
    render() {
        return (h("div", { class: "uk-section-secondary" },
            h("div", { "uk-margin": true, class: "uk-flex uk-flex-center uk-flex-wrap uk-padding", "uk-toggle": "cls: uk-flex-row-reverse uk-flex-between uk-flex-middle; mode: media; media: 960" },
                h("div", { class: "uk-text-center uk-text-right@m uk-width-1-1 uk-width-expand@m", "uk-margin": true },
                    h("p", { style: { color: "white", fontSize: "16px", margin: "0 0 5px 0" } }, "Zobacz opinie:"),
                    h("slot", { name: "buttons" })),
                h("div", { class: "uk-width-auto" },
                    h("slot", null))),
            h("div", { class: "uk-text-center uk-text-small", style: { backgroundColor: '#181818', padding: '5px' } },
                h("a", { href: this.softwareLink, rel: "nofollow", style: { color: '#A3A3A3' } }, "Oprogramowanie sklepu ShopGold"))));
    }
    static get is() { return "ks-footer"; }
    static get properties() { return {
        "softwareLink": {
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
            "attribute": "software-link",
            "reflect": false
        }
    }; }
}
