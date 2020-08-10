import { Component, h, Prop, Element } from '@stencil/core';
export class OrderChoice {
    CheckHandler() {
        const inputs = document.querySelectorAll(`input[name=${this.name}]`);
        const thisInput = this.root.querySelector("input");
        inputs.forEach((input) => {
            if (input == thisInput)
                this.active = thisInput.checked;
            else {
                const parent = input.parentElement.parentElement;
                parent.active = input.checked;
            }
        });
    }
    componentDidLoad() {
        this.root.style.display = "inline-block";
    }
    render() {
        const style = {
            fontSize: "18px",
            padding: "8px",
            backgroundColor: this.active ? "#252525" : "#F2F2F2",
            color: this.active ? "white" : "black",
            transition: "background-color ease 0.15s, color ease 0.15s"
        };
        return (h("label", null,
            h("input", { hidden: true, type: "radio", name: this.name, value: this.value, checked: this.active, onChange: () => this.CheckHandler() }),
            h("div", { class: "ks-text-decorated uk-text-bold uk-width-1-1 uk-text-center", style: style }, this.text)));
    }
    static get is() { return "ks-order-toggle"; }
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
        },
        "text": {
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
            "attribute": "text",
            "reflect": false
        },
        "active": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active",
            "reflect": true
        }
    }; }
    static get elementRef() { return "root"; }
}
