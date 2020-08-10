import{r as t,h as s,g as i}from"./p-cb802b7f.js";const e=class{constructor(s){t(this,s),this.sameAs="",this.regex="",this.regexMessage="",this.novalidate=!1,this.message=""}render(){const t=""==this.message,i=this.email?"email":this.password?"password":"text",e=t?"":"uk-form-danger",a=this.center?" uk-text-center":"",h=this.large?" uk-form-large":"",o=this.emphasis?{borderColor:t?"black":"#e21334",backgroundColor:"white"}:null;return s("div",{class:"uk-margin"},this.label?s("label",{class:"uk-form-label "+(t?"":"uk-text-danger"),style:{marginBottom:"3px",display:"block"}},this.label):null,s("input",{class:"uk-input "+e+a+h,style:o,name:this.name,type:i,placeholder:this.placeholder,value:this.value,onChange:()=>this.Change()}),""!=this.message?s("p",{class:"uk-text-danger",style:{marginTop:"5px"}},this.message):null)}Change(){this.value=this.root.querySelector("input").value,this.novalidate||this.Validate()}MessageWatcher(){this.render()}async IsValid(){return""==this.message}async Validate(){const t=this.root.querySelector("input");let s="";if(this.email&&(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.value.toLowerCase())||(s="Nieprawidłowy adres e-mail.")),this.digits&&(/^([0-9])*$/.test(t.value)||(s="W polu dozwolone są tylko liczby.")),this.price&&(t.value=t.value.replace(",","."),isNaN(parseFloat(t.value))||(t.value=parseFloat(t.value).toFixed(2)),/^([0-9])*([.][0-9]{1,2})?$/.test(t.value)||(s="W polu dozwolone są tylko ceny bez waluty.")),this.sameAs){const i=this.root.closest("form").querySelector(`input[name='${this.sameAs}']`);t.value!=i.value&&(s+=`Podane ${this.password?"hasła":"pola"} nie są takie same.`)}return""!=this.regex&&""!=this.regexMessage&&(new RegExp(this.regex,"i").test(t.value)||(s+=this.regexMessage)),t.value.length<this.min&&(s+=` Pole wymaga minimum ${this.min} znaków.`),t.value.length>this.max&&(s+=` Pole nie może przekroczyć ${this.max} znaków.`),this.required&&0==t.value.length&&(s="Pole wymagane."),this.message=s,Promise.resolve()}get root(){return i(this)}static get watchers(){return{message:["MessageWatcher"]}}};export{e as ks_input_text}