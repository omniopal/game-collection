(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{6647:function(){},8775:function(e,a,t){Promise.resolve().then(t.bind(t,7254))},7254:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return f}});var r=t(7437),n=t(2265);t(3568);var s=JSON.parse('{"f":[{"playerName":"Jacob","pokemon":[]},{"playerName":"Ben","pokemon":[]},{"playerName":"Rhys","pokemon":[]},{"playerName":"Robert","pokemon":[]}],"j":[{"generation":0,"firstEvolutionPokemon":[1,4,7,152,155,158,252,255,258,387,390,393]},{"generation":1,"firstEvolutionPokemon":[10,13,16,19,21,23,27,29,32,37,39,41,43,46,48,50,52,54,56,58,60,63,66,69,72,74,77,79,81,83,84,86,88,90,92,95,96,98,100,102,104,106,107,108,109,111,113,114,115,116,118,120,122,123,124,127,128,129,131,132,133,137,138,140,142,147]},{"generation":2,"firstEvolutionPokemon":[161,163,165,167,170,172,173,174,175,177,179,182,185,187,190,191,193,194,198,200,201,203,204,206,207,209,211,212,213,214,215,216,218,220,222,223,225,227,228,231,233,234,235,236,238,239,240,241,246]},{"generation":3,"firstEvolutionPokemon":[261,263,265,270,273,276,278,280,283,285,287,290,293,296,298,299,300,302,303,304,307,309,311,312,313,314,316,318,320,322,324,325,327,328,331,333,335,336,337,338,339,341,343,345,347,349,351,352,353,355,357,358,359,360,361,363,366,369,370,371,374]},{"generation":4,"firstEvolutionPokemon":[396,399,401,403,406,408,410,412,415,417,418,420,422,425,427,431,433,434,436,438,439,440,441,442,443,446,447,449,451,453,455,456,458,459]}]}'),i=t(7968),l=t(1222),o=t(9216);t(6737);let c=e=>{let{generationName:a,children:t}=e,[s,c]=(0,n.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:"generation-button",onClick:()=>{c(!s)},children:[(0,r.jsx)("h2",{children:a}),(0,r.jsx)("div",{children:s?(0,r.jsx)(i.Z,{}):(0,r.jsx)(l.Z,{})})]}),(0,r.jsx)(o.Z,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,r.jsx)("div",{className:"pokemon-list",children:t})})]})};var m=t(9842),u=t(5236);t(2487);let d={apiKey:"AIzaSyB3B5JD2TqRKWpOD9LRDitg5ry6lu9EkPc",authDomain:"draftlocke.firebaseapp.com",projectId:"draftlocke",storageBucket:"draftlocke.appspot.com",messagingSenderId:"829000704049",appId:"1:829000704049:web:6396bb5524066fd464f510",measurementId:"G-M0R33P78JS"},p=()=>{let[e,a]=(0,n.useState)(new Map),[t,i]=(0,n.useState)(new Map),l=s.f,o=s.j,[p,f]=(0,n.useState)("Jacob"),{getDraftPokemon:h,updatePokemonSelected:v}=function(){let e=(0,u.C6)().length?(0,u.Mq)():(0,u.ZF)(d),a=(0,m.ad)(e);return{getDraftPokemon:()=>({ref:(0,m.hJ)(a,"draft-pokemon")}),updatePokemonSelected:async(e,t)=>{let r=(0,m.JU)(a,"draft-pokemon",e);await (0,m.r7)(r,{isDisabled:t})}}}(),[k,j]=(0,n.useState)(new Map),x=e=>e?`Generation ${function(e){let a="";for(let{value:t,numeral:r}of[{value:1e3,numeral:"M"},{value:900,numeral:"CM"},{value:500,numeral:"D"},{value:400,numeral:"CD"},{value:100,numeral:"C"},{value:90,numeral:"XC"},{value:50,numeral:"L"},{value:40,numeral:"XL"},{value:10,numeral:"X"},{value:9,numeral:"IX"},{value:5,numeral:"V"},{value:4,numeral:"IV"},{value:1,numeral:"I"}])for(;e>=t;)a+=r,e-=t;return a}(e)}`:"Starters",N=e=>{if(k.has(e)){let a=k.get(e);a&&v(e,!a.isDisabled)}},b=e=>{if(k.has(e)){let a=k.get(e);return a?.isDisabled}},g=a=>{let r=new Map(t);if(r.has(p)){let t=r.get(p);if(t){let n=e.get(a),s=n?.spriteUrl,l=n?.isDisabled;s&&!l&&(t.set(a,s),r.set(p,t),i(r),N(a))}}},w=e=>{let a=new Map(t);if(a.has(p)){let t=a.get(p);t?.has(e)&&(t.delete(e),a.set(p,t),i(a),N(e))}};if((0,n.useEffect)(()=>{let e=async()=>{let e=new Map,t=o.map(async a=>{let t=a.firstEvolutionPokemon.map(async t=>{let r=await fetch(`https://pokeapi.co/api/v2/pokemon/${t}/`),n=await r.json(),s=n.name,i=n.sprites?.other?.showdown?.front_default,l=n.id;e.set(s,{spriteUrl:i,isDisabled:!1,generation:a.generation,pokedexNumber:l})});await Promise.all(t)});await Promise.all(t),a(e)};(async()=>{let e=new Map,a=l.map(async a=>{let t=new Map,r=a.pokemon.map(async e=>{let a=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`),r=await a.json(),n=r.name,s=r.sprites?.other?.showdown?.front_default;t.set(n,s)});await Promise.all(r),e.set(a.playerName,t)});await Promise.all(a),i(e)})(),e();let t=(0,m.cf)(h().ref,e=>{let a=new Map;e.forEach(e=>{let t=e.data();a.set(e.id,{spriteUrl:t.spriteUrl,isDisabled:t.isDisabled,generation:t.generation,pokedexNumber:t.pokedexNumber})}),j(a)});return()=>t()},[]),!t)return(0,r.jsx)("div",{children:"Loading..."});let y=Array.from(e.entries()).reduce((e,a)=>{let[t,{spriteUrl:r,isDisabled:n,generation:s,pokedexNumber:i}]=a;return e[s]||(e[s]=[]),e[s].push({pokemonName:t,spriteUrl:r,isDisabled:n,pokedexNumber:i}),e},{});return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{children:["Jacob testing:",Array.from(k.entries()).map(e=>{let[a,t]=e;return(0,r.jsxs)("div",{children:[a," ",t.generation," ",t.isDisabled?"true":"false"," ",t.pokedexNumber," ",t.spriteUrl]})})]}),(0,r.jsxs)("div",{className:"draft",children:[(0,r.jsx)("h1",{children:"Draftable Pokemon"}),(0,r.jsx)("div",{className:"draft-pokemon-container",children:Object.entries(y).sort((e,a)=>Number(e)-Number(a)).map(e=>{let[a,t]=e;return(0,r.jsx)(c,{generationName:x(Number(a)),children:t.sort((e,a)=>Number(e.pokedexNumber)-Number(a.pokedexNumber)).map(e=>{let{pokemonName:a,spriteUrl:t,isDisabled:n}=e;return(0,r.jsxs)("div",{className:"name-and-sprite",children:[t?(0,r.jsxs)("div",{className:"sprite-container",onClick:()=>{g(a)},children:[b(a)&&(0,r.jsx)("img",{className:"circle",src:"/images/Draftlocke/circle.png",alt:""}),(0,r.jsx)("img",{className:"sprite",src:t,alt:a})]}):(0,r.jsx)("div",{children:"No sprite available"}),(0,r.jsx)("h3",{children:a})]},a)})})})})]}),(0,r.jsxs)("div",{className:"teams",children:[(0,r.jsxs)("h1",{children:["Current Draftee: ",(0,r.jsx)("div",{className:"current-draftee",children:p})]}),Array.from(t.entries()).map(e=>{let[a,t]=e;return(0,r.jsxs)("div",{className:"team-container",children:[(0,r.jsxs)("h2",{onClick:()=>{f(a)},children:[a,"'s Drafts:"]}),(0,r.jsx)("div",{className:"pokemon-container",children:Array.from(t.entries()).map(e=>{let[a,t]=e;return(0,r.jsxs)("div",{className:"name-and-sprite",children:[t?(0,r.jsx)("div",{className:"sprite-container",onClick:()=>{w(a)},children:(0,r.jsx)("img",{className:"sprite",src:t,alt:a})}):(0,r.jsx)("div",{children:"No sprite available"}),(0,r.jsx)("p",{children:a})]},a)})})]},a)})]})]})};function f(){return(0,r.jsx)(p,{})}},6737:function(){},3568:function(){}},function(e){e.O(0,[398,218,358,784,206,21,971,23,744],function(){return e(e.s=8775)}),_N_E=e.O()}]);