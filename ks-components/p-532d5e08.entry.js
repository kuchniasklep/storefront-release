import{r as t,h as s,g as i}from"./p-cb802b7f.js";const r=class{constructor(s){t(this,s),this.mobile=!1}componentDidLoad(){this.root.style.display="block",this.root.style.width="100%"}resizeHandler(){this.mobile=window.innerWidth<800}componentWillLoad(){this.resizeHandler()}StepStyle(t){const s={padding:this.mobile?"20px":"30px",backgroundColor:"#252525",color:"white",borderLeft:"1px solid #404040"},i=Object.assign(Object.assign({},s),{backgroundColor:"#404040",borderLeft:"1px solid #404040"});return this.mobile?s:t==this.current?i:s}render(){return[s("div",{class:"uk-text-center uk-flex uk-flex-evenly ks-text-decorated "+(this.mobile?"uk-child-width-1-1":"uk-child-width-1-3"),style:{fontSize:"16px",backgroundColor:"#252525"}},this.mobile&&0!=this.current?null:s("div",{style:this.StepStyle(0)},s("span",{"uk-icon":"icon: cart; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-3px)"}})," Koszyk"),this.mobile&&1!=this.current?null:s("div",{style:this.StepStyle(1)},s("span",{"uk-icon":"icon: user; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-2px)"}})," Dane do wysłki"),this.mobile&&2!=this.current?null:s("div",{style:this.StepStyle(2)},s("span",{"uk-icon":"icon: check; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-1px)"}})," Potwierdzenie"))]}get root(){return i(this)}};export{r as ks_order_progress}