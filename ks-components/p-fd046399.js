import{e,f as t}from"./p-f66c687e.js";const s=e=>!("isConnected"in e)||e.isConnected,n=(()=>{let e;return(...t)=>{e&&clearTimeout(e),e=setTimeout(()=>{e=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(s))})(...t)},2e3)}})(),r=(()=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const n={dispose:[],get:[],set:[],reset:[]},r=()=>{s=new Map(Object.entries(null!=e?e:{})),n.reset.forEach(e=>e())},o=e=>(n.get.forEach(t=>t(e)),s.get(e)),i=(e,r)=>{const o=s.get(e);t(r,o,e)&&(s.set(e,r),n.set.forEach(t=>t(e,r,o)))},a="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>o(t),ownKeys:()=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(i(t,s),!0)}),c=(e,t)=>(n[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(n[e],t)});return{state:a,get:o,set:i,on:c,onChange:(t,s)=>{const n=c("set",(e,n)=>{e===t&&s(n)}),r=c("reset",()=>s(e[t]));return()=>{n(),r()}},use:(...e)=>e.forEach(e=>{e.set&&c("set",e.set),e.get&&c("get",e.get),e.reset&&c("reset",e.reset)}),dispose:()=>{n.dispose.forEach(e=>e()),r()},reset:r}})({id:"",name:"",breadcrumbs:[],brand:"",brandLink:"",description:"",attributes:[],previousPrice:"",currentPrice:"",shippingPrice:"",shippingTime:"",shippingMessage:"",availability:0,count:1,cartLoading:!1,favouritesLoading:!1,favouritesCompleted:!1,images:[],traitIDs:"",traits:[],catalog:"",model:"",ean:"",negotiate:!1,externalPoints:!1,reviews:{}},void 0);return(({on:s})=>{const r=new Map;"function"==typeof e&&(s("dispose",()=>{r.clear()}),s("get",t=>{const s=e();s&&((e,t,s)=>{const n=e.get(t);n?n.includes(s)||n.push(s):e.set(t,[s])})(r,t,s)}),s("set",e=>{const s=r.get(e);s&&r.set(e,s.filter(t)),n(r)}),s("reset",()=>{r.forEach(e=>e.forEach(t)),n(r)}))})(s),s})();export{r as s}