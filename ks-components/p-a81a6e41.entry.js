import{r as t,h as e,g as o}from"./p-f748ea6f.js";const s=class{constructor(e){t(this,e)}componentDidLoad(){const t=this.root.querySelector("#filter-overlay");t.addEventListener("pointerdown",(function(e){const o=t.querySelector("div");t.classList.contains("uk-open")&&e.clientX>o.offsetWidth&&UIkit.offcanvas(t).hide()}))}render(){return[e("button",{class:"uk-button uk-button-danger uk-width-1-1",type:"button","uk-toggle":"target: #filter-overlay"},"FILTRUJ"),e("div",{id:"filter-overlay","uk-offcanvas":"overlay: true; bg-close: false;",style:{zIndex:"2147483648"}},e("div",{class:"uk-offcanvas-bar uk-padding-small"},e("div",{class:"uk-flex uk-flex-between uk-flex-top"},e("span",{style:{marginTop:"5px"},class:"uk-text-uppercase"},"Filtrowanie"),e("button",{class:"uk-offcanvas-close",type:"button","uk-close":!0}),e("hr",null)),e("br",null),e("form",{method:"POST",action:this.baseUrl},e("slot",null),e("a",{href:this.baseUrl,class:"uk-button uk-button-secondary uk-width-1-1 uk-margin-top"},"WYCZYŚĆ FILTRY"),e("input",{type:"submit",class:"uk-button uk-button-danger uk-width-1-1 uk-margin-small-top",value:"ZOBACZ FILTRY"}))))]}get root(){return o(this)}};export{s as ks_filter_sidebar}