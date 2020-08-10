import { Component, h } from '@stencil/core';
export class FooterLinks {
    render() {
        return [
            h("br", { class: "uk-hidden@s" }),
            h("ul", { class: "uk-subnav uk-child-width-1-1 uk-child-width-auto@s uk-text-center uk-margin-small uk-flex-center uk-flex-left@m", "uk-toggle": "cls: uk-subnav-divider; mode: media; media: 640" },
                h("slot", null))
        ];
    }
    static get is() { return "ks-footer-links"; }
    static get originalStyleUrls() { return {
        "$": ["footer-links.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer-links.css"]
    }; }
}
