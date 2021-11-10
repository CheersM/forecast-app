(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{121:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(26),a=c.n(s),r=c(22),i=c(19),o=c(97),l=(c(121),c(3)),d=c(163),j=c(164),h=c(1);var u=function(e){var t=e.children;return Object(h.jsx)("div",{className:"button",children:t})},b="https://api.openweathermap.org/data/2.5",O="d94508bcd32dc95507d3e4d99567fc60",p="http://openweathermap.org/img/wn",x=c(36),v=c.n(x);var m=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.cities.myCities})),c=function(t){e(function(e){return function(t){v.a.get("".concat(b,"/weather/?q=").concat(e,"&units=metric&appid=").concat(O)).then((function(e){var c=e.data;t(function(e){return{type:"REFRESH_DATA",payload:e}}(c))}))}}(t))};return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"cities-page",children:[Object(h.jsx)(r.b,{to:"/home",children:Object(h.jsxs)(u,{children:[Object(h.jsx)("span",{children:"BACK TO HOMEPAGE"}),Object(h.jsxs)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M1 7H14.7143",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M8.71436 1L14.7144 7L8.71436 13",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})}),t&&0!==t.length?t.map((function(t){var n,s,a,r,i,o,l,u,b,O,x;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-block",children:Object(h.jsxs)("div",{className:"card-block__flex",children:[Object(h.jsx)("h3",{children:null===t||void 0===t?void 0:t.value}),Object(h.jsx)("img",{src:"".concat(p,"/").concat(null===t||void 0===t||null===(s=t.weather)||void 0===s||null===(a=s.weather[0])||void 0===a?void 0:a.icon,".png"),alt:"icon"}),Object(h.jsxs)("p",{children:[Math.floor(null===(r=t.weather)||void 0===r||null===(i=r.main)||void 0===i?void 0:i.temp),"\xb0C"]}),Object(h.jsxs)("div",{className:"card-block__info",children:[Object(h.jsxs)("span",{children:[null===(o=t.weather)||void 0===o||null===(l=o.wind)||void 0===l?void 0:l.speed," m/s"]}),Object(h.jsxs)("span",{children:[null===(u=t.weather)||void 0===u||null===(b=u.main)||void 0===b?void 0:b.humidity,"%"]}),Object(h.jsxs)("span",{children:[null===(O=t.weather)||void 0===O||null===(x=O.main)||void 0===x?void 0:x.pressure," mm Hg"]})]})]})}),Object(h.jsx)(d.a,{className:"refresh",onClick:function(){return c(t.value)}}),Object(h.jsx)(j.a,{onClick:function(){return c=t.value,void(window.confirm("Are you sure you want to delete the city?")&&e(function(e){return{type:"REMOVE_CITY",payload:e}}(c)));var c}})]},null===(n=t.weather)||void 0===n?void 0:n.id)})):Object(h.jsx)("div",{className:"empty",children:Object(h.jsxs)("p",{children:["Oops!",Object(h.jsx)("br",{})," You don't have any saved cities yet."]})})]})})},f=c(76),w=c.n(f),y=c(100),g=c(70),C=c(162),k=c(161),N=c(165),_=c(37),T=c.n(_);var E=function(e){var t=e.weatherInfo;return Object(h.jsxs)("div",{className:"current-town",children:[Object(h.jsxs)("div",{className:"current-town__top",children:[Object(h.jsxs)("p",{className:"name",children:[Object(h.jsx)("span",{children:"Your city: "}),Object(h.jsx)("strong",{children:t.name})]}),Object(h.jsx)(d.a,{onClick:function(){window.location.reload()},className:"refresh"})]}),Object(h.jsxs)("div",{className:"current-town__flex",children:[Object(h.jsxs)("p",{className:"day",children:[T()().format("dddd"),", ",Object(h.jsx)("span",{children:T()().format("LL")})]}),Object(h.jsx)("p",{className:"description",children:t.weather[0].main})]}),Object(h.jsxs)("div",{className:"current-town__flex",children:[Object(h.jsxs)("p",{className:"temp",children:["Temprature: ",Math.floor(t.main.temp)," \xb0C"]}),Object(h.jsxs)("p",{className:"temp",children:["Humidity: ",t.main.humidity," %"]})]}),Object(h.jsxs)("div",{className:"current-town__flex",children:[Object(h.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise: ",new Date(1e3*t.sys.sunrise).toLocaleTimeString("en-IN")]}),Object(h.jsxs)("p",{className:"sunrise-sunset",children:["Sunset: ",new Date(1e3*t.sys.sunset).toLocaleTimeString("en-IN")]})]})]})};var L=function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsx)("img",{width:70,height:50,src:"/forecast-app/assets/murky.png",alt:"logo"}),Object(h.jsxs)("p",{children:["The best",Object(h.jsx)("br",{})," weather forecast"]})]}),Object(h.jsx)("div",{className:"my_cities",children:Object(h.jsxs)(r.b,{to:"/cities",children:[Object(h.jsx)("span",{children:"My cities"}),Object(h.jsx)("img",{width:30,height:30,src:"/forecast-app/assets/sun.png",alt:"sun"})]})})]})};var S=function(e){var t,c,n,s,a=e.item,i=e.onClickAddCity;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-block",children:[Object(h.jsxs)("div",{className:"card-block__flex",children:[Object(h.jsx)("h3",{children:a.value}),Object(h.jsx)("img",{src:"".concat(p,"/").concat(a.weather.weather[0].icon,".png"),alt:"icon"}),Object(h.jsxs)("p",{children:[Math.floor(null===(t=a.weather.main)||void 0===t?void 0:t.temp),"\xb0C"]}),Object(h.jsxs)("div",{className:"card-block__info",children:[Object(h.jsxs)("span",{children:[null===(c=a.weather.wind)||void 0===c?void 0:c.speed," m/s"]}),Object(h.jsxs)("span",{children:[null===(n=a.weather.main)||void 0===n?void 0:n.humidity," %"]}),Object(h.jsxs)("span",{children:[null===(s=a.weather.main)||void 0===s?void 0:s.pressure," mm Hg"]})]})]}),Object(h.jsx)(r.b,{to:"/forecast",children:Object(h.jsxs)(u,{children:[Object(h.jsx)("span",{children:"SHOW FORECAST"}),Object(h.jsxs)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M1 7H14.7143",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M8.71436 1L14.7144 7L8.71436 13",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]}),Object(h.jsxs)("svg",{onClick:function(){i(a)},width:"40",height:"40",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("rect",{x:"0.5",y:"0.5",width:"31",height:"31",rx:"7.5",fill:"white",stroke:"#b2b2b2"}),Object(h.jsx)("path",{d:"M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z",fill:"#000"})]})]})};var M=function(e){var t=e.searchValue,c=e.setSearchValue;return Object(h.jsxs)("div",{className:"search",children:[Object(h.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round"})}),Object(h.jsx)("input",{type:"text",placeholder:"Enter the city",value:t,onChange:function(e){c(e.target.value)}})]})},A=function(e){return{type:"SET_WEATHER",payload:e}},H=function(e){return{type:"SET_DAILY_FORECAST",payload:e}};var D=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(g.a)(a,2),o=r[0],l=r[1],d=Object(n.useState)(""),j=Object(g.a)(d,2),u=j[0],p=j[1],x=Object(i.c)((function(e){return e})).weatherData,m=Object(i.b)(),f=Object(n.useCallback)((function(e,t){clearTimeout(u);var c=setTimeout(e,t);p(c)}),[u]);return Object(n.useEffect)((function(){var e=function(){var e=Object(y.a)(w.a.mark((function e(){var t,c,n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){e(t.coords)}))}));case 3:return t=e.sent,c=t.latitude,n=t.longitude,e.next=8,v.a.get("".concat(b,"/weather/?lat=").concat(c,"&lon=").concat(n,"&units=metric&APPID=").concat(O));case 8:a=e.sent,r=a.data,s(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e(),f((function(){o&&m(function(e){return function(t){try{v.a.get("".concat(b,"/weather/?q=").concat(e,"&units=metric&appid=").concat(O)).then((function(e){var c=e.data;t(A(c)),t({type:"SET_CITY",payload:c.name})}))}catch(c){console.error(c)}}}(o))}),1e3)}),[m,o]),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(L,{}),"undefined"!=typeof c.main?Object(h.jsx)(E,{weatherInfo:c}):Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)(C.a,{active:!0,children:Object(h.jsxs)(k.a,{children:["Loading..",Object(h.jsx)(N.a,{})]})})}),Object(h.jsx)(M,{searchValue:o,setSearchValue:l}),"undefined"!==typeof x.value&&""!==o?Object(h.jsx)(S,{item:x,onClickAddCity:function(e){m({type:"ADD_MY_CITY",payload:e})}}):""]})};var I=function(e){var t=e.items,c=T.a.unix(t.dt).format("dddd");return Object(h.jsxs)("div",{className:"dayForecast-block",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsx)("img",{src:"".concat(p,"/").concat(t.weather[0].icon,".png"),alt:"icon"}),Object(h.jsx)("span",{children:t.weather.description}),Object(h.jsxs)("span",{children:[Math.floor(t.temp.max),"\xb0C"]})]})};var R=function(e){var t=e.hourlyForecast;return Object(h.jsxs)("div",{className:"hourlyForecast",children:[Object(h.jsx)("h2",{children:"Hourly forecast"}),Object(h.jsxs)("div",{className:"hourlyForecast-block",children:[Object(h.jsx)("div",{className:"date",children:t.map((function(e){return Object(h.jsx)("span",{children:T.a.unix(e.dt).format("LT")},e.dt)}))}),Object(h.jsx)("div",{className:"zero",children:t.map((function(e){return Object(h.jsx)("span",{style:e.temp>0?{bottom:e.temp,background:"linear-gradient(#f69d3c, #ebf8e1)"}:{bottom:e.temp,background:"linear-gradient(#ebf8e1, #3f87a6)"},children:e.temp>0?"+"+Math.floor(e.temp):Math.floor(e.temp)},e.dt)}))})]})]})};var F=function(){var e,t,c,s,a,o,l,d,j,x,m,f,w,y=Object(i.b)(),g=Object(i.c)((function(e){return e})).weatherData,C=null===(e=g.weather.coord)||void 0===e?void 0:e.lat,k=null===(t=g.weather.coord)||void 0===t?void 0:t.lon,N=null===(c=g.forecast)||void 0===c?void 0:c.daily;return Object(n.useEffect)((function(){y(function(e,t){return function(c){try{v.a.get("".concat(b,"/onecall?lat=").concat(e,"&lon=").concat(t,"&units=metric&appid=").concat(O)).then((function(e){var t=e.data;c(H(t))}))}catch(n){console.error(n)}}}(C,k))}),[y,C,k]),Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"forecast",children:[Object(h.jsx)(r.b,{to:"/home",children:Object(h.jsxs)(u,{children:[Object(h.jsx)("span",{children:"BACK TO HOMEPAGE"}),Object(h.jsxs)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M1 7H14.7143",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M8.71436 1L14.7144 7L8.71436 13",stroke:"#000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})}),Object(h.jsx)("h2",{children:g.value}),Object(h.jsxs)("div",{className:"forecast__data",children:[Object(h.jsx)("img",{width:70,height:70,src:"".concat(p,"/").concat(g.weather.weather[0].icon,".png"),alt:"icon"}),Object(h.jsxs)("p",{className:"temp",children:[Math.floor(null===(s=g.weather.main)||void 0===s?void 0:s.temp),"\xb0C"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Feels like:"}),Object(h.jsxs)("span",{children:[Math.floor(null===(a=g.weather.main)||void 0===a?void 0:a.feels_like),"\xb0C"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Max temperature:"}),Object(h.jsxs)("span",{children:[Math.floor(null===(o=g.weather.main)||void 0===o?void 0:o.temp_max),"\xb0C"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Min temperature:"}),Object(h.jsxs)("span",{children:[Math.floor(null===(l=g.weather.main)||void 0===l?void 0:l.temp_min),"\xb0C"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Sunrise:"}),Object(h.jsx)("span",{children:new Date(1e3*(null===(d=g.weather.sys)||void 0===d?void 0:d.sunrise)).toLocaleTimeString("en-US")})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Sunset:"}),Object(h.jsx)("span",{children:new Date(1e3*(null===(j=g.weather.sys)||void 0===j?void 0:j.sunset)).toLocaleTimeString("en-US")})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Wind speed:"}),Object(h.jsxs)("span",{children:[null===(x=g.weather.wind)||void 0===x?void 0:x.speed,"m/s"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Humidity:"}),Object(h.jsxs)("span",{children:[null===(m=g.weather.main)||void 0===m?void 0:m.humidity," %"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Pressure:"}),Object(h.jsxs)("span",{children:[null===(f=g.weather.main)||void 0===f?void 0:f.pressure," mm Hg"]})]})]}),Object(h.jsx)(R,{hourlyForecast:null===(w=g.forecast)||void 0===w?void 0:w.hourly}),Object(h.jsxs)("div",{className:"dayForecast",children:[Object(h.jsx)("h2",{children:"7 days forecast"}),Object(h.jsx)("div",{className:"dayForecast__wrapper",children:null===N||void 0===N?void 0:N.map((function(e){return Object(h.jsx)(I,{items:e},e.dt)}))})]})]})})};var W=function(){return Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/home",exact:!0,children:Object(h.jsx)(D,{})}),Object(h.jsx)(l.b,{path:"/cities",exact:!0,children:Object(h.jsx)(m,{})}),Object(h.jsx)(l.b,{path:"/forecast",exact:!0,children:Object(h.jsx)(F,{})}),Object(h.jsx)(l.a,{to:"/home"})]})},Y=c(28),V=c(104),B=c(102),P=c(79),G=c(103),U=c.n(G),Z=c(8),q={myCities:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MY_CITY":var c=e.myCities.filter((function(e){return e.value!==t.payload.value}));return Object(Z.a)(Object(Z.a)({},e),{},{myCities:[t.payload].concat(c)});case"REMOVE_CITY":return Object(Z.a)(Object(Z.a)({},e),{},{myCities:e.myCities.filter((function(e){return e.value!==t.payload}))});case"GET_CITIES":return Object(Z.a)(Object(Z.a)({},e),{},{myCities:t.payload});case"REFRESH_DATA":return Object(Z.a)(Object(Z.a)({},e),{},{myCities:e.myCities.map((function(e){return e.value===t.payload.name?Object(Z.a)(Object(Z.a)({},e),{},{weather:t.payload}):e}))});default:return e}},K={weather:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":case"SET_CURRENT_LOCATION_FORECAST":return Object(Z.a)(Object(Z.a)({},e),{},{weather:t.payload});case"SET_CITY":return Object(Z.a)(Object(Z.a)({},e),{},{value:t.payload});case"SET_DAILY_FORECAST":return Object(Z.a)(Object(Z.a)({},e),{},{forecast:t.payload});default:return e}},Q=Object(B.composeWithDevTools)(Object(Y.applyMiddleware)(V.a)),X={key:"root",storage:U.a},$=Object(Y.combineReducers)({cities:J,weatherData:z}),ee=Object(P.a)(X,$,Q),te=function(){var e=Object(Y.createStore)(ee,Q);return{store:e,persistor:Object(P.b)(e)}}(),ce=te.store,ne=te.persistor;a.a.render(Object(h.jsx)(i.a,{store:ce,children:Object(h.jsx)(o.a,{loading:null,persistor:ne,children:Object(h.jsx)(r.a,{children:Object(h.jsx)(W,{})})})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.61a34492.chunk.js.map