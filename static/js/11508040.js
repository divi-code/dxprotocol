import{_ as e,c as o,u as s,v as t,e as i}from"./35bc27a3.js";import{s as a}from"./ee7ce8fe.js";import{B as l}from"./1e98e625.js";import{r,j as n,G as d,q as c,H as p,I as m,N as u,O as g,L as b,y as v,u as f,x as y,F as h,a1 as k,K as L,J as j,ab as P,ac as $}from"./5bdea638.js";import"./2b425f2d.js";import"./9b9cf7db.js";import"./c229d341.js";import"./9737f36b.js";const _={class:"kilo-order-list"},x={class:"kilo-order-list-item"},T={class:"title"},A=(e=>(P("data-v-52bf8fe5"),e=e(),$(),e))((()=>v("span",null," | ",-1))),D=["innerHTML"],w={class:"operate"},C={key:1},O=e({__name:"KiloNoPositionClose",props:{visible:{type:Boolean,default:!1},record:{type:Object,default:()=>({})}},emits:["update:visible","callback"],setup(e,{emit:P}){const $=e,{t:O}=o(),{openPositionAction:z}=i(),H=e=>e.isLong&&e.triggerAboveThreshold?">=":e.isLong&&!e.triggerAboveThreshold?"<=":e.isLong||e.triggerAboveThreshold?!e.isLong&&e.triggerAboveThreshold?">=":void 0:"<=",I=s(),{currentQuote:N,openOrderList:B}=a(I),F=r([]),K=e=>new l(e.size).toFixed(2,1),M=n((()=>{let e=[];for(let o in $.record)$.record[o].forEach((s=>{const t=B.value.filter((e=>e.productId==o&&"stop"==e.type&&e.isLong==s));e=e.concat(t)}));return e})),q=()=>{const e=Date.now();I.$patch({alertNoPosition:{timer:e}}),P("update:visible",!1)};return(o,s)=>{const i=d("icon-loading"),a=d("a-button"),l=d("a-empty"),r=d("a-modal");return c(),p(r,{visible:e.visible,onCancel:q,"modal-class":"kilo-market-close-modal","body-class":"kilo-market-close-modal-body","render-to-body":!0,width:"600px","title-align":"start","unmount-on-close":"","mask-closable":!1},{title:m((()=>[u(g(o.$t("closePosition.closeProfitLoss")),1)])),footer:m((()=>[b(a,{type:"primary",size:"medium",onClick:q},{default:m((()=>[u(g(o.$t("closePosition.skip")),1)])),_:1})])),default:m((()=>[v("div",_,[f(M).length?(c(!0),y(h,{key:0},k(f(M),((e,s)=>(c(),y("div",x,[v("div",T,g(o.$t("closePosition.order"))+" "+g(s+1),1),v("div",null,[v("span",{class:L(e.isLong?"down":"up")},g(e.symbol)+" ("+g(e.isLong?o.$t("order.sell"):o.$t("order.buy"))+") ",3),A,v("span",{class:"content",innerHTML:o.$t("closePosition."+((e.isLong?">="==H(e):"<="==H(e))?"content1":"contentStop1"),{a:[H(e),e.triggerPrice," ",f(N)].join(""),b:K(e)+f(N)})},null,8,D)]),v("div",w,[b(a,{type:"outline",size:"medium",onClick:o=>(async e=>{e.loadingDelete=!0;const o=await z([e.index],"cancelDecreaseOrder",2,e.symbol,e.isLong,O(`${t(e.isLong,e.triggerAboveThreshold).text}`));e.loadingDelete=!1,o&&F.value.push(e.index)})(e),disabled:!!e.loadingDelete},{default:m((()=>[e.loadingDelete?(c(),p(i,{key:0})):j("",!0),u(" "+g(o.$t("public.cancel")),1)])),_:2},1032,["onClick","disabled"])])])))),256)):(c(),y("div",C,[b(l)]))])])),_:1},8,["visible"])}}},[["__scopeId","data-v-52bf8fe5"]]);export{O as default};
