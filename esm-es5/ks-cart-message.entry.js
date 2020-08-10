import { r as registerInstance, h, H as Host } from './index-20a680bb.js';
var cartMessageCss = "ks-cart-message{display:block;text-align:center;color:white;background-color:var(--ks-color-secondary);overflow:hidden;opacity:0.0;max-height:0px;height:auto;-webkit-transition:opacity 0.5s ease, max-height 0.5s ease;transition:opacity 0.5s ease, max-height 0.5s ease}ks-cart-message.show{opacity:1.0;max-height:100px}ks-cart-message.hide{opacity:0.0;max-height:0px}ks-cart-message>p{margin:10px}";
var CartMessage = /** @class */ (function () {
    function CartMessage(hostRef) {
        registerInstance(this, hostRef);
        this.message = "";
        this.visibility = "hide";
        this.messageDelay = "";
    }
    CartMessage.prototype.componentWillLoad = function () {
        this.watchHandler(this.message);
    };
    CartMessage.prototype.watchHandler = function (newValue) {
        var _this = this;
        if (newValue == "") {
            this.visibility = "hide";
            setTimeout(function () {
                _this.messageDelay = "";
            }, 500);
        }
        else {
            this.visibility = "show";
            this.messageDelay = this.message;
        }
    };
    CartMessage.prototype.render = function () {
        return (h(Host, { class: this.visibility }, h("p", null, this.messageDelay)));
    };
    Object.defineProperty(CartMessage, "watchers", {
        get: function () {
            return {
                "message": ["watchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CartMessage;
}());
CartMessage.style = cartMessageCss;
export { CartMessage as ks_cart_message };
