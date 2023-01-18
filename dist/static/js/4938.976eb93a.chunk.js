(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4938],{89994:function(e,n,t){"use strict";var r=t(42982),a=t(42277),i=t(10499),o=t(70816),l=t.n(o),s={generic:function(e){return a.nK().label(e)},string:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.IX().compact().ensure().of(a.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,r.Z)(n.options||[])));return n.required&&(t=t.required((0,i.ag)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).test("is-date",(0,i.ag)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.Z=s},80163:function(e,n,t){"use strict";var r=t(76747),a=t(86495),i=t(26319),o=t(71945),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeRevenueRead)})),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeRevenueEdit)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeRevenueCreate)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeRevenueImport)})),d={selectPermissionToRead:l,selectPermissionToEdit:s,selectPermissionToCreate:u,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeRevenueDestroy)})),selectPermissionToImport:c};n.Z=d},74938:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return X}});var r=t(70885),a=t(47313),i=t(45788),o=t(63830),l=t(10499),s=t(71992),u=t(76747),c=function(e){return e.entree.form},d=(0,u.P1)([c],(function(e){return e.record})),m={selectInitLoading:(0,u.P1)([c],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,u.P1)([c],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:c},f=t(59436),p=t(1413),h=t(43270),v=t(89994),g=t(95748),b=t(68160),x=t(42277),Z=t(67357),j=t(47575),y=t(21538),C=t(70816),w=t.n(C),N=t(71896),q=t(42982),k=t(86802),S=t(15861),M=t(87757),P=t.n(M),R=t(1168),B=t(33512),D=t(47133),L=t(46417);var T=function(e){var n=(0,a.useRef)(),t=(0,a.useState)(!1),i=(0,r.Z)(t,2),o=i[0],s=i[1];(0,a.useEffect)((function(){window.$(n.current).modal("show"),window.$(n.current).on("hidden.bs.modal",e.onClose)}),[]);var u=function(){var t=(0,S.Z)(P().mark((function t(r,a){var i,o,l;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,k.Z.create(a);case 4:return i=t.sent,o=i.id,t.next=8,k.Z.find(o);case 8:l=t.sent,window.$(n.current).modal("hide"),e.onSuccess(l),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),B.Z.handle(t.t0);case 16:return t.prev=16,s(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(e,n){return t.apply(this,arguments)}}();return R.createPortal((0,L.jsx)("div",{ref:n,className:"modal",tabIndex:-1,children:(0,L.jsx)("div",{className:"modal-dialog modal-lg",children:(0,L.jsxs)("div",{className:"modal-content",children:[(0,L.jsxs)("div",{className:"modal-header",children:[(0,L.jsx)("h5",{className:"modal-title",children:(0,l.ag)("entities.typeRevenue.new.title")}),(0,L.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,L.jsx)("span",{children:"\xd7"})})]}),(0,L.jsx)("div",{className:"modal-body",children:(0,L.jsx)(D.Z,{saveLoading:o,onSubmit:u,onCancel:function(){window.$(n.current).modal("hide")},modal:!0})})]})})}),document.getElementById("modal-root"))},V=t(49513),Y=t(80163);var I=function(e){var n=(0,h.Gc)(),t=n.setValue,o=n.getValues,l=(0,a.useState)(!1),s=(0,r.Z)(l,2),u=s[0],c=s[1],d=(0,i.v9)(Y.Z.selectPermissionToCreate),m=function(){c(!1)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(V.Z,(0,p.Z)((0,p.Z)({},e),{},{fetchFn:function(e,n){return k.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return e.nom&&(t=e.nom),{key:n,value:n,label:t}},toValue:function(e){return e?{id:e.value,label:e.label}:null}},onOpenModal:function(){c(!0)},hasPermissionToCreate:d})),u&&(0,L.jsx)(T,{onClose:m,onSuccess:function(n){var r=e.name,a=e.mode;t(r,a&&"multiple"===a?[].concat((0,q.Z)(o()[r]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),m()}})]})},F=x.Ry().shape({entreeType:v.Z.relationToOne((0,l.ag)("entities.projet.fields.typeProjet"),{required:!0}),sourceLink:v.Z.string((0,l.ag)("entities.entree.fields.sourceLink"),{}),amount:v.Z.integer((0,l.ag)("entities.entree.fields.amount"),{}),date:v.Z.date((0,l.ag)("entities.entree.fields.date"),{})});var E=function(e){var n=(0,a.useState)((function(){var n=e.record||{};return{entreeType:n.entreeType,sourceLink:n.sourceLink,amount:n.amount,date:n.date?w()(n.date,"YYYY-MM-DD").toDate():null}})),t=(0,r.Z)(n,1)[0],i=(0,h.cI)({resolver:(0,Z.X)(F),mode:"all",defaultValues:t}),o=function(n){var t;e.onSubmit(null===(t=e.record)||void 0===t?void 0:t.id,n)};return(0,L.jsx)(b.Z,{children:(0,L.jsx)(h.RV,(0,p.Z)((0,p.Z)({},i),{},{children:(0,L.jsxs)("form",{onSubmit:i.handleSubmit(o),children:[(0,L.jsxs)("div",{className:"row",children:[(0,L.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,L.jsx)(I,{name:"entreeType",label:(0,l.ag)("entities.typeRevenue.fields.nom"),placeholder:(0,l.ag)("entities.typeRevenue.placeholders.nom"),required:!0,showCreate:!e.modal,election:!0})}),(0,L.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,L.jsx)(j.Z,{name:"sourceLink",label:(0,l.ag)("entities.entree.fields.sourceLink"),required:!1})}),(0,L.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,L.jsx)(y.Z,{name:"amount",label:(0,l.ag)("entities.entree.fields.amount"),required:!1})}),(0,L.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,L.jsx)(N.Z,{name:"date",label:(0,l.ag)("entities.entree.fields.date"),required:!1})})]}),(0,L.jsxs)("div",{className:"form-buttons",children:[(0,L.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:i.handleSubmit(o),children:[(0,L.jsx)(g.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),(0,l.ag)("common.save")]}),(0,L.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(t).forEach((function(e){i.setValue(e,t[e])}))},children:[(0,L.jsx)("i",{className:"fas fa-undo"}),(0,l.ag)("common.reset")]}),e.onCancel?(0,L.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,L.jsx)("i",{className:"fas fa-times"}),(0,l.ag)("common.cancel")]}):null]})]})}))})},O=t(27829),_=t(53852),A=t(61567),U=t(75352);var X=function(e){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),u=t[0],c=t[1],d=(0,i.I0)(),p=(0,o.$B)(),h=(0,i.v9)(m.selectInitLoading),v=(0,i.v9)(m.selectSaveLoading),g=(0,i.v9)(m.selectRecord),b=Boolean(p.params.id),x=b?(0,l.ag)("entities.entree.edit.title"):(0,l.ag)("entities.entree.new.title");return(0,a.useEffect)((function(){d(s.Z.doInit(p.params.id)),c(!0)}),[d,p.params.id]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("entities.entree.menu"),"/entree"],[x]]}),(0,L.jsxs)(O.Z,{children:[(0,L.jsx)(U.Z,{children:x}),h&&(0,L.jsx)(A.Z,{}),u&&!h&&(0,L.jsx)(E,{saveLoading:v,initLoading:h,record:g,isEditing:b,onSubmit:function(e,n){d(b?s.Z.doUpdate(e,n):s.Z.doCreate(n))},onCancel:function(){return(0,f.s1)().push("/entree")}})]})]})}},27829:function(e,n,t){"use strict";var r,a=t(30168),i=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));n.Z=i},53852:function(e,n,t){"use strict";var r,a=t(30168),i=(t(47313),t(28303)),o=t(91876),l=t(46417),s=o.ZP.nav(r||(r=(0,a.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));n.Z=function(e){var n=function(e){return e.length>1};return(0,l.jsx)(s,{children:(0,l.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(t,r){return(0,l.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===r?"active":""),children:n(t)?(0,l.jsx)(i.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(e,n,t){"use strict";t(47313);var r=t(46417);n.Z=function(e){return e.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,r.jsx)("i",{className:e.iconClass}):null}},61567:function(e,n,t){"use strict";t(47313);var r=t(46417);n.Z=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},49384:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(15671),a=t(43144),i=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},49513:function(e,n,t){"use strict";var r=t(1413),a=t(42982),i=t(15861),o=t(70885),l=t(87757),s=t.n(l),u=t(47313),c=t(49384),d=t(73622),m=t(10499),f=t(43270),p=t(35487),h=t.n(p),v=t(46417);function g(e){var n=(0,f.Gc)(),t=n.errors,l=n.watch,p=n.setValue,g=n.register,b=n.formState,x=b.touched,Z=b.isSubmitted,j=e.label,y=e.name,C=e.hint,w=e.placeholder,N=e.autoFocus,q=e.externalErrorMessage,k=e.mode,S=e.required,M=e.isClearable,P=e.mapper,R=e.fetchFn,B=e.election,D=l(y),L=(0,u.useState)([]),T=(0,o.Z)(L,2),V=T[0],Y=T[1],I=(0,u.useState)(!1),F=(0,o.Z)(I,2),E=F[0],O=F[1];(0,u.useEffect)((function(){g({name:y})}),[g,y]),(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,R();case 4:n=(n=e.sent).map((function(e){return P.toAutocomplete(e)})),Y(n),O(!1),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),Y([]),O(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e().then((function(){}))}),[]);var _=function(e){return(V||[]).find((function(n){return n.value===e.value}))||e},A=function(){return"multiple"===k?U():X()},U=function(){return D?D.map((function(e){return _(P.toAutocomplete(e))})):[]},X=function(){return D?_(P.toAutocomplete(D)):null},z=function(n){if(!n)return p(y,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var t=n.map((function(e){return P.toValue(e)}));p(y,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},G=function(n){if(!n)return p(y,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var t=P.toValue(n);p(y,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},$=E?(0,m.ag)("autocomplete.loading"):C,H=c.Z.errorMessage(y,t,x,Z,q),K=Boolean(H)?{control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{borderColor:"red"})}}:void 0;return(0,v.jsxs)("div",{className:"form-group",children:[Boolean(j)&&(0,v.jsx)("label",{className:"col-form-label ".concat(S?"required":null),htmlFor:y,children:j}),(0,v.jsxs)("div",{style:{display:"flex"},children:[(0,v.jsx)(d.ZP,{className:"w-100",styles:K,id:y,name:y,isMulti:"multiple"===k,placeholder:w||"",autoFocus:N||void 0,onChange:function(e){return"multiple"===k?z(e):G(e)},value:A(),isClearable:M,options:function(){var n=e.mode;return V?A()?"multiple"===n?h()([].concat((0,a.Z)(V),(0,a.Z)(A())),"value"):h()([].concat((0,a.Z)(V),[A()]),"value"):V:[]}(),onBlur:function(n){e.onBlur&&e.onBlur(n)},loadingMessage:function(){return(0,m.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,m.ag)("autocomplete.noOptions")}}),B&&e.showCreate&&e.hasPermissionToCreate?(0,v.jsx)("button",{style:{marginLeft:"16px",flexShrink:0},className:"btn btn-primary",type:"button",onClick:e.onOpenModal,children:(0,v.jsx)("i",{className:"fas fa-plus"})}):null]}),(0,v.jsx)("div",{className:"invalid-feedback",children:H}),Boolean($)&&(0,v.jsx)("small",{className:"form-text text-muted",children:$})]})}g.defaultProps={isClearable:!0,mode:"default",required:!1},n.Z=g},71896:function(e,n,t){"use strict";var r=t(47313),a=t(43270),i=t(49384),o=t(61378),l=t.n(o),s=(t(72632),t(46417));function u(e){var n=e.label,t=e.name,o=e.hint,u=e.placeholder,c=e.autoFocus,d=e.externalErrorMessage,m=e.required,f=e.showTimeInput,p=e.scrollableYearDropdown,h=e.showYearDropdown,v=e.showMonthDropdown,g=(0,a.Gc)(),b=g.register,x=g.errors,Z=g.formState,j=Z.touched,y=Z.isSubmitted,C=g.setValue,w=g.watch;(0,r.useEffect)((function(){b({name:t})}),[b,t]);var N=i.Z.errorMessage(t,x,j,y,d);return(0,s.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,s.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:t,children:n}),(0,s.jsx)("br",{}),(0,s.jsx)(l(),{id:t,name:t,className:"form-control ".concat(N?"is-invalid":""),onChange:function(n){C(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},selected:w(t),showTimeInput:f,scrollableYearDropdown:p,showYearDropdown:h,showMonthDropdown:v,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!1}},placeholderText:u||"",autoFocus:c||void 0,autoComplete:"off",dateFormat:f?"yyyy-MM-dd HH:mm":"yyyy-MM-dd",timeIntervals:15}),(0,s.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(o)&&(0,s.jsx)("small",{className:"form-text text-muted",children:o})]})}u.defaultProps={required:!1},n.Z=u},47575:function(e,n,t){"use strict";t(47313);var r=t(43270),a=t(49384),i=t(46417);function o(e){var n=e.label,t=e.description,o=e.name,l=e.hint,s=e.type,u=e.placeholder,c=e.autoFocus,d=e.autoComplete,m=e.required,f=e.externalErrorMessage,p=e.disabled,h=e.endAdornment,v=(0,r.Gc)(),g=v.register,b=v.errors,x=v.formState,Z=x.touched,j=x.isSubmitted,y=a.Z.errorMessage(o,b,Z,j,f);return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("div",{className:h?"input-group":"",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:o,children:n}),t,(0,i.jsx)("input",{id:o,name:o,type:s,ref:g,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:u||void 0,autoFocus:c||void 0,autoComplete:d||void 0,disabled:p,className:"form-control ".concat(y?"is-invalid":"")}),h&&(0,i.jsx)("div",{className:"input-group-append",children:(0,i.jsx)("span",{className:"input-group-text",children:h})})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(l)&&(0,i.jsx)("small",{className:"form-text text-muted",children:l})]})}o.defaultProps={type:"text",required:!1},n.Z=o},21538:function(e,n,t){"use strict";t(47313);var r=t(43270),a=t(49384),i=t(46417);function o(e){var n=e.label,t=e.name,o=e.hint,l=e.type,s=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.required,m=e.externalErrorMessage,f=e.disabled,p=(0,r.Gc)(),h=p.register,v=p.errors,g=p.formState,b=g.touched,x=g.isSubmitted,Z=a.Z.errorMessage(t,v,b,x,m);return(0,i.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:t,children:n}),(0,i.jsx)("input",{id:t,name:t,type:l,ref:h,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:s||void 0,autoFocus:u||void 0,autoComplete:c||void 0,disabled:f,className:"form-control ".concat(Z?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(o)&&(0,i.jsx)("small",{className:"form-text text-muted",children:o})]})}o.defaultProps={type:"number",required:!1},n.Z=o},68160:function(e,n,t){"use strict";var r,a=t(30168),i=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n  .app__specification {\n    padding: 14px;\n  }\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n  i {\n    padding-right: 4px;\n    font-size: 14px;\n  }\n  .adherent-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));n.Z=i},75352:function(e,n,t){"use strict";var r,a=t(30168),i=t(91876).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 24px;\n"])));n.Z=i},47133:function(e,n,t){"use strict";var r=t(1413),a=t(70885),i=t(47313),o=t(43270),l=t(10499),s=t(89994),u=t(95748),c=t(68160),d=t(42277),m=t(67357),f=t(47575),p=t(46417),h=d.Ry().shape({nom:s.Z.string((0,l.ag)("entities.typeRevenue.fields.nom"),{required:!0})});n.Z=function(e){var n=(0,i.useState)((function(){return{nom:(e.record||{}).nom}})),t=(0,a.Z)(n,1)[0],s=(0,o.cI)({resolver:(0,m.X)(h),mode:"all",defaultValues:t}),d=function(n){var t;e.onSubmit(null===(t=e.record)||void 0===t?void 0:t.id,n)};return(0,p.jsx)(c.Z,{children:(0,p.jsx)(o.RV,(0,r.Z)((0,r.Z)({},s),{},{children:(0,p.jsxs)("form",{onSubmit:s.handleSubmit(d),children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,p.jsx)(f.Z,{name:"nom",label:(0,l.ag)("entities.typeRevenue.fields.nom"),required:!0,autoFocus:!0})})}),(0,p.jsxs)("div",{className:"form-buttons",children:[(0,p.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:s.handleSubmit(d),children:[(0,p.jsx)(u.Z,{loading:e.saveLoading,iconClass:"far fa-save"})," ",(0,l.ag)("common.save")]}),(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(t).forEach((function(e){s.setValue(e,t[e])}))},children:[(0,p.jsx)("i",{className:"fas fa-undo"})," ",(0,l.ag)("common.reset")]}),e.onCancel?(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,p.jsx)("i",{className:"fas fa-times"})," ",(0,l.ag)("common.cancel")]}):null]})]})}))})}},34405:function(e,n,t){var r=t(99038);e.exports=function(e,n){return!!(null==e?0:e.length)&&r(e,n,0)>-1}},86722:function(e){e.exports=function(e,n,t){for(var r=-1,a=null==e?0:e.length;++r<a;)if(t(n,e[r]))return!0;return!1}},93527:function(e){e.exports=function(e,n,t,r){for(var a=e.length,i=t+(r?1:-1);r?i--:++i<a;)if(n(e[i],i,e))return i;return-1}},99038:function(e,n,t){var r=t(93527),a=t(57700),i=t(13245);e.exports=function(e,n,t){return n===n?i(e,n,t):r(e,a,t)}},57700:function(e){e.exports=function(e){return e!==e}},7579:function(e,n,t){var r=t(44526),a=t(34405),i=t(86722),o=t(88905),l=t(56946),s=t(73671);e.exports=function(e,n,t){var u=-1,c=a,d=e.length,m=!0,f=[],p=f;if(t)m=!1,c=i;else if(d>=200){var h=n?null:l(e);if(h)return s(h);m=!1,c=o,p=new r}else p=n?[]:f;e:for(;++u<d;){var v=e[u],g=n?n(v):v;if(v=t||0!==v?v:0,m&&g===g){for(var b=p.length;b--;)if(p[b]===g)continue e;n&&p.push(g),f.push(v)}else c(p,g,t)||(p!==f&&p.push(g),f.push(v))}return f}},56946:function(e,n,t){var r=t(4199),a=t(8568),i=t(73671),o=r&&1/i(new r([,-0]))[1]==1/0?function(e){return new r(e)}:a;e.exports=o},13245:function(e){e.exports=function(e,n,t){for(var r=t-1,a=e.length;++r<a;)if(e[r]===n)return r;return-1}},8568:function(e){e.exports=function(){}},35487:function(e,n,t){var r=t(81186),a=t(7579);e.exports=function(e,n){return e&&e.length?a(e,r(n,2)):[]}},73622:function(e,n,t){"use strict";var r=t(15671),a=t(43144),i=t(60136),o=t(82963),l=t(61120),s=t(47313),u=t(16912),c=t(46383),d=(t(1168),t(82423)),m=(t(96312),t(71902),t(87201)),f=t(70342);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(n){var a=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,o.Z)(this,t)}}s.Component;var h=(0,m.m)(d.S);n.ZP=h},72632:function(){}}]);