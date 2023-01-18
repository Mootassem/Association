"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8055],{21212:function(e,t,n){var r=n(76747),a=n(86495),s=n(26319),o=n(71945),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.orderRead)})),i=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.orderEdit)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.orderCreate)})),d=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.orderImport)})),u={selectPermissionToRead:l,selectPermissionToEdit:i,selectPermissionToCreate:c,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.orderDestroy)})),selectPermissionToImport:d};t.Z=u},4694:function(e,t,n){var r=n(76747),a=n(86495),s=n(26319),o=n(71945),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.productRead)})),i=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.productEdit)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.productCreate)})),d=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.productImport)})),u={selectPermissionToRead:l,selectPermissionToEdit:i,selectPermissionToCreate:c,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.productDestroy)})),selectPermissionToImport:d};t.Z=u},17699:function(e,t,n){var r={selectLoading:(0,n(76747).P1)([function(e){return e.trackOrder.destroy}],(function(e){return Boolean(e.loading)}))};t.Z=r},25448:function(e,t,n){var r=n(76747),a=n(86495),s=n(26319),o=n(71945),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.trackOrderRead)})),i=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.trackOrderEdit)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.trackOrderCreate)})),d=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.trackOrderImport)})),u={selectPermissionToRead:l,selectPermissionToEdit:i,selectPermissionToCreate:c,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(e,t){return new s.Z(e,t).match(o.Z.values.trackOrderDestroy)})),selectPermissionToImport:d};t.Z=u},66077:function(e,t,n){n(47313);var r=n(28303),a=n(45788),s=n(21212),o=n(46417);t.Z=function(e){var t=(0,a.v9)(s.Z.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?(0,o.jsx)(o.Fragment,{children:n().map((function(e){return n=e,t?(0,o.jsx)("div",{children:(0,o.jsx)(r.rU,{className:"btn btn-link",to:"/order/".concat(n.id),children:n.id})},n.id):(0,o.jsx)("div",{children:n.id},n.id);var n}))}):null}},60461:function(e,t,n){n(47313);var r=n(28303),a=n(45788),s=n(4694),o=n(46417);t.Z=function(e){var t=(0,a.v9)(s.Z.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?(0,o.jsx)(o.Fragment,{children:n().map((function(e){return n=e,t?(0,o.jsx)("div",{children:(0,o.jsx)(r.rU,{className:"btn btn-link",to:"/product/".concat(n.id),children:n.name})},n.id):(0,o.jsx)("div",{children:n.name},n.id);var n}))}):null}},13586:function(e,t,n){n.d(t,{Z:function(){return s}});n(47313);var r=n(10499),a=n(46417);function s(e){var t=e.values,n=e.renders,s=e.onClick,o=e.onRemove,l=Object.keys(t||{}).map((function(e){return n[e]?{key:e,label:n[e].label,value:n[e].render(t[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return(0,a.jsxs)("div",{onClick:s,className:"filter-preview",children:[!l.length||e.expanded?(0,a.jsx)("div",{className:"filter-preview-left",children:(0,r.ag)("common.filters")}):(0,a.jsxs)("div",{className:"filter-preview-left",children:[(0,r.ag)("common.filters"),":",(0,a.jsx)("span",{className:"filter-preview-values",children:l.map((function(e){return(0,a.jsxs)("span",{className:"badge badge-dark",style:{cursor:"default"},onClick:function(e){e.stopPropagation()},children:["".concat(e.label,": ").concat(e.value),o&&(0,a.jsx)("i",{style:{marginLeft:4,backgroundColor:"rgba(0,0,0,0.5)",padding:2,borderRadius:999,cursor:"pointer"},onClick:o?function(){return o(e.key)}:void 0,className:"fas fa-times"})]},e.label)}))})]}),(0,a.jsx)("div",{className:"filter-preview-right",children:e.expanded?(0,a.jsx)("i",{className:"fas fa-chevron-up"},"fa-chevron-up"):(0,a.jsx)("i",{className:"fas fa-chevron-down"},"fa-chevron-down")})]})}},49384:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(15671),a=n(43144),s=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"errorMessage",value:function(e,t,n,r){var a,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(s)return s;if(!r&&!n[e])return null;var o=t[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},47575:function(e,t,n){n(47313);var r=n(43270),a=n(49384),s=n(46417);function o(e){var t=e.label,n=e.description,o=e.name,l=e.hint,i=e.type,c=e.placeholder,d=e.autoFocus,u=e.autoComplete,m=e.required,h=e.externalErrorMessage,f=e.disabled,x=e.endAdornment,p=(0,r.Gc)(),v=p.register,Z=p.errors,b=p.formState,g=b.touched,j=b.isSubmitted,C=a.Z.errorMessage(o,Z,g,j,h);return(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsxs)("div",{className:x?"input-group":"",children:[Boolean(t)&&(0,s.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:o,children:t}),n,(0,s.jsx)("input",{id:o,name:o,type:i,ref:v,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:c||void 0,autoFocus:d||void 0,autoComplete:u||void 0,disabled:f,className:"form-control ".concat(C?"is-invalid":"")}),x&&(0,s.jsx)("div",{className:"input-group-append",children:(0,s.jsx)("span",{className:"input-group-text",children:x})})]}),(0,s.jsx)("div",{className:"invalid-feedback",children:C}),Boolean(l)&&(0,s.jsx)("small",{className:"form-text text-muted",children:l})]})}o.defaultProps={type:"text",required:!1},t.Z=o},44587:function(e,t,n){var r=n(47313),a=n(1168),s=n(46417);t.Z=function(e){var t=(0,r.useRef)();(0,r.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",e.onClose)}),[]);return a.createPortal((0,s.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:(0,s.jsx)("div",{className:"modal-dialog modal-sm",children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsxs)("div",{className:"modal-header",children:[(0,s.jsx)("h5",{className:"modal-title",children:e.title}),(0,s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,s.jsx)("span",{children:"\xd7"})})]}),(0,s.jsxs)("div",{className:"modal-footer",children:[(0,s.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:e.cancelText}),(0,s.jsx)("button",{type:"button",onClick:function(){return window.$(t.current).modal("hide"),e.onConfirm()},className:"btn btn-primary btn-sm",children:e.okText})]})]})})}),document.getElementById("modal-root"))}},69138:function(e,t,n){var r,a=n(30168),s=n(91876).ZP.div(r||(r=(0,a.Z)(["\n  border: 1px solid #e9e9e9;\n  border-radius: 5px;\n  margin-bottom: 8px;\n\n  .filter-preview {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n\n  .filter-preview-left {\n    display: flex;\n    align-items: center;\n  }\n\n  .filter-preview-values {\n    margin-left: 8px;\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .filter-preview-values .badge {\n    margin: 4px;\n    padding: 0.5em 0.5em;\n  }\n\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .filter-buttons {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: right;\n\n    .btn {\n      margin-left: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));t.Z=s},78055:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(47313),a=n(10499),s=n(1413),o=n(70885),l=n(2167),i=n(28946),c=n(45788),d=n(43270),u=n(47590),m=n(95748),h=n(69138),f=n(42277),x=n(67357),p=n(13586),v=n(40846),Z=n(47575),b=n(46417),g=f.Ry().shape({title:u.Z.string((0,a.ag)("entities.trackOrder.fields.title"))}),j={title:null},C={title:{label:(0,a.ag)("entities.trackOrder.fields.title"),render:v.Z.generic()}};var k=function(e){var t=(0,c.v9)(i.Z.selectRawFilter),n=(0,c.I0)(),u=(0,r.useState)(!1),f=(0,o.Z)(u,2),v=f[0],k=f[1],y=(0,r.useState)((function(){return(0,s.Z)((0,s.Z)({},j),t)})),N=(0,o.Z)(y,1)[0],w=(0,d.cI)({resolver:(0,x.X)(g),defaultValues:N,mode:"all"});(0,r.useEffect)((function(){n(l.Z.doFetch(g.cast(N),t))}),[n]);var T=function(e){var t=w.getValues();n(l.Z.doFetch(e,t)),k(!1)};return(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.Z,{onClick:function(){k(!v)},renders:C,values:t,expanded:v,onRemove:function(e){return w.setValue(e,j[e]),w.handleSubmit(T)()}}),(0,b.jsx)("div",{className:"container",children:(0,b.jsx)("div",{className:"collapse ".concat(v?"show":""),children:(0,b.jsx)(d.RV,(0,s.Z)((0,s.Z)({},w),{},{children:(0,b.jsxs)("form",{onSubmit:w.handleSubmit(T),children:[(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-lg-6 col-12",children:(0,b.jsx)(Z.Z,{name:"title",label:(0,a.ag)("entities.trackOrder.fields.title")})})}),(0,b.jsx)("div",{className:"row",children:(0,b.jsxs)("div",{className:"col-12 filter-buttons",children:[(0,b.jsxs)("button",{className:"btn btn-primary",type:"submit",disabled:e.loading,children:[(0,b.jsx)(m.Z,{loading:e.loading,iconClass:"fas fa-search"}),(0,a.ag)("common.search")]}),(0,b.jsxs)("button",{className:"btn btn-light",type:"button",onClick:function(){Object.keys(j).forEach((function(e){w.setValue(e,j[e])})),n(l.Z.doReset()),k(!1)},disabled:e.loading,children:[(0,b.jsx)(m.Z,{loading:e.loading,iconClass:"fas fa-undo"}),(0,a.ag)("common.reset")]})]})})]})}))})})]})},y=n(28303),N=n(25448),w=n(33372),T=n(17699),P=n(98848),R=n(44587),S=n(61567),U=n(27216),O=n(97249),E=n(60461),I=n(66077);var D=function(e){var t=(0,r.useState)(null),n=(0,o.Z)(t,2),s=n[0],d=n[1],u=(0,c.I0)(),m=(0,c.v9)(i.Z.selectLoading),h=(0,c.v9)(T.Z.selectLoading),f=m||h,x=(0,c.v9)(i.Z.selectRows),p=(0,c.v9)(i.Z.selectPagination),v=(0,c.v9)(i.Z.selectSelectedKeys),Z=(0,c.v9)(i.Z.selectHasRows),g=(0,c.v9)(i.Z.selectSorter),j=(0,c.v9)(i.Z.selectIsAllSelected),C=(0,c.v9)(N.Z.selectPermissionToEdit),k=(0,c.v9)(N.Z.selectPermissionToDestroy),D=function(){d(null)};return(0,b.jsxs)(U.Z,{children:[(0,b.jsx)("div",{className:"table-responsive",children:(0,b.jsxs)("table",{className:"table table-striped     mt-2",children:[(0,b.jsx)("thead",{className:"thead",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)(P.Z,{className:"th-checkbox",children:Z&&(0,b.jsxs)("div",{className:"adherent-control adherent-checkbox",children:[(0,b.jsx)("input",{type:"checkbox",className:"adherent-control-input",id:"table-header-checkbox",checked:Boolean(j),onChange:function(){u(l.Z.doToggleAllSelected())}}),(0,b.jsx)("label",{htmlFor:"table-header-checkbox",className:"adherent-control-label",children:"\xa0"})]})}),(0,b.jsx)(P.Z,{onSort:function(e){var t=g.field===e&&"ascend"===g.order?"descend":"ascend";u(l.Z.doChangeSort({field:e,order:t}))},hasRows:Z,sorter:g,name:"title",label:(0,a.ag)("entities.trackOrder.fields.title")}),(0,b.jsx)(P.Z,{label:(0,a.ag)("entities.trackOrder.fields.item")}),(0,b.jsx)(P.Z,{label:(0,a.ag)("entities.trackOrder.fields.order")}),(0,b.jsx)(P.Z,{className:"th-actions"})]})}),(0,b.jsxs)("tbody",{children:[f&&(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:100,children:(0,b.jsx)(S.Z,{})})}),!f&&!Z&&(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:100,children:(0,b.jsx)("div",{className:"d-flex justify-content-center",children:(0,a.ag)("table.noData")})})}),!f&&x.map((function(e){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"th-checkbox",scope:"row",children:(0,b.jsxs)("div",{className:"adherent-control adherent-checkbox",children:[(0,b.jsx)("input",{type:"checkbox",className:"adherent-control-input",id:"table-header-checkbox-".concat(e.id),checked:v.includes(e.id),onChange:function(){return t=e.id,void u(l.Z.doToggleOneSelected(t));var t}}),(0,b.jsx)("label",{htmlFor:"table-header-checkbox-".concat(e.id),className:"adherent-control-label",children:"\xa0"})]})}),(0,b.jsx)("td",{children:e.title}),(0,b.jsx)("td",{children:(0,b.jsx)(E.Z,{value:e.item})}),(0,b.jsx)("td",{children:(0,b.jsx)(I.Z,{value:e.order})}),(0,b.jsxs)("td",{className:"td-actions",children:[(0,b.jsx)(y.rU,{className:"btn btn-link",to:"/track-order/".concat(e.id),children:(0,a.ag)("common.view")}),C&&(0,b.jsx)(y.rU,{className:"btn btn-link",to:"/track-order/".concat(e.id,"/edit"),children:(0,a.ag)("common.edit")}),k&&(0,b.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return t=e.id,void d(t);var t},children:(0,a.ag)("common.destroy")})]})]},e.id)}))]})]})}),(0,b.jsx)(O.Z,{onChange:function(e){u(l.Z.doChangePagination(e))},disabled:f,pagination:p}),s&&(0,b.jsx)(R.Z,{title:(0,a.ag)("common.areYouSure"),onConfirm:function(){return e=s,D(),void u(w.Z.doDestroy(e));var e},onClose:function(){return D()},okText:(0,a.ag)("common.yes"),cancelText:(0,a.ag)("common.no")})]})},F=n(23516),L=n(10419),A=n(883);var B=function(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),s=n[0],d=n[1],u=(0,c.I0)(),h=(0,c.v9)(i.Z.selectSelectedKeys),f=(0,c.v9)(i.Z.selectLoading),x=(0,c.v9)(T.Z.selectLoading),p=(0,c.v9)(i.Z.selectExportLoading),v=(0,c.v9)(i.Z.selectHasRows),Z=(0,c.v9)(F.Z.selectPermissionToRead),g=(0,c.v9)(N.Z.selectPermissionToDestroy),j=(0,c.v9)(N.Z.selectPermissionToCreate),C=(0,c.v9)(N.Z.selectPermissionToImport),k=function(){d(!0)},P=function(){d(!1)},S=function(){u(l.Z.doExport())};return(0,b.jsxs)(L.Z,{children:[j&&(0,b.jsx)(y.rU,{to:"/track-order/new",children:(0,b.jsxs)("span",{"data-tip":(0,a.ag)("common.new"),"data-for":"charge-list-toolbar-new-tooltip",children:[(0,b.jsx)("button",{className:"btn btn-primary",type:"button",children:(0,b.jsx)(m.Z,{iconClass:"fas fa-plus"})}),(0,b.jsx)(A.Z,{id:"charge-list-toolbar-new-tooltip"})]})}),C&&(0,b.jsx)(y.rU,{to:"/track-order/importer",children:(0,b.jsxs)("span",{"data-tip":(0,a.ag)("common.import"),"data-for":"charge-list-toolbar-import-tooltip",children:[(0,b.jsx)("button",{className:"btn btn-primary",type:"button",children:(0,b.jsx)(m.Z,{iconClass:"fas fa-upload"})}),(0,b.jsx)(A.Z,{id:"charge-list-toolbar-import-tooltip"})]})}),function(){if(!g)return null;var e=!h.length||f,t=(0,b.jsx)("button",{disabled:e,className:"btn btn-primary",type:"button",onClick:k,children:(0,b.jsx)(m.Z,{loading:x,iconClass:"far fa-trash-alt"})});return e?(0,b.jsxs)("span",{"data-tip":(0,a.ag)("common.mustSelectARow"),"data-tip-disable":!e,"data-for":"track-order-list-toolbar-destroy-tooltip",children:[t,(0,b.jsx)(A.Z,{id:"track-order-list-toolbar-destroy-tooltip"})]}):t}(),Z&&(0,b.jsx)(y.rU,{to:"/audit-logs?entityNames=trackOrder",children:(0,b.jsxs)("span",{"data-tip":(0,a.ag)("auditLog.menu"),"data-for":"charge-list-toolbar-auditLog-tooltip",children:[(0,b.jsx)("button",{className:"btnCircle btn-light",type:"button",children:(0,b.jsx)(m.Z,{iconClass:"fas fa-history"})}),(0,b.jsx)(A.Z,{id:"charge-list-toolbar-auditLog-tooltip"})]})}),function(){var e=!v||f,t=(0,b.jsxs)("span",{"data-tip":(0,a.ag)("common.export"),"data-for":"charge-list-toolbar-export",children:[(0,b.jsx)("button",{className:"btnCircle btn-light",disabled:e,onClick:S,type:"button",children:(0,b.jsx)(m.Z,{loading:p,iconClass:"far fa-file-excel"})}),(0,b.jsx)(A.Z,{id:"charge-list-toolbar-export"})]});return e?(0,b.jsxs)("span",{"data-tip":(0,a.ag)("common.noDataToExport"),"data-tip-disable":!e,"data-for":"track-order-list-toolbar-export-tooltip",children:[t,(0,b.jsx)(A.Z,{id:"track-order-list-toolbar-export-tooltip"})]}):t}(),s&&(0,b.jsx)(R.Z,{title:(0,a.ag)("common.areYouSure"),onConfirm:function(){return P(),void u(w.Z.doDestroyAll(h))},onClose:function(){return P()},okText:(0,a.ag)("common.yes"),cancelText:(0,a.ag)("common.no")})]})},V=n(27829),q=n(53852),M=n(75352);var $=function(e){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(q.Z,{items:[[(0,a.ag)("dashboard.menu"),"/"],[(0,a.ag)("entities.trackOrder.menu")]]}),(0,b.jsxs)(V.Z,{children:[(0,b.jsx)(M.Z,{children:(0,a.ag)("entities.trackOrder.list.title")}),(0,b.jsx)(B,{}),(0,b.jsx)(k,{}),(0,b.jsx)(D,{})]})]})}}}]);