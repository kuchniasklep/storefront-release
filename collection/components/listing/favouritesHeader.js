import { Component, h, Element, Prop } from '@stencil/core';
import { RemoveAllFavourites } from '../functions';
export class FavouritesHeader {
    render() {
        const value = this.value
            .replace(".", ",");
        return [
            h("ks-flex", { between: true, middle: true, gutter: true },
                h("div", { class: "uk-text-center uk-width-1-1 uk-width-auto@m ks-text-decorated", style: { padding: "0 20px" } },
                    h("span", { class: "uk-h1" }, "SCHOWEK: "),
                    h("span", { class: "uk-h1 uk-text-danger uk-text-bold", style: { marginLeft: "10px" } }, value)),
                h("div", { class: "uk-text-center uk-width-1-1 uk-width-auto@m" },
                    h("button", { class: "uk-button uk-button-danger uk-border-pill", style: { padding: "3px 30px" }, onClick: () => {
                            RemoveAllFavourites();
                        } }, "WYCZY\u015A\u0106 SCHOWEK"))),
            h("br", { class: "uk-hidden@m" }), h("hr", null)
        ];
    }
    static get is() { return "ks-favourites-header"; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get elementRef() { return "root"; }
}
