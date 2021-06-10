import { r as registerInstance, h, g as getElement, c as createEvent } from './index-4f41a852.js';
import { s as store } from './product-store-dcf22266.js';
import { w as window_load } from './deferredpromise-0f64146f.js';
import { S as Swiper } from './core-class-3f174cf3.js';
import { T as Thumbs } from './thumbs-ca1d86c7.js';
import { O as OpenSuggestions } from './functions-802032ba.js';
import { V as ValidateInput } from './validate-cd7ce36d.js';
import './index-a8e6b0b4.js';

const commentCss = "ks-comment{display:block}ks-comment article{padding:30px}@media (min-width: 1200px){ks-comment article{padding:30px 40px}}ks-comment header{display:-webkit-box;display:-ms-flexbox;display:flex}ks-comment header>div{width:100%}ks-comment header .title{margin:0}ks-comment header .info{font-size:.875rem;line-height:1.4;color:#707070}ks-comment ks-icon{margin-right:20px}ks-comment p{margin-bottom:0px}";

const Comment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("article", null, h("header", null, h("ks-icon", { name: "user", size: 2 }), h("div", null, h("h3", { class: "title" }, this.author), h("div", { class: "info" }, this.when))), h("slot", null));
  }
};
Comment.style = commentCss;

const productAttributeCss = "ks-product-attribute{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:5px 0px;font-family:var(--font-emphasis);font-size:15px;line-height:15px}ks-product-attribute[danger]{color:var(--color-secondary);font-weight:700;-webkit-animation:blink 1.5s ease-in-out infinite;animation:blink 1.5s ease-in-out infinite}ks-product-attribute[emphasis]{color:var(--color-secondary);font-weight:700}ks-product-attribute[faded]{color:var(--color-faded)}ks-product-attribute a{color:inherit !important;text-decoration:none !important}ks-product-attribute ks-icon{margin-right:10px}ks-product-attribute ks-icon:nth-child(2){margin-left:10px}@media only screen and (max-width: 540px){ks-product-attribute{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:5px auto}}@media only screen and (max-width: 405px){ks-product-attribute{max-width:68%}}";

const ProductAttribute = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = "";
    this.icon = "";
    this.size = 1.0;
    this.danger = false;
    this.emphasis = false;
    this.faded = false;
  }
  render() {
    const content = [
      h("ks-icon", { name: this.icon, size: this.size }),
      h("slot", null)
    ];
    if (this.href != "")
      return h("a", { href: this.href }, content);
    return content;
  }
};
ProductAttribute.style = productAttributeCss;

const productButtonCss = "ks-product-button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:5px 2px}ks-product-button button{outline-style:none;border-style:none;border-radius:50px;padding:12px 25px;background-color:var(--color-dark);color:var(--text-color-dark);font-family:var(--product-button-font);font-size:var(--product-button-size);line-height:var(--product-button-size);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-button button:hover{background-color:var(--color-dark-hover)}ks-product-button button:active{background-color:var(--color-dark-active)}ks-product-button[icon]{border-radius:0px;height:40px;margin:0;padding:5px 0px;background-color:var(--color-dark);color:var(--text-color-dark);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-button[icon]:hover{background-color:var(--color-dark-hover)}ks-product-button[icon]:active{background-color:var(--color-dark-active)}@media only screen and (max-width: 400px){ks-product-button button{padding:12px 25px}}";

const ProductButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (this.icon)
      return h("ks-img2", { src: this.icon });
    return h("button", null, h("slot", null));
  }
};
ProductButton.style = productButtonCss;

const ProductCalculatorCA = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.price = "";
    this.parameters = "";
    this.width = 820;
    this.height = 680;
  }
  render() {
    return [
      h("slot", null),
      h("script", null, "let CreditAgricoleButton = document.querySelector(\"ks-product-calculator-ca ", '>', " *:first-child\"); CreditAgricoleButton.addEventListener(\"click\", function(event)", "{", "var iWidth = ", this.width, "; var iHeight = ", this.height, "; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ", this.price, "; var parametryLukas = \"", this.parameters, "\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');", '}', ");")
    ];
  }
};

const ProductCalculatorPayU = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.price = "";
    this.posId = "";
    this.apiKey = "";
    this.enabled = false;
  }
  clickHandler() {
    if (this.enabled)
      this.buttonHandler();
    else
      this.enabled = true;
  }
  loadHandler() {
    window.openpayu = window.openpayu || {};
    window.openpayu.options = {
      creditAmount: this.price,
      posId: this.posId,
      key: this.apiKey,
      showLongDescription: true
    };
    OpenPayU.Installments.miniInstallment("#calculator-payu");
    this.buttonHandler();
  }
  buttonHandler() {
    let payuLink = document.querySelector("#calculator-payu a");
    payuLink.click();
  }
  render() {
    return [
      h("slot", null),
      this.enabled ? [
        h("span", { id: "calculator-payu", style: { display: "none" } }),
        h("script", { onLoad: () => this.loadHandler(), src: "https://static.payu.com/res/v2/widget-products-installments.min.js" }),
      ] : null
    ];
  }
  get root() { return getElement(this); }
};

const productCommentsCss = "ks-product-comments{display:block;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:var(--card-background);color:var(--card-text-color)}ks-product-comments .message{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:30px}ks-product-comments .message ks-icon{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:15px;max-width:50px;width:100%}ks-product-comments .message p{width:100%;text-align:center}@media (min-width: 1200px){ks-product-comments .message{padding:30px 40px}}ks-product-comments hr,ks-product-comments .more{margin:0}ks-product-comments .expand,ks-product-comments .add{width:100%;line-height:40px;padding:0 10px;outline:none;border:none;text-align:center;text-decoration:none;text-transform:none;color:white !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-comments .expand{width:100%;line-height:40px;padding:0 10px;vertical-align:middle;background-color:var(--color-dark)}ks-product-comments .expand:hover{background-color:var(--color-dark-hover)}ks-product-comments .expand:active{background-color:var(--color-dark-active)}ks-product-comments .add{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:8px;background-color:var(--color-secondary)}ks-product-comments .add:hover{background-color:var(--color-secondary-hover)}ks-product-comments .add:active{background-color:var(--color-secondary-active)}ks-product-comments ks-comment{border-top:solid 1px #dddddd}";

const ProductTab$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.link = "";
    this.message = "";
    this.hasMore = false;
    this.expand = false;
  }
  render() {
    return [
      h("div", { class: "message" }, h("ks-icon", { name: "mail", size: 2.5 }), h("p", null, this.message)),
      h("slot", null),
      h("div", { class: "more", hidden: !this.expand }, h("slot", { name: "hidden" })),
      this.hasMore ?
        h("button", { onClick: () => this.expand = !this.expand, class: "expand" }, h("ks-icon", { name: this.expand ? "chevron-up" : "chevron-down", size: 1.5 }))
        : null,
      this.link ?
        h("a", { href: this.link, rel: "nofollow", class: "add", "aria-label": "Napisz recenzj\u0119" }, h("ks-icon", { name: "plus-circle", size: 1.5 }))
        : null
    ];
  }
  get root() { return getElement(this); }
};
ProductTab$1.style = productCommentsCss;

const productCountCss = "ks-product-count{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:80px;margin-right:8px;overflow:hidden;border-style:solid;border-radius:50px;border-width:1px;border-color:#cacaca;background-color:var(--product-price-count-color)}ks-product-count input{outline-style:none;border-style:none;background-color:transparent;width:52px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 8px 10px 13px;font-family:var(--product-price-count-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small);text-align:center;vertical-align:middle}ks-product-count input::-webkit-inner-spin-button,ks-product-count input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ks-product-count input[type=number]{-moz-appearance:textfield}ks-product-count .spinner{width:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap}ks-product-count .spinner button{outline-style:none;border-style:none;line-height:0;height:100%;margin:0;width:28px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#e4e4e4;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color);border-left:solid 1px #cacaca}ks-product-count .spinner button:first-child{padding:8px 8px 3px 3px;border-bottom:solid 1px #cacaca}ks-product-count .spinner button:last-child{padding:3px 8px 8px 3px}ks-product-count .spinner button:hover{background-color:#cecece}ks-product-count .spinner button:active{background-color:#a7a7a7}@media (hover: none){ks-product-count{max-width:70px}ks-product-count input{padding:10px}ks-product-count .spinner{display:none}}";

const ProductCount$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.countChange = createEvent(this, "countChange", 7);
  }
  componentDidLoad() {
    this.input = this.root.querySelector("input");
  }
  CountChangeHandler() {
    this.countChange.emit(parseInt(this.input.value));
  }
  ClampLength() {
    if (this.input.value.length > 3)
      this.input.value = this.input.value.substr(0, 3);
  }
  ClampValue() {
    if (parseInt(this.input.value) > store.get("availability")) {
      this.input.value = store.get("availability").toString();
    }
    if (parseInt(this.input.value) < 1) {
      this.input.value = "1";
    }
  }
  Increment() {
    const value = parseInt(this.input.value) + 1;
    if (value <= store.get("availability")) {
      this.input.value = value.toString();
      this.CountChangeHandler();
    }
  }
  Decrement() {
    const value = parseInt(this.input.value) - 1;
    if (value >= 1) {
      this.input.value = value.toString();
      this.CountChangeHandler();
    }
  }
  Target(e, func) {
    func(e.target);
  }
  render() {
    return [
      h("input", { type: "number", min: 1, max: store.get("availability"), value: 1, "aria-label": "Ilo\u015B\u0107", onInput: () => this.ClampLength(), onChange: () => { this.ClampValue(); this.CountChangeHandler(); } }),
      h("div", { class: "spinner" }, h("button", { onClick: () => this.Increment() }, "+"), h("button", { onClick: () => this.Decrement() }, "-"))
    ];
  }
  get root() { return getElement(this); }
};
ProductCount$1.style = productCountCss;

const productImagesCss = "ks-product-images{display:block;margin-right:30px}ks-product-images .swiper-slide{position:relative}ks-product-images .swiper-slide canvas{max-width:100%;max-height:450px}ks-product-images .preview ks-img{position:absolute;top:0;width:100%;max-height:450px;margin:auto}ks-product-images .thumb{margin-top:20px;position:relative}ks-product-images .thumb::after{content:\"\";position:absolute;top:0;bottom:0;right:0;left:-30px;background:-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), color-stop(85%, rgba(255,255,255,0)), to(rgba(255,255,255,1)));background:linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%);z-index:2;pointer-events:none}ks-product-images .thumb .swiper-slide{width:70px;height:70px;opacity:0.4;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-images .thumb .swiper-slide-thumb-active{opacity:1}@media only screen and (max-width: 959px){ks-product-images{margin-right:0px;margin-top:30px}ks-product-images .thumb{margin-bottom:0px}}@media only screen and (max-width: 460px){ks-product-images .swiper-slide canvas{max-height:300px}ks-product-images .preview ks-img{max-height:300px}}ks-product-images .preview:not(.swiper-container-initialized) .swiper-slide:nth-child(n+2){display:none}ks-product-images .thumb .swiper-wrapper{opacity:1;-webkit-animation:fade-in 0.3s ease;animation:fade-in 0.3s ease}ks-product-images .thumb:not(.swiper-container-initialized) .swiper-wrapper{opacity:0;-webkit-animation:none;animation:none}";

Swiper.use([Thumbs]);
const ProductImages = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.delay = 0;
    this.loaded = false;
    this.rendered = false;
  }
  componentDidRender() {
    if (this.rendered)
      return;
    window_load.promise.then(() => this.initialize());
    this.rendered = true;
  }
  initialize() {
    setTimeout(() => {
      this.lightbox = this.root.querySelector("ks-lightbox");
      const thumbs_enabled = store.get("images").length > 1;
      if (thumbs_enabled) {
        this.thumbs = new Swiper('.thumb', {
          observer: true,
          observeParents: true,
          grabCursor: true,
          slidesPerView: "auto",
          preventInteractionOnTransition: true,
          centerInsufficientSlides: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          spaceBetween: 3,
        });
      }
      this.carousel = new Swiper('.preview', {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
        thumbs: thumbs_enabled ? {
          swiper: this.thumbs
        } : undefined
      });
      this.loaded = true;
    }, this.delay);
  }
  render() {
    return [
      h("div", { class: "swiper-container preview" }, h("div", { class: "swiper-wrapper" }, store.get("images").map((image, index) => h("div", { class: "swiper-slide" }, h("canvas", { width: image.preview.width, height: image.preview.height }), h("ks-img", { contained: true, center: true, sync: index == 0, src: image.preview.url, width: image.preview.width, height: image.preview.height, onClick: () => this.lightbox.show(index) }))))),
      store.get("images").length > 1 ?
        h("div", { class: "swiper-container thumb" }, this.loaded ? null : h("ks-loader", { dark: true }), h("div", { class: "swiper-wrapper" }, store.get("images").map((image, index) => h("div", { class: "swiper-slide" }, h("ks-img", { sync: index < 6, contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))
        : null,
      h("ks-lightbox", { data: store.get("images") })
    ];
  }
  get root() { return getElement(this); }
};
ProductImages.style = productImagesCss;

const productInfoCss = "ks-product-info{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:30px 30px;min-height:420px}ks-product-info>*{margin:0px auto;width:100%;max-width:700px}ks-product-info .left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}ks-product-info .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;margin:15px -5px 10px 0px}ks-product-info .bottom{position:relative;padding-bottom:60px}@media only screen and (min-width: 961px){ks-product-info{display:-ms-grid;display:grid;-ms-grid-columns:48% 52%;grid-template-columns:48% 52%;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr}ks-product-info>*:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}ks-product-info>*:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}ks-product-info>*:nth-child(3){-ms-grid-row:2;-ms-grid-column:1}ks-product-info>*:nth-child(4){-ms-grid-row:2;-ms-grid-column:2}ks-product-info>.top{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1}ks-product-info>.left{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1 / 3}ks-product-info>.bottom{-ms-grid-column:2;grid-column:2;-ms-grid-row:2;grid-row:2;padding-bottom:0px}}@media only screen and (min-width: 1200px){ks-product-info{padding:30px 30px}}@media only screen and (max-width: 960px){ks-product-info .bottom{margin-top:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-product-info .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;margin:15px 0px 10px 0px}}@media only screen and (max-width: 460px){ks-product-info{padding:40px 10px}}";

const ProductInfo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.productRendered = createEvent(this, "productRendered", 7);
    this.dataId = "";
    this.shippingApi = "";
    this.traitApi = "";
    this.cartApi = "";
    this.cartCountApi = "";
    this.favouritesApi = "";
    this.suggestionApi = "";
  }
  componentDidLoad() {
    this.navbar = document.querySelector("ks-navbar");
    this.errorPopup = document.querySelector("ks-error-popup");
    const dataElement = document.getElementById(this.dataId);
    const data = JSON.parse(dataElement.innerHTML);
    Object.keys(data).map(key => {
      store.set(key, data[key]);
    });
    if (store.get("negotiate") && store.get("shippingMessage")) {
      store.set("externalPoints", true);
    }
  }
  async CountChange(event) {
    store.set("count", event.detail);
    let body = new FormData();
    body.append("id", store.get("id"));
    body.append("count", event.detail.toString());
    store.set("cartLoading", true);
    await this.fetch(this.shippingApi, body)
      .then(response => response.json())
      .then(json => {
      store.set("shippingTime", json.shippingTime);
      store.set("shippingMessage", json.shippingMessage);
      if (store.get("negotiate") && store.get("shippingMessage"))
        store.set("externalPoints", true);
    })
      .catch(error => this.errorPopup.show(error));
    store.set("cartLoading", false);
  }
  async TraitChange(event) {
    store.set("cartLoading", true);
    const traits = event.detail.reduce((accumulator, trait) => {
      return accumulator + "x" + trait[0].id + "-" + trait[1].id;
    }, "");
    let body = new FormData();
    body.append("id", store.get("id"));
    body.append("traits", traits);
    await this.fetch(this.traitApi, body)
      .then(response => response.json())
      .then(json => {
      if (json.currentPrice != undefined)
        store.set("currentPrice", json.currentPrice);
      if (json.previousPrice != undefined)
        store.set("previousPrice", json.previousPrice);
      if (json.ean != undefined)
        store.set("ean", json.ean);
      if (json.catalog != undefined)
        store.set("catalog", json.catalog);
      store.set("traitIDs", traits);
      if (json.image != undefined) {
        const images = store.get("images");
        images[0].full = json.image.full;
        images[0].preview = json.image.preview;
        images[0].thumb = json.image.thumb;
        store.set("images", images);
      }
    })
      .catch(error => this.errorPopup.show(error));
    store.set("cartLoading", false);
  }
  async AddToCart() {
    store.set("cartLoading", true);
    const id = store.get("id");
    const count = store.get("count").toString();
    const traitIDs = store.get("traitIDs");
    const name = store.get("name");
    let countBody = new FormData();
    countBody.append("id", id);
    countBody.append("ilosc", count);
    countBody.append("cechy", traitIDs);
    countBody.append("akcja", 'dodaj');
    await this.fetch(this.cartCountApi, countBody)
      .then(async () => {
      let cartBody = new FormData();
      cartBody.append("id", id);
      cartBody.append("ilosc", count);
      cartBody.append("cechy", traitIDs);
      cartBody.append("komentarz", "");
      cartBody.append("komentarz", "");
      cartBody.append("txt", "");
      cartBody.append("wroc", "");
      cartBody.append("miejsce", "0");
      await this.fetch(this.cartApi, cartBody)
        .then(() => {
        this.navbar.IncrementCart(count);
        OpenSuggestions(id, name);
      })
        .catch(error => this.errorPopup.show(error));
    })
      .catch(error => this.errorPopup.show(error));
    store.set("cartLoading", false);
  }
  async AddToFavourites() {
    store.set("favouritesLoading", true);
    let body = new FormData();
    body.append("id", store.get("id"));
    await this.fetch(this.favouritesApi, body)
      .then(() => this.navbar.IncrementHeart())
      .catch(error => this.errorPopup.show(error));
    store.set("favouritesCompleted", true);
    store.set("favouritesLoading", false);
  }
  async fetch(url, body) {
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    return fetch(url, {
      method: 'POST',
      body: body,
      headers: headers,
      credentials: "same-origin"
    })
      .then(response => {
      if (!response.ok)
        throw { name: response.status, message: response.statusText };
      return response;
    });
  }
  componentDidRender() {
    this.productRendered.emit();
  }
  render() {
    return [
      h("div", { class: "top" }, h("slot", { name: "top" })),
      h("div", { class: "left" }, h("slot", { name: "left" })),
      h("div", { class: "bottom" }, h("slot", null), h("slot", { name: "brand" }))
    ];
  }
  get root() { return getElement(this); }
};
ProductInfo.style = productInfoCss;

const productNegotiateCss = "ks-product-negotiate{display:block}ks-product-negotiate fieldset{border:none;margin:0;padding:0}ks-product-negotiate .info{text-align:center}ks-product-negotiate h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";

const ProductNegotiate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.agreement = "Wyrażam zgodę na przetwarzanie przez Sprzedawcę moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.";
    this.successHeading = "PROPOZYCJA WYSŁANA";
    this.successMessage = "Postaramy się odpowiedzieć jak najszybciej. Jeżeli nie odpowiemy w ciągu 2 dni roboczych prosimy o kontakt telefoniczny.";
    this.faliureHeading = "BŁĄD WYSYŁANIA PROPOZYCJI";
    this.faliureMessage = "Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny.";
  }
  async requestHandler(event) {
    event.preventDefault();
    if (!await ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("productUrl", document.location.href);
    data.append("productPrice", this.price);
    data.append("productOldPrice", this.oldPrice);
    data.append("productName", this.name);
    await fetch(this.api, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result == "success")
        this.dialog.showSuccess(this.successHeading, this.successMessage);
      else
        this.dialog.showFailure(this.faliureHeading, this.faliureMessage);
    })
      .catch(async (error) => {
      let message = "";
      if (!window.navigator.onLine)
        message = "Brak internetu.";
      if (error.message)
        message = error.message;
      this.dialog.showFailure(this.faliureHeading, message);
    });
  }
  componentDidRender() {
    this.dialog = this.root.querySelector("ks-dialog");
    const button = this.root.parentElement.querySelector("ks-product-negotiate > *:first-child");
    button.addEventListener("click", () => {
      this.dialog.show();
    });
  }
  render() {
    return [
      h("slot", null),
      h("ks-dialog", null, h("form", { onSubmit: e => this.requestHandler(e) }, h("fieldset", null, h("div", { class: "info" }, h("h3", null, this.heading), h("p", null, this.paragraph)), h("ks-input-text", { name: "name", required: true, nomessage: true, placeholder: "Imi\u0119 i nazwisko", icon: "user" }), h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }), h("ks-input-text", { url: true, name: "url", required: true, nomessage: true, placeholder: "Link do konkurencyjnej oferty", icon: "link" }), h("ks-input-textarea", { rows: 4, name: "comment", placeholder: "Komentarz", noresize: true }), h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }), h("ks-button", { submit: true, name: "WY\u015ALIJ ZAPYTANIE" }))))
    ];
  }
  get root() { return getElement(this); }
};
ProductNegotiate.style = productNegotiateCss;

const productPointsCss = "ks-product-points{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-points>div:first-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:20%;font-family:var(--font-emphasis);font-weight:700;font-size:32px;color:#ffffff;background-color:#ee1438}ks-product-points>div:last-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;font-size:14px;padding:15px}@media screen and (max-width: 640px){ks-product-points>div:first-child{width:100%;padding:10px 0}}";

const ProductPoints = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.count = 0;
    this.value = 0;
  }
  render() {
    return [
      h("div", null, this.count),
      h("div", null, "Kupuj\u0105c ten produkt otrzymasz od nas ", this.count, " punkt\u00F3w do wykorzystania na zakupy w naszym sklepie. Dotyczy tylko zarejestrowanych Klient\u00F3w. Warto\u015B\u0107 ", this.value, " punkt\u00F3w wynosi 1 z\u0142.")
    ];
  }
};
ProductPoints.style = productPointsCss;

const productPriceCss = "ks-product-price{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0 20px;font-family:var(--product-price-font);font-weight:700}ks-product-price .previous{display:inline-block;color:var(--color-faded);font-size:var(--product-price-size);line-height:var(--product-price-size);position:relative;margin-left:15px}ks-product-price .previous::after{background-color:var(--color-faded);content:\"\";height:0.1em;left:-3px;right:-3px;position:absolute;top:46%}ks-product-price .current{color:var(--color-secondary);font-size:var(--product-price-size-emphasis);line-height:var(--product-price-size)}@media only screen and (max-width: 560px){ks-product-price .price{display:block;width:100%;margin-bottom:20px;margin-right:0px;text-align:center}}ks-product-price .currency{width:15px;height:15px;padding:5px;line-height:13px;margin:1px 0 0 10px;border-radius:30px;background-color:var(--color-secondary);color:white;font-family:var(--product-price-font);text-align:center;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}";

const ProductPrice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const previousPrice = store.get("previousPrice").replace('.', ',');
    const currentPrice = store.get("currentPrice").replace('.', ',');
    return [
      h("div", { class: "current" }, currentPrice),
      h("div", { class: "currency" }, "z\u0142"),
      previousPrice ? h("div", { class: "previous" }, previousPrice) : null
    ];
  }
};
ProductPrice.style = productPriceCss;

const productShippingCss = "ks-product-shipping{display:block;width:100%}ks-product-shipping .message{font-family:var(--product-shipping-message-font);font-size:15px;color:var(--color-secondary);margin-bottom:15px;border-radius:20px;font-weight:700;max-width:100%}ks-product-shipping .hidden{display:none}@media only screen and (max-width: 960px){ks-product-shipping{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}";

const ProductShipping = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const available = store.get('availability') > 0;
    const time = available ? store.get("shippingTime") : "Niedostępny w magazynie";
    const timeIcon = available ? "clock" : "alert-circle";
    const freeShipping = parseFloat(store.get("shippingPrice")) == 0;
    const knownShipping = time.search("godzin") != -1 || time.search("dni") != -1;
    const instantShipping = time.search("24 godziny") != -1;
    let timeprefix = knownShipping ? "Wysyłka w" : "";
    let price = freeShipping ? "Darmowa dostawa" : store.get("shippingPrice").replace(".", ",") + " zł";
    const priceprefix = freeShipping ? "" : "Dostawa od";
    const message = store.get("shippingMessage");
    return [
      message ? h("div", { class: "message" }, message)
        : null,
      h("ks-product-attribute", { icon: timeIcon, danger: !instantShipping }, timeprefix, " ", time),
      h("ks-product-attribute", { icon: "package" }, priceprefix, " ", price)
    ];
  }
};
ProductShipping.style = productShippingCss;

const productSuggestionsCss = "ks-product-suggestions{display:block}ks-product-suggestions .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;text-align:center}ks-product-suggestions .content>.top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;padding:60px 20px;max-height:400px}ks-product-suggestions .content>.top>.heading{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-suggestions .content>.top>.name{font-family:var(--font-emphasis);font-size:18px}ks-product-suggestions .content>.top>.buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;max-width:600px;width:100%}ks-product-suggestions .content>.top>.buttons>*{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin:5px}ks-product-suggestions .content>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 0px;height:100%;background-color:#f2f2f2}ks-product-suggestions .content>.bottom>.fade-left,ks-product-suggestions .content>.bottom>.fade-right{position:absolute;top:0;height:100%;width:50px;z-index:1}ks-product-suggestions .content>.bottom>.fade-left{background-image:-webkit-gradient(linear, left top, right top, from(#f2f2f2), to(rgba(242, 242, 242, 0)));background-image:linear-gradient(to right, #f2f2f2, rgba(242, 242, 242, 0));left:0}ks-product-suggestions .content>.bottom>.fade-right{background-image:-webkit-gradient(linear, right top, left top, from(#f2f2f2), to(rgba(242, 242, 242, 0)));background-image:linear-gradient(to left, #f2f2f2, rgba(242, 242, 242, 0));right:0}ks-product-suggestions .swiper-container{width:100%;margin-bottom:15px}ks-product-suggestions .swiper-slide{height:100%;width:auto;max-width:230px;overflow:hidden;-webkit-animation:fade-in 0.8s ease 1;animation:fade-in 0.8s ease 1}ks-product-suggestions .swiper-slide>*{width:230px}ks-product-suggestions .suggestion-heading{font-size:18px;margin:10px 0 20px 0;text-align:center}ks-product-suggestions ks-product-card .top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:230px}@media (max-width: 560px){ks-product-suggestions .content>.top{padding:20px 10px}ks-product-suggestions .content>.top>.buttons{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-top:10px}ks-product-suggestions ks-product-card .top{min-height:210px;max-height:210px}}@media (max-width: 370px){ks-product-suggestions .content>.top>.buttons>*>button{padding-top:12px;padding-bottom:12px}ks-product-suggestions .content>.top>.heading{font-size:18px}ks-product-suggestions .content>.top>.name{font-family:var(--font-regular);font-size:14px}ks-product-suggestions .swiper-slide>*{width:200px}ks-product-suggestions ks-product-card .top{min-height:180px;max-height:180px}ks-product-suggestions .suggestion-heading{font-size:16px;margin:3px 0 10px 0}}";

const ProductSuggestions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.suggestionHeading = "Produkty sugerowane";
    this.loading = true;
    this.products = new Array();
  }
  componentDidRender() {
    this.overlay = this.root.querySelector('ks-overlay');
  }
  async show(productId, name) {
    this.showCarousel();
    this.loading = true;
    this.name = name;
    this.products = [];
    this.overlay.show();
    setTimeout(async () => {
      const headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      let body = new FormData();
      body.append("id", productId);
      await fetch(this.api, {
        method: 'POST',
        body: body,
        headers: headers,
        credentials: "same-origin"
      }).then(response => {
        return response.json();
      }).then(data => {
        this.products = data;
        this.loading = false;
      });
    }, 1500);
  }
  hide() {
    this.overlay.hide();
  }
  toCart() {
    window.location.href = 'koszyk.html';
  }
  showCarousel() {
    if (this.carousel == undefined) {
      this.carousel = new Swiper('.product-suggestions', {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 1,
        preventInteractionOnTransition: true,
      });
      console.log(this.carousel);
    }
  }
  render() {
    return h("ks-overlay", null, h("div", { class: "content" }, h("div", { class: "top" }, h("div", { class: "heading" }, "Dodano do koszyka"), h("div", { class: "name" }, this.name), h("div", { class: "buttons" }, h("ks-button", { secondary: true, name: "Przejd\u017A do koszyka", onClick: () => this.toCart() }), h("ks-button", { name: "Przegl\u0105daj dalej", onClick: () => this.hide() }))), h("div", { class: "bottom" }, this.loading ? null : h("h3", { class: "suggestion-heading" }, this.suggestionHeading), this.loading ? h("ks-loader", { dark: true, large: true }) : null, h("div", { class: "swiper-container product-suggestions", style: { display: this.loading ? "none" : "block" } }, h("div", { class: "swiper-wrapper" }, this.products.map((product) => h("div", { class: "swiper-slide" }, h("ks-product-card", { "link-only": true, name: product.name, img: product.image, link: product.link, currentPrice: product.currentPrice, previousPrice: product.previousPrice != "0.00" ? product.previousPrice : null }))))), h("div", { class: "fade-left" }), h("div", { class: "fade-right" }))));
  }
  get root() { return getElement(this); }
};
ProductSuggestions.style = productSuggestionsCss;

const productTabCss = "ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none;max-width:100%}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";

const ProductTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.ImageReplacer();
  }
  render() {
    return [
      h("button", { class: "accordion", onClick: () => this.onOpen() }, this.name, h("ks-icon", { name: this.open ? "minus" : "plus" })),
      h("div", { class: "tab-content" }, h("slot", null))
    ];
  }
  onOpen() {
    this.open = !this.open;
    if (this.open) {
      const tabs = Array.from(this.root.parentElement.children);
      const index = tabs.indexOf(this.root);
      tabs.forEach(element => element.removeAttribute("main"));
      this.main = true;
      this.root.closest('ks-product-tabs').active = index;
    }
  }
  ImageReplacer() {
    const images = this.root.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const ksImage = document.createElement("ks-img2");
      ksImage.setAttribute("src", image.getAttribute("data-src"));
      ksImage.setAttribute("alt", image.getAttribute("alt"));
      ksImage.setAttribute("horizontal", "horizontal");
      ksImage.className = image.className;
      let height = image.style.height.replace("px", "");
      let width = image.style.width.replace("px", "");
      ksImage.style.width = width + "px";
      ksImage.style.height = "auto";
      ksImage.style.maxWidth = "100%";
      if (ksImage.style.width)
        ksImage.style.width = image.style.width;
      if (image.style.maxWidth)
        ksImage.style.width = image.style.maxWidth;
      if (height && !height.includes("%"))
        ksImage.setAttribute("height", height);
      if (width && !width.includes("%"))
        ksImage.setAttribute("width", width);
      const margin = image.style.margin;
      if (margin)
        ksImage.style.margin = margin;
      image.parentNode.replaceChild(ksImage, image);
    }
  }
  get root() { return getElement(this); }
};
ProductTab.style = productTabCss;

const productTabsCss = "ks-product-tabs{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tabs nav{background-color:#f6f6f6;border-bottom:1px solid #e8e8e8}@media only screen and (max-width: 960px){ks-product-tabs nav{display:none}}ks-product-tabs button{position:relative;padding:20px 40px;margin:0;font-family:inherit;font-size:18px;color:#252525;background-color:#f6f6f6;-webkit-transition:background-color 0.3s ease, color 0.3s ease;transition:background-color 0.3s ease, color 0.3s ease;border:none;outline:none;border-right:1px solid #e8e8e8}ks-product-tabs button.active{color:#252525 !important;background-color:#FFFFFF}ks-product-tabs button:hover{color:#808080}ks-product-tabs>.content{padding:30px}@media only screen and (max-width: 520px){ks-product-tabs>.content{padding:30px 20px}}";

const ProductTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.names = "";
    this.active = 0;
  }
  render() {
    return [
      h("nav", null, " ", this.names.split(", ").map((value, index) => h("button", { class: index == this.active ? "active" : "", onClick: () => this.click(index) }, value)), " "),
      h("div", { class: "content" }, h("slot", null))
    ];
  }
  click(index) {
    this.active = index;
    Array.from(this.root.querySelector(".content").children).forEach((element, i) => {
      const target = element;
      target.main = i == index;
      target.open = i == index;
    });
  }
  get root() { return getElement(this); }
};
ProductTabs.style = productTabsCss;

const productTitleCss = "ks-product-title{display:block}ks-product-title h1{font-family:var(--product-title-font);font-size:var(--product-title-size);color:var(--product-title-color);font-weight:700;margin-bottom:2px}ks-product-title h1>a{text-decoration:none !important;color:var(--product-title-brand-color) !important;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-title h1>a:hover{opacity:0.7}ks-product-title h1>a:active{opacity:0.5}ks-product-title>.breadcrumbs>a{font-family:var(--product-breadcrumb-font);font-size:14px !important;color:var(--product-breadcrumb-color);text-decoration:none}ks-product-title>.breadcrumbs>a:not(:last-child):after{content:\"/\";color:var(--product-breadcrumb-color);margin:0 15px}ks-product-title>.breadcrumbs>a:focus{color:var(--product-breadcrumb-color)}ks-product-title>.breadcrumbs>a:hover{color:var(--product-breadcrumb-color-hover)}ks-product-title>.breadcrumbs>a:active{color:var(--product-breadcrumb-color-active)}@media only screen and (max-width: 960px){ks-product-title{text-align:center}}@media only screen and (max-width: 1100px){ks-product-title>.breadcrumbs+*{font-size:var(--product-title-size-small)}}@media only screen and (max-width: 460px){ks-product-title>.breadcrumbs{margin-bottom:10px}ks-product-title>.breadcrumbs>a{font-size:14px}ks-product-title>.breadcrumbs>a:not(:last-child):after{margin:0 10px}}";

const ProductTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.brandLink = false;
  }
  render() {
    const name = store.get("name");
    let title = h("h1", null, name);
    if (this.brandLink) {
      const brandLength = store.get("brand").length;
      const brandLink = store.get("brandLink");
      const index = this.brandIndex();
      if (index !== -1) {
        const prefix = name.substr(0, index);
        const brand = name.substr(index, brandLength);
        const suffix = name.substr(index + brandLength);
        title = h("h1", null, prefix, h("a", { href: brandLink }, brand), suffix);
      }
    }
    return [
      h("div", { class: "breadcrumbs" }, store.get("breadcrumbs").map(item => h("a", { href: item.link }, item.name))),
      title
    ];
  }
  brandIndex() {
    return store.get("name").toLowerCase().indexOf(store.get("brand").toLowerCase());
  }
};
ProductTitle.style = productTitleCss;

const productTraitsCss = "ks-product-traits{display:block;font-family:var(--font-regular);font-size:16px;line-height:16px;margin-left:-2px;max-width:300px}ks-product-traits .trait{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;overflow:hidden}ks-product-traits .select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-traits label{padding:5px}ks-product-traits select{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;padding:7px 35px 7px 10px;margin-left:5px;border-radius:20px;outline-style:none;background-color:#f3f3f3;border:solid 1px #cacaca;font-family:var(--font-regular);font-size:16px;line-height:16px;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-traits select::-ms-expand{display:none}ks-product-traits ks-icon{position:absolute;top:5px;right:10px;pointer-events:none}ks-product-traits select option{background-color:white !important}@media only screen and (max-width: 960px){ks-product-traits select{padding:10px 40px 10px 15px}ks-product-traits ks-icon{top:7px}}";

const ProductCount = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.traitChange = createEvent(this, "traitChange", 7);
  }
  traitChangeHandler() {
    const selects = this.root.querySelectorAll(".trait select");
    const data = store.get("traits").map((trait, index) => {
      const select = selects[index];
      return [trait, trait.items[select.selectedIndex]];
    });
    this.traitChange.emit(data);
  }
  componentDidRender() {
    if (store.get("traits").length > 0)
      this.traitChangeHandler();
  }
  render() {
    return store.get("traits").map((trait) => h("div", { class: "trait" }, h("label", null, trait.name, ":"), h("div", { class: "select" }, h("select", { onChange: () => this.traitChangeHandler() }, trait.items.map(item => h("option", { value: item.id }, item.name))), h("ks-icon", { name: "chevron-down" }))));
  }
  get root() { return getElement(this); }
};
ProductCount.style = productTraitsCss;

const productVariantCss = "ks-product-variant{display:block;height:100%}ks-product-variant a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;max-height:100%;height:100%;background-color:white;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:7px}ks-product-variant[active] a{border:2px solid #222}ks-product-variant ks-img2{height:auto;opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-product-variant[unavailable] ks-img2{opacity:0.2}ks-product-variant:not([unavailable]) a:hover ks-img2{opacity:0.8}ks-product-variant[unavailable] a:hover ks-img2{opacity:0.15}";

const ProductVariant = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("a", { href: this.link, "aria-label": this.name }, h("ks-img2", { horizontal: true, src: this.image, width: 90, height: 90, alt: this.name })));
  }
};
ProductVariant.style = productVariantCss;

const productVariantsCss = "ks-product-variants{display:block}ks-product-variants .content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;max-width:calc(100% + 18px);width:200%;margin:-9px}ks-product-variants ks-product-variant{padding:9px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-product-variants .more{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:15px !important}ks-product-variants .more button{display:inline-block;outline:none;border:none;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:white;padding:3px 30px;min-height:46px;min-width:84px;border-radius:50px;-webkit-box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);-webkit-transition:box-shadow 0.2s ease;-webkit-transition:-webkit-box-shadow 0.2s ease;transition:-webkit-box-shadow 0.2s ease;transition:box-shadow 0.2s ease;transition:box-shadow 0.2s ease, -webkit-box-shadow 0.2s ease}ks-product-variants .more button:hover{-webkit-box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18)}";

const ProductVariants = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.more = false;
    this.toggle = true;
    this.variantCount = 0;
  }
  componentDidLoad() {
    this.flex = this.root.querySelector(".content");
    this.variantCount = this.root.querySelectorAll("ks-product-variant").length;
    this.ResizeHandler();
    this.ToggleWatcher(this.toggle);
  }
  ToggleWatcher(toggle) {
    if (toggle)
      this.flex.classList.add("ks-variant-max-flex-height");
    else
      this.flex.classList.remove("ks-variant-max-flex-height");
  }
  ResizeHandler() {
    const fullWidth = (window.innerWidth <= 1218 ? window.innerWidth : 1218) - 15;
    const count = Math.round(fullWidth / 119);
    this.width = 100 / count;
    this.maxHeight = fullWidth * (this.width / 100);
    this.containerHeight = this.maxHeight;
    if (window.innerWidth <= 640) {
      this.containerHeight *= 2;
      this.more = this.variantCount > count * 2 ? true : false;
    }
    else
      this.more = this.variantCount > count ? true : false;
    this.render();
  }
  render() {
    return [
      h("style", { innerHTML: `
				ks-product-variants ks-product-variant {
					width: ${this.width}%;
					height: ${this.maxHeight}px;
				}

				ks-product-variants .ks-variant-max-flex-height{
					max-height: ${this.containerHeight}px;
				}
			` }),
      h("div", { class: "content" }, h("slot", null)),
      this.more ?
        h("div", { class: "more" }, h("button", { onClick: () => this.toggle = !this.toggle }, this.toggle ?
          h("ks-icon", { name: "chevron-down" }) :
          h("ks-icon", { name: "chevron-up" })))
        : null
    ];
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "toggle": ["ToggleWatcher"]
  }; }
};
ProductVariants.style = productVariantsCss;

const productYoutubeCss = "ks-product-youtube{display:block;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:56.25%;background-color:black}ks-product-youtube iframe{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}";

const ProductYoutube = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.videoId = "";
    this.active = false;
  }
  componentDidRender() {
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.active = true;
          if (this.observer)
            this.observer.disconnect();
        }
      }
    }, {
      rootMargin: "500px"
    });
    this.observer.observe(this.root);
  }
  render() {
    return (this.active ?
      h("iframe", { width: "1280", height: "720", src: "https://www.youtube.com/embed/" + this.videoId, frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })
      : null);
  }
  get root() { return getElement(this); }
};
ProductYoutube.style = productYoutubeCss;

export { Comment as ks_comment, ProductAttribute as ks_product_attribute, ProductButton as ks_product_button, ProductCalculatorCA as ks_product_calculator_ca, ProductCalculatorPayU as ks_product_calculator_payu, ProductTab$1 as ks_product_comments, ProductCount$1 as ks_product_count, ProductImages as ks_product_images, ProductInfo as ks_product_info, ProductNegotiate as ks_product_negotiate, ProductPoints as ks_product_points, ProductPrice as ks_product_price, ProductShipping as ks_product_shipping, ProductSuggestions as ks_product_suggestions, ProductTab as ks_product_tab, ProductTabs as ks_product_tabs, ProductTitle as ks_product_title, ProductCount as ks_product_traits, ProductVariant as ks_product_variant, ProductVariants as ks_product_variants, ProductYoutube as ks_product_youtube };
