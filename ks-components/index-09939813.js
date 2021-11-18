const e="ks-components";let t,n,l=!1,s=!1,o=!1,i=!1,c=null,r=!1;const f="undefined"!=typeof window?window:{},a=f.CSS,u=f.document||{head:{}},$={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},d=e=>Promise.resolve(e),h=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),p=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=y(e,n),i=m(t,s),c=b(n);$.ael(o,l,i,c),(t.o=t.o||[]).push((()=>$.rel(o,l,i,c)))}))},m=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(l){be(l)}},y=(e,t)=>4&t?u:8&t?f:e,b=e=>0!=(2&e),w=new WeakMap,g=e=>"sc-"+e.$,v={},k=e=>"object"==(e=typeof e)||"function"===e,j=(e,t,...n)=>{let l=null,s=null,o=null,i=!1,c=!1,r=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!k(l))&&(l+=""),i&&c?r[r.length-1].h+=l:r.push(i?O(null,l):l),c=i)};if(f(n),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,x);const a=O(e,null);return a.p=t,r.length>0&&(a.m=r),a.g=s,a.v=o,a},O=(e,t)=>({t:0,k:e,h:t,j:null,m:null,p:null,g:null,v:null}),S={},x={forEach:(e,t)=>e.map(M).forEach(t),map:(e,t)=>e.map(M).map(t).map(C)},M=e=>({vattrs:e.p,vchildren:e.m,vkey:e.g,vname:e.v,vtag:e.k,vtext:e.h}),C=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),j(e.vtag,t,...e.vchildren||[])}const t=O(e.vtag,e.vtext);return t.p=e.vattrs,t.m=e.vchildren,t.g=e.vkey,t.v=e.vname,t},R=(e,t,n,l,s,o)=>{if(n!==l){let c=ye(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=E(n),o=E(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if(c||"o"!==t[0]||"n"!==t[1]){const r=k(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(i){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):ye(f,r)?r.slice(2):r[2]+t.slice(3),n&&$.rel(e,t,n,!1),l&&$.ael(e,t,l,!1)}},_=/\s/,E=e=>e?e.split(_):[],N=(e,t,n,l)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.p||v,i=t.p||v;for(l in o)l in i||R(s,l,o[l],void 0,n,t.t);for(l in i)R(s,l,o[l],i[l],n,t.t)},P=(e,s,c)=>{let r,f,a,$=s.m[c],d=0;if(l||(o=!0,"slot"===$.k&&($.t|=$.m?2:1)),null!==$.h)r=$.j=u.createTextNode($.h);else if(1&$.t)r=$.j=u.createTextNode("");else{if(i||(i="svg"===$.k),r=$.j=u.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.k),i&&"foreignObject"===$.k&&(i=!1),N(null,$,i),$.m)for(d=0;d<$.m.length;++d)f=P(e,$,d),f&&r.appendChild(f);"svg"===$.k?i=!1:"foreignObject"===r.tagName&&(i=!0)}return r["s-hn"]=n,3&$.t&&(r["s-sr"]=!0,r["s-cr"]=t,r["s-sn"]=$.v||"",a=e&&e.m&&e.m[c],a&&a.k===$.k&&e.j&&T(e.j,!1)),r},T=(e,t)=>{$.t|=1;const l=e.childNodes;for(let s=l.length-1;s>=0;s--){const e=l[s];e["s-hn"]!==n&&e["s-ol"]&&(A(e).insertBefore(e,U(e)),e["s-ol"].remove(),e["s-ol"]=void 0,o=!0),t&&T(e,t)}$.t&=-2},W=(e,t,n,l,s,o)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(;s<=o;++s)l[s]&&(i=P(null,n,s),i&&(l[s].j=i,c.insertBefore(i,U(t))))},I=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(s=!0,(o=l.j)["s-ol"]?o["s-ol"].remove():T(o,!0),o.remove())},L=(e,t)=>e.k===t.k&&("slot"===e.k?e.v===t.v:e.g===t.g),U=e=>e&&e["s-ol"]||e,A=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,D=(e,t)=>{const n=t.j=e.j,l=e.m,s=t.m,o=t.k,c=t.h;let r;null===c?(i="svg"===o||"foreignObject"!==o&&i,"slot"===o||N(e,t,i),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,c=0,r=0,f=0,a=t.length-1,u=t[0],$=t[a],d=l.length-1,h=l[0],p=l[d];for(;i<=a&&c<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==h)h=l[++c];else if(null==p)p=l[--d];else if(L(u,h))D(u,h),u=t[++i],h=l[++c];else if(L($,p))D($,p),$=t[--a],p=l[--d];else if(L(u,p))"slot"!==u.k&&"slot"!==p.k||T(u.j.parentNode,!1),D(u,p),e.insertBefore(u.j,$.j.nextSibling),u=t[++i],p=l[--d];else if(L($,h))"slot"!==u.k&&"slot"!==p.k||T($.j.parentNode,!1),D($,h),e.insertBefore($.j,u.j),$=t[--a],h=l[++c];else{for(r=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].g&&t[f].g===h.g){r=f;break}r>=0?(o=t[r],o.k!==h.k?s=P(t&&t[c],n,r):(D(o,h),t[r]=void 0,s=o.j),h=l[++c]):(s=P(t&&t[c],n,c),h=l[++c]),s&&A(u.j).insertBefore(s,U(u.j))}i>a?W(e,null==l[d+1]?null:l[d+1].j,n,l,c,d):c>d&&I(t,i,a)})(n,l,t,s):null!==s?(null!==e.h&&(n.textContent=""),W(n,null,t,s,0,s.length-1)):null!==l&&I(l,0,l.length-1),i&&"svg"===o&&(i=!1)):(r=n["s-cr"])?r.parentNode.textContent=c:e.h!==c&&(n.data=c)},F=e=>{let t,n,l,s,o,i,c=e.childNodes;for(n=0,l=c.length;n<l;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(i=c[s].nodeType,c[s]["s-hn"]!==t["s-hn"]||""!==o){if(1===i&&o===c[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==c[s].textContent.trim()){t.hidden=!0;break}F(t)}},H=[],q=e=>{let t,n,l,o,i,c,r=0,f=e.childNodes,a=f.length;for(;r<a;r++){if(t=f[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(V(n,o)?(i=H.find((e=>e.O===n)),s=!0,n["s-sn"]=n["s-sn"]||o,i?i.S=t:H.push({S:t,O:n}),n["s-sr"]&&H.map((e=>{V(e.O,n["s-sn"])&&(i=H.find((e=>e.O===n)),i&&!e.S&&(e.S=i.S))}))):H.some((e=>e.O===n))||H.push({O:n}));1===t.nodeType&&q(t)}},V=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,z=e=>he(e).M,B=(e,t,n)=>{const l=z(e);return{emit:e=>G(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},G=(e,t,n)=>{const l=$.ce(t,n);return e.dispatchEvent(l),l},J=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.C=t)))},K=(e,t)=>{if(e.t|=16,!(4&e.t))return J(e,e.R),Ce((()=>Q(e,t)));e.t|=512},Q=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>le(n,e,t))),e.u=null),l=le(n,"componentWillLoad")):l=le(n,"componentWillUpdate"),l=se(l,(()=>le(n,"componentWillRender"))),se(l,(()=>X(e,n,t)))},X=async(e,t,n)=>{const l=e.M,s=l["s-rc"];n&&(e=>{const t=e._;((e,t)=>{let n=g(t),l=ve.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,s=w.get(e=e.head||e);s||w.set(e,s=new Set),s.has(n)||(e.host&&(t=e.querySelector(`[sty-id="${n}"]`))?t.innerHTML=l:(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link"))),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l])})(e.M.getRootNode(),t)})(e);Y(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>ee(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Y=(e,i)=>{try{c=i,i=i.render&&i.render(),e.t&=-17,e.t|=2,((e,i)=>{const c=e.M,r=e._,f=e.N||O(null,null),a=(e=>e&&e.k===S)(i)?i:j(null,null,i);if(n=c.tagName,r.P&&(a.p=a.p||{},r.P.map((([e,t])=>a.p[t]=c[e]))),a.k=null,a.t|=4,e.N=a,a.j=f.j=c,t=c["s-cr"],l=0!=(1&r.t),s=!1,D(f,a),$.t|=1,o){let e,t,n,l,s,o;q(a.j);let i=0;for(;i<H.length;i++)e=H[i],t=e.O,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<H.length;i++)if(e=H[i],t=e.O,e.S){for(l=e.S.parentNode,s=e.S.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&F(a.j),$.t&=-2,H.length=0})(e,i)}catch(r){be(r,e.M)}return c=null,null},Z=()=>c,ee=e=>{const t=e.M,n=e.i,l=e.R;le(n,"componentDidRender"),64&e.t?le(n,"componentDidUpdate"):(e.t|=64,oe(t),le(n,"componentDidLoad"),e.T(t),l||ne()),e.W(t),e.C&&(e.C(),e.C=void 0),512&e.t&&Me((()=>K(e,!1))),e.t&=-517},te=e=>{{const t=he(e),n=t.M.isConnected;return n&&2==(18&t.t)&&K(t,!1),n}},ne=()=>{oe(u.documentElement),Me((()=>G(f,"appload",{detail:{namespace:"ks-components"}})))},le=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){be(l)}},se=(e,t)=>e&&e.then?e.then(t):t(),oe=e=>e.classList.add("hydrated"),ie=(e,t,n,l,s,o,i)=>{let c,r,f,a;if(1===o.nodeType){for(c=o.getAttribute("c-id"),c&&(r=c.split("."),r[0]!==i&&"0"!==r[0]||(f={t:0,I:r[0],L:r[1],U:r[2],A:r[3],k:o.tagName.toLowerCase(),j:o,p:null,m:null,g:null,v:null,h:null},t.push(f),o.removeAttribute("c-id"),e.m||(e.m=[]),e.m[f.A]=f,e=f,l&&"0"===f.U&&(l[f.A]=f.j))),a=o.childNodes.length-1;a>=0;a--)ie(e,t,n,l,s,o.childNodes[a],i);if(o.shadowRoot)for(a=o.shadowRoot.childNodes.length-1;a>=0;a--)ie(e,t,n,l,s,o.shadowRoot.childNodes[a],i)}else if(8===o.nodeType)r=o.nodeValue.split("."),r[1]!==i&&"0"!==r[1]||(c=r[0],f={t:0,I:r[1],L:r[2],U:r[3],A:r[4],j:o,p:null,m:null,g:null,v:null,k:null,h:null},"t"===c?(f.j=o.nextSibling,f.j&&3===f.j.nodeType&&(f.h=f.j.textContent,t.push(f),o.remove(),e.m||(e.m=[]),e.m[f.A]=f,l&&"0"===f.U&&(l[f.A]=f.j))):f.I===i&&("s"===c?(f.k="slot",o["s-sn"]=r[5]?f.v=r[5]:"",o["s-sr"]=!0,n.push(f),e.m||(e.m=[]),e.m[f.A]=f):"r"===c&&(s["s-cr"]=o,o["s-cn"]=!0)));else if(e&&"style"===e.k){const t=O(null,o.textContent);t.j=o,t.A="0",e.m=[t]}},ce=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)ce(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)ce(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},re=(e,t,n)=>{if(t.D){e.watchers&&(t.F=e.watchers);const l=Object.entries(t.D),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>he(this).H.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=he(e),o=s.M,i=s.H.get(t),c=s.t,r=s.i;if(n=((e,t)=>null==e||k(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.D[t][0]),!(8&c&&void 0!==i||n===i)&&(s.H.set(t,n),r)){if(l.F&&128&c){const e=l.F[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(l){be(l,o)}}))}2==(18&c)&&K(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=he(this);return n.q.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){$.jmp((()=>{const t=n.get(e);this.hasOwnProperty(t)&&(l=this[t],delete this[t]),this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.P.push([e,s]),s}))}}return e},fe=e=>{if(0==(1&$.t)){const t=he(e),n=t._,l=()=>{};if(1&t.t)p(e,t,n.V);else{let l;t.t|=1,l=e.getAttribute("s-id"),l&&((e,t,n,l)=>{const s=e.shadowRoot,o=[],i=l.N=O(t,null);$.B||ce(u.body,$.B=new Map),e["s-id"]=n,e.removeAttribute("s-id"),ie(i,o,[],null,e,e,n),o.map((e=>{const n=e.I+"."+e.L,l=$.B.get(n),o=e.j;l&&""===l["s-en"]&&l.parentNode.insertBefore(o,l.nextSibling),s||(o["s-hn"]=t,l&&(o["s-ol"]=l,o["s-ol"]["s-nr"]=o)),$.B.delete(n)}))})(e,n.$,l,t),l||12&n.t&&ae(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){J(t,t.R=n);break}}n.D&&Object.entries(n.D).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=ge(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.F=s.watchers,re(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(c){be(c)}t.t&=-9,t.t|=128,e()}if(s.style){let e=s.style;const t=g(n);if(!ve.has(t)){const l=()=>{};((e,t,n)=>{let l=ve.get(e);h&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ve.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.R,i=()=>K(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}},ae=e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ue=(e,t)=>{class n extends Array{item(e){return this[e]}}if(8&t.t){const t=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map((e=>1===e.nodeType))}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){const e=t.call(this);if(0==(1&$.t)&&2&he(this).t){const t=new n;for(let n=0;n<e.length;n++){const l=e[n]["s-nr"];l&&t.push(l)}return t}return n.from(e)}})}},$e=(e,t={})=>{const n=[],l=t.exclude||[],s=f.customElements,o=u.head,i=o.querySelector("meta[charset]"),c=u.createElement("style"),r=[];let a,d=!0;Object.assign($,t),$.l=new URL(t.resourcesUrl||"./",u.baseURI).href,$.t|=2,e.map((e=>e[1].map((t=>{const o={t:t[0],$:t[1],D:t[2],V:t[3]};o.D=t[2],o.V=t[3],o.P=[],o.F={};const i=o.$,c=class extends HTMLElement{constructor(e){super(e),me(e=this,o),ue(e,o)}connectedCallback(){a&&(clearTimeout(a),a=null),d?r.push(this):$.jmp((()=>fe(this)))}disconnectedCallback(){$.jmp((()=>(()=>{if(0==(1&$.t)){const e=he(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return he(this).G}};o.J=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,re(c,o,1)))})))),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,i?i.nextSibling:o.firstChild),d=!1,r.length?r.map((e=>e.connectedCallback())):$.jmp((()=>a=setTimeout(ne,30)))},de=new WeakMap,he=e=>de.get(e),pe=(e,t)=>de.set(t.i=e,t),me=(e,t)=>{const n={t:0,M:e,_:t,H:new Map};return n.q=new Promise((e=>n.W=e)),n.G=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],p(e,n,t.V),de.set(e,n)},ye=(e,t)=>t in e,be=(e,t)=>(0,console.error)(e,t),we=new Map,ge=e=>{const t=e.$.replace(/-/g,"_"),n=e.J,l=we.get(n);return l?l[t]:__sc_import_ks_components(`./${n}.entry.js`).then((e=>(we.set(n,e),e[t])),be)},ve=new Map,ke=[],je=[],Oe=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&$.t?Me(xe):$.raf(xe))},Se=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){be(t)}e.length=0},xe=()=>{Se(ke),Se(je),(r=ke.length>0)&&$.raf(xe)},Me=e=>d().then(e),Ce=Oe(je,!0);export{a as C,S as H,e as N,d as a,$e as b,Z as c,u as d,B as e,te as f,z as g,j as h,$ as p,pe as r,f as w}