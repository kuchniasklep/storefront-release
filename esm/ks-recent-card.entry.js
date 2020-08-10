import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const RecentCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("a", { href: this.link }, h("div", { style: { margin: "5px", padding: "5px", width: "60px", height: "60px", backgroundColor: "white", borderRadius: "4px" } }, h("ks-image", { src: this.img, alt: this.name, contain: true, width: "60", height: "60" }))));
    }
    get root() { return getElement(this); }
};

export { RecentCard as ks_recent_card };
