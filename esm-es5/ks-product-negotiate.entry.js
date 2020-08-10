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
var ProductNegotiate = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.loading = false;
        this.success = false;
        this.failure = false;
    }
    class_1.prototype.closeHandler = function () {
        if (this.success || this.failure) {
            this.loading = false;
            this.success = false;
            this.failure = false;
        }
    };
    class_1.prototype.requestHandler = function (event) {
        var _this = this;
        event.preventDefault();
        this.loading = true;
        var target = event.target;
        var data = new FormData(target);
        data.append("productUrl", document.location.href);
        data.append("productPrice", this.price);
        data.append("productOldPrice", this.oldPrice);
        data.append("productName", this.name);
        fetch(this.api, { body: data, method: "post" })
            .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, response.text()];
                    case 1:
                        result = _a.sent();
                        if (result == "success")
                            this.success = true;
                        else
                            this.failure = true;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var closeVisibility = !this.loading || this.success || this.failure;
        return [
            h("a", { id: "ks-negotiate-content", href: "#ks-negotiate-modal", "uk-toggle": true }, h("slot", null)),
            h("div", { id: "ks-negotiate-modal", class: "uk-flex-top", "uk-modal": "bg-close: false; esc-close; false;" }, h("div", { class: "uk-modal-dialog uk-modal-body uk-margin-auto-vertical" }, closeVisibility ?
                h("button", { class: "uk-modal-close-default", type: "button", "uk-close": true, onClick: function () { return _this.closeHandler(); } })
                : null, h("form", { onSubmit: function (e) { return _this.requestHandler(e); } }, h("fieldset", { class: "uk-fieldset" }, h("div", { style: { textAlign: "center" } }, h("legend", { class: "uk-legend uk-text-bold" }, this.heading), h("p", null, this.paragraph)), h("div", { class: "uk-margin" }, h("div", { class: "uk-inline uk-width-1-1" }, h("span", { class: "uk-form-icon", "uk-icon": "icon: user" }), h("input", { name: "name", class: "uk-input", type: "text", placeholder: "Imi\u0119 i nazwisko", required: true }))), h("div", { class: "uk-margin" }, h("div", { class: "uk-inline uk-width-1-1" }, h("span", { class: "uk-form-icon", "uk-icon": "icon: mail" }), h("input", { name: "email", class: "uk-input", type: "email", placeholder: "E-mail", required: true }))), h("div", { class: "uk-margin" }, h("div", { class: "uk-inline uk-width-1-1" }, h("span", { class: "uk-form-icon", "uk-icon": "icon: link" }), h("input", { name: "url", class: "uk-input", type: "url", placeholder: "Link do konkurencyjnej oferty", required: true }))), h("div", { class: "uk-margin" }, h("textarea", { name: "comment", class: "uk-textarea", rows: 4, placeholder: "Komentarz", style: { resize: "none" } })), h("div", { class: "uk-margin" }, h("label", null, h("input", { name: "zgoda", type: "checkbox", class: "uk-checkbox uk-margin-small-right", required: true }), "Wyra\u017Cam zgod\u0119 na przetwarzanie przez Sprzedawc\u0119 moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.")), h("input", { type: "submit", class: "uk-button uk-button-secondary uk-width-1-1", value: "WY\u015ALIJ ZAPYTANIE" }))), this.loading ?
                h("div", { class: "uk-overlay uk-overlay-default uk-position-cover" }, h("div", { class: "uk-position-center" }, h("div", { "uk-spinner": "ratio: 3" })))
                : null, this.success ?
                h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } }, h("div", { class: "uk-position-center uk-text-center", style: { maxWidth: "800px", width: "80%" } }, h("span", { "uk-icon": "icon: check; ratio: 4", class: "uk-animation-slide-top-small" }), h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small" }, "PROPOZYCJA WYS\u0141ANA"), h("p", { class: "ks-text-decorated uk-animation-slide-top-small" }, "Postaramy si\u0119 odpowiedzie\u0107 jak najszybciej. Je\u017Celi nie odpowiemy w ci\u0105gu 2 dni roboczych prosimy o kontakt telefoniczny.")))
                : null, this.failure ?
                h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } }, h("div", { class: "uk-position-center uk-text-center" }, h("span", { "uk-icon": "icon: ban; ratio: 4", class: "uk-animation-slide-top-small" }), h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small" }, "B\u0141\u0104D WYSY\u0141ANIA PROPOZYCJI")))
                : null))
        ];
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { ProductNegotiate as ks_product_negotiate };
