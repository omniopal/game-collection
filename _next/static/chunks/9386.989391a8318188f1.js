(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9386],{41234:()=>{},87835:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>C});var o=l(95155),s=l(12115);l(28021);var n=l(98741),a=l(35761),r=l(11828),c=l(66656),i=l(43463),d=l(48940),h=l(37578),u=l(55490),m=l(7303),g=l(39567),x=l.n(g),p=l(31237),f=l(92114);let j=e=>{for(let t of p.Z)if(t.name===e)return"Kanto";for(let t of f.c)if(t.name===e)return"Johto";return"Hoenn"};var v=l(78416),S=l(80906),I=l(1396),N=l(36417),w=l(27753);l(54030);var b=l(32444),y=l(24508);let k=e=>{let{isOpen:t,setIsDialogOpen:l}=e,[n,a]=(0,s.useState)(!1),[r,i]=(0,s.useState)([]);(0,s.useEffect)(()=>{let e=localStorage.getItem("guesses");e&&i(e.split(","))},[t]);let d=async()=>{let e=m(),t="Pok\xe9Melody #".concat(e," Results:\n"),l=localStorage.getItem("guesses");if(l){let e=l.split(",");i(e),e.forEach((e,l)=>{let o="\uD83C\uDFB5 #".concat(l+1,": "),s=Number.parseInt(e);for(let e=0;e<s;e++)s-1===e?o+="✅\n":o+="❌";t+=o}),t+="Total guesses: ".concat(u(e))}try{await navigator.clipboard.writeText(t),a(!0)}catch(e){console.error("Failed to copy results to clipboard:",e)}},h=(e,t)=>{"clickaway"!==t&&a(!1)},u=e=>{let t=0;return e.forEach(e=>{t+=Number.parseInt(e)}),t};function m(){return Math.floor(Math.abs(new Date("2025-02-18").getTime()-new Date(new Date().toLocaleDateString("en-CA",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone})).getTime())/864e5)+1}return(0,o.jsxs)(v.A,{className:"dialog",open:t,PaperProps:{sx:{backgroundColor:"hsl(198, 50%, 10%)"}},children:[(0,o.jsx)(S.A,{open:n,autoHideDuration:3e3,onClose:h,anchorOrigin:{horizontal:"center",vertical:"top"},children:(0,o.jsx)(I.A,{onClose:h,severity:"success",variant:"filled",children:"Results copied to clipboard"})}),(0,o.jsx)(N.A,{className:"dialog-title",sx:{paddingBlockEnd:0},children:(0,o.jsx)("p",{children:"Thanks for playing today!"})}),(0,o.jsxs)(w.A,{className:"dialog-content",children:[(0,o.jsxs)("h3",{className:"your-results",children:["Your Pok\xe9Melody ",m()," results:"]}),(0,o.jsx)("table",{className:"table",children:(0,o.jsx)("tbody",{children:r.map((e,t)=>(0,o.jsxs)("tr",{className:"tr",children:[(0,o.jsxs)("td",{className:"td",children:[(0,o.jsx)(y.A,{sx:{dispaly:"flex",color:"hsl(258, 80%, 80%)"}}),(0,o.jsxs)("div",{children:["#",t+1,":"]})]}),(0,o.jsxs)("td",{children:[e," ",1===Number.parseInt(e)?"guess":"guesses"]})]},t))})}),(0,o.jsxs)("div",{className:"total-guesses",children:["Total guesses: ",(0,o.jsx)("span",{className:"your-results",children:u(r)})]}),(0,o.jsxs)("button",{className:"share-button",onClick:d,children:["Copy ",(0,o.jsx)(b.A,{fontSize:"small"})]}),(0,o.jsx)(c.A,{sx:{textDecoration:"none",color:"hsl(198, 50%, 10%)",fontWeight:600,padding:0},className:"link",href:"/freeplay",onClick:()=>l(!1),children:"Go to Free Play"})]})]})};var T=l(87092);let C=()=>{var e,t;let[l,g]=(0,s.useState)(""),[p,f]=(0,s.useState)(""),v=(0,s.useRef)(null),[S,I]=(0,s.useState)(null),[N,w]=(0,s.useState)([]),[b,y]=(0,s.useState)("Kanto"),[C,A]=(0,s.useState)([]),[D,M]=(0,s.useState)([]),[Z,E]=(0,s.useState)(!1),[L,P]=(0,s.useState)([]),[O,F]=(0,s.useState)([]),R=Number.parseInt(null!==(t=localStorage.getItem("themeIndex"))&&void 0!==t?t:"1"),[z,B]=(0,s.useState)(R-1),[H,K]=(0,s.useState)(!1),_=(0,a.A)(),J=(0,r.A)(_.breakpoints.down(700)),W=J?new n.LatLng(800,2102):new n.LatLng(725,2202),Y=J?-2:-1,G=J?"360px":"500px",U=new n.LatLngBounds([0,0],[1600,4405]);(0,s.useEffect)(()=>{var e,t;let l=localStorage.getItem("themeIndex");if(l){let e=Number.parseInt(l);console.log("0");let o=null===(t=L[e-1])||void 0===t?void 0:t.towns[0];console.log(o),y(j(o))}else(null===(e=L[0])||void 0===e?void 0:e.towns)&&(console.log("1"),y(j(L[0].towns[0])));q()},[z]);let q=()=>{if(d.Z[b]){if(v.current&&(v.current.pause(),v.current.currentTime=0),!Z&&z<L.length&&L.length>0){console.log("index: ".concat(z));let e=L[z],t=new Audio(e.file);t.volume=.05,t.play(),v.current=t,I(e.name),console.log("2"),w(e.towns)}if(Z&&z<O.length&&O.length>0){console.log("index: ".concat(z));let e=O[z],t=new Audio(null==e?void 0:e.file);t.volume=.05,t.play(),v.current=t,e&&(I(e.name),w(e.towns)),console.log("2")}}},Q=e=>{if(g(e),S){if(console.log(e),N.includes(e)){var t;f("Correct!");let e=[...C,D.length+1];if(A(e),M([]),null===(t=v.current)||void 0===t||t.pause(),console.log("dailyThemeIndex: "+z),console.log("other: ".concat(L.length-1)),z===L.length-1)localStorage.setItem("guesses",e.toString()),K(!0);else{let e=localStorage.getItem("themeIndex");if(e){let t=Number.parseInt(e);localStorage.setItem("themeIndex","".concat(t+1))}B(z+1)}}else D.includes(e)||M([...D,e]),f("Wrong")}},V=(e,t)=>{let l=[...e];for(let e=l.length-1;e>0;e--){let o=Math.floor(t()*(e+1));[l[e],l[o]]=[l[o],l[e]]}return l},X=()=>{let e=new Date().toISOString().split("T")[0],t=x()(e),l=d.Z.Kanto,o=l.theme.length,s=l.theme[Math.floor(t()*o)],n=l.theme[Math.floor(t()*o)],a=d.Z.Johto,r=a.theme.length,c=a.theme[Math.floor(t()*r)],i=a.theme[Math.floor(t()*r)],h=d.Z.Hoenn,u=h.theme.length;return[s,n,c,i,h.theme[Math.floor(t()*u)],h.theme[Math.floor(t()*u)]]},$=()=>{let e=new Date().toISOString().split("T")[0],t=x()(e);return V(Object.values(d.Z).flatMap(e=>e.ogTheme),t).slice(0,5)};return(0,s.useEffect)(()=>{let e=localStorage.getItem("date"),t=new Date().toISOString().split("T")[0],l=localStorage.getItem("themeIndex");console.log("Local Date: "+e),console.log("Today: "+t),console.log("Theme Index: "+l),e||localStorage.setItem("date",t),e===t&&"6"===l&&K(!0),e&&e!=t&&(localStorage.setItem("date",t),localStorage.setItem("themeIndex","1"),localStorage.removeItem("guesses"));let o=X(),s=$();console.log(o),P(o),F(s);let n=localStorage.getItem("themeIndex");if(n){var a;let e=null===(a=o[Number.parseInt(n)-1])||void 0===a?void 0:a.towns[0];console.log(e),y(j(e))}else localStorage.setItem("themeIndex","1"),y(j(o[0].towns[0]))},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{sx:{marginBlockStart:"8px",marginInlineStart:"8px"},className:"logo-container",href:"/pokemon",children:(0,o.jsx)("img",{className:"logo",src:"/images/logo3.png",alt:"PokeMelody logo"})}),(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("div",{className:"region",children:(0,o.jsxs)("h2",{children:["Region: ",b]})}),(0,o.jsxs)("div",{className:"score-container",children:[(0,o.jsx)("p",{className:"score-label",children:"Round: "}),(0,o.jsxs)("p",{className:"score",children:[localStorage.getItem("themeIndex")," / ",L.length]})]})]}),"Kanto"===b&&(0,o.jsx)(h.y,{handleTownClick:Q,height:G,bounds:U,guesses:D,center:W,zoom:Y}),"Johto"===b&&(0,o.jsx)(u.r,{handleTownClick:Q,height:G,bounds:U,guesses:D,center:W,zoom:Y}),"Hoenn"===b&&(0,o.jsx)(T.d,{handleTownClick:Q,height:G,bounds:U,guesses:D,center:W,zoom:Y}),"Sinnoh"===b&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:"construction",children:"Under construction"}),(0,o.jsx)("h3",{className:"construction",children:"Come back soon :)"})]}),(0,o.jsxs)("div",{className:"stuff",children:[(0,o.jsx)("p",{children:"Play a random theme and then click on which location it belongs to!"}),(0,o.jsxs)("div",{className:"buttons",children:[(0,o.jsx)("button",{className:"button",onClick:q,children:"Play Theme"}),(0,o.jsx)("button",{className:"button",onClick:()=>{var e;return null===(e=v.current)||void 0===e?void 0:e.pause()},children:"Stop music"}),(0,o.jsx)("button",{className:"button",onClick:()=>{localStorage.setItem("themeIndex","1"),B(0),A([])},children:"Reset"})]}),(null===(e=d.Z[b])||void 0===e?void 0:e.ogTheme)&&(0,o.jsxs)("div",{className:"theme-version-toggle",children:[(0,o.jsx)("div",{className:"play-original-theme",children:"Play original themes"}),(0,o.jsx)(m.Y,{onChange:()=>{E(!Z),v.current&&(v.current.pause(),v.current.currentTime=0);let e=Z?d.Z[b].theme:d.Z[b].ogTheme;null==e||e.forEach(e=>{if(console.log("4"),e.towns.includes(N[0])){let t=new Audio(e.file);t.volume=.05,t.play(),v.current=t;return}})}})]}),(0,o.jsxs)("div",{className:"results",children:[(0,o.jsxs)("div",{className:"town-name-display",children:[(0,o.jsx)("p",{children:"Last town selected: "}),(0,o.jsx)("p",{className:"town-name",children:l||"awaiting selection..."})]}),p&&(0,o.jsx)("div",{className:(0,i.A)("Correct!"===p?"correct":"wrong"),children:p})]})]}),(0,o.jsx)(k,{isOpen:H,setIsDialogOpen:K})]})}},54030:()=>{},28021:()=>{}}]);