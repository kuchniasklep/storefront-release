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
import './index-2db7bf78.js';
import { T as Tunnel } from './cartData-be1433a0.js';
var Cart = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.api = "";
        this.data = {};
        this.productRemove = "";
        this.productCount = "";
        this.addDeal = "";
        this.countryChange = "";
        this.shippingChange = "";
        this.paymentChange = "";
        this.discountCode = "";
        this.discountPoints = "";
        this.discountRemove = "";
        this.RemoveProduct = function (index) { return __awaiter(_this, void 0, void 0, function () {
            var id, data, product;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.data.products[index].id;
                        return [4 /*yield*/, this.ProductLoadingWrapper(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.FetchData(this.productRemove, [{ key: "id", value: id }])];
                                });
                            }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            if (data.products.length == 0)
                                document.location.reload();
                            else {
                                this.ShowMessageFromData(data, function (cleanedData) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        this.Update(cleanedData);
                                        if ('discount' in cleanedData == false)
                                            this.RemoveDiscount();
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                        }
                        product = document.querySelector("ks-cart-product[ikey=\"" + id + "\"]");
                        if (product)
                            product.ResetLoading();
                        return [2 /*return*/];
                }
            });
        }); };
        this.lastProductCountCall = new Array();
        this.ProductCount = function (index, count, last) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.lastProductCountCall[index]) {
                    this.lastProductCountCall[index] = function () { return _this.ProductCountCall(index, count, last); };
                }
                else {
                    this.lastProductCountCall[index] = function () { };
                    this.ProductCountCall(index, count, last).then(function () {
                        if (_this.lastProductCountCall[index]) {
                            _this.lastProductCountCall[index]();
                            _this.lastProductCountCall[index] = undefined;
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.ProductCountCall = function (index, current, last) { return __awaiter(_this, void 0, void 0, function () {
            var id, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.data.products[index].id;
                        return [4 /*yield*/, this.ProductLoadingWrapper(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.FetchData(this.productCount, [
                                            { key: "id", value: id },
                                            { key: "ilosc", value: current.toString() }
                                        ])];
                                });
                            }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.ShowMessageFromData(data, function (cleanedData) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!('error' in cleanedData)) return [3 /*break*/, 2];
                                            this.Message(cleanedData.error.message);
                                            return [4 /*yield*/, this.Update(this.GetDataWithCorrectedProductAmounts(index, cleanedData.error.amount, cleanedData.error.maxAmount))];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, this.Update(cleanedData)];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            if ('discount' in cleanedData == false)
                                                this.RemoveDiscount();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        else {
                            this.data = this.GetDataWithCorrectedProductAmounts(index, last);
                            this.SetAmount(last, "ks-cart-product[ikey=\"" + id + "\"] ks-cart-spinner");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.AddDeal = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ProductLoadingWrapper(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, this.FetchData(this.addDeal, [{ key: "id", value: id }])];
                            });
                        }); })];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            if ('error' in data)
                                this.Message(data.error.message);
                            else
                                this.Update(data);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.CountryChange = function (code) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.StartLoading("ks-cart-select-shipping");
                        this.StartLoading("ks-cart-select-payment");
                        _a = this.Update;
                        return [4 /*yield*/, this.FetchData(this.countryChange, [{ key: "data", value: code }])];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        this.ResetLoading("ks-cart-select-shipping");
                        this.ResetLoading("ks-cart-select-payment");
                        return [2 /*return*/];
                }
            });
        }); };
        this.ShippingChange = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.StartLoading("ks-cart-select-payment");
                        _a = this.Update;
                        return [4 /*yield*/, this.FetchData(this.shippingChange, [{ key: "data", value: id.toString() }])];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        this.ResetLoading("ks-cart-select-payment");
                        return [2 /*return*/];
                }
            });
        }); };
        this.PaymentChange = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.Update;
                        return [4 /*yield*/, this.FetchData(this.paymentChange, [{ key: "data", value: id.toString() }])];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        }); };
        this.DiscountRemove = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.Update;
                        return [4 /*yield*/, this.FetchData(this.discountRemove)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 2:
                        _b.sent();
                        this.RemoveDiscount();
                        return [2 /*return*/];
                }
            });
        }); };
        this.DiscountCodeAdd = function (code) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FetchData(this.discountCode, [{ key: "data", value: code }])];
                    case 1:
                        data = _a.sent();
                        this.ShowMessageFromData(data, function (pData) {
                            _this.Update(pData);
                        });
                        this.ResetLoading("ks-cart-discount-code");
                        return [2 /*return*/];
                }
            });
        }); };
        this.DiscountPointsAdd = function (points) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FetchData(this.discountPoints, [{ key: "data", value: points.toString() }])];
                    case 1:
                        data = _a.sent();
                        this.ScrollToElement('ks-cart-discount-container ks-cart-heading');
                        this.Update(data);
                        this.ResetLoading("ks-cart-discount-points");
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.FetchData(this.api)];
                    case 1:
                        data = _a.sent();
                        this.Update(data);
                        this.data.RemoveProduct = this.RemoveProduct;
                        this.data.ProductCount = this.ProductCount;
                        this.data.AddDeal = this.AddDeal;
                        this.data.CountryChange = this.CountryChange;
                        this.data.ShippingChange = this.ShippingChange;
                        this.data.PaymentChange = this.PaymentChange;
                        this.data.DiscountRemove = this.DiscountRemove;
                        this.data.DiscountCodeAdd = this.DiscountCodeAdd;
                        this.data.DiscountPointsAdd = this.DiscountPointsAdd;
                        this.data.loading = 0;
                        this.data.loadingProducts = 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.GetDataWithCorrectedProductAmounts = function (productIndex, amount, maxAmount) {
        var correctedData = this.data;
        correctedData.products[productIndex].amount = amount;
        if (maxAmount)
            correctedData.products[productIndex].maxAmount = maxAmount;
        return correctedData;
    };
    class_1.prototype.GetDataWithoutProducts = function (data) {
        var dataWithoutProducts = data;
        delete dataWithoutProducts.products;
        return dataWithoutProducts;
    };
    class_1.prototype.SetAmount = function (amount, querySelector) {
        var component = document.querySelector(querySelector);
        if (component && 'SetAmount' in component)
            component.SetAmount(amount);
    };
    class_1.prototype.StartLoading = function (querySelector) {
        var component = document.querySelector(querySelector);
        if (component && 'StartLoading' in component)
            component.StartLoading();
    };
    class_1.prototype.ResetLoading = function (querySelector) {
        var component = document.querySelector(querySelector);
        if (component && 'ResetLoading' in component)
            component.ResetLoading();
    };
    class_1.prototype.ScrollToElement = function (querySelector) {
        var heading = document.querySelectorAll(querySelector);
        var scrollAmount = 0;
        if (heading.length == 2)
            scrollAmount = heading[1].getBoundingClientRect().top - heading[0].getBoundingClientRect().top;
        if (scrollAmount)
            window.scrollBy(0, -scrollAmount);
    };
    class_1.prototype.RemoveDiscount = function () {
        var data = this.data;
        delete data.discount;
        this.data = data;
    };
    class_1.prototype.ShowMessageFromData = function (data, callback) {
        if ('message' in data) {
            this.Message(data.message);
            delete data.message;
            // Update state after modal animation finishes.
            setTimeout(function () {
                callback(data);
            }, 200);
        }
        else
            callback(data);
    };
    class_1.prototype.ProductLoadingWrapper = function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Update({ loadingProducts: this.data.loadingProducts + 1 });
                        return [4 /*yield*/, func()];
                    case 1:
                        output = _a.sent();
                        this.Update({ loadingProducts: this.data.loadingProducts - 1 });
                        return [2 /*return*/, output];
                }
            });
        });
    };
    class_1.prototype.FetchData = function (url, formProperties) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, body;
            var _this = this;
            return __generator(this, function (_a) {
                headers = new Headers();
                headers.append('pragma', 'no-cache');
                headers.append('cache-control', 'no-cache');
                body = null;
                if (formProperties && formProperties.length > 0) {
                    body = new FormData();
                    formProperties.forEach(function (item) {
                        body.append(item.key, item.value);
                    });
                }
                this.Update({ loading: this.data.loading + 1 });
                return [2 /*return*/, fetch(url, {
                        method: 'POST',
                        body: body,
                        headers: headers,
                        credentials: "same-origin"
                    })
                        .then(function (response) {
                        if (response.ok) {
                            _this.Update({ loading: _this.data.loading - 1 });
                            return response.json();
                        }
                    })
                        .catch(function (error) {
                        if (error) {
                            _this.Update({ loading: _this.data.loading - 1 });
                            _this.Message("Błąd sieciowy. Sprawdź połączenie z internetem.");
                        }
                    })];
            });
        });
    };
    class_1.prototype.Update = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.data = Object.assign(Object.assign({}, this.data), data);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.Message = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                if (!document.querySelector("ks-alert[message=\"" + text + "\"]")) {
                    element = document.createElement("ks-alert");
                    element.setAttribute("message", text);
                    document.body.appendChild(element);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return (h(Tunnel.Provider, { state: this.data }, h("slot", null)));
    };
    return class_1;
}());
export { Cart as ks_cart };
