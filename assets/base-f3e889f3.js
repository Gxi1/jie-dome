import{G as _,H as y,I as O,N as P,x as w,k as g,h as B,u as I}from"./index-4e29221c.js";function K(s){for(var a=-1,t=s==null?0:s.length,r={};++a<t;){var c=s[a];r[c[0]]=c[1]}return r}const V="__epPropKey",J=s=>s,b=s=>_(s)&&!!s[V],j=(s,a)=>{if(!_(s)||b(s))return s;const{values:t,required:r,default:c,type:u,validator:v}=s,d={type:u,required:!!r,validator:t||v?p=>{let l=!1,f=[];if(t&&(f=Array.from(t),y(s,"default")&&f.push(c),l||(l=f.includes(p))),v&&(l||(l=v(p))),!l&&f.length>0){const $=[...new Set(f)].map(m=>JSON.stringify(m)).join(", ");O(`Invalid prop: validation failed${a?` for prop "${a}"`:""}. Expected one of [${$}], got value ${JSON.stringify(p)}.`)}return l}:void 0,[V]:!0};return y(s,"default")&&(d.default=c),d},T=s=>K(Object.entries(s).map(([a,t])=>[a,j(t,a)])),A=(s,a)=>{if(s.install=t=>{for(const r of[s,...Object.values(a??{})])t.component(r.name,r)},a)for(const[t,r]of Object.entries(a))s[t]=r;return s},D=s=>(s.install=P,s),N="el",q="is-",i=(s,a,t,r,c)=>{let u=`${s}-${a}`;return t&&(u+=`-${t}`),r&&(u+=`__${r}`),c&&(u+=`--${c}`),u},x=Symbol("namespaceContextKey"),C=s=>{const a=s||w(x,g(N));return B(()=>I(a)||N)},H=(s,a)=>{const t=C(a);return{namespace:t,b:(e="")=>i(t.value,s,e,"",""),e:e=>e?i(t.value,s,"",e,""):"",m:e=>e?i(t.value,s,"","",e):"",be:(e,n)=>e&&n?i(t.value,s,e,n,""):"",em:(e,n)=>e&&n?i(t.value,s,"",e,n):"",bm:(e,n)=>e&&n?i(t.value,s,e,"",n):"",bem:(e,n,o)=>e&&n&&o?i(t.value,s,e,n,o):"",is:(e,...n)=>{const o=n.length>=1?n[0]:!0;return e&&o?`${q}${e}`:""},cssVar:e=>{const n={};for(const o in e)e[o]&&(n[`--${t.value}-${o}`]=e[o]);return n},cssVarName:e=>`--${t.value}-${e}`,cssVarBlock:e=>{const n={};for(const o in e)e[o]&&(n[`--${t.value}-${s}-${o}`]=e[o]);return n},cssVarBlockName:e=>`--${t.value}-${s}-${e}`}};var z=(s,a)=>{const t=s.__vccOpts||s;for(const[r,c]of a)t[r]=c;return t};export{z as _,D as a,T as b,j as c,J as d,H as u,A as w};
