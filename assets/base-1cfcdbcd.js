import{a7 as p,c as m,B as N,a as $,A as _,u as i}from"./index-864a2738.js";const A=(t,n)=>{if(t.install=e=>{for(const o of[t,...Object.values(n??{})])e.component(o.name,o)},n)for(const[e,o]of Object.entries(n))t[e]=o;return t},D=(t,n)=>(t.install=e=>{t._context=e._context,e.config.globalProperties[n]=t},t),F=t=>(t.install=p,t),v="el",y="is-",r=(t,n,e,o,u)=>{let l=`${t}-${n}`;return e&&(l+=`-${e}`),o&&(l+=`__${o}`),u&&(l+=`--${u}`),l},V=Symbol("namespaceContextKey"),B=t=>{const n=t||(m()?N(V,$(v)):$(v));return _(()=>i(n)||v)},G=(t,n)=>{const e=B(n);return{namespace:e,b:(s="")=>r(e.value,t,s,"",""),e:s=>s?r(e.value,t,"",s,""):"",m:s=>s?r(e.value,t,"","",s):"",be:(s,a)=>s&&a?r(e.value,t,s,a,""):"",em:(s,a)=>s&&a?r(e.value,t,"",s,a):"",bm:(s,a)=>s&&a?r(e.value,t,s,"",a):"",bem:(s,a,c)=>s&&a&&c?r(e.value,t,s,a,c):"",is:(s,...a)=>{const c=a.length>=1?a[0]:!0;return s&&c?`${y}${s}`:""},cssVar:s=>{const a={};for(const c in s)s[c]&&(a[`--${e.value}-${c}`]=s[c]);return a},cssVarName:s=>`--${e.value}-${s}`,cssVarBlock:s=>{const a={};for(const c in s)s[c]&&(a[`--${e.value}-${t}-${c}`]=s[c]);return a},cssVarBlockName:s=>`--${e.value}-${t}-${s}`}};var q=(t,n)=>{const e=t.__vccOpts||t;for(const[o,u]of n)e[o]=u;return e};export{q as _,G as a,F as b,D as c,v as d,V as n,B as u,A as w};
