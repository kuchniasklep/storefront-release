import { Component, h, Prop } from '@stencil/core';
export class About {
    render() {
        return (h("ks-card", null,
            h("div", { class: "uk-padding uk-flex uk-flex-middle" },
                h("div", { class: "uk-flex uk-flex-center uk-flex-middle uk-flex-wrap uk-width-1-1 uk-width-2-5@s uk-width-large@m" },
                    h("a", { href: this.firstLink },
                        h("ks-image", { src: this.firstImage, width: "200", height: "90", alt: "opineo", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" })),
                    h("a", { href: this.secondLink },
                        h("ks-image", { src: this.secondImage, width: "200", height: "90", alt: "ceneo", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" })),
                    h("a", { href: this.thirdLink },
                        h("ks-image", { src: this.thirdImage, width: "200", height: "90", alt: "allegro", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" }))),
                h("div", { class: "uk-width-expand uk-margin-left uk-visible@s uk-text-justify" },
                    h("slot", null)))));
    }
    static get is() { return "ks-about"; }
    static get properties() { return {
        "firstImage": {
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
            "attribute": "first-image",
            "reflect": false
        },
        "firstLink": {
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
            "attribute": "first-link",
            "reflect": false
        },
        "secondImage": {
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
            "attribute": "second-image",
            "reflect": false
        },
        "secondLink": {
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
            "attribute": "second-link",
            "reflect": false
        },
        "thirdImage": {
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
            "attribute": "third-image",
            "reflect": false
        },
        "thirdLink": {
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
            "attribute": "third-link",
            "reflect": false
        }
    }; }
}
