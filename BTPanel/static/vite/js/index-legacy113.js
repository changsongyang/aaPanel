System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./mail-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./index-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096"],(function(e,a){"use strict";var l,t,s,i,n,r,u,o,c,m,d,p;return{setters:[e=>{l=e._,t=e.a},e=>{s=e.s},e=>{i=e.l,n=e.f,r=e.S,u=e.Z,o=e.P,c=e.V,m=e._,d=e.W},e=>{p=e.ab},null],execute:function(){const a={class:"p-20px"},_={class:"w-290px"};e("default",i({__name:"index",props:{row:{}},emits:["refresh"],setup(e,{expose:i,emit:f}){const v=e,x=f,{row:y}=v,g=n({email:""});return i({onConfirm:async()=>{await s({domain:y.domain,email:g.email}),x("refresh")}}),(e,s)=>{const i=p,n=l,f=t;return r(),u("div",a,[o(f,null,{default:c((()=>[o(n,{label:"Forward email","show-feedback":!1},{default:c((()=>[m("div",_,[o(i,{value:d(g).email,"onUpdate:value":s[0]||(s[0]=e=>d(g).email=e),placeholder:"Catch non-existent mail, forward to this mail"},null,8,["value"])])])),_:1})])),_:1})])}}}))}}}));