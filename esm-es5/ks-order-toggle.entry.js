import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderChoice = /** @class */ (function () {
    function OrderChoice(hostRef) {
        registerInstance(this, hostRef);
    }
    OrderChoice.prototype.CheckHandler = function () {
        var _this = this;
        var inputs = document.querySelectorAll("input[name=" + this.name + "]");
        var thisInput = this.root.querySelector("input");
        inputs.forEach(function (input) {
            if (input == thisInput)
                _this.active = thisInput.checked;
            else {
                var parent = input.parentElement.parentElement;
                parent.active = input.checked;
            }
        });
    };
    OrderChoice.prototype.componentDidLoad = function () {
        this.root.style.display = "inline-block";
    };
    OrderChoice.prototype.render = function () {
        var _this = this;
        var style = {
            fontSize: "18px",
            padding: "8px",
            backgroundColor: this.active ? "#252525" : "#F2F2F2",
            color: this.active ? "white" : "black",
            transition: "background-color ease 0.15s, color ease 0.15s"
        };
        return (h("label", null, h("input", { hidden: true, type: "radio", name: this.name, value: this.value, checked: this.active, onChange: function () { return _this.CheckHandler(); } }), h("div", { class: "ks-text-decorated uk-text-bold uk-width-1-1 uk-text-center", style: style }, this.text)));
    };
    Object.defineProperty(OrderChoice.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderChoice;
}());
export { OrderChoice as ks_order_toggle };
