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
var cartSelectCss = ".ks-cart-select{display:block;position:relative;height:50px}.ks-cart-select .animation{-webkit-animation:start 1.0s ease;animation:start 1.0s ease}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}.ks-cart-select>.center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px}.ks-cart-select .select{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f8f8f8;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;outline:1px solid #d2d2d2;outline-offset:-1px}.ks-cart-select .select:hover{background-color:#f2f2f2}.ks-cart-select[error] .select{background-color:#ffc5c5;color:#ff0000;outline-color:#ff0000}.ks-cart-select[error] .select:hover{background-color:#ff8a8a}.ks-cart-select .selectSlot{-webkit-box-flex:1;-ms-flex:1;flex:1}.ks-cart-select .selectIcon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:10;width:50px;height:50px;background-color:#252525;color:white;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.ks-cart-select .select:hover .selectIcon{background-color:#353535}.ks-cart-select .items{position:absolute;top:50px;left:0;width:100%;z-index:20;background-color:#f8f8f8;-webkit-box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349);box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349)}.ks-cart-select .items .ks-cart-select-item:hover{background-color:#f0f0f0}@media only screen and (max-width: 420px){.ks-cart-select .select .ks-cart-select-item .price{display:none}}";
var CartSelectShipping = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.name = "";
        this.valid = false;
        this.error = false;
        this.active = -1;
        this.toggled = false;
        this.loading = false;
    }
    class_1.prototype.StartLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.ResetLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.Validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.valid) {
                    this.error = true;
                    return [2 /*return*/, false];
                }
                this.error = false;
                return [2 /*return*/, true];
            });
        });
    };
    class_1.prototype.OutsideClickHandler = function (event) {
        var target = event.target;
        if (this.toggled && !target.closest(".ks-cart-select[name=\"" + this.name + "\"]"))
            this.toggled = false;
    };
    class_1.prototype.componentDidLoad = function () {
        this.root.classList.add("ks-cart-select");
    };
    class_1.prototype.ActiveItemWatcher = function () {
        if (this.valid)
            this.active = this.activeShipping;
    };
    class_1.prototype.ActivateItem = function (id) {
        if (id != this.activeShipping)
            this.ShippingChange(id);
        this.toggled = false;
        this.active = id;
        this.valid = true;
        this.error = false;
    };
    class_1.prototype.render = function () {
        var _this = this;
        if (this.loading)
            return (h("div", { class: "center" }, h("nav", { "uk-spinner": true })));
        var activeItem = this.shipping.find(function (value) {
            return value.id == _this.active;
        });
        return [
            h("div", { class: "select animation", onClick: function () {
                    if (!_this.loading)
                        _this.toggled = !_this.toggled;
                } }, h("div", { class: "selectSlot" }, this.active == -1 ?
                h("ks-cart-select-item", { name: "Wybierz metod\u0119 wysy\u0142ki" }) :
                h("ks-cart-select-item", { logo: activeItem.logo, name: activeItem.name, price: activeItem.price })), h("div", { class: "selectIcon" }, h("span", { "uk-icon": "icon: triangle-down; ratio: 1.3" }))),
            h("div", { class: "items", hidden: !this.toggled }, this.shipping.map(function (item) { return h("ks-cart-select-item", { key: item.id, logo: item.logo, name: item.name, price: item.price, color: item.color, onClick: function () { return _this.ActivateItem(item.id); } }); }))
        ];
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "activeShipping": ["ActiveItemWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tunnel.injectProps(CartSelectShipping, ['shipping', 'ShippingChange', 'activeShipping']);
CartSelectShipping.style = cartSelectCss;
export { CartSelectShipping as ks_cart_select_shipping };
