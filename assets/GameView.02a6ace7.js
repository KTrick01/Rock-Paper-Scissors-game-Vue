import{S as c,P as l,L as i,R as n,a as r}from"./ScissorsButton.2729e5d2.js";import{_ as E,u as T,e as m,f as B,g as b,h as $,o as f,c as C,d as a,i as h,j as S,k as g,t as R,p as x,b as P}from"./index.70517d7b.js";const w=_=>(x("data-v-18d6ea88"),_=_(),P(),_),V={class:"game-section"},G={class:"game-subsection"},M={class:"btn"},O=w(()=>a("p",{class:"game-p para"},"You picked",-1)),Y={class:"msg-title"},z={class:"cpu-btn"},A=w(()=>a("p",{class:"cpu-p para"},"The house picked",-1)),D=w(()=>a("div",{class:"lds-ripple"},[a("div"),a("div")],-1)),N={__name:"GameView",setup(_){const o=T();let e="",s="";const t=m(null),u=m(null),L=m(null);let d=m("YOU WIN");const v=B(),y=b();function I(){y.push("/")}v.params.type==="Scissors"?e=c:v.params.type==="Lizard"?e=i:v.params.type==="Rock"?e=n:v.params.type==="Paper"?e=l:v.params.type==="Spock"&&(e=r);const p=Math.floor(Math.random()*5);return p===0?s=c:p===1?s=i:p===2?s=n:p===3?s=l:p===4&&(s=r),$(function(k){setTimeout(function(){e==c&&s==l||e==c&&s==i?(t.value.classList.add("active"),console.log("win"),u.value.classList.add("winner"),o.score++,window.localStorage.setItem("score",`${o.score}`)):e==l&&s==n||e==l&&s==r?(t.value.classList.add("active"),o.score++,console.log("win"),u.value.classList.add("winner"),window.localStorage.setItem("score",`${o.score}`)):e==n&&s==c||e==n&&s==i?(t.value.classList.add("active"),o.score++,console.log("win"),u.value.classList.add("winner"),window.localStorage.setItem("score",`${o.score}`)):e==r&&s==c||e==r&&s==n?(t.value.classList.add("active"),o.score++,console.log("win"),window.localStorage.setItem("score",`${o.score}`),u.value.classList.add("winner")):e==i&&s==r||e==i&&s==l?(t.value.classList.add("active"),o.score++,console.log("win"),u.value.classList.add("winner"),window.localStorage.setItem("score",`${o.score}`)):e==c&&s==c||e==n&&s==n||e==i&&s==i||e==l&&s==l||e==r&&s==r?(console.log("Tie"),t.value.classList.add("active"),d.value="TIE"):(console.log("lose"),t.value.classList.add("active"),L.value.classList.add("winner"),d.value="YOU LOSE",o.score--,window.localStorage.setItem("score",`${o.score}`))},1500)}),console.log(p),(k,U)=>(f(),C("div",V,[a("div",G,[a("div",M,[O,a("div",{ref_key:"myElect",ref:u},[(f(),h(S(g(e))))],512)]),a("div",{class:"msg",ref_key:"msgContainer",ref:t},[a("h2",Y,R(g(d)),1),a("button",{class:"msg-btn",onClick:I},"Play Again")],512),a("div",z,[A,a("div",{ref_key:"cpuElect",ref:L,class:"cpu-background"},[D,(f(),h(S(g(s)),{class:"cpu-animation"}))],512)])])]))}},q=E(N,[["__scopeId","data-v-18d6ea88"]]);export{q as default};