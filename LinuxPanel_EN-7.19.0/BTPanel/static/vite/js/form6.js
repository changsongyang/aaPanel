import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{d as t,W as r,r as a,j as l,O as o,P as s,M as i,Y as p,Q as u,R as n,k as _,v as c}from"./vue.js?v=1732601582185";import{a3 as m,I as v,J as d}from"./page_layout.js?v=1732601582185";import{i as y,j as f,k as b}from"./index55.js?v=1732601582185";import{bL as w,bG as x,bl as h}from"./naive.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./common.js?v=1732601582185";import"./public.js?v=1732601582185";import"./index121.js?v=1732601582185";import"./index102.js?v=1732601582185";import"./index.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang11.js?v=1732601582185";import"./file.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";const j={class:"px-20px pt-24px pb-8px"},g={class:"w-240px"},S={class:"w-240px"},A={class:"w-240px"},F={class:"w-240px"},E=t({__name:"form",props:{row:{},isEdit:{type:Boolean,default:!1}},emits:["refresh"],setup(t,{expose:E,emit:U}){const $=t,k=U,{t:C}=r(),{isEdit:H,row:R}=$,B=a(null),G=l({types:"drop",choose:"all",ports:null,country:["United States"]}),I={country:{trigger:"change",validator:()=>0!==G.country.length||new Error(C("Security.Firewall.Area.form_8"))},ports:{trigger:["blur","input"],validator:()=>{if("point"===G.choose){if(!G.ports)return new Error(C("Security.Firewall.Area.form_9"));if(!m("".concat(G.ports)))return new Error(C("Security.Firewall.Area.form_10"))}return!0}}},J=[{label:C("Security.Firewall.Area.form_11"),value:"all"},{label:C("Security.Firewall.Area.form_3"),value:"point"}],L=[{label:C("Security.Firewall.Area.form_12"),value:"drop"}],M=a(!1),O=a([]);return(async()=>{try{M.value=!0;const{message:e}=await y();v(e)&&(O.value=e.map((e=>({label:e.CH,value:e.CH,brief:e.brief}))))}finally{M.value=!1}})(),H&&R&&(G.types=R.types,G.choose=R.ports?"point":"all",G.ports=R.ports?d(R.ports):null,G.country=R.country),E({onConfirm:async()=>{var e,t;await(null==(e=B.value)?void 0:e.validate());const r={types:G.types,choose:G.choose,ports:"point"===G.choose?"".concat(G.ports||""):"",country:G.country,brief:""};H&&R?(r.brief="".concat((null==(t=O.value.find((e=>e.label===R.country)))?void 0:t.brief)||""),await f({...r,id:R.id})):await b(r),k("refresh")}}),(t,r)=>{const a=w,l=x,m=h,v=e;return o(),s("div",j,[i(v,{ref_key:"formRef",ref:B,model:n(G),rules:I},{default:p((()=>[i(l,{label:t.$t("Security.Firewall.Area.form_1"),path:"types"},{default:p((()=>[u("div",g,[i(a,{value:n(G).types,"onUpdate:value":r[0]||(r[0]=e=>n(G).types=e),options:L},null,8,["value"])])])),_:1},8,["label"]),i(l,{label:t.$t("Security.Firewall.Area.form_2"),path:"choose"},{default:p((()=>[u("div",S,[i(a,{value:n(G).choose,"onUpdate:value":r[1]||(r[1]=e=>n(G).choose=e),options:J},null,8,["value"])])])),_:1},8,["label"]),_(i(l,{label:t.$t("Security.Firewall.Area.form_3"),path:"ports"},{default:p((()=>[u("div",A,[i(m,{value:n(G).ports,"onUpdate:value":r[2]||(r[2]=e=>n(G).ports=e),min:1,max:65535,"show-button":!1,placeholder:t.$t("Security.Firewall.Area.form_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),[[c,"point"===n(G).choose]]),i(l,{label:t.$t("Security.Firewall.Area.form_5"),path:"country"},{default:p((()=>[u("div",F,[i(a,{value:n(G).country,"onUpdate:value":r[3]||(r[3]=e=>n(G).country=e),filterable:"","max-tag-count":"responsive",multiple:!n(H),loading:n(M),options:n(O)},null,8,["value","multiple","loading","options"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{E as default};