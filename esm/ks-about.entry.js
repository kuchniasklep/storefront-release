import { r as registerInstance, h } from './index-20a680bb.js';

const About = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ks-card", null, h("div", { class: "uk-padding uk-flex uk-flex-middle" }, h("div", { class: "uk-flex uk-flex-center uk-flex-middle uk-flex-wrap uk-width-1-1 uk-width-2-5@s uk-width-large@m" }, h("a", { href: this.firstLink }, h("ks-image", { src: this.firstImage, width: "200", height: "90", alt: "opineo", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" })), h("a", { href: this.secondLink }, h("ks-image", { src: this.secondImage, width: "200", height: "90", alt: "ceneo", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" })), h("a", { href: this.thirdLink }, h("ks-image", { src: this.thirdImage, width: "200", height: "90", alt: "allegro", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" }))), h("div", { class: "uk-width-expand uk-margin-left uk-visible@s uk-text-justify" }, h("slot", null)))));
    }
};

export { About as ks_about };
