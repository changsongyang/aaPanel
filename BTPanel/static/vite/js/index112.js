import{_ as e}from"./index68.js?v=1721298337096";import{_ as a,a as l}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096";import{w as o}from"./mail.js?v=1721298337096";import{l as t,r,f as i,S as s,Z as n,P as u,V as d,_ as m,W as p}from"./vue.js?v=1721298337096";import{ab as c,cJ as v}from"./index.js?v=1721298337096";import{_}from"./Select.js?v=1721298337096";import"./pinia.js?v=1721298337096";import"./Tag.js?v=1721298337096";import"./Empty.js?v=1721298337096";const f={class:"p-20px"},x={class:"w-320px"},b={class:"w-320px"},h={class:"w-100px ml-20px"},w={class:"w-320px"},q=m("li",{class:"text-error"}," Prompt that the A record resolution failed. Please check whether the filled A record domain name has been resolved to the server IP ",-1),j=m("li",null,"A record needs to be added to your DNS service provider console.",-1),y=m("li",null,"If you use CloudFlare, please select [DNS only] when adding records.",-1),g=t({__name:"index",emits:["refresh"],setup(t,{expose:g,emit:A}){const P=A,U=r(null),B=i({domain:"",a_record:"",quota:5,quota_unit:"GB",mailboxes:50,email:""}),C=[{label:"GB",value:"GB"},{label:"MB",value:"MB"}],D={domain:{trigger:["blur","input"],validator:()=>""!==B.domain.trim()||new Error("Mailbox domain name cannot be empty!")}};return g({onConfirm:async()=>{var e;await(null==(e=U.value)?void 0:e.validate()),await o({domain:B.domain,a_record:B.a_record,quota:B.quota+" "+B.quota_unit,mailboxes:B.mailboxes,email:B.email}),P("refresh")}}),(o,t)=>{const r=c,i=a,g=v,A=_,P=l,M=e;return s(),n("div",f,[u(P,{ref_key:"formRef",ref:U,model:p(B),rules:D},{default:d((()=>[u(i,{label:"Domain name",path:"domain"},{default:d((()=>[m("div",x,[u(r,{value:p(B).domain,"onUpdate:value":t[0]||(t[0]=e=>p(B).domain=e),placeholder:"Please enter a domain name, e.g: aapanel.com"},null,8,["value"])])])),_:1}),u(i,{label:"A record"},{default:d((()=>[m("div",b,[u(r,{value:p(B).a_record,"onUpdate:value":t[1]||(t[1]=e=>p(B).a_record=e),placeholder:"Please enter A record e.g: mail.aapanel.com"},null,8,["value"])])])),_:1}),u(i,{label:"Domain quota"},{default:d((()=>[u(g,{value:p(B).quota,"onUpdate:value":t[2]||(t[2]=e=>p(B).quota=e),class:"w-200px",min:0,"show-button":!1},null,8,["value"]),m("div",h,[u(A,{value:p(B).quota_unit,"onUpdate:value":t[3]||(t[3]=e=>p(B).quota_unit=e),options:C},null,8,["value"])])])),_:1}),u(i,{label:"Mailboxes"},{default:d((()=>[u(g,{value:p(B).mailboxes,"onUpdate:value":t[4]||(t[4]=e=>p(B).mailboxes=e),class:"w-320px",min:0,"show-button":!1},null,8,["value"])])),_:1}),u(i,{label:"CatchAll"},{default:d((()=>[m("div",w,[u(r,{value:p(B).email,"onUpdate:value":t[5]||(t[5]=e=>p(B).email=e),placeholder:"Catch non-existent mail, forward to this mail"},null,8,["value"])])])),_:1})])),_:1},8,["model"]),u(M,null,{default:d((()=>[q,j,y])),_:1})])}}});export{g as default};