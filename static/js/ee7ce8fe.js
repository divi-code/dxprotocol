import"./1e98e625.js";import{e as t,r as e,m as n,t as s,i as r,a as o,b as a,g as c,c as i,w as u,d as l,f,o as p,n as h,h as d,j as y}from"./5bdea638.js";var b=!1;let g;const v=t=>g=t,$=Symbol();function _(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,m;function O(){const s=t(!0),r=s.run((()=>e({})));let o=[],a=[];const c=n({install(t){v(c),c._a=t,t.provide($,c),t.config.globalProperties.$pinia=c,a.forEach((t=>o.push(t))),a=[]},use(t){return this._a||b?o.push(t):a.push(t),this},_p:o,_a:null,_e:s,_s:new Map,state:r});return c}(m=j||(j={})).direct="direct",m.patchObject="patch object",m.patchFunction="patch function";const R=()=>{};function S(t,e,n,s=R){t.push(e);const r=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&p(r),r}function E(t,...e){t.slice().forEach((t=>{t(...e)}))}function k(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],a=t[n];_(a)&&_(s)&&t.hasOwnProperty(n)&&!r(s)&&!o(s)?t[n]=k(a,s):t[n]=s}return t}const z=Symbol();const{assign:P}=Object;function w(a,c,i={},f,p,d){let y;const b=P({actions:{}},i),g={deep:!0};let $,m,O,w=n([]),A=n([]);const I=f.state.value[a];let x;function J(t){let e;$=m=!1,"function"==typeof t?(t(f.state.value[a]),e={type:j.patchFunction,storeId:a,events:O}):(k(f.state.value[a],t),e={type:j.patchObject,payload:t,storeId:a,events:O});const n=x=Symbol();h().then((()=>{x===n&&($=!0)})),m=!0,E(w,e,f.state.value[a])}d||I||(f.state.value[a]={}),e({});const M=R;function N(t,e){return function(){v(f);const n=Array.from(arguments),s=[],r=[];let o;E(A,{args:n,name:t,store:H,after:function(t){s.push(t)},onError:function(t){r.push(t)}});try{o=e.apply(this&&this.$id===a?this:H,n)}catch(c){throw E(r,c),c}return o instanceof Promise?o.then((t=>(E(s,t),t))).catch((t=>(E(r,t),Promise.reject(t)))):(E(s,o),o)}}const F={_p:f,$id:a,$onAction:S.bind(null,A),$patch:J,$reset:M,$subscribe(t,e={}){const n=S(w,t,e.detached,(()=>s())),s=y.run((()=>u((()=>f.state.value[a]),(n=>{("sync"===e.flush?m:$)&&t({storeId:a,type:j.direct,events:O},n)}),P({},g,e))));return n},$dispose:function(){y.stop(),w=[],A=[],f._s.delete(a)}},H=l(F);f._s.set(a,H);const q=f._e.run((()=>(y=t(),y.run((()=>c())))));for(const t in q){const e=q[t];if(r(e)&&(!r(C=e)||!C.effect)||o(e))d||(!I||_(B=e)&&B.hasOwnProperty(z)||(r(e)?e.value=I[t]:k(e,I[t])),f.state.value[a][t]=e);else if("function"==typeof e){const n=N(t,e);q[t]=n,b.actions[t]=e}}var B,C;return P(H,q),P(s(H),q),Object.defineProperty(H,"$state",{get:()=>f.state.value[a],set:t=>{J((e=>{P(e,t)}))}}),f._p.forEach((t=>{P(H,y.run((()=>t({store:H,app:f._a,pinia:f,options:b}))))})),I&&d&&i.hydrate&&i.hydrate(H.$state,I),$=!0,m=!0,H}function A(t,e,s){let r,o;const a="function"==typeof e;function u(t,s){const u=c();(t=t||u&&i($,null))&&v(t),(t=g)._s.has(r)||(a?w(r,e,o,t):function(t,e,s,r){const{state:o,actions:a,getters:c}=e,i=s.state.value[t];let u;u=w(t,(function(){i||(s.state.value[t]=o?o():{});const e=d(s.state.value[t]);return P(e,a,Object.keys(c||{}).reduce(((e,r)=>(e[r]=n(y((()=>{v(s);const e=s._s.get(t);return c[r].call(e,e)}))),e)),{}))}),e,s,0,!0),u.$reset=function(){const t=o?o():{};this.$patch((e=>{P(e,t)}))}}(r,o,t));return t._s.get(r)}return"string"==typeof t?(r=t,o=a?s:e):(o=t,r=t.id),u.$id=r,u}function I(t){{t=s(t);const e={};for(const n in t){const s=t[n];(r(s)||o(s))&&(e[n]=a(t,n))}return e}}function x(t,e){var n;return t="object"==typeof(n=t)&&null!==n?t:Object.create(null),new Proxy(t,{get:(t,n,s)=>"key"===n?Reflect.get(t,n,s):Reflect.get(t,n,s)||Reflect.get(e,n,s)})}function J(t,{storage:e,serializer:n,key:s,debug:r}){try{const r=null==e?void 0:e.getItem(s);r&&t.$patch(null==n?void 0:n.deserialize(r))}catch(o){}}function M(t,{storage:e,serializer:n,key:s,paths:r,debug:o}){try{const o=Array.isArray(r)?function(t,e){return e.reduce(((e,n)=>{const s=n.split(".");return function(t,e,n){return e.slice(0,-1).reduce(((t,e)=>/^(__proto__)$/.test(e)?{}:t[e]=t[e]||{}),t)[e[e.length-1]]=n,t}(e,s,function(t,e){return e.reduce(((t,e)=>null==t?void 0:t[e]),t)}(t,s))}),{})}(t,r):t;e.setItem(s,n.serialize(o))}catch(a){}}var N=function(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:s=n},store:r}=e;if(!s)return;const o=(Array.isArray(s)?s.map((e=>x(e,t))):[x(s,t)]).map((({storage:e=localStorage,beforeRestore:n=null,afterRestore:s=null,serializer:o={serialize:JSON.stringify,deserialize:JSON.parse},key:a=r.$id,paths:c=null,debug:i=!1})=>{var u;return{storage:e,beforeRestore:n,afterRestore:s,serializer:o,key:(null!=(u=t.key)?u:t=>t)(a),paths:c,debug:i}}));r.$persist=()=>{o.forEach((t=>{M(r.$state,t)}))},r.$hydrate=({runHooks:t=!0}={})=>{o.forEach((n=>{const{beforeRestore:s,afterRestore:o}=n;t&&(null==s||s(e)),J(r,n),t&&(null==o||o(e))}))},o.forEach((t=>{const{beforeRestore:n,afterRestore:s}=t;null==n||n(e),J(r,t),null==s||s(e),r.$subscribe(((e,n)=>{M(n,t)}),{detached:!0})}))}}();export{N as a,O as c,A as d,I as s};
