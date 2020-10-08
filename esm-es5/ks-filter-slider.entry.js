import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";import{c as createCommonjsModule}from"./_commonjsHelpers-84ca41fa.js";var nouislider=createCommonjsModule((function(t,e){
/*! nouislider - 12.1.0 - 10/25/2018 */
(function(e){{t.exports=e()}})((function(){var t="12.1.0";function e(t){return typeof t==="object"&&typeof t.to==="function"&&typeof t.from==="function"}function r(t){t.parentElement.removeChild(t)}function n(t){return t!==null&&t!==undefined}function i(t){t.preventDefault()}function a(t){return t.filter((function(t){return!this[t]?this[t]=true:false}),{})}function o(t,e){return Math.round(t/e)*e}function s(t,e){var r=t.getBoundingClientRect();var n=t.ownerDocument;var i=n.documentElement;var a=v(n);if(/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)){a.x=0}return e?r.top+a.y-i.clientTop:r.left+a.x-i.clientLeft}function l(t){return typeof t==="number"&&!isNaN(t)&&isFinite(t)}function u(t,e,r){if(r>0){d(t,e);setTimeout((function(){h(t,e)}),r)}}function f(t){return Math.max(Math.min(t,100),0)}function p(t){return Array.isArray(t)?t:[t]}function c(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function d(t,e){if(t.classList){t.classList.add(e)}else{t.className+=" "+e}}function h(t,e){if(t.classList){t.classList.remove(e)}else{t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}}function m(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function v(t){var e=window.pageXOffset!==undefined;var r=(t.compatMode||"")==="CSS1Compat";var n=e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft;var i=e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop;return{x:n,y:i}}function g(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function b(){var t=false;try{var e=Object.defineProperty({},"passive",{get:function(){t=true}});window.addEventListener("test",null,e)}catch(r){}return t}function x(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function w(t,e){return 100/(e-t)}function S(t,e){return e*100/(t[1]-t[0])}function U(t,e){return S(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}function y(t,e){return e*(t[1]-t[0])/100+t[0]}function E(t,e){var r=1;while(t>=e[r]){r+=1}return r}function k(t,e,r){if(r>=t.slice(-1)[0]){return 100}var n=E(r,t);var i=t[n-1];var a=t[n];var o=e[n-1];var s=e[n];return o+U([i,a],r)/w(o,s)}function C(t,e,r){if(r>=100){return t.slice(-1)[0]}var n=E(r,e);var i=t[n-1];var a=t[n];var o=e[n-1];var s=e[n];return y([i,a],(r-o)*w(o,s))}function A(t,e,r,n){if(n===100){return n}var i=E(n,t);var a=t[i-1];var s=t[i];if(r){if(n-a>(s-a)/2){return s}return a}if(!e[i-1]){return n}return t[i-1]+o(n-t[i-1],e[i-1])}function N(e,r,n){var i;if(typeof r==="number"){r=[r]}if(!Array.isArray(r)){throw new Error("noUiSlider ("+t+"): 'range' contains invalid value.")}if(e==="min"){i=0}else if(e==="max"){i=100}else{i=parseFloat(e)}if(!l(i)||!l(r[0])){throw new Error("noUiSlider ("+t+"): 'range' value isn't numeric.")}n.xPct.push(i);n.xVal.push(r[0]);if(!i){if(!isNaN(r[1])){n.xSteps[0]=r[1]}}else{n.xSteps.push(isNaN(r[1])?false:r[1])}n.xHighestCompleteStep.push(0)}function F(t,e,r){if(!e){return true}r.xSteps[t]=S([r.xVal[t],r.xVal[t+1]],e)/w(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t];var i=Math.ceil(Number(n.toFixed(3))-1);var a=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=a}function z(t,e,r){this.xPct=[];this.xVal=[];this.xSteps=[r||false];this.xNumSteps=[false];this.xHighestCompleteStep=[];this.snap=e;var n;var i=[];for(n in t){if(t.hasOwnProperty(n)){i.push([t[n],n])}}if(i.length&&typeof i[0][0]==="object"){i.sort((function(t,e){return t[0][0]-e[0][0]}))}else{i.sort((function(t,e){return t[0]-e[0]}))}for(n=0;n<i.length;n++){N(i[n][1],i[n][0],this)}this.xNumSteps=this.xSteps.slice(0);for(n=0;n<this.xNumSteps.length;n++){F(n,this.xNumSteps[n],this)}}z.prototype.getMargin=function(e){var r=this.xNumSteps[0];if(r&&e/r%1!==0){throw new Error("noUiSlider ("+t+"): 'limit', 'margin' and 'padding' must be divisible by step.")}return this.xPct.length===2?S(this.xVal,e):false};z.prototype.toStepping=function(t){t=k(this.xVal,this.xPct,t);return t};z.prototype.fromStepping=function(t){return C(this.xVal,this.xPct,t)};z.prototype.getStep=function(t){t=A(this.xPct,this.xSteps,this.snap,t);return t};z.prototype.getNearbySteps=function(t){var e=E(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}};z.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(c);return Math.max.apply(null,t)};z.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var P={to:function(t){return t!==undefined&&t.toFixed(2)},from:Number};function M(r){if(e(r)){return true}throw new Error("noUiSlider ("+t+"): 'format' requires 'to' and 'from' methods.")}function B(e,r){if(!l(r)){throw new Error("noUiSlider ("+t+"): 'step' is not numeric.")}e.singleStep=r}function V(e,r){if(typeof r!=="object"||Array.isArray(r)){throw new Error("noUiSlider ("+t+"): 'range' is not an object.")}if(r.min===undefined||r.max===undefined){throw new Error("noUiSlider ("+t+"): Missing 'min' or 'max' in 'range'.")}if(r.min===r.max){throw new Error("noUiSlider ("+t+"): 'range' 'min' and 'max' cannot be equal.")}e.spectrum=new z(r,e.snap,e.singleStep)}function O(e,r){r=p(r);if(!Array.isArray(r)||!r.length){throw new Error("noUiSlider ("+t+"): 'start' option is incorrect.")}e.handles=r.length;e.start=r}function D(e,r){e.snap=r;if(typeof r!=="boolean"){throw new Error("noUiSlider ("+t+"): 'snap' option must be a boolean.")}}function L(e,r){e.animate=r;if(typeof r!=="boolean"){throw new Error("noUiSlider ("+t+"): 'animate' option must be a boolean.")}}function j(e,r){e.animationDuration=r;if(typeof r!=="number"){throw new Error("noUiSlider ("+t+"): 'animationDuration' option must be a number.")}}function H(e,r){var n=[false];var i;if(r==="lower"){r=[true,false]}else if(r==="upper"){r=[false,true]}if(r===true||r===false){for(i=1;i<e.handles;i++){n.push(r)}n.push(false)}else if(!Array.isArray(r)||!r.length||r.length!==e.handles+1){throw new Error("noUiSlider ("+t+"): 'connect' option doesn't match handle count.")}else{n=r}e.connect=n}function I(e,r){switch(r){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+t+"): 'orientation' option is invalid.")}}function T(e,r){if(!l(r)){throw new Error("noUiSlider ("+t+"): 'margin' option must be numeric.")}if(r===0){return}e.margin=e.spectrum.getMargin(r);if(!e.margin){throw new Error("noUiSlider ("+t+"): 'margin' option is only supported on linear sliders.")}}function R(e,r){if(!l(r)){throw new Error("noUiSlider ("+t+"): 'limit' option must be numeric.")}e.limit=e.spectrum.getMargin(r);if(!e.limit||e.handles<2){throw new Error("noUiSlider ("+t+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}}function _(e,r){if(!l(r)&&!Array.isArray(r)){throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.")}if(Array.isArray(r)&&!(r.length===2||l(r[0])||l(r[1]))){throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.")}if(r===0){return}if(!Array.isArray(r)){r=[r,r]}e.padding=[e.spectrum.getMargin(r[0]),e.spectrum.getMargin(r[1])];if(e.padding[0]===false||e.padding[1]===false){throw new Error("noUiSlider ("+t+"): 'padding' option is only supported on linear sliders.")}if(e.padding[0]<0||e.padding[1]<0){throw new Error("noUiSlider ("+t+"): 'padding' option must be a positive number(s).")}if(e.padding[0]+e.padding[1]>=100){throw new Error("noUiSlider ("+t+"): 'padding' option must not exceed 100% of the range.")}}function q(e,r){switch(r){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+t+"): 'direction' option was not recognized.")}}function X(e,r){if(typeof r!=="string"){throw new Error("noUiSlider ("+t+"): 'behaviour' must be a string containing options.")}var n=r.indexOf("tap")>=0;var i=r.indexOf("drag")>=0;var a=r.indexOf("fixed")>=0;var o=r.indexOf("snap")>=0;var s=r.indexOf("hover")>=0;var l=r.indexOf("unconstrained")>=0;if(a){if(e.handles!==2){throw new Error("noUiSlider ("+t+"): 'fixed' behaviour must be used with 2 handles")}T(e,e.start[1]-e.start[0])}if(l&&(e.margin||e.limit)){throw new Error("noUiSlider ("+t+"): 'unconstrained' behaviour cannot be used with margin or limit")}e.events={tap:n||o,drag:i,fixed:a,snap:o,hover:s,unconstrained:l}}function Y(e,r){if(r===false){return}if(r===true){e.tooltips=[];for(var n=0;n<e.handles;n++){e.tooltips.push(true)}}else{e.tooltips=p(r);if(e.tooltips.length!==e.handles){throw new Error("noUiSlider ("+t+"): must pass a formatter for all handles.")}e.tooltips.forEach((function(e){if(typeof e!=="boolean"&&(typeof e!=="object"||typeof e.to!=="function")){throw new Error("noUiSlider ("+t+"): 'tooltips' must be passed a formatter or 'false'.")}}))}}function W(t,e){t.ariaFormat=e;M(e)}function $(t,e){t.format=e;M(e)}function G(e,r){e.keyboardSupport=r;if(typeof r!=="boolean"){throw new Error("noUiSlider ("+t+"): 'keyboardSupport' option must be a boolean.")}}function J(t,e){t.documentElement=e}function K(e,r){if(typeof r!=="string"&&r!==false){throw new Error("noUiSlider ("+t+"): 'cssPrefix' must be a string or `false`.")}e.cssPrefix=r}function Q(e,r){if(typeof r!=="object"){throw new Error("noUiSlider ("+t+"): 'cssClasses' must be an object.")}if(typeof e.cssPrefix==="string"){e.cssClasses={};for(var n in r){if(!r.hasOwnProperty(n)){continue}e.cssClasses[n]=e.cssPrefix+r[n]}}else{e.cssClasses=r}}function Z(e){var r={margin:0,limit:0,padding:0,animate:true,animationDuration:300,ariaFormat:P,format:P};var i={step:{r:false,t:B},start:{r:true,t:O},connect:{r:true,t:H},direction:{r:true,t:q},snap:{r:false,t:D},animate:{r:false,t:L},animationDuration:{r:false,t:j},range:{r:true,t:V},orientation:{r:false,t:I},margin:{r:false,t:T},limit:{r:false,t:R},padding:{r:false,t:_},behaviour:{r:true,t:X},ariaFormat:{r:false,t:W},format:{r:false,t:$},tooltips:{r:false,t:Y},keyboardSupport:{r:true,t:G},documentElement:{r:false,t:J},cssPrefix:{r:true,t:K},cssClasses:{r:true,t:Q}};var a={connect:false,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:true,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};if(e.format&&!e.ariaFormat){e.ariaFormat=e.format}Object.keys(i).forEach((function(o){if(!n(e[o])&&a[o]===undefined){if(i[o].r){throw new Error("noUiSlider ("+t+"): '"+o+"' is required.")}return true}i[o].t(r,!n(e[o])?a[o]:e[o])}));r.pips=e.pips;var o=document.createElement("div");var s=o.style.msTransform!==undefined;var l=o.style.transform!==undefined;r.transformRule=l?"transform":s?"msTransform":"webkitTransform";var u=[["left","top"],["right","bottom"]];r.style=u[r.dir][r.ort];return r}function tt(e,n,o){var l=g();var c=x();var w=c&&b();var S=e;var U=[];var y;var E;var k=[];var C=0;var A;var N=n.spectrum;var F=[];var z={};var P;var M;var B=e.ownerDocument;var V=n.documentElement||B.documentElement;var O=B.body;var D=-1;var L=0;var j=1;var H=2;var I=B.dir==="rtl"||n.ort===1?0:100;function T(t,e){var r=B.createElement("div");if(e){d(r,e)}t.appendChild(r);return r}function R(t,e){var r=T(t,n.cssClasses.origin);var i=T(r,n.cssClasses.handle);i.setAttribute("data-handle",e);if(n.keyboardSupport){i.setAttribute("tabindex","0")}i.setAttribute("role","slider");i.setAttribute("aria-orientation",n.ort?"vertical":"horizontal");if(e===0){d(i,n.cssClasses.handleLower)}else if(e===n.handles-1){d(i,n.cssClasses.handleUpper)}return r}function _(t,e){if(!e){return false}return T(t,n.cssClasses.connect)}function q(t,e){var r=T(e,n.cssClasses.connects);E=[];A=[];A.push(_(r,t[0]));for(var i=0;i<n.handles;i++){E.push(R(e,i));k[i]=i;A.push(_(r,t[i+1]))}}function X(t){d(t,n.cssClasses.target);if(n.dir===0){d(t,n.cssClasses.ltr)}else{d(t,n.cssClasses.rtl)}if(n.ort===0){d(t,n.cssClasses.horizontal)}else{d(t,n.cssClasses.vertical)}return T(t,n.cssClasses.base)}function Y(t,e){if(!n.tooltips[e]){return false}return T(t.firstChild,n.cssClasses.tooltip)}function W(){var t=E.map(Y);dt("update",(function(e,r,i){if(!t[r]){return}var a=e[r];if(n.tooltips[r]!==true){a=n.tooltips[r].to(i[r])}t[r].innerHTML=a}))}function $(){dt("update",(function(t,e,r,i,a){k.forEach((function(t){var e=E[t];var i=gt(U,t,0,true,true,true);var o=gt(U,t,100,true,true,true);var s=a[t];var l=n.ariaFormat.to(r[t]);i=N.fromStepping(i).toFixed(1);o=N.fromStepping(o).toFixed(1);s=N.fromStepping(s).toFixed(1);e.children[0].setAttribute("aria-valuemin",i);e.children[0].setAttribute("aria-valuemax",o);e.children[0].setAttribute("aria-valuenow",s);e.children[0].setAttribute("aria-valuetext",l)}))}))}function G(e,r,n){if(e==="range"||e==="steps"){return N.xVal}if(e==="count"){if(r<2){throw new Error("noUiSlider ("+t+"): 'values' (>= 2) required for mode 'count'.")}var i=r-1;var a=100/i;r=[];while(i--){r[i]=i*a}r.push(100);e="positions"}if(e==="positions"){return r.map((function(t){return N.fromStepping(n?N.getStep(t):t)}))}if(e==="values"){if(n){return r.map((function(t){return N.fromStepping(N.getStep(N.toStepping(t)))}))}return r}}function J(t,e,r){function n(t,e){return(t+e).toFixed(7)/1}var i={};var o=N.xVal[0];var s=N.xVal[N.xVal.length-1];var l=false;var u=false;var f=0;r=a(r.slice().sort((function(t,e){return t-e})));if(r[0]!==o){r.unshift(o);l=true}if(r[r.length-1]!==s){r.push(s);u=true}r.forEach((function(a,o){var s;var p;var c;var d=a;var h=r[o+1];var m;var v;var g;var b;var x;var w;var S;var U=e==="steps";if(U){s=N.xNumSteps[o]}if(!s){s=h-d}if(d===false||h===undefined){return}s=Math.max(s,1e-7);for(p=d;p<=h;p=n(p,s)){m=N.toStepping(p);v=m-f;x=v/t;w=Math.round(x);S=v/w;for(c=1;c<=w;c+=1){g=f+c*S;i[g.toFixed(5)]=[N.fromStepping(g),0]}b=r.indexOf(p)>-1?j:U?H:L;if(!o&&l){b=0}if(!(p===h&&u)){i[m.toFixed(5)]=[p,b]}f=m}}));return i}function K(t,e,r){var i=B.createElement("div");var a=[];a[L]=n.cssClasses.valueNormal;a[j]=n.cssClasses.valueLarge;a[H]=n.cssClasses.valueSub;var o=[];o[L]=n.cssClasses.markerNormal;o[j]=n.cssClasses.markerLarge;o[H]=n.cssClasses.markerSub;var s=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical];var l=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];d(i,n.cssClasses.pips);d(i,n.ort===0?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical);function u(t,e){var r=e===n.cssClasses.value;var i=r?s:l;var u=r?a:o;return e+" "+i[n.ort]+" "+u[t]}function f(t,a,o){o=e?e(a,o):o;if(o===D){return}var s=T(i,false);s.className=u(o,n.cssClasses.marker);s.style[n.style]=t+"%";if(o>L){s=T(i,false);s.className=u(o,n.cssClasses.value);s.setAttribute("data-value",a);s.style[n.style]=t+"%";s.innerHTML=r.to(a)}}Object.keys(t).forEach((function(e){f(e,t[e][0],t[e][1])}));return i}function Q(){if(M){r(M);M=null}}function tt(t){Q();var e=t.mode;var r=t.density||1;var n=t.filter||false;var i=t.values||false;var a=t.stepped||false;var o=G(e,i,a);var s=J(r,e,o);var l=t.format||{to:Math.round};M=S.appendChild(K(s,n,l));return M}function et(){var t=y.getBoundingClientRect();var e="offset"+["Width","Height"][n.ort];return n.ort===0?t.width||y[e]:t.height||y[e]}function rt(t,e,r,i){var a=function(a){a=nt(a,i.pageOffset,i.target||e);if(!a){return false}if(S.hasAttribute("disabled")&&!i.doNotReject){return false}if(m(S,n.cssClasses.tap)&&!i.doNotReject){return false}if(t===l.start&&a.buttons!==undefined&&a.buttons>1){return false}if(i.hover&&a.buttons){return false}if(!w){a.preventDefault()}a.calcPoint=a.points[n.ort];r(a,i)};var o=[];t.split(" ").forEach((function(t){e.addEventListener(t,a,w?{passive:true}:false);o.push([t,a])}));return o}function nt(t,e,r){var n=t.type.indexOf("touch")===0;var i=t.type.indexOf("mouse")===0;var a=t.type.indexOf("pointer")===0;var o;var s;if(t.type.indexOf("MSPointer")===0){a=true}if(n){var l=function(t){return t.target===r||r.contains(t.target)};if(t.type==="touchstart"){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1){return false}o=u[0].pageX;s=u[0].pageY}else{var f=Array.prototype.find.call(t.changedTouches,l);if(!f){return false}o=f.pageX;s=f.pageY}}e=e||v(B);if(i||a){o=t.clientX+e.x;s=t.clientY+e.y}t.pageOffset=e;t.points=[o,s];t.cursor=i||a;return t}function it(t){var e=t-s(y,n.ort);var r=e*100/et();r=f(r);return n.dir?100-r:r}function at(t){var e=100;var r=false;E.forEach((function(n,i){if(n.hasAttribute("disabled")){return}var a=Math.abs(U[i]-t);if(a<e||a===100&&e===100){r=i;e=a}}));return r}function ot(t,e){if(t.type==="mouseout"&&t.target.nodeName==="HTML"&&t.relatedTarget===null){lt(t,e)}}function st(t,e){if(navigator.appVersion.indexOf("MSIE 9")===-1&&t.buttons===0&&e.buttonsProperty!==0){return lt(t,e)}var r=(n.dir?-1:1)*(t.calcPoint-e.startCalcPoint);var i=r*100/e.baseSize;xt(r>0,i,e.locations,e.handleNumbers)}function lt(t,e){if(e.handle){h(e.handle,n.cssClasses.active);C-=1}e.listeners.forEach((function(t){V.removeEventListener(t[0],t[1])}));if(C===0){h(S,n.cssClasses.drag);Ut();if(t.cursor){O.style.cursor="";O.removeEventListener("selectstart",i)}}e.handleNumbers.forEach((function(t){mt("change",t);mt("set",t);mt("end",t)}))}function ut(t,e){var r;if(e.handleNumbers.length===1){var a=E[e.handleNumbers[0]];if(a.hasAttribute("disabled")){return false}r=a.children[0];C+=1;d(r,n.cssClasses.active)}t.stopPropagation();var o=[];var s=rt(l.move,V,st,{target:t.target,handle:r,listeners:o,startCalcPoint:t.calcPoint,baseSize:et(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:U.slice()});var u=rt(l.end,V,lt,{target:t.target,handle:r,listeners:o,doNotReject:true,handleNumbers:e.handleNumbers});var f=rt("mouseout",V,ot,{target:t.target,handle:r,listeners:o,doNotReject:true,handleNumbers:e.handleNumbers});o.push.apply(o,s.concat(u,f));if(t.cursor){O.style.cursor=getComputedStyle(t.target).cursor;if(E.length>1){d(S,n.cssClasses.drag)}O.addEventListener("selectstart",i,false)}e.handleNumbers.forEach((function(t){mt("start",t)}))}function ft(t){t.stopPropagation();var e=it(t.calcPoint);var r=at(e);if(r===false){return false}if(!n.events.snap){u(S,n.cssClasses.tap,n.animationDuration)}yt(r,e,true,true);Ut();mt("slide",r,true);mt("update",r,true);mt("change",r,true);mt("set",r,true);if(n.events.snap){ut(t,{handleNumbers:[r]})}}function pt(t){var e=it(t.calcPoint);var r=N.getStep(e);var n=N.fromStepping(r);Object.keys(z).forEach((function(t){if("hover"===t.split(".")[0]){z[t].forEach((function(t){t.call(P,n)}))}}))}function ct(t){if(!t.fixed){E.forEach((function(t,e){rt(l.start,t.children[0],ut,{handleNumbers:[e]})}))}if(t.tap){rt(l.start,y,ft,{})}if(t.hover){rt(l.move,y,pt,{hover:true})}if(t.drag){A.forEach((function(e,r){if(e===false||r===0||r===A.length-1){return}var i=E[r-1];var a=E[r];var o=[e];d(e,n.cssClasses.draggable);if(t.fixed){o.push(i.children[0]);o.push(a.children[0])}o.forEach((function(t){rt(l.start,t,ut,{handles:[i,a],handleNumbers:[r-1,r]})}))}))}}function dt(t,e){z[t]=z[t]||[];z[t].push(e);if(t.split(".")[0]==="update"){E.forEach((function(t,e){mt("update",e)}))}}function ht(t){var e=t&&t.split(".")[0];var r=e&&t.substring(e.length);Object.keys(z).forEach((function(t){var n=t.split(".")[0];var i=t.substring(n.length);if((!e||e===n)&&(!r||r===i)){delete z[t]}}))}function mt(t,e,r){Object.keys(z).forEach((function(i){var a=i.split(".")[0];if(t===a){z[i].forEach((function(t){t.call(P,F.map(n.format.to),e,F.slice(),r||false,U.slice())}))}}))}function vt(t){return t+"%"}function gt(t,e,r,i,a,o){if(E.length>1&&!n.events.unconstrained){if(i&&e>0){r=Math.max(r,t[e-1]+n.margin)}if(a&&e<E.length-1){r=Math.min(r,t[e+1]-n.margin)}}if(E.length>1&&n.limit){if(i&&e>0){r=Math.min(r,t[e-1]+n.limit)}if(a&&e<E.length-1){r=Math.max(r,t[e+1]-n.limit)}}if(n.padding){if(e===0){r=Math.max(r,n.padding[0])}if(e===E.length-1){r=Math.min(r,100-n.padding[1])}}r=N.getStep(r);r=f(r);if(r===t[e]&&!o){return false}return r}function bt(t,e){var r=n.ort;return(r?e:t)+", "+(r?t:e)}function xt(t,e,r,n){var i=r.slice();var a=[!t,t];var o=[t,!t];n=n.slice();if(t){n.reverse()}if(n.length>1){n.forEach((function(t,r){var n=gt(i,t,i[t]+e,a[r],o[r],false);if(n===false){e=0}else{e=n-i[t];i[t]=n}}))}else{a=o=[true]}var s=false;n.forEach((function(t,n){s=yt(t,r[t]+e,a[n],o[n])||s}));if(s){n.forEach((function(t){mt("update",t);mt("slide",t)}))}}function wt(t,e){return n.dir?100-t-e:t}function St(t,e){U[t]=e;F[t]=N.fromStepping(e);var r="translate("+bt(vt(wt(e,0)-I),"0")+")";E[t].style[n.transformRule]=r;Et(t);Et(t+1)}function Ut(){k.forEach((function(t){var e=U[t]>50?-1:1;var r=3+(E.length+e*t);E[t].style.zIndex=r}))}function yt(t,e,r,n){e=gt(U,t,e,r,n,false);if(e===false){return false}St(t,e);return true}function Et(t){if(!A[t]){return}var e=0;var r=100;if(t!==0){e=U[t-1]}if(t!==A.length-1){r=U[t]}var i=r-e;var a="translate("+bt(vt(wt(e,i)),"0")+")";var o="scale("+bt(i/100,"1")+")";A[t].style[n.transformRule]=a+" "+o}function kt(t,e){if(t===null||t===false||t===undefined){return U[e]}if(typeof t==="number"){t=String(t)}t=n.format.from(t);t=N.toStepping(t);if(t===false||isNaN(t)){return U[e]}return t}function Ct(t,e){var r=p(t);var i=U[0]===undefined;e=e===undefined?true:!!e;if(n.animate&&!i){u(S,n.cssClasses.tap,n.animationDuration)}k.forEach((function(t){yt(t,kt(r[t],t),true,false)}));k.forEach((function(t){yt(t,U[t],true,true)}));Ut();k.forEach((function(t){mt("update",t);if(r[t]!==null&&e){mt("set",t)}}))}function At(t){Ct(n.start,t)}function Nt(e,r,n){var i=[];e=Number(e);if(!(e>=0&&e<k.length)){throw new Error("noUiSlider ("+t+"): invalid handle number, got: "+e)}for(var a=0;a<k.length;a++){i[a]=null}i[e]=r;Ct(i,n)}function Ft(){var t=F.map(n.format.to);if(t.length===1){return t[0]}return t}function zt(){for(var t in n.cssClasses){if(!n.cssClasses.hasOwnProperty(t)){continue}h(S,n.cssClasses[t])}while(S.firstChild){S.removeChild(S.firstChild)}delete S.noUiSlider}function Pt(){return U.map((function(t,e){var r=N.getNearbySteps(t);var n=F[e];var i=r.thisStep.step;var a=null;if(i!==false){if(n+i>r.stepAfter.startValue){i=r.stepAfter.startValue-n}}if(n>r.thisStep.startValue){a=r.thisStep.step}else if(r.stepBefore.step===false){a=false}else{a=n-r.stepBefore.highestStep}if(t===100){i=null}else if(t===0){a=null}var o=N.countStepDecimals();if(i!==null&&i!==false){i=Number(i.toFixed(o))}if(a!==null&&a!==false){a=Number(a.toFixed(o))}return[a,i]}))}function Mt(t,e){var r=Ft();var i=["margin","limit","padding","range","animate","snap","step","format"];i.forEach((function(e){if(t[e]!==undefined){o[e]=t[e]}}));var a=Z(o);i.forEach((function(e){if(t[e]!==undefined){n[e]=a[e]}}));N=a.spectrum;n.margin=a.margin;n.limit=a.limit;n.padding=a.padding;if(n.pips){tt(n.pips)}U=[];Ct(t.start||r,e)}y=X(S);q(n.connect,y);ct(n.events);Ct(n.start);P={destroy:zt,steps:Pt,on:dt,off:ht,get:Ft,set:Ct,setHandle:Nt,reset:At,__moveHandles:function(t,e,r){xt(t,e,U,r)},options:o,updateOptions:Mt,target:S,removePips:Q,pips:tt};if(n.pips){tt(n.pips)}if(n.tooltips){W()}$();return P}function et(e,r){if(!e||!e.nodeName){throw new Error("noUiSlider ("+t+"): create requires a single element, got: "+e)}if(e.noUiSlider){throw new Error("noUiSlider ("+t+"): Slider was already initialized.")}var n=Z(r);var i=tt(e,n,r);e.noUiSlider=i;return i}return{__spectrum:z,version:t,create:et}}))}));var nouisliderCss='/*! nouislider - 12.1.0 - 10/25/2018 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr;padding:0 15px;margin:30px 0 10px 0}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1}.noUi-base:before,.noUi-base:after{width:15px;content:"";position:absolute;top:0;height:100%;display:block}.noUi-base:before{left:-15px}.noUi-base:after{left:100%}.noUi-connects{overflow:hidden;z-index:0}.noUi-connect,.noUi-origin{will-change:transform;position:absolute;z-index:1;top:0;left:0;height:100%;width:100%;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;transform-origin:0 0}html:not([dir="rtl"]) .noUi-horizontal .noUi-origin{left:auto;right:0}.noUi-vertical .noUi-origin{width:0}.noUi-horizontal .noUi-origin{height:0}.noUi-handle{position:absolute}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:transform 0.3s;-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}.noUi-state-drag *{cursor:inherit !important}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;left:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}html:not([dir="rtl"]) .noUi-horizontal .noUi-handle{right:-17px;left:auto}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;-webkit-box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB}.noUi-connects{border-radius:3px}.noUi-connect{background:rgb(54, 54, 54)}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;-webkit-box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB}.noUi-active{-webkit-box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB}.noUi-handle:before,.noUi-handle:after{content:"";display:block;position:absolute;height:14px;width:1px;background:rgb(231, 231, 231);left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:before,.noUi-vertical .noUi-handle:after{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled].noUi-target,[disabled].noUi-handle,[disabled] .noUi-handle{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#AAA}.noUi-value{position:absolute;white-space:nowrap;text-align:center;font-size:14px}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-sub{background:#AAA}.noUi-marker-large{background:#AAA}.noUi-pips-horizontal{padding:15px 0;height:40px;top:100%;left:0;width:90%;margin:0 5%}.noUi-value-horizontal{-webkit-transform:translate(-50%, 50%);-ms-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%, 50%);-ms-transform:translate(50%, 50%);transform:translate(50%, 50%)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:1px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:10px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%, 0);transform:translate(0, -50%, 0);padding-left:25px}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0, 50%);-ms-transform:translate(0, 50%);transform:translate(0, 50%)}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{font-size:13px;display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:4px 7px 3px 7px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0);left:50%;bottom:120%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%);top:50%;right:120%}';var FilterSlider=function(){function t(t){registerInstance(this,t);this.snap=false;this.step=0;this.handleActive=false}t.prototype.swipeLeftHandler=function(t){t.stopPropagation()};t.prototype.clickHandler=function(t){t.stopPropagation()};t.prototype.componentDidLoad=function(){var t=this;var e=this.el.firstElementChild;if(this.ids)this.idArray=this.ids.split(", ");this.valueArray=this.values.replace(",",".").split("; ");var r=this.convertValuesToRangeMap(this.valueArray);nouislider.create(e,{start:[r["min"],r["max"]],snap:this.snap,step:this.step,tooltips:true,connect:true,range:r,format:{to:function(t){return t},from:function(t){return t}}});var n=e;if(this.ids){n.noUiSlider.on("set",(function(){var e=n.noUiSlider.get();var r=t.valueArray.findIndex((function(t){return parseFloat(t)==parseFloat(e[0])}));var i=t.valueArray.findIndex((function(t){return parseFloat(t)==parseFloat(e[1])}));t.fromId=t.idArray[r];t.toId=t.idArray[i]}))}var i=this.idArray.findIndex((function(e){return parseInt(e)==t.from}));var a=this.idArray.findIndex((function(e){return parseInt(e)==t.to}));var o=this.from?parseFloat(this.valueArray[i]):null;var s=this.to?parseFloat(this.valueArray[a]):null;n.noUiSlider.set([o,s])};t.prototype.convertValuesToRangeMap=function(t){var e={};var r=100/(t.length-1);var n=t.length;for(var i=0;i<n;i++){var a=parseFloat(t[i]);if(i==0)e["min"]=a;else if(i==n-1)e["max"]=a;else e[(r*i).toString()+"%"]=a}return e};t.prototype.render=function(){var t=!this.fromId||!this.toId;return[h("div",null),h("input",{type:"hidden",name:this.name,value:this.fromId+","+this.toId,disabled:t})]};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();FilterSlider.style=nouisliderCss;export{FilterSlider as ks_filter_slider};