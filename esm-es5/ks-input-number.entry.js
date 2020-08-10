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
var InputNumber = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.valid = true;
        this.validMessage = "";
        this.InputHandler = function (event) {
            if (event.inputType != "insertText") {
                var input = _this.root.querySelector("input");
                _this.ClampInput(input);
            }
            event.stopImmediatePropagation();
        };
        this.ChangeHandler = function (event) {
            _this.Validate();
            event.stopImmediatePropagation();
        };
    }
    class_1.prototype.render = function () {
        var valid = this.valid ? "" : "uk-form-danger";
        var validText = this.valid ? "" : "uk-text-danger";
        var center = this.center ? " uk-text-center" : "";
        var emphasis = this.emphasis ? { borderColor: "black", backgroundColor: "white" } : null;
        return (h("div", { class: "uk-margin" }, this.label ?
            h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
            : null, h("input", { class: "uk-input " + valid + center, style: emphasis, name: this.name, type: "number", step: this.step, placeholder: this.placeholder, onInput: this.InputHandler, onChange: this.ChangeHandler, onBlur: this.ChangeHandler }), !this.valid ?
            h("p", { class: "uk-text-danger", style: { marginTop: "5px" } }, this.validMessage)
            : null));
    };
    class_1.prototype.IsValid = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.valid];
            });
        });
    };
    class_1.prototype.Validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, valid, message;
            return __generator(this, function (_a) {
                input = this.root.querySelector("input");
                valid = true;
                message = "";
                this.ClampInput(input);
                if (this.required) {
                    if (input.value.length == 0) {
                        valid = false;
                        message = "Pole wymagane.";
                    }
                }
                this.valid = valid;
                this.validMessage = message;
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    class_1.prototype.ClampInput = function (input) {
        if (parseInt(input.value) > this.max) {
            input.value = this.max.toString();
        }
        if (parseInt(input.value) < this.min) {
            input.value = this.min.toString();
        }
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { InputNumber as ks_input_number };
