System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./site-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(e,a){"use strict";var l,t,n,s,i,u,c,o,d,_,m,r,p,y,g,f,v,x,j,P,b,S;return{setters:[e=>{l=e._},e=>{t=e._},e=>{n=e.f,s=e.I,i=e.o},e=>{u=e.b},e=>{c=e.aN,o=e.aO},e=>{d=e.d,_=e.W,m=e.r,r=e.j,p=e.O,y=e.P,g=e.M,f=e.Y,v=e.Q,x=e.R,j=e.Z,P=e.ak},e=>{b=e.bL,S=e.bG},null,null],execute:function(){const a={class:"px-20px py-24px"},H={class:"w-300px"};e("default",d({__name:"index",setup(e,{expose:d}){const{t:w}=_(),$=m(null),{loading:h,setLoading:k}=u(),L=r({name:"0"}),O=m([]),R=()=>{O.value.unshift({label:w("Site.PHP.index_58"),value:"0"})};return R(),(async()=>{try{k(!0);const{message:e}=await c();if(n(e)){const{sites:a,defaultSite:l}=e;O.value=s(a)?a.map((e=>({label:e.name,value:e.name}))):[],R(),L.name=i(l)?l:"0"}}finally{k(!1)}})(),d({onConfirm:async({hide:e})=>{await($.value?.validate()),await o(P(L)),e()}}),(e,n)=>{const s=b,i=S,u=t,c=l;return p(),y("div",a,[g(u,{ref_key:"formRef",ref:$,model:x(L)},{default:f((()=>[g(i,{label:e.$t("Site.PHP.index_11")},{default:f((()=>[v("div",H,[g(s,{value:x(L).name,"onUpdate:value":n[0]||(n[0]=e=>x(L).name=e),class:"name-select",loading:x(h),options:x(O)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1},8,["model"]),g(c,{class:"mt-8px"},{default:f((()=>[v("li",null,j(e.$t("Site.PHP.index_56")),1),v("li",null,j(e.$t("Site.PHP.index_57")),1)])),_:1})])}}}))}}}));