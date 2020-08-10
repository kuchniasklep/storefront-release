import { Component, h, Prop, Element, State, Listen } from '@stencil/core';
export class OrderProgress {
    constructor() {
        this.mobile = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.root.style.width = "100%";
    }
    resizeHandler() {
        this.mobile = window.innerWidth < 800 ? true : false;
    }
    componentWillLoad() {
        this.resizeHandler();
    }
    StepStyle(step) {
        const tile = {
            padding: this.mobile ? "20px" : "30px",
            backgroundColor: "#252525",
            color: "white",
            borderLeft: "1px solid #404040"
        };
        const active = Object.assign(Object.assign({}, tile), { backgroundColor: "#404040", borderLeft: "1px solid #404040" });
        if (this.mobile)
            return tile;
        if (step == this.current)
            return active;
        else
            return tile;
    }
    render() {
        return [
            h("div", { class: "uk-text-center uk-flex uk-flex-evenly ks-text-decorated " + (this.mobile ? "uk-child-width-1-1" : "uk-child-width-1-3"), style: { fontSize: "16px", backgroundColor: "#252525" } },
                !this.mobile || this.current == 0 ?
                    h("div", { style: this.StepStyle(0) },
                        h("span", { "uk-icon": "icon: cart; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-3px)" } }),
                        " Koszyk")
                    : null,
                !this.mobile || this.current == 1 ?
                    h("div", { style: this.StepStyle(1) },
                        h("span", { "uk-icon": "icon: user; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-2px)" } }),
                        " Dane do wys\u0142ki")
                    : null,
                !this.mobile || this.current == 2 ?
                    h("div", { style: this.StepStyle(2) },
                        h("span", { "uk-icon": "icon: check; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-1px)" } }),
                        " Potwierdzenie")
                    : null)
        ];
    }
    static get is() { return "ks-order-progress"; }
    static get properties() { return {
        "current": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "current",
            "reflect": false
        }
    }; }
    static get states() { return {
        "mobile": {}
    }; }
    static get elementRef() { return "root"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "resizeHandler",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
