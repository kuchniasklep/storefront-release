import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const radioTileCss = "ks-radio-tile .hover:hover{background-color:#b2b2b2 !important}";

const RadioTile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
    }
    CheckHandler() {
        const inputs = document.querySelectorAll(`input[name=${this.name}]`);
        const thisInput = this.root.querySelector("input");
        inputs.forEach((input) => {
            if (input == thisInput)
                this.active = thisInput.checked;
            else {
                const parent = input.parentElement.parentElement;
                parent.active = input.checked;
            }
        });
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.root.style.width = "100%";
        this.resizeHandler();
        this.MobileWatcher(this.mobile);
    }
    resizeHandler() {
        if (window.innerWidth <= 620)
            this.mobile = true;
        else
            this.mobile = false;
    }
    MobileWatcher(mobile) {
        this.root.style.maxWidth = mobile ? "100%" : "260px";
    }
    render() {
        const mutedColor = "#eeeeee";
        const titleStyle = {
            backgroundColor: this.active ? this.color : "#a7a7a7",
            transition: "background-color 0.3s ease",
            color: "white",
            height: "50px"
        };
        const priceStyle = {
            fontSize: "20px",
            padding: "5px 10px"
        };
        const infoStyle = {
            backgroundColor: mutedColor,
            padding: "8px",
            fontSize: "16px",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.1s ease-in, color 0.1s ease-in"
        };
        return (h("label", null, h("input", { hidden: true, type: "radio", name: this.name, value: this.value, onChange: () => this.CheckHandler() }), h("div", null, this.price ?
            h("div", { class: "uk-flex uk-flex-middle uk-flex-between" + (this.active ? "" : " hover"), style: titleStyle }, h("div", { class: "uk-flex-auto" }, h("ks-image", { src: this.logo, alt: this.service, width: "130", height: "40" })), h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
            :
                h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle }, h("ks-image", { src: this.logo, alt: this.service, width: "140", height: "40" })), h("div", { class: `uk-flex uk-flex-middle ${this.time ? "uk-flex-between" : "uk-flex-center"}`, style: infoStyle, hidden: this.mobile && !this.active }, h("div", null, this.service), h("div", { class: "uk-text-right" }, this.time)))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "mobile": ["MobileWatcher"]
    }; }
};
RadioTile.style = radioTileCss;

export { RadioTile as ks_radio_tile };
