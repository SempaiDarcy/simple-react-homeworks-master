(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,t,a){e.exports={message:"Message_message__327mn",avatar:"Message_avatar__3bO0x",content:"Message_content__1ahH3",angle:"Message_angle__3GA6g",text:"Message_text__2Wc5I",name:"Message_name__3pAnV",time:"Message_time__2Cbxf"}},,,,function(e,t,a){e.exports={App:"App_App__1Ynur"}},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=(a(11),a(5)),o=a.n(c),m=a(1),s=a.n(m);var u=function(e){return r.a.createElement("div",{className:s.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:s.a.avatar}),r.a.createElement("div",{className:s.a.angle}),r.a.createElement("div",{className:s.a.content},r.a.createElement("div",{className:s.a.name},e.name),r.a.createElement("div",{className:s.a.text},e.message),r.a.createElement("div",{className:s.a.time},e.time)))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",h="some text",E="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(u,{avatar:d,name:f,message:h,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},_=a(2);var p=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var g=function(e){var t=e.data.map((function(t){return r.a.createElement(p,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(n.useState)(k),t=Object(_.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)("all"),c=Object(_.a)(i,2),o=c[0],m=c[1],s=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(g,{data:s,setFilter:m,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var b=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(v,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.5a05e6c3.chunk.js.map