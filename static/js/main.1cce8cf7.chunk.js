(this["webpackJsonpburger-react"]=this["webpackJsonpburger-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/pepsi.eab112a6.png"},function(e,a,t){e.exports=t.p+"static/media/7up.a8158fef.png"},function(e,a,t){e.exports=t.p+"static/media/mirinda.5463a90a.png"},function(e,a,t){e.exports=t.p+"static/media/subway.3d9e438a.png"},,function(e,a,t){e.exports=t.p+"static/media/Fajita.0b802480.png"},,function(e,a,t){e.exports=t(35)},,,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),i=t.n(r),s=(t(27),t(28),t(29),t(3)),l=t(7),m=t(15),o=t.n(m),u=t(16),E=t.n(u),d=t(17),b=t.n(d),p=t(18),v=t.n(p),N=t(6),g=t(5),f=t(37),h=(t(32),function(){Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("totalPrice")),a=JSON.parse(localStorage.getItem("subways"));e&&d(e),a&&r(a)}),[]);var e=Object(n.useState)({lettuce:0,tomato:0,cheese:0,chicken:0,beef:0,pepsi:0,sevenUp:0,mirinda:0}),a=Object(l.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(0),m=Object(l.a)(i,2),u=m[0],d=m[1];Object(n.useEffect)((function(){localStorage.setItem("subways",JSON.stringify(t)),localStorage.setItem("totalPrice",JSON.stringify(u))}),[u,t]);var p=function(e,a){var n,c,i;switch(a){case"lettuce":n=t.lettuce,i=u,c=10;break;case"tomato":n=t.tomato,i=u,c=20;break;case"cheese":n=t.cheese,i=u,c=30;break;case"chicken":n=t.chicken,i=u,c=50;break;case"beef":n=t.beef,i=u,c=60;break;case"pepsi":n=t.pepsi,i=u,c=200;break;case"sevenUp":n=t.sevenUp,i=u,c=200;break;case"mirinda":n=t.mirinda,i=u,c=200}switch("add"===e?n<1&&(n+=1,i+=c):(n-=1)>=0&&(i-=c),a){case"lettuce":r(Object(s.a)(Object(s.a)({},t),{},{lettuce:n>=0?n:0}));break;case"tomato":r(Object(s.a)(Object(s.a)({},t),{},{tomato:n>=0?n:0}));break;case"cheese":r(Object(s.a)(Object(s.a)({},t),{},{cheese:n>=0?n:0}));break;case"chicken":r(Object(s.a)(Object(s.a)({},t),{},{chicken:n>=0?n:0}));break;case"beef":r(Object(s.a)(Object(s.a)({},t),{},{beef:n>=0?n:0}));break;case"pepsi":r(Object(s.a)(Object(s.a)({},t),{},{pepsi:n>=0?n:0}));break;case"sevenUp":r(Object(s.a)(Object(s.a)({},t),{},{sevenUp:n>=0?n:0}));break;case"mirinda":r(Object(s.a)(Object(s.a)({},t),{},{mirinda:n>=0?n:0}))}d(i)},h=function(e){t.chicken<0&&e.push(c.a.createElement("div",{className:"chickenSide"})),t.beef<0&&e.push(c.a.createElement("div",{className:"beefSide"}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navBar"},c.a.createElement("img",{className:"subwayLogo",src:v.a}),c.a.createElement("h6",{className:"navText"},"Create Your Own Subway"),c.a.createElement(N.a,{className:"backIcon",icon:g.a})),c.a.createElement("div",{className:"subwayContainer"},c.a.createElement("div",{className:"innerSubwayContainer"},c.a.createElement("div",{className:"subwayDrinkContainer"},c.a.createElement("div",{className:"subwayIngredients scrollbar"},c.a.createElement("div",{className:"topSide"}),function(){for(var e=[],a=0;a<t.lettuce;a++)e.push(c.a.createElement("div",{className:"lettuceSide"}));for(var n=0;n<t.tomato;n++)e.push(c.a.createElement("div",{className:"tomatoSide"}));for(var r=0;r<t.cheese;r++)e.push(c.a.createElement("div",{className:"cheeseSide"}));for(var i=0;i<t.chicken;i++)0===t.beef&&e.push(c.a.createElement("div",{className:"chickenSide"},h(e)));for(var s=0;s<t.beef;s++)0===t.chicken&&e.push(c.a.createElement("div",{className:"beefSide"},h()));return 0===e.length&&e.push(),e}(),c.a.createElement("div",{className:"bottomSide"})),c.a.createElement("div",{className:"drinkContainer"},t.pepsi>0?c.a.createElement("img",{className:"drinksImage",src:o.a,alt:"pepsi"}):t.sevenUp>0?c.a.createElement("img",{className:"drinksImage",src:E.a,alt:"sevenup"}):t.mirinda>0?c.a.createElement("img",{className:"drinksImage",src:b.a,alt:"mirinda"}):void 0)),c.a.createElement("div",{className:"priceCounter"},c.a.createElement("strong",null,"Total:")," Rs.",u),c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"ingredientsBlock"},c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Veggies")),c.a.createElement("div",{className:"ingredientsWithButtons"},c.a.createElement("p",null,"LETTUCE"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return p("add","lettuce")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","lettuce")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("div",{className:"ingredientsWithButtons"},c.a.createElement("p",null,"TOMATO"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return p("add","tomato")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","tomato")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"ingredientsWithButtons"},c.a.createElement("p",null,"CHEESE"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return p("add","cheese")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","cheese")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Meat")),c.a.createElement("div",{className:0===t.beef?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"CHICKEN"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return p("add","chicken")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","chicken")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("div",{className:0===t.chicken?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"BEEF"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){return p("add","beef")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","beef")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"Drinks")),c.a.createElement("div",{className:0===t.mirinda&&0===t.sevenUp?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"PEPSI"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){0===t.sevenUp&&0===t.mirinda&&p("add","pepsi")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","pepsi")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("div",{className:0===t.pepsi&&0===t.mirinda?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"7UP"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){0===t.pepsi&&0===t.mirinda&&p("add","sevenUp")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","sevenUp")}},c.a.createElement(N.a,{icon:g.b})))),c.a.createElement("div",{className:0===t.pepsi&&0===t.sevenUp?"ingredientsWithButtons":"none"},c.a.createElement("p",null,"MIRINDA"),c.a.createElement("div",{className:"ingrBtns"},c.a.createElement("button",{className:"ingrBtn",onClick:function(){0===t.pepsi&&0===t.sevenUp&&p("add","mirinda")}},c.a.createElement(N.a,{icon:g.c})),c.a.createElement("button",{className:"ingrBtn remove",onClick:function(){return p("remove","mirinda")}},c.a.createElement(N.a,{icon:g.b}))))),c.a.createElement(f.a,{className:"ingredientsButton"},"Done")))))}),k=(t(34),t(20)),B=t.n(k),O=t(11),S=function(){return c.a.createElement("div",{className:"homePage"},c.a.createElement("div",{className:"left"},c.a.createElement("div",{className:"textSection"},c.a.createElement("p",{className:"tagline"},"ORDER SUBWAYS THE EASY WAY!"),c.a.createElement(O.b,{to:"/subway-builder/subway"},c.a.createElement("button",{type:"button",class:"btn btn-light",className:"myButton"},"Build Now")))),c.a.createElement("div",{className:"right"}),c.a.createElement("h1",{className:"center"},"SUB",c.a.createElement("img",{src:B.a,alt:""}),"WAY"))},w=t(1);var C=function(){return c.a.createElement(O.a,null,c.a.createElement(w.c,null,c.a.createElement(w.a,{exact:!0,path:"/subway-builder",element:c.a.createElement(S,null)}),c.a.createElement(w.a,{path:"/subway-builder/subway",element:c.a.createElement(h,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.1cce8cf7.chunk.js.map