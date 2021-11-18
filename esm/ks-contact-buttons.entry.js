import { r as registerInstance, h } from './index-7a533c43.js';

let ContactButtons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("a", { href: "tel:" + this.phone, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.phone),
      h("a", { href: "mailto:" + this.email, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.email)
    ];
  }
};

export { ContactButtons as ks_contact_buttons };
