import{_ as e,a as s}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang7.js?v=1721298337096";import{aw as p,ab as a}from"./index.js?v=1721298337096";import{k as r}from"./index26.js?v=1721298337096";import{b as i}from"./index146.js?v=1721298337096";import{l as o,r as u,f as _,S as l,Z as n,P as m,V as d,_ as j,W as v,t as x}from"./vue.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096";import"./InputGroupLabel.js?v=1721298337096";import"./InputGroup.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./index64.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang.js?v=1721298337096";import"./useTableColumns.js?v=1721298337096";import"./Progress.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang2.js?v=1721298337096";import"./DataTable.js?v=1721298337096";import"./Checkbox.js?v=1721298337096";import"./Ellipsis.js?v=1721298337096";import"./Select.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";import"./omit.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang3.js?v=1721298337096";import"./useTableData.js?v=1721298337096";import"./Skeleton.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1721298337096";import"./index62.js?v=1721298337096";import"./data.js?v=1721298337096";import"./php.js?v=1721298337096";import"./useLoading.js?v=1721298337096";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1721298337096";import"./index65.js?v=1721298337096";import"./Alert.js?v=1721298337096";import"./check.js?v=1721298337096";const c={class:"px-20px pt-24px pb-8px"},f={class:"w-280px"},w={class:"w-280px"},b=o({__name:"index",props:{data:{}},setup(o,{expose:b}){const g=o,{row:y}=g.data,h=p(),k=u(null),P=_({ftp_username:y.name,new_password:y.password}),R={new_password:i({complex:{length:6}})};return b({onConfirm:async({hide:e})=>{var s;await(null==(s=k.value)?void 0:s.validate());const t={id:y.id,...x(P)};await r(t),h.setRefresh(!0),e()}}),(p,r)=>{const i=a,o=e,u=t,_=s;return l(),n("div",c,[m(_,{ref_key:"formRef",ref:k,model:v(P),rules:R},{default:d((()=>[m(o,{label:p.$t("Public.tableRow.Username"),path:"ftp_username"},{default:d((()=>[j("div",f,[m(i,{value:v(P).ftp_username,"onUpdate:value":r[0]||(r[0]=e=>v(P).ftp_username=e),disabled:!0},null,8,["value"])])])),_:1},8,["label"]),m(o,{label:p.$t("Public.tableRow.Password"),path:"new_password"},{default:d((()=>[j("div",w,[m(u,{value:v(P).new_password,"onUpdate:value":r[1]||(r[1]=e=>v(P).new_password=e),default:!1},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{b as default};