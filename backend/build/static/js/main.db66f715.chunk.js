(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},3:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o);n(3);function l(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Todo List"))}var i=n(4),u=n(2),m=n.n(u);function s(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"item create-new-item"},c.a.createElement("input",{type:"text",placeholder:"new item",value:n,onChange:function(e){o(e.target.value)}}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),o(""),m()({method:"post",url:"/api/todo/create",data:{name:n}})}},"+")))}function d(e){var t=e.id,n=e.content;return c.a.createElement("div",null,c.a.createElement("div",{className:"item"},c.a.createElement("input",{type:"checkbox",name:"checkbox",onChange:function(){m()({method:"post",url:"/api/todo/delete",data:{id:t}})}}),c.a.createElement("span",null,n)))}function p(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){m.a.get("/api/todo").then((function(e){o(e.data.todoListItems)})).catch((function(e){console.log(e)}))})),c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"unstyle-list"},c.a.createElement(s,null),n.map((function(e){return c.a.createElement(d,{key:e._id,id:e._id,content:e.name})}))))}var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(l,null),c.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.db66f715.chunk.js.map