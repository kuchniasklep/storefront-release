import { r as registerInstance, h } from './index-20a680bb.js';
var navbarPanelCss = "ks-navbar-panel{display:block}ks-navbar-panel .overlay{z-index:2147483647}ks-navbar-panel .overlay ks-navbar-button{float:right;margin-right:15px}ks-navbar-panel .panel{z-index:2147483648;position:absolute;right:0;width:100%;opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-navbar-panel .hiding{opacity:0.0}ks-navbar-panel .hidden{opacity:0.0;visibility:hidden}";
var NavbarPanel = /** @class */ (function () {
    function NavbarPanel(hostRef) {
        registerInstance(this, hostRef);
        this.hideMenu = false;
        this.mobile = 0;
        this.menuWidth = 0;
        this.active = false;
        this.initialized = false;
        this.animate = "hidden";
    }
    NavbarPanel.prototype.resizeHandler = function () {
        this.mobile = (window.innerWidth <= 1200) ?
            (window.innerWidth <= 960) ?
                (window.innerWidth <= 640) ? 3
                    : 2
                : 1
            : 0;
        this.MenuWidth();
    };
    NavbarPanel.prototype.componentWillLoad = function () {
        this.resizeHandler();
    };
    NavbarPanel.prototype.MenuWidth = function () {
        var buttons = document.getElementById("ks-navbar-menu-buttons");
        this.menuWidth = buttons.clientWidth;
    };
    NavbarPanel.prototype.Toggle = function () {
        this.active = !this.active;
        this.initialized = true;
        this.FreezeScrolling();
        this.MenuWidth();
        this.Animate();
    };
    NavbarPanel.prototype.FreezeScrolling = function () {
        if (this.active && this.mobile) {
            window.scrollTo(0, 0);
            document.querySelector('html').style.overflowY = "hidden";
        }
        else {
            document.querySelector('html').style.overflowY = "";
        }
    };
    NavbarPanel.prototype.OutsideClickHandler = function (event) {
        var target = event.target;
        if (this.active &&
            !target.closest("ks-navbar-panel .panel > *") &&
            !target.closest("ks-navbar-panel .button")) {
            this.Toggle();
        }
    };
    NavbarPanel.prototype.Animate = function () {
        var _this = this;
        clearTimeout(this.timeout);
        if (this.active)
            this.animate = "visible";
        else {
            this.animate = "hiding";
            this.timeout = setTimeout(function () { return _this.animate = "hidden"; }, 200);
        }
    };
    NavbarPanel.prototype.render = function () {
        var _this = this;
        var menuStyle = {
            position: "absolute",
            width: this.menuWidth + "px",
            top: "0", right: "0", zIndex: "2147483647",
            backgroundColor: "#015b97"
        };
        return [
            h("div", { class: "button", onClick: function () { return _this.Toggle(); } }, h("slot", { name: "button" })),
            h("div", { class: "overlay" }, h("div", { style: menuStyle, hidden: !this.hideMenu || !this.active }, h("ks-navbar-button", { name: "Kontakt close", icon: "close", onClick: function () { return _this.Toggle(); } })), h("div", { class: "panel " + this.animate }, h("slot", { name: "panel" })))
        ];
    };
    return NavbarPanel;
}());
NavbarPanel.style = navbarPanelCss;
export { NavbarPanel as ks_navbar_panel };
