var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function l(e){try{s(r["throw"](e))}catch(t){o(t)}}function s(e){e.done?n(e.value):a(e.value).then(i,l)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return s([e,t])}}function s(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(o=i[0]&2?a["return"]:i[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;if(a=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;a=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1];o=i;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(i);break}if(o[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(l){i=[6,l];a=0}finally{r=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};var NAMESPACE="ks-components";var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var renderingRef=null;var win=typeof window!=="undefined"?window:{};var CSS=win.CSS;var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var supportsShadow=true;var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var addHostEventListeners=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],o=n[2];var i=getHostListenerTarget(e,r);var l=hostListenerProxy(t,o);var s=hostListenerOpts(r);plt.ael(i,a,l,s);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(i,a,l,s)}))}))}};var hostListenerProxy=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(r){consoleError(r)}}};var getHostListenerTarget=function(e,t){if(t&4)return doc;if(t&8)return win;return e};var hostListenerOpts=function(e){return(e&2)!==0};var CONTENT_REF_ID="r";var ORG_LOCATION_ID="o";var SLOT_NODE_ID="s";var TEXT_NODE_ID="t";var HYDRATE_ID="s-id";var HYDRATED_STYLE_ID="sty-id";var HYDRATE_CHILD_ID="c-id";var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a=getScopeId(t);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var i=rootAppliedStyles.get(e);var l=void 0;if(!i){rootAppliedStyles.set(e,i=new Set)}if(!i.has(a)){if(e.host&&(l=e.querySelector("["+HYDRATED_STYLE_ID+'="'+a+'"]'))){l.innerHTML=o}else{if(plt.$cssShim$){l=plt.$cssShim$.createHostStyle(r,a,o,!!(t.$flags$&10));var s=l["s-sc"];if(s){a=s;i=null}}else{l=doc.createElement("style");l.innerHTML=o}e.insertBefore(l,e.querySelector("link"))}if(i){i.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[o])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=createTime("attachStyles",t.$tagName$);addStyle(n.getRootNode(),t,e.$modeName$,n);r()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var EMPTY_OBJ={};var SVG_NS="http://www.w3.org/2000/svg";var HTML_NS="http://www.w3.org/1999/xhtml";var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var o=null;var i=null;var l=false;var s=false;var $=[];var c=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){c(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(l&&s){$[$.length-1].$text$+=a}else{$.push(l?newVNode(null,a):a)}s=l}}};c(n);if(t){if(t.key){o=t.key}if(t.name){i=t.name}{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,$,vdomFnUtils)}var u=newVNode(e,null);u.$attrs$=t;if($.length>0){u.$children$=$}{u.$key$=o}{u.$name$=i}return u};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}{n.$name$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return h.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var n=newVNode(e.vtag,e.vtext);n.$attrs$=e.vattrs;n.$children$=e.vchildren;n.$key$=e.vkey;n.$name$=e.vname;return n};var setAccessor=function(e,t,n,r,a,o){if(n!==r){var i=isMemberInElement(e,t);var l=t.toLowerCase();if(t==="class"){var s=e.classList;var $=parseClassList(n);var c=parseClassList(r);s.remove.apply(s,$.filter((function(e){return e&&!c.includes(e)})));s.add.apply(s,c.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var f in n){if(!r||r[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in r){if(!n||r[f]!==n[f]){if(f.includes("-")){e.style.setProperty(f,r[f])}else{e.style[f]=r[f]}}}}else if(t==="key");else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else{var u=isComplexType(r);if((i||u&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var d=r==null?"":r;if(t==="list"){i=false}else if(n==null||e[t]!=d){e[t]=d}}else{e[t]=r}}catch(v){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!i||o&4||a)&&!u){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var i=t.$attrs$||EMPTY_OBJ;{for(r in o){if(!(r in i)){setAccessor(a,r,o[r],undefined,n,t.$flags$)}}}for(r in i){setAccessor(a,r,o[r],i[r],n,t.$flags$)}};var createElm=function(e,t,n,r){var a=t.$children$[n];var o=0;var i;var l;var s;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){i=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){i=a.$elm$=doc.createTextNode("")}else{if(!isSvgMode){isSvgMode=a.$tag$==="svg"}i=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$flags$&2?"slot-fb":a.$tag$);if(isSvgMode&&a.$tag$==="foreignObject"){isSvgMode=false}{updateElement(null,a,isSvgMode)}if(a.$children$){for(o=0;o<a.$children$.length;++o){l=createElm(e,a,o);if(l){i.appendChild(l)}}}{if(a.$tag$==="svg"){isSvgMode=false}else if(i.tagName==="foreignObject"){isSvgMode=true}}}{i["s-hn"]=hostTagName;if(a.$flags$&(2|1)){i["s-sr"]=true;i["s-cr"]=contentRef;i["s-sn"]=a.$name$||"";s=e&&e.$children$&&e.$children$[n];if(s&&s.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return i};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,n,r,a,o){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=o;++a){if(r[a]){l=createElm(null,n,a);if(l){r[a].$elm$=l;i.insertBefore(l,referenceNode(t))}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}};var updateChildren=function(e,t,n,r){var a=0;var o=0;var i=0;var l=0;var s=t.length-1;var $=t[0];var c=t[s];var f=r.length-1;var u=r[0];var d=r[f];var v;var p;while(a<=s&&o<=f){if($==null){$=t[++a]}else if(c==null){c=t[--s]}else if(u==null){u=r[++o]}else if(d==null){d=r[--f]}else if(isSameVnode($,u)){patch($,u);$=t[++a];u=r[++o]}else if(isSameVnode(c,d)){patch(c,d);c=t[--s];d=r[--f]}else if(isSameVnode($,d)){if($.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation($.$elm$.parentNode,false)}patch($,d);e.insertBefore($.$elm$,c.$elm$.nextSibling);$=t[++a];d=r[--f]}else if(isSameVnode(c,u)){if($.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(c.$elm$.parentNode,false)}patch(c,u);e.insertBefore(c.$elm$,$.$elm$);c=t[--s];u=r[++o]}else{i=-1;{for(l=a;l<=s;++l){if(t[l]&&t[l].$key$!==null&&t[l].$key$===u.$key$){i=l;break}}}if(i>=0){p=t[i];if(p.$tag$!==u.$tag$){v=createElm(t&&t[o],n,i)}else{patch(p,u);t[i]=undefined;v=p.$elm$}u=r[++o]}else{v=createElm(t&&t[o],n,o);u=r[++o]}if(v){{parentReferenceNode($.$elm$).insertBefore(v,referenceNode($.$elm$))}}}}if(a>s){addVnodes(e,r[f+1]==null?null:r[f+1].$elm$,n,r,o,f)}else if(o>f){removeVnodes(t,a,s)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var o=t.$tag$;var i=t.$text$;var l;if(i===null){{isSvgMode=o==="svg"?true:o==="foreignObject"?false:isSvgMode}{if(o==="slot");else{updateElement(e,t,isSvgMode)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}if(isSvgMode&&o==="svg"){isSvgMode=false}}else if(l=n["s-cr"]){l.parentNode.textContent=i}else if(e.$text$!==i){n.data=i}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var n;var r;var a;var o;var i;var l;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){i=n["s-sn"];n.hidden=false;for(o=0;o<a;o++){l=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||i!==""){if(l===1&&i===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(l===1||l===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}updateFallbackSlotVisibility(n)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var n;var r;var a;var o;var i;var l=0;var s=e.childNodes;var $=s.length;for(;l<$;l++){t=s[l];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(i=r.length-1;i>=0;i--){n=r[i];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(n,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));checkSlotFallbackVisibility=true;n["s-sn"]=n["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,n["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===n}))){relocateNodes.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;if(r.$attrsToReflect$){o.$attrs$=o.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return o.$attrs$[r]=n[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=n;{contentRef=n["s-cr"];useNativeShadowDom=(r.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var i=void 0;var l=void 0;var s=void 0;var $=void 0;var c=void 0;var f=void 0;var u=0;for(;u<relocateNodes.length;u++){i=relocateNodes[u];l=i.$nodeToRelocate$;if(!l["s-ol"]){s=doc.createTextNode("");s["s-nr"]=l;l.parentNode.insertBefore(l["s-ol"]=s,l)}}for(u=0;u<relocateNodes.length;u++){i=relocateNodes[u];l=i.$nodeToRelocate$;if(i.$slotRefNode$){$=i.$slotRefNode$.parentNode;c=i.$slotRefNode$.nextSibling;s=l["s-ol"];while(s=s.previousSibling){f=s["s-nr"];if(f&&f["s-sn"]===l["s-sn"]&&$===f.parentNode){f=f.nextSibling;if(!f||!f["s-nr"]){c=f;break}}}if(!c&&$!==l.parentNode||l.nextSibling!==c){if(l!==c){if(!l["s-hn"]&&l["s-ol"]){l["s-hn"]=l["s-ol"].parentNode.nodeName}$.insertBefore(l,c)}}}else{if(l.nodeType===1){l.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,n){var r=getElement(e);return{emit:function(e){return emitEvent(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return n()};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return safeCall(r,t,n)}));e.$queuedListeners$=null}}{a=safeCall(r,"componentWillLoad")}}else{{a=safeCall(r,"componentWillUpdate")}}{a=then(a,(function(){return safeCall(r,"componentWillRender")}))}n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,o,i,l,s;return __generator(this,(function($){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=r["s-rc"];if(n){attachStyles(e)}i=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(plt.$cssShim$){plt.$cssShim$.updateHost(r)}if(o){o.map((function(e){return e()}));r["s-rc"]=undefined}i();a();{l=r["s-p"];s=function(){return postUpdateComponent(e)};if(l.length===0){s()}else{Promise.all(l).then(s);e.$flags$|=4;l.length=0}}return[2]}))}))};var callRender=function(e,t,n){try{renderingRef=t;t=t.render&&t.render();{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(r){consoleError(r,e.$hostElement$)}renderingRef=null;return null};var getRenderingRef=function(){return renderingRef};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$lazyInstance$;var o=e.$ancestorComponent$;{safeCall(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}{safeCall(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!o){appDidLoad()}}}else{{safeCall(a,"componentDidUpdate")}r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var forceUpdate=function(e){{var t=getHostRef(e);var n=t.$hostElement$.isConnected;if(n&&(t.$flags$&(2|16))===2){scheduleUpdate(t,false)}return n}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(r){consoleError(r)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var initializeClientHydrate=function(e,t,n,r){var a=createTime("hydrateClient",t);var o=e.shadowRoot;var i=[];var l=[];var s=null;var $=r.$vnode$=newVNode(t,null);if(!plt.$orgLocNodes$){initializeDocumentHydrate(doc.body,plt.$orgLocNodes$=new Map)}e[HYDRATE_ID]=n;e.removeAttribute(HYDRATE_ID);clientHydrate($,i,l,s,e,e,n);i.map((function(e){var n=e.$hostId$+"."+e.$nodeId$;var r=plt.$orgLocNodes$.get(n);var a=e.$elm$;if(r&&supportsShadow&&r["s-en"]===""){r.parentNode.insertBefore(a,r.nextSibling)}if(!o){a["s-hn"]=t;if(r){a["s-ol"]=r;a["s-ol"]["s-nr"]=a}}plt.$orgLocNodes$.delete(n)}));a()};var clientHydrate=function(e,t,n,r,a,o,i){var l;var s;var $;var c;if(o.nodeType===1){l=o.getAttribute(HYDRATE_CHILD_ID);if(l){s=l.split(".");if(s[0]===i||s[0]==="0"){$={$flags$:0,$hostId$:s[0],$nodeId$:s[1],$depth$:s[2],$index$:s[3],$tag$:o.tagName.toLowerCase(),$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);o.removeAttribute(HYDRATE_CHILD_ID);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(r&&$.$depth$==="0"){r[$.$index$]=$.$elm$}}}for(c=o.childNodes.length-1;c>=0;c--){clientHydrate(e,t,n,r,a,o.childNodes[c],i)}if(o.shadowRoot){for(c=o.shadowRoot.childNodes.length-1;c>=0;c--){clientHydrate(e,t,n,r,a,o.shadowRoot.childNodes[c],i)}}}else if(o.nodeType===8){s=o.nodeValue.split(".");if(s[1]===i||s[1]==="0"){l=s[0];$={$flags$:0,$hostId$:s[1],$nodeId$:s[2],$depth$:s[3],$index$:s[4],$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(l===TEXT_NODE_ID){$.$elm$=o.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);o.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(r&&$.$depth$==="0"){r[$.$index$]=$.$elm$}}}else if($.$hostId$===i){if(l===SLOT_NODE_ID){$.$tag$="slot";if(s[5]){o["s-sn"]=$.$name$=s[5]}else{o["s-sn"]=""}o["s-sr"]=true;n.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(l===CONTENT_REF_ID){{a["s-cr"]=o;o["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var f=newVNode(null,o.textContent);f.$elm$=o;f.$index$="0";e.$children$=[f]}};var initializeDocumentHydrate=function(e,t){if(e.nodeType===1){var n=0;for(;n<e.childNodes.length;n++){initializeDocumentHydrate(e.childNodes[n],t)}if(e.shadowRoot){for(n=0;n<e.shadowRoot.childNodes.length;n++){initializeDocumentHydrate(e.shadowRoot.childNodes[n],t)}}}else if(e.nodeType===8){var r=e.nodeValue.split(".");if(r[0]===ORG_LOCATION_ID){t.set(r[1]+"."+r[2],e);e.nodeValue="";e["s-en"]=r[3]}}};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var o=a.$hostElement$;var i=a.$instanceValues$.get(t);var l=a.$flags$;var s=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(l&8)||i===undefined)&&n!==i){a.$instanceValues$.set(t,n);if(s){if(r.$watchers$&&l&128){var $=r.$watchers$[t];if($){$.map((function(e){try{s[e](n,i,t)}catch(r){consoleError(r,o)}}))}}if((l&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],o=e[1][0];if(o&31||n&2&&o&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&o&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=getHostRef(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var o=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=o.get(e);if(r.hasOwnProperty(t)){n=r[t];delete r[t]}r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;o.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var e,r,o,i,l,s,$;return __generator(this,(function(c){switch(c.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=c.sent();e();c.label=2;case 2:if(!a.isProxied){{n.$watchers$=a.watchers}proxyComponent(a,n,2);a.isProxied=true}r=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch(f){consoleError(f)}{t.$flags$&=~8}{t.$flags$|=128}r();if(a.style){o=a.style;i=getScopeId(n);if(!styles.has(i)){l=createTime("registerStyles",n.$tagName$);registerStyle(i,o,!!(n.$flags$&1));l()}}c.label=3;case 3:s=t.$ancestorComponent$;$=function(){return scheduleUpdate(t,true)};if(s&&s["s-rc"]){s["s-rc"].push($)}else{$()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(HYDRATE_ID);if(a){initializeClientHydrate(e,n.$tagName$,a,t)}}if(!a){if(n.$flags$&(4|8)){setContentReference(e)}}{var o=e;while(o=o.parentNode||o.host){if(o.nodeType===1&&o.hasAttribute("s-id")&&o["s-p"]||o["s-p"]){attachToAncestor(t,t.$ancestorComponent$=o);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{initializeComponent(e,t,n)}}else{addHostEventListeners(e,t,n.$listeners$)}r()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(plt.$cssShim$){plt.$cssShim$.removeHost(e)}}};var patchChildSlotNodes=function(e,t){var n=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var r=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=r.call(this);if((plt.$flags$&1)===0&&getHostRef(this).$flags$&2){var t=new n;for(var a=0;a<e.length;a++){var o=e[a]["s-nr"];if(o){t.push(o)}}return t}return n.from(e)}})}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n=createTime();var r=[];var a=t.exclude||[];var o=win.customElements;var i=doc.head;var l=i.querySelector("meta[charset]");var s=doc.createElement("style");var $=[];var c;var f=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;{plt.$flags$|=2}e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}var i=n.$tagName$;var l=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);{patchChildSlotNodes(t,n)}return r}t.prototype.connectedCallback=function(){var e=this;if(c){clearTimeout(c);c=null}if(f){$.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(i)&&!o.get(i)){r.push(i);o.define(i,proxyComponent(l,n,1))}}))}));{s.innerHTML=r+HYDRATED_CSS;s.setAttribute("data-styles","");i.insertBefore(s,l?l.nextSibling:i.firstChild)}f=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return c=setTimeout(appDidLoad,30)}))}}n()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,n,t.$listeners$);return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[r]}return import("./"+a+".entry.js"+"").then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var nextTick=function(e){return promiseResolve().then(e)};export{CSS as C,Host as H,NAMESPACE as N,promiseResolve as a,bootstrapLazy as b,getRenderingRef as c,doc as d,createEvent as e,forceUpdate as f,getElement as g,h,plt as p,registerInstance as r,win as w};