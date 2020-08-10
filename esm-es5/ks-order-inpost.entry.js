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
var OrderInpost = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.search = "Wrocław, Polska";
        this.api = "";
        this.description = "";
        this.address = "";
        this.code = "";
        this.initialized = false;
        this.valid = true;
    }
    class_1.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    class_1.prototype.Show = function (event) {
        var _this = this;
        event.preventDefault();
        var element = document.querySelector("#ks-order-inpost");
        UIkit.modal(element).show();
        if (!this.initialized) {
            window.easyPackAsyncInit = function () {
                easyPack.init({
                    defaultLocale: 'pl',
                    mapType: 'osm',
                    searchType: 'osm',
                    points: {
                        types: ['parcel_locker'],
                        functions: ['parcel_collect']
                    },
                    map: {
                        initialTypes: ['parcel_locker']
                    }
                });
                _this.widget = easyPack.mapWidget("easypack-map", function (point) {
                    _this.address = point.name + ", " + point.address["line1"] + ", " + point.address["line2"];
                    _this.code = point.name;
                    _this.description = point.address["line1"] + ", " + point.address["line2"] + "<br />" + point.name;
                    var value = point.address["line1"] + ", " + point.address["line2"] + "  (" + point.name + ")";
                    var punktodbioru = point.name;
                    var formData = new FormData();
                    formData.append("value", value);
                    formData.append("punktodbioru", punktodbioru);
                    var headers = new Headers();
                    headers.append('pragma', 'no-cache');
                    headers.append('cache-control', 'no-cache');
                    fetch(_this.api, {
                        method: 'POST',
                        headers: headers,
                        body: formData,
                        credentials: "same-origin"
                    });
                    _this.Validate();
                    _this.Hide();
                });
                _this.widget.searchPlace(_this.search);
            };
            this.initialized = !this.initialized;
        }
    };
    class_1.prototype.Hide = function () {
        var element = document.querySelector("#ks-order-inpost");
        UIkit.modal(element).hide();
    };
    class_1.prototype.Validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.valid = this.address != "";
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.IsValid = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.valid];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return [
            h("link", { rel: "stylesheet", href: "https://geowidget.easypack24.net/css/easypack.css" }),
            h("script", { async: true, src: "https://geowidget.easypack24.net/js/sdk-for-javascript.js" }),
            h("style", { innerHTML: "\n                @keyframes ks-fade {\n                    from {opacity: 1.0;}\n                    to {opacity: 0.4;}\n                }\n\n                #easypack-map #listvillages {\n                    left: 0 !important;\n                    right: 0 !important;\n                    top: initial !important;\n                }\n\n                #easypack-map .input-group {\n                    padding: 0 !important;\n                    width: calc(100% - 60px) !important;\n                    height: 60px !important;\n                }\n\n                #easypack-map input {\n                    height: 60px;\n                }\n                #easypack-map button {\n                    height: 60px;\n                }\n            " }),
            h("p", { innerHTML: this.description }),
            h("button", { class: "uk-button uk-width-1-1 uk-margin-top " + (this.valid ? "uk-button-secondary" : "uk-button-danger"), style: { animation: this.valid ? "" : "ks-fade 0.5s cubic-bezier(.86,.01,.67,1) infinite alternate" }, onClick: function (e) { return _this.Show(e); } }, "Wybierz punkt dostawy"),
            h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.address }),
            h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
            h("div", { id: "ks-order-inpost", class: "uk-modal-full", "uk-modal": true }, h("div", { class: "uk-modal-dialog" }, h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, h("div", { id: "easypack-map", style: { height: "100vh", width: "100vw" } }), h("button", { class: "uk-button uk-button-secondary uk-position-top-right", style: { width: "60px", height: "60px" }, onClick: function () { return _this.Hide(); } }, h("span", { "uk-icon": "close" })))))
        ];
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { OrderInpost as ks_order_inpost };
