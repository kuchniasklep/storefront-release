import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var RecentProducts = /** @class */ (function () {
    function RecentProducts(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
    }
    RecentProducts.prototype.limitItemCount = function () {
        var containerWidth = this.mobile ? window.innerWidth - 20 : this.containter.offsetWidth - 20;
        var itemWidth = this.items[0].offsetWidth;
        var count = Math.floor(containerWidth / itemWidth);
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (i < count)
                item.style.display = "block";
            else
                item.style.display = "none";
        }
    };
    RecentProducts.prototype.mobileLayout = function () {
        if (window.innerWidth <= 960)
            this.mobile = true;
        else
            this.mobile = false;
    };
    RecentProducts.prototype.componentWillLoad = function () {
        this.mobileLayout();
    };
    RecentProducts.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.containter = this.root.querySelector("#ks-recent-products-items");
        this.items = this.containter.querySelectorAll("ks-recent-card");
        this.limitItemCount();
    };
    RecentProducts.prototype.handleResize = function () {
        this.mobileLayout();
        this.limitItemCount();
    };
    RecentProducts.prototype.render = function () {
        return (h("div", { class: "uk-flex uk-flex-between uk-flex-middle " + (this.mobile ? "uk-flex-column" : "") }, h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", style: { fontSize: "20px", color: "white", padding: "5px 20px" } }, "OSTATNIO PRZEGL\u0104DANE"), h("div", { id: "ks-recent-products-items", class: "uk-overflow-hidden uk-width-1-1 uk-flex-1 uk-flex " + (this.mobile ? "uk-flex-center" : "uk-flex-right") }, h("slot", null))));
    };
    Object.defineProperty(RecentProducts.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return RecentProducts;
}());
export { RecentProducts as ks_recent_products };
