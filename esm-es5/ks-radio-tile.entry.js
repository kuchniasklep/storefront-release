import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var radioTileCss = "ks-radio-tile .hover:hover{background-color:#b2b2b2 !important}";
var RadioTile = /** @class */ (function () {
    function RadioTile(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
    }
    RadioTile.prototype.CheckHandler = function () {
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
    RadioTile.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.root.style.width = "100%";
        this.resizeHandler();
        this.MobileWatcher(this.mobile);
    };
    RadioTile.prototype.resizeHandler = function () {
        if (window.innerWidth <= 620)
            this.mobile = true;
        else
            this.mobile = false;
    };
    RadioTile.prototype.MobileWatcher = function (mobile) {
        this.root.style.maxWidth = mobile ? "100%" : "260px";
    };
    RadioTile.prototype.render = function () {
        var _this = this;
        var mutedColor = "#eeeeee";
        var titleStyle = {
            backgroundColor: this.active ? this.color : "#a7a7a7",
            transition: "background-color 0.3s ease",
            color: "white",
            height: "50px"
        };
        var priceStyle = {
            fontSize: "20px",
            padding: "5px 10px"
        };
        var infoStyle = {
            backgroundColor: mutedColor,
            padding: "8px",
            fontSize: "16px",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.1s ease-in, color 0.1s ease-in"
        };
        return (h("label", null, h("input", { hidden: true, type: "radio", name: this.name, value: this.value, onChange: function () { return _this.CheckHandler(); } }), h("div", null, this.price ?
            h("div", { class: "uk-flex uk-flex-middle uk-flex-between" + (this.active ? "" : " hover"), style: titleStyle }, h("div", { class: "uk-flex-auto" }, h("ks-image", { src: this.logo, alt: this.service, width: "130", height: "40" })), h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
            :
                h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle }, h("ks-image", { src: this.logo, alt: this.service, width: "140", height: "40" })), h("div", { class: "uk-flex uk-flex-middle " + (this.time ? "uk-flex-between" : "uk-flex-center"), style: infoStyle, hidden: this.mobile && !this.active }, h("div", null, this.service), h("div", { class: "uk-text-right" }, this.time)))));
    };
    Object.defineProperty(RadioTile.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioTile, "watchers", {
        get: function () {
            return {
                "mobile": ["MobileWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return RadioTile;
}());
RadioTile.style = radioTileCss;
export { RadioTile as ks_radio_tile };
