'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderProgress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.width = "100%";
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 800 ? true : false;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  StepStyle(step) {
    const tile = {
      padding: this.mobile ? "20px" : "30px",
      backgroundColor: "#252525",
      color: "white",
      borderLeft: "1px solid #404040"
    };
    const active = Object.assign(Object.assign({}, tile), { backgroundColor: "#404040", borderLeft: "1px solid #404040" });
    if (this.mobile)
      return tile;
    if (step == this.current)
      return active;
    else
      return tile;
  }
  render() {
    return [
      index.h("div", { class: "uk-text-center uk-flex uk-flex-evenly ks-text-decorated " + (this.mobile ? "uk-child-width-1-1" : "uk-child-width-1-3"), style: { fontSize: "16px", backgroundColor: "#252525" } }, !this.mobile || this.current == 0 ?
        index.h("div", { style: this.StepStyle(0) }, index.h("span", { "uk-icon": "icon: cart; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-3px)" } }), " Koszyk")
        : null, !this.mobile || this.current == 1 ?
        index.h("div", { style: this.StepStyle(1) }, index.h("span", { "uk-icon": "icon: user; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-2px)" } }), " Dane do wys\u0142ki")
        : null, !this.mobile || this.current == 2 ?
        index.h("div", { style: this.StepStyle(2) }, index.h("span", { "uk-icon": "icon: check; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-1px)" } }), " Potwierdzenie")
        : null)
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_progress = OrderProgress;
