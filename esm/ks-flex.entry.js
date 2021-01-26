import { r as registerInstance, h } from './index-74ff0cef.js';

const Flex = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.center = false;
    this.between = false;
    this.around = false;
    this.middle = false;
    this.gutter = false;
    this.column = false;
    this.reverse = false;
    this.height = false;
    this.small = false;
  }
  render() {
    const justify = this.center ? "uk-flex-center" :
      this.between ? "uk-flex-between" :
        this.around ? "uk-flex-around" : "uk-flex";
    const alignment = this.middle ? "uk-flex-middle" : "";
    const gutter = this.gutter ? "uk-grid-small" : "uk-grid-collapse";
    const size = this.small ? "uk-child-width-1-2@xs uk-child-width-small@s" : "";
    const direction = this.column ?
      (this.reverse ? "uk-flex-column-reverse" : "uk-flex-column")
      : (this.reverse ? "uk-flex-row-reverse" : "");
    const height = this.height ? "uk-height-1-1" : "";
    const match = this.match ? "uk-grid-match" : "";
    return (h("div", { class: [justify, alignment, gutter, size, direction, height, match].join(" "), "uk-grid": true }, h("slot", null)));
  }
};

export { Flex as ks_flex };
