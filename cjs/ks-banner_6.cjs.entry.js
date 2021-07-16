'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');
const deferredpromise = require('./deferredpromise-4a0fd44b.js');
const coreClass = require('./core-class-37c25aa3.js');
const pagination = require('./pagination-82b886b5.js');

const bannerCss = "ks-banner{display:block;width:100%;max-height:550px;height:100%}ks-banner.swiper-slide{height:auto}ks-banner>a{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:550px}ks-product-images a{position:relative}ks-product-images a canvas{max-width:100%;max-height:550px}ks-banner a ks-img{position:absolute;top:0;left:0;width:100%;max-height:550px;margin:auto}";

const Banner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.navbarTheme)
      this.theme = JSON.parse(this.navbarTheme);
  }
  render() {
    const theme = (this.active && this.theme) ? `:root {
			--navbar-color: ${this.theme.navbarColor} !important;
			--navbar-color-hover: ${this.theme.navbarColorHover} !important;
			--navbar-color-active: ${this.theme.navbarColorActive} !important;
			--navbar-category-color: ${this.theme.categoryColor} !important;
			--navbar-category-hover: ${this.theme.categoryColorHover} !important;
			--navbar-category-active: ${this.theme.categoryColorActive} !important;
			--navbar-category-backdrop: ${this.theme.categoryColorBackdrop} !important;
		}` : null;
    return index.h(index.Host, { class: "swiper-slide", style: { backgroundColor: this.color } }, index.h("a", { href: this.link }, index.h("canvas", { width: this.width, height: this.height }), index.h("ks-img", { vertical: true, sync: this.sync, src: this.image, alt: this.name, width: this.width, height: this.height })), theme ? index.h("style", { innerHTML: theme }) : null);
  }
};
Banner.style = bannerCss;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = coreClass.nextTick(function () {
      var autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = coreClass.getDocument();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  }
};
const Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    coreClass.bindModuleMethods(swiper, {
      autoplay: _extends({}, Autoplay, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = coreClass.getDocument();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }

      var document = coreClass.getDocument();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
};

const bannerContainerCss = "ks-banner-container{display:block;position:relative}ks-banner-container .swiper-wrapper{max-height:550px;height:100%}ks-banner-container a{position:relative}ks-banner-container .pagination{position:absolute;left:0;right:0;bottom:-35px;height:35px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-banner-container[loaded] .pagination{opacity:1}ks-banner-container .swiper-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:10px;background-color:#dcdcdc}ks-banner-container .swiper-pagination-bullet{background-color:rgba(29, 29, 29, 0);border:rgb(133, 133, 133) 1px solid;height:10px;width:10px;margin:0 5px;opacity:1;-webkit-transition:background-color 0.3s ease,\n                border 0.3s ease;transition:background-color 0.3s ease,\n                border 0.3s ease}ks-banner-container .swiper-pagination-bullet:hover{background-color:rgba(29, 29, 29, 0.192)}ks-banner-container .swiper-pagination-bullet-active{background-color:rgb(29, 29, 29) !important;border:rgba(133, 133, 133, 0) 1px solid;opacity:1}ks-banner-container .pagination svg{fill:#dcdcdc}@media (max-width: 638px){ks-banner-container .pagination{display:none}}";

coreClass.Swiper.use([pagination.Pagination, Autoplay$1]);
const BannerContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.delay = 0;
    this.autoplay = 5000;
    this.window = false;
    this.rendered = false;
    this.loaded = false;
  }
  componentDidLoad() {
    deferredpromise.window_load.promise.then(() => this.initialize());
  }
  initialize() {
    setTimeout(() => {
      this.carousel = new coreClass.Swiper('ks-banner-container .swiper-container', {
        observer: true,
        observeParents: true,
        centeredSlides: true,
        slidesPerView: "auto",
        preventInteractionOnTransition: true,
        grabCursor: true,
        autoplay: {
          delay: this.autoplay,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      });
      this.carousel.on('slideChange', () => {
        this.root.querySelectorAll('ks-banner').forEach((element, index) => {
          if (index == this.carousel.activeIndex)
            element.setAttribute('active', 'active');
          else
            element.removeAttribute('active');
        });
      });
      this.loaded = true;
    }, this.delay);
  }
  render() {
    return index.h(index.Host, null, index.h("div", { class: "swiper-container" }, index.h("div", { class: "swiper-wrapper" }, index.h("slot", null))), index.h("div", { class: "pagination" }, index.h("svg", { height: "36", width: "36" }, index.h("polygon", { points: "0,0 36,0 36,36" })), index.h("div", { class: "swiper-pagination" }), index.h("svg", { height: "36", width: "36" }, index.h("polygon", { points: "0,0 36,0 0,36" }))));
  }
  get root() { return index.getElement(this); }
};
BannerContainer.style = bannerContainerCss;

const featuredCss = "ks-featured{display:block;position:relative}ks-featured a{display:block;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-featured a:hover{display:block;opacity:0.97}ks-featured a:active{display:block;opacity:0.92}";

const Featured = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.color = "#0f0f0f";
  }
  render() {
    return (index.h("a", { href: this.link, style: { backgroundColor: this.color } }, index.h("ks-img", { src: this.image, alt: this.alt, width: this.width, height: this.height, target: "ks-featured" })));
  }
};
Featured.style = featuredCss;

const featuredContainerCss = "ks-featured-container{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:1200px;width:100%;margin:auto;min-height:10px}ks-featured-container>.left{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:5px}ks-featured-container>.right{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:5px}ks-featured-container>div>*:not(:last-child){margin-bottom:10px}@media (max-width: 840px){ks-featured-container{display:block}ks-featured-container>div:first-child>*{margin-bottom:10px}}";

const FeaturedContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", { class: "left" }, " ", index.h("slot", { name: "left" }), " "),
      index.h("div", { class: "right" }, " ", index.h("slot", { name: "right" }), " ")
    ];
  }
};
FeaturedContainer.style = featuredContainerCss;

const homepageInfoCss = "ks-homepage-info{display:block;padding:60px 20px 30px 20px;background-image:linear-gradient(19deg, \n        rgb(226, 226, 226) 0%, \n        rgb(245, 245, 245) 100%\n    )}ks-homepage-info .main{max-width:800px;margin:0px auto 30px auto;text-align:center}ks-homepage-info .more{max-width:1200px;margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:justify}ks-homepage-info .more>div{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;margin:0px 20px}ks-homepage-info h1,h2{font-family:Lato, sans-serif !important;font-weight:700 !important;text-align:center}ks-homepage-info h1{text-transform:uppercase}ks-homepage-info h2{font-size:1.2rem;line-height:1.4}ks-homepage-info p{font-size:0.875rem;line-height:1.5}ks-homepage-info ks-button{display:none;margin:10px auto;max-width:400px}@media (max-width: 1000px){ks-homepage-info .more{display:block;max-width:600px;text-align:center}}@media (max-width: 800px){ks-homepage-info ks-button{display:block}ks-homepage-info .more{display:none}ks-homepage-info[expanded] .more{display:block}}@media (max-width: 639px){ks-homepage-info{padding:50px 20px 40px 20px}}@media (max-width: 400px){ks-homepage-info{padding:40px 20px 40px 20px}}";

const HomepageInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.expanded = false;
  }
  render() {
    return [
      index.h("div", { class: "main" }, index.h("slot", { name: "mainHeading" }), index.h("slot", { name: "mainContent" })),
      index.h("div", { class: "more" }, index.h("div", null, index.h("slot", { name: "firstHeading" }), index.h("slot", { name: "firstContent" })), index.h("div", null, index.h("slot", { name: "secondHeading" }), index.h("slot", { name: "secondContent" })), index.h("div", null, index.h("slot", { name: "thirdHeading" }), index.h("slot", { name: "thirdContent" }))),
      index.h("ks-button", { border: true, round: true, name: this.expanded ? "Zwiń" : "Rozwiń", onClick: () => this.expanded = !this.expanded })
    ];
  }
};
HomepageInfo.style = homepageInfoCss;

const homepageProductsCss = "ks-homepage-products{display:block;margin-top:20px}ks-homepage-products .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px}ks-homepage-products .buttons>*{max-width:200px;margin:0px 2px}ks-homepage-products .buttons>*>*{border:none !important}ks-homepage-products .content{position:relative;margin:20px auto 30px auto}ks-homepage-products .content>*{position:relative;top:0px;left:0px;right:0px;-webkit-animation:homepage-products-swipe-in 0.6s;animation:homepage-products-swipe-in 0.6s;z-index:2;opacity:1}ks-homepage-products:not([active='0']) .content>*:nth-child(1),ks-homepage-products:not([active='1']) .content>*:nth-child(2),ks-homepage-products:not([active='2']) .content>*:nth-child(3){-webkit-animation:fade-out 0.3s;animation:fade-out 0.3s;opacity:0;top:15px;z-index:1;position:absolute}@media (max-width: 640px){ks-homepage-products .buttons>*{max-width:150px}ks-homepage-products .buttons>*>*{font-size:14px;padding:10px 15px}}@-webkit-keyframes homepage-products-swipe-in{0%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}100%{-webkit-transform:translateY(0px);transform:translateY(0px);opacity:1}}@keyframes homepage-products-swipe-in{0%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}100%{-webkit-transform:translateY(0px);transform:translateY(0px);opacity:1}}";

const ProductContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = 0;
    this.Button = ({ index: index$1, name }) => index.h("ks-button", { round: true, name: name, border: this.active != index$1, transitionless: this.active == index$1, onClick: () => this.active = index$1 });
  }
  render() {
    return [
      index.h("div", { class: "buttons" }, index.h(this.Button, { index: 0, name: "Promocje" }), index.h(this.Button, { index: 1, name: "Popularne" }), index.h(this.Button, { index: 2, name: "Nowo\u015Bci" })),
      index.h("div", { class: "content" }, index.h("slot", null))
    ];
  }
};
ProductContainer.style = homepageProductsCss;

exports.ks_banner = Banner;
exports.ks_banner_container = BannerContainer;
exports.ks_featured = Featured;
exports.ks_featured_container = FeaturedContainer;
exports.ks_homepage_info = HomepageInfo;
exports.ks_homepage_products = ProductContainer;
