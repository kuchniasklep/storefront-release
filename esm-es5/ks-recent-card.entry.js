import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var RecentCard = /** @class */ (function () {
    function RecentCard(hostRef) {
        registerInstance(this, hostRef);
    }
    RecentCard.prototype.render = function () {
        return (h("a", { href: this.link }, h("div", { style: { margin: "5px", padding: "5px", width: "60px", height: "60px", backgroundColor: "white", borderRadius: "4px" } }, h("ks-image", { src: this.img, alt: this.name, contain: true, width: "60", height: "60" }))));
    };
    Object.defineProperty(RecentCard.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return RecentCard;
}());
export { RecentCard as ks_recent_card };
