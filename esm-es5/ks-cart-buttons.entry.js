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
import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './cartData-be1433a0.js';
var cartButtonsCss = "ks-cart-buttons{display:block}ks-cart-buttons>.confirm{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;font-size:28px;font-weight:700;padding:20px}";
var CartButtons = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.href = "";
        this.loading = 0;
        this.loadingDelayed = false;
    }
    class_1.prototype.LoadingWatcher = function () {
        var _this = this;
        if (this.loading) {
            this.loadingTimeout = setTimeout(function () {
                _this.loadingDelayed = true;
            }, 500);
        }
        else {
            clearTimeout(this.loadingTimeout);
            this.loadingDelayed = false;
        }
    };
    class_1.prototype.componentDidLoad = function () {
        this.LoadingWatcher();
    };
    class_1.prototype.clickHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shippingSelect, paymentSelect, shippingValid, paymentValid, inputTop;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.loading) return [3 /*break*/, 3];
                        shippingSelect = document.querySelector("ks-cart-select-shipping");
                        paymentSelect = document.querySelector("ks-cart-select-payment");
                        return [4 /*yield*/, shippingSelect.Validate()];
                    case 1:
                        shippingValid = _a.sent();
                        return [4 /*yield*/, paymentSelect.Validate()];
                    case 2:
                        paymentValid = _a.sent();
                        if (shippingValid && paymentValid)
                            window.location.href = this.href;
                        else {
                            inputTop = shippingSelect.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
                            if ('scrollBehavior' in document.documentElement.style)
                                window.scroll({ top: inputTop - 100, behavior: "smooth" });
                            else
                                window.scroll(0, inputTop - 100);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("button", { class: "confirm uk-button uk-button-danger ks-text-decorated", onClick: function () { return _this.clickHandler(); } }, this.loadingDelayed && this.loading ?
            h("div", { class: "uk-animation-fade", "uk-spinner": true }) :
            h("span", null, "DO KASY")));
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "loading": ["LoadingWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(CartButtons, ['loading']);
CartButtons.style = cartButtonsCss;
export { CartButtons as ks_cart_buttons };
