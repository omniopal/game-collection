(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{6647:function(){},8775:function(e,a,r){Promise.resolve().then(r.bind(r,1497))},1497:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return h}});var t=r(7437),n=r(2265);r(8614);var s=r(7968),l=r(1222),i=r(9216);r(5085);let o=e=>{let{generationName:a,children:r}=e,[o,d]=(0,n.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",{className:"generation-button",onClick:()=>{d(!o)},children:[(0,t.jsx)("h2",{children:a}),(0,t.jsx)("div",{children:o?(0,t.jsx)(s.Z,{}):(0,t.jsx)(l.Z,{})})]}),(0,t.jsx)(i.Z,{in:o,timeout:"auto",unmountOnExit:!0,children:(0,t.jsx)("div",{className:"pokemon-list",children:r})})]})};var d=r(9842),c=r(5236);r(2487);let u={apiKey:"AIzaSyB3B5JD2TqRKWpOD9LRDitg5ry6lu9EkPc",authDomain:"draftlocke.firebaseapp.com",projectId:"draftlocke",storageBucket:"draftlocke.appspot.com",messagingSenderId:"829000704049",appId:"1:829000704049:web:6396bb5524066fd464f510",measurementId:"G-M0R33P78JS"};var m=r(4839);let f=()=>{let[e,a]=(0,n.useState)(new Map),[r,s]=(0,n.useState)([]),[l,i]=(0,n.useState)("Unselected"),[f,h]=(0,n.useState)(new Map),[p,k]=(0,n.useState)(!1),[v,x]=(0,n.useState)(""),{setFirestoreRandomizedTeams:b,setFirestoreDraftOrder:j,getPlayersRef:N,getDraftPokemonRef:y,updatePokemonDisabled:w,setPokemonDraftedBy:g}=function(){let e=(0,c.C6)().length?(0,c.Mq)():(0,c.ZF)(u),a=(0,d.ad)(e);return{setFirestoreRandomizedTeams:async e=>{let r=(0,d.JU)(a,"players","players"),t=Object.fromEntries(e);await (0,d.r7)(r,{randomizedTeams:t})},setFirestoreDraftOrder:async e=>{let r=(0,d.JU)(a,"players","players");await (0,d.r7)(r,{draftOrder:e})},getPlayersRef:()=>(0,d.hJ)(a,"players"),getPlayers:async()=>{let e=(0,d.JU)(a,"players","players");await (0,d.QT)(e)},setPokemonDraftedBy:async(e,r)=>{let t=(0,d.JU)(a,"draft-pokemon",e);await (0,d.r7)(t,{draftedBy:r})},getDraftPokemonRef:()=>(0,d.hJ)(a,"draft-pokemon"),updatePokemonDisabled:async(e,r)=>{let t=(0,d.JU)(a,"draft-pokemon",e);await (0,d.r7)(t,{isDisabled:r})},addPokemon:async(e,r)=>{try{let t=(0,d.JU)(a,"draft-pokemon",e.toLowerCase());await (0,d.pl)(t,r)}catch(e){console.error("Error adding pokemon to Firestore: ",e)}}}}(),C=(0,n.useCallback)(a=>{let r=e.get(a);r&&w(a,!r.isDisabled)},[e,w]),D=a=>{if(e.has(a)){let r=e.get(a);return null==r?void 0:r.isDisabled}},E=(0,n.useCallback)(a=>{let r=e.get(a);null!=r&&r.draftedBy||"Unselected"===l||(g(a,l),C(a))},[e,l,g,C]),M=(0,n.useCallback)((e,a)=>{a===l&&(g(e,""),C(e))},[l,g,C]);(0,n.useEffect)(()=>{let e=(0,d.cf)(y(),e=>{let r=new Map;e.forEach(e=>{let a=e.data();r.set(e.id,{spriteUrl:a.spriteUrl,isDisabled:a.isDisabled,generation:a.generation,pokedexNumber:a.pokedexNumber,draftedBy:a.draftedBy})}),a(r)}),r=(0,d.cf)(N(),e=>{let a=[],r="";e.forEach(e=>{let t=e.data();t.players.forEach(e=>{a.push(e),r=t.draftOrder,h(new Map(Object.entries(t.randomizedTeams)))})}),s(a),x(r)}),t=e=>{"s"===e.key&&k(!0)},n=e=>{"s"===e.key&&k(!1)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),()=>{e(),r(),window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}},[]);let O=(0,n.useMemo)(()=>Array.from(e.entries()).reduce((e,a)=>{let[r,{spriteUrl:t,isDisabled:n,generation:s,pokedexNumber:l}]=a;return e[s]||(e[s]=[]),e[s].push({pokemonName:r,spriteUrl:t,isDisabled:n,pokedexNumber:l}),e},{}),[e]),S=(0,n.useCallback)(a=>Array.from(e.entries()).filter(e=>{let[,r]=e;return r.draftedBy===a}).map(e=>{let[a,{spriteUrl:r}]=e;return{pokemonName:a,spriteUrl:r}}),[e]),U=()=>{let e=new Map,a=[...r];r.forEach(r=>{let t=a.filter(e=>e.toLowerCase()!==r.toLowerCase());0===t.length&&(t=[a[0]]);let n=t[Math.floor(Math.random()*t.length)];e.set(r,n),a=a.filter(e=>e!==n)}),b(e)},J=e=>e.replace("/other/showdown/","/other/showdown/shiny/");return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"draft",children:[(0,t.jsx)("button",{className:"draft-order-button",onClick:()=>{let e=[...r],a="";for(;e.length;)if(e.length>1){let r=e[Math.floor(Math.random()*e.length)],t=e.indexOf(r);-1!==t&&e.splice(t,1),a+="".concat(r," -> ")}else{a+="".concat(e[0]);break}j(a)},children:"Randomize Draft Order"}),(0,t.jsx)("button",{className:"draft-order-button",onClick:()=>j(""),children:"Clear Draft Order"}),v&&(0,t.jsx)("div",{className:"draft-order",children:v}),(0,t.jsx)("h1",{children:"Draftable Pokemon"}),(0,t.jsx)("div",{className:"draft-pokemon-container",children:Object.entries(O).sort((e,a)=>Number(e)-Number(a)).map(e=>{var a;let[r,n]=e;return(0,t.jsx)(o,{generationName:(a=Number(r))?"Generation ".concat(function(e){let a="";for(let{value:r,numeral:t}of[{value:1e3,numeral:"M"},{value:900,numeral:"CM"},{value:500,numeral:"D"},{value:400,numeral:"CD"},{value:100,numeral:"C"},{value:90,numeral:"XC"},{value:50,numeral:"L"},{value:40,numeral:"XL"},{value:10,numeral:"X"},{value:9,numeral:"IX"},{value:5,numeral:"V"},{value:4,numeral:"IV"},{value:1,numeral:"I"}])for(;e>=r;)a+=t,e-=r;return a}(a)):"Starters",children:n.sort((e,a)=>Number(e.pokedexNumber)-Number(a.pokedexNumber)).map(e=>{let{pokemonName:a,spriteUrl:r}=e;return(0,t.jsxs)("div",{className:"name-and-sprite",children:[r?(0,t.jsxs)("div",{className:"sprite-container",onClick:()=>{E(a)},children:[(0,t.jsx)("img",{className:(0,m.Z)("circle",D(a)&&"show-circle"),src:"/images/Draftlocke/circle.png",alt:""}),(0,t.jsx)("img",{className:"sprite",src:r,alt:a})]}):(0,t.jsx)("div",{children:"No sprite available"}),(0,t.jsx)("h3",{children:a})]},a)})},r)})})]}),(0,t.jsxs)("div",{className:"teams",children:[(0,t.jsx)("button",{className:"random-buttons",onClick:()=>U(),children:"Randomize Team Assignments"}),(0,t.jsx)("button",{className:"random-buttons",onClick:()=>b(new Map),children:"Reset Team Assignments"}),(0,t.jsxs)("h1",{children:["Current Draftee: ",(0,t.jsx)("div",{className:"current-draftee",children:l})]}),r.map(e=>(0,t.jsxs)("div",{className:"team-container",children:[(0,t.jsxs)("h2",{onClick:()=>{i(l===e?"Unselected":e)},children:[e,"'s Drafts:"]}),f.size>0&&(0,t.jsxs)("h4",{children:["Assigned to: ",f.get(e)]}),(0,t.jsx)("div",{className:"pokemon-container",children:S(e).map(a=>{let{pokemonName:r,spriteUrl:n}=a;return(0,t.jsxs)("div",{className:"name-and-sprite",children:[n?(0,t.jsx)("div",{id:"sprite",className:"sprite-container",onClick:()=>{M(r,e)},children:(0,t.jsx)("img",{className:"sprite",src:p?J(n):n,alt:r})}):(0,t.jsx)("div",{children:"No sprite available"}),(0,t.jsx)("p",{children:r})]},r)})})]},e))]})]})};function h(){return(0,t.jsx)(f,{})}},5085:function(){},8614:function(){}},function(e){e.O(0,[546,218,358,784,827,903,971,23,744],function(){return e(e.s=8775)}),_N_E=e.O()}]);