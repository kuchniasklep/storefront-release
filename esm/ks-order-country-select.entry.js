import { r as registerInstance, h } from './index-22b73bd9.js';

const OrderCountrySelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.lightUp = false;
  }
  Change(e) {
    if (this.connectTo) {
      const connect = document.querySelector(`ks-input-select-dynamic[name="${this.connectTo}"]`);
      const select = e.target;
      connect.setAttribute("api-data", select.value);
      connect.setAttribute("light-up", "false");
    }
  }
  render() {
    return (h("ks-input-select", { name: this.name, label: this.label, onChange: (e) => this.Change(e), "light-up": this.lightUp }, h("slot", null)));
  }
};

export { OrderCountrySelect as ks_order_country_select };
