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
var OrderLogin = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.api = "";
        this.action = "";
        this.passwordMessage = "";
        this.passwordRecovery = "";
    }
    class_1.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    class_1.prototype.render = function () {
        var _this = this;
        return [
            h("div", { class: "uk-padding", style: { backgroundColor: "#f2f2f5" } }, h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "POSIADASZ KONTO?"), h("form", { onSubmit: function (event) { return _this.Submit(event); } }, h("slot", null), h("button", { type: "submit", class: "uk-button uk-button-secondary ks-text-decorated uk-text-bold uk-width-1-1 uk-margin-bottom", style: { fontSize: "20px", padding: "6px" } }, "ZALOGUJ SI\u0118")), h("a", { href: this.passwordRecovery }, "Nie pami\u0119tam has\u0142a")))
        ];
    };
    class_1.prototype.Submit = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var form, email, pass, _a, headers, formData, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event.preventDefault();
                        form = this.root.querySelector("form");
                        email = form.querySelector("ks-input-dynamic");
                        pass = form.querySelector("ks-input-text[password]");
                        return [4 /*yield*/, email.Validate()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, pass.Validate()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, email.IsValid()];
                    case 3:
                        _a = (_b.sent());
                        if (!_a) return [3 /*break*/, 5];
                        return [4 /*yield*/, pass.IsValid()];
                    case 4:
                        _a = (_b.sent());
                        _b.label = 5;
                    case 5:
                        if (!_a) return [3 /*break*/, 7];
                        headers = new Headers();
                        headers.append('pragma', 'no-cache');
                        headers.append('cache-control', 'no-cache');
                        formData = new FormData(form);
                        return [4 /*yield*/, fetch(this.api, {
                                body: formData,
                                method: 'POST',
                                headers: headers,
                                credentials: "same-origin"
                            }).then(function (response) { return response.text(); })];
                    case 6:
                        response = _b.sent();
                        if (response == "false")
                            pass.message = this.passwordMessage;
                        else if (response == "true") {
                            this.LoginPrompt(formData);
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.LoginPrompt = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, formData, response, prompt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new Headers();
                        headers.append('pragma', 'no-cache');
                        headers.append('cache-control', 'no-cache');
                        formData = new FormData();
                        formData.set("data", "email=" + encodeURIComponent(data.get("email").toString()) + "&haslo=" + encodeURIComponent(data.get("haslo").toString()));
                        return [4 /*yield*/, fetch(this.action, {
                                body: formData,
                                method: 'POST',
                                headers: headers,
                                credentials: "same-origin"
                            }).then(function (response) { return response.text(); })];
                    case 1:
                        response = _a.sent();
                        prompt = document.createElement("ks-order-login-prompt");
                        if (response.search("koszyk.html") != -1) {
                            prompt.setAttribute("message", "Do koszyka zostały dodane wcześniej zapisane produkty.");
                        }
                        document.body.appendChild(prompt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { OrderLogin as ks_order_login };
