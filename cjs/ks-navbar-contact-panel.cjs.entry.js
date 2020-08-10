'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const navbarContactPanelCss = "ks-navbar-contact-panel{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;overflow:hidden;width:100%;background-color:var(--ks-color-primary-dark);color:white;-webkit-box-shadow:0 6px 6px rgba(0, 0, 0, 0.2);box-shadow:0 6px 6px rgba(0, 0, 0, 0.2)}ks-navbar-contact-panel .map{-webkit-box-flex:0;-ms-flex:none;flex:none;background-color:#eeeeee}ks-navbar-contact-panel .info{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:20px;font-size:16px;text-align:center}ks-navbar-contact-panel .address,ks-navbar-contact-panel .buttons{width:100%}ks-navbar-contact-panel .buttons a{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:2px;padding:3px;font-size:18px;color:#ffffff;background-color:transparent;border:1px solid #ffffff;border-radius:500px}@media only screen and (max-width: 639px){ks-navbar-contact-panel .address{font-size:14px}ks-navbar-contact-panel .buttons a{font-size:14px}}@media only screen and (min-width: 640px){ks-navbar-contact-panel .margin{margin-right:10%}ks-navbar-contact-panel .address{width:calc(100% * 1 / 3.001)}ks-navbar-contact-panel .buttons{width:calc(100% * 2 / 3.001)}}@media only screen and (min-width: 1200px){ks-navbar-contact-panel .info>*{width:50%}}@media only screen and (max-width: 1200px){ks-navbar-contact-panel{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}ks-navbar-contact-panel{height:calc(100vh - 72px)}}";

const NavbarContactPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mobile = 0;
        this.height = 0;
        this.width = 0;
        this.menuWidth = 0;
        this.initialized = true;
    }
    resizeHandler() {
        this.mobile = (window.innerWidth <= 1200) ?
            (window.innerWidth <= 960) ?
                (window.innerWidth <= 640) ? 3
                    : 2
                : 1
            : 0;
        this.mapDimensions();
    }
    componentWillLoad() {
        this.resizeHandler();
    }
    mapDimensions() {
        if (this.mobile == 0) {
            this.height = 250;
            this.width = Math.floor(document.documentElement.clientWidth * 0.6) - 1;
        }
        else if (this.mobile == 3) {
            this.height = document.documentElement.clientHeight - 440;
            this.width = document.documentElement.clientWidth;
        }
        else {
            this.height = document.documentElement.clientHeight - 420;
            this.width = document.documentElement.clientWidth;
        }
    }
    Toggle() {
        this.initialized = true;
        this.mapDimensions();
    }
    render() {
        return [
            this.initialized ?
                index.h("div", { class: "map" }, index.h("iframe", { frameborder: "0", height: this.height, width: this.width, src: "https://maps.google.pl/maps?ie=UTF8&q=Pozna%C5%84ska+23%2C+58-500+Jelenia+G%C3%B3ra&gl=PL&hl=pl&t=m&iwloc=A&output=embed" }))
                : null,
            index.h("div", { class: "info ks-text-decorated" }, index.h("div", { class: "address", innerHTML: this.contact }), index.h("div", { class: "buttons" }, index.h("div", { class: "margin" }, index.h("a", { href: "tel:" + this.phone, class: "uk-button" }, this.phone), index.h("br", null), index.h("a", { href: "mailto:" + this.email, class: "uk-button" }, this.email))))
        ];
    }
};
NavbarContactPanel.style = navbarContactPanelCss;

exports.ks_navbar_contact_panel = NavbarContactPanel;
