"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[7714],{43509:function(e,t,n){var r={selectLoading:(0,n(76747).P1)([function(e){return e.formule.destroy}],(function(e){return Boolean(e.loading)}))};t.Z=r},31978:function(e,t,n){var r=n(76747),s=n(86495),o=n(26319),i=n(71945),a=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.formuleRead)})),l=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.formuleEdit)})),c=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.formuleCreate)})),u=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.formuleImport)})),m={selectPermissionToRead:a,selectPermissionToEdit:l,selectPermissionToCreate:c,selectPermissionToDestroy:(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.formuleDestroy)})),selectPermissionToImport:u};t.Z=m},15021:function(e,t,n){var r=n(76747),s=n(86495),o=n(26319),i=n(71945),a=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.userRead)})),l=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.userEdit)})),c=(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.userDestroy)})),u={selectPermissionToRead:a,selectPermissionToEdit:l,selectPermissionToCreate:(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.userCreate)})),selectPermissionToImport:(0,r.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new o.Z(e,t).match(i.Z.values.userImport)})),selectPermissionToDestroy:c};t.Z=u},93016:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(47313),s=n(45788),o=n(63830),i=n(10499),a=n(32090),l=n(76747),c=function(e){return e.formule.view},u=(0,l.P1)([c],(function(e){return e.record})),m={selectLoading:(0,l.P1)([c],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:c},d=n(61567),Z=n(25969),f=n(31287),h=n(66620),v=n(65487),x=n(22102),j=n(63849),p=n(31616),C=n(27829),g=n(79818),b=n(2181),P=n(46417);var T=function(e){var t=e.record;return e.loading||!t?(0,P.jsx)(d.Z,{}):(0,P.jsx)(Z.Z,{children:(0,P.jsxs)(h.Z,{defaultActiveKey:"information",id:"0",className:"mb-3",children:[(0,P.jsx)(v.Z,{eventKey:"information",title:"Information",children:(0,P.jsx)(x.Z,{fluid:!0,children:(0,P.jsxs)(j.Z,{children:[(0,P.jsx)(p.Z,{children:(0,P.jsx)(f.Z,{label:(0,i.ag)("entities.formule.fields.name"),value:t.name})}),(0,P.jsx)(p.Z,{xs:6,children:(0,P.jsx)(f.Z,{label:(0,i.ag)("entities.formule.fields.description"),value:t.description})}),(0,P.jsx)(p.Z,{children:(0,P.jsx)(f.Z,{label:(0,i.ag)("entities.formule.fields.amount"),value:t.amount})})]})})}),(0,P.jsx)(v.Z,{eventKey:"membership",title:(0,i.ag)("entities.membership.menu"),children:(0,P.jsxs)(C.Z,{children:[(0,P.jsx)(g.Z,{}),(0,P.jsx)(b.Z,{data:t.membership})]})})]})})},y=n(70885),w=n(28303),U=n(23516),I=n(31978),R=n(106),k=n(43509),L=n(44587),N=n(10419),D=n(95748),E=n(883);var B=function(e){var t=(0,r.useState)(!1),n=(0,y.Z)(t,2),o=n[0],a=n[1],l=(0,s.I0)(),c=e.match.params.id,u=(0,s.v9)(U.Z.selectPermissionToRead),m=(0,s.v9)(I.Z.selectPermissionToEdit),d=(0,s.v9)(I.Z.selectPermissionToDestroy),Z=(0,s.v9)(k.Z.selectLoading),f=function(){a(!1)};return(0,P.jsxs)(N.Z,{children:[m&&(0,P.jsx)(w.rU,{to:"/formule/".concat(c,"/edit"),children:(0,P.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,P.jsx)(D.Z,{iconClass:"fas fa-edit"}),(0,i.ag)("common.edit")]})}),d&&(0,P.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:Z,onClick:function(){a(!0)},children:[(0,P.jsx)(D.Z,{loading:Z,iconClass:"fas fa-trash-alt"}),(0,i.ag)("common.destroy")]}),u&&(0,P.jsx)(w.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(c)),children:(0,P.jsxs)("span",{"data-tip":(0,i.ag)("auditLog.menu"),"data-for":"charge-list-toolbar-auditLog-tooltip",children:[(0,P.jsx)("button",{className:"btnCircle btn-light",type:"button",children:(0,P.jsx)(D.Z,{iconClass:"fas fa-history"})}),(0,P.jsx)(E.Z,{id:"charge-list-toolbar-auditLog-tooltip"})]})}),o&&(0,P.jsx)(L.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){return f(),void l(R.Z.doDestroy(c))},onClose:function(){return f()},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no")})]})},K=n(53852),F=n(75352);var S=function(){var e=(0,s.I0)(),t=(0,o.$B)(),n=(0,s.v9)(m.selectLoading),l=(0,s.v9)(m.selectRecord);return(0,r.useEffect)((function(){e(a.Z.doFind(t.params.id))}),[e,t.params.id]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(K.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.formule.menu"),"/formule"],[(0,i.ag)("entities.formule.view.title")]]}),(0,P.jsxs)(C.Z,{children:[(0,P.jsx)(F.Z,{children:(0,i.ag)("entities.formule.view.title")}),(0,P.jsx)(B,{match:t}),(0,P.jsx)(T,{loading:n,record:l})]})]})}},25969:function(e,t,n){var r,s=n(30168),o=n(91876).ZP.div(r||(r=(0,s.Z)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"])));t.Z=o},31287:function(e,t,n){n(47313);var r=n(46417);t.Z=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"col-form-label",children:e.label}),(0,r.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}}}]);