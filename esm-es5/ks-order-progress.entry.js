import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderProgress = /** @class */ (function () {
    function OrderProgress(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
    }
    OrderProgress.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.root.style.width = "100%";
    };
    OrderProgress.prototype.resizeHandler = function () {
        this.mobile = window.innerWidth < 800 ? true : false;
    };
    OrderProgress.prototype.componentWillLoad = function () {
        this.resizeHandler();
    };
    OrderProgress.prototype.StepStyle = function (step) {
        var tile = {
            padding: this.mobile ? "20px" : "30px",
            backgroundColor: "#252525",
            color: "white",
            borderLeft: "1px solid #404040"
        };
        var active = Object.assign(Object.assign({}, tile), { backgroundColor: "#404040", borderLeft: "1px solid #404040" });
        if (this.mobile)
            return tile;
        if (step == this.current)
            return active;
        else
            return tile;
    };
    OrderProgress.prototype.render = function () {
        return [
            h("div", { class: "uk-text-center uk-flex uk-flex-evenly ks-text-decorated " + (this.mobile ? "uk-child-width-1-1" : "uk-child-width-1-3"), style: { fontSize: "16px", backgroundColor: "#252525" } }, !this.mobile || this.current == 0 ?
                h("div", { style: this.StepStyle(0) }, h("span", { "uk-icon": "icon: cart; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-3px)" } }), " Koszyk")
                : null, !this.mobile || this.current == 1 ?
                h("div", { style: this.StepStyle(1) }, h("span", { "uk-icon": "icon: user; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-2px)" } }), " Dane do wys\u0142ki")
                : null, !this.mobile || this.current == 2 ?
                h("div", { style: this.StepStyle(2) }, h("span", { "uk-icon": "icon: check; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-1px)" } }), " Potwierdzenie")
                : null)
        ];
    };
    Object.defineProperty(OrderProgress.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderProgress;
}());
export { OrderProgress as ks_order_progress };
