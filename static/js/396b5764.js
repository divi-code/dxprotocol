import{_ as a,u as e,m as l,B as t,g as s}from"./35bc27a3.js";import{s as n}from"./ee7ce8fe.js";import{r as i,G as o,q as c,H as m,I as u,N as d,O as r,y as p,x as v,F as k,a1 as b,u as w,K as x,J as f}from"./5bdea638.js";import"./2b425f2d.js";import"./1e98e625.js";import"./9b9cf7db.js";import"./c229d341.js";import"./9737f36b.js";const g={class:"wallet-list"},j=["src"],C=["src"],M=a({__name:"kiloWalletModal",props:{visible:{type:Boolean,default:!1},chainID:{type:[Number,String],default:""},next:{type:Function,default:()=>{}}},emits:["update:visible"],setup(a,{emit:M}){const _=a,y=e(),{chainId:I}=n(y),{connectors:W,connectWallet:h}=l(),$=i({MetaMask:"kiloex-connect-wallet kiloex-connect-wallet-metamask",WalletConnect:"kiloex-connect-wallet kiloex-connect-wallet-WalletConnect","Coinbase Wallet":"kiloex-connect-wallet kiloex-connect-wallet-CoinbaseWallet"}),B=async a=>{await h(a,_.chainID||I.value),_.next&&_.next(),M("update:visible",!1)};return(e,l)=>{const n=o("a-button"),i=o("a-modal");return c(),m(i,{visible:a.visible,"modal-class":"wallet-modal",onCancel:l[0]||(l[0]=a=>M("update:visible",!1)),footer:!1,"title-align":"start",width:"343px","unmount-on-close":!1},{title:u((()=>[d(r(e.$t("wallet.connectWallet")),1)])),default:u((()=>[p("div",g,[(c(!0),v(k,null,b(w(W),(a=>(c(),v(k,null,[w(t)()||"injected"==a.id?f("",!0):(c(),m(n,{long:"",class:x(["wallet-list-btn",$.value[a.name]]),key:a.id,onClick:e=>B(a)},{default:u((()=>[p("div",{class:x(["btn-content",$.value[a.name]])},[p("img",{class:x($.value[a.name]),src:w(s)(`svg/${a.id}.svg`),alt:"",srcset:""},null,10,j),p("span",null,r(a.name),1)],2)])),_:2},1032,["onClick","class"])),w(t)()&&"metaMask"!=a.id?(c(),m(n,{long:"",class:x(["wallet-list-btn",$.value[a.name]]),key:a.id,onClick:e=>B(a)},{default:u((()=>[p("div",{class:x(["btn-content",$.value[a.name]])},[p("img",{class:x($.value[a.name]),src:w(s)(`svg/${"MetaMask"==a.name||"Injected"==a.name?"metaMask":a.id}.svg`),alt:"",srcset:""},null,10,C),p("span",null,r("Injected"==a.name?"MetaMask":a.name),1)],2)])),_:2},1032,["onClick","class"])):f("",!0)],64)))),256))])])),_:1},8,["visible"])}}},[["__scopeId","data-v-59271a82"]]);export{M as default};
