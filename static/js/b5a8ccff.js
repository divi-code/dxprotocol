import{s}from"./ee7ce8fe.js";import{_ as a,b as t,m as i,u as e,y as n,I as l,g as o}from"./35bc27a3.js";import{r as p,j as r,C as c,n as u,G as m,q as v,x as d,u as h,y as T,L as j,I as y,O as k,J as b,F as f}from"./5bdea638.js";import"./1e98e625.js";import"./9b9cf7db.js";import"./2b425f2d.js";import"./c229d341.js";import"./9737f36b.js";const I={key:0,class:"top-tips"},_=["src"],L={key:0},w={key:1},g=["innerHTML"],x=a({__name:"KiloTestnetTopTip",emits:["isLoaded"],setup(a,{emit:x}){const M=t(),{switchNetwork:$}=i(),C=p(!1),D=e(),{chainId:H,walletInfo:q}=s(D),F=r((()=>{var s;return null==(s=n[H.value])?void 0:s.mainnet})),G=async()=>{var s;if(null==(s=q.value)?void 0:s.account)try{await $(l),J()}catch(a){}else C.value=!0},J=()=>{M.push({path:"/contest"})};return c((()=>{u((()=>{x("isLoaded",!0)}))})),(s,a)=>{const t=m("i18n-t"),i=m("kiloWalletModal");return v(),d(f,null,[!h(F)&&h(l)?(v(),d("div",I,[T("img",{class:"chain-icon",src:h(o)(`chain/${h(H)}.svg`),alt:"",srcset:""},null,8,_),"5611"!=h(H)?(v(),d("div",L,[j(t,{keypath:"public.testnetTopTips"},{a:y((()=>[T("span",{class:"params",onClick:G},k(s.$t("public.testnetTopTipsParams")),1)])),_:1})])):(v(),d("div",w,[j(t,{keypath:""}),T("span",{innerHTML:s.$t("public.testnetTopTips5611")},null,8,g)]))])):b("",!0),j(i,{visible:C.value,"onUpdate:visible":a[0]||(a[0]=s=>C.value=s),chainID:h(l),next:J},null,8,["visible","chainID"])],64)}}},[["__scopeId","data-v-822c1f8c"]]);export{x as default};
