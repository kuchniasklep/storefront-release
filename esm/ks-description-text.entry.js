import { r as registerInstance, h } from './index-cc43f019.js';

const descriptionTextCss = "ks-description-text{display:block;margin-bottom:40px}";

const DescriptionText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
DescriptionText.style = descriptionTextCss;

export { DescriptionText as ks_description_text };
