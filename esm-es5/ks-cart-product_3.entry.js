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
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-20a680bb.js';
var cartProductCss = "ks-cart-product{display:block}ks-cart-product>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px}ks-cart-product .description{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-product .description a{color:inherit !important;text-decoration:none !important}ks-cart-product .numbers{font-weight:700}ks-cart-product .price{text-align:center;width:100px}ks-cart-product .amount{text-align:center;width:120px}@media only screen and (max-width: 959px){ks-cart-product .price{text-align:initial;width:initial;color:#e21334}ks-cart-product .shipping{margin-left:10px}ks-cart-product .amount{text-align:initial;width:initial;margin-left:15px}ks-cart-product ks-cart-spinner{margin-top:10px}}@media only screen and (max-width: 640px){ks-cart-product>div{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-cart-product .description{text-align:center}ks-cart-product .shipping{display:block;font-size:16px;margin-bottom:5px}ks-cart-product .numbers{margin-top:7px}}";
var CartProduct = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.shippingTime = "";
        this.amount = 1;
        this.removable = false;
        this.loading = false;
        this.mobile = 0;
        this.remove = createEvent(this, "remove", 7);
        this.count = createEvent(this, "count", 7);
    }
    class_1.prototype.onRemoveHandler = function () {
        this.remove.emit();
        this.loading = true;
    };
    class_1.prototype.onCountHandler = function (detail) {
        this.count.emit(detail);
    };
    class_1.prototype.ResetLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.resizeHandler = function () {
        this.mobile =
            window.innerWidth < 959 ?
                window.innerWidth < 640 ?
                    2 : 1
                : 0;
    };
    class_1.prototype.componentWillLoad = function () {
        this.resizeHandler();
    };
    class_1.prototype.render = function () {
        var _this = this;
        var price = this.price.toFixed(2).replace(".", ",") + " zł";
        var inlineBlockOnMobile = { display: this.removable ? "block" : "inline-block" };
        return [
            h("div", { class: "ks-text-decorated", "uk-grid": true }, h("a", { href: this.link }, h("ks-image", { src: this.img, width: "150", height: "150", contain: true, alt: "zdj\u0119cie produktu" })), h("div", { class: "description" }, h("a", { href: this.link, innerHTML: this.name }), this.mobile >= 1 ?
                h("div", { class: "numbers" }, h("div", { style: inlineBlockOnMobile }, h("span", { class: "price" }, price), h("span", { class: "shipping" }, this.shippingTime)), h("div", { style: inlineBlockOnMobile }, this.removable ?
                    h("ks-cart-spinner", { onChanged: function (e) { return _this.onCountHandler(e.detail); }, "initial-value": this.amount, max: this.maxAmount }) :
                    h("span", { class: "amount" }, this.amount, " szt.")))
                : this.shippingTime != "" ?
                    h("div", { class: "numbers" }, this.shippingTime)
                    : null), this.mobile == 0 ? [
                h("div", { class: "price" }, price),
                h("div", { class: "amount" }, this.removable ?
                    h("ks-cart-spinner", { onChanged: function (e) { return _this.onCountHandler(e.detail); }, "initial-value": this.amount, max: this.maxAmount }) :
                    h("span", null, this.amount, " szt."))
            ] : null, this.removable ?
                this.mobile == 2 ?
                    this.loading ?
                        h("div", { "uk-spinner": true, class: "uk-position-top-right uk-position-small" }) :
                        h("button", { type: "button", "uk-close": true, class: "uk-close-large uk-position-top-right uk-position-small", onClick: function () { return _this.onRemoveHandler(); } })
                    :
                        h("nav", { style: { width: "50px" }, class: "uk-text-center" }, this.loading ?
                            h("div", { "uk-spinner": true }) :
                            h("button", { type: "button", "uk-close": true, class: "uk-close-large", onClick: function () { return _this.onRemoveHandler(); } }))
                : null),
            h("hr", null)
        ];
    };
    return class_1;
}());
CartProduct.style = cartProductCss;
var CartProductHeading = /** @class */ (function () {
    function CartProductHeading(hostRef) {
        registerInstance(this, hostRef);
    }
    CartProductHeading.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    CartProductHeading.prototype.render = function () {
        return [
            h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", "uk-grid": true, style: { fontSize: "18px" } }, h("div", { class: "uk-width-expand uk-text-bold", style: { fontSize: "22px" } }, "PRODUKTY"), h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "CENA"), h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "ILO\u015A\u0106"), this.removable ?
                h("div", { style: { width: "50px" }, class: "uk-text-center" }, "USU\u0143")
                : null),
            h("hr", null)
        ];
    };
    Object.defineProperty(CartProductHeading.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CartProductHeading;
}());
var cartProductPriceCss = "ks-cart-product-price{display:block}ks-cart-product-price>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-cart-product-price .sentence{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;font-weight:700;text-align:center}ks-cart-product-price .price{color:#e21334}ks-cart-product-price .shipping{display:inline-block;margin-left:15px}ks-cart-product-price .edit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;max-width:100%}ks-cart-product-price .edit a{padding:3px 20px}@media only screen and (min-width: 960px){ks-cart-product-price .sentence{text-align:right}}@media only screen and (max-width: 959px){ks-cart-product-price .edit{margin-top:10px;width:100%}}@media only screen and (max-width: 640px){ks-cart-product-price .shipping{display:block;margin-left:0;font-size:16px}}";
var CartProductPrice = /** @class */ (function () {
    function CartProductPrice(hostRef) {
        registerInstance(this, hostRef);
        this.shippingTime = "";
        this.editLink = "";
        this.loading = 0;
        this.loadingDelayed = false;
    }
    CartProductPrice.prototype.LoadingWatcher = function () {
        var _this = this;
        if (this.loading) {
            this.loadingTimeout = setTimeout(function () {
                _this.loadingDelayed = true;
            }, 300);
        }
        else {
            clearTimeout(this.loadingTimeout);
            this.loadingDelayed = false;
        }
    };
    CartProductPrice.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.LoadingWatcher();
    };
    CartProductPrice.prototype.render = function () {
        var price = this.price.toFixed(2).replace(".", ",") + " zł";
        var produkty = "produkt";
        var lastDigit = parseInt(this.amount.toString().split('').pop());
        if (this.amount == 1)
            produkty = "produkt";
        else if (this.amount > 1 && this.amount < 5)
            produkty = "produkty";
        else if (this.amount >= 5 && this.amount <= 21)
            produkty = "produktów";
        else if (lastDigit <= 1 || lastDigit >= 5)
            produkty = "produktów";
        else
            produkty = "produkty";
        return [
            h("div", null, h("div", { class: "sentence ks-text-decorated" }, this.loadingDelayed && this.loading ?
                h("div", { class: "uk-animation-fade", "uk-spinner": "ratio: 0.7" }) : [
                h("span", null, "Razem ", this.amount, " ", produkty, " za ", h("span", { class: "price" }, price)),
                this.shippingTime != "" ? h("span", { class: "shipping" }, this.shippingTime) : null
            ]), this.editLink ?
                h("div", { class: "edit" }, h("a", { href: this.editLink, class: "uk-button uk-button-default uk-width-1-1" }, "Wr\u00F3\u0107 do koszyka"))
                : null),
            h("hr", null)
        ];
    };
    Object.defineProperty(CartProductPrice.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartProductPrice, "watchers", {
        get: function () {
            return {
                "loading": ["LoadingWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CartProductPrice;
}());
CartProductPrice.style = cartProductPriceCss;
export { CartProduct as ks_cart_product, CartProductHeading as ks_cart_product_heading, CartProductPrice as ks_cart_product_price };
