(this["webpackJsonpburger-react"]=this["webpackJsonpburger-react"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/pepsi.eab112a6.png"},20:function(e,a,t){e.exports=t.p+"static/media/7up.a8158fef.png"},21:function(e,a,t){e.exports=t.p+"static/media/mirinda.5463a90a.png"},22:function(e,a,t){e.exports=t.p+"static/media/subway.3d9e438a.png"},29:function(e,a,t){e.exports=t.p+"static/media/Fajita.0b802480.png"},31:function(e,a,t){e.exports=t(44)},37:function(e,a,t){},38:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),l=t.n(r),i=(t(36),t(37),t(38),t(1)),s=t(7),m=t(19),o=t.n(m),u=t(20),E=t.n(u),d=t(21),b=t.n(d),p=t(22),v=t.n(p),g=t(8),N=t(6),f=t(47),h=t(15),k=(t(41),function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],l=function(){return r(!1)&&p({lettuce:0,tomato:0,cheese:0,chicken:0,beef:0,pepsi:0,sevenUp:0,mirinda:0})};Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("totalPrice")),a=JSON.parse(localStorage.getItem("subways"));e&&S(e),a&&p(a)}),[]);var m=Object(n.useState)({lettuce:0,tomato:0,cheese:0,chicken:0,beef:0,pepsi:0,sevenUp:0,mirinda:0}),u=Object(s.a)(m,2),d=u[0],p=u[1],k=Object(n.useState)(0),B=Object(s.a)(k,2),O=B[0],S=B[1];Object(n.useEffect)((function(){localStorage.setItem("subways",JSON.stringify(d)),localStorage.setItem("totalPrice",JSON.stringify(O))}),[O,d]);var C=function(e,a){var t,n,c;switch(a){case"lettuce":t=d.lettuce,c=O,n=10;break;case"tomato":t=d.tomato,c=O,n=20;break;case"cheese":t=d.cheese,c=O,n=30;break;case"chicken":t=d.chicken,c=O,n=50;break;case"beef":t=d.beef,c=O,n=60;break;case"pepsi":t=d.pepsi,c=O,n=200;break;case"sevenUp":t=d.sevenUp,c=O,n=200;break;case"mirinda":t=d.mirinda,c=O,n=200}switch("add"===e?t<1&&(t+=1,c+=n):(t-=1)>=0&&(c-=n),a){case"lettuce":p(Object(i.a)(Object(i.a)({},d),{},{lettuce:t>=0?t:0}));break;case"tomato":p(Object(i.a)(Object(i.a)({},d),{},{tomato:t>=0?t:0}));break;case"cheese":p(Object(i.a)(Object(i.a)({},d),{},{cheese:t>=0?t:0}));break;case"chicken":p(Object(i.a)(Object(i.a)({},d),{},{chicken:t>=0?t:0}));break;case"beef":p(Object(i.a)(Object(i.a)({},d),{},{beef:t>=0?t:0}));break;case"pepsi":p(Object(i.a)(Object(i.a)({},d),{},{pepsi:t>=0?t:0}));break;case"sevenUp":p(Object(i.a)(Object(i.a)({},d),{},{sevenUp:t>=0?t:0}));break;case"mirinda":p(Object(i.a)(Object(i.a)({},d),{},{mirinda:t>=0?t:0}))}S(c)},j=function(e){d.chicken<0&&e.push(c.a.createElement("div",{className:"chickenSide"})),d.beef<0&&e.push(c.a.createElement("div",{className:"beefSide"}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navBar"},c.a.createElement("img",{className:"subwayLogo",src:v.a}),c.a.createElement("h6",{className:"navText"},"Create Your Own Subway"),c.a.createElement(h.b,{to:"/"},c.a.createElement(g.a,{className:"backIcon",icon:N.a,size:"2x"}))),c.a.createElement("div",{className:"subwayContainer"},c.a.createElement("div",{className:"innerSubwayContainer"},c.a.createElement("div",{className:"subwayDrinkContainer"},c.a.createElement("div",{className:"subwayIngredients scrollbar"},c.a.createElement("div",{className:"topSide"}),function(){for(var e=[],a=0;a<d.lettuce;a++)e.push(c.a.createElement("div",{className:"lettuceSide"}));for(var t=0;t<d.tomato;t++)e.push(c.a.createElement("div",{className:"tomatoSide"}));for(var n=0;n<d.cheese;n++)e.push(c.a.createElement("div",{className:"cheeseSide"}));for(var r=0;r<d.chicken;r++)0===d.beef&&e.push(c.a.createElement("div",{className:"chickenSide"},j(e)));for(var l=0;l<d.beef;l++)0===d.chicken&&e.push(c.a.createElement("div",{className:"beefSide"},j()));return 0===e.length&&e.push(c.a.createElement(c.a.Fragment,null," ",c.a.createElement("br",null)," ")),e}(),c.a.createElement("div",{className:"bottomSide"})),c.a.createElement("div",{className:"drinkContainer"},d.pepsi>0?c.a.createElement("img",{className:"drinksImage",src:o.a,alt:"pepsi"}):d.sevenUp>0?c.a.createElement("img",{className:"drinksImage",src:E.a,alt:"sevenup"}):d.mirinda>0?c.a.createElement("img",{className:"drinksImage",src:b.a,alt:"mirinda"}):void 0)),c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"ingredientsBlock"},c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Veggies")),c.a.createElement("div",{className:"ingredientsWithButtons"},c.a.createElement("p",null,"LETTUCE"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return C("add","lettuce")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","lettuce")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("div",{className:"ingredientsWithButtons"},c.a.createElement("p",null,"TOMATO"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return C("add","tomato")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","tomato")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"ingredientsWithButtons"},c.a.createElement("p",null,"CHEESE"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return C("add","cheese")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","cheese")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Meat")),c.a.createElement("div",{className:0===d.beef?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"CHICKEN"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return C("add","chicken")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","chicken")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("div",{className:0===d.chicken?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"BEEF"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return C("add","beef")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","beef")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Drinks")),c.a.createElement("div",{className:0===d.mirinda&&0===d.sevenUp?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"PEPSI"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){0===d.sevenUp&&0===d.mirinda&&C("add","pepsi")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","pepsi")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("div",{className:0===d.pepsi&&0===d.mirinda?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"7UP"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){0===d.pepsi&&0===d.mirinda&&C("add","sevenUp")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","sevenUp")}},c.a.createElement(g.a,{icon:N.b})))),c.a.createElement("div",{className:0===d.pepsi&&0===d.sevenUp?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"MIRINDA"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){0===d.pepsi&&0===d.sevenUp&&C("add","mirinda")}},c.a.createElement(g.a,{icon:N.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return C("remove","mirinda")}},c.a.createElement(g.a,{icon:N.b}))))),c.a.createElement("button",{type:"button",onClick:function(){return r(!0)},className:"btn btn-light doneButton"},"Done"))),0===O?c.a.createElement(f.a,{show:t,onHide:l},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,"It's Empty!")),c.a.createElement(f.a.Body,null,"Please add ingredients to your Subway!")):c.a.createElement(f.a,{show:t,onHide:l},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,"Woohooo!")),c.a.createElement(f.a.Body,null,"Your Subway is ready."),c.a.createElement(f.a.Footer,null,c.a.createElement("div",{className:"priceCounter"},c.a.createElement("strong",null,"Your need to pay:")," Rs.",O)))))}),B=(t(43),t(29)),O=t.n(B),S=function(){return c.a.createElement("div",{className:"homePage"},c.a.createElement("div",{className:"left"},c.a.createElement("div",{className:"textSection"},c.a.createElement("p",{className:"tagline"},"ORDER SUBWAYS THE EASY WAY!"),c.a.createElement(h.b,{to:"/order"},c.a.createElement("button",{type:"button",class:"btn btn-light",className:"myButton"},"Build Now")))),c.a.createElement("div",{className:"right"}),c.a.createElement("h1",{className:"center"},"SUB",c.a.createElement("img",{src:O.a,alt:""}),"WAY"))},C=t(4);var j=function(){return c.a.createElement(h.a,null,c.a.createElement(C.c,null,c.a.createElement(C.a,{exact:!0,path:"/",element:c.a.createElement(S,null)}),c.a.createElement(C.a,{path:"/order",element:c.a.createElement(k,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.1a5a2250.chunk.js.map