import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var miniCartCss = "ks-mini-cart{display:block;position:-webkit-sticky;position:sticky;top:0;float:right;width:400px;padding:5px 20px;color:#151515}ks-mini-cart .arrow{position:relative;left:300px;width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #ffffff}ks-mini-cart .content{padding:30px;background-color:#ffffff;-webkit-box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281);box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281)}";
var MiniCart = /** @class */ (function () {
    function MiniCart(hostRef) {
        registerInstance(this, hostRef);
    }
    MiniCart.prototype.componentDidLoad = function () {
        this.PageHeight();
    };
    MiniCart.prototype.PageHeight = function () {
        var panel = document.querySelector("ks-navbar-panel .panel");
        if (panel) {
            panel.style.height = document.documentElement.offsetHeight - this.root.offsetHeight + "px";
            console.log(panel.style.height);
        }
    };
    MiniCart.prototype.resizeHandler = function () {
        this.PageHeight();
    };
    MiniCart.prototype.render = function () {
        return [
            h("div", { class: "arrow" }),
            h("div", { class: "content" }, "Test")
        ];
    };
    Object.defineProperty(MiniCart.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MiniCart;
}());
MiniCart.style = miniCartCss;
export { MiniCart as ks_mini_cart };
