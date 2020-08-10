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
import { r as registerInstance, h } from './index-20a680bb.js';
var InputSelectDynamic = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.apiData = "";
        this.lightUp = false;
        this.data = new Array();
        this.loading = false;
        this.message = "";
    }
    class_1.prototype.FetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new Headers();
                        headers.append('pragma', 'no-cache');
                        headers.append('cache-control', 'no-cache');
                        this.loading = true;
                        this.message = "";
                        return [4 /*yield*/, fetch(this.api + this.apiData, {
                                method: 'GET',
                                headers: headers,
                                credentials: "same-origin"
                            })
                                .then(function (response) {
                                if (!response.ok)
                                    throw response.status;
                                return response.json();
                            })
                                .then(function (data) {
                                _this.data = data;
                            })
                                .catch(function (error) {
                                var message = error;
                                if (Number.isInteger(error))
                                    message = "B\u0142\u0105d po\u0142\u0105czenia - " + error;
                                else if (!navigator.onLine)
                                    message = "Brak połączenia z internetem. ";
                                _this.message = message;
                            })];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.Validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.lightUp = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.IsValid = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, !this.loading && this.message == ""];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.FetchData();
    };
    class_1.prototype.Decode = function (input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "uk-position-relative" }, h("ks-input-select", { name: this.name, label: this.label, error: this.message != "", "light-up": this.lightUp }, this.data.map(function (item) { return h("option", { selected: _this.selectedId == item.value ? true : false, value: item.value }, _this.Decode(item.name)); })), this.loading ?
            h("div", { class: "uk-position-absolute uk-animation-fade", style: { top: "20px", left: "0px", width: "100%", height: "50px", backgroundColor: "rgba(255, 255, 255, 0.7)" } }, h("div", { "uk-spinner": true, class: "uk-position-center" }))
            : null, this.message != "" ?
            h("div", { class: "uk-position-absolute", style: { top: "20px", left: "0px", width: "100%", height: "50px", backgroundColor: "rgba(255, 255, 255)" } }, h("p", { class: "uk-position-center uk-text-danger" }, this.message, " ", h("a", { onClick: function () { return _this.FetchData(); } }, "Od\u015Bwie\u017C")))
            : null));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "apiData": ["FetchData"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { InputSelectDynamic as ks_input_select_dynamic };
