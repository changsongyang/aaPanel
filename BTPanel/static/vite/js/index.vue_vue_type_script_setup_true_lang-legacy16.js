System.register(["./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./index-legacy100.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096"],(function(e,a){"use strict";var t,l,o,r,i,n,d,m,p,s,c,_,u,f,v,g,k,x,j,w,y,h,b,C,D,$,E;return{setters:[e=>{t=e.K,l=e.a6,o=e.k,r=e.J,i=e.v,n=e.d$,d=e.e0,m=e.e,p=e.ab},e=>{s=e._,c=e.a},e=>{_=e._},e=>{u=e.u},e=>{f=e.l,v=e.ad,g=e.r,k=e.f,x=e.S,j=e.Z,w=e.P,y=e.V,h=e._,b=e.W,C=e.q,D=e.a3,$=e.a1},e=>{E=e._}],execute:function(){const R={class:"p-20px"},S={class:"w-300px"},U={class:"w-300px"},L={class:"w-300px"};e("_",f({__name:"index",props:{row:{default:void 0},isEdit:{type:Boolean,default:!1}},setup(e,{expose:f}){const q=e,{t:B}=v(),H=t(),J=g(null),K=k({template_id:null,project_name:"",remark:""}),P={template_id:{trigger:["change"],validator:()=>null!=K.template_id||new Error(B("Docker.Compose.form.index_5"))},project_name:{trigger:["blur","input"],validator:()=>""!==K.project_name.trim()||new Error(B("Docker.Compose.form.index_6"))}},V=g([]),{loading:W,setLoading:Z}=u(),z=async()=>{try{Z(!0);const{message:e}=await l();o(e)&&(V.value=e.map((e=>({label:e.name,value:e.id}))),K.template_id=e[0].id)}finally{Z(!1)}},A=()=>{r({title:B("Docker.Compose.form.index_7"),footer:!0,width:650,minHeight:484,data:{onRefresh:()=>{z()}},component:$((()=>i((()=>a.import("./index-legacy96.js?v=1721298337096")),void 0)))})};return(()=>{const{row:e,isEdit:a}=q;a&&e&&(K.template_id=e.template_id,K.project_name=e.name,K.remark=e.remark)})(),z(),f({onConfirm:async()=>{await(J.value?.validate());const e={template_id:K.template_id||0,project_name:K.project_name,remark:K.remark},{row:a,isEdit:t}=q;t&&a?await n({...e,project_id:a.id}):await d(e),H.setRefresh(!0)}}),(e,a)=>{const t=E,l=m,o=s,r=p,i=_,n=c;return x(),j("div",R,[w(n,{ref_key:"formRef",ref:J,model:b(K),rules:P,"label-width":"150"},{default:y((()=>[w(o,{label:e.$t("Docker.Compose.form.index_1"),path:"template_id"},{default:y((()=>[h("div",S,[w(t,{value:b(K).template_id,"onUpdate:value":a[0]||(a[0]=e=>b(K).template_id=e),loading:b(W),options:b(V)},null,8,["value","loading","options"])]),w(l,{class:"ml-8px",onClick:A},{default:y((()=>[C(D(e.$t("Docker.Compose.form.index_2")),1)])),_:1})])),_:1},8,["label"]),w(o,{label:e.$t("Docker.Compose.form.index_3"),path:"project_name"},{default:y((()=>[h("div",U,[w(r,{value:b(K).project_name,"onUpdate:value":a[1]||(a[1]=e=>b(K).project_name=e),placeholder:e.$t("Docker.Compose.form.index_3")},null,8,["value","placeholder"])])])),_:1},8,["label"]),w(o,{label:e.$t("Docker.Compose.form.index_4"),path:"remark","show-feedback":!1},{default:y((()=>[h("div",L,[w(i,{value:b(K).remark,"onUpdate:value":a[2]||(a[2]=e=>b(K).remark=e),rows:3,placeholder:e.$t("Docker.Compose.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));