import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './cartData-be1433a0.js';
var cartProgressBarCss = "ks-cart-progress-bar{display:block;padding:25px 30px 30px 30px;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-progress-bar .heading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;font-size:20px;text-shadow:0 0 10px rgba(0, 0, 0, 0.25);color:white}ks-cart-progress-bar .progress{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:35px;border-radius:3px;background-color:rgba(255, 255, 255, 0.219)}ks-cart-progress-bar .progress-fill{height:100%;border-radius:inherit;-webkit-transition:width 0.3s ease;transition:width 0.3s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:white}ks-cart-progress-bar .progress-number{color:#252525;font-size:17px;font-weight:700}ks-cart-progress-bar .outside{color:white;font-size:18px;font-weight:400;margin-left:10px}@media only screen and (max-width: 959px){ks-cart-progress-bar{padding:15px 20px 20px 20px}}@media only screen and (max-width: 520px){ks-cart-progress-bar .heading{display:block;text-align:center}ks-cart-progress-bar .heading>div:first-child{display:block;font-weight:700}}";
var CartProgressBar = /** @class */ (function () {
    function CartProgressBar(hostRef) {
        registerInstance(this, hostRef);
        this.numberPlacement = false;
    }
    CartProgressBar.prototype.componentWillLoad = function () {
        this.resizeHandler();
        if (!this.shippingProgress) {
            this.root.hidden = true;
        }
        else {
            this.root.hidden = false;
            this.root.style.backgroundColor = this.shippingProgress.color;
        }
    };
    CartProgressBar.prototype.resizeHandler = function () {
        if (this.shippingProgress) {
            var barWidth = Math.min(this.productValue / this.shippingProgress.threshold * 100, 100);
            this.numberPlacement = (barWidth / 100 * window.innerWidth) > 200;
        }
    };
    CartProgressBar.prototype.componentWillUpdate = function () {
        this.componentWillLoad();
    };
    CartProgressBar.prototype.render = function () {
        var data = this.shippingProgress;
        if (!data)
            return null;
        var threshold = (Number.isInteger(data.threshold) ?
            data.threshold.toString() :
            data.threshold.toFixed(2)).replace(".", ",");
        var current = this.productValue.toFixed(2).replace(".", ",");
        var barWidth = Math.min(this.productValue / data.threshold * 100, 100);
        var thresholdAchieved = this.productValue >= data.threshold;
        return [
            h("div", { class: "heading ks-text-decorated" }, h("div", null, data.heading), h("div", null, "od ", threshold, " z\u0142")),
            h("div", { class: "progress", style: { backgroundColor: thresholdAchieved ? "transparent" : "" } }, h("div", { class: "progress-fill", style: { width: barWidth + "%" } }, this.numberPlacement ?
                h("div", { class: "progress-number" }, thresholdAchieved ? h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : current + " z\u0142")
                : null), !this.numberPlacement ?
                h("div", { class: "progress-number outside" }, thresholdAchieved ? h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : current + " z\u0142")
                : null)
        ];
    };
    Object.defineProperty(CartProgressBar.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CartProgressBar;
}());
Tunnel.injectProps(CartProgressBar, ['productValue', 'shippingProgress']);
CartProgressBar.style = cartProgressBarCss;
export { CartProgressBar as ks_cart_progress_bar };
