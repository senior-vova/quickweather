(this.webpackJsonpquickweather=this.webpackJsonpquickweather||[]).push([[0],{86:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var c,n=a(1),r=a(0),i=a(21),s=a.n(i),o=(a(62),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))}),l=a(16),d=a(17),j=a(25),m=a(50),u=a(10),h=a.n(u),b=a(23),x=a(33),f=a.n(x),p="0a494230a7296285ed456b380ec63553",O={GetWeatherByCity:function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(p));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),GetWeatherByPos:function(){var e=Object(b.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(p));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),GetWeatherByPos2:function(){var e=Object(b.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&exclude=minutely,hourly,alerts&appid=").concat(p));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},y={weather:null,weatherDays:null,error:null,errorDays:null},g=function(e){return{type:"SET_WEATHER",weather:e}},w=function(e){return{type:"SET_WEATHER_DAYS",weatherDays:e}},N=function(e){return{type:"SET_ERROR",msg:e}},v=Object(j.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":return Object(d.a)(Object(d.a)({},e),{},{weather:t.weather});case"SET_WEATHER_DAYS":return Object(d.a)(Object(d.a)({},e),{},{weatherDays:t.weatherDays});case"SET_ERROR":return Object(d.a)(Object(d.a)({},y),{},{error:t.msg});default:return Object(d.a)({},e)}}}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,E=Object(j.e)(v,S(Object(j.a)(m.a))),F=a(15),C=a(19),k=a(6),T=a(96),I=a(94),_=a(97),R=(a(86),function(e){return e.weather.weather}),W=function(e){return e.weather.weatherDays},D=function(e){return e.weather.error},B=function(e){return e.weather.errorDays},G=a.p+"static/media/MorningRain.b36af12a.gif",M=a.p+"static/media/NightRain.31d7ca51.gif",P=a.p+"static/media/Rain1.f9ea0cd0.gif",A=a.p+"static/media/Fog.1c17f57d.gif",L=a.p+"static/media/Fog1.9664d045.gif",H=a.p+"static/media/Fog2.4858f1f2.gif",q={fog:[A,L,H],rain:[P,G,M],snow:[a.p+"static/media/Snow.86f55958.gif",a.p+"static/media/Snow2.16abfe11.gif",a.p+"static/media/Snow3.99d4365e.gif"],mist:[A,L,H],clouds:[a.p+"static/media/Cloudy.cf326fcc.gif"],clear:[a.p+"static/media/ClearSky.613bda1e.gif"]},Q=function(){var e=Object(F.c)(W),t=Object(F.c)(B),a=Object(r.useState)(0),c=Object(l.a)(a,2),i=c[0],s=c[1],o=Object(r.useState)(""),d=Object(l.a)(o,2),j=d[0],m=d[1],u=Object(r.useState)(""),h=Object(l.a)(u,2),b=h[0],x=h[1],f=Object(r.useState)(""),p=Object(l.a)(f,2),O=p[0],y=p[1];Object(r.useEffect)((function(){e&&(m(g(e.today.name)),x(g(e.today.name)),y(g(e.atd.name)),s(0))}),[e]);var g=function(e){var t=e.toLowerCase(),a=parseInt((Math.random()*(q[t].length-1)).toFixed(0));return q[t][a]};return Object(n.jsx)(n.Fragment,{children:e?Object(n.jsxs)(T.a,{activeIndex:i,className:"h-100",onSelect:function(e){s(e)},controls:!!e,indicators:!!e,touch:!0,children:[Object(n.jsxs)(T.a.Item,{children:[Object(n.jsx)(I.a,{className:"d-block w-100 h-100",src:j,draggable:!1,alt:"image"}),Object(n.jsx)(T.a.Caption,{className:"p-0",children:Object(n.jsxs)("div",{className:"container content d-flex flex-column justify-content-center align-items-center",children:[Object(n.jsx)("h1",{className:"text-primary",children:"Quick Weather"}),Object(n.jsx)(_.a,{className:"mt-2",children:Object(n.jsx)(_.a.Item,{children:Object(n.jsx)(C.b,{to:"/city",children:"Search By City"})})}),e?Object(n.jsxs)("div",{className:"city d-flex flex-column justify-content-center align-items-center mt-3",children:[Object(n.jsx)("h1",{className:"text-primary",children:e.today.city}),Object(n.jsx)("h2",{className:"text-primary",children:e.today.name}),Object(n.jsxs)("h2",{className:"text-primary",children:[e.today.degree,"\xb0C / ",(9*e.today.degree/5+32).toFixed(0),"\xb0F"]}),Object(n.jsx)("h2",{className:"text-primary mt-3",children:"Today"})]}):t?Object(n.jsx)("h2",{className:"text-danger mt-3",children:t}):Object(n.jsx)("h2",{className:"text-danger mt-3",children:"Enter city to find out the weather"})]})})]}),Object(n.jsxs)(T.a.Item,{children:[Object(n.jsx)(I.a,{className:"d-block w-100 h-100",src:b,draggable:!1,alt:"image"}),Object(n.jsx)(T.a.Caption,{className:"p-0",children:Object(n.jsxs)("div",{className:"container content d-flex flex-column justify-content-center align-items-center",children:[Object(n.jsx)("h1",{className:"text-primary",children:"Quick Weather"}),Object(n.jsx)(_.a,{className:"mt-2",children:Object(n.jsx)(_.a.Item,{children:Object(n.jsx)(C.b,{to:"/city",children:"Search By City"})})}),e?Object(n.jsxs)("div",{className:"city d-flex flex-column justify-content-center align-items-center mt-3",children:[Object(n.jsx)("h1",{className:"text-primary",children:e.tomorrow.city}),Object(n.jsx)("h2",{className:"text-primary",children:e.tomorrow.name}),Object(n.jsxs)("h2",{className:"text-primary",children:[e.tomorrow.degree,"\xb0C / ",(9*e.tomorrow.degree/5+32).toFixed(0),"\xb0F"]}),Object(n.jsx)("h2",{className:"text-primary mt-3",children:"Tomorrow"})]}):t?Object(n.jsx)("h2",{className:"text-danger mt-3",children:t}):Object(n.jsx)("h2",{className:"text-danger mt-3",children:"Enter city to find out the weather"})]})})]}),Object(n.jsxs)(T.a.Item,{children:[Object(n.jsx)(I.a,{className:"d-block w-100 h-100",src:O,draggable:!1,alt:"image"}),Object(n.jsx)(T.a.Caption,{className:"p-0",children:Object(n.jsxs)("div",{className:"container content d-flex flex-column justify-content-center align-items-center",children:[Object(n.jsx)("h1",{className:"text-primary",children:"Quick Weather"}),Object(n.jsx)(_.a,{className:"mt-2",children:Object(n.jsx)(_.a.Item,{children:Object(n.jsx)(C.b,{to:"/city",children:"Search By City"})})}),e?Object(n.jsxs)("div",{className:"city d-flex flex-column justify-content-center align-items-center mt-3",children:[Object(n.jsx)("h1",{className:"text-primary",children:e.atd.city}),Object(n.jsx)("h2",{className:"text-primary",children:e.atd.name}),Object(n.jsxs)("h2",{className:"text-primary",children:[e.atd.degree,"\xb0C / ",(9*e.atd.degree/5+32).toFixed(0),"\xb0F"]}),Object(n.jsx)("h2",{className:"text-primary mt-3",children:"Day After Tomorrow"})]}):t?Object(n.jsx)("h2",{className:"text-danger mt-3",children:t}):Object(n.jsx)("h2",{className:"text-danger mt-3",children:"Enter city to find out the weather"})]})})]})]}):Object(n.jsx)("p",{children:"Empty "})})},Y=a(34),z=a(95),J=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Y.c,{initialValues:{cityName:""},onSubmit:function(t,a){t.cityName||a.setSubmitting(!1),e.submitForm(t.cityName),a.setSubmitting(!1)},children:function(e){var t=e.isSubmitting;return Object(n.jsxs)(Y.b,{className:"mt-3 d-flex",children:[Object(n.jsx)(Y.a,{name:"cityName",type:"text",className:"form-control text-primary",placeholder:"City Name"}),Object(n.jsx)(z.a,{className:"ml-1 ",type:"submit",disabled:t,children:"GO"})]})}})})},V=(a(90),function(){var e=Object(F.b)(),t=Object(F.c)(R),a=Object(F.c)(D),c=Object(r.useState)(""),i=Object(l.a)(c,2),s=i[0],o=i[1],d=Object(r.useState)(!1),j=Object(l.a)(d,2),m=j[0],u=j[1];Object(r.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a,c;e((a=t.coords.latitude,c=t.coords.longitude,function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.GetWeatherByPos(a,c);case 2:"string"!==typeof(n=e.sent)&&n.data?200!==n.status?t(N(n.data.message)):(r={city:n.data.name,degree:parseInt(Math.ceil(n.data.main.temp-273.15).toFixed(0)),name:n.data.weather[0].main,country:n.data.sys.country},t(g(r))):t(N("Server error"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),(function(e){u(!0)})):(console.log("Your browser is not supported Geolocation"),u(!0))}),[]),Object(r.useEffect)((function(){t&&(x(t.name),u(!0))}),[t]);var x=function(e){var t=e.toLowerCase(),a=parseInt((Math.random()*(q[t].length-1)).toFixed(0));o(q[t][a])};return m?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"background w-100 h-100 d-flex justify-content-center",children:t?Object(n.jsx)(I.a,{src:s,fluid:!0,draggable:"false",alt:"image"}):Object(n.jsx)("div",{className:"loading bg-light"})}),Object(n.jsxs)("div",{className:"container content d-flex flex-column justify-content-center align-items-center",children:[Object(n.jsx)("h1",{className:"text-primary",children:"Quick Weather"}),Object(n.jsx)("h3",{className:"text-primary",children:"Find out the weather of your city quickly"}),Object(n.jsx)(_.a,{className:"mt-2",children:Object(n.jsx)(_.a.Item,{children:Object(n.jsx)(C.b,{to:"/",children:"Home"})})}),Object(n.jsx)(J,{submitForm:function(t){var a;e((a=t,function(){var e=Object(b.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.GetWeatherByCity(a);case 2:"string"!==typeof(c=e.sent)&&c.data?200!==c.data.cod?t(N(c.data.message)):(n={city:c.data.name,degree:parseInt(Math.ceil(c.data.main.temp-273.15).toFixed(0)),name:c.data.weather[0].main,country:c.data.sys.country},t(g(n))):t(N("City not found"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}),t?Object(n.jsxs)("div",{className:"city d-flex flex-column justify-content-center align-items-center mt-3",children:[Object(n.jsxs)("h1",{className:"text-primary",children:[t.city,"/",t.country]}),Object(n.jsx)("h2",{className:"text-primary",children:t.name}),Object(n.jsxs)("h2",{className:"text-primary",children:[t.degree,"\xb0C / ",(9*t.degree/5+32).toFixed(0),"\xb0F"]})]}):a?Object(n.jsx)("h2",{className:"text-danger mt-3",children:a}):Object(n.jsx)("h2",{className:"text-danger mt-3",children:"Enter city to find out the weather"})]})]}):Object(n.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(n.jsx)("h1",{children:"Loading..."})})}),X=(c=function(){var e=Object(F.b)(),t=Object(r.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var a,c;e((a=t.coords.latitude,c=t.coords.longitude,function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.GetWeatherByPos2(a,c);case 2:"string"!==typeof(n=e.sent)&&n.data?200!==n.status?t(N(n.data.message)):(r={city:n.data.timezone.split("/")[1],degree:+Math.ceil(n.data.current.temp-273.15).toFixed(0),name:n.data.current.weather[0].main},i={city:n.data.timezone.split("/")[1],name:n.data.daily[0].weather[0].main,degree:+Math.ceil(+((n.data.daily[0].temp.min+n.data.daily[0].temp.max)/2).toFixed(2)-273.15).toFixed(0)},s={city:n.data.timezone.split("/")[1],name:n.data.daily[1].weather[0].main,degree:+Math.ceil(+((n.data.daily[1].temp.min+n.data.daily[1].temp.max)/2).toFixed(2)-273.15).toFixed(0)},t(w({today:r,tomorrow:i,atd:s}))):t(N("Server error"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),i(!0)}),(function(e){i(!0)})):(i(!0),console.log("Your browser is not supported Geolocation"))}),[]),c?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(k.d,{children:[Object(n.jsx)(k.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(Q,{})}}),Object(n.jsx)(k.b,{exact:!0,path:"/city",render:function(){return Object(n.jsx)(V,{})}}),Object(n.jsx)(k.b,{path:"/",render:function(){return Object(n.jsx)(k.a,{to:"/"})}})]})}):Object(n.jsx)("div",{className:"container d-flex justify-content-center align-items-center h-100",children:Object(n.jsx)("h1",{children:"Loading..."})})},function(e){return Object(n.jsx)(C.a,{children:Object(n.jsx)(F.a,{store:E,children:Object(n.jsx)(c,Object(d.a)({},e))})})});a(91);s.a.render(Object(n.jsx)(X,{}),document.getElementById("root")),o()}},[[92,1,2]]]);
//# sourceMappingURL=main.31729001.chunk.js.map