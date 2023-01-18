"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1663],{49649:function(n,e,t){var a=t(1413),i=t(70885),r=t(47313),o=t(43270),s=t(10499),c=t(89994),d=t(95748),l=t(68160),u=t(42277),m=t(67357),p=t(47575),g=t(95703),f=t(96111),b=t(85543),h=t(46417),x=u.Ry().shape({name:c.Z.string((0,s.ag)("entities.brands.fields.name"),{required:!0}),slug:c.Z.string((0,s.ag)("entities.brands.fields.slug"),{}),photo:c.Z.images((0,s.ag)("entities.brands.fields.photo"),{required:!0}),status:c.Z.enumerator((0,s.ag)("entities.brands.fields.status"),{options:g.Z.status}),isPopular:c.Z.enumerator((0,s.ag)("entities.brands.fields.isPopular"),{options:g.Z.isPopular})});e.Z=function(n){var e=(0,r.useState)((function(){var e=n.record||{};return{name:e.name,slug:e.slug,photo:e.photo||[],status:e.status,isPopular:e.isPopular}})),t=(0,i.Z)(e,1)[0],c=(0,o.cI)({resolver:(0,m.X)(x),mode:"all",defaultValues:t}),u=function(e){var t;n.onSubmit(null===(t=n.record)||void 0===t?void 0:t.id,e)};return(0,h.jsx)(l.Z,{children:(0,h.jsx)(o.RV,(0,a.Z)((0,a.Z)({},c),{},{children:(0,h.jsxs)("form",{onSubmit:c.handleSubmit(u),children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,h.jsx)(b.Z,{name:"photo",label:(0,s.ag)("entities.brands.fields.photo"),required:!0,storage:f.Z.values.brandsPhoto,max:void 0})}),(0,h.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,h.jsx)(p.Z,{name:"name",label:(0,s.ag)("entities.brands.fields.name"),required:!0,autoFocus:!0})}),(0,h.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,h.jsx)(p.Z,{name:"slug",label:(0,s.ag)("entities.brands.fields.slug"),required:!1})})]}),(0,h.jsxs)("div",{className:"form-buttons",children:[(0,h.jsxs)("button",{className:"btn btn-primary",disabled:n.saveLoading,type:"button",onClick:c.handleSubmit(u),children:[(0,h.jsx)(d.Z,{loading:n.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,s.ag)("common.save")]}),(0,h.jsxs)("button",{className:"btn btn-light",type:"button",disabled:n.saveLoading,onClick:function(){Object.keys(t).forEach((function(n){c.setValue(n,t[n])}))},children:[(0,h.jsx)("i",{className:"fas fa-undo"}),"\xa0",(0,s.ag)("common.reset")]}),n.onCancel?(0,h.jsxs)("button",{className:"btn btn-light",type:"button",disabled:n.saveLoading,onClick:function(){return n.onCancel()},children:[(0,h.jsx)("i",{className:"fas fa-times"}),"\xa0",(0,s.ag)("common.cancel")]}):null]})]})}))})}},2695:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var a=t(70885),i=t(47313),r=t(45788),o=t(63830),s=t(10499),c=t(57738),d=t(76747),l=function(n){return n.brands.form},u=(0,d.P1)([l],(function(n){return n.record})),m={selectInitLoading:(0,d.P1)([l],(function(n){return Boolean(n.initLoading)})),selectSaveLoading:(0,d.P1)([l],(function(n){return Boolean(n.saveLoading)})),selectRecord:u,selectRaw:l},p=t(59436),g=t(49649),f=t(27829),b=t(53852),h=t(61567),x=t(75352),v=t(46417);var j=function(n){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),d=t[0],l=t[1],u=(0,r.I0)(),j=(0,o.$B)(),y=(0,r.v9)(m.selectInitLoading),Z=(0,r.v9)(m.selectSaveLoading),C=(0,r.v9)(m.selectRecord),N=Boolean(j.params.id),w=N?(0,s.ag)("entities.brands.edit.title"):(0,s.ag)("entities.brands.new.title");return(0,i.useEffect)((function(){u(c.Z.doInit(j.params.id)),l(!0)}),[u,j.params.id]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.brands.menu"),"/brands"],[w]]}),(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(x.Z,{children:w}),y&&(0,v.jsx)(h.Z,{}),d&&!y&&(0,v.jsx)(g.Z,{saveLoading:Z,initLoading:y,record:C,isEditing:N,onSubmit:function(n,e){u(N?c.Z.doUpdate(n,e):c.Z.doCreate(e))},onCancel:function(){return(0,p.s1)().push("/brands")}})]})]})}},27829:function(n,e,t){var a,i=t(30168),r=t(91876).ZP.div(a||(a=(0,i.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=r},53852:function(n,e,t){var a,i=t(30168),r=(t(47313),t(28303)),o=t(91876),s=t(46417),c=o.ZP.nav(a||(a=(0,i.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,a){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===a?"active":""),children:e(t)?(0,s.jsx)(r.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,e,t){t(47313);var a=t(46417);e.Z=function(n){return n.loading?(0,a.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,a.jsx)("i",{className:n.iconClass}):null}},61567:function(n,e,t){t(47313);var a=t(46417);e.Z=function(){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)("div",{className:"spinner-border text-primary"})})}},47575:function(n,e,t){t(47313);var a=t(43270),i=t(49384),r=t(46417);function o(n){var e=n.label,t=n.description,o=n.name,s=n.hint,c=n.type,d=n.placeholder,l=n.autoFocus,u=n.autoComplete,m=n.required,p=n.externalErrorMessage,g=n.disabled,f=n.endAdornment,b=(0,a.Gc)(),h=b.register,x=b.errors,v=b.formState,j=v.touched,y=v.isSubmitted,Z=i.Z.errorMessage(o,x,j,y,p);return(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsxs)("div",{className:f?"input-group":"",children:[Boolean(e)&&(0,r.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:o,children:e}),t,(0,r.jsx)("input",{id:o,name:o,type:c,ref:h,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},placeholder:d||void 0,autoFocus:l||void 0,autoComplete:u||void 0,disabled:g,className:"form-control ".concat(Z?"is-invalid":"")}),f&&(0,r.jsx)("div",{className:"input-group-append",children:(0,r.jsx)("span",{className:"input-group-text",children:f})})]}),(0,r.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(s)&&(0,r.jsx)("small",{className:"form-text text-muted",children:s})]})}o.defaultProps={type:"text",required:!1},e.Z=o},75352:function(n,e,t){var a,i=t(30168),r=t(91876).ZP.h1(a||(a=(0,i.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=r},71351:function(n,e,t){t.d(e,{Z:function(){return d}});var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),i=new Uint8Array(16);function r(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}for(var o=[],s=0;s<256;++s)o[s]=(s+256).toString(16).substr(1);var c=function(n,e){var t=e||0,a=o;return[a[n[t++]],a[n[t++]],a[n[t++]],a[n[t++]],"-",a[n[t++]],a[n[t++]],"-",a[n[t++]],a[n[t++]],"-",a[n[t++]],a[n[t++]],"-",a[n[t++]],a[n[t++]],a[n[t++]],a[n[t++]],a[n[t++]],a[n[t++]]].join("")};var d=function(n,e,t){var a=e&&t||0;"string"==typeof n&&(e="binary"===n?new Array(16):null,n=null);var i=(n=n||{}).random||(n.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var o=0;o<16;++o)e[a+o]=i[o];return e||c(i)}}}]);