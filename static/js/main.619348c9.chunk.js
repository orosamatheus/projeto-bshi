(this["webpackJsonpprojeto-bshi"]=this["webpackJsonpprojeto-bshi"]||[]).push([[0],{25:function(e,s,t){},26:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(18),i=t.n(a),r=t(2),j=t(9),o=t.n(j),b=t(11),l=t(12),d=(t(25),t(26),t(0));function O(){return Object(d.jsx)("footer",{})}var x=t.p+"static/media/arrow.abb41cd4.svg",h=t.p+"static/media/logoBackground.e88f2eab.svg",m=t.p+"static/media/dragon.1d2c28d0.svg",u=t.p+"static/media/fire.18940238.svg",p=t.p+"static/media/infinite.2e269fec.svg",f=t.p+"static/media/seta.ae7c5710.svg",v=t(8);function g(){var e=Object(c.useState)([]),s=Object(l.a)(e,2),t=s[0],n=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity").then((function(e){return e.json()}));case 2:s=e.sent,n(s.top.slice(0,7));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"contentContainer",children:[Object(d.jsx)("div",{className:"backgroundContainer",children:Object(d.jsxs)("div",{className:"lineContainer",children:[Object(d.jsx)("img",{className:"logoBackground",alt:"logo",src:h}),Object(d.jsxs)("p",{children:["monitore os seus animes",Object(d.jsx)("br",{}),"preferidos, e nao perca mais",Object(d.jsx)("br",{}),"nenhum epis\xf3dio"]}),Object(d.jsx)("img",{className:"arrow",alt:"arrow",src:x})]})}),Object(d.jsx)("h1",{className:"whatYouDo",children:"o que fazer por aqui?"}),Object(d.jsxs)("div",{className:"options",children:[Object(d.jsxs)("div",{className:"option1",children:[Object(d.jsx)("img",{alt:"icon",src:u}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Os Melhores"}),Object(d.jsx)("br",{}),"Veja o que esta",Object(d.jsx)("br",{}),"pegando fogo, no",Object(d.jsx)("br",{}),"mundo dos animes.",Object(d.jsx)("br",{}),"Os animes mais",Object(d.jsx)("br",{}),"bem avaliados pela",Object(d.jsx)("br",{}),"galera!"]})]}),Object(d.jsxs)("div",{className:"option2",children:[Object(d.jsx)("img",{alt:"icon",src:p}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Informa\xe7\xf5es"}),Object(d.jsx)("br",{}),"Procure informa\xe7\xf5es",Object(d.jsx)("br",{}),"dos seus animes",Object(d.jsx)("br",{}),"preferidos."]})]}),Object(d.jsxs)("div",{className:"option3",children:[Object(d.jsx)("img",{alt:"icon",src:m}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Sua Lista"}),Object(d.jsx)("br",{}),"Comece agora mesmo",Object(d.jsx)("br",{}),"a montar sua lista de",Object(d.jsx)("br",{}),"animes preferidos, e",Object(d.jsx)("br",{}),"seja notificado",Object(d.jsx)("br",{}),"quando um epis\xf3dio",Object(d.jsx)("br",{}),"novo for ao ar!"]})]})]}),Object(d.jsxs)("div",{className:"listAnimes",children:[Object(d.jsx)("img",{alt:"ico",src:p}),Object(d.jsx)("h3",{children:"Veja Animes"})]}),Object(d.jsx)("ul",{className:"Animes",children:t.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:"animeCover",alt:"cover",src:e.image_url}),Object(d.jsxs)("h3",{children:["Nome: ",e.title," "]}),Object(d.jsxs)("div",{className:"lineContainer",children:[Object(d.jsxs)("h3",{children:["Epis\xf3dios: ",e.episodes]}),Object(d.jsx)("h3",{children:"Estrelas: **"})]}),Object(d.jsx)(v.b,{to:"/details/".concat(e.mal_id),children:Object(d.jsx)("img",{className:"seta",alt:"seta",src:f})})]},e.mal_id)}))}),Object(d.jsx)(O,{})]})})}t(33);function N(){var e=Object(r.f)().id,s=Object(c.useState)({}),t=Object(l.a)(s,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function s(){return(s=Object(b.a)(o.a.mark((function s(){var t;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("https://api.jikan.moe/v3/anime/".concat(e)).then((function(e){return e.json()}));case 2:t=s.sent,a(t);case 4:case"end":return s.stop()}}),s)})))).apply(this,arguments)}!function(){s.apply(this,arguments)}()}),[]),console.log(n),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"detailContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{alt:"cover",src:n.image_url})}),Object(d.jsxs)("div",{className:"textContainer",children:[Object(d.jsxs)("h1",{className:"nome",children:["Nome do anime: ",n.title]}),Object(d.jsxs)("div",{className:"sinopse",children:[Object(d.jsx)("h1",{children:"Sinopse:"}),Object(d.jsx)("p",{children:n.synopsis})]})]})]}),Object(d.jsxs)("div",{className:"outrasInforma\xe7\xf5es",children:[Object(d.jsxs)("h2",{children:["Epis\xf3dios: ",n.episodes]}),Object(d.jsxs)("h2",{children:["Status: ",n.status]}),Object(d.jsxs)("h2",{children:["Dura\xe7\xe3o: ",n.duration," "]}),Object(d.jsxs)("h2",{children:["Origem: ",n.source]}),Object(d.jsxs)("h2",{children:["Score: ",n.score]}),Object(d.jsxs)("h2",{children:["Estrelas: ",n.favorites," "]}),Object(d.jsxs)("h2",{children:["Trailer: ",Object(d.jsx)("a",{href:n.trailer_url,children:"Ver Trailer"})]})]})]})}function w(){return Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(d.jsx)(r.a,{path:"/details/:id",component:N})]})}var k=t.p+"static/media/logo.6b9c73fd.svg";t(34);function C(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"logo",src:k})})})}var y=function(){return Object(d.jsxs)(v.a,{children:[Object(d.jsx)(C,{}),Object(d.jsx)(w,{})]})};t(35);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.619348c9.chunk.js.map