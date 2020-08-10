import { Component, h, Prop } from '@stencil/core';
export class InfoBanner {
    disable() {
        const id = "ks-info-banner-" + this.name.replace(" ", "");
        sessionStorage.setItem(id, "true");
    }
    render() {
        const id = "ks-info-banner-" + this.name.replace(" ", "");
        let disabled = sessionStorage.getItem(id);
        if (disabled == null)
            return (h("div", { id: id, class: "uk-position-relative", style: { backgroundColor: this.color } },
                h("a", { href: this.link, "aria-label": this.name },
                    h("div", { class: "uk-flex uk-flex-center" },
                        h("ks-image", { width: "600", height: "100", src: this.image, alt: this.name }))),
                h("button", { type: "button", "aria-label": "Schowaj banner", onClick: () => this.disable(), class: "uk-light uk-position-small uk-position-top-right", "uk-close": true, "uk-toggle": "target: #" + id })));
        else
            return;
    }
    static get is() { return "ks-info-banner"; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": false
        },
        "color": {
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
            "attribute": "color",
            "reflect": false
        },
        "image": {
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
            "attribute": "image",
            "reflect": false
        },
        "link": {
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
            "attribute": "link",
            "reflect": false
        }
    }; }
}
