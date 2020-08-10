'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const cartData = require('./cartData-1fa306d1.js');

const dealCss = "ks-cart-deal{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#252525;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 0 30px 0}ks-cart-deal .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}ks-cart-deal .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}ks-cart-deal .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}ks-cart-deal .fx1{-webkit-animation-duration:50s;animation-duration:50s}ks-cart-deal .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}ks-cart-deal .fx3{-webkit-animation-duration:40s;animation-duration:40s}ks-cart-deal .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}ks-cart-deal .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}ks-cart-deal .text{color:white;font-size:18px;text-align:center}ks-cart-deal .top>a{color:white;text-decoration:none}ks-cart-deal .text>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700}ks-cart-deal button{margin-left:20px;padding:8px 30px 10px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}ks-cart-deal button:hover{background-color:#e62c2c}ks-cart-deal button:active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}@media only screen and (max-width: 760px){ks-cart-deal{display:block;padding:20px}ks-cart-deal .image{-webkit-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}}@media only screen and (max-width: 460px){ks-cart-deal .text>.bottom{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:34px}ks-cart-deal button{margin:5px 0 0 0}}ks-cart-deal .large{display:none}@media only screen and (min-width: 1100px){ks-cart-deal{-ms-flex-pack:distribute;justify-content:space-around}ks-cart-deal .large{display:block}ks-cart-deal .small{display:none}ks-cart-deal .text{text-align:left;min-width:400px}ks-cart-deal .text>.bottom{display:block;font-size:34px;line-height:34px}ks-cart-deal button{margin-left:0;padding:15px 30px 17px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;background-color:#ff3838;color:white}}";

const CartDeal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loading = false;
    }
    Add() {
        this.loading = true;
        this.AddDeal(this.ikey).then(() => {
            this.loading = false;
        });
    }
    render() {
        return [
            index.h("a", { href: this.link }, index.h("div", { class: "image" }, index.h("div", { class: "circle center" }, index.h("ks-img", { src: this.img, alt: this.name, vertical: true, center: true })), index.h("svg", { class: "fx fx1 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "80", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50, 32" })), index.h("svg", { class: "fx fx2 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "88", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50,59" })), index.h("svg", { class: "fx fx3 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "96", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "30,30" })), index.h("svg", { class: "fx fx4 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "106", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "70,60" })))),
            index.h("div", { class: "text ks-text-decorated" }, index.h("div", { class: "top" }, index.h("a", { href: this.link }, this.name)), index.h("div", { class: "bottom" }, this.price, index.h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, this.loading ? index.h("div", { "uk-spinner": "ratio: 0.8" }) : index.h("span", null, "DODAJ DO KOSZYKA")))),
            index.h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, this.loading ? index.h("div", { "uk-spinner": "ratio: 0.8" }) : index.h("span", null, "DODAJ DO KOSZYKA"))
        ];
    }
};
cartData.Tunnel.injectProps(CartDeal, ['AddDeal']);
CartDeal.style = dealCss;

const dealGroupCss = "ks-cart-deal-group{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#252525;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 0 30px 0}ks-cart-deal-group .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}ks-cart-deal-group .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}ks-cart-deal-group .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}ks-cart-deal-group .fx1{-webkit-animation-duration:50s;animation-duration:50s}ks-cart-deal-group .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}ks-cart-deal-group .fx3{-webkit-animation-duration:40s;animation-duration:40s}ks-cart-deal-group .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}ks-cart-deal-group .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}ks-cart-deal-group .text{color:white;font-size:18px;text-align:center}ks-cart-deal-group .top>a{color:white;text-decoration:none}ks-cart-deal-group .text>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700}ks-cart-deal-group button{margin-left:20px;padding:8px 30px 10px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}ks-cart-deal-group button:hover{background-color:#e62c2c}ks-cart-deal-group button:active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}ks-cart-deal-group select{display:block;margin:10px auto 15px auto;padding:8px 40px 10px 10px;width:100%;text-align:center;font-size:18px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#353535;color:#f2f2f2 !important;border:none;background-image:url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');background-repeat:no-repeat, repeat;background-position:right 15px top 50%, 0 0;background-size:10px auto, 100%;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-deal-group select::-ms-expand{display:none}ks-cart-deal-group select:hover{background-color:#404040}ks-cart-deal-group select:focus{outline:none}ks-cart-deal-group select option{font-weight:normal}@media only screen and (max-width: 760px){ks-cart-deal-group{display:block;padding:20px}ks-cart-deal-group .image{-webkit-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}ks-cart-deal-group select{max-width:420px}}@media only screen and (max-width: 460px){ks-cart-deal-group .text>.bottom{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:34px !important}ks-cart-deal-group button{margin:5px 0 0 0}}ks-cart-deal-group .large{display:none}@media only screen and (min-width: 1100px){ks-cart-deal-group{-ms-flex-pack:distribute;justify-content:space-around}ks-cart-deal-group .large{display:block}ks-cart-deal-group .small{display:none}ks-cart-deal-group .text{text-align:left;min-width:400px}ks-cart-deal-group .text>.bottom{display:block;font-size:34px;line-height:34px}ks-cart-deal-group button{margin-left:0;padding:15px 30px 17px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;background-color:#ff3838;color:white}ks-cart-deal-group select{margin:8px 0px 8px 0px;width:auto;text-align:left}}";

const CartDealGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loading = false;
        this.add = index.createEvent(this, "add", 7);
    }
    onAdd() {
        if (!this.loading) {
            this.add.emit();
            this.loading = true;
        }
    }
    componentWillLoad() {
        this.currentDeal = this.deals[0];
    }
    change(target) {
        const select = target;
        this.currentDeal = this.deals[select.selectedIndex];
    }
    Add() {
        this.loading = true;
        this.AddDeal(this.currentDeal.id).then(() => {
            this.loading = false;
        });
    }
    render() {
        return [
            index.h("a", { href: this.currentDeal.link }, index.h("div", { class: "image" }, index.h("div", { class: "circle center" }, index.h("ks-img", { src: this.currentDeal.img, alt: this.name, vertical: true, center: true })), index.h("svg", { class: "fx fx1 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "80", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50, 32" })), index.h("svg", { class: "fx fx2 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "88", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50,59" })), index.h("svg", { class: "fx fx3 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "96", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "30,30" })), index.h("svg", { class: "fx fx4 center", width: "250", height: "250" }, index.h("circle", { cx: "125", cy: "125", r: "106", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "70,60" })))),
            index.h("div", { class: "text ks-text-decorated" }, index.h("div", { class: "top" }, index.h("a", { href: this.currentDeal.link }, this.name), index.h("select", { class: "ks-text-decorated", onChange: event => this.change(event.target) }, this.deals.map(deal => index.h("option", null, deal.name)))), index.h("div", { class: "bottom" }, this.currentDeal.price, index.h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, this.loading ? index.h("div", { "uk-spinner": "ratio: 0.8" }) : index.h("span", null, "DODAJ DO KOSZYKA")))),
            index.h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, this.loading ? index.h("div", { "uk-spinner": "ratio: 0.8" }) : index.h("span", null, "DODAJ DO KOSZYKA"))
        ];
    }
};
cartData.Tunnel.injectProps(CartDealGroup, ['AddDeal']);
CartDealGroup.style = dealGroupCss;

exports.ks_cart_deal = CartDeal;
exports.ks_cart_deal_group = CartDealGroup;
