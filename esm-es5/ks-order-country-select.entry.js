import { r as registerInstance, h } from './index-20a680bb.js';
var OrderCountrySelect = /** @class */ (function () {
    function OrderCountrySelect(hostRef) {
        registerInstance(this, hostRef);
        this.lightUp = false;
    }
    OrderCountrySelect.prototype.Change = function (e) {
        if (this.connectTo) {
            var connect = document.querySelector("ks-input-select-dynamic[name=\"" + this.connectTo + "\"]");
            var select = e.target;
            connect.setAttribute("api-data", select.value);
            connect.setAttribute("light-up", "false");
        }
    };
    OrderCountrySelect.prototype.render = function () {
        var _this = this;
        return (h("ks-input-select", { name: this.name, label: this.label, onChange: function (e) { return _this.Change(e); }, "light-up": this.lightUp }, h("slot", null)));
    };
    return OrderCountrySelect;
}());
export { OrderCountrySelect as ks_order_country_select };
