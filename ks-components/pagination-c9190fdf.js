import{b as n,$ as a,c as i,a as e,e as r}from"./core-class-5b6160e1.js";function t(){return(t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(n[e]=i[e])}return n}).apply(this,arguments)}var s={update:function(){var n=this,e=n.rtl,r=n.params.pagination;if(r.el&&n.pagination.el&&n.pagination.$el&&0!==n.pagination.$el.length){var t,s=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,l=n.pagination.$el,o=n.params.loop?Math.ceil((s-2*n.loopedSlides)/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?((t=Math.ceil((n.activeIndex-n.loopedSlides)/n.params.slidesPerGroup))>s-1-2*n.loopedSlides&&(t-=s-2*n.loopedSlides),t>o-1&&(t-=o),t<0&&"bullets"!==n.params.paginationType&&(t=o+t)):t=void 0!==n.snapIndex?n.snapIndex:n.activeIndex||0,"bullets"===r.type&&n.pagination.bullets&&n.pagination.bullets.length>0){var p,c,u,v=n.pagination.bullets;if(r.dynamicBullets&&(n.pagination.bulletSize=v.eq(0)[n.isHorizontal()?"outerWidth":"outerHeight"](!0),l.css(n.isHorizontal()?"width":"height",n.pagination.bulletSize*(r.dynamicMainBullets+4)+"px"),r.dynamicMainBullets>1&&void 0!==n.previousIndex&&(n.pagination.dynamicBulletIndex+=t-n.previousIndex,n.pagination.dynamicBulletIndex>r.dynamicMainBullets-1?n.pagination.dynamicBulletIndex=r.dynamicMainBullets-1:n.pagination.dynamicBulletIndex<0&&(n.pagination.dynamicBulletIndex=0)),u=((c=(p=t-n.pagination.dynamicBulletIndex)+(Math.min(v.length,r.dynamicMainBullets)-1))+p)/2),v.removeClass(r.bulletActiveClass+" "+r.bulletActiveClass+"-next "+r.bulletActiveClass+"-next-next "+r.bulletActiveClass+"-prev "+r.bulletActiveClass+"-prev-prev "+r.bulletActiveClass+"-main"),l.length>1)v.each((function(n){var i=a(n),e=i.index();e===t&&i.addClass(r.bulletActiveClass),r.dynamicBullets&&(e>=p&&e<=c&&i.addClass(r.bulletActiveClass+"-main"),e===p&&i.prev().addClass(r.bulletActiveClass+"-prev").prev().addClass(r.bulletActiveClass+"-prev-prev"),e===c&&i.next().addClass(r.bulletActiveClass+"-next").next().addClass(r.bulletActiveClass+"-next-next"))}));else{var f=v.eq(t),g=f.index();if(f.addClass(r.bulletActiveClass),r.dynamicBullets){for(var d=v.eq(p),b=v.eq(c),h=p;h<=c;h+=1)v.eq(h).addClass(r.bulletActiveClass+"-main");if(n.params.loop)if(g>=v.length-r.dynamicMainBullets){for(var m=r.dynamicMainBullets;m>=0;m-=1)v.eq(v.length-m).addClass(r.bulletActiveClass+"-main");v.eq(v.length-r.dynamicMainBullets-1).addClass(r.bulletActiveClass+"-prev")}else d.prev().addClass(r.bulletActiveClass+"-prev").prev().addClass(r.bulletActiveClass+"-prev-prev"),b.next().addClass(r.bulletActiveClass+"-next").next().addClass(r.bulletActiveClass+"-next-next");else d.prev().addClass(r.bulletActiveClass+"-prev").prev().addClass(r.bulletActiveClass+"-prev-prev"),b.next().addClass(r.bulletActiveClass+"-next").next().addClass(r.bulletActiveClass+"-next-next")}}if(r.dynamicBullets){var x=Math.min(v.length,r.dynamicMainBullets+4),C=(n.pagination.bulletSize*x-n.pagination.bulletSize)/2-u*n.pagination.bulletSize,w=e?"right":"left";v.css(n.isHorizontal()?w:"top",C+"px")}}if("fraction"===r.type&&(l.find(i(r.currentClass)).text(r.formatFractionCurrent(t+1)),l.find(i(r.totalClass)).text(r.formatFractionTotal(o))),"progressbar"===r.type){var k;k=r.progressbarOpposite?n.isHorizontal()?"vertical":"horizontal":n.isHorizontal()?"horizontal":"vertical";var y=(t+1)/o,M=1,O=1;"horizontal"===k?M=y:O=y,l.find(i(r.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+M+") scaleY("+O+")").transition(n.params.speed)}"custom"===r.type&&r.renderCustom?(l.html(r.renderCustom(n,t+1,o)),n.emit("paginationRender",l[0])):n.emit("paginationUpdate",l[0]),n.params.watchOverflow&&n.enabled&&l[n.isLocked?"addClass":"removeClass"](r.lockClass)}},render:function(){var n=this,a=n.params.pagination;if(a.el&&n.pagination.el&&n.pagination.$el&&0!==n.pagination.$el.length){var e=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,r=n.pagination.$el,t="";if("bullets"===a.type){var s=n.params.loop?Math.ceil((e-2*n.loopedSlides)/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&!n.params.loop&&s>e&&(s=e);for(var l=0;l<s;l+=1)t+=a.renderBullet?a.renderBullet.call(n,l,a.bulletClass):"<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">";r.html(t),n.pagination.bullets=r.find(i(a.bulletClass))}"fraction"===a.type&&(t=a.renderFraction?a.renderFraction.call(n,a.currentClass,a.totalClass):'<span class="'+a.currentClass+'"></span> / <span class="'+a.totalClass+'"></span>',r.html(t)),"progressbar"===a.type&&(t=a.renderProgressbar?a.renderProgressbar.call(n,a.progressbarFillClass):'<span class="'+a.progressbarFillClass+'"></span>',r.html(t)),"custom"!==a.type&&n.emit("paginationRender",n.pagination.$el[0])}},init:function(){var n=this;n.params.pagination=e(n.$el,n.params.pagination,n.params.createElements,{el:"swiper-pagination"});var t=n.params.pagination;if(t.el){var s=a(t.el);0!==s.length&&(n.params.uniqueNavElements&&"string"==typeof t.el&&s.length>1&&(s=n.$el.find(t.el)),"bullets"===t.type&&t.clickable&&s.addClass(t.clickableClass),s.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(s.addClass(""+t.modifierClass+t.type+"-dynamic"),n.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&s.addClass(t.progressbarOppositeClass),t.clickable&&s.on("click",i(t.bulletClass),(function(i){i.preventDefault();var e=a(this).index()*n.params.slidesPerGroup;n.params.loop&&(e+=n.loopedSlides),n.slideTo(e)})),r(n.pagination,{$el:s,el:s[0]}),n.enabled||s.addClass(t.lockClass))}},destroy:function(){var n=this,a=n.params.pagination;if(a.el&&n.pagination.el&&n.pagination.$el&&0!==n.pagination.$el.length){var e=n.pagination.$el;e.removeClass(a.hiddenClass),e.removeClass(a.modifierClass+a.type),n.pagination.bullets&&n.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&e.off("click",i(a.bulletClass))}}};const l={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(n){return n},formatFractionTotal:function(n){return n},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n(this,{pagination:t({dynamicBulletIndex:0},s)})},on:{init:function(n){n.pagination.init(),n.pagination.render(),n.pagination.update()},activeIndexChange:function(n){(n.params.loop||void 0===n.snapIndex)&&n.pagination.update()},snapIndexChange:function(n){n.params.loop||n.pagination.update()},slidesLengthChange:function(n){n.params.loop&&(n.pagination.render(),n.pagination.update())},snapGridLengthChange:function(n){n.params.loop||(n.pagination.render(),n.pagination.update())},destroy:function(n){n.pagination.destroy()},"enable disable":function(n){var a=n.pagination.$el;a&&a[n.enabled?"removeClass":"addClass"](n.params.pagination.lockClass)},click:function(n,i){var e=i.target;if(n.params.pagination.el&&n.params.pagination.hideOnClick&&n.pagination.$el.length>0&&!a(e).hasClass(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&e===n.navigation.nextEl||n.navigation.prevEl&&e===n.navigation.prevEl))return;var r=n.pagination.$el.hasClass(n.params.pagination.hiddenClass);n.emit(!0===r?"paginationShow":"paginationHide"),n.pagination.$el.toggleClass(n.params.pagination.hiddenClass)}}}};export{l as P}