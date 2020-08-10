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
var OrderForm = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.loading = false;
    }
    class_1.prototype.render = function () {
        var _this = this;
        return (h("form", { action: this.action, method: this.method, enctype: "application/x-www-form-urlencoded", onSubmit: function (event) { return _this.Submit(event); } }, h("slot", null), h("div", { class: "uk-position-relative uk-margin-medium-top" }, h("button", { type: "submit", formnovalidate: true, class: "uk-button uk-button-danger uk-width-1-1 ks-text-decorated", style: { padding: "20px", fontSize: "28px", fontWeight: "700" } }, h("span", null, "KONTYNUUJ")), this.loading ?
            h("div", { class: "uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", backgroundColor: "#e21334" } }, h("div", { "uk-spinner": "ratio: 1.5", class: "uk-position-center" }))
            : null), h("ks-order-form-modal", null)));
    };
    class_1.prototype.Submit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var form, inputs, highestPosition, valid, i, input, inputTop, stringArray, i, element, formData, headers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        form = this.root.querySelector("form");
                        inputs = form.querySelectorAll("ks-input-dynamic, ks-input-select-dynamic, ks-input-select, ks-input-text, ks-input-check");
                        highestPosition = Number.MAX_VALUE;
                        valid = true;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < inputs.length)) return [3 /*break*/, 5];
                        input = inputs[i];
                        if (input.closest("ks-input-dynamic *") != null)
                            return [3 /*break*/, 4];
                        if (input.closest("ks-order-check-section:not([active])") != null)
                            return [3 /*break*/, 4];
                        if (input.closest("ks-order-enable-section:not([active])") != null)
                            return [3 /*break*/, 4];
                        if (input.closest("*[hidden]") != null)
                            return [3 /*break*/, 4];
                        return [4 /*yield*/, input.Validate()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, input.IsValid()];
                    case 3:
                        if (!(_a.sent())) {
                            inputTop = input.getBoundingClientRect().top
                                - document.body.getBoundingClientRect().top;
                            if (inputTop < highestPosition)
                                highestPosition = inputTop;
                            valid = false;
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        if (!valid) return [3 /*break*/, 7];
                        stringArray = new Array();
                        for (i = 0; i < form.elements.length; i++) {
                            element = form.elements[i];
                            if (element.nodeName === "INPUT" &&
                                element.type != "submit" &&
                                element.name != "") {
                                if ((element.type == "checkbox" || element.type == "radio") && !element.checked)
                                    continue;
                                stringArray.push(element.name + "=" + encodeURIComponent(element.value.toString()));
                            }
                            else if (element.nodeName === "SELECT" && element.name != "") {
                                stringArray.push(element.name + "=" + encodeURIComponent(element.value.toString()));
                            }
                        }
                        formData = new FormData();
                        formData.append("data", stringArray.join("&"));
                        this.loading = true;
                        headers = new Headers();
                        headers.append('pragma', 'no-cache');
                        headers.append('cache-control', 'no-cache');
                        return [4 /*yield*/, fetch(this.action, {
                                body: formData,
                                method: 'POST',
                                headers: headers,
                                credentials: "same-origin"
                            })
                                .then(function (response) {
                                if (!response.ok)
                                    throw response.status;
                                else {
                                    window.location.href = _this.destination;
                                }
                            })
                                .catch(function (error) {
                                var message = error;
                                console.log(error);
                                if (!navigator.onLine)
                                    message = "Brak połączenia z internetem.";
                                else if (Number.isInteger(error))
                                    message = "B\u0142\u0105d po\u0142\u0105czenia - " + error;
                                _this.ShowPrompt(message);
                            })];
                    case 6:
                        _a.sent();
                        this.loading = false;
                        return [3 /*break*/, 8];
                    case 7:
                        if ('scrollBehavior' in document.documentElement.style)
                            window.scroll({ top: highestPosition - 100, behavior: "smooth" });
                        else
                            window.scroll(0, highestPosition - 100);
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.ShowPrompt = function (message) {
        var prompt = this.root.querySelector("ks-order-form-modal");
        prompt.setAttribute("message", message);
        prompt.Show();
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { OrderForm as ks_order_form };
