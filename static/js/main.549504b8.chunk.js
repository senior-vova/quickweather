(this.webpackJsonpquickweather=this.webpackJsonpquickweather||[]).push([[0],{235:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n,r=a(7),c=a(0),i=a(44),s=a.n(i),o=(a(113),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,243)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))}),u=a(71),d=a(14),l=a(10),f=a(102),m=a(242),h=a(19),j=a.n(h),p=a(29),b=a(65),g=a.n(b),O="0a494230a7296285ed456b380ec63553",x={GetWeatherByCity:function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(O));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),GetWeatherByPos:function(){var e=Object(p.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(O));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},y={weather:null,error:null},w=function(e){return{type:"SET_WEATHER",weather:e}},v=function(e){return{type:"SET_ERROR",msg:e}},N=Object(l.c)({form:m.a,weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":return Object(d.a)(Object(d.a)({},e),{},{weather:Object(d.a)({},t.weather)});case"SET_ERROR":return Object(d.a)(Object(d.a)({},y),{},{error:t.msg});default:return Object(d.a)({},e)}}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,S=Object(l.e)(N,E(Object(l.a)(f.a))),C=a(18),F=a(105),k=a.p+"static/media/MorningRain.b36af12a.gif",R=a.p+"static/media/NightRain.31d7ca51.gif",_=a.p+"static/media/Rain1.f9ea0cd0.gif",T=a.p+"static/media/Fog.1c17f57d.gif",W=a.p+"static/media/Fog1.9664d045.gif",B=a.p+"static/media/Fog2.4858f1f2.gif",G={fog:[T,W,B],rain:[_,k,R],snow:[a.p+"static/media/Snow.86f55958.gif",a.p+"static/media/Snow2.16abfe11.gif",a.p+"static/media/Snow3.99d4365e.gif"],mist:[T,W,B],clouds:[a.p+"static/media/Cloudy.cf326fcc.gif"],clear:[a.p+"static/media/ClearSky.613bda1e.gif"]},I=a(237),P=a(240),L=a(239),M=a(238),q=a(241),D=function(e){return Object(r.jsx)(M.a.Control,Object(d.a)(Object(d.a)({type:"text"},e),e.input))},A=Object(L.a)({form:"search"})((function(e){return Object(r.jsxs)(M.a,{className:"mt-3 d-flex",onSubmit:e.handleSubmit,children:[Object(r.jsx)(P.a,{name:"cityName",type:"text",placeholder:"City Name",component:D,className:"text-primary"}),Object(r.jsx)(q.a,{className:"ml-1 ",type:"submit",children:"GO"})]})})),H=function(e){return e.weather.weather},J=function(e){return e.weather.error},X=(n=function(){var e=Object(C.c)(),t=Object(C.d)(H),a=Object(C.d)(J),n=Object(c.useState)(!1),i=Object(u.a)(n,2),s=i[0],o=i[1],d=Object(c.useState)(""),l=Object(u.a)(d,2),f=l[0],m=l[1];Object(c.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a,n;e((a=t.coords.latitude,n=t.coords.longitude,function(){var e=Object(p.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.GetWeatherByPos(a,n);case 2:"string"!==typeof(r=e.sent)&&r.data?200!==r.data.cod?t(v(r.data.message)):(c={city:r.data.name,degree:parseInt(Math.ceil(r.data.main.temp-273.15).toFixed(0)),name:r.data.weather[0].main,country:r.data.sys.country},t(w(c))):t(v("Server error"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),(function(e){o(!0)})):(o(!0),console.log("Your browser is not supported Geolocation"))}),[]),Object(c.useEffect)((function(){t&&(h(t.name),o(!0))}),[t]);var h=function(e){var t=e.toLowerCase(),a=parseInt((Math.random()*(G[t].length-1)).toFixed(0));m(G[t][a])};return s?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"background w-100 h-100 d-flex justify-content-center",children:t?Object(r.jsx)(I.a,{src:f,fluid:!0,draggable:"false",alt:"image"}):Object(r.jsx)("div",{className:"loading bg-light"})}),Object(r.jsxs)("div",{className:"container content d-flex flex-column justify-content-center align-items-center",children:[Object(r.jsxs)("h1",{className:"text-primary",children:["Quick Weather ",Object(r.jsx)("i",{children:"Demo(ver 0.1)"})]}),Object(r.jsx)("h3",{className:"text-primary",children:"Find out the weather of your city quickly"}),Object(r.jsx)(A,{onSubmit:function(t){if(!t.cityName)return null;var a;e((a=t.cityName,function(){var e=Object(p.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.GetWeatherByCity(a);case 2:"string"!==typeof(n=e.sent)&&n.data?200!==n.data.cod?t(v(n.data.message)):(r={city:n.data.name,degree:parseInt(Math.ceil(n.data.main.temp-273.15).toFixed(0)),name:n.data.weather[0].main,country:n.data.sys.country},t(w(r))):t(v("City not found"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}),t?Object(r.jsxs)("div",{className:"city d-flex flex-column justify-content-center align-items-center mt-3",children:[Object(r.jsxs)("h1",{className:"text-primary",children:[t.city,"/",t.country]}),Object(r.jsx)("h2",{className:"text-primary",children:t.name}),Object(r.jsxs)("h2",{className:"text-primary",children:[t.degree,"\xb0C / ",(9*t.degree/5+32).toFixed(0),"\xb0F"]})]}):a?Object(r.jsx)("h2",{className:"text-danger mt-3",children:a}):Object(r.jsx)("h2",{className:"text-danger mt-3",children:"Enter city to find out the weather"})]})]}):Object(r.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(r.jsx)("h1",{children:"Loading..."})})},function(e){return Object(r.jsx)(F.a,{children:Object(r.jsx)(C.a,{store:S,children:Object(r.jsx)(n,Object(d.a)({},e))})})});a(235);s.a.render(Object(r.jsx)(X,{}),document.getElementById("root")),o()}},[[236,1,2]]]);
//# sourceMappingURL=main.549504b8.chunk.js.map