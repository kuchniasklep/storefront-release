import{r as s,h as a}from"./p-f66c687e.js";import"./p-83f217d4.js";import{T as l}from"./p-bfe0a730.js";const n=class{constructor(a){s(this,a)}render(){return a(l.Consumer,null,({categories:s})=>a("nav",{class:"uk-section uk-padding-remove uk-light",style:{backgroundColor:"#00426e",maxHeight:"32px"}},a("ul",{class:"uk-subnav uk-visible@m uk-margin-remove uk-text-small",style:{padding:"5px 0"}},s.map(s=>a("li",null,a("a",{href:s.url},s.name,s.children?a("span",{"uk-icon":"icon:  triangle-down"}):null),s.children?a("div",{"uk-dropdown":"offset: 5"},a("ul",{class:"uk-nav uk-dropdown-nav"},s.children.map(s=>a("li",null,a("a",{href:s.url},s.name))))):null)))))}};export{n as ks_navbar_categories}