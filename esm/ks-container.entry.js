import { r as registerInstance, h } from './index-74ff0cef.js';

const containerCss = "ks-container{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin-left:auto;margin-right:auto}ks-container>*{margin:20px 0px}@media only screen and (min-width: 1200px){ks-container~ks-container>*:first-child{margin-top:0px}}@media only screen and (max-width: 1200px){ks-container>*{margin:15px 0px}ks-container>*:first-child,ks-container>*:last-child{margin:0px 0px}ks-container[padding]>*{margin:15px}}";

const Container = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.padding = false;
  }
  render() {
    return h("slot", null);
  }
};
Container.style = containerCss;

export { Container as ks_container };
