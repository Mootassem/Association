"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[9219],{4694:function(e,n,t){var r=t(76747),a=t(86495),o=t(26319),l=t(71945),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.productRead)})),i=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.productEdit)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.productCreate)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.productImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:i,selectPermissionToCreate:u,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(l.Z.values.productDestroy)})),selectPermissionToImport:c};n.Z=d},62719:function(e,n,t){var r=t(1413),a=t(70885),o=t(47313),l=t(43270),s=t(10499),i=t(89994),u=t(95748),c=t(68160),d=t(42277),m=t(67357),f=t(47575),h=t(75454),p=t(46417),v=d.Ry().shape({name:i.Z.string((0,s.ag)("entities.attributes.fields.name"),{required:!0}),itemId:i.Z.relationToOne((0,s.ag)("entities.attributes.fields.itemId"),{})});n.Z=function(e){var n,t=e.itemId,i=(0,o.useState)((function(){var n=e.record||{};return{name:n.name,itemId:t||n.itemId}})),d=(0,a.Z)(i,1)[0],g=(0,l.cI)({resolver:(0,m.X)(v),mode:"all",defaultValues:d}),b=function(n){var a;if(null!==(a=e.record)&&void 0!==a&&a.id){var o;e.onSubmit(null===(o=e.record)||void 0===o?void 0:o.id,n)}else{var l,s=(0,r.Z)((0,r.Z)({},n),{},{itemId:t});e.onSubmit(null===(l=e.record)||void 0===l?void 0:l.id,s)}};return(0,p.jsx)(c.Z,{children:(0,p.jsx)(l.RV,(0,r.Z)((0,r.Z)({},g),{},{children:(0,p.jsxs)("form",{onSubmit:g.handleSubmit(b),children:[(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,p.jsx)(f.Z,{name:"name",label:(0,s.ag)("entities.attributes.fields.name"),required:!0,autoFocus:!0})}),(null===(n=e.record)||void 0===n?void 0:n.id)&&(0,p.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,p.jsx)(h.Z,{name:"itemId",label:(0,s.ag)("entities.attributes.fields.itemId"),required:!1,showCreate:!e.modal})})]}),(0,p.jsxs)("div",{className:"form-buttons",children:[(0,p.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:g.handleSubmit(b),children:[(0,p.jsx)(u.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,s.ag)("common.save")]}),(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(d).forEach((function(e){g.setValue(e,d[e])}))},children:[(0,p.jsx)("i",{className:"fas fa-undo"}),"\xa0",(0,s.ag)("common.reset")]}),e.onCancel?(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,p.jsx)("i",{className:"fas fa-times"}),"\xa0",(0,s.ag)("common.cancel")]}):null]})]})}))})}},75454:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(1413),a=t(42982),o=t(70885),l=t(47313),s=t(54013),i=t(15861),u=t(87757),c=t.n(u),d=t(1168),m=t(10499),f=t(33512),h=t(84672),p=t(46417);var v=function(e){var n=(0,l.useRef)(),t=(0,l.useState)(!1),r=(0,o.Z)(t,2),a=r[0],u=r[1];(0,l.useEffect)((function(){window.$(n.current).modal("show"),window.$(n.current).on("hidden.bs.modal",e.onClose)}),[]);var v=function(){var t=(0,i.Z)(c().mark((function t(r,a){var o,l,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,s.Z.create(a);case 4:return o=t.sent,l=o.id,t.next=8,s.Z.find(l);case 8:i=t.sent,window.$(n.current).modal("hide"),e.onSuccess(i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),f.Z.handle(t.t0);case 16:return t.prev=16,u(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(e,n){return t.apply(this,arguments)}}();return d.createPortal((0,p.jsx)("div",{ref:n,className:"modal",tabIndex:-1,children:(0,p.jsx)("div",{className:"modal-dialog modal-lg",children:(0,p.jsxs)("div",{className:"modal-content",children:[(0,p.jsxs)("div",{className:"modal-header",children:[(0,p.jsx)("h5",{className:"modal-title",children:(0,m.ag)("entities.product.new.title")}),(0,p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,p.jsx)("span",{children:"\xd7"})})]}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsx)(h.Z,{saveLoading:a,onSubmit:v,onCancel:function(){window.$(n.current).modal("hide")},modal:!0})})]})})}),document.getElementById("modal-root"))},g=t(49513),b=t(43270),x=t(45788),Z=t(4694);var C=function(e){var n=(0,b.Gc)(),t=n.setValue,i=n.getValues,u=(0,l.useState)(!1),c=(0,o.Z)(u,2),d=c[0],m=c[1],f=(0,x.v9)(Z.Z.selectPermissionToCreate),h=function(){m(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g.Z,(0,r.Z)((0,r.Z)({},e),{},{fetchFn:function(e,n){return s.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return e.name&&(t=e.name),{key:n,value:n,label:t}},toValue:function(e){return e?{id:e.value,label:e.label}:null}},onOpenModal:function(){m(!0)},hasPermissionToCreate:f})),d&&(0,p.jsx)(v,{onClose:h,onSuccess:function(n){var r=e.name,o=e.mode;t(r,o&&"multiple"===o?[].concat((0,a.Z)(i()[r]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),h()}})]})}},49513:function(e,n,t){var r=t(1413),a=t(42982),o=t(15861),l=t(70885),s=t(87757),i=t.n(s),u=t(47313),c=t(49384),d=t(73622),m=t(10499),f=t(43270),h=t(35487),p=t.n(h),v=t(46417);function g(e){var n=(0,f.Gc)(),t=n.errors,s=n.watch,h=n.setValue,g=n.register,b=n.formState,x=b.touched,Z=b.isSubmitted,C=e.label,j=e.name,N=e.hint,y=e.placeholder,w=e.autoFocus,B=e.externalErrorMessage,S=e.mode,P=e.required,k=e.isClearable,V=e.mapper,M=e.fetchFn,q=e.election,T=s(j),F=(0,u.useState)([]),I=(0,l.Z)(F,2),E=I[0],D=I[1],O=(0,u.useState)(!1),A=(0,l.Z)(O,2),L=A[0],G=A[1];(0,u.useEffect)((function(){g({name:j})}),[g,j]),(0,u.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.prev=1,e.next=4,M();case 4:n=(n=e.sent).map((function(e){return V.toAutocomplete(e)})),D(n),G(!1),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),D([]),G(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e().then((function(){}))}),[]);var R=function(e){return(E||[]).find((function(n){return n.value===e.value}))||e},U=function(){return"multiple"===S?$():_()},$=function(){return T?T.map((function(e){return R(V.toAutocomplete(e))})):[]},_=function(){return T?R(V.toAutocomplete(T)):null},X=function(n){if(!n)return h(j,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var t=n.map((function(e){return V.toValue(e)}));h(j,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},z=function(n){if(!n)return h(j,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var t=V.toValue(n);h(j,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},H=L?(0,m.ag)("autocomplete.loading"):N,J=c.Z.errorMessage(j,t,x,Z,B),K=Boolean(J)?{control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{borderColor:"red"})}}:void 0;return(0,v.jsxs)("div",{className:"form-group",children:[Boolean(C)&&(0,v.jsx)("label",{className:"col-form-label ".concat(P?"required":null),htmlFor:j,children:C}),(0,v.jsxs)("div",{style:{display:"flex"},children:[(0,v.jsx)(d.ZP,{className:"w-100",styles:K,id:j,name:j,isMulti:"multiple"===S,placeholder:y||"",autoFocus:w||void 0,onChange:function(e){return"multiple"===S?X(e):z(e)},value:U(),isClearable:k,options:function(){var n=e.mode;return E?U()?"multiple"===n?p()([].concat((0,a.Z)(E),(0,a.Z)(U())),"value"):p()([].concat((0,a.Z)(E),[U()]),"value"):E:[]}(),onBlur:function(n){e.onBlur&&e.onBlur(n)},loadingMessage:function(){return(0,m.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,m.ag)("autocomplete.noOptions")}}),q&&e.showCreate&&e.hasPermissionToCreate?(0,v.jsx)("button",{style:{marginLeft:"16px",flexShrink:0},className:"btn btn-primary",type:"button",onClick:e.onOpenModal,children:(0,v.jsx)("i",{className:"fas fa-plus"})}):null]}),(0,v.jsx)("div",{className:"invalid-feedback",children:J}),Boolean(H)&&(0,v.jsx)("small",{className:"form-text text-muted",children:H})]})}g.defaultProps={isClearable:!0,mode:"default",required:!1},n.Z=g},47575:function(e,n,t){t(47313);var r=t(43270),a=t(49384),o=t(46417);function l(e){var n=e.label,t=e.description,l=e.name,s=e.hint,i=e.type,u=e.placeholder,c=e.autoFocus,d=e.autoComplete,m=e.required,f=e.externalErrorMessage,h=e.disabled,p=e.endAdornment,v=(0,r.Gc)(),g=v.register,b=v.errors,x=v.formState,Z=x.touched,C=x.isSubmitted,j=a.Z.errorMessage(l,b,Z,C,f);return(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("div",{className:p?"input-group":"",children:[Boolean(n)&&(0,o.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:l,children:n}),t,(0,o.jsx)("input",{id:l,name:l,type:i,ref:g,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:u||void 0,autoFocus:c||void 0,autoComplete:d||void 0,disabled:h,className:"form-control ".concat(j?"is-invalid":"")}),p&&(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsx)("span",{className:"input-group-text",children:p})})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(s)&&(0,o.jsx)("small",{className:"form-text text-muted",children:s})]})}l.defaultProps={type:"text",required:!1},n.Z=l},21538:function(e,n,t){t(47313);var r=t(43270),a=t(49384),o=t(46417);function l(e){var n=e.label,t=e.name,l=e.hint,s=e.type,i=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.required,m=e.externalErrorMessage,f=e.disabled,h=(0,r.Gc)(),p=h.register,v=h.errors,g=h.formState,b=g.touched,x=g.isSubmitted,Z=a.Z.errorMessage(t,v,b,x,m);return(0,o.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,o.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:t,children:n}),(0,o.jsx)("input",{id:t,name:t,type:s,ref:p,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:i||void 0,autoFocus:u||void 0,autoComplete:c||void 0,disabled:f,className:"form-control ".concat(Z?"is-invalid":"")}),(0,o.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(l)&&(0,o.jsx)("small",{className:"form-text text-muted",children:l})]})}l.defaultProps={type:"number",required:!1},n.Z=l},5544:function(e,n,t){var r=t(1413),a=t(47313),o=t(73622),l=t(10499),s=t(43270),i=t(49384),u=t(46417);function c(e){var n=e.label,t=e.name,c=e.hint,d=e.options,m=e.required,f=e.mode,h=e.placeholder,p=e.isClearable,v=e.externalErrorMessage,g=(0,s.Gc)(),b=g.register,x=g.errors,Z=g.formState,C=Z.touched,j=Z.isSubmitted,N=g.setValue,y=g.watch,w=i.Z.errorMessage(t,x,C,j,v),B=y(t);(0,a.useEffect)((function(){b({name:t})}),[b,t]);var S=function(){return B?B.map((function(e){return d.find((function(n){return n.value===e}))})):[]},P=function(){var n=e.options;return null!=B?n.find((function(e){return e.value===B})):null},k=function(n){if(!n)return N(t,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var r=n.map((function(e){return e?e.value:e})).filter((function(e){return null!=e}));N(t,r,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(r)},V=function(n){if(!n)return N(t,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));N(t,n.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.value)},M=Boolean(w)?{container:function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:"hsl(0,0%,20%)"})},control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{borderColor:"red"})}}:{container:function(e){return(0,r.Z)((0,r.Z)({},e),{},{color:"hsl(0,0%,20%)"})}};return(0,u.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,u.jsx)("label",{className:"col-form-label ".concat(m?"required":null),children:n}),(0,u.jsx)("br",{}),(0,u.jsx)(o.ZP,{className:"w-100",value:"multiple"===e.mode?S():P(),onChange:function(n){return"multiple"===e.mode?k(n):V(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},id:t,name:t,options:d,isMulti:"multiple"===f,placeholder:h||"",isClearable:p,styles:M,loadingMessage:function(){return(0,l.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,l.ag)("autocomplete.noOptions")}}),(0,u.jsx)("div",{className:"invalid-feedback",children:w}),Boolean(c)&&(0,u.jsx)("small",{className:"form-text text-muted",children:c})]})}c.defaultProps={required:!1,isClearable:!0},n.Z=c}}]);