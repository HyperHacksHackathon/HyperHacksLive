(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],[,,,function(t,e,i){},,function(t){t.exports=JSON.parse('[{"title":"Opening Ceremonies","datetime":"2021-10-01T21:00:00Z","location":"Twitch/YouTube","minutes":"60"},{"title":"Team Building","datetime":"2021-10-01T22:00:00Z","location":"Discord","minutes":"60"},{"title":"Hacking Starts","datetime":"2021-10-01T23:00:00Z","location":"","minutes":"0"},{"title":"Expansion 101 with Galicia Gordon","datetime":"2021-10-01T23:00:00Z","location":"Twitch/YouTube","minutes":"60"},{"title":"McMaster Engineering Presentation","datetime":"2021-10-01T24:00:00Z","location":"Twitch/YouTube","minutes":"30"},{"title":"Intro to Flutter (Mobile Apps)","datetime":"2021-10-02T13:00:00Z","location":"Twitch/YouTube","minutes":"60"},{"title":"Intro to React (Websites)","datetime":"2021-10-02T14:00:00Z","location":"Twitch/YouTube","minutes":"60"},{"title":"Game Night!","datetime":"2021-10-02T24:00:00Z","location":"Discord","minutes":"60"},{"title":"Cursed Coding Challenge","datetime":"2021-10-03T16:00:00Z","location":"Discord","minutes":"60"},{"title":"Hacking Ends","datetime":"2021-10-03T20:00:00Z","location":"Discord","minutes":"0"},{"title":"Closing Ceremonies","datetime":"2021-10-04T01:00:00Z","location":"Discord","minutes":"60"}]')},,,,,function(t,e,i){},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),l=i(4),c=i.n(l),s=(i(10),i(3),i(0));var o=function(){return Object(s.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsx)("div",{class:"container-fluid",children:Object(s.jsx)("a",{class:"navbar-brand",href:"#",children:"HyperHacks"})})})};i.p,i(12);var d=function(t){return Object(s.jsx)("div",{class:"py-2 px-3",children:Object(s.jsxs)("div",{class:"card shadow-lg pointer","data-target":"#collapseExample",style:{border:"none",borderRadius:"10px",padding:0},onClick:t.onClick,children:[Object(s.jsx)("div",{class:"card-body",style:{textAlign:"left"},"data-toggle":"collapse","data-target":"#"+t.title,children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsxs)("div",{class:"col-8",children:[Object(s.jsx)("h1",{class:"widget-title",children:t.title}),Object(s.jsx)("p",{class:"widget-subtitle",children:t.subtitle})]}),Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("h1",{class:"trailing",children:Object(s.jsx)("img",{class:"trailing-image",src:t.trailing})})})]})}),Object(s.jsx)("div",{class:"collapse"+(void 0==t.children?"":" p-1"),id:t.title,children:t.children})]})})},r=i.p+"static/media/arrow-right.13e50b5b.svg",b=i.p+"static/media/external.dda65dca.svg",j=i(5);var m=function(){var t=j.map((function(t){return{item:t,timeuntil:((new Date(t.datetime)-Date.now())/1e3).toFixed(0)}}));return(t=t.filter((function(t){return t.timeuntil>-3600}))).sort((function(t,e){return t.timeuntil-e.timeuntil})),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsxs)("div",{class:"row mt-2",children:[Object(s.jsxs)("div",{class:"col-md-6",children:[Object(s.jsx)(d,{title:"Schedule",subtitle:"Up Next: "+t[0].item.title,trailing:r,children:t.map((function(t){var e=t.timeuntil,i=Math.abs(Math.ceil(e/86400)),n=Math.abs(Math.floor(e%86400/3600)),a=Math.abs(Math.floor(e%3600/60)),l=Math.abs(Math.floor(e%60)),c="";c=i>1?i+" Days":n>0?n+"hr "+a+"min":a+"min "+l+"s",c+=e<0?" Ago":" Away";var o={weekday:"long",hour:"numeric",minute:"numeric"},d=new Date(t.item.datetime).toLocaleDateString("en-US",o),r="";return r=c,i>1&&(r=new Date(t.item.datetime).toLocaleDateString("en-US",o)),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{class:"modal fade",id:t.item.title,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{class:"modal-dialog",role:"document",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsx)("div",{class:"modal-header",children:Object(s.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:t.item.title})}),Object(s.jsxs)("div",{class:"modal-body",children:[d," ",Object(s.jsx)("br",{}),c," ",Object(s.jsx)("br",{}),t.item.location]}),Object(s.jsx)("div",{class:"modal-footer",children:Object(s.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"})})]})})}),Object(s.jsxs)("p",{"data-toggle":"modal","data-target":"#"+t.item.title,children:[Object(s.jsx)("b",{children:t.item.title})," - "+r]})]})}))}),Object(s.jsx)(d,{title:"Discord",subtitle:"Join Now",trailing:b,onClick:function(){return window.open("https://discord.gg/bYBzYV88tZ")}})]}),Object(s.jsxs)("div",{class:"col-md-6 py-0",children:[Object(s.jsx)(d,{title:"YouTube",subtitle:"Link Coming Soon",trailing:b}),Object(s.jsx)(d,{title:"Twitch",subtitle:"Link Coming Soon",trailing:b})]})]})]})},u=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,l=e.getLCP,c=e.getTTFB;i(t),n(t),a(t),l(t),c(t)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.c69af70c.chunk.js.map