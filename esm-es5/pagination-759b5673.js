import{b as bindModuleMethods,$,e as extend}from"./thumbs-00422a82.js";function _extends(){_extends=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var i in l){if(Object.prototype.hasOwnProperty.call(l,i)){a[i]=l[i]}}}return a};return _extends.apply(this,arguments)}var Pagination={update:function a(){var e=this;var l=e.rtl;var i=e.params.pagination;if(!i.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0)return;var t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;var n=e.pagination.$el;var s;var r=e.params.loop?Math.ceil((t-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop){s=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup);if(s>t-1-e.loopedSlides*2){s-=t-e.loopedSlides*2}if(s>r-1)s-=r;if(s<0&&e.params.paginationType!=="bullets")s=r+s}else if(typeof e.snapIndex!=="undefined"){s=e.snapIndex}else{s=e.activeIndex||0}if(i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){var o=e.pagination.bullets;var p;var d;var u;if(i.dynamicBullets){e.pagination.bulletSize=o.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](true);n.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(i.dynamicMainBullets+4)+"px");if(i.dynamicMainBullets>1&&e.previousIndex!==undefined){e.pagination.dynamicBulletIndex+=s-e.previousIndex;if(e.pagination.dynamicBulletIndex>i.dynamicMainBullets-1){e.pagination.dynamicBulletIndex=i.dynamicMainBullets-1}else if(e.pagination.dynamicBulletIndex<0){e.pagination.dynamicBulletIndex=0}}p=s-e.pagination.dynamicBulletIndex;d=p+(Math.min(o.length,i.dynamicMainBullets)-1);u=(d+p)/2}o.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev "+i.bulletActiveClass+"-main");if(n.length>1){o.each((function(a){var e=$(a);var l=e.index();if(l===s){e.addClass(i.bulletActiveClass)}if(i.dynamicBullets){if(l>=p&&l<=d){e.addClass(i.bulletActiveClass+"-main")}if(l===p){e.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev")}if(l===d){e.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")}}}))}else{var c=o.eq(s);var g=c.index();c.addClass(i.bulletActiveClass);if(i.dynamicBullets){var v=o.eq(p);var f=o.eq(d);for(var C=p;C<=d;C+=1){o.eq(C).addClass(i.bulletActiveClass+"-main")}if(e.params.loop){if(g>=o.length-i.dynamicMainBullets){for(var m=i.dynamicMainBullets;m>=0;m-=1){o.eq(o.length-m).addClass(i.bulletActiveClass+"-main")}o.eq(o.length-i.dynamicMainBullets-1).addClass(i.bulletActiveClass+"-prev")}else{v.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev");f.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")}}else{v.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev");f.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")}}}if(i.dynamicBullets){var b=Math.min(o.length,i.dynamicMainBullets+4);var h=(e.pagination.bulletSize*b-e.pagination.bulletSize)/2-u*e.pagination.bulletSize;var y=l?"right":"left";o.css(e.isHorizontal()?y:"top",h+"px")}}if(i.type==="fraction"){n.find("."+i.currentClass).text(i.formatFractionCurrent(s+1));n.find("."+i.totalClass).text(i.formatFractionTotal(r))}if(i.type==="progressbar"){var x;if(i.progressbarOpposite){x=e.isHorizontal()?"vertical":"horizontal"}else{x=e.isHorizontal()?"horizontal":"vertical"}var B=(s+1)/r;var A=1;var M=1;if(x==="horizontal"){A=B}else{M=B}n.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+A+") scaleY("+M+")").transition(e.params.speed)}if(i.type==="custom"&&i.renderCustom){n.html(i.renderCustom(e,s+1,r));e.emit("paginationRender",n[0])}else{e.emit("paginationUpdate",n[0])}n[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](i.lockClass)},render:function a(){var e=this;var l=e.params.pagination;if(!l.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0)return;var i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;var t=e.pagination.$el;var n="";if(l.type==="bullets"){var s=e.params.loop?Math.ceil((i-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;for(var r=0;r<s;r+=1){if(l.renderBullet){n+=l.renderBullet.call(e,r,l.bulletClass)}else{n+="<"+l.bulletElement+' class="'+l.bulletClass+'"></'+l.bulletElement+">"}}t.html(n);e.pagination.bullets=t.find("."+l.bulletClass.replace(/ /g,"."))}if(l.type==="fraction"){if(l.renderFraction){n=l.renderFraction.call(e,l.currentClass,l.totalClass)}else{n='<span class="'+l.currentClass+'"></span>'+" / "+('<span class="'+l.totalClass+'"></span>')}t.html(n)}if(l.type==="progressbar"){if(l.renderProgressbar){n=l.renderProgressbar.call(e,l.progressbarFillClass)}else{n='<span class="'+l.progressbarFillClass+'"></span>'}t.html(n)}if(l.type!=="custom"){e.emit("paginationRender",e.pagination.$el[0])}},init:function a(){var e=this;var l=e.params.pagination;if(!l.el)return;var i=$(l.el);if(i.length===0)return;if(e.params.uniqueNavElements&&typeof l.el==="string"&&i.length>1){i=e.$el.find(l.el)}if(l.type==="bullets"&&l.clickable){i.addClass(l.clickableClass)}i.addClass(l.modifierClass+l.type);if(l.type==="bullets"&&l.dynamicBullets){i.addClass(""+l.modifierClass+l.type+"-dynamic");e.pagination.dynamicBulletIndex=0;if(l.dynamicMainBullets<1){l.dynamicMainBullets=1}}if(l.type==="progressbar"&&l.progressbarOpposite){i.addClass(l.progressbarOppositeClass)}if(l.clickable){i.on("click","."+l.bulletClass.replace(/ /g,"."),(function a(l){l.preventDefault();var i=$(this).index()*e.params.slidesPerGroup;if(e.params.loop)i+=e.loopedSlides;e.slideTo(i)}))}extend(e.pagination,{$el:i,el:i[0]})},destroy:function a(){var e=this;var l=e.params.pagination;if(!l.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0)return;var i=e.pagination.$el;i.removeClass(l.hiddenClass);i.removeClass(l.modifierClass+l.type);if(e.pagination.bullets)e.pagination.bullets.removeClass(l.bulletActiveClass);if(l.clickable){i.off("click","."+l.bulletClass.replace(/ /g,"."))}}};var Pagination$1={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:false,hideOnClick:false,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:false,type:"bullets",dynamicBullets:false,dynamicMainBullets:1,formatFractionCurrent:function a(e){return e},formatFractionTotal:function a(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function a(){var e=this;bindModuleMethods(e,{pagination:_extends({dynamicBulletIndex:0},Pagination)})},on:{init:function a(e){e.pagination.init();e.pagination.render();e.pagination.update()},activeIndexChange:function a(e){if(e.params.loop){e.pagination.update()}else if(typeof e.snapIndex==="undefined"){e.pagination.update()}},snapIndexChange:function a(e){if(!e.params.loop){e.pagination.update()}},slidesLengthChange:function a(e){if(e.params.loop){e.pagination.render();e.pagination.update()}},snapGridLengthChange:function a(e){if(!e.params.loop){e.pagination.render();e.pagination.update()}},destroy:function a(e){e.pagination.destroy()},click:function a(e,l){if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!$(l.target).hasClass(e.params.pagination.bulletClass)){var i=e.pagination.$el.hasClass(e.params.pagination.hiddenClass);if(i===true){e.emit("paginationShow")}else{e.emit("paginationHide")}e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}};export{Pagination$1 as P};