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
var cartSpinnerCss = "ks-cart-spinner{display:inline-block;text-align:center}ks-cart-spinner input{width:50px !important;margin:0 !important;font-size:14px !important;text-align:center !important}";
var CartSpinner = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.initialValue = 1;
        this.value = 1;
        this.changed = createEvent(this, "changed", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this.value = this.initialValue;
    };
    class_1.prototype.Increment = function () {
        var last = this.value;
        if (typeof this.max === "undefined" || this.value < this.max) {
            this.value += 1;
            this.onChangedHandler(this.value, last);
        }
    };
    class_1.prototype.Decrement = function () {
        var last = this.value;
        if (this.value > 1) {
            this.value -= 1;
            this.onChangedHandler(this.value, last);
        }
    };
    class_1.prototype.Change = function (e) {
        var last = this.value;
        var input = e.target;
        var parsed = parseInt(input.value);
        if (!isNaN(parsed) && parsed > 0 && (typeof this.max === "undefined" || parsed <= this.max))
            this.value = parsed;
        else if (parsed > this.max) {
            this.value = this.max;
            input.value = this.max.toString();
        }
        else {
            this.value = 1;
            input.value = "1";
        }
        this.onChangedHandler(this.value, last);
    };
    class_1.prototype.onChangedHandler = function (current, last) {
        this.changed.emit({ current: current, last: last });
    };
    class_1.prototype.SetAmount = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.value = amount;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (this.max == 1 ?
            h("div", null, "1 szt.") :
            h("div", null, h("button", { class: "uk-button uk-button-muted", onClick: function () { return _this.Decrement(); } }, "-"), h("input", { type: "text", maxlength: "3", value: this.value, name: this.name, onChange: function (e) { return _this.Change(e); }, class: "uk-input" }), h("button", { class: "uk-button uk-button-muted", onClick: function () { return _this.Increment(); } }, "+")));
    };
    return class_1;
}());
CartSpinner.style = cartSpinnerCss;
export { CartSpinner as ks_cart_spinner };
