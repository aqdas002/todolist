(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),s=(n(13),n(5)),l=n(3),c=n(4),u=n(7),d=n(6),m=function(e){return r.a.createElement("div",{className:" flex justify-center mt-10"},r.a.createElement("form",{onSubmit:e.addList}," ",r.a.createElement("input",{className:"transition ease-in duration-9000 p-4 rounded shadow outline-none",type:"text",placeholder:"Enter List Item",onChange:e.searchChange,value:e.value}),r.a.createElement("button",{className:"transition ease-in duration-500 bg-yellow-200 hover:bg-yellow-700 text-blue-700 font-semibold hover:text-white py-2 px-6 ml-4 border border-blue-500 hover:border-transparent rounded transform"},"Add")))},f=function(e){var t=e.itemLists,n=e.update,a=e.deleteItem;return t.map((function(e){return r.a.createElement("div",{className:"flex relative bg-red-500 mr-20 ml-20 justify-center mt-2"},r.a.createElement("div",{className:"flex-auto  bg-red-500 max-w-full rounded overflow-hidden mt-2 mb-2"},r.a.createElement("input",{className:" text-2xl  bg-red-500  font-semibold outline-none focus:bg-red-500",type:"text",id:e.key,value:e.value,onChange:function(t){n(t.target.value,e.key)}}),r.a.createElement("p",{className:"absolute cursor-pointer right-0 top-0 p-3 text-yellow-400",onClick:function(){return a(e.key)}},"delete")))}))},h=function(e){var t=e.reset;return r.a.createElement("div",{className:"flex justify-end mr-8 mt-8"},r.a.createElement("button",{className:" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ",onClick:t},"Reset"))},v=(n(14),[]),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).resetList=function(){e.setState({list:v})},e.deleteitem=function(t){var n=e.state.list.filter((function(e){return e.key!==t}));e.setState({list:n})},e.updateList=function(t,n){var a=e.state.list;a.map((function(e){if(e.key===n)return e.value=t})),e.setState({list:a})},e.adList=function(t){t.preventDefault();var n=e.state.currentitem;if(""!==n.value){var a=[].concat(Object(s.a)(e.state.list),[n]);e.setState({list:a,currentitem:{key:"",value:""}})}},e.onSearchChange=function(t){e.setState({currentitem:{key:Date.now(),value:t.target.value}}),console.log(e.state.currentitem)},e.state={list:v,currentitem:{key:"",value:""}},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"shadow-2xl"},r.a.createElement(h,{reset:this.resetList}),r.a.createElement("h1",{className:"text-6xl sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-extrabold font-serif text-center mt-10"},"TodoList"),r.a.createElement(m,{searchChange:this.onSearchChange,addList:this.adList}),r.a.createElement(f,{itemLists:this.state.list,update:this.updateList,deleteItem:this.deleteitem,value:this.state.currentitem.value}))}}]),n}(a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todolist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todolist","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.74f44976.chunk.js.map