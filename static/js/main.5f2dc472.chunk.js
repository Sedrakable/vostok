(this.webpackJsonpvostok=this.webpackJsonpvostok||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(8),i=c.n(n),r=(c(13),c(0)),j=function(e){var t=e.className,c=e.href,a=e.image;return Object(r.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",c);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},href:c,children:Object(r.jsx)("img",{src:a,className:t})})},m=c.p+"static/media/News.b4d50cd6.svg",o=c.p+"static/media/Products.17da27b5.svg",d=c.p+"static/media/About.c1619561.svg",l=c.p+"static/media/Contact.6c9ff026.svg",u=c.p+"static/media/Cart.aa0808af.svg",b=c.p+"static/media/Main Logo.9b896489.svg",O=function(){return Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsx)("div",{className:"left",children:Object(r.jsx)(j,{image:u})}),Object(r.jsxs)("div",{className:"middle",children:[Object(r.jsx)(j,{href:"/news",className:"TabButton",image:m}),Object(r.jsx)(j,{href:"/products",className:"TabButton",image:o}),Object(r.jsx)(j,{href:"/",className:"MainLogo",image:b}),Object(r.jsx)(j,{href:"/about",className:"TabButton",image:d}),Object(r.jsx)(j,{href:"/contact",className:"TabButton",image:l})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)(j,{href:"/shop",className:"ShopButton",image:u})})]})},f=c(2),x=function(e){var t=e.items.map((function(e){return Object(r.jsxs)("div",{className:"ImageWrap ",children:[Object(r.jsx)("img",{className:"Image",src:e.image}),Object(r.jsx)("div",{className:"text abs background",children:e.text})]},e.text)}));return Object(r.jsx)(s.a.Fragment,{children:t})},g=c.p+"static/media/Arrow.b28af130.svg",h=function(e){var t=e.name,c=e.onClick;return Object(r.jsx)("a",{className:"Arrow ".concat(t),onClick:c,children:Object(r.jsx)("img",{src:g})})},p=c(6),v=c.p+"static/media/Diamond.f88ee9ed.svg",N=c.p+"static/media/Diamond Red.ef265c06.svg",w=-1,k=function(e){var t=e.max,c=e.num,s=Object(a.useRef)(),n=Object(a.useState)([]),i=Object(f.a)(n,2),j=i[0],m=i[1],o=Object(a.useState)(c),d=Object(f.a)(o,2),l=d[0],u=d[1],b=function(e){return w++,Object(r.jsx)("a",{className:"diamond",children:Object(r.jsx)("img",{id:"diamond_".concat(w),src:e})})};return Object(a.useEffect)((function(){!function(){for(var e=0;e<t+1;e++)m(0===e?function(e){return[].concat(Object(p.a)(e),[b(N)])}:function(e){return[].concat(Object(p.a)(e),[b(v)])})}()}),[]),Object(a.useEffect)((function(){var e=s.current.children[c],t=s.current.children[l];null!=e&&(t.children[0].src=v,e.children[0].src=N),u(c)}),[c]),Object(r.jsx)("div",{ref:s,id:"dots",className:"dots",children:j})},C=(c(7),c.p+"static/media/cards 1.e7a98526.jpg"),S=c.p+"static/media/cards 2.a8d9a20e.jpg",B=c.p+"static/media/cards 3.d96630e1.jpg",E=c.p+"static/media/cards 4.0a2816f9.jpg",T=c.p+"static/media/Title.8ffb9403.svg",A=c.p+"static/media/Corner.fc8444ad.svg",_=[{image:C,text:"King Spades"},{image:S,text:"All Cards"},{image:B,text:"King Hearts"},{image:E,text:"Card Box"}],y=function(){var e=Object(a.useRef)(),t=Object(a.useState)(0),c=Object(f.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(null),j=Object(f.a)(i,2),m=j[0],o=j[1],d=Object(a.useState)(0),l=Object(f.a)(d,2),u=l[0],b=l[1],O=Object(a.useState)(1),g=Object(f.a)(O,2),p=g[0],v=g[1],N=function(){b(u<m?u+1:0)};Object(a.useEffect)((function(){var t=e.current.children.length;o(t-1)}),[]),Object(a.useEffect)((function(){n(-100*u),v(p);var e=setInterval((function(){N()}),5e3);return function(){clearInterval(e)}}),[u]);var w={transform:"translateX(".concat(s,"%)"),transition:"transform ".concat(p,"s")};return Object(r.jsxs)("div",{className:"NewBox",children:[Object(r.jsx)("div",{ref:e,style:w,className:"Pack",children:Object(r.jsx)(x,{items:_})}),Object(r.jsx)(h,{name:"prev",onClick:function(){b(u>0?u-1:m)}}),Object(r.jsx)(h,{name:"next",onClick:function(){return N()}}),Object(r.jsxs)("div",{className:"Title",children:[Object(r.jsx)("img",{className:"corner TL",src:A}),Object(r.jsx)("img",{className:"corner TR",src:A}),Object(r.jsx)("img",{className:"corner BR",src:A}),Object(r.jsx)("img",{className:"corner BL",src:A}),Object(r.jsx)("img",{className:"logo_image",src:T})]}),m?Object(r.jsx)(k,{max:m,num:u}):null]})},L=function(e){var t=e.path,c=e.children,s=Object(a.useState)(window.location.pathname),n=Object(f.a)(s,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){var e=function(){r(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),i===t?c:null},P=function(e){var t=e.items.map((function(e){return Object(r.jsxs)("div",{className:"Item",children:[Object(r.jsxs)("div",{className:"image_wrapper",children:[Object(r.jsx)("img",{className:"product_image",src:e.image}),Object(r.jsx)("div",{className:"text name",children:e.name})]}),Object(r.jsxs)("div",{className:"item_buttons",children:[Object(r.jsxs)("div",{className:"text price item_button",children:["Buy ",e.price,"$"]}),Object(r.jsx)("img",{className:"add2cart item_button",src:u})]})]},e.name)}));return Object(r.jsx)("div",{className:"ProductGrid",children:t})},I=(c(15),[{name:"Animal Gangdom",price:6.99,image:C},{name:"Greek Gods",price:19.99,image:S},{name:"Anchient Civs",price:8.99,image:B},{name:"Anchient Civs 2",price:12.99,image:E}]),R=function(){return Object(r.jsxs)("div",{className:"Products",children:[Object(r.jsx)("h1",{className:"pageTitle",children:"Products"}),Object(r.jsx)("h1",{className:"pageDescription",children:"Amazing decks that push the bounderies of awesomeness"}),Object(r.jsx)(P,{items:I})]})},D=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{}),Object(r.jsx)(L,{path:"/",children:Object(r.jsx)(y,{})}),Object(r.jsx)(L,{path:"/products",children:Object(r.jsx)(R,{})})]})};i.a.render(Object(r.jsx)(D,{}),document.querySelector("#root"))},7:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.5f2dc472.chunk.js.map