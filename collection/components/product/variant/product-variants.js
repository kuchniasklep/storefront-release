import { Component, h, State, Element, Watch, Listen } from '@stencil/core';
export class ProductVariants {
    constructor() {
        this.more = false;
        this.toggle = true;
        this.variantCount = 0;
    }
    componentDidLoad() {
        this.flex = this.root.querySelector("div.uk-flex-wrap");
        this.variantCount = this.root.querySelectorAll("ks-product-variant").length;
        this.ResizeHandler();
        this.ToggleWatcher(this.toggle);
    }
    ToggleWatcher(toggle) {
        if (toggle)
            this.flex.classList.add("ks-variant-max-flex-height");
        else
            this.flex.classList.remove("ks-variant-max-flex-height");
    }
    ResizeHandler() {
        const fullWidth = (window.innerWidth <= 1218 ? window.innerWidth : 1218) - 15;
        const count = Math.round(fullWidth / 120);
        this.width = 100 / count;
        this.maxHeight = fullWidth * (this.width / 100);
        if (window.innerWidth < 640) {
            this.maxHeight *= 2;
            this.more = this.variantCount > count * 2 ? true : false;
        }
        else
            this.more = this.variantCount > count ? true : false;
    }
    render() {
        return (h("div", { class: "uk-margin-top" },
            h("style", { innerHTML: `
					ks-product-variants div.uk-flex-wrap {
						max-width: calc(100% + 18px);
						width: 200%;
						margin: -9px;
					}

					ks-product-variants ks-product-variant {
						width: ${this.width}%;
						padding: 9px;
						box-sizing: border-box;
					}

					ks-product-variants .ks-variant-max-flex-height{
						max-height: ${this.maxHeight}px;
					}
				` }),
            h("div", { class: "uk-flex uk-flex-wrap uk-width-1-1 uk-overflow-hidden" },
                h("slot", null)),
            this.more ?
                h("div", { class: "uk-flex uk-flex-center uk-margin-top" },
                    h("button", { class: "uk-button uk-button-default", style: { backgroundColor: "white", padding: "3px 30px", border: "none", borderRadius: "50px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)" }, onClick: () => this.toggle = !this.toggle }, this.toggle ?
                        h("span", { "uk-icon": "chevron-down" }) :
                        h("span", { "uk-icon": "chevron-up" })))
                : null));
    }
    static get is() { return "ks-product-variants"; }
    static get states() { return {
        "more": {},
        "toggle": {},
        "width": {},
        "maxHeight": {}
    }; }
    static get elementRef() { return "root"; }
    static get watchers() { return [{
            "propName": "toggle",
            "methodName": "ToggleWatcher"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "ResizeHandler",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
