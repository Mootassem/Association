(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2221],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},22858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},43269:function(e,t,r){var n=r(60379);e.exports=function(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},13884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},80521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},63038:function(e,t,r){var n=r(22858),o=r(13884),a=r(60379),i=r(80521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(23646),o=r(46860),a=r(60379),i=r(98206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2221:function(e,t,r){"use strict";r.r(t);var n=r(15861),o=r(87757),a=r.n(o),i=r(926),c=r(86495),s=r(47313),u=r(45788),l=r(32377),f=r(37078),p=r(10499),d=r(31172),y=r(94827),h=r(63830),m=r(28303),g=r(59436),x=r(46417);t.default=function(){var e=(0,u.I0)(),t=(0,h.TH)(),r=d.parse(t.search).token,o=(0,u.v9)(c.Z.selectBackgroundImageUrl),v=(0,u.v9)(c.Z.selectLogoUrl),b=(0,u.v9)(c.Z.selectSignedIn),j=(0,u.v9)(c.Z.selectErrorMessageVerifyEmail),w=(0,u.v9)(c.Z.selectLoadingVerifyEmail);(0,s.useEffect)((function(){e(i.Z.doVerifyEmail(r))}),[e,r]);var k=function(){var t=(0,n.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(i.Z.doSignout());case 2:(0,g.s1)().push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,x.jsx)(y.Z,{style:{backgroundImage:"url(".concat(o||"/images/emailUnverified.jpg",")")},children:(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(f.Z,{children:v?(0,x.jsx)("img",{src:v,width:"240px",alt:(0,p.ag)("app.title")}):(0,x.jsx)("h1",{children:(0,p.ag)("app.title")})}),w&&(0,x.jsx)("h4",{style:{textAlign:"center"},children:(0,p.ag)("auth.verifyEmail.message")}),!w&&!j&&(0,x.jsx)("h4",{className:"text-success",style:{textAlign:"center"},children:(0,p.ag)("auth.verifyEmail.success")}),!w&&j&&(0,x.jsx)("h4",{className:"text-danger",style:{textAlign:"center"},children:j}),!w&&j&&(0,x.jsx)("button",{style:{marginTop:"24px"},className:"btn btn-block btn-primary",type:"button",onClick:k,children:(0,p.ag)("auth.signout")}),!w&&!j&&!b&&(0,x.jsx)(m.rU,{to:"/auth/signin",className:"btn btn-block btn-primary",children:(0,p.ag)("auth.signin")})]})})}},32377:function(e,t,r){"use strict";var n,o=r(30168),a=r(91876).ZP.div(n||(n=(0,o.Z)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  a,\n  a:hover {\n    color: white;\n  }\n\n  .btn-link,\n  .btn-link:hover {\n    color: white;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));t.Z=a},37078:function(e,t,r){"use strict";var n,o=r(30168),a=r(91876).ZP.div(n||(n=(0,o.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));t.Z=a},94827:function(e,t,r){"use strict";var n,o=r(30168),a=r(91876).ZP.div(n||(n=(0,o.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));t.Z=a},8271:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="\ufffd";for(var c=Object.keys(r),s=0;s<c.length;s++){var u=c[s];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},31172:function(e,t,r){"use strict";var n=r(63038).default,o=r(43269).default,a=r(319).default,i=r(82376),c=r(8271),s=r(94266);function u(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function f(e,t){return t.decode?c(e):e}function p(e){return Array.isArray(e)?e.sort():"object"===typeof e?p(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"===typeof r&&r.includes(e.arrayFormatSeparator),a="string"===typeof r&&!o&&f(r,e).includes(e.arrayFormatSeparator);r=a?f(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===r?r:f(r,e);n[t]=i};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!==typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var i,c=o(e.split("&"));try{for(c.s();!(i=c.n()).done;){var l=i.value,d=s(t.decode?l.replace(/\+/g," "):l,"="),y=n(d,2),m=y[0],g=y[1];g=void 0===g?null:["comma","separator"].includes(t.arrayFormat)?g:f(g,t),r(f(m,t),g,a)}}catch(E){c.e(E)}finally{c.f()}for(var x=0,v=Object.keys(a);x<v.length;x++){var b=v[x],j=a[b];if("object"===typeof j&&null!==j)for(var w=0,k=Object.keys(j);w<k.length;w++){var S=k[w];j[S]=h(j[S],t)}else a[b]=h(j,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var r=a[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=y,t.parse=m,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[l(t,e),"[",o,"]"].join("")]:[[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[l(t,e),"=",l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[l(t,e)]:[[l(t,e),"=",l(n,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var s=c[i];r(s)||(o[s]=e[s])}var f=Object.keys(o);return!1!==t.sort&&f.sort(t.sort),f.map((function(r){var o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),o=n(r,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:m(y(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=d(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query),c=t.stringify(i,r);c&&(c="?".concat(c));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(l(e.fragmentIdentifier,r))),"".concat(n).concat(c).concat(s)}},94266:function(e){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},82376:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}}}]);