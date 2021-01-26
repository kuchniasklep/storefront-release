import{b as bindModuleMethods,e as extend,i as isObject,$}from"./core-class-8ec5acbb.js";function _extends(){_extends=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var r in i){if(Object.prototype.hasOwnProperty.call(i,r)){e[r]=i[r]}}}return e};return _extends.apply(this,arguments)}var Thumbs={init:function e(){var s=this;var i=s.params.thumbs;if(s.thumbs.initialized)return false;s.thumbs.initialized=true;var r=s.constructor;if(i.swiper instanceof r){s.thumbs.swiper=i.swiper;extend(s.thumbs.swiper.originalParams,{watchSlidesProgress:true,slideToClickedSlide:false});extend(s.thumbs.swiper.params,{watchSlidesProgress:true,slideToClickedSlide:false})}else if(isObject(i.swiper)){s.thumbs.swiper=new r(extend({},i.swiper,{watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:false}));s.thumbs.swiperCreated=true}s.thumbs.swiper.$el.addClass(s.params.thumbs.thumbsContainerClass);s.thumbs.swiper.on("tap",s.thumbs.onThumbClick);return true},onThumbClick:function e(){var s=this;var i=s.thumbs.swiper;if(!i)return;var r=i.clickedIndex;var t=i.clickedSlide;if(t&&$(t).hasClass(s.params.thumbs.slideThumbActiveClass))return;if(typeof r==="undefined"||r===null)return;var a;if(i.params.loop){a=parseInt($(i.clickedSlide).attr("data-swiper-slide-index"),10)}else{a=r}if(s.params.loop){var l=s.activeIndex;if(s.slides.eq(l).hasClass(s.params.slideDuplicateClass)){s.loopFix();s._clientLeft=s.$wrapperEl[0].clientLeft;l=s.activeIndex}var n=s.slides.eq(l).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();var d=s.slides.eq(l).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();if(typeof n==="undefined")a=d;else if(typeof d==="undefined")a=n;else if(d-l<l-n)a=d;else a=n}s.slideTo(a)},update:function e(s){var i=this;var r=i.thumbs.swiper;if(!r)return;var t=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():r.params.slidesPerView;var a=i.params.thumbs.autoScrollOffset;var l=a&&!r.params.loop;if(i.realIndex!==r.realIndex||l){var n=r.activeIndex;var d;var u;if(r.params.loop){if(r.slides.eq(n).hasClass(r.params.slideDuplicateClass)){r.loopFix();r._clientLeft=r.$wrapperEl[0].clientLeft;n=r.activeIndex}var p=r.slides.eq(n).prevAll('[data-swiper-slide-index="'+i.realIndex+'"]').eq(0).index();var o=r.slides.eq(n).nextAll('[data-swiper-slide-index="'+i.realIndex+'"]').eq(0).index();if(typeof p==="undefined")d=o;else if(typeof o==="undefined")d=p;else if(o-n===n-p)d=n;else if(o-n<n-p)d=o;else d=p;u=i.activeIndex>i.previousIndex?"next":"prev"}else{d=i.realIndex;u=d>i.previousIndex?"next":"prev"}if(l){d+=u==="next"?a:-1*a}if(r.visibleSlidesIndexes&&r.visibleSlidesIndexes.indexOf(d)<0){if(r.params.centeredSlides){if(d>n){d=d-Math.floor(t/2)+1}else{d=d+Math.floor(t/2)-1}}else if(d>n){d=d-t+1}r.slideTo(d,s?0:undefined)}}var f=1;var m=i.params.thumbs.slideThumbActiveClass;if(i.params.slidesPerView>1&&!i.params.centeredSlides){f=i.params.slidesPerView}if(!i.params.thumbs.multipleActiveThumbs){f=1}f=Math.floor(f);r.slides.removeClass(m);if(r.params.loop||r.params.virtual&&r.params.virtual.enabled){for(var h=0;h<f;h+=1){r.$wrapperEl.children('[data-swiper-slide-index="'+(i.realIndex+h)+'"]').addClass(m)}}else{for(var b=0;b<f;b+=1){r.slides.eq(i.realIndex+b).addClass(m)}}}};var Thumbs$1={name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:true,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function e(){var s=this;bindModuleMethods(s,{thumbs:_extends({swiper:null,initialized:false},Thumbs)})},on:{beforeInit:function e(s){var i=s.params.thumbs;if(!i||!i.swiper)return;s.thumbs.init();s.thumbs.update(true)},slideChange:function e(s){if(!s.thumbs.swiper)return;s.thumbs.update()},update:function e(s){if(!s.thumbs.swiper)return;s.thumbs.update()},resize:function e(s){if(!s.thumbs.swiper)return;s.thumbs.update()},observerUpdate:function e(s){if(!s.thumbs.swiper)return;s.thumbs.update()},setTransition:function e(s,i){var r=s.thumbs.swiper;if(!r)return;r.setTransition(i)},beforeDestroy:function e(s){var i=s.thumbs.swiper;if(!i)return;if(s.thumbs.swiperCreated&&i){i.destroy()}}}};export{Thumbs$1 as T};