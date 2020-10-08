'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const containerCss = "ks-container{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin-left:auto;margin-right:auto}ks-container>*{margin:20px 0px}@media only screen and (min-width: 1200px){ks-container~ks-container>*:first-child{margin-top:0px}}@media only screen and (max-width: 1200px){ks-container>*{margin:15px 0px}ks-container>*:first-child,ks-container>*:last-child{margin:0px 0px}ks-container[padding]>*{margin:15px}}";

const Container = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.padding = false;
  }
  render() {
    return index.h("slot", null);
  }
};
Container.style = containerCss;

exports.ks_container = Container;
