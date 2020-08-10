import { Component, h, Prop, Element } from '@stencil/core';
import Tunnel from '../cartData';
export class CartDiscountContainer {
    constructor() {
        this.codeBanner = "";
        this.codePlaceholder = "";
        this.pointsPlaceholder = "";
        this.pointsMessage = "";
        this.loginMessage = "";
        this.infoMessage = "";
        this.noPointsHeading = "";
        this.noPointsMessage = "";
        this.thresholdHeading = "";
        this.thresholdMessage = "";
        this.loginUrl = "";
        this.loggedIn = false;
        this.disablePoints = false;
        this.pointsForOrder = 0;
        this.productValue = 0;
        this.points = { threshold: 0, available: 0, value: 0 };
    }
    render() {
        if (this.discount) {
            return (h("nav", { class: "uk-animation-fade" },
                h("ks-cart-heading", null, this.discount.heading),
                h("ks-cart-discount-ticket", { name: this.discount.name, value: this.discount.value, onRemove: () => this.DiscountRemove() })));
        }
        const pointsMessage = this.pointsMessage
            .replace("{available}", this.points.available.toString())
            .replace("{value}", this.points.value.toFixed(2))
            .replace("{points}", this.pointsForOrder.toFixed(0));
        const loginMessage = this.loginMessage
            .replace("{points}", this.pointsForOrder.toFixed(0));
        const noPointsMessage = this.noPointsMessage
            .replace("{points}", this.pointsForOrder.toFixed(0));
        const thresholdMessage = this.thresholdMessage
            .replace("{threshold}", this.points.threshold.toFixed(2))
            .replace("{points}", this.pointsForOrder.toFixed(0));
        return [
            h("div", { class: `uk-animation-fade ${!this.disablePoints ? "flex" : ""}` },
                h("div", null,
                    h("ks-cart-heading", null, "KOD RABATOWY"),
                    h("ks-cart-discount-code", { placeholder: this.codePlaceholder, image: this.codeBanner, onDiscountSubmit: (e) => this.DiscountCodeAdd(e.detail) })),
                !this.disablePoints ?
                    h("div", null,
                        h("ks-cart-heading", null, "PUNKTY"),
                        this.loggedIn ? (this.points.available > 0 ?
                            this.productValue >= this.points.threshold || this.points.threshold == 0 ?
                                h("ks-cart-discount-points", { placeholder: this.pointsPlaceholder, message: pointsMessage, points: this.points.available, orderPoints: this.pointsForOrder, onDiscountSubmit: (e) => this.DiscountPointsAdd(e.detail) })
                                :
                                    h("ks-cart-discount-points-message", { heading: this.thresholdHeading, message: thresholdMessage, points: this.pointsForOrder })
                            :
                                h("ks-cart-discount-points-message", { heading: this.noPointsHeading, message: noPointsMessage, points: this.pointsForOrder })) :
                            h("ks-cart-discount-points-login", { message: loginMessage, points: this.pointsForOrder, "login-url": this.loginUrl }))
                    : null),
            this.infoMessage != "" ?
                h("ks-cart-discount-message", null,
                    h("span", null, this.infoMessage))
                : null
        ];
    }
    static get is() { return "ks-cart-discount-container"; }
    static get originalStyleUrls() { return {
        "$": ["cartDiscountContainer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartDiscountContainer.css"]
    }; }
    static get properties() { return {
        "codeBanner": {
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
            "attribute": "code-banner",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "codePlaceholder": {
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
            "attribute": "code-placeholder",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "pointsPlaceholder": {
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
            "attribute": "points-placeholder",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "pointsMessage": {
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
            "attribute": "points-message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "loginMessage": {
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
            "attribute": "login-message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "infoMessage": {
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
            "attribute": "info-message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "noPointsHeading": {
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
            "attribute": "no-points-heading",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "noPointsMessage": {
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
            "attribute": "no-points-message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "thresholdHeading": {
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
            "attribute": "threshold-heading",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "thresholdMessage": {
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
            "attribute": "threshold-message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "loginUrl": {
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
            "attribute": "login-url",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "loggedIn": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "logged-in",
            "reflect": false,
            "defaultValue": "false"
        },
        "disablePoints": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "disable-points",
            "reflect": false,
            "defaultValue": "false"
        },
        "pointsForOrder": {
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
            "attribute": "points-for-order",
            "reflect": false,
            "defaultValue": "0"
        },
        "productValue": {
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
            "attribute": "product-value",
            "reflect": false,
            "defaultValue": "0"
        },
        "points": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CartDataPoints",
                "resolved": "CartDataPoints",
                "references": {
                    "CartDataPoints": {
                        "location": "import",
                        "path": "../cartData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{threshold: 0, available: 0, value: 0}"
        },
        "discount": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CartDataDiscount",
                "resolved": "CartDataDiscount",
                "references": {
                    "CartDataDiscount": {
                        "location": "import",
                        "path": "../cartData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "RemoveDiscount": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "()=>void",
                "resolved": "() => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "DiscountCodeAdd": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(string)=>void",
                "resolved": "(string: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "DiscountPointsAdd": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(number)=>void",
                "resolved": "(number: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "DiscountRemove": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "()=>void",
                "resolved": "() => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get elementRef() { return "root"; }
}
Tunnel.injectProps(CartDiscountContainer, ['productValue', 'points', 'pointsForOrder', 'discount', 'DiscountRemove', 'DiscountCodeAdd', 'DiscountPointsAdd']);
