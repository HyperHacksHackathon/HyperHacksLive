(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],[,,,function(t,e,i){},,function(t){t.exports=JSON.parse('[{"title":"Opening Ceremonies","datetime":"2021-10-01T21:00:00Z","location":"Twitch/YouTube","minutes":"60","description":"Everything you need to know to get started at HyperHacks."},{"title":"Team Building","datetime":"2021-10-01T22:00:00Z","location":"Discord","minutes":"60","description":"Activities that will help you find a team."},{"title":"Hacking Starts","datetime":"2021-10-01T23:00:00Z"},{"title":"Expansion 101 with Galicia Gordon","datetime":"2021-10-01T23:00:00Z","location":"Twitch/YouTube","minutes":"60"},{"title":"McMaster Engineering Presentation","datetime":"2021-10-01T24:00:00Z","location":"Twitch/YouTube","minutes":"30"},{"title":"Intro to Flutter (Mobile Apps)","datetime":"2021-10-02T13:00:00Z","location":"Twitch/YouTube","minutes":"60","description":"Beginner Flutter tutorial. Join if you are planning on building a mobile app."},{"title":"Intro to React (Websites)","datetime":"2021-10-02T14:00:00Z","location":"Twitch/YouTube","minutes":"60","description":"Beginner React tutorial. Join if you are planning on building a website."},{"title":"Game Night!","datetime":"2021-10-02T24:00:00Z","location":"Discord","minutes":"60","description":"Join us on Discord for some fun games!"},{"title":"Cursed Coding Challenge","datetime":"2021-10-03T16:00:00Z","location":"Discord","minutes":"60","description":"The worst code is the best code in this CCC"},{"title":"Hacking Ends","datetime":"2021-10-03T20:00:00Z"},{"title":"Closing Ceremonies","datetime":"2021-10-04T01:00:00Z","location":"Twitch/YouTube","minutes":"60"}]')},,,,,function(t,e,i){},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),c=i(4),s=i.n(c),l=(i(10),i(3),i(0));var o=function(){return Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsx)("div",{class:"container-fluid",children:Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"HyperHacks Live"})})})};i.p,i(12);var r=function(t){return Object(l.jsx)("div",{class:"py-2",children:Object(l.jsxs)("div",{class:"card shadow-lg pointer","data-target":"#collapseExample",style:{border:"none",borderRadius:"10px",padding:0},onClick:t.onClick,children:[Object(l.jsx)("div",{class:"card-body",style:{textAlign:"left"},"data-toggle":"collapse","data-target":"#"+t.title,children:Object(l.jsxs)("div",{class:"row",children:[Object(l.jsxs)("div",{class:"col-8",children:[Object(l.jsx)("h1",{class:"widget-title",children:t.title}),Object(l.jsx)("p",{class:"widget-subtitle",children:t.subtitle})]}),Object(l.jsx)("div",{class:"col",children:Object(l.jsx)("h1",{class:"trailing",children:Object(l.jsx)("img",{class:"trailing-image",src:t.trailing})})})]})}),Object(l.jsx)("div",{class:"collapse"+(void 0==t.children?"":" p-1"),id:t.title,children:t.children})]})})},d=i.p+"static/media/arrow-right.13e50b5b.svg",b=i.p+"static/media/external.dda65dca.svg",u=i(5);var h=function(){var t=u.map((function(t){return{item:t,timeuntil:((new Date(t.datetime)-Date.now())/1e3).toFixed(0)}}));return(t=t.filter((function(t){return t.timeuntil>-3600}))).sort((function(t,e){return t.timeuntil-e.timeuntil})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{class:"row mt-2 px-3",children:[Object(l.jsxs)("div",{class:"col-md-6",children:[Object(l.jsx)(r,{title:"Schedule",subtitle:"Up Next: "+t[0].item.title,trailing:d,children:t.map((function(t){var e=t.timeuntil,i=Math.abs(Math.ceil(e/86400)),n=Math.abs(Math.floor(e%86400/3600)),a=Math.abs(Math.floor(e%3600/60)),c=Math.abs(Math.floor(e%60)),s="";s=i>1?i+" Days":n>0?n+"hr "+a+"min":a+"min "+c+"s",s+=e<0?" Ago":" Away";var o={weekday:"long",hour:"numeric",minute:"numeric"},r=new Date(t.item.datetime).toLocaleDateString("en-US",o),d="";return d=s,i>1&&(d=new Date(t.item.datetime).toLocaleDateString("en-US",o)),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"modal fade",id:t.item.title,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(l.jsx)("div",{class:"modal-dialog",role:"document",children:Object(l.jsxs)("div",{class:"modal-content",children:[Object(l.jsx)("div",{class:"modal-header",children:Object(l.jsxs)("div",{class:"row",style:{margin:"auto",textAlign:"center"},children:[Object(l.jsx)("h5",{class:"modal-title text-center",id:"exampleModalLabel",children:Object(l.jsx)("b",{children:t.item.title})})," ",Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.item.description})]})}),Object(l.jsxs)("div",{class:"modal-body",children:[r," ",Object(l.jsx)("br",{}),s," ",Object(l.jsx)("br",{}),t.item.location]}),Object(l.jsx)("div",{class:"modal-footer",children:Object(l.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"})})]})})}),Object(l.jsxs)("p",{class:"btn btn-primary","data-toggle":"modal","data-target":"#"+t.item.title,children:[Object(l.jsx)("b",{children:t.item.title})," - "+d]})]})}))}),Object(l.jsx)(r,{title:"Discord",subtitle:"Join Now",trailing:b,onClick:function(){return window.open("https://discord.gg/bYBzYV88tZ")}})]}),Object(l.jsxs)("div",{class:"col-md-6 py-0",children:[Object(l.jsx)(r,{title:"YouTube",subtitle:"Watch Live",trailing:b,onClick:function(){return window.open("https://www.youtube.com/channel/UC1ql_UDrZ1SR5Estfjv5zgA")}}),Object(l.jsx)(r,{title:"Twitch",subtitle:"Watch Live",trailing:b,onClick:function(){return window.open("https://www.twitch.tv/hyper_hacks")}})]})]})]})},j=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;i(t),n(t),a(t),c(t),s(t)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()}],[[13,1,2]]]);
//# sourceMappingURL=main.f3bee550.chunk.js.map