(function(e){function n(n){for(var r,o,u=n[0],i=n[1],f=n[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-08ae749c":"53c711b1","chunk-380c8337":"f9e83c6d","chunk-6dafcaa0":"09c39066","chunk-7a7b3d48":"c618af0f","chunk-af48f40c":"2550209d"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-08ae749c":1,"chunk-380c8337":1,"chunk-6dafcaa0":1,"chunk-7a7b3d48":1,"chunk-af48f40c":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-08ae749c":"93293fb2","chunk-380c8337":"1899d738","chunk-6dafcaa0":"7e137fd6","chunk-7a7b3d48":"6f3f6845","chunk-af48f40c":"18ec78ef"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){f=l[u],d=f.getAttribute("data-href");if(d===r||d===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],s.parentNode.removeChild(s),t(c)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;f=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var s=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},a=[],c={},u=c,i=t("2877"),f=Object(i["a"])(u,o,a,!1,null,null,null),d=f.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("dad3")),s=t("dc59");r["a"].use(l["a"]);var p=[{path:"/",component:function(){return t.e("chunk-af48f40c").then(t.bind(null,"7b3d"))},meta:{requiresAuth:!0},children:[{path:"home",name:"home",component:function(){return t.e("chunk-08ae749c").then(t.bind(null,"6511"))}},{path:"/profile",name:"profile",component:function(){return t.e("chunk-380c8337").then(t.bind(null,"b3b1"))}}]},{path:"/",component:function(){return t.e("chunk-6dafcaa0").then(t.bind(null,"8578"))},children:[{path:"/login",name:"login",component:function(){return t.e("chunk-7a7b3d48").then(t.bind(null,"dd7b"))}}]}],h=new l["a"]({mode:"history",base:"/",routes:p});h.beforeEach((function(e,n,t){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!s["a"].currentUser?t("/login"):t()}));var m=h,b=t("a46b"),v=t("1d11"),g=t("8695");b["c"].add(v["b"],v["e"],v["d"],v["c"],v["a"]),r["a"].component("font-awesome-icon",g["a"]),r["a"].config.productionTip=!1,new r["a"]({router:m,render:function(e){return e(d)}}).$mount("#app")},dc59:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return i}));var r=t("4f60"),o=(t("256a"),t("1862"),{apiKey:"AIzaSyCganQFIg-hAKir5meilM8DLyBMe5ri71w",authDomain:"todo-list-vuejs-df1d2.firebaseapp.com",projectId:"todo-list-vuejs-df1d2",storageBucket:"todo-list-vuejs-df1d2.appspot.com",messagingSenderId:"159076394063",appId:"1:159076394063:web:d2eeb01c1f045687e5b63a"});r["a"].initializeApp(o);var a=r["a"].firestore(),c=r["a"].auth(),u=a.collection("profile"),i=a.collection("tasks")}});
//# sourceMappingURL=app.f5b8fc79.js.map