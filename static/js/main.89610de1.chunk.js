(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],[,,,function(t,e,i){},,function(t){t.exports=JSON.parse('[{"title":"Opening Ceremonies","datetime":"2021-10-01T21:00:00Z","location":"livestream"}]')},,,,,function(t,e,i){},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(1),c=i.n(n),s=i(4),l=i.n(s),a=(i(10),i(3),i(0));var r=function(){return Object(a.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsx)("div",{class:"container-fluid",children:Object(a.jsx)("a",{class:"navbar-brand",href:"#",children:"HyperHacks"})})})};i.p,i(12);var d=function(t){return Object(a.jsxs)("div",{class:"card shadow-lg m-3","data-target":"#collapseExample",style:{border:"none",borderRadius:"10px",padding:0},onClick:t.onClick,children:[Object(a.jsx)("div",{class:"card-body",style:{textAlign:"left"},"data-toggle":"collapse","data-target":"#"+t.title,children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsxs)("div",{class:"col-8",children:[Object(a.jsx)("h1",{class:"widget-title",children:t.title}),Object(a.jsx)("p",{class:"widget-subtitle",children:t.subtitle})]}),Object(a.jsx)("div",{class:"col",children:Object(a.jsx)("h1",{class:"trailing",children:Object(a.jsx)("img",{class:"trailing-image",src:t.trailing})})})]})}),Object(a.jsx)("div",{class:"collapse",id:t.title,children:t.children})]})},o=i.p+"static/media/arrow-right.13e50b5b.svg",j=i.p+"static/media/external.dda65dca.svg",u=i(5);var b=function(){var t=u.map((function(t){return{item:t,timeuntil:((new Date(t.datetime)-Date.now())/1e3).toFixed(0)}}));return(t=t.filter((function(t){return t.timeuntil>0}))).sort((function(t,e){return t.timeuntil-e.timeuntil})),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(r,{}),Object(a.jsx)(d,{title:"Schedule",subtitle:"Up Next: "+t[0].item.title,trailing:o,children:t.map((function(t){var e=t.timeuntil,i=Math.ceil(e/86400),n=Math.floor(e%86400/3600),c=Math.floor(e%3600/60),s=Math.floor(e%60),l="";l=i>1?i+" Days":n>0?n+"hr "+c+"min":c+"min "+s+"s";return Object(a.jsx)("p",{children:t.item.title+" - "+l})}))}),Object(a.jsx)(d,{title:"Discord",subtitle:"Join Now",trailing:j,onClick:function(){return window.open("https://discord.gg/bYBzYV88tZ")}})]})},h=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(e){var i=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,l=e.getTTFB;i(t),n(t),c(t),s(t),l(t)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}],[[13,1,2]]]);
//# sourceMappingURL=main.89610de1.chunk.js.map