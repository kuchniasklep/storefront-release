import{c as e,f as t}from"./index-aa615a50.js";const s=e=>!("isConnected"in e)||e.isConnected,n=(()=>{let e;return(...t)=>{e&&clearTimeout(e),e=setTimeout((()=>{e=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(s))})(...t)}),2e3)}})(),o=(s,o)=>{const r=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{s=new Map(Object.entries(null!=e?e:{})),n.reset.forEach((e=>e()))},r=e=>(n.get.forEach((t=>t(e))),s.get(e)),c=(e,o)=>{const r=s.get(e);t(o,r,e)&&(s.set(e,o),n.set.forEach((t=>t(e,o,r))))},a="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>r(t),ownKeys:()=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(c(t,s),!0)}),i=(e,t)=>(n[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(n[e],t)});return{state:a,get:r,set:c,on:i,onChange:(t,s)=>{const n=i("set",((e,n)=>{e===t&&s(n)})),o=i("reset",(()=>s(e[t])));return()=>{n(),o()}},use:(...e)=>e.forEach((e=>{e.set&&i("set",e.set),e.get&&i("get",e.get),e.reset&&i("reset",e.reset)})),dispose:()=>{n.dispose.forEach((e=>e())),o()},reset:o}})(s,o);return(({on:s})=>{const o=new Map;"function"==typeof e&&(s("dispose",(()=>{o.clear()})),s("get",(t=>{const s=e();s&&((e,t,s)=>{const n=e.get(t);n?n.includes(s)||n.push(s):e.set(t,[s])})(o,t,s)})),s("set",(e=>{const s=o.get(e);s&&o.set(e,s.filter(t)),n(o)})),s("reset",(()=>{o.forEach((e=>e.forEach(t))),n(o)})))})(r),r};export{o as c}