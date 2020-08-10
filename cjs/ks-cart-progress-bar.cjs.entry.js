'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const cartData = require('./cartData-1fa306d1.js');

const cartProgressBarCss = "ks-cart-progress-bar{display:block;padding:25px 30px 30px 30px;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-progress-bar .heading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;font-size:20px;text-shadow:0 0 10px rgba(0, 0, 0, 0.25);color:white}ks-cart-progress-bar .progress{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:35px;border-radius:3px;background-color:rgba(255, 255, 255, 0.219)}ks-cart-progress-bar .progress-fill{height:100%;border-radius:inherit;-webkit-transition:width 0.3s ease;transition:width 0.3s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:white}ks-cart-progress-bar .progress-number{color:#252525;font-size:17px;font-weight:700}ks-cart-progress-bar .outside{color:white;font-size:18px;font-weight:400;margin-left:10px}@media only screen and (max-width: 959px){ks-cart-progress-bar{padding:15px 20px 20px 20px}}@media only screen and (max-width: 520px){ks-cart-progress-bar .heading{display:block;text-align:center}ks-cart-progress-bar .heading>div:first-child{display:block;font-weight:700}}";

const CartProgressBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.numberPlacement = false;
    }
    componentWillLoad() {
        this.resizeHandler();
        if (!this.shippingProgress) {
            this.root.hidden = true;
        }
        else {
            this.root.hidden = false;
            this.root.style.backgroundColor = this.shippingProgress.color;
        }
    }
    resizeHandler() {
        if (this.shippingProgress) {
            const barWidth = Math.min(this.productValue / this.shippingProgress.threshold * 100, 100);
            this.numberPlacement = (barWidth / 100 * window.innerWidth) > 200;
        }
    }
    componentWillUpdate() {
        this.componentWillLoad();
    }
    render() {
        const data = this.shippingProgress;
        if (!data)
            return null;
        const threshold = (Number.isInteger(data.threshold) ?
            data.threshold.toString() :
            data.threshold.toFixed(2)).replace(".", ",");
        const current = this.productValue.toFixed(2).replace(".", ",");
        const barWidth = Math.min(this.productValue / data.threshold * 100, 100);
        const thresholdAchieved = this.productValue >= data.threshold;
        return [
            index.h("div", { class: "heading ks-text-decorated" }, index.h("div", null, data.heading), index.h("div", null, "od ", threshold, " z\u0142")),
            index.h("div", { class: "progress", style: { backgroundColor: thresholdAchieved ? "transparent" : "" } }, index.h("div", { class: "progress-fill", style: { width: `${barWidth}%` } }, this.numberPlacement ?
                index.h("div", { class: "progress-number" }, thresholdAchieved ? index.h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : `${current} zł`)
                : null), !this.numberPlacement ?
                index.h("div", { class: "progress-number outside" }, thresholdAchieved ? index.h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : `${current} zł`)
                : null)
        ];
    }
    get root() { return index.getElement(this); }
};
cartData.Tunnel.injectProps(CartProgressBar, ['productValue', 'shippingProgress']);
CartProgressBar.style = cartProgressBarCss;

exports.ks_cart_progress_bar = CartProgressBar;
