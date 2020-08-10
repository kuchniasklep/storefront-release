import { r as registerInstance, h } from './index-20a680bb.js';

const SectionHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("h3", { class: "uk-text-center uk-margin-medium-bottom" }, h("slot", null))
        ];
    }
};

export { SectionHeading as ks_section_heading };
