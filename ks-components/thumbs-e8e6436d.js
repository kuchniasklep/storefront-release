import{b as i,e,i as t,$ as r}from"./core-class-5b6160e1.js";function s(){return(s=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i}).apply(this,arguments)}var a={init:function(){var i=this,r=i.params.thumbs;if(i.thumbs.initialized)return!1;i.thumbs.initialized=!0;var s=i.constructor;return r.swiper instanceof s?(i.thumbs.swiper=r.swiper,e(i.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e(i.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):t(r.swiper)&&(i.thumbs.swiper=new s(e({},r.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),i.thumbs.swiperCreated=!0),i.thumbs.swiper.$el.addClass(i.params.thumbs.thumbsContainerClass),i.thumbs.swiper.on("tap",i.thumbs.onThumbClick),!0},onThumbClick:function(){var i=this,e=i.thumbs.swiper;if(e){var t=e.clickedIndex,s=e.clickedSlide;if(!(s&&r(s).hasClass(i.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"),10):t,i.params.loop){var n=i.activeIndex;i.slides.eq(n).hasClass(i.params.slideDuplicateClass)&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,n=i.activeIndex);var o=i.slides.eq(n).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),d=i.slides.eq(n).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===o?d:void 0===d?o:d-n<n-o?d:o}i.slideTo(a)}}},update:function(i){var e=this,t=e.thumbs.swiper;if(t){var r="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=e.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(e.realIndex!==t.realIndex||a){var n,o,d=t.activeIndex;if(t.params.loop){t.slides.eq(d).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,d=t.activeIndex);var l=t.slides.eq(d).prevAll('[data-swiper-slide-index="'+e.realIndex+'"]').eq(0).index(),u=t.slides.eq(d).nextAll('[data-swiper-slide-index="'+e.realIndex+'"]').eq(0).index();n=void 0===l?u:void 0===u?l:u-d==d-l?t.params.slidesPerGroup>1?u:d:u-d<d-l?u:l,o=e.activeIndex>e.previousIndex?"next":"prev"}else o=(n=e.realIndex)>e.previousIndex?"next":"prev";a&&(n+="next"===o?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(n)<0&&(t.params.centeredSlides&&(n=n>d?n-Math.floor(r/2)+1:n+Math.floor(r/2)-1),t.slideTo(n,i?0:void 0))}var c=1,v=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(c=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(c=1),c=Math.floor(c),t.slides.removeClass(v),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var f=0;f<c;f+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(e.realIndex+f)+'"]').addClass(v);else for(var h=0;h<c;h+=1)t.slides.eq(e.realIndex+h).addClass(v)}}};const n={name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){i(this,{thumbs:s({swiper:null,initialized:!1},a)})},on:{beforeInit:function(i){var e=i.params.thumbs;e&&e.swiper&&(i.thumbs.init(),i.thumbs.update(!0))},slideChange:function(i){i.thumbs.swiper&&i.thumbs.update()},update:function(i){i.thumbs.swiper&&i.thumbs.update()},resize:function(i){i.thumbs.swiper&&i.thumbs.update()},observerUpdate:function(i){i.thumbs.swiper&&i.thumbs.update()},setTransition:function(i,e){var t=i.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(i){var e=i.thumbs.swiper;e&&i.thumbs.swiperCreated&&e&&e.destroy()}}};export{n as T}