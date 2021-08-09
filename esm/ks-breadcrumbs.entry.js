import { r as registerInstance, h } from './index-f323e182.js';

const breadcrumbsCss = "ks-breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0}ks-breadcrumbs>*{position:relative;padding:2px 10px;background-color:var(--breadcrumb-color);margin:2px 4px 2px 5px;display:inline-block;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-breadcrumbs>*:before,ks-breadcrumbs>*:after{content:\"\";position:absolute;top:0;border:0 solid var(--breadcrumb-color);border-width:11.5px 5px;width:0;height:0;border-left-color:transparent;-webkit-transition:border-color 0.3s ease,\n                border-left-color 0.3s ease;transition:border-color 0.3s ease,\n                border-left-color 0.3s ease}ks-breadcrumbs>*:before{border-left-color:transparent;margin-left:-15px}ks-breadcrumbs>*:after{border-color:transparent;border-left-color:var(--breadcrumb-color);margin-left:10px}ks-breadcrumbs>*:first-child:before{border:none}ks-breadcrumbs>*:last-child:after{border:none}ks-breadcrumbs *{color:var(--breadcrumb-text-color) !important;text-decoration:none !important;line-height:19px}ks-breadcrumbs>*:hover{background-color:var(--breadcrumb-color-hover)}ks-breadcrumbs>*:hover:before{border-color:var(--breadcrumb-color-hover);border-left-color:transparent}ks-breadcrumbs>*:hover:after{border-color:transparent;border-left-color:var(--breadcrumb-color-hover)}";

const Breadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
Breadcrumbs.style = breadcrumbsCss;

export { Breadcrumbs as ks_breadcrumbs };
