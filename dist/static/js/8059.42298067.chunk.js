"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8059],{87339:function(e,t,a){var n=a(76747),s=a(86495),r=a(26319),i=a(71945),o=(0,n.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new r.Z(e,t).match(i.Z.values.campagneRead)})),l=(0,n.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new r.Z(e,t).match(i.Z.values.campagneEdit)})),c=(0,n.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new r.Z(e,t).match(i.Z.values.campagneCreate)})),d=(0,n.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new r.Z(e,t).match(i.Z.values.campagneImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:l,selectPermissionToCreate:c,selectPermissionToDestroy:(0,n.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,t){return new r.Z(e,t).match(i.Z.values.campagneDestroy)})),selectPermissionToImport:d};t.Z=u},77081:function(e,t,a){var n={selectLoading:(0,a(76747).P1)([function(e){return e.campagne.destroy}],(function(e){return Boolean(e.loading)}))};t.Z=n},94056:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(47313),s=a(45788),r=a(63830),i=a(10499),o=a(99610),l=a(76747),c=function(e){return e.campagne.view},d=(0,l.P1)([c],(function(e){return e.record})),u={selectLoading:(0,l.P1)([c],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:c},m=a(42982),p=a(70885),f=a(61567),g=a(25969),x=a(31287),h=a(10419),Z=a(66620),v=a(65487),j=a(58014),b=a(47320),y=a(87339),C=a(28303),P=a(87107),w=a(43270),N=a(95748),T=a(63849),S=a(31616),I=a(46417);var k=function(e){var t=(0,w.cI)(),a=t.setValue,r=t.getValues,o=(0,n.useState)(null),l=(0,p.Z)(o,2),c=l[0],d=l[1],u=(0,n.useState)(null),k=(0,p.Z)(u,2),R=k[0],q=k[1],V=(0,n.useState)(null),E=(0,p.Z)(V,2),L=(E[0],E[1],(0,n.useState)(!1)),U=(0,p.Z)(L,2),B=U[0],D=U[1],$=((0,s.I0)(),function(){D(!1)}),F=(0,s.v9)(y.Z.selectPermissionToCreate),O=e.record;return e.loading||!O?(0,I.jsx)(f.Z,{}):(0,I.jsx)(h.Z,{children:(0,I.jsxs)(Z.Z,{defaultActiveKey:"informations",id:"tab-inf-projet",children:[(0,I.jsx)(v.Z,{eventKey:"informations",title:"Informations",children:(0,I.jsxs)(g.Z,{style:{marginTop:"10px"},children:[(0,I.jsxs)(T.Z,{style:{paddingBottom:"10px"},children:[(0,I.jsx)(S.Z,{sm:8,children:(0,I.jsx)(x.Z,{label:(0,i.ag)("entities.campagne.fields.titre"),value:O.titre})}),(0,I.jsx)(S.Z,{sm:4,children:(0,I.jsx)(x.Z,{label:(0,i.ag)("entities.campagne.fields.statut"),value:O.statut&&(0,i.ag)("entities.campagne.enumerators.statut.".concat(O.statut))})})]}),(0,I.jsxs)(T.Z,{children:[(0,I.jsx)(S.Z,{sm:4,children:(0,I.jsx)(x.Z,{label:(0,i.ag)("entities.campagne.fields.datedebut"),value:O.datedebut})}),(0,I.jsx)(S.Z,{sm:4,children:(0,I.jsx)(x.Z,{label:(0,i.ag)("entities.campagne.fields.datefin"),value:O.datefin})}),(0,I.jsx)(S.Z,{sm:4,children:(0,I.jsx)(x.Z,{label:(0,i.ag)("entities.campagne.fields.annee"),value:O.annee})})]})]})}),(0,I.jsxs)(v.Z,{eventKey:"details",title:"Details",children:[(0,I.jsx)(b.Z,{idcampagne:O.id,titre:O.titre}),(0,I.jsx)(j.Z,{}),F&&(0,I.jsx)(C.rU,{className:"btn btn-link",onClick:function(){var e,t;e=O.id,t=O.titre,e,d(e),q(t=t),D(!0)},children:(0,I.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,I.jsx)(N.Z,{iconClass:"fas fa-plus"}),(0,i.ag)("entities.detailsCampagne.new.title")]})}),B&&(0,I.jsx)(P.default,{onClose:$,onSuccess:function(t){window.location.reload();var n=e.name,s=e.mode;a(n,s&&"multiple"===s?[].concat((0,m.Z)(r()[n]||[]),[t,e.idcampagne,e.titre]):[t,e.idcampagne,e.titre]),$()},recordIdcampagne:c,recordTitrecampagne:R})]})]})})},R=a(23516),q=a(424),V=a(77081),E=a(44587);var L=function(e){var t=(0,n.useState)(!1),a=(0,p.Z)(t,2),r=a[0],o=a[1],l=(0,s.I0)(),c=e.match.params.id,d=(0,s.v9)(R.Z.selectPermissionToRead),u=(0,s.v9)(y.Z.selectPermissionToEdit),m=(0,s.v9)(y.Z.selectPermissionToDestroy),f=(0,s.v9)(V.Z.selectLoading),g=function(){o(!1)};return(0,I.jsxs)(h.Z,{children:[u&&(0,I.jsx)(C.rU,{to:"/campagne/".concat(c,"/edit"),children:(0,I.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,I.jsx)(N.Z,{iconClass:"fas fa-edit"}),(0,i.ag)("common.edit")]})}),m&&(0,I.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:f,onClick:function(){o(!0)},children:[(0,I.jsx)(N.Z,{loading:f,iconClass:"fas fa-trash-alt"}),(0,i.ag)("common.destroy")]}),d&&(0,I.jsx)(C.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(c)),children:(0,I.jsxs)("button",{className:"btn btn-light",type:"button",children:[(0,I.jsx)(N.Z,{iconClass:"fas fa-history"}),(0,i.ag)("auditLog.menu")]})}),r&&(0,I.jsx)(E.Z,{title:"\xcates-vous s\xfbr de supprimer?\n          Les donn\xe9es relatives \xe0 la campagne seront supprim\xe9es aussi,\n          cette action est irr\xe9versible.",onConfirm:function(){return g(),void l(q.Z.doDestroy(c))},onClose:function(){return g()},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no")})]})},U=a(27829),B=a(53852),D=a(75352);var $=function(){var e=(0,s.I0)(),t=(0,r.$B)(),a=(0,s.v9)(u.selectLoading),l=(0,s.v9)(u.selectRecord);return(0,n.useEffect)((function(){e(o.Z.doFind(t.params.id))}),[e,t.params.id]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(B.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.campagne.menu"),"/campagne"],[(0,i.ag)("entities.campagne.view.title")]]}),(0,I.jsxs)(U.Z,{children:[(0,I.jsx)(D.Z,{children:(0,i.ag)("entities.campagne.view.title")}),(0,I.jsx)(L,{match:t}),(0,I.jsx)(k,{loading:a,record:l})]})]})}},70522:function(e,t,a){var n=a(1413),s=a(70885),r=a(47313),i=a(43270),o=a(10499),l=a(89994),c=a(95748),d=a(68160),u=a(42277),m=a(67357),p=a(47575),f=a(48317),g=a(5544),x=a(78974),h=a(96111),Z=a(87347),v=a(78428),j=a(31287),b=a(63849),y=a(31616),C=a(46417),P=u.Ry().shape({adherent:l.Z.relationToOne((0,o.ag)("entities.detailsCampagne.fields.adherent"),{required:!0}),palier:l.Z.relationToOne((0,o.ag)("entities.detailsCampagne.fields.palier"),{required:!0}),statutPay:l.Z.enumerator((0,o.ag)("entities.detailsCampagne.fields.statutPay"),{options:x.Z.statutPay,required:!0}),montant:l.Z.decimal((0,o.ag)("entities.detailsCampagne.fields.montant"),{required:!0}),facture:l.Z.files((0,o.ag)("entities.detailsCampagne.fields.facture"),{}),typePay:l.Z.enumerator((0,o.ag)("entities.detailsCampagne.fields.typePay"),{options:x.Z.typePay,required:!0})});t.Z=function(e){var t=(0,r.useState)((function(){var t=e.record||{};return{adherent:t.adherent,palier:t.palier,statutPay:t.statutPay,montant:t.montant,facture:t.facture||[],typePay:t.typePay,campagne:e.recordIdcampagne,titre:e.recordTitrecampagne}})),a=(0,s.Z)(t,1)[0],l=(0,i.cI)({resolver:(0,m.X)(P),mode:"all",defaultValues:a}),u=function(t){var a,n,s,r;e.isEditing?(t.campagne=null===(a=e.record)||void 0===a?void 0:a.campagne,t.titre=null===(n=e.record)||void 0===n?void 0:n.titre,e.onSubmit(null===(s=e.record)||void 0===s?void 0:s.id,t)):e.onSubmit(null===(r=e.record)||void 0===r?void 0:r.id,t)};return(0,C.jsx)(d.Z,{children:(0,C.jsx)(i.RV,(0,n.Z)((0,n.Z)({},l),{},{children:(0,C.jsxs)("form",{onSubmit:l.handleSubmit(u),children:[(0,C.jsxs)(b.Z,{style:{paddingBottom:"10px"},children:[e.record?(0,C.jsx)(y.Z,{sm:4,children:(0,C.jsx)(j.Z,{label:(0,o.ag)("entities.campagne.name")+" "+(0,o.ag)("entities.campagne.fields.titre"),value:e.record.titre})}):(0,C.jsx)(y.Z,{sm:4}),(0,C.jsx)(y.Z,{sm:4,children:(0,C.jsx)(f.Z,{name:"adherent",label:(0,o.ag)("entities.detailsCampagne.fields.adherent"),placeholder:(0,o.ag)("entities.detailsCampagne.placeholders.adherent"),required:!0,showCreate:!1})}),(0,C.jsx)(y.Z,{sm:4,children:(0,C.jsx)(v.Z,{name:"palier",label:(0,o.ag)("entities.detailsCampagne.fields.palier"),required:!0,showCreate:!e.modal})})]}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(y.Z,{sm:4,children:(0,C.jsx)(p.Z,{name:"montant",label:(0,o.ag)("entities.detailsCampagne.fields.montant"),required:!0})}),(0,C.jsx)(y.Z,{sm:4,children:(0,C.jsx)(g.Z,{name:"typePay",label:(0,o.ag)("entities.detailsCampagne.fields.typePay"),options:x.Z.typePay.map((function(e){return{value:e,label:(0,o.ag)("entities.detailsCampagne.enumerators.typePay.".concat(e))}})),required:!0})}),(0,C.jsx)(y.Z,{sm:4,children:(0,C.jsx)(g.Z,{name:"statutPay",label:(0,o.ag)("entities.detailsCampagne.fields.statutPay"),options:x.Z.statutPay.map((function(e){return{value:e,label:(0,o.ag)("entities.detailsCampagne.enumerators.statutPay.".concat(e))}})),required:!0})})]}),(0,C.jsx)(b.Z,{style:{paddingBottom:"10px"},children:(0,C.jsx)(y.Z,{sm:12,children:(0,C.jsx)(Z.Z,{name:"facture",label:(0,o.ag)("entities.detailsCampagne.fields.facture"),required:!1,storage:h.Z.values.detailsCampagneFacture,max:void 0,formats:void 0})})}),(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{style:{display:"none"},children:(0,C.jsx)(p.Z,{name:"campagne"})}),(0,C.jsx)("div",{style:{display:"none"},children:(0,C.jsx)(p.Z,{name:"titre"})})]}),(0,C.jsxs)("div",{className:"form-buttons",children:[(0,C.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:l.handleSubmit(u),children:[(0,C.jsx)(c.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,o.ag)("common.save")]}),(0,C.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(a).forEach((function(e){l.setValue(e,a[e])}))},children:[(0,C.jsx)("i",{className:"fas fa-undo"}),"\xa0",(0,o.ag)("common.reset")]}),e.onCancel?(0,C.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,C.jsx)("i",{className:"fas fa-times"}),"\xa0",(0,o.ag)("common.cancel")]}):null]})]})}))})}},87107:function(e,t,a){a.r(t);var n=a(15861),s=a(70885),r=a(87757),i=a.n(r),o=a(47313),l=a(1168),c=a(10499),d=a(70522),u=a(74309),m=a(46417);t.default=function(e){var t=(0,o.useRef)(),a=(0,o.useState)(!1),r=(0,s.Z)(a,2),p=r[0],f=r[1];(0,o.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);var g=function(){var a=(0,n.Z)(i().mark((function a(n,s){var r,o,l;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,f(!0),a.next=4,u.Z.create(s);case 4:return r=a.sent,o=r.id,a.next=8,u.Z.find(o);case 8:l=a.sent,e.onSuccess(l),window.$(t.current).modal("hide"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),window.$(t.current).modal("hide");case 16:return a.prev=16,f(!1),a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[0,13,16,19]])})));return function(e,t){return a.apply(this,arguments)}}();return l.createPortal((0,m.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:(0,m.jsx)("div",{className:"modal-dialog modal-lg",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",children:(0,c.ag)("entities.detailsCampagne.new.title")}),(0,m.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,m.jsx)("span",{children:"\xd7"})})]}),(0,m.jsx)("div",{className:"modal-body",children:(0,m.jsx)(d.Z,{saveLoading:p,onSubmit:g,onCancel:function(){window.$(t.current).modal("hide")},modal:!0,recordIdcampagne:e.recordIdcampagne,recordTitrecampagne:e.recordTitrecampagne})})]})})}),document.getElementById("modal-root"))}},87347:function(e,t,a){var n=a(47313),s=a(10619),r=a(43270),i=a(49384),o=a(46417);function l(e){var t=e.label,a=e.name,l=e.hint,c=e.storage,d=e.formats,u=e.max,m=e.required,p=e.externalErrorMessage,f=(0,r.Gc)(),g=f.register,x=f.errors,h=f.formState,Z=h.touched,v=h.isSubmitted,j=f.setValue,b=f.watch;(0,n.useEffect)((function(){g({name:a})}),[g,a]);var y=i.Z.errorMessage(a,x,Z,v,p);return(0,o.jsxs)("div",{className:"form-group",children:[Boolean(t)&&(0,o.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:a,children:t}),(0,o.jsx)("br",{}),(0,o.jsx)(s.Z,{storage:c,formats:d,value:b(a),onChange:function(t){j(a,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},max:u}),(0,o.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(l)&&(0,o.jsx)("small",{className:"form-text text-muted",children:l})]})}l.defaultProps={max:void 0,required:!1},t.Z=l},31287:function(e,t,a){a(47313);var n=a(46417);t.Z=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{className:"col-form-label",children:e.label}),(0,n.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}},71351:function(e,t,a){a.d(t,{Z:function(){return c}});var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),s=new Uint8Array(16);function r(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)}for(var i=[],o=0;o<256;++o)i[o]=(o+256).toString(16).substr(1);var l=function(e,t){var a=t||0,n=i;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")};var c=function(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var i=0;i<16;++i)t[n+i]=s[i];return t||l(s)}}}]);