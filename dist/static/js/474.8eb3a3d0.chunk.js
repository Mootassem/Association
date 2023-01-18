"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[474],{27829:function(n,t,e){var i,a=e(30168),r=e(91876).ZP.div(i||(i=(0,a.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));t.Z=r},20474:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});e(47313);var i,a=e(10499),r=e(61586),o=e(27829),c=e(45788),l=e(30168),s=e(91876).ZP.div(i||(i=(0,l.Z)(["\n  padding: 16px;\n  margin-bottom: 16px;\n  border: 1px solid rgb(224, 224, 224);\n  border-radius: 5px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .title {\n    font-size: 24px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 24px;\n    flex-grow: 0;\n  }\n\n  .pricing {\n    font-size: 36px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 16px;\n    flex-grow: 0;\n  }\n\n  .pricingPeriod {\n    font-size: 16px;\n    font-weight: normal;\n  }\n\n  .description {\n    flex-grow: 1;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n\n  .notPlanUser {\n    text-align: left;\n    font-size: 13px;\n  }\n\n  .cancelAtPeriodEnd {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #de3618;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n\n  .somethingWrong {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #ed8936;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n"]))),d=e(86495),p=e(46417);function g(n){var t=(0,c.v9)(d.Z.selectCurrentTenant).plan===r.Z.values.free?"current":null;return(0,p.jsxs)(s,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"title",children:(0,a.ag)("plan.".concat(r.Z.values.free,".label"))}),(0,p.jsxs)("div",{className:"pricing",children:[(0,a.ag)("plan.free.price"),(0,p.jsx)("span",{className:"pricingPeriod",children:(0,a.ag)("plan.pricingPeriod")})]})]}),(0,p.jsx)("div",{children:"current"===t&&(0,p.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg btn-block w-100",disabled:!0,children:(0,a.ag)("plan.current")})})]})}var b=e(76747),m=e(26319),x=e(71945),u=function(n){return n.plan},f=(0,b.P1)([u],(function(n){return Boolean(n.loading)})),h={selectPermissionToEdit:(0,b.P1)([d.Z.selectCurrentTenant,d.Z.selectCurrentUser],(function(n,t){return new m.Z(n,t).match(x.Z.values.planEdit)})),selectIsPlanUser:(0,b.P1)([d.Z.selectCurrentTenant,d.Z.selectCurrentUser],(function(n,t){return n.plan===r.Z.values.free||"cancel_at_period_end"===n.planStatus||n.planUserId===t.id})),selectLoading:f,selectRaw:u},v=e(60361),j=e(883);function Z(n){var t=(0,c.I0)(),e=n.plan,i=(0,c.v9)(d.Z.selectCurrentTenant),o=(0,c.v9)(h.selectLoading),l=(0,c.v9)(h.selectPermissionToEdit),g=(0,c.v9)(h.selectIsPlanUser),b=i.plan===e,m=b?"manage":i.plan===r.Z.values.free?"payment":"none";return(0,p.jsxs)(s,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"title",children:(0,a.ag)("plan.".concat(e,".label"))}),(0,p.jsxs)("div",{className:"pricing",children:[(0,a.ag)("plan.".concat(e,".price")),(0,p.jsx)("span",{className:"pricingPeriod",children:(0,a.ag)("plan.pricingPeriod")})]})]}),(0,p.jsxs)("div",{children:[b&&"cancel_at_period_end"===i.planStatus&&(0,p.jsx)("p",{className:"cancelAtPeriodEnd",children:(0,a.ag)("plan.cancelAtPeriodEnd")}),b&&"error"===i.planStatus&&(0,p.jsx)("p",{className:"somethingWrong",children:(0,a.ag)("plan.somethingWrong")}),"payment"===m&&(0,p.jsx)("button",{type:"button",className:"btn btn-lg btn-block btn-primary w-100",disabled:!l||!g||o,onClick:function(){t(v.Z.doCheckout(e))},children:(0,a.ag)("plan.subscribe")}),"manage"===m&&g&&(0,p.jsx)("button",{type:"button",className:"btn btn-lg btn-block btn-primary w-100",disabled:!l||o,onClick:function(){t(v.Z.doPortal())},children:(0,a.ag)("plan.manage")}),"manage"===m&&!g&&(0,p.jsx)("span",{"data-tip":(0,a.ag)("plan.notPlanUser"),"data-for":"plan-not-plan-user-".concat(e,"-tooltip"),children:(0,p.jsx)("button",{type:"button",className:"btn btn-lg btn-block btn-primary w-100",disabled:!0,children:(0,a.ag)("plan.manage")})})]}),(0,p.jsx)(j.Z,{id:"plan-not-plan-user-".concat(e,"-tooltip")})]})}var w=e(53852),y=e(75352);var P=function(n){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(w.Z,{items:[[(0,a.ag)("dashboard.menu"),"/"],[(0,a.ag)("plan.menu")]]}),(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(y.Z,{children:(0,a.ag)("plan.title")}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:(0,p.jsx)(g,{})}),(0,p.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:(0,p.jsx)(Z,{plan:r.Z.values.growth})}),(0,p.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:(0,p.jsx)(Z,{plan:r.Z.values.enterprise})})]})]})]})}},53852:function(n,t,e){var i,a=e(30168),r=(e(47313),e(28303)),o=e(91876),c=e(46417),l=o.ZP.nav(i||(i=(0,a.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));t.Z=function(n){var t=function(n){return n.length>1};return(0,c.jsx)(l,{children:(0,c.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(e,i){return(0,c.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:t(e)?(0,c.jsx)(r.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})})}},75352:function(n,t,e){var i,a=e(30168),r=e(91876).ZP.h1(i||(i=(0,a.Z)(["\n  margin-bottom: 24px;\n"])));t.Z=r}}]);