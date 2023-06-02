import{b as A,d as F,u as v,_ as w,w as E,a as S}from"./base-3c02c778.js";import{d as r,o as d,c as _,n as m,u as a,r as h,a as k,t as H,b as R,e as s,f as $,g as U,h as b,_ as x,i as G,w as y,p as I,j as P,k as L,l as Q,m as g}from"./index-455730c8.js";const W=A({header:{type:String,default:""},bodyStyle:{type:F([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),j=r({name:"ElCard"}),z=r({...j,props:W,setup(e){const o=v("card");return(t,n)=>(d(),_("div",{class:m([a(o).b(),a(o).is(`${t.shadow}-shadow`)])},[t.$slots.header||t.header?(d(),_("div",{key:0,class:m(a(o).e("header"))},[h(t.$slots,"header",{},()=>[k(H(t.header),1)])],2)):R("v-if",!0),s("div",{class:m(a(o).e("body")),style:$(t.bodyStyle)},[h(t.$slots,"default")],6)],2))}});var D=w(z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const O=E(D),X=r({name:"ElContainer"}),J=r({...X,props:{direction:{type:String}},setup(e){const o=e,t=U(),n=v("container"),c=b(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:t&&t.default?t.default().some(p=>{const l=p.type.name;return l==="ElHeader"||l==="ElFooter"}):!1);return(u,p)=>(d(),_("section",{class:m([a(n).b(),a(n).is("vertical",a(c))])},[h(u.$slots,"default")],2))}});var K=w(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Y=r({name:"ElAside"}),Z=r({...Y,props:{width:{type:String,default:null}},setup(e){const o=e,t=v("aside"),n=b(()=>o.width?t.cssVarBlock({width:o.width}):{});return(c,u)=>(d(),_("aside",{class:m(a(t).b()),style:$(a(n))},[h(c.$slots,"default")],6))}});var q=w(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const ee=r({name:"ElFooter"}),te=r({...ee,props:{height:{type:String,default:null}},setup(e){const o=e,t=v("footer"),n=b(()=>o.height?t.cssVarBlock({height:o.height}):{});return(c,u)=>(d(),_("footer",{class:m(a(t).b()),style:$(a(n))},[h(c.$slots,"default")],6))}});var B=w(te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const oe=r({name:"ElHeader"}),se=r({...oe,props:{height:{type:String,default:null}},setup(e){const o=e,t=v("header"),n=b(()=>o.height?t.cssVarBlock({height:o.height}):{});return(c,u)=>(d(),_("header",{class:m(a(t).b()),style:$(a(n))},[h(c.$slots,"default")],6))}});var N=w(se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const ne=r({name:"ElMain"}),ae=r({...ne,setup(e){const o=v("main");return(t,n)=>(d(),_("main",{class:m(a(o).b())},[h(t.$slots,"default")],2))}});var V=w(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const re=E(K,{Aside:q,Footer:B,Header:N,Main:V});S(q);const ce=S(B),le=S(N),ie=S(V);const M=e=>(I("data-v-291461a2"),e=e(),P(),e),de={class:"card-content"},ue=M(()=>s("div",{class:"card-icon"},null,-1)),_e={class:"card-text"},pe=M(()=>s("h2",null,"Hello Word",-1)),me=M(()=>s("h3",null,"代码创造未来，数据驱动进步，算法开启智慧，网络连接全球。",-1)),he={__name:"Card",props:{cardWidth:{type:String,default:"460px"},cardHeight:{type:String,default:"130px"},CardMarginTop:{type:String,default:"450px"},CardTop:{type:String,default:"0px"},CardMarginLeft:{type:String,default:"90px"},CardLeft:{type:String,default:"0px"}},setup(e){return(o,t)=>{const n=O;return d(),G(n,{class:"card flex-card",style:$({width:e.cardWidth,height:e.cardHeight,marginTop:e.CardMarginTop,top:e.CardTop,marginLeft:e.CardMarginLeft,left:e.CardLeft})},{default:y(()=>[s("div",de,[ue,s("div",_e,[pe,me,h(o.$slots,"default",{},void 0,!0)])])]),_:3},8,["style"])}}},fe=x(he,[["__scopeId","data-v-291461a2"]]),ge=""+new URL("../icon/github.svg",import.meta.url).href,ve=""+new URL("../icon/wechat.svg",import.meta.url).href,we=""+new URL("../icon/qq.svg",import.meta.url).href,ye=""+new URL("../icon/bilibili.svg",import.meta.url).href,$e=""+new URL("../icon/google.svg",import.meta.url).href;const Ce={class:"icon"},ke={class:"iconTip"},Se={__name:"Icon",props:{name:{type:Array,required:!0}},setup(e){const o=()=>{window.location.href="https://github.com/Gxi1"},t=()=>{window.location.href="https://open.weixin.qq.com/"},n=()=>{window.location.href="https://res.abeim.cn/api/qq/?qq=1176787592"},c=()=>{window.location.href="https://space.bilibili.com/100000000"},u=()=>{window.location.href="https://www.google.com"},p=L("欢迎联系我"),l=T=>{p.value=T},f=()=>{p.value="欢迎联系我"};return(T,i)=>(d(),_("div",Ce,[s("div",{class:"icon-container",onMouseover:i[0]||(i[0]=C=>l("去GitHub看看")),onMouseout:f},[s("img",{src:ge,onClick:o,style:{"margin-left":"10px"}})],32),s("div",{class:"icon-container",onMouseover:i[1]||(i[1]=C=>l("有什么事吗？宝")),onMouseout:f},[s("img",{src:ve,onClick:t,style:{"margin-left":"30px"}})],32),s("div",{class:"icon-container",onMouseover:i[2]||(i[2]=C=>l("欢迎登录QQ")),onMouseout:f},[s("img",{src:we,onClick:n,style:{"margin-left":"30px"}})],32),s("div",{class:"icon-container",onMouseover:i[3]||(i[3]=C=>l("(゜-゜)つロ干杯~")),onMouseout:f},[s("img",{src:ye,onClick:c,style:{"margin-left":"30px"}})],32),s("div",{class:"icon-container",onMouseover:i[4]||(i[4]=C=>l("搜索一下吧！")),onMouseout:f},[s("img",{src:$e,onClick:u,style:{"margin-left":"30px"}})],32),s("span",ke,H(p.value),1)]))}},be=x(Se,[["__scopeId","data-v-e710e6e2"]]);const xe=e=>(I("data-v-c9080d62"),e=e(),P(),e),Me={class:"container"},Te={id:"homePage"},Ee={class:"title-wrapper"},He=["src"],Ie=xe(()=>s("h1",null,"Xiao jie.top",-1)),Pe={__name:"HomePage",setup(e){const o=L("R.gif");return(t,n)=>{const c=le,u=Q("router-view"),p=ie,l=ce,f=re;return d(),_("div",Me,[s("div",Te,[g(f,null,{default:y(()=>[g(c,null,{default:y(()=>[k("Header ")]),_:1}),g(p,null,{default:y(()=>[k("Main "),s("div",Ee,[s("img",{src:a(o),alt:"Avatar",class:"avatar"},null,8,He),Ie]),g(fe),g(be),g(u)]),_:1}),g(l,null,{default:y(()=>[k("Footer")]),_:1})]),_:1})])])}}},Be=x(Pe,[["__scopeId","data-v-c9080d62"]]);export{Be as default};
