'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const cartData = require('./cartData-1fa306d1.js');

const cartDiscountContainerCss = "ks-cart-discount-container{display:block;min-height:123px}ks-cart-discount-container>.flex{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}ks-cart-discount-container>.flex>*{width:calc(50% - 4px)}@media only screen and (max-width: 1100px){ks-cart-discount-container>.flex{display:block}ks-cart-discount-container>.flex>*{width:100%;margin-bottom:30px}}";

const CartDiscountContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return (index.h("nav", { class: "uk-animation-fade" }, index.h("ks-cart-heading", null, this.discount.heading), index.h("ks-cart-discount-ticket", { name: this.discount.name, value: this.discount.value, onRemove: () => this.DiscountRemove() })));
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
            index.h("div", { class: `uk-animation-fade ${!this.disablePoints ? "flex" : ""}` }, index.h("div", null, index.h("ks-cart-heading", null, "KOD RABATOWY"), index.h("ks-cart-discount-code", { placeholder: this.codePlaceholder, image: this.codeBanner, onDiscountSubmit: (e) => this.DiscountCodeAdd(e.detail) })), !this.disablePoints ?
                index.h("div", null, index.h("ks-cart-heading", null, "PUNKTY"), this.loggedIn ? (this.points.available > 0 ?
                    this.productValue >= this.points.threshold || this.points.threshold == 0 ?
                        index.h("ks-cart-discount-points", { placeholder: this.pointsPlaceholder, message: pointsMessage, points: this.points.available, orderPoints: this.pointsForOrder, onDiscountSubmit: (e) => this.DiscountPointsAdd(e.detail) })
                        :
                            index.h("ks-cart-discount-points-message", { heading: this.thresholdHeading, message: thresholdMessage, points: this.pointsForOrder })
                    :
                        index.h("ks-cart-discount-points-message", { heading: this.noPointsHeading, message: noPointsMessage, points: this.pointsForOrder })) :
                    index.h("ks-cart-discount-points-login", { message: loginMessage, points: this.pointsForOrder, "login-url": this.loginUrl }))
                : null),
            this.infoMessage != "" ?
                index.h("ks-cart-discount-message", null, index.h("span", null, this.infoMessage))
                : null
        ];
    }
    get root() { return index.getElement(this); }
};
cartData.Tunnel.injectProps(CartDiscountContainer, ['productValue', 'points', 'pointsForOrder', 'discount', 'DiscountRemove', 'DiscountCodeAdd', 'DiscountPointsAdd']);
CartDiscountContainer.style = cartDiscountContainerCss;

exports.ks_cart_discount_container = CartDiscountContainer;
