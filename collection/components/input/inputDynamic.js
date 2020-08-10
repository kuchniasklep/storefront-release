import { Component, h, Prop, Element, Method, State } from '@stencil/core';
export class InputDynamic {
    constructor() {
        this.api = "";
        this.message = "";
        this.loading = false;
    }
    componentDidLoad() {
        const input = this.root.querySelector("input");
        const component = this.root.querySelector("ks-input-text");
        component.setAttribute("novalidate", "novalidate");
        input.onchange = () => this.Validate();
    }
    async Validate() {
        const input = this.root.querySelector("input");
        const component = this.root.querySelector("ks-input-text");
        var headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');
        this.ready = new Promise(async (resolve) => {
            await component.Validate();
            if (await component.IsValid()) {
                this.loading = true;
                await fetch(this.api + input.value, {
                    method: 'GET',
                    headers: headers,
                    credentials: "same-origin"
                })
                    .then(response => {
                    if (!response.ok)
                        throw response.status;
                    return response.text();
                })
                    .then(data => {
                    if (data == "false")
                        throw this.message;
                    else if (data != "true")
                        throw data;
                    else
                        resolve(true);
                })
                    .catch(error => {
                    let message = error;
                    if (Number.isInteger(error))
                        message = `Błąd połączenia - ${error}`;
                    else if (!navigator.onLine)
                        message = "Brak połączenia z internetem";
                    component.setAttribute("message", message);
                    resolve(false);
                });
            }
            else
                resolve(false);
            this.loading = false;
        });
    }
    async IsValid() {
        return await this.ready;
    }
    render() {
        return (h("div", { class: "uk-position-relative" },
            h("slot", null),
            this.loading ?
                h("div", { class: "uk-position-absolute uk-animation-fade", style: { top: "7px", right: "7px", animationDuration: "0.3s", animationDelay: "0.5s" }, "uk-spinner": "ratio: 0.9" })
                : null));
    }
    static get is() { return "ks-input-dynamic"; }
    static get properties() { return {
        "api": {
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
            "attribute": "api",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "message": {
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
            "attribute": "message",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get states() { return {
        "loading": {}
    }; }
    static get methods() { return {
        "Validate": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLInputElement": {
                        "location": "global"
                    },
                    "HTMLKsInputTextElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "IsValid": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "root"; }
}
