(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9386],{41234:()=>{},7303:(e,o,n)=>{"use strict";n.d(o,{Y:()=>s});var t=n(51835),a=n(44490),l=n(45988);let s=(0,t.Ay)(a.A)(e=>{let{theme:o}=e;return{"& .MuiSwitch-switchBase.Mui-checked":{color:"hsl(138, 80%, 80%)","&:hover":{backgroundColor:(0,l.X4)("hsl(138, 80%, 80%)",o.palette.action.hoverOpacity)}},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:"hsl(138, 80%, 80%)",filter:"brightness(100%)"},"& .MuiSwitch-track":{backgroundColor:"hsl(138, 80%, 80%)",filter:"brightness(50%)"},"& .MuiSwitch-switchBase":{color:"hsl(138, 80%, 80%)","&:hover":{backgroundColor:(0,l.X4)("hsl(138, 80%, 80%)",o.palette.action.hoverOpacity)}}}})},87835:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>L});var t=n(95155),a=n(12115);n(28021);var l=n(98741),s=n(35761),i=n(11828),r=n(66656),d=n(43463),c=n(20603),u=n(37578),m=n(55490),h=n(7303),g=n(39567),w=n.n(g),y=n(31237),C=n(92114);let p=e=>{for(let o of y.Z)if(o.name===e)return"Kanto";for(let o of C.c)if(o.name===e)return"Johto";return"Hoenn"};var f=n(78416),x=n(80906),v=n(1396),j=n(36417),k=n(27753),T=n(26214);n(54030);var b=n(32444);let S=e=>{let{isOpen:o,setIsDialogOpen:n}=e,[l,s]=(0,a.useState)(!1),[i,d]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=localStorage.getItem("guesses");e&&d(e.split(","))},[o]);let c=async()=>{let e="Pok\xe9Melody #1 Results:\n",o=localStorage.getItem("guesses");if(o){let n=o.split(",");d(n),n.forEach((o,n)=>{let t="\uD83C\uDFB5 ".concat(n+1,": "),a=Number.parseInt(o);for(let e=0;e<a;e++)a-1===e?t+="✅\n":t+="❌";e+=t}),e+="Total guesses: ".concat(m(n))}try{await navigator.clipboard.writeText(e),s(!0)}catch(e){console.error("Failed to copy results to clipboard:",e)}},u=(e,o)=>{"clickaway"!==o&&s(!1)},m=e=>{let o=0;return e.forEach(e=>{o+=Number.parseInt(e)}),o};return(0,t.jsxs)(f.A,{className:"dialog",open:o,PaperProps:{sx:{backgroundColor:"hsl(198, 50%, 10%)"}},children:[(0,t.jsx)(x.A,{open:l,autoHideDuration:3e3,onClose:u,anchorOrigin:{horizontal:"center",vertical:"top"},children:(0,t.jsx)(v.A,{onClose:u,severity:"success",variant:"filled",children:"Results copied to clipboard"})}),(0,t.jsx)(j.A,{className:"dialog-title",sx:{paddingBlockEnd:0},children:(0,t.jsx)("p",{children:"Thanks for playing today!"})}),(0,t.jsxs)(k.A,{className:"dialog-content",children:[(0,t.jsx)("h3",{className:"your-results",children:"Your results:"}),(0,t.jsx)("table",{className:"table",children:(0,t.jsx)("tbody",{children:i.map((e,o)=>(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:["\uD83C\uDFB5 #",o+1,":"]}),(0,t.jsxs)("td",{children:[e," ",1===Number.parseInt(e)?"guess":"guesses"]})]},o))})}),(0,t.jsxs)("div",{className:"total-guesses",children:["Total guesses: ",(0,t.jsx)("span",{className:"your-results",children:m(i)})]}),(0,t.jsxs)("button",{className:"share-button",onClick:c,children:["Copy ",(0,t.jsx)(b.A,{fontSize:"small"})]})]}),(0,t.jsx)(T.A,{children:(0,t.jsx)(r.A,{sx:{textDecoration:"none",color:"hsl(198, 50%, 10%)",fontWeight:600,padding:0},className:"link",href:"/freeplay",onClick:()=>n(!1),children:"Go to Free Play"})})]})},L=()=>{var e,o;let[n,g]=(0,a.useState)(""),[y,C]=(0,a.useState)(""),f=(0,a.useRef)(null),[x,v]=(0,a.useState)(null),[j,k]=(0,a.useState)([]),[T,b]=(0,a.useState)("Kanto"),[L,I]=(0,a.useState)([]),[N,G]=(0,a.useState)([]),[O,B]=(0,a.useState)(!1),[A,P]=(0,a.useState)([]),[M,V]=(0,a.useState)([]),E=Number.parseInt(null!==(o=localStorage.getItem("themeIndex"))&&void 0!==o?o:"1"),[z,F]=(0,a.useState)(E-1),[Z,D]=(0,a.useState)(!1),R=(0,s.A)(),H=(0,i.A)(R.breakpoints.down(700)),K=H?new l.LatLng(800,2102):new l.LatLng(725,2202),U=H?-2:-1,W=H?"360px":"500px",_=new l.LatLngBounds([0,0],[1600,4405]);(0,a.useEffect)(()=>{var e,o;let n=localStorage.getItem("themeIndex");if(n){let e=Number.parseInt(n);console.log("0");let t=null===(o=A[e-1])||void 0===o?void 0:o.towns[0];console.log(t),b(p(t))}else(null===(e=A[0])||void 0===e?void 0:e.towns)&&(console.log("1"),b(p(A[0].towns[0])));J()},[z]);let J=()=>{if(c.Z[T]){if(f.current&&(f.current.pause(),f.current.currentTime=0),!O&&z<A.length&&A.length>0){console.log("index: ".concat(z));let e=A[z],o=new Audio(e.file);o.volume=.05,o.play(),f.current=o,v(e.name),console.log("2"),k(e.towns)}if(O&&z<M.length&&M.length>0){console.log("index: ".concat(z));let e=M[z],o=new Audio(null==e?void 0:e.file);o.volume=.05,o.play(),f.current=o,e&&(v(e.name),k(e.towns)),console.log("2")}}},Y=e=>{if(g(e),x){if(console.log(e),j.includes(e)){var o;C("Correct!");let e=[...L,N.length+1];if(I(e),G([]),null===(o=f.current)||void 0===o||o.pause(),console.log("dailyThemeIndex: "+z),console.log("other: ".concat(A.length-1)),z===A.length-1)localStorage.setItem("guesses",e.toString()),D(!0);else{let e=localStorage.getItem("themeIndex");if(e){let o=Number.parseInt(e);localStorage.setItem("themeIndex","".concat(o+1))}F(z+1)}}else N.includes(e)||G([...N,e]),C("Wrong")}},X=(e,o)=>{let n=[...e];for(let e=n.length-1;e>0;e--){let t=Math.floor(o()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},q=()=>{let e=new Date().toISOString().split("T")[0],o=w()(e);return X(Object.values(c.Z).flatMap(e=>e.theme),o).slice(0,5)},Q=()=>{let e=new Date().toISOString().split("T")[0],o=w()(e);return X(Object.values(c.Z).flatMap(e=>e.ogTheme),o).slice(0,5)};return(0,a.useEffect)(()=>{let e=localStorage.getItem("date"),o=new Date().toISOString().split("T")[0],n=localStorage.getItem("themeIndex");e||localStorage.setItem("date",o),e===o&&"5"===n&&D(!0),e!=o&&(localStorage.setItem("date",o),localStorage.setItem("themeIndex","1"),localStorage.removeItem("guesses"));let t=q(),a=Q();console.log(t),P(t),V(a);let l=localStorage.getItem("themeIndex");if(l){var s;let e=Number.parseInt(l);console.log("5");let o=null===(s=t[e-1])||void 0===s?void 0:s.towns[0];console.log(o),b(p(o))}else console.log("6"),localStorage.setItem("themeIndex","1"),b(p(t[0].towns[0]))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{sx:{marginBlockStart:"8px",marginInlineStart:"8px"},className:"logo-container",href:"/pokemon",children:(0,t.jsx)("img",{className:"logo",src:"/images/logo3.png",alt:"PokeMelody logo"})}),(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"region",children:(0,t.jsxs)("h2",{children:["Region: ",T]})}),(0,t.jsxs)("div",{className:"score-container",children:[(0,t.jsx)("p",{className:"score-label",children:"Round: "}),(0,t.jsxs)("p",{className:"score",children:[localStorage.getItem("themeIndex")," / ",A.length]})]})]}),"Kanto"===T&&(0,t.jsx)(u.y,{handleTownClick:Y,height:W,bounds:_,guesses:N,center:K,zoom:U}),"Johto"===T&&(0,t.jsx)(m.r,{handleTownClick:Y,height:W,bounds:_,guesses:N,center:K,zoom:U}),"Hoenn"===T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"construction",children:"Under construction"}),(0,t.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),"Sinnoh"===T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"construction",children:"Under construction"}),(0,t.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),"Unova"===T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"construction",children:"Under construction"}),(0,t.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),(0,t.jsxs)("div",{className:"stuff",children:[(0,t.jsx)("p",{children:"Play a random theme and then click on which location it belongs to!"}),(0,t.jsxs)("div",{className:"buttons",children:[(0,t.jsx)("button",{className:"button",onClick:J,children:"Play Theme"}),(0,t.jsx)("button",{className:"button",onClick:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.pause()},children:"Stop music"}),(0,t.jsx)("button",{className:"button",onClick:()=>{localStorage.setItem("themeIndex","1"),F(0),I([]),D(!0)},children:"Reset"})]}),(null===(e=c.Z[T])||void 0===e?void 0:e.ogTheme)&&(0,t.jsxs)("div",{className:"theme-version-toggle",children:[(0,t.jsx)("div",{className:"play-original-theme",children:"Play original themes"}),(0,t.jsx)(h.Y,{onChange:()=>{B(!O),f.current&&(f.current.pause(),f.current.currentTime=0);let e=O?c.Z[T].theme:c.Z[T].ogTheme;null==e||e.forEach(e=>{if(console.log("4"),e.towns.includes(j[0])){let o=new Audio(e.file);o.volume=.05,o.play(),f.current=o;return}})}})]}),(0,t.jsxs)("div",{className:"results",children:[(0,t.jsxs)("div",{className:"town-name-display",children:[(0,t.jsx)("p",{children:"Last town selected: "}),(0,t.jsx)("p",{className:"town-name",children:n||"awaiting selection..."})]}),y&&(0,t.jsx)("div",{className:(0,d.A)("Correct!"===y?"correct":"wrong"),children:y})]})]}),(0,t.jsx)(S,{isOpen:Z,setIsDialogOpen:D})]})}},55490:(e,o,n)=>{"use strict";n.d(o,{r:()=>h});var t=n(95155),a=n(90833),l=n(49703),s=n(75256),i=n(20945),r=n(92114),d=n(98741),c=n.n(d),u=n(35761),m=n(11828);let h=e=>{let{handleTownClick:o,height:n,bounds:h,guesses:g}=e,w=(0,u.A)(),y=(0,m.A)(w.breakpoints.down(700)),C=y?new d.LatLng(800,2080):new d.LatLng(725,2100);return(0,t.jsxs)(a.W,{style:{height:n,width:"100vw"},crs:c().CRS.Simple,center:C,minZoom:-3,zoom:y?-2:-1.5,maxBounds:h,children:[(0,t.jsx)(l.a,{url:"/images/johto map.webp",bounds:h}),(0,t.jsx)(s.x,{children:r.c.map(e=>(0,t.jsx)(i.M,{bounds:e.coords,pathOptions:g.includes(e.name)?{fillColor:"red",color:"red"}:{fillColor:"blue",color:"blue"},eventHandlers:{click:()=>o(e.name),mouseover:e=>e.target.setStyle({fillColor:"red",color:"red"}),mouseout:o=>{g.includes(e.name)||o.target.setStyle({fillColor:"blue",color:"blue"})}}},e.name))})]})}},92114:(e,o,n)=>{"use strict";n.d(o,{c:()=>a});var t=n(98741);let a=[{name:"Cianwood City",coords:new t.LatLngBounds([500,1500],[670,1600]),alreadyGuessed:!1},{name:"Violet City",coords:new t.LatLngBounds([708,2140],[885,2310]),alreadyGuessed:!1},{name:"Olivine City",coords:new t.LatLngBounds([710,1710],[885,1885]),alreadyGuessed:!1},{name:"Ecruteak City",coords:new t.LatLngBounds([925,1925],[1100,2100]),alreadyGuessed:!1},{name:"Goldenrod City",coords:new t.LatLngBounds([495,1780],[675,2027]),alreadyGuessed:!1},{name:"Azalea Town",coords:new t.LatLngBounds([285,2e3],[390,2168]),alreadyGuessed:!1},{name:"Mahogany Town",coords:new t.LatLngBounds([925,2280],[1025,2380]),alreadyGuessed:!1},{name:"Blackthorn City",coords:new t.LatLngBounds([925,2560],[1100,2740]),alreadyGuessed:!1},{name:"Cherrygrove City",coords:new t.LatLngBounds([420,2280],[530,2450]),alreadyGuessed:!1},{name:"New Bark Town",coords:new t.LatLngBounds([420,2635],[530,2740]),alreadyGuessed:!1}]},37578:(e,o,n)=>{"use strict";n.d(o,{y:()=>u});var t=n(95155),a=n(90833),l=n(49703),s=n(75256),i=n(96079),r=n(31237),d=n(98741),c=n.n(d);let u=e=>{let{handleTownClick:o,height:n,bounds:d,guesses:u,center:m,zoom:h}=e;return(0,t.jsxs)(a.W,{style:{height:n,width:"100vw"},crs:c().CRS.Simple,center:m,minZoom:-1.8,zoom:h,maxBounds:d,children:[(0,t.jsx)(l.a,{url:"/images/kanto map.webp",bounds:d}),(0,t.jsx)(s.x,{children:r.Z.map(e=>(0,t.jsx)(i.j,{center:e.coords,pathOptions:u.includes(e.name)?{fillColor:"red",color:"red"}:{fillColor:"blue",color:"blue"},radius:35,eventHandlers:{click:()=>o(e.name),mouseover:e=>e.target.setStyle({fillColor:"red",color:"red"}),mouseout:o=>{u.includes(e.name)||o.target.setStyle({fillColor:"blue",color:"blue"})}}},e.name))})]})}},31237:(e,o,n)=>{"use strict";n.d(o,{Z:()=>a});var t=n(98741);let a=[{name:"Celadon City",coords:new t.LatLng(835,2165),alreadyGuessed:!1},{name:"Saffron City",coords:new t.LatLng(835,2365),alreadyGuessed:!1},{name:"Lavender Town",coords:new t.LatLng(835,2632),alreadyGuessed:!1},{name:"Cerulean City",coords:new t.LatLng(1036,2364),alreadyGuessed:!1},{name:"Vermilion City",coords:new t.LatLng(635,2364),alreadyGuessed:!1},{name:"Fuchsia City",coords:new t.LatLng(435,2232),alreadyGuessed:!1},{name:"Cinnabar Island",coords:new t.LatLng(300,1697),alreadyGuessed:!1},{name:"Pallet Town",coords:new t.LatLng(503,1697),alreadyGuessed:!1},{name:"Viridian City",coords:new t.LatLng(703,1697),alreadyGuessed:!1},{name:"Pewter City",coords:new t.LatLng(970,1697),alreadyGuessed:!1},{name:"Indigo Plateau",coords:new t.LatLng(1035,1561),alreadyGuessed:!1}]},20603:(e,o,n)=>{"use strict";n.d(o,{Z:()=>t});let t={Kanto:{ogTheme:[{name:"Viridian City/Pewter City/Saffron City Theme",file:"/audio/kanto/OG viridian.mp3",towns:["Viridian City","Pewter City","Saffron City"]},{name:"Celadon Theme",file:"/audio/kanto/OG celadon.mp3",towns:["Celadon City"]},{name:"Lavender Town Theme",file:"/audio/kanto/OG lavender.mp3",towns:["Lavender Town"]},{name:"Cerulean City/Fucshia City Theme",file:"/audio/kanto/OG cerulean.mp3",towns:["Cerulean City","Fucshia City"]},{name:"Vermilion City Theme",file:"/audio/kanto/OG vermilion.mp3",towns:["Vermilion City"]},{name:"Cinnabar Island Theme",file:"/audio/kanto/OG cinnabar.mp3",towns:["Cinnabar Island"]},{name:"Pallet Town",file:"/audio/kanto/OG pallet.mp3",towns:["Pallet Town"]},{name:"Indigo Plateau",file:"/audio/kanto/OG indigo.mp3",towns:["Indigo Plateau"]}],theme:[{name:"Viridian City/Pewter City/Saffron City Theme",file:"/audio/kanto/viridian.mp3",towns:["Viridian City","Pewter City","Saffron City"]},{name:"Celadon Theme",file:"/audio/kanto/celadon.mp3",towns:["Celadon City"]},{name:"Lavender Town Theme",file:"/audio/kanto/lavender.mp3",towns:["Lavender Town"]},{name:"Cerulean City/Fucshia City Theme",file:"/audio/kanto/cerulean.mp3",towns:["Cerulean City","Fucshia City"]},{name:"Vermilion City Theme",file:"/audio/kanto/vermilion.mp3",towns:["Vermilion City"]},{name:"Cinnabar Island Theme",file:"/audio/kanto/cinnabar.mp3",towns:["Cinnabar Island"]},{name:"Pallet Town",file:"/audio/kanto/pallet.mp3",towns:["Pallet Town"]},{name:"Indigo Plateau",file:"/audio/kanto/indigo.mp3",towns:["Indigo Plateau"]}]},Johto:{ogTheme:[{name:"Cianwood City/Ecruteak City Theme",file:"/audio/johto/OG cianwood.mp3",towns:["Cianwood City","Ecruteak City"]},{name:"Violet City/Olivine City Theme",file:"/audio/johto/OG violet.mp3",towns:["Violet City","Olivine City"]},{name:"Goldenrod City Theme",file:"/audio/johto/OG goldenrod.mp3",towns:["Goldenrod City"]},{name:"Azalea Town/Blackthorn City Theme",file:"/audio/johto/OG azalea.mp3",towns:["Azalea Town","Blackthorn City"]},{name:"Cherrygrove City/Mahogany Town Theme",file:"/audio/johto/OG mahogany.mp3",towns:["Cherrygrove City","Mahogany Town"]},{name:"New Bark Town Theme",file:"/audio/johto/OG new bark.mp3",towns:["New Bark Town"]}],theme:[{name:"Cianwood City Theme",file:"/audio/johto/cianwood.mp3",towns:["Cianwood City"]},{name:"Violet City/Olivine City Theme",file:"/audio/johto/violet.mp3",towns:["Violet City","Olivine City"]},{name:"Ecruteak City Theme",file:"/audio/johto/ecruteak.mp3",towns:["Ecruteak City"]},{name:"Goldenrod City Theme",file:"/audio/johto/goldenrod.mp3",towns:["Goldenrod City"]},{name:"Azalea Town/Blackthorn City Theme",file:"/audio/johto/azalea.mp3",towns:["Azalea Town","Blackthorn City"]},{name:"Cherrygrove City/Mahogany Town Theme",file:"/audio/johto/mahogany.mp3",towns:["Cherrygrove City","Mahogany Town"]},{name:"New Bark Town Theme",file:"/audio/johto/new bark.mp3",towns:["New Bark Town"]}]}}},54030:()=>{},28021:()=>{}}]);