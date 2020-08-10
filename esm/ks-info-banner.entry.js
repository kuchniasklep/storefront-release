import { r as registerInstance, h } from './index-20a680bb.js';

const InfoBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    disable() {
        const id = "ks-info-banner-" + this.name.replace(" ", "");
        sessionStorage.setItem(id, "true");
    }
    render() {
        const id = "ks-info-banner-" + this.name.replace(" ", "");
        let disabled = sessionStorage.getItem(id);
        if (disabled == null)
            return (h("div", { id: id, class: "uk-position-relative", style: { backgroundColor: this.color } }, h("a", { href: this.link, "aria-label": this.name }, h("div", { class: "uk-flex uk-flex-center" }, h("ks-image", { width: "600", height: "100", src: this.image, alt: this.name }))), h("button", { type: "button", "aria-label": "Schowaj banner", onClick: () => this.disable(), class: "uk-light uk-position-small uk-position-top-right", "uk-close": true, "uk-toggle": "target: #" + id })));
        else
            return;
    }
};

export { InfoBanner as ks_info_banner };
