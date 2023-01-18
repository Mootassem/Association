"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5185],{61567:function(e,s,a){a(47313);var n=a(46417);s.Z=function(){return(0,n.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,n.jsx)("div",{className:"spinner-border text-primary"})})}},35185:function(e,s,a){a.r(s),a.d(s,{default:function(){return V}});var n=a(70885),r=a(47313),t=a(45788),i=a(63830),l=a(10499),o=a(59436),u=a(541),c=a(47921),d=a(27829),m=a(53852),f=a(61567),Z=a(75352),g=a(1413),p=a(43270),x=a(21538),b=a(71896),j=a(5544),h=a(68160),v=a(95748),N=a(42277),y=a(89994),_=a(63442),k=a(67357),C=a(5284),q=a(11550),L=a(83073),S=a(47575),E=a(70816),I=a.n(E),B=a(63849),w=a(31616),D=a(46417),F=N.Ry().shape({roles:y.Z.stringArray((0,l.ag)("user.fields.roles"),{min:1}),phoneNumber:y.Z.string((0,l.ag)("phoneNumber"),{max:24}),secteur:y.Z.enumerator((0,l.ag)("secteur"),{options:C.Z.secteur}),employeur:y.Z.string((0,l.ag)("Employeur"),{required:!1}),profession:y.Z.string((0,l.ag)("Profession"),{required:!1}),adresse:y.Z.string((0,l.ag)("adresse"),{required:!1}),fullName:y.Z.string((0,l.ag)("fullName"),{required:!1}),cin:y.Z.integer((0,l.ag)("cin"),{maxlength:8}),date_naissance:y.Z.date((0,l.ag)("Date Naissance"),{required:!1}),etat_civil:y.Z.enumerator((0,l.ag)("user.fields.Etat_Civil"),{options:q.Z.Etat}),status:y.Z.enumerator((0,l.ag)("user.fields.status"),{options:_.Z.status}),lien_facebook:y.Z.string((0,l.ag)("Lien Facebook"),{required:!1}),parrain:y.Z.relationToOne((0,l.ag)("user.fields.parrain"),{required:!1})});var O=function(e){var s=(0,t.I0)(),a=(0,r.useState)((function(){var s=e.user||{};return{roles:s.roles[0],phoneNumber:s.phoneNumber,secteur:s.secteur,employeur:s.employeur,profession:s.profession,adresse:s.adresse,fullName:s.fullName,cin:s.cin,etat_civil:s.etat_civil,date_naissance:s.date_naissance?I()(s.date_naissance).toDate():null,status:s.status,lien_facebook:s.lien_facebook,parrain:s.parrain}})),i=(0,n.Z)(a,1)[0],o=(0,p.cI)({resolver:(0,k.X)(F),mode:"all",defaultValues:i}),c=function(a){var n=(0,g.Z)({id:e.user.id},a);delete n.email,s(u.Z.doUpdate(n))};return(0,D.jsx)(h.Z,{children:(0,D.jsx)(p.RV,(0,g.Z)((0,g.Z)({},o),{},{children:(0,D.jsxs)("form",{onSubmit:o.handleSubmit(c),children:[(0,D.jsxs)(B.Z,{style:{paddingBottom:"10px"},children:[(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsxs)("div",{className:"form-group",children:[(0,D.jsx)("label",{className:"col-form-label",htmlFor:"email",children:(0,l.ag)("user.fields.email")}),(0,D.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"email",name:"email",value:e.user.email})]})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(j.Z,{name:"roles",label:(0,l.ag)("user.fields.roles"),required:!0,options:_.Z.roles.map((function(e){return{value:e,label:(0,l.ag)("".concat(e))}}))})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(j.Z,{name:"status",label:(0,l.ag)("user.fields.status"),options:_.Z.status.map((function(e){return{value:e,label:(0,l.ag)("user.status.".concat(e))}}))})})]}),(0,D.jsxs)(B.Z,{children:[(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(S.Z,{name:"fullName",label:(0,l.ag)("user.fields.fullName"),required:!0})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(x.Z,{name:"phoneNumber",label:(0,l.ag)("user.fields.phoneNumber")})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(S.Z,{name:"adresse",label:(0,l.ag)("user.fields.address")})})]}),(0,D.jsxs)(B.Z,{style:{paddingBottom:"10px"},children:[(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(j.Z,{name:"secteur",label:(0,l.ag)("user.fields.sector"),options:C.Z.secteur.map((function(e){return{value:e,label:(0,l.ag)("user.sector.".concat(e))}}))})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(S.Z,{name:"employeur",label:(0,l.ag)("user.fields.employer")})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(S.Z,{name:"profession",label:(0,l.ag)("user.fields.profession")})})]}),(0,D.jsxs)(B.Z,{children:[(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(b.Z,{name:"date_naissance",label:(0,l.ag)("user.fields.birthDate")})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(j.Z,{name:"etat_civil",label:(0,l.ag)("user.fields.maritalStatus"),options:q.Z.Etat.map((function(e){return{value:e,label:(0,l.ag)("user.maritalStatus.".concat(e))}}))})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(x.Z,{name:"cin",label:(0,l.ag)("C.I.N")})})]}),(0,D.jsxs)(B.Z,{style:{paddingBottom:"10px"},children:[(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(S.Z,{name:"lien_facebook",label:(0,l.ag)("user.fields.facebookLink")})}),(0,D.jsx)(w.Z,{sm:4,children:(0,D.jsx)(L.Z,{name:"parrain",label:(0,l.ag)("user.fields.sponsor"),showCreate:!e.modal})}),(0,D.jsx)(w.Z,{sm:4})]}),(0,D.jsxs)("div",{className:"form-buttons",children:[(0,D.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:o.handleSubmit(c),children:[(0,D.jsx)(v.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,l.ag)("common.save")]}),(0,D.jsxs)("button",{className:"btn btn-light",disabled:e.saveLoading,onClick:function(){Object.keys(i).forEach((function(e){o.setValue(e,i[e])}))},type:"button",children:[(0,D.jsx)("i",{className:"fas fa-undo"}),(0,l.ag)("common.reset")]}),e.onCancel?(0,D.jsxs)("button",{className:"btn btn-light",disabled:e.saveLoading,onClick:function(){return e.onCancel()},type:"button",children:[(0,D.jsx)("i",{className:"fas fa-times"}),(0,l.ag)("common.cancel")]}):null]})]})}))})};var V=function(e){var s=(0,t.I0)(),a=(0,r.useState)(!1),g=(0,n.Z)(a,2),p=g[0],x=g[1],b=(0,t.v9)(c.Z.selectInitLoading),j=(0,t.v9)(c.Z.selectSaveLoading),h=(0,t.v9)(c.Z.selectUser),v=(0,i.$B)(),N=Boolean(v.params.id);return(0,r.useEffect)((function(){s(u.Z.doInit(v.params.id)),x(!0)}),[s,v.params.id]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(m.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("user.menu"),"/user"],[(0,l.ag)("user.edit.title")]]}),(0,D.jsxs)(d.Z,{children:[(0,D.jsx)(Z.Z,{children:(0,l.ag)("user.edit.title")}),b&&(0,D.jsx)(f.Z,{}),p&&!b&&(0,D.jsx)(O,{user:h,saveLoading:j,isEditing:N,onCancel:function(){return(0,o.s1)().push("/user")}})]})]})}}}]);