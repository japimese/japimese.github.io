(function(o){function e(e){for(var t,a,i=e[0],l=e[1],u=e[2],s=0,g=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&g.push(r[a][0]),r[a]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(o[t]=l[t]);f&&f(e);while(g.length)g.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var o,e=0;e<c.length;e++){for(var n=c[e],t=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(t=!1)}t&&(c.splice(e--,1),o=i(i.s=n[0]))}return o}var t={},r={app:0},c=[];function a(o){return i.p+"js/"+({about:"about"}[o]||o)+"."+{about:"6334a9c7"}[o]+".js"}function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(o){var e=[],n=r[o];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise((function(e,t){n=r[o]=[e,t]}));e.push(n[2]=t);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(o);var u=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=r[o];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+o+" failed.\n("+t+": "+c+")",u.name="ChunkLoadError",u.type=t,u.request=c,n[1](u)}r[o]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=o,i.c=t,i.d=function(o,e,n){i.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:n})},i.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,e){if(1&e&&(o=i(o)),8&e)return o;if(4&e&&"object"===typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)i.d(n,t,function(e){return o[e]}.bind(null,t));return n},i.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return i.d(e,"a",e),e},i.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},i.p="/",i.oe=function(o){throw console.error(o),o};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(o,e,n){o.exports=n("56d7")},"56d7":function(o,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7a23"),r=n("cf05"),c=n.n(r),a=Object(t["f"])("img",{alt:"Vue logo",src:c.a},null,-1);function i(o,e,n,r,c,i){var l=Object(t["s"])("router-view");return Object(t["o"])(),Object(t["d"])(t["a"],null,[a,Object(t["f"])(l),Object(t["e"])(" "+Object(t["u"])(o.coords),1)],64)}n("d3b7"),n("99af");var l={name:"app",components:{},props:["findLocation"],data:function(){return{geolocation:{lat:null,lon:null}}},watch:{geolocation:function(){this.getWeather()}},created:function(){this.getPosition()},mounted:function(){},methods:{getPosition:function(){var o=this;function e(){if(localStorage.getItem("coords")&&(o.geolocation=JSON.parse(localStorage.getItem("coords")),console.log(o.geolocation)),navigator.geolocation)return navigator.geolocation.getCurrentPosition(n,t,{maximumAge:2e4,timeout:1e4,enableHighAccuracy:!1});console.log("Navigator geolocation unavailable.")}function n(e){console.log("Browser geolocation success!\n\nlat = "+e.coords.latitude+"\nlng = "+e.coords.longitude),o.geolocation.lat=e.coords.latitude,o.geolocation.lon=e.coords.longitude,localStorage.setItem("coords",JSON.stringify(o.geolocation))}function t(o){switch(o.code){case o.TIMEOUT:console.log("Browser geolocation error !\n\nTimeout.");break;case o.PERMISSION_DENIED:0==o.message.indexOf("Only secure origins are allowed")?r():console.log("Permison denied");break;case o.POSITION_UNAVAILABLE:console.log("Browser geolocation error !\n\nPosition unavailable.");break}}function r(){fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU",{method:"GET"}).then((function(o){c({coords:{latitude:o.location.lat,longitude:o.location.lng}})})).catch((function(o){console.log("API Geolocation error! \n\n"+o)}))}function c(e){o.geolocation.lat=e.coords.latitude,o.geolocation.lon=e.coords.longitude,console.log("API geolocation success!\n\nlat = "+o.geolocation.lat+"\nlng = "+o.geolocation.lon),localStorage.setItem("coords",JSON.stringify(o.geolocation))}e()},getWeather:function(){var o="/859ba1bffcef388c78eaf50f570874c1",e="https://api.darksky.net/forecast",n="/".concat(this.geolocation.lat,",").concat(this.geolocation.lon),t=e+o+n;fetch(t).then((function(o){return o.text()})).then((function(o){console.log(o)})).catch((function(o){return console.log("error",o)}))}}};n("78ae");l.render=i;var u=l,s=n("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(o){console.error("Error during service worker registration:",o)}});n("3ca3"),n("ddb0");var f=n("6c02"),g={class:"home"},d=Object(t["f"])("h1",null,"Abuelapp",-1);function p(o,e,n,r,c,a){return Object(t["o"])(),Object(t["d"])("div",g,[d,Object(t["f"])("button",{onClick:e[1]||(e[1]=function(o){return a.darConsejo()})},"mano botón")])}var b={name:"Home",components:{},data:function(){return{}},methods:{darConsejo:function(){}}};b.render=p;var h=b,m=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],v=Object(f["a"])({history:Object(f["b"])(),routes:m}),O=v,y=n("5502"),j=Object(y["a"])({state:{},mutations:{},actions:{},modules:{}});Object(t["c"])(u).use(j).use(O).mount("#app")},"78ae":function(o,e,n){"use strict";n("f1ef")},cf05:function(o,e,n){o.exports=n.p+"img/logo.82b9c7a5.png"},f1ef:function(o,e,n){}});
//# sourceMappingURL=app.6bffcea2.js.map