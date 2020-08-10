var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h } from './index-20a680bb.js';
var cartDiscountCodeCss = "ks-cart-discount-code{display:block}ks-cart-discount-code>form:first-child{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-discount-code ks-input-text{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-discount-code ks-input-text input{height:50px !important}ks-cart-discount-code ks-input-text>div{margin-bottom:3px !important}ks-cart-discount-code button{padding:0 30px !important;height:50px}@media only screen and (max-width: 560px){ks-cart-discount-code>form:first-child{display:block}ks-cart-discount-code button{width:100%}}ks-cart-discount-code .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;margin-top:7px;background-color:#222222;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-discount-code .messsage:hover{background-color:#303030}@media only screen and (max-width: 470px){ks-cart-discount-code .messsage{height:25vw}}";
var CartDiscountCode = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.placeholder = "";
        this.image = "";
        this.loading = false;
        this.discountSubmit = createEvent(this, "discountSubmit", 7);
    }
    class_1.prototype.onDiscountSubmitHandler = function (event) {
        event.preventDefault();
        if (!this.loading) {
            var form = event.target;
            var input = form.querySelector('input[name="discountCode"]');
            var value = input.value;
            if (value) {
                var valueString = value.toString();
                if (valueString != "") {
                    this.loading = true;
                    this.discountSubmit.emit(valueString);
                }
            }
        }
    };
    class_1.prototype.ResetLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return [
            h("form", { onSubmit: function (e) { return _this.onDiscountSubmitHandler(e); } }, h("ks-input-text", { emphasis: true, center: true, placeholder: this.placeholder, name: "discountCode" }), h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? h("div", { "uk-spinner": true }) : h("span", null, "Aktywuj"))),
            h("a", { class: "messsage", onClick: function () {
                    var popup = document.querySelector('ks-newsletter-popup');
                    if (popup)
                        popup.Show();
                } }, h("ks-img", { vertical: true, center: true, src: this.image }))
        ];
    };
    return class_1;
}());
CartDiscountCode.style = cartDiscountCodeCss;
var cartDiscountTicketCss = "ks-cart-discount-ticket{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff3838;color:white;font-size:20px}ks-cart-discount-ticket .content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px}ks-cart-discount-ticket .name{-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:700}ks-cart-discount-ticket .remove{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:70px;background-color:transparent;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}ks-cart-discount-ticket .remove:hover{background-color:rgba(0, 0, 0, 0.068)}ks-cart-discount-ticket .remove:active{background-color:rgba(0, 0, 0, 0.137)}@media only screen and (max-width: 560px){ks-cart-discount-ticket .content{display:block}ks-cart-discount-ticket .value{font-size:16px}}";
var CartDiscountTicket = /** @class */ (function () {
    function CartDiscountTicket(hostRef) {
        registerInstance(this, hostRef);
        this.name = "";
    }
    CartDiscountTicket.prototype.render = function () {
        return [
            h("div", { style: { margin: "20px 0", color: "#777777", textAlign: "center" } }, h("span", { "uk-icon": "info" }), " ", h("slot", null))
        ];
    };
    return CartDiscountTicket;
}());
CartDiscountTicket.style = cartDiscountTicketCss;
var cartDiscountPointsCss = "ks-cart-discount-points{display:block}ks-cart-discount-points>form{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-discount-points ks-input-number{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-discount-points ks-input-number input{height:50px !important}ks-cart-discount-points ks-input-number>div{margin-bottom:3px !important}ks-cart-discount-points button{padding:0 30px !important;height:50px}@media only screen and (max-width: 600px){ks-cart-discount-points>form{display:block}ks-cart-discount-points button{width:100%}}ks-cart-discount-points .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;margin-top:7px;background-color:#222222;color:white}ks-cart-discount-points .messsage:hover{color:white;text-decoration:none}ks-cart-discount-points .messsage:visited{color:white;text-decoration:none}ks-cart-discount-points .messsage>.bottom{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points .messsage .points{height:100%}ks-cart-discount-points .points>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;height:50%;font-size:26px;font-weight:700}ks-cart-discount-points .points>div>span{-webkit-transform:translateX(-5px);transform:translateX(-5px)}ks-cart-discount-points .points>.top{background-color:#303030}ks-cart-discount-points .points>.bottom{background-color:#ff3c3c}@media only screen and (max-width: 600px){ks-cart-discount-points .messsage{display:block;height:auto;text-align:center}ks-cart-discount-points .messsage .points{display:none}}";
var CartDiscountPoints = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.placeholder = "";
        this.message = "";
        this.points = 1;
        this.orderPoints = 1;
        this.loading = false;
        this.discountSubmit = createEvent(this, "discountSubmit", 7);
    }
    class_2.prototype.onDiscountSubmitHandler = function (event) {
        event.preventDefault();
        if (!this.loading) {
            var form = event.target;
            var input = form.querySelector('input[name="pointCount"]');
            var value = input.value;
            if (value) {
                var valueNumber = parseInt(value.toString());
                if (valueNumber != NaN) {
                    this.loading = true;
                    this.discountSubmit.emit(valueNumber);
                }
            }
        }
    };
    class_2.prototype.ResetLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.render = function () {
        var _this = this;
        return [
            h("form", { onSubmit: function (e) { return _this.onDiscountSubmitHandler(e); }, novalidate: true }, h("ks-input-number", { emphasis: true, center: true, placeholder: this.placeholder, min: 1, max: this.points, step: 10, name: "pointCount" }), h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? h("div", { "uk-spinner": true }) : h("span", null, "Aktywuj"))),
            h("div", { class: "messsage" }, h("div", { class: "points ks-text-decorated" }, h("div", { class: "top" }, this.points), h("div", { class: "bottom" }, h("span", null, "+", this.orderPoints))), h("div", { class: "bottom" }, this.message))
        ];
    };
    return class_2;
}());
CartDiscountPoints.style = cartDiscountPointsCss;
var cartDiscountPointsLoginCss = "ks-cart-discount-points-login{display:block}ks-cart-discount-points-login a{padding:4px 5px !important;height:50px;width:100%;font-size:18px !important;font-weight:700 !important;text-transform:uppercase !important}ks-cart-discount-points-login a:first-child{border-right:1px solid #303030}ks-cart-discount-points-login .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:7px;background-color:#222222;color:white}@media only screen and (max-width: 600px){ks-cart-discount-points-login .messsage{display:block;height:auto;text-align:center;font-size:14px}ks-cart-discount-points-login a{font-size:14px !important;font-weight:400 !important;text-transform:none !important}}ks-cart-discount-points-login .messsage>.info{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points-login .messsage .points{height:100%}ks-cart-discount-points-login .points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;font-size:32px;font-weight:700;background-color:#ff3c3c}ks-cart-discount-points-login .points>span{-webkit-transform:translateX(-5px);transform:translateX(-5px)}@media only screen and (max-width: 600px){ks-cart-discount-points-login .messsage .points{display:none}}";
var CartDiscountPointsLogin = /** @class */ (function () {
    function CartDiscountPointsLogin(hostRef) {
        registerInstance(this, hostRef);
        this.message = "";
        this.loginUrl = "";
        this.points = 1;
    }
    CartDiscountPointsLogin.prototype.render = function () {
        return [
            h("div", null, h("a", { href: this.loginUrl, class: "uk-button uk-button-secondary ks-text-decorated" }, "Zaloguj si\u0119")),
            h("div", { class: "messsage" }, h("div", { class: "points ks-text-decorated" }, h("span", null, "+", this.points)), h("div", { class: "info" }, this.message))
        ];
    };
    return CartDiscountPointsLogin;
}());
CartDiscountPointsLogin.style = cartDiscountPointsLoginCss;
var cartDiscountPointsMessageCss = "ks-cart-discount-points-message{display:block}ks-cart-discount-points-message>div:first-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:50px;padding:4px 5px !important;background-color:#222222;color:white;font-size:18px !important;font-weight:700 !important;text-transform:uppercase !important}ks-cart-discount-points-message .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;font-size:15px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:7px;background-color:#222222;color:white}@media only screen and (max-width: 600px){ks-cart-discount-points-message .messsage{display:block;height:auto;text-align:center;font-size:14px}ks-cart-discount-points-message div:first-child{font-size:14px !important;font-weight:400 !important;text-transform:none !important}}ks-cart-discount-points-message .messsage>.info{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points-message .messsage .points{height:100%}ks-cart-discount-points-message .points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;font-size:32px;font-weight:700;background-color:#ff3c3c}ks-cart-discount-points-message .points>span{-webkit-transform:translateX(-5px);transform:translateX(-5px)}@media only screen and (max-width: 600px){ks-cart-discount-points-message .messsage .points{display:none}}";
var CartDiscountPointsMessage = /** @class */ (function () {
    function CartDiscountPointsMessage(hostRef) {
        registerInstance(this, hostRef);
        this.heading = "";
        this.message = "";
        this.points = 1;
    }
    CartDiscountPointsMessage.prototype.render = function () {
        return [
            h("div", { class: "ks-text-decorated" }, this.heading),
            h("div", { class: "messsage" }, h("div", { class: "points ks-text-decorated" }, h("span", null, "+", this.points)), h("div", { class: "info" }, this.message))
        ];
    };
    return CartDiscountPointsMessage;
}());
CartDiscountPointsMessage.style = cartDiscountPointsMessageCss;
var cartDiscountTicketCss$1 = "ks-cart-discount-ticket{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff3838;color:white;font-size:20px}ks-cart-discount-ticket .content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px}ks-cart-discount-ticket .name{-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:700}ks-cart-discount-ticket .remove{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:70px;background-color:transparent;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}ks-cart-discount-ticket .remove:hover{background-color:rgba(0, 0, 0, 0.068)}ks-cart-discount-ticket .remove:active{background-color:rgba(0, 0, 0, 0.137)}@media only screen and (max-width: 560px){ks-cart-discount-ticket .content{display:block}ks-cart-discount-ticket .value{font-size:16px}}";
var CartDiscountTicket$1 = /** @class */ (function () {
    function CartDiscountTicket$1(hostRef) {
        registerInstance(this, hostRef);
        this.name = "";
        this.value = "";
        this.loading = false;
        this.remove = createEvent(this, "remove", 7);
    }
    CartDiscountTicket$1.prototype.onRemoveHandler = function () {
        this.loading = true;
        this.remove.emit();
    };
    CartDiscountTicket$1.prototype.render = function () {
        var _this = this;
        return [
            h("div", { class: "content ks-text-decorated" }, h("div", { class: "name" }, this.name), h("div", { class: "value" }, this.value)),
            h("div", { class: "remove", onClick: function () { return _this.onRemoveHandler(); } }, this.loading ?
                h("div", { "uk-spinner": true })
                :
                    h("span", { "uk-icon": "icon: close; ratio: 1.3;" }))
        ];
    };
    return CartDiscountTicket$1;
}());
CartDiscountTicket$1.style = cartDiscountTicketCss$1;
export { CartDiscountCode as ks_cart_discount_code, CartDiscountTicket as ks_cart_discount_message, CartDiscountPoints as ks_cart_discount_points, CartDiscountPointsLogin as ks_cart_discount_points_login, CartDiscountPointsMessage as ks_cart_discount_points_message, CartDiscountTicket$1 as ks_cart_discount_ticket };
