import { r as registerInstance, h } from './index-22b73bd9.js';

const DescriptionImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "uk-flex uk-flex-center" }, h("ks-image", { src: this.image })));
  }
};

export { DescriptionImage as ks_description_image };
