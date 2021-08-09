'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');

const breadcrumbsCss = "ks-breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0}ks-breadcrumbs>*{position:relative;padding:2px 10px;background-color:var(--breadcrumb-color);margin:2px 4px 2px 5px;display:inline-block;height:22px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-breadcrumbs>*:before,ks-breadcrumbs>*:after{content:\"\";position:absolute;top:0;border:0 solid var(--breadcrumb-color);border-width:11px 5px;width:0;height:0;border-left-color:transparent;-webkit-transition:border-color 0.3s ease,\n                border-left-color 0.3s ease;transition:border-color 0.3s ease,\n                border-left-color 0.3s ease}ks-breadcrumbs>*:before{border-left-color:transparent;margin-left:-15px}ks-breadcrumbs>*:after{border-color:transparent;border-left-color:var(--breadcrumb-color);margin-left:10px}ks-breadcrumbs>*:first-child:before{border:none}ks-breadcrumbs>*:last-child:after{border:none}ks-breadcrumbs *{color:var(--breadcrumb-text-color) !important;text-decoration:none !important;line-height:19px}ks-breadcrumbs>*:hover{background-color:var(--breadcrumb-color-hover)}ks-breadcrumbs>*:hover:before{border-color:var(--breadcrumb-color-hover);border-left-color:transparent}ks-breadcrumbs>*:hover:after{border-color:transparent;border-left-color:var(--breadcrumb-color-hover)}";

const Breadcrumbs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("slot", null);
  }
};
Breadcrumbs.style = breadcrumbsCss;

exports.ks_breadcrumbs = Breadcrumbs;
