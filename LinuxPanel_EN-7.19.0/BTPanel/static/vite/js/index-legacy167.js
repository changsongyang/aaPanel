System.register(["./echarts-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185"],(function(e,t){"use strict";var n,i,l,a,s,u,o,r,c,d,m,p,g,y,f,v,h,j,w,_,b,x,z,B,D;return{setters:[e=>{n=e.e,i=e.u,l=e.i,a=e.a,s=e.b,u=e.c,o=e.d,r=e.f,c=e.g,d=e.h,m=e.j,p=e.k,g=e.l},e=>{y=e.bc},e=>{f=e.d,v=e.r,h=e.w,j=e.n,w=e.f,_=e.o,b=e.O,x=e.P,z=e.H,B=e.R,D=e.as},null,null],execute:function(){i([l,a,s,u,o,r,c,d,m,p,g]),e("default",f({__name:"index",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"200px"},dataZoom:{type:Boolean,default:!1},option:{type:Object,required:!0}},setup(e,{expose:t}){const i=e,l=v(null);function a(){if(null===l.value)return;let e=n.getInstanceByDom(l.value);null==e&&(e=n.init(l.value)),e.setOption(i.option,!0)}function s(){null!==l.value&&n.getInstanceByDom(l.value)?.resize()}h((()=>i.option),(e=>{e&&j((()=>{a()}))}),{immediate:!0,deep:!0});const u=D(s,300,{maxWait:800});return w((()=>{j((()=>{a(),window.addEventListener("resize",u)}))})),_((()=>{l.value&&(n.getInstanceByDom(l.value)?.dispose(),window.removeEventListener("resize",u))})),t({resize:s}),(t,n)=>(b(),x("div",{ref_key:"chartRef",ref:l,style:z({width:B(y)(e.width),height:B(y)(e.height)})},null,4))}}))}}}));