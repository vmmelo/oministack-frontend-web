(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo.7eea718b.svg"},19:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/heroes.1f4b5508.png"},34:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=a(7),s=a(11),u=a(5),i=a.n(u),m=a(9),p=a(2),d=(a(40),a(19),a(30)),E=a.n(d),f=a(10),h=a.n(f),b=a(13),v=a(31),g=a.n(v).a.create({baseURL:"https://vmmelo1-bethehero.herokuapp.com/"});function O(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(s.f)();function u(){return(u=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.post("sessions",{id:a});case 4:n=e.sent,localStorage.setItem("ongId",a),localStorage.setItem("ongName",n.data.name),o.push("/profile"),console.log(n.data.name),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert("Falha no login. Tente novamente");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("img",{src:h.a,alt:"Be The Hero"}),r.a.createElement("form",{onSubmit:function(e){return u.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu logon"),r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},placeholder:"Sua ID"}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(l.b,{className:"back-link",to:"/register"},r.a.createElement(b.b,{size:16,color:"#E02041"}),"N\xe3o tenho cadastro"))),r.a.createElement("img",{src:E.a,alt:"Heroes"}))}a(63);function j(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(p.a)(o,2),d=u[0],E=u[1],f=Object(n.useState)(""),v=Object(p.a)(f,2),O=v[0],j=v[1],y=Object(n.useState)(""),S=Object(p.a)(y,2),k=S[0],N=S[1],C=Object(n.useState)(""),w=Object(p.a)(C,2),x=w[0],I=w[1],z=s.f;function B(){return(B=Object(m.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:a,email:d,whatsapp:O,city:k,uf:x},e.prev=2,e.next=5,g.post("ongs",n);case 5:r=e.sent,alert("Seu id de acesso \xe9: ".concat(r.data.id)),z.push("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),alert("Erro no cadastro, tente novamente.");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:h.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG."),r.a.createElement(l.b,{className:"back-link",to:"/"},r.a.createElement(b.a,{size:16,color:"#E02041"}),"Voltar")),r.a.createElement("form",{onSubmit:function(e){return B.apply(this,arguments)}},r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},placeholder:"Nome da ONG"}),r.a.createElement("input",{value:d,onChange:function(e){return E(e.target.value)},type:"email",placeholder:"E-mail"}),r.a.createElement("input",{value:O,onChange:function(e){return j(e.target.value)},placeholder:"Whatsapp"}),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{value:k,onChange:function(e){return N(e.target.value)},placeholder:"Cidade"}),r.a.createElement("input",{value:x,onChange:function(e){return I(e.target.value)},placeholder:"UF",style:{width:80}})),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}a(64);function y(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],o=localStorage.getItem("ongName"),u=localStorage.getItem("ongId"),d=Object(s.f)();function E(){return(E=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.delete("incidents/".concat(t),{headers:{Authorization:u}});case 3:c(a.filter((function(e){return e.id!==t}))),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),alert("Erro ao deletar caso, tente novamente.");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){g.get("profile",{headers:{Authorization:u}}).then((function(e){c(e.data)}))}),[u]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:h.a,alt:"Be The Hero"}),r.a.createElement("span",null,"Bem vinda, ",o,"!"),r.a.createElement(l.b,{className:"button",to:"/incidents/new"},"Cadastrar novo caso"),r.a.createElement("button",{onClick:function(){localStorage.clear(),d.push("/")},type:"button"},r.a.createElement(b.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",{style:{display:a.length>0?"block":"none"}},"Casos cadastrados"),r.a.createElement("div",{style:{display:a.length>0?"block":"none"}},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("strong",null,"CASO:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"DESCRI\xc7\xc3O:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"VALOR:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{onClick:function(){return function(e){return E.apply(this,arguments)}(e.id)},type:"button"},r.a.createElement(b.d,{size:20,color:"#a8a8b3"})))})))))}a(65);function S(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(p.a)(o,2),d=u[0],E=u[1],f=Object(n.useState)(""),v=Object(p.a)(f,2),O=v[0],j=v[1],y=Object(s.f)(),S=localStorage.getItem("ongId");function k(){return(k=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,description:d,value:O},e.prev=2,console.log("r"),e.next=6,g.post("incidents",n,{headers:{Authorization:S}}).then((function(e){console.log(e)}));case 6:alert("Caso cadastrado com sucesso!"),y.push("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Erro ao cadastrar caso, tente novamente.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:h.a,alt:"Be The Hero"}),r.a.createElement("h1",null,"Cadastrar novo caso"),r.a.createElement("p",null,"Descreva o caso detalhadamente para encontrar um her\xf3i para resolver isso."),r.a.createElement(l.b,{className:"back-link",to:"/profile"},r.a.createElement(b.a,{size:16,color:"#E02041"}),"Voltar")),r.a.createElement("form",{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},placeholder:"T\xedtulo do caso"}),r.a.createElement("textarea",{value:d,onChange:function(e){return E(e.target.value)},placeholder:"Descri\xe7\xe3o"}),r.a.createElement("input",{value:O,onChange:function(e){return j(e.target.value)},placeholder:"Valor em reais"}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}function k(){return r.a.createElement(l.a,{basename:window.location.pathname||""},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:O}),r.a.createElement(s.a,{path:"/register",component:j}),r.a.createElement(s.a,{path:"/profile",component:y}),r.a.createElement(s.a,{path:"/incidents/new",component:S})))}var N=function(){return r.a.createElement(k,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.564c9b2a.chunk.js.map