import { r as registerInstance, h } from './index-f323e182.js';

const Contact = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "uk-text-center uk-text-emphasis", style: { padding: "50px" } }, h("div", { class: "uk-visible@s", style: { height: '20px' } }), h("slot", null), h("ks-contact-buttons", { phone: this.phone, email: this.email })));
  }
};

export { Contact as ks_contact };
