import{_ as e,a as r}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{_ as a}from"./index100.js?v=1721298337096";import{K as o,ep as t,ab as l}from"./index.js?v=1721298337096";import{d as n,a as i}from"./check.js?v=1721298337096";import{l as s,ad as d,r as u,f as p,S as m,Z as c,P as k,V as w,_ as f,W as v,t as _}from"./vue.js?v=1721298337096";import"./use-theme-vars.js?v=1721298337096";import"./pinia.js?v=1721298337096";const x={class:"p-20px"},b={class:"w-420px"},g={class:"flex"},h={class:"w-150px"},D={class:"w-150px"},N={class:"w-420px"},y={class:"w-420px"},$=s({__name:"index",setup(s,{expose:$}){const{t:j}=d(),E=o(),U=u(null),R=p({name:"",driver:"bridge",options:"",subnet:"",gateway:"",iprange:"",labels:"",remark:""}),C={name:{trigger:["blur","input"],validator:()=>""!==R.name.trim()||new Error(j("Docker.Network.form.index_2"))},subnet:{trigger:["blur","input"],validator:()=>""===R.subnet.trim()?new Error(j("Docker.Network.form.index_10")):!!n(R.subnet.trim())||new Error(j("Docker.Network.form.index_11"))},gateway:{trigger:["blur","input"],validator:()=>""===R.gateway.trim()?new Error(j("Docker.Network.form.index_12")):!!i(R.gateway.trim())||new Error(j("Docker.Network.form.index_13"))},iprange:{trigger:["blur","input"],validator:()=>""===R.iprange.trim()?new Error(j("Docker.Network.form.index_14")):!!n(R.iprange.trim())||new Error(j("Docker.Network.form.index_15"))}};return $({onConfirm:async()=>{var e;await(null==(e=U.value)?void 0:e.validate()),await t(_(R)),E.setRefresh(!0)}}),(o,t)=>{const n=l,i=e,s=a,d=r;return m(),c("div",x,[k(d,{ref_key:"formRef",ref:U,model:v(R),rules:C},{default:w((()=>[k(i,{label:o.$t("Docker.Network.form.index_1"),path:"name"},{default:w((()=>[f("div",b,[k(n,{value:v(R).name,"onUpdate:value":t[0]||(t[0]=e=>v(R).name=e),placeholder:o.$t("Docker.Network.form.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"]),f("div",g,[k(i,{label:o.$t("Docker.Network.form.index_3"),path:"subnet"},{default:w((()=>[f("div",h,[k(n,{value:v(R).subnet,"onUpdate:value":t[1]||(t[1]=e=>v(R).subnet=e),placeholder:o.$t("Docker.Network.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),k(i,{label:o.$t("Docker.Network.form.index_5"),path:"gateway","label-width":"120"},{default:w((()=>[f("div",D,[k(n,{value:v(R).gateway,"onUpdate:value":t[2]||(t[2]=e=>v(R).gateway=e),placeholder:o.$t("Docker.Network.form.index_6")},null,8,["value","placeholder"])])])),_:1},8,["label"])]),k(i,{label:o.$t("Docker.Network.form.index_7"),path:"iprange"},{default:w((()=>[f("div",N,[k(n,{value:v(R).iprange,"onUpdate:value":t[3]||(t[3]=e=>v(R).iprange=e),placeholder:o.$t("Docker.Network.form.index_8")},null,8,["value","placeholder"])])])),_:1},8,["label"]),k(i,{label:o.$t("Docker.Network.form.index_9"),path:"remark","show-feedback":!1},{default:w((()=>[f("div",y,[k(s,{value:v(R).remark,"onUpdate:value":t[4]||(t[4]=e=>v(R).remark=e),rows:3,placeholder:o.$t("Docker.Network.form.index_9")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{$ as default};