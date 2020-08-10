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
var Alert = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.message = "";
    }
    class_1.prototype.componentWillLoad = function () {
        this.hashCode = this.GenerateHash(this.message);
    };
    class_1.prototype.GenerateHash = function (str) {
        var hash = 0, len = str.length;
        if (str.length === 0) {
            return hash;
        }
        for (var i = 0; i < len; i++) {
            var charC = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + charC;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                element = document.querySelector("#ks-alert-" + this.hashCode);
                UIkit.modal(element).show();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.Close = function () {
        var _this = this;
        var element = document.querySelector("#ks-alert-" + this.hashCode);
        UIkit.modal(element).hide().then(function () {
            _this.root.remove();
            element.remove();
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { id: "ks-alert-" + this.hashCode, class: "uk-modal-full", "uk-modal": "stack: true" }, h("div", { class: "uk-modal-dialog" }, h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column", style: { maxWidth: "1300px", margin: "auto" } }, h("p", { class: "uk-text-center ks-text-decorated uk-h1", innerHTML: this.message }), h("div", { class: "uk-margin-top" }, h("button", { onClick: function () { return _this.Close(); }, class: "uk-button uk-button-secondary", style: { padding: "5px 40px" } }, "OK")))))));
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Alert as ks_alert };
