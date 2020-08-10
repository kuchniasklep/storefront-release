import { Component, h, Prop, Event, Method, State } from '@stencil/core';
export class CartSpinner {
    constructor() {
        this.initialValue = 1;
        this.value = 1;
    }
    componentWillLoad() {
        this.value = this.initialValue;
    }
    Increment() {
        const last = this.value;
        if (typeof this.max === "undefined" || this.value < this.max) {
            this.value += 1;
            this.onChangedHandler(this.value, last);
        }
    }
    Decrement() {
        const last = this.value;
        if (this.value > 1) {
            this.value -= 1;
            this.onChangedHandler(this.value, last);
        }
    }
    Change(e) {
        const last = this.value;
        const input = e.target;
        const parsed = parseInt(input.value);
        if (!isNaN(parsed) && parsed > 0 && (typeof this.max === "undefined" || parsed <= this.max))
            this.value = parsed;
        else if (parsed > this.max) {
            this.value = this.max;
            input.value = this.max.toString();
        }
        else {
            this.value = 1;
            input.value = "1";
        }
        this.onChangedHandler(this.value, last);
    }
    onChangedHandler(current, last) {
        this.changed.emit({ current, last });
    }
    async SetAmount(amount) {
        this.value = amount;
    }
    render() {
        return (this.max == 1 ?
            h("div", null, "1 szt.") :
            h("div", null,
                h("button", { class: "uk-button uk-button-muted", onClick: () => this.Decrement() }, "-"),
                h("input", { type: "text", maxlength: "3", value: this.value, name: this.name, onChange: (e) => this.Change(e), class: "uk-input" }),
                h("button", { class: "uk-button uk-button-muted", onClick: () => this.Increment() }, "+")));
    }
    static get is() { return "ks-cart-spinner"; }
    static get originalStyleUrls() { return {
        "$": ["cartSpinner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartSpinner.css"]
    }; }
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
        "initialValue": {
            "type": "number",
            "mutable": true,
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
            "attribute": "initial-value",
            "reflect": false,
            "defaultValue": "1"
        },
        "max": {
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
            "attribute": "max",
            "reflect": false
        }
    }; }
    static get states() { return {
        "value": {}
    }; }
    static get events() { return [{
            "method": "changed",
            "name": "changed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "SetAmount": {
            "complexType": {
                "signature": "(amount: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
