System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./public-legacy.js?v=1732601582185","./mail-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy16.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185"],(function(e,t){"use strict";var a,l,i,n,s,u,c,o,_,d,p,r,g,m,y,h,j,v,x,f,w,b,k,M,E,R,W,C,L,U,B;return{setters:[e=>{a=e.S,l=e.f,i=e.I,n=e.a4,s=e.c},e=>{u=e._},e=>{c=e._},e=>{o=e._},e=>{_=e._},e=>{d=e.d,p=e.f,r=e.h},e=>{g=e.B,m=e.G},e=>{y=e._},e=>{h=e.d,j=e.W,v=e.r,x=e.j,f=e.M,w=e.c,b=e.f,k=e.O,M=e.X,E=e.Y,R=e.Z,W=e.R,C=e.a6},e=>{L=e.bJ,U=e.bM,B=e.bN},null,null,null],execute:function(){e("default",h({__name:"index",setup(e){const h=C((()=>s((()=>t.import("./index-legacy183.js?v=1732601582185")),void 0))),{t:S}=j(),D=v(),G=x({p:1,username:null}),{table:H,columns:I,setLoading:J}=d([{key:"from",title:S("Mail.Email.index_2"),width:"25%",minWidth:140,ellipsis:{tooltip:!0}},{key:"theme",title:S("Mail.Email.index_3"),minWidth:160,ellipsis:{tooltip:{width:"trigger"}},render:e=>{const t=e.html.replace(/[^\u4e00-\u9fa5]/g,"");return f("span",{class:"cursor-pointer",onClick:()=>{O(e)}},[f("a",{class:"bt-link"},[e.subject]),f("span",{class:"text-desc"},[w(" - "),t||e.body])])}},{key:"time",title:S("Mail.Email.index_4"),width:"12%",minWidth:140,render:e=>a(e.time)},p({width:150,options:e=>[{label:S("Mail.Email.index_5"),onClick:()=>{O(e)}},{label:S("Public.Btn.Del"),onClick:()=>{P(e)}}]})]),N=r(),O=e=>{N.data.row=e,N.title=S("Mail.Email.index_7",[e.subject]),N.show=!0},P=async e=>{await g({path:e.path}),X()},X=async()=>{try{J(!0);const{message:e}=await m({p:G.p,username:G.username||""});l(e)&&(H.data=i(e.data)?e.data:[],H.total=n(e.page))}finally{J(!1)}},Y=()=>{G.p=1,X()};return J(!0),b((async()=>{await D.value.getList()})),(e,t)=>{const a=U,l=B,i=_,n=o,s=c,d=u,p=L;return k(),M(p,{class:"p-16px"},{default:E((()=>[f(s,null,{toolsLeft:E((()=>[f(l,{class:"w-460px"},{default:E((()=>[f(a,null,{default:E((()=>[w(R(e.$t("Mail.Email.index_1")),1)])),_:1}),f(y,{ref_key:"senderRef",ref:D,value:W(G).username,"onUpdate:value":[t[0]||(t[0]=e=>W(G).username=e),Y]},null,8,["value"])])),_:1})])),table:E((()=>[f(i,{loading:W(H).loading,data:W(H).data,columns:W(I)},null,8,["loading","data","columns"])])),pageRight:E((()=>[f(n,{page:W(G).p,"onUpdate:page":t[1]||(t[1]=e=>W(G).p=e),"item-count":W(H).total,onRefresh:X},null,8,["page","item-count"])])),_:1}),f(d,{show:W(N).show,"onUpdate:show":t[2]||(t[2]=e=>W(N).show=e),title:W(N).title,data:W(N).data,width:850,height:680,component:W(h)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));