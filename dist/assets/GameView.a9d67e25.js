import{S as o,P as i,L as l,R as n,a as r}from"./ScissorsButton.965f5b00.js";import{_ as B,u as b,e as f,f as A,g as D,h as E,o as m,c as W,d as t,i as S,j as y,k as w,t as $,p as C,b as x}from"./index.eb7ebc11.js";const g=_=>(C("data-v-55221ed1"),_=_(),x(),_),P={class:"game-section"},V={class:"game-subsection"},G={class:"btn"},M=g(()=>t("p",{class:"game-p para"},"You picked",-1)),O={class:"msg-title"},Y={class:"cpu-btn"},z=g(()=>t("p",{class:"cpu-p para"},"The house picked",-1)),N=g(()=>t("div",{class:"lds-ripple"},[t("div"),t("div")],-1)),T={__name:"GameView",setup(_){const a=b();let e="",s="";const c=f(null),u=f(null),L=f(null);let d=f("YOU WIN");const p=A(),k=D();function I(){k.push("/")}p.params.type==="Scissors"?e=o:p.params.type==="Lizard"?e=l:p.params.type==="Rock"?e=n:p.params.type==="Paper"?e=i:p.params.type==="Spock"&&(e=r);const v=Math.floor(Math.random()*5);return v===0?s=o:v===1?s=l:v===2?s=n:v===3?s=i:v===4&&(s=r),E(function(R){setTimeout(function(){e==o&&s==i||e==o&&s==l?(c.value.classList.add("active"),u.value.classList.add("winner"),a.score++,window.localStorage.setItem("score",`${a.score}`)):e==i&&s==n||e==i&&s==r?(c.value.classList.add("active"),a.score++,u.value.classList.add("winner"),window.localStorage.setItem("score",`${a.score}`)):e==n&&s==o||e==n&&s==l?(c.value.classList.add("active"),a.score++,u.value.classList.add("winner"),window.localStorage.setItem("score",`${a.score}`)):e==r&&s==o||e==r&&s==n?(c.value.classList.add("active"),a.score++,window.localStorage.setItem("score",`${a.score}`),u.value.classList.add("winner")):e==l&&s==r||e==l&&s==i?(c.value.classList.add("active"),a.score++,u.value.classList.add("winner"),window.localStorage.setItem("score",`${a.score}`)):e==o&&s==o||e==n&&s==n||e==l&&s==l||e==i&&s==i||e==r&&s==r?(c.value.classList.add("active"),d.value="DRAW"):(c.value.classList.add("active"),L.value.classList.add("winner"),d.value="YOU LOSE",a.score--,h(),window.localStorage.setItem("score",`${a.score}`))},1500);function h(U){(a.score===null||a.score<0)&&(a.score=0)}}),(R,h)=>(m(),W("div",P,[t("div",V,[t("div",G,[M,t("div",{ref_key:"myElect",ref:u},[(m(),S(y(w(e))))],512)]),t("div",{class:"msg",ref_key:"msgContainer",ref:c},[t("h2",O,$(w(d)),1),t("button",{class:"msg-btn",onClick:I},"Play Again")],512),t("div",Y,[z,t("div",{ref_key:"cpuElect",ref:L,class:"cpu-background"},[N,(m(),S(y(w(s)),{class:"cpu-animation"}))],512)])])]))}},F=B(T,[["__scopeId","data-v-55221ed1"]]);export{F as default};
