import { r as registerInstance, h } from './index-f323e182.js';

const breadcrumbsCss = "ks-breadcrumbs{display:block}";

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
Breadcrumbs.style = breadcrumbsCss;

export { Breadcrumbs as ks_breadcrumbs };
