import { r as registerInstance, h } from './index-44e0e252.js';

const SeeMore = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = "";
    this.text = "";
  }
  render() {
    return (h("div", { class: "uk-flex uk-flex-center uk-margin-top" }, h("a", { href: this.href, class: "uk-button uk-button-default uk-margin-auto", style: {
        backgroundColor: "white",
        padding: "3px 30px",
        border: "none",
        borderRadius: "50px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)"
      } }, this.text)));
  }
};

export { SeeMore as ks_see_more };
