(this.webpackJsonpkapri_analytics=this.webpackJsonpkapri_analytics||[]).push([[0],{154:function(t,e,n){},247:function(t,e,n){"use strict";n.r(e);var r=n(14),a=n(0),i=n.n(a),c=n(28),s=n.n(c),o=(n(154),n(131)),u=n(132),l=n(147),d=n(144),f=n(39),h=n.n(f),j=n(56),b=n(55),p=n(22),m=n(249),O="YYYY-MM-DD HH:mm:ss",x=["\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b","\u0411\u043e\u0434\u0438 (\u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u0440\u0443\u043a\u0430\u0432)","\u0411\u043e\u0434\u0438 (\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0440\u0443\u043a\u0430\u0432)","\u041a\u043e\u0444\u0442\u044b","\u041d\u0430\u0431\u043e\u0440\u044b","\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u043a","\u041f\u0438\u0436\u0430\u043c\u044b","\u041f\u043b\u0430\u0442\u044c\u044f","\u0420\u0435\u0433\u043b\u0430\u043d\u044b","\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0438","\u0427\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u0438","\u0428\u043e\u0440\u0442\u044b","\u0428\u0442\u0430\u043d\u044b"],y={"\u0414\u0420":"\u0411\u043e\u0434\u0438 (\u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u0440\u0443\u043a\u0430\u0432)","\u041a\u0420":"\u0411\u043e\u0434\u0438 (\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0440\u0443\u043a\u0430\u0432)","\u041a\u043e\u0444\u0442":"\u041a\u043e\u0444\u0442\u044b","\u041d\u0430\u0431\u043e\u0440":"\u041d\u0430\u0431\u043e\u0440\u044b","\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u043a":"\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u043a","\u041f\u0438\u0436\u0430\u043c":"\u041f\u0438\u0436\u0430\u043c\u044b","\u041f\u043b\u0430\u0442\u044c":"\u041f\u043b\u0430\u0442\u044c\u044f","\u0420\u0435\u0433\u043b\u0430\u043d":"\u0420\u0435\u0433\u043b\u0430\u043d\u044b","\u0424\u0443\u0442\u0431\u043e\u043b\u043a":"\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0438","\u0427\u0435\u043b\u043e\u0432\u0435\u0447":"\u0427\u0435\u043b\u043e\u0432\u0435\u0447\u043a\u0438","\u0428\u043e\u0440\u0442\u044b":"\u0428\u043e\u0440\u0442\u044b","\u0428\u0442\u0430\u043d\u044b":"\u0428\u0442\u0430\u043d\u044b","\u041b\u043e\u0441\u0438\u043d\u044b":"\u0428\u0442\u0430\u043d\u044b","\u041a\u043e\u0441\u0442\u044e\u043c":"\u041d\u0430\u0431\u043e\u0440\u044b"};function k(t){return t.match(/([0-9]+)-([0-9]+)|NB/g)[0]}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.map((function(t,n){return{key:n,name:t,NB:e,"0-3":e,"1-2":e,"2-4":e,"3-6":e,"4-6":e,"6-9":e,"9-12":e,"12-18":e,"18-24":e,"24-36":e,"24-48":e,"36-48":e}}))}var g=function(t){var e=t.map((function(t,e){return{title:t,dataIndex:t,key:e,render:function(t,e){return{props:{style:{background:parseInt(t)>0?"#C7E78F":"#F5A283"}},children:Object(r.jsx)("div",{children:t})}}}}));return e.unshift({title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",key:"name"}),e}(["NB","0-3","1-2","2-4","3-6","4-6","6-9","9-12","12-18","18-24","24-36","24-48","36-48"]),w=n(107),T=n.n(w),S=n(29),I=n.n(S),z="Bearer f103af43fa14ff2524437274cf82999285bd881e",C={girls:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c9ac503e-1d16-11eb-0a80-050d002dcd9a",boys:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/00cfa023-1d16-11eb-0a80-050d002dade8",unisex:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/73475072-28e9-11eb-0a80-029000103030"},E=function(){var t=Object(j.a)(h.a.mark((function t(e){var n,r,a,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.folderName,r=e.inTransit,a=r?"all":"positiveOnly",t.next=4,T.a.get("/api/remap/1.2/report/stock/all?groupBy=consignment&filter=stockMode=".concat(a,"&filter=productFolder=").concat(C[n],"&filter=inTransitOnly=").concat(r),{headers:{"Content-Type":"application/json",Authorization:z}});case 4:return i=t.sent,t.abrupt("return",i.data.rows);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(j.a)(h.a.mark((function t(){var e,n,r,a=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"2021-01-01 00:00:00",n=a.length>1&&void 0!==a[1]?a[1]:I()(new Date).format(O),t.next=4,T.a.get("/api/remap/1.2/report/profit/byvariant?momentFrom=".concat(e,"&momentTo=").concat(n),{headers:{"Content-Type":"application/json",Authorization:z}});case 4:return r=t.sent,t.abrupt("return",r.data.rows);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=n(77),M=n(59),N=n(94),A=n(48);function D(t){return t.map((function(t){return{name:t,sizes:{NB:{width:0,depth:0,inTransit:0},"0-3":{width:0,depth:0,inTransit:0},"1-2":{width:0,depth:0,inTransit:0},"2-4":{width:0,depth:0,inTransit:0},"3-6":{width:0,depth:0,inTransit:0},"4-6":{width:0,depth:0,inTransit:0},"6-9":{width:0,depth:0,inTransit:0},"9-12":{width:0,depth:0,inTransit:0},"12-18":{width:0,depth:0,inTransit:0},"18-24":{width:0,depth:0,inTransit:0},"24-36":{width:0,depth:0,inTransit:0},"24-48":{width:0,depth:0,inTransit:0},"36-48":{width:0,depth:0,inTransit:0}}}}))}var H=["all","bi baby","bimini","biorganic","Disney baby","DreamKid","Dunnes","H&M","Little Angel","George","little life","Marks & Spencer","Matalan","Next","Tasco","KEHA","\u041c\u0430\u043c\u0438\u043d\u0435 \u0447\u0443\u0434\u043e"],K=function(t){var e=t.fetchFunc,n=Object(a.useState)(null),i=Object(b.a)(n,2),c=i[0],s=i[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),l=u[0],d=u[1],f=Object(a.useState)(!1),O=Object(b.a)(f,2),y=O[0],w=O[1],T=Object(a.useState)("all"),S=Object(b.a)(T,2),I=S[0],z=S[1],C=Object(p.e)().sex,F=Object(r.jsx)(M.a,{theme:"dark",selectedKeys:[I],children:H.map((function(t){return Object(r.jsx)(M.a.Item,{onClick:function(){z(t)},children:t},t)}))}),K=function(){var t=Object(j.a)(h.a.mark((function t(){var e,n,r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=D(x),n=v(x),d(!0),r={folderName:C,inTransit:y},t.next=6,E(r);case 6:a=t.sent,"all"!==I&&(a=a.filter((function(t){return-1!==t.name.indexOf(I)}))),a.forEach((function(t){var n=k(t.name);e.forEach((function(e){t.folder.name===e.name&&(e.sizes[n].width+=1,e.sizes[n].depth+=y?t.inTransit:t.stock)}))})),n.forEach((function(t){var n=e.find((function(e){return t.name===e.name}));for(var r in n.sizes)t[r]="".concat(n.sizes[r].depth," (").concat(n.sizes[r].width,") ")})),s(n),d(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){K(e)}),[C,y,I]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N.a,{overlay:F,placement:"bottomCenter",children:Object(r.jsx)(A.a,{children:"\u0411\u0440\u0435\u043d\u0434"})}),Object(r.jsx)(B.a,{style:{marginLeft:"30px"},onChange:function(){return w((function(t){return!t}))},children:"In transit"}),Object(r.jsx)(m.a,{dataSource:c,columns:g,columnstock:"3px",pagination:!1,bordered:!0,loading:l})]})},Y=n(38),_=n(250),J=n(251),L={boys:"\u041c",girls:"\u0414",unisex:"\u0423"},G=Object.keys(y),P=_.a.RangePicker,Q=function(){var t=Object(p.e)().sex,e=Object(a.useState)(null),n=Object(b.a)(e,2),i=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(b.a)(s,2),u=o[0],l=o[1],d=function(){var e=Object(j.a)(h.a.mark((function e(n,r){var a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,F(n,r);case 3:a=e.sent,i=R(a,t),c(q(G,i)),l(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J.b,{direction:"vertical",size:12,align:"center",children:Object(r.jsx)(P,{onChange:function(t){d(I()(t[0]._d).format(O),I()(t[1]._d).format(O))},format:O,size:"large"})}),Object(r.jsx)(m.a,{dataSource:i,columns:g,columnstock:"3px",pagination:!1,bordered:!0,loading:u})]})};function R(t,e){return t.filter((function(t){return function(t,e){var n="^[".concat(L[e],"]{1}"),r=t.match(n);if(r)return L[e]===r[0]}(t.assortment.name,e)}))}function q(t,e){var n=v(x,0);return t.forEach((function(t){(function(t,e){return t.filter((function(t){return-1!==t.assortment.name.indexOf(e)}))})(e,t).forEach((function(e){(function(t,e){return t.find((function(t){return t.name===y[e]}))}(n,t))[k(e.assortment.name)]+=e.sellQuantity}))})),n}var U=M.a.SubMenu,V=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={current:"mail"},t.handleClick=function(e){t.setState({current:e.key})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.current;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(M.a,{onClick:this.handleClick,selectedKeys:[t],mode:"horizontal",theme:"dark",children:[Object(r.jsxs)(U,{title:"\u041c\u0430\u043b\u044c\u0447\u0438\u043a\u0438",children:[Object(r.jsx)(M.a.Item,{children:Object(r.jsx)(Y.b,{to:"/stock/boys",children:"O\u0441\u0442\u0430\u0442\u043a\u0438 "})},"boysStock"),Object(r.jsx)(M.a.Item,{children:Object(r.jsx)(Y.b,{to:"/sales/boys",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438 "})},"boysSales")]},"boys"),Object(r.jsxs)(U,{title:"\u0414\u0435\u0432\u043e\u0447\u043a\u0438",children:[Object(r.jsx)(M.a.Item,{children:Object(r.jsx)(Y.b,{to:"/stock/girls",children:"O\u0441\u0442\u0430\u0442\u043a\u0438 "})},"girlsStock"),Object(r.jsx)(M.a.Item,{children:Object(r.jsx)(Y.b,{to:"/sales/girls",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438 "})},"girlsSales")]},"girls"),Object(r.jsxs)(U,{title:"\u0423\u043d\u0438\u0441\u0435\u043a\u0441",children:[Object(r.jsx)(M.a.Item,{children:Object(r.jsx)(Y.b,{to:"/stock/unisex",children:"O\u0441\u0442\u0430\u0442\u043a\u0438"})},"unisexStock"),Object(r.jsx)(M.a.Item,{children:Object(r.jsx)(Y.b,{to:"/sales/unisex",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})},"unisexSales")]},"unisex")]}),Object(r.jsx)(p.a,{exact:!0,path:"/stock/:sex",render:function(){return Object(r.jsx)(K,{})}}),Object(r.jsx)(p.a,{path:"/sales/:sex",render:function(){return Object(r.jsx)(Q,{})}})]})}}]),n}(i.a.Component);s.a.render(Object(r.jsx)(Y.a,{children:Object(r.jsx)(V,{})}),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.a2dcef57.chunk.js.map