(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1028],{41234:()=>{},7303:(e,n,o)=>{"use strict";o.d(n,{Y:()=>i});var a=o(51835),t=o(44490),l=o(45988);let i=(0,a.Ay)(t.A)(e=>{let{theme:n}=e;return{"& .MuiSwitch-switchBase.Mui-checked":{color:"hsl(138, 80%, 80%)","&:hover":{backgroundColor:(0,l.X4)("hsl(138, 80%, 80%)",n.palette.action.hoverOpacity)}},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:"hsl(138, 80%, 80%)",filter:"brightness(100%)"},"& .MuiSwitch-track":{backgroundColor:"hsl(138, 80%, 80%)",filter:"brightness(50%)"},"& .MuiSwitch-switchBase":{color:"hsl(138, 80%, 80%)","&:hover":{backgroundColor:(0,l.X4)("hsl(138, 80%, 80%)",n.palette.action.hoverOpacity)}}}})},94241:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>f});var a=o(95155),t=o(12115);o(28021);var l=o(98741),i=o(35761),s=o(11828),r=o(43463),d=o(20603),c=o(37578),u=o(55490),m=o(7303),h=o(39567),w=o.n(h),C=o(31237),y=o(92114);let g=e=>{for(let n of C.Z)if(n.name===e)return"Kanto";for(let n of y.c)if(n.name===e)return"Johto";return"Hoenn"},f=()=>{var e,n;let[o,h]=(0,t.useState)(""),[C,y]=(0,t.useState)(""),[f,p]=(0,t.useState)(0),v=(0,t.useRef)(null),[k,T]=(0,t.useState)(null),[L,j]=(0,t.useState)([]),[x,b]=(0,t.useState)("Kanto"),[G,S]=(0,t.useState)([]),[N,I]=(0,t.useState)(!1),[B,O]=(0,t.useState)([]),P=Number.parseInt(null!==(n=localStorage.getItem("themeIndex"))&&void 0!==n?n:"1"),[V,A]=(0,t.useState)(P-1),M=(0,i.A)(),z=(0,s.A)(M.breakpoints.down(700)),Z=z?new l.LatLng(800,2102):new l.LatLng(725,2202),E=z?-2:-1,F=z?"360px":"500px",R=new l.LatLngBounds([0,0],[1600,4405]);(0,t.useEffect)(()=>{var e,n;let o=localStorage.getItem("themeIndex");if(o){let e=Number.parseInt(o);console.log("0");let a=null===(n=B[e-1])||void 0===n?void 0:n.towns[0];console.log(a),b(g(a))}else(null===(e=B[0])||void 0===e?void 0:e.towns)&&(console.log("1"),b(g(B[0].towns[0])));H()},[V]);let H=()=>{if(d.Z[x]&&(v.current&&(v.current.pause(),v.current.currentTime=0),V<B.length&&B.length>0)){console.log("index: ".concat(V));let e=B[V],n=new Audio(e.file);n.volume=.05,n.play(),v.current=n,T(e.name),console.log("2"),j(e.towns)}},K=e=>{if(h(e),k){if(console.log(e),L.includes(e)){var n;y("Correct!"),p(f+1),S([]),null===(n=v.current)||void 0===n||n.pause();let e=localStorage.getItem("themeIndex");if(e){let n=Number.parseInt(e);localStorage.setItem("themeIndex","".concat(n+1))}A(V+1)}else G.includes(e)||S([...G,e]),y("Wrong")}},U=()=>{let e=new Date().toISOString().split("T")[0],n=w()(e);return Object.values(d.Z).flatMap(e=>e.theme).sort(()=>n()-.5).slice(0,5)};return(0,t.useEffect)(()=>{let e=U();console.log(e),O(e);let n=localStorage.getItem("themeIndex");if(n){var o;let a=Number.parseInt(n);console.log("5");let t=null===(o=e[a-1])||void 0===o?void 0:o.towns[0];console.log(t),b(g(t))}else console.log("6"),b(g(e[0].towns[0]))},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"region",children:(0,a.jsx)("h2",{children:"Region:"})}),(0,a.jsxs)("div",{className:"score-container",children:[(0,a.jsx)("p",{className:"score-label",children:"Round: "}),(0,a.jsxs)("p",{className:"score",children:[localStorage.getItem("themeIndex")," / ",B.length]})]})]}),"Kanto"===x&&(0,a.jsx)(c.y,{handleTownClick:K,height:F,bounds:R,guesses:G,center:Z,zoom:E}),"Johto"===x&&(0,a.jsx)(u.r,{handleTownClick:K,height:F,bounds:R,guesses:G,center:Z,zoom:E}),"Hoenn"===x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"construction",children:"Under construction"}),(0,a.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),"Sinnoh"===x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"construction",children:"Under construction"}),(0,a.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),"Unova"===x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"construction",children:"Under construction"}),(0,a.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),(0,a.jsxs)("div",{className:"stuff",children:[(0,a.jsx)("p",{children:"Play a random theme and then click on which location it belongs to!"}),(0,a.jsxs)("div",{className:"buttons",children:[(0,a.jsx)("button",{className:"button",onClick:H,children:"Play Theme"}),(0,a.jsx)("button",{className:"button",onClick:()=>{var e;return null===(e=v.current)||void 0===e?void 0:e.pause()},children:"Stop music"}),(0,a.jsx)("button",{className:"button",onClick:()=>{localStorage.setItem("themeIndex","1"),A(0)},children:"Reset"})]}),(null===(e=d.Z[x])||void 0===e?void 0:e.ogTheme)&&(0,a.jsxs)("div",{className:"theme-version-toggle",children:[(0,a.jsx)("div",{className:"play-original-theme",children:"Play original themes"}),(0,a.jsx)(m.Y,{onChange:()=>{I(!N),v.current&&(v.current.pause(),v.current.currentTime=0);let e=N?d.Z[x].theme:d.Z[x].ogTheme;null==e||e.forEach(e=>{if(console.log("4"),e.towns.includes(L[0])){let n=new Audio(e.file);n.volume=.05,n.play(),v.current=n;return}})}})]}),(0,a.jsxs)("div",{className:"results",children:[(0,a.jsxs)("div",{className:"town-name-display",children:[(0,a.jsx)("p",{children:"Last town selected: "}),(0,a.jsx)("p",{className:"town-name",children:o||"awaiting selection..."})]}),C&&(0,a.jsx)("div",{className:(0,r.A)("Correct!"===C?"correct":"wrong"),children:C})]})]})]})}},55490:(e,n,o)=>{"use strict";o.d(n,{r:()=>h});var a=o(95155),t=o(90833),l=o(72084),i=o(75256),s=o(20945),r=o(92114),d=o(98741),c=o.n(d),u=o(35761),m=o(11828);let h=e=>{let{handleTownClick:n,height:o,bounds:h,guesses:w}=e,C=(0,u.A)(),y=(0,m.A)(C.breakpoints.down(700)),g=y?new d.LatLng(800,2080):new d.LatLng(725,2100);return(0,a.jsxs)(t.W,{style:{height:o,width:"100vw"},crs:c().CRS.Simple,center:g,minZoom:-3,zoom:y?-2:-1.5,maxBounds:h,children:[(0,a.jsx)(l.a,{url:"/images/johto map.webp",bounds:h}),(0,a.jsx)(i.x,{children:r.c.map(e=>(0,a.jsx)(s.M,{bounds:e.coords,pathOptions:w.includes(e.name)?{fillColor:"red",color:"red"}:{fillColor:"blue",color:"blue"},eventHandlers:{click:()=>n(e.name),mouseover:e=>e.target.setStyle({fillColor:"red",color:"red"}),mouseout:n=>{w.includes(e.name)||n.target.setStyle({fillColor:"blue",color:"blue"})}}},e.name))})]})}},92114:(e,n,o)=>{"use strict";o.d(n,{c:()=>t});var a=o(98741);let t=[{name:"Cianwood City",coords:new a.LatLngBounds([500,1500],[670,1600]),alreadyGuessed:!1},{name:"Violet City",coords:new a.LatLngBounds([708,2140],[885,2310]),alreadyGuessed:!1},{name:"Olivine City",coords:new a.LatLngBounds([710,1710],[885,1885]),alreadyGuessed:!1},{name:"Ecruteak City",coords:new a.LatLngBounds([925,1925],[1100,2100]),alreadyGuessed:!1},{name:"Goldenrod City",coords:new a.LatLngBounds([495,1780],[675,2027]),alreadyGuessed:!1},{name:"Azalea Town",coords:new a.LatLngBounds([285,2e3],[390,2168]),alreadyGuessed:!1},{name:"Mahogany Town",coords:new a.LatLngBounds([925,2280],[1025,2380]),alreadyGuessed:!1},{name:"Blackthorn City",coords:new a.LatLngBounds([925,2560],[1100,2740]),alreadyGuessed:!1},{name:"Cherrygrove City",coords:new a.LatLngBounds([420,2280],[530,2450]),alreadyGuessed:!1},{name:"New Bark Town",coords:new a.LatLngBounds([420,2635],[530,2740]),alreadyGuessed:!1}]},37578:(e,n,o)=>{"use strict";o.d(n,{y:()=>u});var a=o(95155),t=o(90833),l=o(72084),i=o(75256),s=o(96079),r=o(31237),d=o(98741),c=o.n(d);let u=e=>{let{handleTownClick:n,height:o,bounds:d,guesses:u,center:m,zoom:h}=e;return(0,a.jsxs)(t.W,{style:{height:o,width:"100vw"},crs:c().CRS.Simple,center:m,minZoom:-1.8,zoom:h,maxBounds:d,children:[(0,a.jsx)(l.a,{url:"/images/kanto map.webp",bounds:d}),(0,a.jsx)(i.x,{children:r.Z.map(e=>(0,a.jsx)(s.j,{center:e.coords,pathOptions:u.includes(e.name)?{fillColor:"red",color:"red"}:{fillColor:"blue",color:"blue"},radius:35,eventHandlers:{click:()=>n(e.name),mouseover:e=>e.target.setStyle({fillColor:"red",color:"red"}),mouseout:n=>{u.includes(e.name)||n.target.setStyle({fillColor:"blue",color:"blue"})}}},e.name))})]})}},31237:(e,n,o)=>{"use strict";o.d(n,{Z:()=>t});var a=o(98741);let t=[{name:"Celadon City",coords:new a.LatLng(835,2165),alreadyGuessed:!1},{name:"Saffron City",coords:new a.LatLng(835,2365),alreadyGuessed:!1},{name:"Lavender Town",coords:new a.LatLng(835,2632),alreadyGuessed:!1},{name:"Cerulean City",coords:new a.LatLng(1036,2364),alreadyGuessed:!1},{name:"Vermilion City",coords:new a.LatLng(635,2364),alreadyGuessed:!1},{name:"Fuchsia City",coords:new a.LatLng(435,2232),alreadyGuessed:!1},{name:"Cinnabar Island",coords:new a.LatLng(300,1697),alreadyGuessed:!1},{name:"Pallet Town",coords:new a.LatLng(503,1697),alreadyGuessed:!1},{name:"Viridian City",coords:new a.LatLng(703,1697),alreadyGuessed:!1},{name:"Pewter City",coords:new a.LatLng(970,1697),alreadyGuessed:!1},{name:"Indigo Plateau",coords:new a.LatLng(1035,1561),alreadyGuessed:!1}]},20603:(e,n,o)=>{"use strict";o.d(n,{Z:()=>a});let a={Kanto:{ogTheme:[{name:"Viridian City/Pewter City/Saffron City Theme",file:"/audio/kanto/OG viridian.mp3",towns:["Viridian City","Pewter City","Saffron City"]},{name:"Celadon Theme",file:"/audio/kanto/OG celadon.mp3",towns:["Celadon City"]},{name:"Lavender Town Theme",file:"/audio/kanto/OG lavender.mp3",towns:["Lavender Town"]},{name:"Cerulean City/Fucshia City Theme",file:"/audio/kanto/OG cerulean.mp3",towns:["Cerulean City","Fucshia City"]},{name:"Vermilion City Theme",file:"/audio/kanto/OG vermilion.mp3",towns:["Vermilion City"]},{name:"Cinnabar Island Theme",file:"/audio/kanto/OG cinnabar.mp3",towns:["Cinnabar Island"]},{name:"Pallet Town",file:"/audio/kanto/OG pallet.mp3",towns:["Pallet Town"]},{name:"Indigo Plateau",file:"/audio/kanto/OG indigo.mp3",towns:["Indigo Plateau"]}],theme:[{name:"Viridian City/Pewter City/Saffron City Theme",file:"/audio/kanto/viridian.mp3",towns:["Viridian City","Pewter City","Saffron City"]},{name:"Celadon Theme",file:"/audio/kanto/celadon.mp3",towns:["Celadon City"]},{name:"Lavender Town Theme",file:"/audio/kanto/lavender.mp3",towns:["Lavender Town"]},{name:"Cerulean City/Fucshia City Theme",file:"/audio/kanto/cerulean.mp3",towns:["Cerulean City","Fucshia City"]},{name:"Vermilion City Theme",file:"/audio/kanto/vermilion.mp3",towns:["Vermilion City"]},{name:"Cinnabar Island Theme",file:"/audio/kanto/cinnabar.mp3",towns:["Cinnabar Island"]},{name:"Pallet Town",file:"/audio/kanto/pallet.mp3",towns:["Pallet Town"]},{name:"Indigo Plateau",file:"/audio/kanto/indigo.mp3",towns:["Indigo Plateau"]}]},Johto:{ogTheme:[{name:"Cianwood City/Ecruteak City Theme",file:"/audio/johto/OG cianwood.mp3",towns:["Cianwood City","Ecruteak City"]},{name:"Violet City/Olivine City Theme",file:"/audio/johto/OG violet.mp3",towns:["Violet City","Olivine City"]},{name:"Goldenrod City Theme",file:"/audio/johto/OG goldenrod.mp3",towns:["Goldenrod City"]},{name:"Azalea Town/Blackthorn City Theme",file:"/audio/johto/OG azalea.mp3",towns:["Azalea Town","Blackthorn City"]},{name:"Cherrygrove City/Mahogany Town Theme",file:"/audio/johto/OG mahogany.mp3",towns:["Cherrygrove City","Mahogany Town"]},{name:"New Bark Town Theme",file:"/audio/johto/OG new bark.mp3",towns:["New Bark Town"]}],theme:[{name:"Cianwood City Theme",file:"/audio/johto/cianwood.mp3",towns:["Cianwood City"]},{name:"Violet City/Olivine City Theme",file:"/audio/johto/violet.mp3",towns:["Violet City","Olivine City"]},{name:"Ecruteak City Theme",file:"/audio/johto/ecruteak.mp3",towns:["Ecruteak City"]},{name:"Goldenrod City Theme",file:"/audio/johto/goldenrod.mp3",towns:["Goldenrod City"]},{name:"Azalea Town/Blackthorn City Theme",file:"/audio/johto/azalea.mp3",towns:["Azalea Town","Blackthorn City"]},{name:"Cherrygrove City/Mahogany Town Theme",file:"/audio/johto/mahogany.mp3",towns:["Cherrygrove City","Mahogany Town"]},{name:"New Bark Town Theme",file:"/audio/johto/new bark.mp3",towns:["New Bark Town"]}]}}},28021:()=>{}}]);