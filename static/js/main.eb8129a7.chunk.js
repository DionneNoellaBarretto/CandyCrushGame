(this["webpackJsonpcandy-crush-react"]=this["webpackJsonpcandy-crush-react"]||[]).push([[0],{12:function(t,n,r){},14:function(t,n,r){"use strict";r.r(n);var e=r(1),c=r.n(e),u=r(7),o=r.n(u),a=(r(12),r(6)),i=r(3),f=r(0),s=function(t){var n=t.score;return Object(f.jsx)("div",{className:"score-board",children:Object(f.jsxs)("h1",{className:"score",children:[" Your Score : ",n," "]})})},v=r.p+"static/media/red.3658b37c.png",l=r.p+"static/media/blue.73120c15.png",b=r.p+"static/media/green.599f7016.png",d=r.p+"static/media/yellow.a3d87a9b.png",p=r.p+"static/media/orange.f106b2cd.png",g=r.p+"static/media/purple.ae25b8a5.png",j=r.p+"static/media/blank.fbcb9179.png",h=[l,v,b,d,p,g,j],O=function(){var t=Object(e.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],u=Object(e.useState)(null),o=Object(i.a)(u,2),v=o[0],l=o[1],b=Object(e.useState)(null),d=Object(i.a)(b,2),p=d[0],g=d[1],O=Object(e.useState)(0),m=Object(i.a)(O,2),y=m[0],E=m[1],D=function(){for(var t=function(t){var n=[t,t+8,t+16,t+24,t+32],e=r[t],c=r[t]===j;if(n.every((function(t){return r[t]===e&&!c})))return E((function(t){return t+5})),n.forEach((function(t){return r[t]=j})),{v:!0}},n=0;n<=39;n++){var e=t(n);if("object"===typeof e)return e.v}},x=function(){for(var t=function(t){var n=[t,t+8,t+16,t+24,t+32],e=r[t],c=r[t]===j;return[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64].includes(t)?"continue":n.every((function(t){return r[t]===e&&!c}))?(E((function(t){return t+5})),n.forEach((function(t){return r[t]=j})),{v:!0}):void 0},n=0;n<64;n++){var e=t(n);if("continue"!==e&&"object"===typeof e)return e.v}},S=function(){for(var t=function(t){var n=[t,t+8,t+16,t+24],e=r[t],c=r[t]===j;if(n.every((function(t){return r[t]===e&&!c})))return E((function(t){return t+4})),n.forEach((function(t){return r[t]=j})),{v:!0}},n=0;n<=39;n++){var e=t(n);if("object"===typeof e)return e.v}},A=function(){for(var t=function(t){var n=[t,t+1,t+2,t+3],e=r[t],c=r[t]===j;return[5,6,7,,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64].includes(t)?"continue":n.every((function(t){return r[t]===e&&!c}))?(E((function(t){return t+4})),n.forEach((function(t){return r[t]=j})),{v:!0}):void 0},n=0;n<=47;n++){var e=t(n);if("continue"!==e&&"object"===typeof e)return e.v}},I=function(){for(var t=function(t){var n=[t,t+8,t+16],e=r[t]===j,c=r[t];if(n.every((function(t){return r[t]===c&&!e})))return E((function(t){return t+3})),n.forEach((function(t){return r[t]=j})),{v:!0}},n=0;n<=47;n++){var e=t(n);if("object"===typeof e)return e.v}},M=function(){for(var t=function(t){var n=[t,t+1,t+2],e=r[t],c=r[t]===j;return[6,7,15,22,23,30,31,38,39,46,47,54,55,63,64].includes(t)?"continue":n.every((function(t){return r[t]===e&&!c}))?(E((function(t){return t+3})),n.forEach((function(t){return r[t]=j})),{v:!0}):void 0},n=0;n<64;n++){var e=t(n);if("continue"!==e&&"object"===typeof e)return e.v}},k=function(){for(var t=0;t<56;t++){if([0,1,2,3,4,5,6,7].includes(t)&&r[t]===j){var n=Math.floor(Math.random()*h.length);r[t]=h[n]}r[t+8]===j&&(r[t+8]=r[t],r[t]=j)}},N=function(t){l(t.target)},w=function(t){g(t.target)},J=function(t){console.log(t.target);var n=parseInt(v.getAttribute("data-id")),e=parseInt(p.getAttribute("data-id"));r[e]=v.getAttribute("src"),r[n]=p.getAttribute("src");var u=[n-1,n-8,n+1,n+8].includes(e);console.log(n,e);var o=D(),i=x(),f=S(),s=A(),b=I(),d=M();e&&u&&(o||i||f||s||b||d)?(l(null),g(null)):(r[e]=p.getAttribute("src"),r[n]=v.getAttribute("src"),c(Object(a.a)(r)))};return Object(e.useEffect)((function(){!function(){for(var t=[],n=0;n<64;n++){var r=h[Math.floor(Math.random()*h.length)];t.push(r)}c(t)}()}),[]),Object(e.useEffect)((function(){var t=setInterval((function(){D(),S(),I(),x(),A(),M(),k(),c(Object(a.a)(r))}),100);return function(){return clearInterval(t)}}),[D,x,S,A,I,M,k,r]),console.log(r),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"game",children:r.map((function(t,n){return Object(f.jsx)("img",{alt:"candy color",src:t,"data-id":n,draggable:!0,onDragStart:N,onDragOver:function(t){return t.preventDefault()},onDragEnter:function(t){return t.preventDefault()},onDragLeave:function(t){return t.preventDefault()},onDrop:w,onDragEnd:J,style:{backgroundColor:t}},n)}))}),Object(f.jsx)(s,{score:y})]})};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eb8129a7.chunk.js.map