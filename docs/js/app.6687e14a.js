(function(e){function a(a){for(var l,o,s=a[0],r=a[1],u=a[2],b=0,p=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);c&&c(a);while(p.length)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],l=!0,s=1;s<t.length;s++){var r=t[s];0!==n[r]&&(l=!1)}l&&(i.splice(a--,1),e=o(o.s=t[0]))}return e}var l={},n={app:0},i=[];function o(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=l,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)o.d(t,l,function(a){return e[a]}.bind(null,l));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/screen-farm/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var c=r;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("70c6");var l=t("7a23"),n=(t("99af"),{class:"project"}),i=Object(l["f"])("h1",null,"SCREEN-FARM",-1),o=Object(l["f"])("hr",{class:"_mbs _mts"},null,-1),s={class:"layer-header"},r=Object(l["f"])("span",{class:"num"},"01",-1),u={key:0,class:"layer-blurb"},c={class:"color-options"},b={class:"question-label"},p={key:0,class:"question-sub-label"},h={class:"sublabel"},d={key:0,class:"layer-header"},f={class:"num"},y={key:1,class:"layer-blurb"},g={class:"question-label"},v={key:0,class:"question-sub-label"},m=Object(l["f"])("hr",{class:"_mbs _mts"},null,-1),j={key:1,class:"canvas-spacer color-palette"};function O(e,a,t,O,L,S){var w=Object(l["i"])("quilt");return Object(l["g"])(),Object(l["c"])("div",n,[Object(l["f"])("form",{class:"_ptm _pbs",onSubmit:a[2]||(a[2]=Object(l["m"])((function(){}),["prevent"]))},[i,o,(Object(l["g"])(!0),Object(l["c"])(l["a"],null,Object(l["h"])(L.intro,(function(e,a){return Object(l["g"])(),Object(l["c"])("p",{key:a,class:"_mbs"},Object(l["j"])(e),1)})),128)),Object(l["f"])("h2",s,[r,Object(l["e"])(Object(l["j"])(L.ageType.heading),1)]),L.ageType.subHeading?(Object(l["g"])(),Object(l["c"])("p",u,Object(l["j"])(L.ageType.subHeading),1)):Object(l["d"])("",!0),Object(l["f"])("div",c,[Object(l["f"])("p",b,Object(l["j"])(L.ageType.label),1),L.ageType.subLabel?(Object(l["g"])(),Object(l["c"])("p",p,Object(l["j"])(L.ageType.subLabel),1)):Object(l["d"])("",!0),(Object(l["g"])(!0),Object(l["c"])(l["a"],null,Object(l["h"])(L.ageType.options,(function(e,t){return Object(l["g"])(),Object(l["c"])("div",{key:"".concat(t,"_ageType"),class:"radio-wrap"},[Object(l["l"])(Object(l["f"])("input",{type:"radio",id:"".concat(L.ageType.id,"_").concat(t),name:L.ageType.id,value:e.value,"onUpdate:modelValue":a[1]||(a[1]=function(e){return L.ageType.value=e}),required:0===t},null,8,["id","name","value","required"]),[[l["k"],L.ageType.value]]),Object(l["f"])("label",{for:"".concat(L.ageType.id,"_").concat(t)},[Object(l["f"])("span",null,Object(l["j"])(e.label),1),Object(l["f"])("span",h,Object(l["j"])(e.subLabel),1)],8,["for"])])})),128))]),S.colors?(Object(l["g"])(!0),Object(l["c"])(l["a"],{key:1},Object(l["h"])(L.patternLayers,(function(e,a){return Object(l["g"])(),Object(l["c"])("div",{class:"question-group",key:"question_set_".concat(a)},[L.layerHeadings[a].heading?(Object(l["g"])(),Object(l["c"])("h2",d,[Object(l["f"])("span",f,"0"+Object(l["j"])(a+2),1),Object(l["e"])(Object(l["j"])(L.layerHeadings[a].heading),1)])):Object(l["d"])("",!0),L.layerHeadings[a].subHeading?(Object(l["g"])(),Object(l["c"])("p",y,Object(l["j"])(L.layerHeadings[a].subHeading),1)):Object(l["d"])("",!0),(Object(l["g"])(!0),Object(l["c"])(l["a"],null,Object(l["h"])(e,(function(e,a){return Object(l["g"])(),Object(l["c"])(l["a"],null,[e?(Object(l["g"])(),Object(l["c"])("div",{key:"".concat(a,"_family_makup"),class:"question"},[Object(l["f"])("p",g,Object(l["j"])(e.label),1),e.subLabel?(Object(l["g"])(),Object(l["c"])("p",v,Object(l["j"])(e.subLabel),1)):Object(l["d"])("",!0),(Object(l["g"])(!0),Object(l["c"])(l["a"],null,Object(l["h"])(e.options,(function(t,n){return Object(l["g"])(),Object(l["c"])("div",{key:"".concat(n,"_").concat(a,"_family_makeup"),class:"radio-wrap"},[Object(l["l"])(Object(l["f"])("input",{type:"radio",id:"".concat(e.id,"_").concat(n),name:e.id,value:t.value,"onUpdate:modelValue":function(a){return e.value=a},required:0===n},null,8,["id","name","value","onUpdate:modelValue","required"]),[[l["k"],e.value]]),Object(l["f"])("label",{for:"".concat(e.id,"_").concat(n)},Object(l["j"])(t.label),9,["for"])])})),128)),m])):Object(l["d"])("",!0)],64)})),256))])})),128)):Object(l["d"])("",!0)],32),S.colors&&S.patternsStarted?(Object(l["g"])(),Object(l["c"])(w,{"quilt-patterns":S.quiltPatterns,colors:S.colors,key:L.key},null,8,["quilt-patterns","colors"])):S.colors?(Object(l["g"])(),Object(l["c"])("div",j,[(Object(l["g"])(!0),Object(l["c"])(l["a"],null,Object(l["h"])(S.colors,(function(e,a,t){return Object(l["g"])(),Object(l["c"])("div",{class:"grid-".concat(t+1),key:"grid-".concat(t+1),style:"background-color:".concat(e,";")},null,6)})),128))])):(Object(l["g"])(),Object(l["c"])("div",{key:2,class:"canvas-spacer",style:"background-image: url(".concat(L.quiltImage,")")},null,4))])}t("d81d"),t("7db0"),t("0481");var L=t("8acb"),S=t.n(L),w={class:"quilt-wrap"},q=Object(l["f"])("div",{class:"quilt"},null,-1);function k(e,a,t,n,i,o){return Object(l["g"])(),Object(l["c"])("div",w,[q])}t("caad"),t("cb29");var C=t("3425"),B={name:"Quilt",props:{colors:{type:Object,required:!0},quiltPatterns:{type:Array,required:!0}},methods:{buildQuilt:function(e){var a,t=this,l=4;a=window.innerWidth>window.innerHeight?window.innerHeight/l:window.innerWidth/l,a=Math.round(a);var n=function(a,t,l){e.triangle(a,t,a+l/2,t+l/2,a,t+l)},i=function(a,t,l){e.triangle(a+l,t,a+l/2,t+l/2,a+l,t+l)},o=function(a,t,l){e.triangle(a,t+l,a+l/2,t+l/2,a+l,t+l)},s=function(a,t,l){e.triangle(a,t,a+l/2,t+l/2,a+l,t)};function r(e,a,t){n(e,a,t),i(e,a,t)}function u(e,a,t){o(e,a,t),s(e,a,t)}function c(e,a,t){n(e,a,t),o(e,a,t)}function b(e,a,t){s(e,a,t),n(e,a,t)}function p(e,a,t){o(e,a,t),i(e,a,t)}function h(e,a,t){s(e,a,t),i(e,a,t)}function d(e,a,t){s(e,a,t),n(e,a,t),o(e,a,t)}function f(e,a,t){s(e,a,t),i(e,a,t),o(e,a,t)}function y(e,a,t){n(e,a,t),i(e,a,t),o(e,a,t)}function g(e,a,t){s(e,a,t),i(e,a,t),n(e,a,t)}function v(a,t,l){e.rect(a,t,l,l)}function m(e,a,t){var l,n;l=2===t||3===t?2*a:0,n=1===t||2===t?0:2*a;for(var i=n,o=n+a,s=l,r=l+a,u=[[s,i,a],[r,i,a],[r,o,a],[s,o,a]],c=0;c<4;c++)e[c]&&e[c](u[c][0],u[c][1],u[c][2],u[c][3])}function j(e){for(var t=0;t<l;t++){var n=e.map((function(e){return e?window[e.shapeList][e.shape]:void 0}));m(n,a,t+1),O(e);for(var i=[],o=0;o<l;o++)e[o]&&(i.includes(e[o].shapeList)||(L(window[e[o].shapeList]),i.push(e[o].shapeList)))}}function O(e){var a=e.pop()||null;e.unshift(a)}function L(e){var a=e.shift();e.push(a)}window.triangleSet=[s,i,o,n],window.hourglassSet=[u,r,u,r],window.halfSet=[h,p,c,b],window.steepleSet=[g,f,y,d],window.fullsquareSet=[v,v,v,v],e.setup=function(){e.createCanvas(l*a,l*a),e.noStroke(0),e.blendMode(e.MULTIPLY);for(var n=0;n<t.quiltPatterns.length;n++)e.fill(t.quiltPatterns[n].color),j(t.quiltPatterns[n].pattern)}}},mounted:function(){new C(this.buildQuilt,this.$el.querySelector(".quilt"))},beforeUnmount:function(){this.$el.remove()}};B.render=k;var F=B,A=["Screen–Farm is a generative design tool that uses questions about your family history to output a quilt pattern that uniquely represents your heritage. A new take on the family tree.","During a time when relationships are most valuable, the intention of this project is to create a visual representation of the many different types of family in the world today; celebrating their make-up, community, culture, and heritage."],_={colorA:"#BA1632",colorB:"#73CDFF",colorC:"#D0FD35",colorBackground:"#C9FCB8"},H={colorA:"#C9FCB8",colorB:"#73CDFF",colorC:"#1B427B",colorBackground:"#FFFD83"},D={colorA:"#CE7B91",colorB:"#DAF1FC",colorC:"#A7C8C5",colorBackground:"#846885"},P={colorA:"#371265",colorB:"#C1ABCF",colorC:"#C03750",colorBackground:"#A4CFE8"},T={colorA:"#4F6D7A",colorB:"#DD6E42",colorC:"#C0D6DF",colorBackground:"#E8DAB2"},N={colorA:"#CBD4C2",colorB:"#247BA0",colorC:"#C3B299",colorBackground:"#50514F"},E={colorA:"#1B427B",colorB:"#73CDFF",colorC:"#FFB36D",colorBackground:"#FBFAD2"},W={colorA:"#BA1632",colorB:"#DD6E42",colorC:"#FFFD83",colorBackground:"#FBFAD2"},x={colorA:"#D6E3F8",colorB:"#FEF5EF",colorC:"#9D5C63",colorBackground:"#C1ABCF"},M={id:"age_type",label:"What is your age?",heading:"Color Palette",subHeading:"For the purpose of this activity, your age determines the color palette of your quilt. This is important because what you know and how you relate to your family can differ depending on what stage of life you are in.",subLabel:null,value:null,options:[{value:_,label:"Under 12 years old"},{value:H,label:"12-17 years old"},{value:D,label:"18-24 years old"},{value:P,label:"25-34 years old"},{value:T,label:"35-44 years old"},{value:N,label:"45-54 years old"},{value:E,label:"55-64 years old"},{value:W,label:"65-74 years old"},{value:x,label:"75 years or older"}]},R={id:"familyType",label:"What type of family did you grow up in?",subLabel:null,value:void 0,options:[{value:{shapeList:"triangleSet",shape:0},label:"Nuclear"},{value:{shapeList:"halfSet",shape:3},label:"Single-Parent"},{value:{shapeList:"triangleSet",shape:1},label:"Blended/ Step"},{value:{shapeList:"halfSet",shape:1},label:"Grandparent"},{value:{shapeList:"steepleSet",shape:1},label:"Extended"},{value:{shapeList:"hourglassSet",shape:1},label:"Other"}]},U={id:"familySize",label:"How many people are in your immediate family?",subLabel:"This includes: birth, adoptive, half, and step family members.",value:void 0,options:[{value:{shapeList:"halfSet",shape:2},label:"1"},{value:{shapeList:"halfSet",shape:0},label:"2"},{value:{shapeList:"triangleSet",shape:3},label:"3"},{value:{shapeList:"triangleSet",shape:0},label:"4-6"},{value:{shapeList:"steepleSet",shape:2},label:"7-9"},{value:{shapeList:"hourglassSet",shape:0},label:"10+"}]},I={id:"community",label:"What community does your family live in?",subLabel:null,value:null,options:[{value:{shapeList:"triangleSet",shape:1},label:"Urban"},{value:{shapeList:"halfSet",shape:3},label:"Rural"},{value:{shapeList:"halfSet",shape:1},label:"Suburban"}]},V={heading:"Family Makeup",subHeading:"Your family make-up is a reflection of the family type, size, and community you were raised in - or for parents - what you raised your children in.",layers:[R,U,null,I]},Y={id:"origin_countries",label:"How many countries does your family identify their heritage with?",subLabel:null,value:void 0,options:[{value:{shapeList:"halfSet",shape:3},label:"1"},{value:{shapeList:"triangleSet",shape:1},label:"2"},{value:{shapeList:"hourglassSet",shape:1},label:"3"},{value:{shapeList:"triangleSet",shape:2},label:"4"},{value:{shapeList:"steepleSet",shape:0},label:"5"},{value:{shapeList:"hourglassSet",shape:0},label:"6+"}]},Q={id:"language_count",label:"How many languages are spoken in your family?",subLabel:null,value:void 0,options:[{value:null,label:"1"},{value:{shapeList:"triangleSet",shape:3},label:"2"},{value:{shapeList:"halfSet",shape:3},label:"3+"}]},$={id:"migration",label:"Why did your family come to live in your current country?",subLabel:null,value:void 0,options:[{value:{shapeList:"steepleSet",shape:1},label:"N/A, Native"},{value:{shapeList:"triangleSet",shape:3},label:"Oppurtunity"},{value:{shapeList:"hourglassSet",shape:1},label:"Education"},{value:{shapeList:"halfSet",shape:1},label:"Love"},{value:{shapeList:"halfSet",shape:3},label:"Religion"},{value:{shapeList:"triangleSet",shape:1},label:"Political / War"},{value:{shapeList:"steepleSet",shape:2},label:"Environmental"},{value:{shapeList:"hourglassSet",shape:0},label:"Other"}]},z={id:"generations",label:"How many family generations have lived in your current country?",subLabel:null,value:void 0,options:[{value:{shapeList:"halfSet",shape:2},label:"4+"},{value:{shapeList:"triangleSet",shape:0},label:"3"},{value:null,label:"2"},{value:{shapeList:"hourglassSet",shape:1},label:"1"}]},J={heading:"Family Heritage",subHeading:"Family heritage is important to many of us. Where we came from and our cultural experiences play a big role in shaping our perspectives on the world.",layers:[Y,Q,$,z]},G={id:"religious_preference",label:"What are your family's religious beliefs?",subLabel:null,value:void 0,options:[{value:{shapeList:"halfSet",shape:2},label:"Religious/ Traditional"},{value:{shapeList:"triangleSet",shape:0},label:"Religious/ Non-Traditional"},{value:{shapeList:"triangleSet",shape:3},label:"Non-Religious/ Traditional"},{value:{shapeList:"hourglassSet",shape:0},label:"Non-Religious/ Non-Traditional"}]},K={id:"athleticism",label:"Which of these attributes best describe your family?",subLabel:null,value:void 0,options:[{value:{shapeList:"triangleSet",shape:0},label:"Athletic"},{value:{shapeList:"hourglassSet",shape:1},label:"Competitive"},{value:null,label:"Neither"},{value:{shapeList:"triangleSet",shape:2},label:"Both"}]},X={id:"creativity",label:"Which of these attributes best describe your family?",subLabel:null,value:void 0,options:[{value:{shapeList:"triangleSet",shape:1},label:"Creative"},{value:{shapeList:"steepleSet",shape:3},label:"Academic"},{value:null,label:"Neither"},{value:{shapeList:"triangleSet",shape:3},label:"Both"}]},Z={heading:"Family Attributes",subHeading:"Some of the most interesting aspects about our family can be found in how we spend our free time. Does your family pray or meditate? Is your schedule constantly booked with local sports games? Are you a family of artists?",layers:[G,null,K,X]},ee={id:"time_spent",label:"Do you enjoy spending time with your family?",subLabel:null,value:void 0,options:[{value:{shapeList:"triangleSet",shape:0},label:"Yes"},{value:{shapeList:"triangleSet",shape:1},label:"Sometimes"},{value:null,label:"No"}]},ae={id:"trust_level",label:"Do you have a family member you can confide in?",subLabel:null,value:void 0,options:[{value:{shapeList:"halfSet",shape:0},label:"Yes"},{value:{shapeList:"halfSet",shape:2},label:"Sometimes"},{value:null,label:"No"}]},te={id:"closeness",label:"How close would you consider your family?",subLabel:null,value:void 0,options:[{value:{shapeList:"hourglassSet",shape:1},label:"Not Close, Detached"},{value:{shapeList:"halfSet",shape:0},label:"Somewhat Close"},{value:null,label:"Neutral"},{value:{shapeList:"triangleSet",shape:3},label:"Close"},{value:{shapeList:"steepleSet",shape:3},label:"Very Close"}]},le={heading:"Family Closeness",subHeading:"For this final set of questions, reflect on your personal relationship with the people in your family.",layers:[ee,ae,te]};function ne(e){var a=e;while(a.length<4)a.push(null);return a.map((function(e){return e?e.value:null}))}var ie={name:"App",components:{quilt:F},data:function(){return{key:0,quiltImage:S.a,intro:A,ageType:M,layerHeadings:[{heading:V.heading,subHeading:V.subHeading},{heading:J.heading,subHeading:J.subHeading},{heading:Z.heading,subHeading:Z.subHeading},{heading:le.heading,subHeading:le.subHeading}],patternLayers:[V.layers,J.layers,Z.layers,le.layers]}},computed:{colors:function(){return this.ageType.value},quiltPatternLayerA:function(){return ne(this.patternLayers[0])},quiltPatternLayerB:function(){return ne(this.patternLayers[1])},quiltPatternLayerC:function(){return ne(this.patternLayers[2])},quiltPatternLayerD:function(){return ne(this.patternLayers[3])},quiltPatterns:function(){return this.colors?[{pattern:this.quiltPatternLayerA,color:this.colors.colorA},{pattern:this.quiltPatternLayerB,color:this.colors.colorB},{pattern:this.quiltPatternLayerC,color:this.colors.colorC},{pattern:this.quiltPatternLayerD,color:this.colors.colorBackground}]:[]},patternsStarted:function(){var e=this.quiltPatterns.map((function(e){return e.pattern}));return void 0!==e.flat().find((function(e){return!!e}))}},watch:{quiltPatterns:{deep:!0,handler:function(){var e=this.$el.querySelector("canvas");e&&e.remove(),this.key++}}}};ie.render=O;var oe=ie;Object(l["b"])(oe).mount("#app")},"70c6":function(e,a,t){},"8acb":function(e,a,t){e.exports=t.p+"img/quilting.748821a5.jpg"}});
//# sourceMappingURL=app.6687e14a.js.map