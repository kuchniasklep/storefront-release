import { r as registerInstance, h } from './index-20a680bb.js';
var SectionHeading = /** @class */ (function () {
    function SectionHeading(hostRef) {
        registerInstance(this, hostRef);
    }
    SectionHeading.prototype.render = function () {
        return [
            h("h3", { class: "uk-text-center uk-margin-medium-bottom" }, h("slot", null))
        ];
    };
    return SectionHeading;
}());
export { SectionHeading as ks_section_heading };
