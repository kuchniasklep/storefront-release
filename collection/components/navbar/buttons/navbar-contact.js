import { Component, h, State, Listen, Prop } from '@stencil/core';
export class NavbarContact {
    constructor() {
        this.mobile = 0;
        this.height = 0;
        this.width = 0;
        this.menuWidth = 0;
        this.active = false;
        this.initialized = false;
    }
    resizeHandler() {
        this.mobile = (window.innerWidth <= 1200) ?
            (window.innerWidth <= 960) ?
                (window.innerWidth <= 640) ? 3
                    : 2
                : 1
            : 0;
        this.mapDimensions();
        this.FreezeScrolling();
        this.MenuWidth();
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
            this.height = document.documentElement.clientHeight - 340;
            this.width = document.documentElement.clientWidth;
        }
        else {
            this.height = document.documentElement.clientHeight - 350;
            this.width = document.documentElement.clientWidth;
        }
    }
    MenuWidth() {
        const buttons = document.getElementById("ks-navbar-menu-buttons");
        this.menuWidth = buttons.clientWidth;
    }
    Toggle() {
        this.active = !this.active;
        this.initialized = true;
        this.mapDimensions();
        this.FreezeScrolling();
        this.MenuWidth();
    }
    FreezeScrolling() {
        if (this.active && this.mobile) {
            window.scrollTo(0, 0);
            document.querySelector('html').style.overflowY = "hidden";
        }
        else {
            document.querySelector('html').style.overflowY = "";
        }
    }
    render() {
        const buttonStyle = {
            margin: "2px", padding: "3px",
            backgroundColor: "transparent",
            fontSize: this.mobile == 3 ? "14px" : "18px"
        };
        const menuStyle = {
            position: "absolute",
            width: this.menuWidth + "px",
            top: "0", right: "0", zIndex: "2147483647",
            backgroundColor: "#015b97"
        };
        const contactStyle = {
            top: "72px", left: "0", zIndex: "2147483647",
            width: "100%"
        };
        const contactContainerStyle = {
            backgroundColor: "rgb(0, 66, 110)",
            height: this.mobile ? "calc(100vh - 72px)" : ""
        };
        return [
            h("ks-navbar-button", { name: "Kontakt", link: "#ks-navbar-contact", "animated-toggle": true, icon: "receiver", onClick: () => this.Toggle() }),
            h("div", { style: { zIndex: "2147483647" } },
                h("div", { hidden: !this.active, style: menuStyle },
                    h("ks-navbar-button", { style: { float: "right", marginRight: "15px" }, link: "#ks-navbar-contact", "animated-toggle": true, name: "Kontakt close", icon: "close", onClick: () => this.Toggle() })),
                h("div", { id: "ks-navbar-contact", hidden: true, class: "uk-position-absolute uk-overflow-hidden uk-light", style: contactStyle },
                    h("div", { class: "uk-flex uk-flex-wrap uk-width-1-1 " + (this.mobile == 0 ? "" : "uk-flex-column-reverse"), style: contactContainerStyle },
                        this.initialized ?
                            h("div", { class: "uk-flex-none", style: { backgroundColor: "#eeeeee" } },
                                h("iframe", { frameborder: "0", height: this.height, width: this.width, src: "https://maps.google.pl/maps?ie=UTF8&q=Pozna%C5%84ska+23%2C+58-500+Jelenia+G%C3%B3ra&gl=PL&hl=pl&t=m&iwloc=A&output=embed" }))
                            : null,
                        h("div", { class: "uk-flex-1 uk-padding-small uk-flex uk-flex-wrap uk-flex-center uk-flex-middle" },
                            h("div", { class: "uk-width-1-1 uk-width-1-3@s uk-width-1-2@l uk-text-center uk-text-small uk-text-normal@s ks-text-decorated", style: { color: "white" }, innerHTML: this.contact }),
                            h("div", { class: "uk-width-1-1 uk-width-2-3@s uk-width-1-2@l ks-text-decorated" },
                                h("div", { style: { marginRight: this.mobile < 3 ? "10%" : "" } },
                                    h("a", { href: "tel:" + this.phone, class: "uk-button uk-width-1-1 uk-button-default uk-border-pill", style: buttonStyle }, this.phone),
                                    h("br", null),
                                    h("a", { href: "mailto:" + this.email, class: "uk-button uk-width-1-1 uk-button-default uk-border-pill", style: buttonStyle }, this.email)))))))
        ];
    }
    static get is() { return "ks-navbar-contact"; }
    static get properties() { return {
        "phone": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "phone",
            "reflect": false
        },
        "email": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "email",
            "reflect": false
        },
        "contact": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "contact",
            "reflect": false
        }
    }; }
    static get states() { return {
        "mobile": {},
        "height": {},
        "width": {},
        "menuWidth": {},
        "active": {},
        "initialized": {}
    }; }
    static get listeners() { return [{
            "name": "resize",
            "method": "resizeHandler",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
