"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[273],{4513:function(n,e,t){var i=t(76747),r=t(86495),a=t(26319),s=t(71945),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.electionRead)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.electionEdit)})),l=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.electionCreate)})),d=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.electionImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.electionDestroy)})),selectPermissionToImport:d};e.Z=u},83181:function(n,e,t){var i={selectLoading:(0,t(76747).P1)([function(n){return n.objectif.destroy}],(function(n){return Boolean(n.loading)}))};e.Z=i},55793:function(n,e,t){var i=t(76747),r=t(86495),a=t(26319),s=t(71945),o=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.objectifRead)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.objectifEdit)})),l=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.objectifCreate)})),d=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.objectifImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,e){return new a.Z(n,e).match(s.Z.values.objectifDestroy)})),selectPermissionToImport:d};e.Z=u},6971:function(n,e,t){t(47313);var i=t(45788),r=t(28303),a=t(4513),s=t(46417);e.Z=function(n){var e=(0,i.v9)(a.Z.selectPermissionToRead),t=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return t().length?(0,s.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,s.jsx)("label",{className:"col-form-label",children:n.label}),t().map((function(n){return t=n,e?(0,s.jsx)("div",{children:(0,s.jsx)(r.rU,{className:"btn btn-link",to:"/election/".concat(t.id),children:t.name})},t.id):(0,s.jsx)("div",{children:t.name},t.id);var t}))]}):null}},27829:function(n,e,t){var i,r=t(30168),a=t(91876).ZP.div(i||(i=(0,r.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=a},60273:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var i=t(47313),r=t(45788),a=t(63830),s=t(10499),o=t(92248),c=t(76747),l=function(n){return n.objectif.view},d=(0,c.P1)([l],(function(n){return n.record})),u={selectLoading:(0,c.P1)([l],(function(n){return Boolean(n.loading)})),selectRecord:d,selectRaw:l},m=t(61567),f=t(25969),b=t(31287),g=t(6971),p=t(46417);var Z=function(n){var e=n.record;return n.loading||!e?(0,p.jsx)(m.Z,{}):(0,p.jsxs)(f.Z,{children:[(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.number"),value:e.number}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.progression"),value:e.progression}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.title"),value:e.title}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.description"),value:e.description}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.status"),value:e.status&&(0,s.ag)("entities.objectif.enumerators.status.".concat(e.status))}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.year"),value:e.year}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.startDate"),value:e.startDate}),(0,p.jsx)(b.Z,{label:(0,s.ag)("entities.objectif.fields.endDate"),value:e.endDate}),(0,p.jsx)(g.Z,{label:(0,s.ag)("entities.objectif.fields.election"),value:e.election})]})},x=t(70885),v=t(28303),j=t(23516),h=t(55793),y=t(56191),C=t(83181),P=t(44587),w=t(10419),T=t(95748),N=t(883);var k=function(n){var e=(0,i.useState)(!1),t=(0,x.Z)(e,2),a=t[0],o=t[1],c=(0,r.I0)(),l=n.match.params.id,d=(0,r.v9)(j.Z.selectPermissionToRead),u=(0,r.v9)(h.Z.selectPermissionToEdit),m=(0,r.v9)(h.Z.selectPermissionToDestroy),f=(0,r.v9)(C.Z.selectLoading),b=function(){o(!1)};return(0,p.jsxs)(w.Z,{children:[u&&(0,p.jsx)(v.rU,{to:"/objectif/".concat(l,"/edit"),children:(0,p.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,p.jsx)(T.Z,{iconClass:"fas fa-edit"}),(0,s.ag)("common.edit")]})}),m&&(0,p.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:f,onClick:function(){o(!0)},children:[(0,p.jsx)(T.Z,{loading:f,iconClass:"fas fa-trash-alt"}),(0,s.ag)("common.destroy")]}),d&&(0,p.jsx)(v.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:(0,p.jsxs)("span",{"data-tip":(0,s.ag)("auditLog.menu"),"data-for":"charge-list-toolbar-auditLog-tooltip",children:[(0,p.jsx)("button",{className:"btnCircle btn-light",type:"button",children:(0,p.jsx)(T.Z,{iconClass:"fas fa-history"})}),(0,p.jsx)(N.Z,{id:"charge-list-toolbar-auditLog-tooltip"})]})}),a&&(0,p.jsx)(P.Z,{title:(0,s.ag)("common.areYouSure"),onConfirm:function(){return b(),void c(y.Z.doDestroy(l))},onClose:function(){return b()},okText:(0,s.ag)("common.yes"),cancelText:(0,s.ag)("common.no")})]})},U=t(27829),I=t(53852),R=t(75352);var D=function(){var n=(0,r.I0)(),e=(0,a.$B)(),t=(0,r.v9)(u.selectLoading),c=(0,r.v9)(u.selectRecord);return(0,i.useEffect)((function(){n(o.Z.doFind(e.params.id))}),[n,e.params.id]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(I.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.objectif.menu")],[(0,s.ag)("entities.objectif.view.title")]]}),(0,p.jsxs)(U.Z,{children:[(0,p.jsx)(R.Z,{children:(0,s.ag)("entities.objectif.view.title")}),(0,p.jsx)(k,{match:e}),(0,p.jsx)(Z,{loading:t,record:c})]})]})}},53852:function(n,e,t){var i,r=t(30168),a=(t(47313),t(28303)),s=t(91876),o=t(46417),c=s.ZP.nav(i||(i=(0,r.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,o.jsx)(c,{children:(0,o.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,i){return(0,o.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:e(t)?(0,o.jsx)(a.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,e,t){t(47313);var i=t(46417);e.Z=function(n){return n.loading?(0,i.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,i.jsx)("i",{className:n.iconClass}):null}},61567:function(n,e,t){t(47313);var i=t(46417);e.Z=function(){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)("div",{className:"spinner-border text-primary"})})}},44587:function(n,e,t){var i=t(47313),r=t(1168),a=t(46417);e.Z=function(n){var e=(0,i.useRef)();(0,i.useEffect)((function(){window.$(e.current).modal("show"),window.$(e.current).on("hidden.bs.modal",n.onClose)}),[]);return r.createPortal((0,a.jsx)("div",{ref:e,className:"modal",tabIndex:-1,children:(0,a.jsx)("div",{className:"modal-dialog modal-sm",children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",children:n.title}),(0,a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,a.jsx)("span",{children:"\xd7"})})]}),(0,a.jsxs)("div",{className:"modal-footer",children:[(0,a.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:n.cancelText}),(0,a.jsx)("button",{type:"button",onClick:function(){return window.$(e.current).modal("hide"),n.onConfirm()},className:"btn btn-primary btn-sm",children:n.okText})]})]})})}),document.getElementById("modal-root"))}},75352:function(n,e,t){var i,r=t(30168),a=t(91876).ZP.h1(i||(i=(0,r.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=a},10419:function(n,e,t){var i,r=t(30168),a=t(91876).ZP.div(i||(i=(0,r.Z)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));e.Z=a},25969:function(n,e,t){var i,r=t(30168),a=t(91876).ZP.div(i||(i=(0,r.Z)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"])));e.Z=a},31287:function(n,e,t){t(47313);var i=t(46417);e.Z=function(n){if(!n.value&&0!==n.value&&!1!==n.value)return null;var e="".concat(n.prefix?"".concat(n.prefix," "):"").concat(n.value);return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"col-form-label",children:n.label}),(0,i.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:e})]})}}}]);