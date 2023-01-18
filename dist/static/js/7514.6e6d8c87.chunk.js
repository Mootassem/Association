"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[7514],{12077:function(e,n,a){var t={selectLoading:(0,a(76747).P1)([function(e){return e.detailsCampagne.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=t},25719:function(e,n,a){var t=a(76747),l=a(86495),s=a(26319),i=a(71945),r=(0,t.P1)([l.Z.selectCurrentTenant,l.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(i.Z.values.detailsCampagneRead)})),o=(0,t.P1)([l.Z.selectCurrentTenant,l.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(i.Z.values.detailsCampagneEdit)})),c=(0,t.P1)([l.Z.selectCurrentTenant,l.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(i.Z.values.detailsCampagneCreate)})),d=(0,t.P1)([l.Z.selectCurrentTenant,l.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(i.Z.values.detailsCampagneImport)})),u={selectPermissionToRead:r,selectPermissionToEdit:o,selectPermissionToCreate:c,selectPermissionToDestroy:(0,t.P1)([l.Z.selectCurrentTenant,l.Z.selectCurrentUser],(function(e,n){return new s.Z(e,n).match(i.Z.values.detailsCampagneDestroy)})),selectPermissionToImport:d};n.Z=u},47320:function(e,n,a){var t=a(1413),l=a(70885),s=a(10499),i=a(13303),r=a(32469),o=a(47313),c=a(45788),d=a(43270),u=a(47590),m=a(95748),h=a(69138),p=a(42277),g=a(67357),f=a(13586),x=a(40846),v=a(38247),b=a(48317),j=a(5544),y=a(78974),Z=a(78428),C=a(46417),N=p.Ry().shape({adherent:u.Z.relationToOne((0,s.ag)("entities.detailsCampagne.fields.adherent")),palier:u.Z.relationToOne((0,s.ag)("entities.detailsCampagne.fields.palier")),statutPay:u.Z.enumerator((0,s.ag)("entities.detailsCampagne.fields.statutPay")),montantRange:u.Z.decimalRange((0,s.ag)("entities.detailsCampagne.fields.montantRange")),typePay:u.Z.enumerator((0,s.ag)("entities.detailsCampagne.fields.typePay"))}),P={adherent:null,palier:null,statutPay:null,montantRange:[],typePay:null,campagne:null},w={adherent:{label:(0,s.ag)("entities.detailsCampagne.fields.adherent"),render:x.Z.relationToOne()},palier:{label:(0,s.ag)("entities.detailsCampagne.fields.palier"),render:x.Z.relationToOne()},statutPay:{label:(0,s.ag)("entities.detailsCampagne.fields.statutPay"),render:x.Z.enumerator("entities.detailsCampagne.enumerators.statutPay")},montantRange:{label:(0,s.ag)("entities.detailsCampagne.fields.montantRange"),render:x.Z.decimalRange()},typePay:{label:(0,s.ag)("entities.detailsCampagne.fields.typePay"),render:x.Z.enumerator("entities.detailsCampagne.enumerators.typePay")},campagne:{label:(0,s.ag)("campagne"),render:x.Z.relationToOne()}};n.Z=function(e){var n=(0,c.v9)(r.Z.selectRawFilter),a=(0,c.I0)(),u=(0,o.useState)(!1),p=(0,l.Z)(u,2),x=p[0],k=p[1],R=(0,o.useState)((function(){return(0,t.Z)((0,t.Z)({},P),n)})),T=(0,l.Z)(R,1)[0],S=(0,d.cI)({resolver:(0,g.X)(N),defaultValues:T,mode:"all"});(0,o.useEffect)((function(){T.campagne=e.idcampagne,a(i.Z.doFetch(N.cast(T),n))}),[a]);var A=function(n){var t=S.getValues();t.campagne=e.idcampagne,n.campagne=e.idcampagne,a(i.Z.doFetch(n,t)),k(!1)};return(0,C.jsxs)(h.Z,{children:[(0,C.jsx)(f.Z,{onClick:function(){k(!x)},renders:w,values:n,expanded:x,onRemove:function(e){return S.setValue(e,P[e]),S.handleSubmit(A)()}}),(0,C.jsx)("div",{className:"container",children:(0,C.jsx)("div",{className:"collapse ".concat(x?"show":""),children:(0,C.jsx)(d.RV,(0,t.Z)((0,t.Z)({},S),{},{children:(0,C.jsxs)("form",{onSubmit:S.handleSubmit(A),children:[(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-lg-6 col-12",children:(0,C.jsx)(b.Z,{name:"adherent",label:(0,s.ag)("entities.detailsCampagne.fields.adherent")})}),(0,C.jsx)("div",{className:"col-lg-6 col-12",children:(0,C.jsx)(Z.Z,{name:"palier",label:(0,s.ag)("entities.detailsCampagne.fields.palier")})}),(0,C.jsx)("div",{className:"col-lg-6 col-12",children:(0,C.jsx)(j.Z,{name:"statutPay",label:(0,s.ag)("entities.detailsCampagne.fields.statutPay"),options:y.Z.statutPay.map((function(e){return{value:e,label:(0,s.ag)("entities.detailsCampagne.enumerators.statutPay.".concat(e))}}))})}),(0,C.jsx)("div",{className:"col-lg-6 col-12",children:(0,C.jsx)(v.Z,{name:"montantRange",label:(0,s.ag)("entities.detailsCampagne.fields.montantRange")})}),(0,C.jsx)("div",{className:"col-lg-6 col-12",children:(0,C.jsx)(j.Z,{name:"typePay",label:(0,s.ag)("entities.detailsCampagne.fields.typePay"),options:y.Z.typePay.map((function(e){return{value:e,label:(0,s.ag)("entities.detailsCampagne.enumerators.typePay.".concat(e))}}))})}),(0,C.jsx)("div",{style:{display:"none"},children:(0,C.jsx)("input",{name:"campagne"})})]}),(0,C.jsx)("div",{className:"row",children:(0,C.jsxs)("div",{className:"col-12 filter-buttons",children:[(0,C.jsxs)("button",{className:"btn btn-primary",type:"submit",disabled:e.loading,children:[(0,C.jsx)(m.Z,{loading:e.loading,iconClass:"fas fa-search"}),(0,s.ag)("common.search")]}),(0,C.jsxs)("button",{className:"btn btn-light",type:"button",onClick:function(){Object.keys(P).forEach((function(e){S.setValue(e,P[e])})),k(!1)},disabled:e.loading,children:[(0,C.jsx)(m.Z,{loading:e.loading,iconClass:"fas fa-undo"}),(0,s.ag)("common.reset")]})]})})]})}))})})]})}},58014:function(e,n,a){a.d(n,{Z:function(){return C}});var t=a(70885),l=a(47313),s=a(45788),i=a(28303),r=a(10499),o=a(25719),c=a(7370),d=a(12077),u=a(13303),m=a(32469),h=a(98848),p=a(44587),g=a(61567),f=a(27216),x=a(97249),v=a(1296),b=a(24151),j=a(74510),y=a(46417);var Z=function(e){var n=(0,s.v9)(j.Z.selectPermissionToRead),a=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};return a().length?(0,y.jsx)(y.Fragment,{children:a().map((function(e){return a=e,n?(0,y.jsx)("div",{children:(0,y.jsx)(i.rU,{className:"btn btn-link",to:"/palier/".concat(a.id),children:a.title})},a.id):(0,y.jsx)("div",{children:a.title},a.id);var a}))}):null};var C=function(e){var n=(0,l.useState)(null),a=(0,t.Z)(n,2),j=a[0],C=a[1],N=(0,s.I0)(),P=(0,s.v9)(m.Z.selectLoading),w=(0,s.v9)(d.Z.selectLoading),k=P||w,R=(0,s.v9)(m.Z.selectRows),T=(0,s.v9)(m.Z.selectPagination),S=(0,s.v9)(m.Z.selectSelectedKeys),A=(0,s.v9)(m.Z.selectHasRows),B=(0,s.v9)(m.Z.selectSorter),E=(0,s.v9)(m.Z.selectIsAllSelected),F=(0,s.v9)(o.Z.selectPermissionToEdit),U=(0,s.v9)(o.Z.selectPermissionToDestroy),I=function(){C(null)},O=function(e){var n=B.field===e&&"ascend"===B.order?"descend":"ascend";N(u.Z.doChangeSort({field:e,order:n}))};return(0,y.jsxs)(f.Z,{children:[(0,y.jsx)("div",{className:"table-responsive",children:(0,y.jsxs)("table",{className:"table table-striped     mt-2",children:[(0,y.jsx)("thead",{className:"thead",children:(0,y.jsxs)("tr",{children:[(0,y.jsx)(h.Z,{className:"th-checkbox",children:A&&(0,y.jsxs)("div",{className:"adherent-control adherent-checkbox",children:[(0,y.jsx)("input",{type:"checkbox",className:"adherent-control-input",id:"table-header-checkbox",checked:Boolean(E),onChange:function(){N(u.Z.doToggleAllSelected())}}),(0,y.jsx)("label",{htmlFor:"table-header-checkbox",className:"adherent-control-label",children:"\xa0"})]})}),(0,y.jsx)(h.Z,{label:(0,r.ag)("entities.detailsCampagne.fields.adherent")}),(0,y.jsx)(h.Z,{label:(0,r.ag)("entities.detailsCampagne.fields.palier")}),(0,y.jsx)(h.Z,{onSort:O,hasRows:A,sorter:B,name:"statutPay",label:(0,r.ag)("entities.detailsCampagne.fields.statutPay")}),(0,y.jsx)(h.Z,{onSort:O,hasRows:A,sorter:B,name:"montant",label:(0,r.ag)("entities.detailsCampagne.fields.montant"),align:"right"}),(0,y.jsx)(h.Z,{label:(0,r.ag)("entities.detailsCampagne.fields.facture")}),(0,y.jsx)(h.Z,{onSort:O,hasRows:A,sorter:B,name:"typePay",label:(0,r.ag)("entities.detailsCampagne.fields.typePay")}),(0,y.jsx)(h.Z,{className:"th-actions"})]})}),(0,y.jsxs)("tbody",{children:[k&&(0,y.jsx)("tr",{children:(0,y.jsx)("td",{colSpan:100,children:(0,y.jsx)(g.Z,{})})}),!k&&!A&&(0,y.jsx)("tr",{children:(0,y.jsx)("td",{colSpan:100,children:(0,y.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.ag)("table.noData")})})}),!k&&R.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{className:"th-checkbox",scope:"row",children:(0,y.jsxs)("div",{className:"adherent-control adherent-checkbox",children:[(0,y.jsx)("input",{type:"checkbox",className:"adherent-control-input",id:"table-header-checkbox-".concat(e.id),checked:S.includes(e.id),onChange:function(){return n=e.id,void N(u.Z.doToggleOneSelected(n));var n}}),(0,y.jsx)("label",{htmlFor:"table-header-checkbox-".concat(e.id),className:"adherent-control-label",children:"\xa0"})]})}),(0,y.jsx)("td",{children:(0,y.jsx)(v.Z,{value:e.adherent})}),(0,y.jsx)("td",{children:(0,y.jsx)(Z,{value:e.palier})}),(0,y.jsx)("td",{children:e.statutPay?(0,r.ag)("entities.detailsCampagne.enumerators.statutPay.".concat(e.statutPay)):null}),(0,y.jsx)("td",{style:{textAlign:"right"},children:e.montant}),(0,y.jsx)("td",{children:(0,y.jsx)(b.Z,{value:e.facture})}),(0,y.jsx)("td",{children:e.typePay?(0,r.ag)("entities.detailsCampagne.enumerators.typePay.".concat(e.typePay)):null}),(0,y.jsxs)("td",{className:"td-actions",children:[(0,y.jsx)(i.rU,{className:"btn btn-link",to:"/details-campagne/".concat(e.id),children:(0,r.ag)("common.view")}),F&&(0,y.jsx)(i.rU,{className:"btn btn-link",to:"/details-campagne/".concat(e.id,"/edit"),children:(0,r.ag)("common.edit")}),U&&(0,y.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return n=e.id,void C(n);var n},children:(0,r.ag)("common.destroy")})]})]},e.id)}))]})]})}),(0,y.jsx)(x.Z,{onChange:function(e){N(u.Z.doChangePagination(e))},disabled:k,pagination:T}),j&&(0,y.jsx)(p.Z,{title:(0,r.ag)("common.areYouSure"),onConfirm:function(){return e=j,I(),void N(c.Z.doDestroy(e));var e},onClose:function(){return I()},okText:(0,r.ag)("common.yes"),cancelText:(0,r.ag)("common.no")})]})}},13586:function(e,n,a){a.d(n,{Z:function(){return s}});a(47313);var t=a(10499),l=a(46417);function s(e){var n=e.values,a=e.renders,s=e.onClick,i=e.onRemove,r=Object.keys(n||{}).map((function(e){return a[e]?{key:e,label:a[e].label,value:a[e].render(n[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return(0,l.jsxs)("div",{onClick:s,className:"filter-preview",children:[!r.length||e.expanded?(0,l.jsx)("div",{className:"filter-preview-left",children:(0,t.ag)("common.filters")}):(0,l.jsxs)("div",{className:"filter-preview-left",children:[(0,t.ag)("common.filters"),":",(0,l.jsx)("span",{className:"filter-preview-values",children:r.map((function(e){return(0,l.jsxs)("span",{className:"badge badge-dark",style:{cursor:"default"},onClick:function(e){e.stopPropagation()},children:["".concat(e.label,": ").concat(e.value),i&&(0,l.jsx)("i",{style:{marginLeft:4,backgroundColor:"rgba(0,0,0,0.5)",padding:2,borderRadius:999,cursor:"pointer"},onClick:i?function(){return i(e.key)}:void 0,className:"fas fa-times"})]},e.label)}))})]}),(0,l.jsx)("div",{className:"filter-preview-right",children:e.expanded?(0,l.jsx)("i",{className:"fas fa-chevron-up"},"fa-chevron-up"):(0,l.jsx)("i",{className:"fas fa-chevron-down"},"fa-chevron-down")})]})}},38247:function(e,n,a){var t=a(47313),l=a(43270),s=a(49384),i=a(46417);function r(e){var n=e.label,a=e.name,r=e.hint,o=e.placeholder,c=e.autoFocus,d=e.autoComplete,u=e.required,m=e.externalErrorMessage,h=(0,l.Gc)(),p=h.register,g=h.errors,f=h.formState,x=f.touched,v=f.isSubmitted,b=h.setValue,j=h.watch,y=s.Z.errorMessage(a,g,x,v,m),Z=j(a);(0,t.useEffect)((function(){p({name:a})}),[p,a]);var C=function(){return Z?Array.isArray(!Z)?null:Z.length?Z[0]:null:null},N=function(){return Z?Array.isArray(!Z)||Z.length<2?null:Z[1]:null};return(0,i.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(u?"required":null),htmlFor:a,children:n}),(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",alignItems:"baseline"},children:[(0,i.jsx)("input",{style:{width:"100%"},type:"text",id:"".concat(a,"Start"),name:"".concat(a,"Start"),onChange:function(n){return t=n.target.value,b(a,[t,N()],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([t,N()]));var t},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:C(),placeholder:o||void 0,autoFocus:c||void 0,autoComplete:d||void 0,className:"form-control ".concat(y?"is-invalid":"")}),(0,i.jsx)("div",{style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),(0,i.jsx)("input",{style:{width:"100%"},type:"text",id:"".concat(a,"End"),name:"".concat(a,"End"),onChange:function(n){return t=n.target.value,b(a,[C(),t],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([t,C()]));var t},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:N(),placeholder:o||void 0,autoFocus:c||void 0,autoComplete:d||void 0,className:"form-control ".concat(y?"is-invalid":"")})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(r)&&(0,i.jsx)("small",{className:"form-text text-muted",children:r})]})}r.defaultProps={required:!1},n.Z=r},44587:function(e,n,a){var t=a(47313),l=a(1168),s=a(46417);n.Z=function(e){var n=(0,t.useRef)();(0,t.useEffect)((function(){window.$(n.current).modal("show"),window.$(n.current).on("hidden.bs.modal",e.onClose)}),[]);return l.createPortal((0,s.jsx)("div",{ref:n,className:"modal",tabIndex:-1,children:(0,s.jsx)("div",{className:"modal-dialog modal-sm",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("h5",{className:"modal-title",children:e.title}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,s.jsx)("span",{children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:e.cancelText}),(0,s.jsx)("button",{type:"button",onClick:function(){return window.$(n.current).modal("hide"),e.onConfirm()},className:"btn btn-primary btn-sm",children:e.okText})]})]})})}),document.getElementById("modal-root"))}},69138:function(e,n,a){var t,l=a(30168),s=a(91876).ZP.div(t||(t=(0,l.Z)(["\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n  margin-bottom: 8px;\n\n  .filter-preview {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .filter-preview-left {\n    display: flex;\n    align-items: center;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .filter-preview-values .badge {\n    margin: 4px;\n    padding: 0.5em 0.5em;\n  }\n\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .filter-buttons {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: right;\n\n    .btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));n.Z=s},24151:function(e,n,a){a(47313);var t=a(10619),l=a(21402),s=a.n(l),i=a(46417);n.Z=function(e){var n=function(){return function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]}().map((function(e){return{id:e.id,name:s()(e.name),downloadUrl:e.downloadUrl}}))};return n().length?(0,i.jsx)(t.Z,{readonly:!0,value:n()}):null}},1296:function(e,n,a){a(47313);var t=a(28303),l=a(45788),s=a(15021),i=a(46417);n.Z=function(e){var n=(0,l.v9)(s.Z.selectPermissionToRead),a=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]},r=function(e){return e?e.fullName?"".concat(e.fullName," <").concat(e.email,">"):e.email:null};return a().length?(0,i.jsx)(i.Fragment,{children:a().map((function(e){return a=e,n?(0,i.jsx)("div",{children:(0,i.jsx)(t.rU,{className:"btn btn-link",to:"/user/".concat(a.id),children:r(a)})},a.id):(0,i.jsx)("div",{children:r(a)},a.id);var a}))}):null}}}]);