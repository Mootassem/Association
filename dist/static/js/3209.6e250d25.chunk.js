(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3209],{8931:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var i=t(70885),a=t(47313),o=t(45788),r=t(63830),s=t(10499),c=t(61485),l=t(76747),u=function(n){return n.association.form},d=(0,l.P1)([u],(function(n){return n.record})),f={selectInitLoading:(0,l.P1)([u],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,l.P1)([u],(function(n){return Boolean(n.saveLoading)})),selectRecord:d,selectRaw:u},m=t(59436),p=t(1413),g=t(43270),v=t(89994),b=t(95748),h=t(68160),x=t(42277),Z=t(67357),y=t(47575),j=t(21538),N=t(48317),C=t(96111),w=t(85543),R=t(46417),P=x.Ry().shape({name:v.Z.string((0,s.ag)("entities.association.fields.name"),{required:!0}),logo:v.Z.images((0,s.ag)("entities.association.fields.logo"),{max:1}),email:v.Z.string((0,s.ag)("entities.association.fields.email"),{required:!0}),phone:v.Z.string((0,s.ag)("entities.association.fields.phone"),{required:!0}),postalCode:v.Z.integer((0,s.ag)("entities.association.fields.postalCode"),{required:!0}),city:v.Z.string((0,s.ag)("entities.association.fields.city"),{required:!0}),country:v.Z.string((0,s.ag)("entities.association.fields.country"),{required:!0}),admins:v.Z.relationToMany((0,s.ag)("entities.association.fields.admins"),{required:!0})});var q=function(n){var e=(0,a.useState)((function(){var e=n.record||{};return{name:e.name,logo:e.logo||[],email:e.email,phone:e.phone,postalCode:e.postalCode,city:e.city,country:e.country,admins:e.admins||[]}})),t=(0,i.Z)(e,1)[0],o=(0,g.cI)({resolver:(0,Z.X)(P),mode:"all",defaultValues:t}),r=function(e){var t;n.onSubmit(null===(t=n.record)||void 0===t?void 0:t.id,e)};return(0,R.jsx)(h.Z,{children:(0,R.jsx)(g.RV,(0,p.Z)((0,p.Z)({},o),{},{children:(0,R.jsxs)("form",{onSubmit:o.handleSubmit(r),children:[(0,R.jsxs)("div",{className:"row",children:[(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(y.Z,{name:"name",label:(0,s.ag)("entities.association.fields.name"),required:!0,autoFocus:!0})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(w.Z,{name:"logo",label:(0,s.ag)("entities.association.fields.logo"),required:!1,storage:C.Z.values.associationLogo,max:1})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(y.Z,{name:"email",label:(0,s.ag)("entities.association.fields.email"),required:!1})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(y.Z,{name:"phone",label:(0,s.ag)("entities.association.fields.phone"),required:!1})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(j.Z,{name:"postalCode",label:(0,s.ag)("entities.association.fields.postalCode"),required:!1})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(y.Z,{name:"city",label:(0,s.ag)("entities.association.fields.city"),required:!1})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(y.Z,{name:"country",label:(0,s.ag)("entities.association.fields.country"),required:!1})}),(0,R.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,R.jsx)(N.Z,{name:"admins",label:(0,s.ag)("entities.association.fields.admins"),required:!1,showCreate:!n.modal,mode:"multiple"})})]}),(0,R.jsxs)("div",{className:"form-buttons",children:[(0,R.jsxs)("button",{className:"btn btn-primary",disabled:n.saveLoading,type:"button",onClick:o.handleSubmit(r),children:[(0,R.jsx)(b.Z,{loading:n.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,s.ag)("common.save")]}),(0,R.jsxs)("button",{className:"btn btn-light",type:"button",disabled:n.saveLoading,onClick:function(){Object.keys(t).forEach((function(n){o.setValue(n,t[n])}))},children:[(0,R.jsx)("i",{className:"fas fa-undo"}),"\xa0",(0,s.ag)("common.reset")]}),n.onCancel?(0,R.jsxs)("button",{className:"btn btn-light",type:"button",disabled:n.saveLoading,onClick:function(){return n.onCancel()},children:[(0,R.jsx)("i",{className:"fas fa-times"}),"\xa0",(0,s.ag)("common.cancel")]}):null]})]})}))})},S=t(27829),k=t(53852),L=t(61567),V=t(75352);var E=function(n){var e=(0,a.useState)(!1),t=(0,i.Z)(e,2),l=t[0],u=t[1],d=(0,o.I0)(),p=(0,r.$B)(),g=(0,o.v9)(f.selectInitLoading),v=(0,o.v9)(f.selectSaveLoading),b=(0,o.v9)(f.selectRecord),h=Boolean(p.params.id),x=h?(0,s.ag)("entities.association.edit.title"):(0,s.ag)("entities.association.new.title");return(0,a.useEffect)((function(){d(c.Z.doInit(p.params.id)),u(!0)}),[d,p.params.id]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.association.menu"),"/association"],[x]]}),(0,R.jsxs)(S.Z,{children:[(0,R.jsx)(V.Z,{children:x}),g&&(0,R.jsx)(L.Z,{}),l&&!g&&(0,R.jsx)(q,{saveLoading:v,initLoading:g,record:b,isEditing:h,onSubmit:function(n,e){d(h?c.Z.doUpdate(n,e):c.Z.doCreate(e))},onCancel:function(){return(0,m.s1)().push("/association")}})]})]})}},27829:function(n,e,t){"use strict";var i,a=t(30168),o=t(91876).ZP.div(i||(i=(0,a.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=o},53852:function(n,e,t){"use strict";var i,a=t(30168),o=(t(47313),t(28303)),r=t(91876),s=t(46417),c=r.ZP.nav(i||(i=(0,a.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,i){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:e(t)?(0,s.jsx)(o.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,e,t){"use strict";t(47313);var i=t(46417);e.Z=function(n){return n.loading?(0,i.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,i.jsx)("i",{className:n.iconClass}):null}},61567:function(n,e,t){"use strict";t(47313);var i=t(46417);e.Z=function(){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)("div",{className:"spinner-border text-primary"})})}},75352:function(n,e,t){"use strict";var i,a=t(30168),o=t(91876).ZP.h1(i||(i=(0,a.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=o},48317:function(n,e,t){"use strict";var i=t(1413),a=t(42982),o=t(70885),r=t(47313),s=t(74773),c=t(70713),l=t(49513),u=t(43270),d=t(45788),f=t(15021),m=t(46417);e.Z=function(n){var e=(0,u.Gc)(),t=e.setValue,p=e.getValues,g=(0,r.useState)(!1),v=(0,o.Z)(g,2),b=v[0],h=v[1],x=(0,d.v9)(f.Z.selectPermissionToCreate);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Z,(0,i.Z)((0,i.Z)({},n),{},{fetchFn:function(n,e){return s.Z.fetchUserAutocomplete(n,e)},mapper:{toAutocomplete:function(n){if(!n)return null;if(n.fullName||n.email){var e=n.email;return n.fullName&&(e="".concat(n.fullName," <").concat(n.email,">")),{value:n.id,label:e}}return{value:n.id,label:n.label}},toValue:function(n){return n?{id:n.value,label:n.label}:null}},onOpenModal:function(){return h(!0)},hasPermissionToCreate:x})),b&&(0,m.jsx)(c.Z,{visible:b,onClose:function(){return h(!1)},onSuccess:function(e){var i=n.name,o=n.mode;t(i,o&&"multiple"===o?[].concat((0,a.Z)(p()[i]||[]),[e]):e),h(!1)}})]})}},34405:function(n,e,t){var i=t(99038);n.exports=function(n,e){return!!(null==n?0:n.length)&&i(n,e,0)>-1}},86722:function(n){n.exports=function(n,e,t){for(var i=-1,a=null==n?0:n.length;++i<a;)if(t(e,n[i]))return!0;return!1}},93527:function(n){n.exports=function(n,e,t,i){for(var a=n.length,o=t+(i?1:-1);i?o--:++o<a;)if(e(n[o],o,n))return o;return-1}},99038:function(n,e,t){var i=t(93527),a=t(57700),o=t(13245);n.exports=function(n,e,t){return e===e?o(n,e,t):i(n,a,t)}},57700:function(n){n.exports=function(n){return n!==n}},7579:function(n,e,t){var i=t(44526),a=t(34405),o=t(86722),r=t(88905),s=t(56946),c=t(73671);n.exports=function(n,e,t){var l=-1,u=a,d=n.length,f=!0,m=[],p=m;if(t)f=!1,u=o;else if(d>=200){var g=e?null:s(n);if(g)return c(g);f=!1,u=r,p=new i}else p=e?[]:m;n:for(;++l<d;){var v=n[l],b=e?e(v):v;if(v=t||0!==v?v:0,f&&b===b){for(var h=p.length;h--;)if(p[h]===b)continue n;e&&p.push(b),m.push(v)}else u(p,b,t)||(p!==m&&p.push(b),m.push(v))}return m}},56946:function(n,e,t){var i=t(4199),a=t(8568),o=t(73671),r=i&&1/o(new i([,-0]))[1]==1/0?function(n){return new i(n)}:a;n.exports=r},13245:function(n){n.exports=function(n,e,t){for(var i=t-1,a=n.length;++i<a;)if(n[i]===e)return i;return-1}},8568:function(n){n.exports=function(){}},35487:function(n,e,t){var i=t(81186),a=t(7579);n.exports=function(n,e){return n&&n.length?a(n,i(e,2)):[]}},31616:function(n,e,t){"use strict";var i=t(70885),a=t(1413),o=t(45987),r=t(46123),s=t.n(r),c=t(47313),l=t(68524),u=t(46417),d=["as","bsPrefix","className"],f=["className"];var m=c.forwardRef((function(n,e){var t=function(n){var e=n.as,t=n.bsPrefix,i=n.className,r=(0,o.Z)(n,d);t=(0,l.vE)(t,"col");var c=(0,l.pi)(),u=[],f=[];return c.forEach((function(n){var e,i,a,o=r[n];delete r[n],"object"===typeof o&&null!=o?(e=o.span,i=o.offset,a=o.order):e=o;var s="xs"!==n?"-".concat(n):"";e&&u.push(!0===e?"".concat(t).concat(s):"".concat(t).concat(s,"-").concat(e)),null!=a&&f.push("order".concat(s,"-").concat(a)),null!=i&&f.push("offset".concat(s,"-").concat(i))})),[(0,a.Z)((0,a.Z)({},r),{},{className:s().apply(void 0,[i].concat(u,f))}),{as:e,bsPrefix:t,spans:u}]}(n),r=(0,i.Z)(t,2),c=r[0],m=c.className,p=(0,o.Z)(c,f),g=r[1],v=g.as,b=void 0===v?"div":v,h=g.bsPrefix,x=g.spans;return(0,u.jsx)(b,(0,a.Z)((0,a.Z)({},p),{},{ref:e,className:s()(m,!x.length&&h)}))}));m.displayName="Col",e.Z=m},63849:function(n,e,t){"use strict";var i=t(1413),a=t(45987),o=t(46123),r=t.n(o),s=t(47313),c=t(68524),l=t(46417),u=["bsPrefix","className","as"],d=s.forwardRef((function(n,e){var t=n.bsPrefix,o=n.className,s=n.as,d=void 0===s?"div":s,f=(0,a.Z)(n,u),m=(0,c.vE)(t,"row"),p=(0,c.pi)(),g="".concat(m,"-cols"),v=[];return p.forEach((function(n){var e,t=f[n];delete f[n],e=null!=t&&"object"===typeof t?t.cols:t;var i="xs"!==n?"-".concat(n):"";null!=e&&v.push("".concat(g).concat(i,"-").concat(e))})),(0,l.jsx)(d,(0,i.Z)((0,i.Z)({ref:e},f),{},{className:r().apply(void 0,[o,m].concat(v))}))}));d.displayName="Row",e.Z=d},73622:function(n,e,t){"use strict";var i=t(15671),a=t(43144),o=t(60136),r=t(82963),s=t(61120),c=t(47313),l=t(16912),u=t(46383),d=(t(1168),t(82423)),f=(t(96312),t(71902),t(87201)),m=t(70342);function p(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=(0,s.Z)(n);if(e){var a=(0,s.Z)(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return(0,r.Z)(this,t)}}c.Component;var g=(0,f.m)(d.S);e.ZP=g},71351:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!i)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(a)}for(var r=[],s=0;s<256;++s)r[s]=(s+256).toString(16).substr(1);var c=function(n,e){var t=e||0,i=r;return[i[n[t++]],i[n[t++]],i[n[t++]],i[n[t++]],"-",i[n[t++]],i[n[t++]],"-",i[n[t++]],i[n[t++]],"-",i[n[t++]],i[n[t++]],"-",i[n[t++]],i[n[t++]],i[n[t++]],i[n[t++]],i[n[t++]],i[n[t++]]].join("")};var l=function(n,e,t){var i=e&&t||0;"string"==typeof n&&(e="binary"===n?new Array(16):null,n=null);var a=(n=n||{}).random||(n.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var r=0;r<16;++r)e[i+r]=a[r];return e||c(a)}},72632:function(){}}]);