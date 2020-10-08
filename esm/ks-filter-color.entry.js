import { r as registerInstance, h } from './index-22b73bd9.js';

const ColorList = [
  { name: "czarny", color: "#000000" },
  { name: "biały", color: "#f2f2f2" },
  { name: "platynowy", color: "#afafaf" },
  { name: "czerwony", color: "#E93731" },
  { name: "bordowy", color: "#750027" },
  { name: "brązowy", color: "#633526" },
  { name: "fioletowy", color: "#7D6098" },
  { name: "niebieski", color: "#0483e5" },
  { name: "pomarańczowy", color: "#ffa01c" },
  { name: "kremowy", color: "#ffddb7" },
  { name: "różowy", color: "#F8A8B9" },
  { name: "szary", color: "#757575" },
  { name: "miętowy", color: "#59CDA5" },
  { name: "zielony", color: "#97DB18" },
  { name: "żółty", color: "#fff547" },
  { name: "beżowy", color: "#B5977F" },
  { name: "srebrny", color: "#919191", material: "metal" },
  { name: "miedziany", color: "#c97450", material: "metal" },
  { name: "złoty", color: "#eda007", material: "metal" },
  { name: "przezroczysty", color: "#69c0e6", material: "metal" },
  { name: "przeźroczysty", color: "#69c0e6", material: "metal" },
  { name: "naturalny", color: "#dba685", material: "wood" },
  { name: "orzechowy", color: "#c97450", material: "wood" },
  { name: "wielokolorowy", color: "", material: "multicolor" },
  { name: "kolorowy", color: "", material: "multicolor" }
];

const FilterColor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.active = false;
    this.size = 16;
    this.metal = [
      h("defs", null, h("linearGradient", { id: "Linear1", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(8,8,-8,8,13,13)" }, h("stop", { offset: "0", style: { stopColor: "white", stopOpacity: "0.4" } }), h("stop", { offset: "1", style: { stopColor: "white", stopOpacity: "0" } }))),
      h("g", { transform: "matrix(1,0,0,1,-5,-29)" }, h("g", { transform: "matrix(1,0,0,1,0,24)" }, h("path", { d: "M21,21L5,21L21,5L21,21Z", style: { fill: "url(#Linear1)" } })))
    ];
    this.wood = [
      h("g", { transform: "matrix(0.6,0,0,0.6,-0,-0)" }, h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "3px" } }), h("g", { transform: "matrix(2.30024,0,0,2.30024,-37.2311,-37.0348)" }, h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "1.3px" } })), h("g", { transform: "matrix(3.70926,0,0,3.70926,-77.5769,-77.168)" }, h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "0.94px" } })), h("g", { transform: "matrix(5.16472,0,0,5.16472,-119.253,-118.624)" }, h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "0.77px" } })))
    ];
    this.multicolor = [
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#fe4a49" }, transform: "translate(0 0)" }),
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#2ab7ca" }, transform: "translate(" + this.size / 2 + " 0)" }),
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#fed766" }, transform: "translate(0 " + this.size / 2 + ")" }),
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#e6e6ea" }, transform: "translate(" + this.size / 2 + " " + this.size / 2 + ")" })
    ];
  }
  componentWillLoad() {
    let found = ColorList.filter(c => c.name.includes(this.color));
    if (found.length > 0) {
      this.hex = found[0].color;
      this.material = found[0].material;
    }
  }
  render() {
    return [
      h("label", null, h("svg", { width: this.size, height: this.size }, h("rect", { width: this.size, height: this.size, style: { fill: this.hex } }), this.material == "metal" ? this.metal : null, this.material == "wood" ? this.wood : null, this.material == "multicolor" ? this.multicolor : null), h("input", { style: { marginTop: "-2px" }, class: "uk-checkbox", name: this.name + "[" + this.filterId + "]", type: "checkbox", checked: this.active }), " ", this.color),
      h("br", null)
    ];
  }
};

export { FilterColor as ks_filter_color };
