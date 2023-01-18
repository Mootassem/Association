(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3391],{6891:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(70885),a=t(15861),i=t(15671),o=t(43144),s=t(87757),l=t.n(s),u=t(99811),c=t.n(u),d=t(10499),m=t(63922),f=t(71351),p=t(81384),h=t(31881),g=t.n(h),v=function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,null,[{key:"validate",value:function(e,n){if(n){if(n.image&&!e.type.startsWith("image"))throw new Error((0,d.ag)("fileUploader.image"));if(n.storage.maxSizeInBytes&&e.size>n.storage.maxSizeInBytes)throw new Error((0,d.ag)("fileUploader.size",c()(n.storage.maxSizeInBytes)));var t=b(e.name);if(n.formats&&!n.formats.includes(t))throw new Error((0,d.ag)("fileUploader.formats",n.formats.join(", ")))}}},{key:"upload",value:function(){var e=(0,a.Z)(l().mark((function e(n,t){var r,a,i,o,s,u,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(n,t),e.next=7;break;case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 7:return r=b(n.name),a=(0,f.Z)(),i="".concat(a,".").concat(r),e.next=12,this.fetchFileCredentials(i,t);case 12:return o=e.sent,s=o.uploadCredentials,u=o.downloadUrl,c=o.privateUrl,e.next=18,this.uploadToServer(n,s);case 18:return e.abrupt("return",{id:a,name:n.name,sizeInBytes:n.size,publicUrl:s&&s.publicUrl?s.publicUrl:null,privateUrl:c,downloadUrl:u,new:!0});case 19:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(n,t){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=(0,a.Z)(l().mark((function e(n,t){var r,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.Z.get(),e.next=3,m.Z.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:n,storageId:t.storage.id}});case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=(0,a.Z)(l().mark((function e(n,t){var a,i,o,s,u,c,d;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=t.url,i=new FormData,o=0,s=Object.entries(t.fields||{});o<s.length;o++)u=(0,r.Z)(s[o],2),c=u[0],d=u[1],i.append(c,d);return i.append("file",n),e.abrupt("return",g().post(a,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()}]),e}();function b(e){if(!e)return null;var n=/(?:\.([^.]+))?$/.exec(e);return n?n[1]:null}},89994:function(e,n,t){"use strict";var r=t(42982),a=t(42277),i=t(10499),o=t(70816),s=t.n(o),l={generic:function(e){return a.nK().label(e)},string:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.Xg().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.IX().compact().ensure().of(a.Z_().transform((function(e,n){return""===n?null:e})).trim()).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.IX().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.IX().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat((0,r.Z)(n.options||[])));return n.required&&(t=t.required((0,i.ag)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.Z_().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.Rx().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).transform((function(e,n){return e?s()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.nK().nullable(!0).label(e).test("is-date",(0,i.ag)("validation.mixed.default"),(function(e){return!e||s()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?s()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.Z=l},92774:function(e,n,t){"use strict";var r=t(76747),a=t(86495),i=t(26319),o=t(71945),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeChargeRead)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeChargeEdit)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeChargeCreate)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeChargeImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:l,selectPermissionToCreate:u,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,n){return new i.Z(e,n).match(o.Z.values.typeChargeDestroy)})),selectPermissionToImport:c};n.Z=d},53391:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(70885),a=t(47313),i=t(45788),o=t(63830),s=t(10499),l=t(30311),u=t(76747),c=function(e){return e.charge.form},d=(0,u.P1)([c],(function(e){return e.record})),m={selectInitLoading:(0,u.P1)([c],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,u.P1)([c],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:c},f=t(59436),p=t(1413),h=t(43270),g=t(89994),v=t(95748),b=t(68160),x=t(42277),Z=t(67357),y=t(21538),j=t(87347),C=t(96111),w=t(30513),N=t(42982),B=t(66135),k=t(15861),q=t(87757),S=t.n(q),P=t(1168),M=t(33512),T=t(12708),E=t(46417);var V=function(e){var n=(0,a.useRef)(),t=(0,a.useState)(!1),i=(0,r.Z)(t,2),o=i[0],l=i[1];(0,a.useEffect)((function(){window.$(n.current).modal("show"),window.$(n.current).on("hidden.bs.modal",e.onClose)}),[]);var u=function(){var t=(0,k.Z)(S().mark((function t(r,a){var i,o,s;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,B.Z.create(a);case 4:return i=t.sent,o=i.id,t.next=8,B.Z.find(o);case 8:s=t.sent,window.$(n.current).modal("hide"),e.onSuccess(s),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),M.Z.handle(t.t0);case 16:return t.prev=16,l(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})));return function(e,n){return t.apply(this,arguments)}}();return P.createPortal((0,E.jsx)("div",{ref:n,className:"modal",tabIndex:-1,children:(0,E.jsx)("div",{className:"modal-dialog modal-lg",children:(0,E.jsxs)("div",{className:"modal-content",children:[(0,E.jsxs)("div",{className:"modal-header",children:[(0,E.jsx)("h5",{className:"modal-title",children:(0,s.ag)("entities.typeCharge.new.title")}),(0,E.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,E.jsx)("span",{children:"\xd7"})})]}),(0,E.jsx)("div",{className:"modal-body",children:(0,E.jsx)(T.Z,{saveLoading:o,onSubmit:u,onCancel:function(){window.$(n.current).modal("hide")},modal:!0})})]})})}),document.getElementById("modal-root"))},R=t(49513),F=t(92774);var I=function(e){var n=(0,h.Gc)(),t=n.setValue,o=n.getValues,s=(0,a.useState)(!1),l=(0,r.Z)(s,2),u=l[0],c=l[1],d=(0,i.v9)(F.Z.selectPermissionToCreate),m=function(){c(!1)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(R.Z,(0,p.Z)((0,p.Z)({},e),{},{fetchFn:function(e,n){return B.Z.listAutocomplete(e,n)},mapper:{toAutocomplete:function(e){if(!e)return null;var n=e.id,t=e.label;return e.nom&&(t=e.nom),{key:n,value:n,label:t}},toValue:function(e){return e?{id:e.value,label:e.label}:null}},onOpenModal:function(){c(!0)},hasPermissionToCreate:d})),u&&(0,E.jsx)(V,{onClose:m,onSuccess:function(n){var r=e.name,a=e.mode;t(r,a&&"multiple"===a?[].concat((0,N.Z)(o()[r]||[]),[n]):n,{shouldValidate:!0,shouldDirty:!0}),m()}})]})},U=x.Ry().shape({chargeType:g.Z.relationToOne((0,s.ag)("entities.projet.fields.typeProjet"),{required:!0}),amount:g.Z.integer((0,s.ag)("entities.charge.fields.amount"),{}),attachements:g.Z.files((0,s.ag)("entities.projet.fields.attachements"),{}),details:g.Z.string((0,s.ag)("entities.product.fields.details"),{required:!0})});var L=function(e){var n=(0,a.useState)((function(){var n=e.record||{};return{chargeType:n.chargeType,amount:n.amount,attachements:n.attachements||[],details:n.details}})),t=(0,r.Z)(n,1)[0],i=(0,h.cI)({resolver:(0,Z.X)(U),mode:"all",defaultValues:t}),o=function(n){var t;e.onSubmit(null===(t=e.record)||void 0===t?void 0:t.id,n)};return(0,E.jsx)(b.Z,{children:(0,E.jsx)(h.RV,(0,p.Z)((0,p.Z)({},i),{},{children:(0,E.jsxs)("form",{onSubmit:i.handleSubmit(o),children:[(0,E.jsxs)("div",{className:"row",children:[(0,E.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,E.jsx)(I,{name:"chargeType",label:(0,s.ag)("entities.typeCharge.fields.nom"),placeholder:(0,s.ag)("entities.typeCharge.fields.nom"),required:!0,showCreate:!e.modal,election:!0})}),(0,E.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,E.jsx)(y.Z,{name:"amount",label:(0,s.ag)("entities.charge.fields.amount"),required:!1})}),(0,E.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,E.jsx)(w.Z,{name:"details",label:(0,s.ag)("entities.product.fields.details"),required:!0})}),(0,E.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,E.jsx)(j.Z,{name:"attachements",label:(0,s.ag)("entities.projet.fields.attachements"),required:!1,storage:C.Z.values.projetAttachements,max:void 0,formats:void 0})})]}),(0,E.jsxs)("div",{className:"form-buttons",children:[(0,E.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:i.handleSubmit(o),children:[(0,E.jsx)(v.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),(0,s.ag)("common.save")]}),(0,E.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(t).forEach((function(e){i.setValue(e,t[e])}))},children:[(0,E.jsx)("i",{className:"fas fa-undo"}),(0,s.ag)("common.reset")]}),e.onCancel?(0,E.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,E.jsx)("i",{className:"fas fa-times"}),(0,s.ag)("common.cancel")]}):null]})]})}))})},D=t(27829),z=t(53852),Y=t(61567),A=t(75352);var O=function(e){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),u=t[0],c=t[1],d=(0,i.I0)(),p=(0,o.$B)(),h=(0,i.v9)(m.selectInitLoading),g=(0,i.v9)(m.selectSaveLoading),v=(0,i.v9)(m.selectRecord),b=Boolean(p.params.id),x=b?(0,s.ag)("entities.charge.edit.title"):(0,s.ag)("entities.charge.new.title");return(0,a.useEffect)((function(){d(l.Z.doInit(p.params.id)),c(!0)}),[d,p.params.id]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(z.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.charge.menu"),"/charge"],[x]]}),(0,E.jsxs)(D.Z,{children:[(0,E.jsx)(A.Z,{children:x}),h&&(0,E.jsx)(Y.Z,{}),u&&!h&&(0,E.jsx)(L,{saveLoading:g,initLoading:h,record:v,isEditing:b,onSubmit:function(e,n){d(b?l.Z.doUpdate(e,n):l.Z.doCreate(n))},onCancel:function(){return(0,f.s1)().push("/charge")}})]})]})}},27829:function(e,n,t){"use strict";var r,a=t(30168),i=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));n.Z=i},53852:function(e,n,t){"use strict";var r,a=t(30168),i=(t(47313),t(28303)),o=t(91876),s=t(46417),l=o.ZP.nav(r||(r=(0,a.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));n.Z=function(e){var n=function(e){return e.length>1};return(0,s.jsx)(l,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(t,r){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===r?"active":""),children:n(t)?(0,s.jsx)(i.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(e,n,t){"use strict";t(47313);var r=t(46417);n.Z=function(e){return e.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,r.jsx)("i",{className:e.iconClass}):null}},61567:function(e,n,t){"use strict";t(47313);var r=t(46417);n.Z=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},49384:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(15671),a=t(43144),i=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},49513:function(e,n,t){"use strict";var r=t(1413),a=t(42982),i=t(15861),o=t(70885),s=t(87757),l=t.n(s),u=t(47313),c=t(49384),d=t(73622),m=t(10499),f=t(43270),p=t(35487),h=t.n(p),g=t(46417);function v(e){var n=(0,f.Gc)(),t=n.errors,s=n.watch,p=n.setValue,v=n.register,b=n.formState,x=b.touched,Z=b.isSubmitted,y=e.label,j=e.name,C=e.hint,w=e.placeholder,N=e.autoFocus,B=e.externalErrorMessage,k=e.mode,q=e.required,S=e.isClearable,P=e.mapper,M=e.fetchFn,T=e.election,E=s(j),V=(0,u.useState)([]),R=(0,o.Z)(V,2),F=R[0],I=R[1],U=(0,u.useState)(!1),L=(0,o.Z)(U,2),D=L[0],z=L[1];(0,u.useEffect)((function(){v({name:j})}),[v,j]),(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.prev=1,e.next=4,M();case 4:n=(n=e.sent).map((function(e){return P.toAutocomplete(e)})),I(n),z(!1),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),I([]),z(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e().then((function(){}))}),[]);var Y=function(e){return(F||[]).find((function(n){return n.value===e.value}))||e},A=function(){return"multiple"===k?O():G()},O=function(){return E?E.map((function(e){return Y(P.toAutocomplete(e))})):[]},G=function(){return E?Y(P.toAutocomplete(E)):null},_=function(n){if(!n)return p(j,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var t=n.map((function(e){return P.toValue(e)}));p(j,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},K=function(n){if(!n)return p(j,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));var t=P.toValue(n);p(j,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},$=D?(0,m.ag)("autocomplete.loading"):C,X=c.Z.errorMessage(j,t,x,Z,B),H=Boolean(X)?{control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{borderColor:"red"})}}:void 0;return(0,g.jsxs)("div",{className:"form-group",children:[Boolean(y)&&(0,g.jsx)("label",{className:"col-form-label ".concat(q?"required":null),htmlFor:j,children:y}),(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)(d.ZP,{className:"w-100",styles:H,id:j,name:j,isMulti:"multiple"===k,placeholder:w||"",autoFocus:N||void 0,onChange:function(e){return"multiple"===k?_(e):K(e)},value:A(),isClearable:S,options:function(){var n=e.mode;return F?A()?"multiple"===n?h()([].concat((0,a.Z)(F),(0,a.Z)(A())),"value"):h()([].concat((0,a.Z)(F),[A()]),"value"):F:[]}(),onBlur:function(n){e.onBlur&&e.onBlur(n)},loadingMessage:function(){return(0,m.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,m.ag)("autocomplete.noOptions")}}),T&&e.showCreate&&e.hasPermissionToCreate?(0,g.jsx)("button",{style:{marginLeft:"16px",flexShrink:0},className:"btn btn-primary",type:"button",onClick:e.onOpenModal,children:(0,g.jsx)("i",{className:"fas fa-plus"})}):null]}),(0,g.jsx)("div",{className:"invalid-feedback",children:X}),Boolean($)&&(0,g.jsx)("small",{className:"form-text text-muted",children:$})]})}v.defaultProps={isClearable:!0,mode:"default",required:!1},n.Z=v},87347:function(e,n,t){"use strict";var r=t(47313),a=t(10619),i=t(43270),o=t(49384),s=t(46417);function l(e){var n=e.label,t=e.name,l=e.hint,u=e.storage,c=e.formats,d=e.max,m=e.required,f=e.externalErrorMessage,p=(0,i.Gc)(),h=p.register,g=p.errors,v=p.formState,b=v.touched,x=v.isSubmitted,Z=p.setValue,y=p.watch;(0,r.useEffect)((function(){h({name:t})}),[h,t]);var j=o.Z.errorMessage(t,g,b,x,f);return(0,s.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,s.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:t,children:n}),(0,s.jsx)("br",{}),(0,s.jsx)(a.Z,{storage:u,formats:c,value:y(t),onChange:function(n){Z(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},max:d}),(0,s.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(l)&&(0,s.jsx)("small",{className:"form-text text-muted",children:l})]})}l.defaultProps={max:void 0,required:!1},n.Z=l},47575:function(e,n,t){"use strict";t(47313);var r=t(43270),a=t(49384),i=t(46417);function o(e){var n=e.label,t=e.description,o=e.name,s=e.hint,l=e.type,u=e.placeholder,c=e.autoFocus,d=e.autoComplete,m=e.required,f=e.externalErrorMessage,p=e.disabled,h=e.endAdornment,g=(0,r.Gc)(),v=g.register,b=g.errors,x=g.formState,Z=x.touched,y=x.isSubmitted,j=a.Z.errorMessage(o,b,Z,y,f);return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("div",{className:h?"input-group":"",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:o,children:n}),t,(0,i.jsx)("input",{id:o,name:o,type:l,ref:v,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:u||void 0,autoFocus:c||void 0,autoComplete:d||void 0,disabled:p,className:"form-control ".concat(j?"is-invalid":"")}),h&&(0,i.jsx)("div",{className:"input-group-append",children:(0,i.jsx)("span",{className:"input-group-text",children:h})})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(s)&&(0,i.jsx)("small",{className:"form-text text-muted",children:s})]})}o.defaultProps={type:"text",required:!1},n.Z=o},21538:function(e,n,t){"use strict";t(47313);var r=t(43270),a=t(49384),i=t(46417);function o(e){var n=e.label,t=e.name,o=e.hint,s=e.type,l=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.required,m=e.externalErrorMessage,f=e.disabled,p=(0,r.Gc)(),h=p.register,g=p.errors,v=p.formState,b=v.touched,x=v.isSubmitted,Z=a.Z.errorMessage(t,g,b,x,m);return(0,i.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:t,children:n}),(0,i.jsx)("input",{id:t,name:t,type:s,ref:h,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:l||void 0,autoFocus:u||void 0,autoComplete:c||void 0,disabled:f,className:"form-control ".concat(Z?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(o)&&(0,i.jsx)("small",{className:"form-text text-muted",children:o})]})}o.defaultProps={type:"number",required:!1},n.Z=o},30513:function(e,n,t){"use strict";t(47313);var r=t(43270),a=t(49384),i=t(46417);function o(e){var n=e.label,t=e.name,o=e.hint,s=e.size,l=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.externalErrorMessage,m=e.required,f={small:"col-form-label-sm",large:"col-form-label-lg"}[s]||"",p={small:"form-control-sm",large:"form-control-lg"}[s]||"",h=(0,r.Gc)(),g=h.register,v=h.errors,b=h.formState,x=b.touched,Z=b.isSubmitted,y=a.Z.errorMessage(t,v,x,Z,d);return(0,i.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(m?"required":null," ").concat(f),htmlFor:t,children:n}),(0,i.jsx)("textarea",{id:t,name:t,ref:g,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:l||void 0,autoFocus:u||void 0,autoComplete:c||void 0,className:"form-control ".concat(p," ").concat(y?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(o)&&(0,i.jsx)("small",{className:"form-text text-muted",children:o})]})}o.defaultProps={required:!1},n.Z=o},68160:function(e,n,t){"use strict";var r,a=t(30168),i=t(91876).ZP.div(r||(r=(0,a.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n  .app__specification {\n    padding: 14px;\n  }\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n  i {\n    padding-right: 4px;\n    font-size: 14px;\n  }\n  .adherent-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));n.Z=i},75352:function(e,n,t){"use strict";var r,a=t(30168),i=t(91876).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 24px;\n"])));n.Z=i},10619:function(e,n,t){"use strict";var r=t(42982),a=t(15861),i=t(70885),o=t(87757),s=t.n(o),l=t(47313),u=t(6891),c=t(33512),d=t(10499),m=t(95748),f=t(46417);n.Z=function(e){var n=(0,l.useState)(!1),t=(0,i.Z)(n,2),o=t[0],p=t[1],h=(0,l.useRef)(),g=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]},v=function(){var n=(0,a.Z)(s().mark((function n(t){var a,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,(a=t.target.files)&&a.length){n.next=4;break}return n.abrupt("return");case 4:return i=a[0],u.Z.validate(i,{storage:e.storage,formats:e.formats}),p(!0),n.next=9,u.Z.upload(i,{storage:e.storage,formats:e.formats});case 9:i=n.sent,h.current.value="",p(!1),e.onChange([].concat((0,r.Z)(g()),[i])),n.next=21;break;case 15:n.prev=15,n.t0=n.catch(0),h.current.value="",console.error(n.t0),p(!1),c.Z.showMessage(n.t0);case 21:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}(),b=e.max,x=e.readonly,Z=(0,f.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,f.jsx)(m.Z,{loading:o,iconClass:"fas fa-plus"}),(0,d.ag)("fileUploader.upload"),(0,f.jsx)("input",{style:{display:"none"},disabled:o||x,accept:function(){var n=e.schema;if(n&&n.formats)return n.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:v,ref:h})]});return(0,f.jsxs)("div",{children:[x||b&&g().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=b?null:Z,g()&&g().length?(0,f.jsx)("div",{children:g().map((function(n){return(0,f.jsxs)("div",{children:[(0,f.jsx)("i",{className:"fas fa-link text-muted mr-2"}),(0,f.jsx)("a",{href:n.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:n.name}),!x&&(0,f.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return t=n.id,void e.onChange(g().filter((function(e){return e.id!==t})));var t},children:(0,f.jsx)("i",{className:"fas fa-times"})})]},n.id)}))}):null]})}},12708:function(e,n,t){"use strict";var r=t(1413),a=t(70885),i=t(47313),o=t(43270),s=t(10499),l=t(89994),u=t(95748),c=t(68160),d=t(42277),m=t(67357),f=t(47575),p=t(46417),h=d.Ry().shape({nom:l.Z.string((0,s.ag)("entities.typeCharge.fields.nom"),{required:!0})});n.Z=function(e){var n=(0,i.useState)((function(){return{nom:(e.record||{}).nom}})),t=(0,a.Z)(n,1)[0],l=(0,o.cI)({resolver:(0,m.X)(h),mode:"all",defaultValues:t}),d=function(n){var t;e.onSubmit(null===(t=e.record)||void 0===t?void 0:t.id,n)};return(0,p.jsx)(c.Z,{children:(0,p.jsx)(o.RV,(0,r.Z)((0,r.Z)({},l),{},{children:(0,p.jsxs)("form",{onSubmit:l.handleSubmit(d),children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,p.jsx)(f.Z,{name:"nom",label:(0,s.ag)("entities.typeCharge.fields.nom"),required:!0,autoFocus:!0})})}),(0,p.jsxs)("div",{className:"form-buttons",children:[(0,p.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:l.handleSubmit(d),children:[(0,p.jsx)(u.Z,{loading:e.saveLoading,iconClass:"far fa-save"})," ",(0,s.ag)("common.save")]}),(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(t).forEach((function(e){l.setValue(e,t[e])}))},children:[(0,p.jsx)("i",{className:"fas fa-undo"})," ",(0,s.ag)("common.reset")]}),e.onCancel?(0,p.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,p.jsx)("i",{className:"fas fa-times"})," ",(0,s.ag)("common.cancel")]}):null]})]})}))})}},99811:function(e,n,t){"use strict";!function(n){var t=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function i(e){var n,i,o,s,l,u,c,d,m,f,p,h,g,v,b,x=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},Z=[],y=0,j=void 0,C=void 0;if(isNaN(e))throw new TypeError("Invalid number");return i=!0===x.bits,p=!0===x.unix,n=x.base||2,f=void 0!==x.round?x.round:p?1:2,u=void 0!==x.locale?x.locale:"",c=x.localeOptions||{},h=void 0!==x.separator?x.separator:"",g=void 0!==x.spacer?x.spacer:p?"":" ",b=x.symbols||{},v=2===n&&x.standard||"jedec",m=x.output||"string",s=!0===x.fullform,l=x.fullforms instanceof Array?x.fullforms:[],j=void 0!==x.exponent?x.exponent:-1,o=2<n?1e3:1024,(d=(C=Number(e))<0)&&(C=-C),(-1===j||isNaN(j))&&(j=Math.floor(Math.log(C)/Math.log(o)))<0&&(j=0),8<j&&(j=8),"exponent"===m?j:(0===C?(Z[0]=0,Z[1]=p?"":r[v][i?"bits":"bytes"][j]):(y=C/(2===n?Math.pow(2,10*j):Math.pow(1e3,j)),i&&o<=(y*=8)&&j<8&&(y/=o,j++),Z[0]=Number(y.toFixed(0<j?f:0)),Z[0]===o&&j<8&&void 0===x.exponent&&(Z[0]=1,j++),Z[1]=10===n&&1===j?i?"kb":"kB":r[v][i?"bits":"bytes"][j],p&&(Z[1]="jedec"===v?Z[1].charAt(0):0<j?Z[1].replace(/B$/,""):Z[1],t.test(Z[1])&&(Z[0]=Math.floor(Z[0]),Z[1]=""))),d&&(Z[0]=-Z[0]),Z[1]=b[Z[1]]||Z[1],!0===u?Z[0]=Z[0].toLocaleString():0<u.length?Z[0]=Z[0].toLocaleString(u,c):0<h.length&&(Z[0]=Z[0].toString().replace(".",h)),"array"===m?Z:(s&&(Z[1]=l[j]?l[j]:a[v][j]+(i?"bit":"byte")+(1===Z[0]?"":"s")),"object"===m?{value:Z[0],symbol:Z[1],exponent:j}:Z.join(g)))}i.partial=function(e){return function(n){return i(n,e)}},e.exports=i}("undefined"!=typeof window?window:t.g)},34405:function(e,n,t){var r=t(99038);e.exports=function(e,n){return!!(null==e?0:e.length)&&r(e,n,0)>-1}},86722:function(e){e.exports=function(e,n,t){for(var r=-1,a=null==e?0:e.length;++r<a;)if(t(n,e[r]))return!0;return!1}},93527:function(e){e.exports=function(e,n,t,r){for(var a=e.length,i=t+(r?1:-1);r?i--:++i<a;)if(n(e[i],i,e))return i;return-1}},99038:function(e,n,t){var r=t(93527),a=t(57700),i=t(13245);e.exports=function(e,n,t){return n===n?i(e,n,t):r(e,a,t)}},57700:function(e){e.exports=function(e){return e!==e}},7579:function(e,n,t){var r=t(44526),a=t(34405),i=t(86722),o=t(88905),s=t(56946),l=t(73671);e.exports=function(e,n,t){var u=-1,c=a,d=e.length,m=!0,f=[],p=f;if(t)m=!1,c=i;else if(d>=200){var h=n?null:s(e);if(h)return l(h);m=!1,c=o,p=new r}else p=n?[]:f;e:for(;++u<d;){var g=e[u],v=n?n(g):g;if(g=t||0!==g?g:0,m&&v===v){for(var b=p.length;b--;)if(p[b]===v)continue e;n&&p.push(v),f.push(g)}else c(p,v,t)||(p!==f&&p.push(v),f.push(g))}return f}},56946:function(e,n,t){var r=t(4199),a=t(8568),i=t(73671),o=r&&1/i(new r([,-0]))[1]==1/0?function(e){return new r(e)}:a;e.exports=o},13245:function(e){e.exports=function(e,n,t){for(var r=t-1,a=e.length;++r<a;)if(e[r]===n)return r;return-1}},8568:function(e){e.exports=function(){}},35487:function(e,n,t){var r=t(81186),a=t(7579);e.exports=function(e,n){return e&&e.length?a(e,r(n,2)):[]}},73622:function(e,n,t){"use strict";var r=t(15671),a=t(43144),i=t(60136),o=t(82963),s=t(61120),l=t(47313),u=t(16912),c=t(46383),d=(t(1168),t(82423)),m=(t(96312),t(71902),t(87201)),f=t(70342);function p(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.Z)(e);if(n){var a=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,o.Z)(this,t)}}l.Component;var h=(0,m.m)(d.S);n.ZP=h},71351:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function i(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}for(var o=[],s=0;s<256;++s)o[s]=(s+256).toString(16).substr(1);var l=function(e,n){var t=n||0,r=o;return[r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]]].join("")};var u=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var o=0;o<16;++o)n[r+o]=a[o];return n||l(a)}}}]);