import { r as registerInstance, h } from './index-20a680bb.js';

const Breadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.center = false;
        this.mobile = false;
    }
    render() {
        let alignment = this.center ?
            this.mobile ?
                "uk-flex-center uk-flex-left@m" :
                "uk-flex-center" :
            "";
        return (h("ul", { class: "uk-breadcrumb uk-margin-remove " + alignment }, h("slot", null)));
    }
};

export { Breadcrumbs as ks_breadcrumbs };
