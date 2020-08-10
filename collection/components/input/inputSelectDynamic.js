import { Component, h, Prop, State, Watch, Method } from '@stencil/core';
export class InputSelectDynamic {
    constructor() {
        this.apiData = "";
        this.lightUp = false;
        this.data = new Array();
        this.loading = false;
        this.message = "";
    }
    async FetchData() {
        var headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');
        this.loading = true;
        this.message = "";
        await fetch(this.api + this.apiData, {
            method: 'GET',
            headers: headers,
            credentials: "same-origin"
        })
            .then(response => {
            if (!response.ok)
                throw response.status;
            return response.json();
        })
            .then(data => {
            this.data = data;
        })
            .catch(error => {
            let message = error;
            if (Number.isInteger(error))
                message = `Błąd połączenia - ${error}`;
            else if (!navigator.onLine)
                message = "Brak połączenia z internetem. ";
            this.message = message;
        });
        this.loading = false;
    }
    async Validate() {
        this.lightUp = false;
    }
    async IsValid() {
        return !this.loading && this.message == "";
    }
    componentWillLoad() {
        this.FetchData();
    }
    Decode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
    render() {
        return (h("div", { class: "uk-position-relative" },
            h("ks-input-select", { name: this.name, label: this.label, error: this.message != "", "light-up": this.lightUp }, this.data.map((item) => h("option", { selected: this.selectedId == item.value ? true : false, value: item.value }, this.Decode(item.name)))),
            this.loading ?
                h("div", { class: "uk-position-absolute uk-animation-fade", style: { top: "20px", left: "0px", width: "100%", height: "50px", backgroundColor: "rgba(255, 255, 255, 0.7)" } },
                    h("div", { "uk-spinner": true, class: "uk-position-center" }))
                : null,
            this.message != "" ?
                h("div", { class: "uk-position-absolute", style: { top: "20px", left: "0px", width: "100%", height: "50px", backgroundColor: "rgba(255, 255, 255)" } },
                    h("p", { class: "uk-position-center uk-text-danger" },
                        this.message,
                        " ",
                        h("a", { onClick: () => this.FetchData() }, "Od\u015Bwie\u017C")))
                : null));
    }
    static get is() { return "ks-input-select-dynamic"; }
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
        "label": {
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
            "attribute": "label",
            "reflect": false
        },
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
            "reflect": false
        },
        "apiData": {
            "type": "string",
            "mutable": true,
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
            "attribute": "api-data",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "selectedId": {
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
            "attribute": "selected-id",
            "reflect": false
        },
        "lightUp": {
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
            "attribute": "light-up",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "data": {},
        "loading": {},
        "message": {}
    }; }
    static get methods() { return {
        "Validate": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
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
    static get watchers() { return [{
            "propName": "apiData",
            "methodName": "FetchData"
        }]; }
}
