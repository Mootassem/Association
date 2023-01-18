(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[9725],{75128:function(e,n,t){"use strict";var r=t(76747),o=t(86495),a=t(26319),s=t(71945),l=(0,r.P1)([o.Z.selectCurrentTenant,o.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.newsCategoryRead)})),i=(0,r.P1)([o.Z.selectCurrentTenant,o.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.newsCategoryEdit)})),u=(0,r.P1)([o.Z.selectCurrentTenant,o.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.newsCategoryCreate)})),c=(0,r.P1)([o.Z.selectCurrentTenant,o.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.newsCategoryImport)})),d={selectPermissionToRead:l,selectPermissionToEdit:i,selectPermissionToCreate:u,selectPermissionToDestroy:(0,r.P1)([o.Z.selectCurrentTenant,o.Z.selectCurrentUser],(function(e,n){return new a.Z(e,n).match(s.Z.values.newsCategoryDestroy)})),selectPermissionToImport:c};n.Z=d},79725:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(1413),o=t(42982),a=t(70885),s=t(47313),l=t(97155),i=t(15861),u=t(87757),c=t.n(u),d=t(1168),f=t(10499),m=t(33512),h=t(13731),p=t(46417);var v=function(e){var n=(0,s.useRef)(),t=(0,s.useState)(!1),r=(0,a.Z)(t,2),o=r[0],u=r[1];(0,s.useEffect)((function(){window.$(n.current).modal("show"),window.$(n.current).on("hidden.bs.modal",e.onClose)}),[]);var v=function(){var t=(0,i.Z)(c().mark((function t(r,o){var a,s,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,l.Z.create(o);case 4:return a=t.sent,s=a.id,t.next=8,l.Z.find(s);case 8:i=t.sent,window.$(n.current).modal("hide"),e.onSuccess(i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),m.Z.handle(t.t0);case 16:return t.prev=16,u(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(e,n){return t.apply(this,arguments)}}();return d.createPortal((0,p.jsx)("div",{ref:n,className:"modal",tabIndex:-1,children:(0,p.jsx)("div",{className:"modal-dialog modal-lg",children:(0,p.jsxs)("div",{className:"modal-content",children:[(0,p.jsxs)("div",{className:"modal-header",children:[(0,p.jsx)("h5",{className:"modal-title",children:(0,f.ag)("entities.newsCategory.new.title")}),(0,p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,p.jsx)("span",{children:"\xd7"})})]}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsx)(h.Z,{saveLoading:o,onSubmit:v,onCancel:function(){window.$(n.current).modal("hide")},modal:!0})})]})})}),document.getElementById("modal-root"))},g=t(49513),x=t(43270),b=t(45788),Z=t(75128);var C=function(e){var n=(0,x.Gc)(),t=n.setValue,i=n.getValues,u=(0,s.useState)(!1),c=(0,a.Z)(u,2),d=c[0],f=c[1],m=(0,b.v9)(Z.Z.selectPermissionToCreate),h=function(){f(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g.Z,(0,r.Z)((0,r.Z)({},e),{},{fetchFn:function(e,n){return l.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return e.name&&(t=e.name),{key:n,value:n,label:t}},toValue:function(e){return e?{id:e.value,label:e.label}:null}},onOpenModal:function(){f(!0)},hasPermissionToCreate:m})),d&&(0,p.jsx)(v,{onClose:h,onSuccess:function(n){var r=e.name,a=e.mode;t(r,a&&"multiple"===a?[].concat((0,o.Z)(i()[r]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),h()}})]})}},13731:function(e,n,t){"use strict";var r=t(1413),o=t(70885),a=t(47313),s=t(43270),l=t(10499),i=t(89994),u=t(95748),c=t(68160),d=t(42277),f=t(67357),m=t(47575),h=t(30513),p=t(46417),v=d.Ry().shape({name:i.Z.string((0,l.ag)("entities.newsCategory.fields.name"),{}),description:i.Z.string((0,l.ag)("entities.newsCategory.fields.description"),{})});n.Z=function(e){var n=(0,a.useState)((function(){var n=e.record||{};return{name:n.name,description:n.description}})),t=(0,o.Z)(n,1)[0],i=(0,s.cI)({resolver:(0,f.X)(v),mode:"all",defaultValues:t}),d=function(n){var t;e.onSubmit(null===(t=e.record)||void 0===t?void 0:t.id,n)};return(0,p.jsx)(c.Z,{children:(0,p.jsx)(s.RV,(0,r.Z)((0,r.Z)({},i),{},{children:(0,p.jsxs)("form",{onSubmit:i.handleSubmit(d),children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,p.jsx)(m.Z,{name:"name",label:(0,l.ag)("entities.newsCategory.fields.name"),required:!1,autoFocus:!0})}),(0,p.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,p.jsx)(h.Z,{name:"description",label:(0,l.ag)("entities.newsCategory.fields.description"),required:!1})})]}),(0,p.jsxs)("div",{className:"form-buttons",children:[(0,p.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:i.handleSubmit(d),children:[(0,p.jsx)(u.Z,{loading:e.saveLoading,iconClass:"far fa-save"})," ",(0,l.ag)("common.save")]}),(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(t).forEach((function(e){i.setValue(e,t[e])}))},children:[(0,p.jsx)("i",{className:"fas fa-undo"})," ",(0,l.ag)("common.reset")]}),e.onCancel?(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,p.jsx)("i",{className:"fas fa-times"})," ",(0,l.ag)("common.cancel")]}):null]})]})}))})}},49513:function(e,n,t){"use strict";var r=t(1413),o=t(42982),a=t(15861),s=t(70885),l=t(87757),i=t.n(l),u=t(47313),c=t(49384),d=t(73622),f=t(10499),m=t(43270),h=t(35487),p=t.n(h),v=t(46417);function g(e){var n=(0,m.Gc)(),t=n.errors,l=n.watch,h=n.setValue,g=n.register,x=n.formState,b=x.touched,Z=x.isSubmitted,C=e.label,j=e.name,y=e.hint,w=e.placeholder,N=e.autoFocus,S=e.externalErrorMessage,P=e.mode,k=e.required,B=e.isClearable,V=e.mapper,F=e.fetchFn,T=e.election,q=l(j),M=(0,u.useState)([]),E=(0,s.Z)(M,2),R=E[0],D=E[1],A=(0,u.useState)(!1),L=(0,s.Z)(A,2),I=L[0],O=L[1];(0,u.useEffect)((function(){g({name:j})}),[g,j]),(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,F();case 4:n=(n=e.sent).map((function(e){return V.toAutocomplete(e)})),D(n),O(!1),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),D([]),O(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e().then((function(){}))}),[]);var U=function(e){return(R||[]).find((function(n){return n.value===e.value}))||e},G=function(){return"multiple"===P?$():_()},$=function(){return q?q.map((function(e){return U(V.toAutocomplete(e))})):[]},_=function(){return q?U(V.toAutocomplete(q)):null},z=function(n){if(!n)return h(j,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var t=n.map((function(e){return V.toValue(e)}));h(j,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},X=function(n){if(!n)return h(j,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var t=V.toValue(n);h(j,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},H=I?(0,f.ag)("autocomplete.loading"):y,J=c.Z.errorMessage(j,t,b,Z,S),K=Boolean(J)?{control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{borderColor:"red"})}}:void 0;return(0,v.jsxs)("div",{className:"form-group",children:[Boolean(C)&&(0,v.jsx)("label",{className:"col-form-label ".concat(k?"required":null),htmlFor:j,children:C}),(0,v.jsxs)("div",{style:{display:"flex"},children:[(0,v.jsx)(d.ZP,{className:"w-100",styles:K,id:j,name:j,isMulti:"multiple"===P,placeholder:w||"",autoFocus:N||void 0,onChange:function(e){return"multiple"===P?z(e):X(e)},value:G(),isClearable:B,options:function(){var n=e.mode;return R?G()?"multiple"===n?p()([].concat((0,o.Z)(R),(0,o.Z)(G())),"value"):p()([].concat((0,o.Z)(R),[G()]),"value"):R:[]}(),onBlur:function(n){e.onBlur&&e.onBlur(n)},loadingMessage:function(){return(0,f.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,f.ag)("autocomplete.noOptions")}}),T&&e.showCreate&&e.hasPermissionToCreate?(0,v.jsx)("button",{style:{marginLeft:"16px",flexShrink:0},className:"btn btn-primary",type:"button",onClick:e.onOpenModal,children:(0,v.jsx)("i",{className:"fas fa-plus"})}):null]}),(0,v.jsx)("div",{className:"invalid-feedback",children:J}),Boolean(H)&&(0,v.jsx)("small",{className:"form-text text-muted",children:H})]})}g.defaultProps={isClearable:!0,mode:"default",required:!1},n.Z=g},47575:function(e,n,t){"use strict";t(47313);var r=t(43270),o=t(49384),a=t(46417);function s(e){var n=e.label,t=e.description,s=e.name,l=e.hint,i=e.type,u=e.placeholder,c=e.autoFocus,d=e.autoComplete,f=e.required,m=e.externalErrorMessage,h=e.disabled,p=e.endAdornment,v=(0,r.Gc)(),g=v.register,x=v.errors,b=v.formState,Z=b.touched,C=b.isSubmitted,j=o.Z.errorMessage(s,x,Z,C,m);return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("div",{className:p?"input-group":"",children:[Boolean(n)&&(0,a.jsx)("label",{className:"col-form-label ".concat(f?"required":null),htmlFor:s,children:n}),t,(0,a.jsx)("input",{id:s,name:s,type:i,ref:g,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:u||void 0,autoFocus:c||void 0,autoComplete:d||void 0,disabled:h,className:"form-control ".concat(j?"is-invalid":"")}),p&&(0,a.jsx)("div",{className:"input-group-append",children:(0,a.jsx)("span",{className:"input-group-text",children:p})})]}),(0,a.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(l)&&(0,a.jsx)("small",{className:"form-text text-muted",children:l})]})}s.defaultProps={type:"text",required:!1},n.Z=s},30513:function(e,n,t){"use strict";t(47313);var r=t(43270),o=t(49384),a=t(46417);function s(e){var n=e.label,t=e.name,s=e.hint,l=e.size,i=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.externalErrorMessage,f=e.required,m={small:"col-form-label-sm",large:"col-form-label-lg"}[l]||"",h={small:"form-control-sm",large:"form-control-lg"}[l]||"",p=(0,r.Gc)(),v=p.register,g=p.errors,x=p.formState,b=x.touched,Z=x.isSubmitted,C=o.Z.errorMessage(t,g,b,Z,d);return(0,a.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,a.jsx)("label",{className:"col-form-label ".concat(f?"required":null," ").concat(m),htmlFor:t,children:n}),(0,a.jsx)("textarea",{id:t,name:t,ref:v,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:i||void 0,autoFocus:u||void 0,autoComplete:c||void 0,className:"form-control ".concat(h," ").concat(C?"is-invalid":"")}),(0,a.jsx)("div",{className:"invalid-feedback",children:C}),Boolean(s)&&(0,a.jsx)("small",{className:"form-text text-muted",children:s})]})}s.defaultProps={required:!1},n.Z=s},34405:function(e,n,t){var r=t(99038);e.exports=function(e,n){return!!(null==e?0:e.length)&&r(e,n,0)>-1}},86722:function(e){e.exports=function(e,n,t){for(var r=-1,o=null==e?0:e.length;++r<o;)if(t(n,e[r]))return!0;return!1}},93527:function(e){e.exports=function(e,n,t,r){for(var o=e.length,a=t+(r?1:-1);r?a--:++a<o;)if(n(e[a],a,e))return a;return-1}},99038:function(e,n,t){var r=t(93527),o=t(57700),a=t(13245);e.exports=function(e,n,t){return n===n?a(e,n,t):r(e,o,t)}},57700:function(e){e.exports=function(e){return e!==e}},7579:function(e,n,t){var r=t(44526),o=t(34405),a=t(86722),s=t(88905),l=t(56946),i=t(73671);e.exports=function(e,n,t){var u=-1,c=o,d=e.length,f=!0,m=[],h=m;if(t)f=!1,c=a;else if(d>=200){var p=n?null:l(e);if(p)return i(p);f=!1,c=s,h=new r}else h=n?[]:m;e:for(;++u<d;){var v=e[u],g=n?n(v):v;if(v=t||0!==v?v:0,f&&g===g){for(var x=h.length;x--;)if(h[x]===g)continue e;n&&h.push(g),m.push(v)}else c(h,g,t)||(h!==m&&h.push(g),m.push(v))}return m}},56946:function(e,n,t){var r=t(4199),o=t(8568),a=t(73671),s=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=s},13245:function(e){e.exports=function(e,n,t){for(var r=t-1,o=e.length;++r<o;)if(e[r]===n)return r;return-1}},8568:function(e){e.exports=function(){}},35487:function(e,n,t){var r=t(81186),o=t(7579);e.exports=function(e,n){return e&&e.length?o(e,r(n,2)):[]}},73622:function(e,n,t){"use strict";var r=t(15671),o=t(43144),a=t(60136),s=t(82963),l=t(61120),i=t(47313),u=t(16912),c=t(46383),d=(t(1168),t(82423)),f=(t(96312),t(71902),t(87201)),m=t(70342);function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(n){var o=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,s.Z)(this,t)}}i.Component;var p=(0,f.m)(d.S);n.ZP=p}}]);