(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[46],{579:function(e,t,a){"use strict";var c=a(2),l=a(5),s=a(0),n=a(6),i=a.n(n),r=a(44),o=a(214),d=a(30),j=a(211),b=a(104),u=a(220),h=a(129),m=a(76),x=a(52),v=a(555),p=a(24),O=a(101),f=a(616),g=void 0,y=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(c=Object.getOwnPropertySymbols(e);l<c.length;l++)t.indexOf(c[l])<0&&Object.prototype.propertyIsEnumerable.call(e,c[l])&&(a[c[l]]=e[c[l]])}return a},A=s.forwardRef((function(e,t){var a=s.useContext(x.b).getPrefixCls,n=Object(r.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=Object(l.a)(n,2),A=o[0],C=o[1],k=function(t,a){var c;C(t),null===(c=e.onVisibleChange)||void 0===c||c.call(e,t,a)},N=function(e){k(!1,e)},I=function(t){var a;return null===(a=e.onConfirm)||void 0===a?void 0:a.call(g,t)},B=function(t){var a;k(!1,t),null===(a=e.onCancel)||void 0===a||a.call(g,t)},E=e.prefixCls,R=e.placement,z=e.children,Q=e.overlayClassName,w=y(e,["prefixCls","placement","children","overlayClassName"]),S=a("popover",E),U=a("popconfirm",E),J=i()(U,Q),P=s.createElement(h.a,{componentName:"Popconfirm",defaultLocale:m.a.Popconfirm},(function(t){return function(t,l){var n=e.okButtonProps,i=e.cancelButtonProps,r=e.title,o=e.cancelText,d=e.okText,j=e.okType,h=e.icon;return s.createElement("div",{className:"".concat(t,"-inner-content")},s.createElement("div",{className:"".concat(t,"-message")},h,s.createElement("div",{className:"".concat(t,"-message-title")},Object(v.a)(r))),s.createElement("div",{className:"".concat(t,"-buttons")},s.createElement(b.a,Object(c.a)({onClick:B,size:"small"},i),o||l.cancelText),s.createElement(f.a,{buttonProps:Object(c.a)(Object(c.a)({size:"small"},Object(u.a)(j)),n),actionFn:I,close:N,prefixCls:a("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},d||l.okText)))}(S,t)})),W=a();return s.createElement(j.a,Object(c.a)({},w,{prefixCls:S,placement:R,onVisibleChange:function(t){e.disabled||k(t)},visible:A,overlay:P,overlayClassName:J,ref:t,transitionName:Object(O.b)(W,"zoom-big",e.transitionName)}),Object(p.a)(z,{onKeyDown:function(e){var t,a;s.isValidElement(z)&&(null===(a=null===z||void 0===z?void 0:(t=z.props).onKeyDown)||void 0===a||a.call(t,e)),function(e){e.keyCode===d.a.ESC&&A&&k(!1,e)}(e)}}))}));A.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:s.createElement(o.a,null),disabled:!1},t.a=A},612:function(e,t,a){"use strict";var c=a(514),l=(a(0),a(1));t.a=e=>Object(l.jsx)(c.a,{overlay:e.filters,placement:"bottomLeft",children:e.children})},746:function(e,t,a){"use strict";t.a="data:image/png;base64,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"},910:function(e,t,a){"use strict";a.r(t);var c=a(744),l=a(747),s=a(737),n=a(536),i=a(530),r=a(659),o=a.n(r),d=a(130),j=a(177),b=a(560),u=a(224),h=a(554),m=a(632),x=a(514),v=a(579),p=a(516),O=a(104),f=a(634),g=a(636),y=a(657),A=a.n(y),C=a(314),k=a(612),N=a(0),I=a(746),B=a(594),E=a(213),R=(a(569),a(218)),z=a(1);const{Option:Q}=d.a;t.default=()=>{const e=Object(R.useHistory)(),[t,a]=Object(N.useState)(!1),[r,d]=Object(N.useState)(!1),[y,Q]=Object(N.useState)([]),[w,S]=Object(N.useState)(!1),[U,J]=Object(N.useState)(""),P=()=>{S(!0)},W=()=>{S(!1)},[T,H]=Object(N.useState)([]),[q,X]=Object(N.useState)("all"),G=Object(z.jsx)(j.a,{mode:"horizontal",children:Object(z.jsxs)(A.a,{title:"Status",children:[Object(z.jsx)(j.a.Item,{children:Object(z.jsx)(b.a,{checked:"all"===q,onChange:()=>M("all"),children:"All"})},"status-all"),Object(z.jsx)(j.a.Item,{children:Object(z.jsx)(b.a,{checked:"active"===q,onChange:()=>M("active"),children:"Active"})},"status-active"),Object(z.jsx)(j.a.Item,{children:Object(z.jsx)(b.a,{checked:"inactive"===q,onChange:()=>M("inactive"),children:"Inactive"})},"status-inactive")]},"status")}),M=e=>{X(e),Y(U,"active"==e?1:"inactive"==e?0:"all"),console.log(`Applied status filter: ${e}`)},Y=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=`?customer_id=${localStorage.getItem("user_id")}&search=${e}`;""!==t&&"all"!=t&&(a+=`&status=${t}`);try{const e=await E.axiosInstance.get("/api/web/operational-area"+a);H(e.data.items)}catch(c){console.log(c),u.b.error("Something went wrong")}};Object(N.useEffect)((()=>{Y()}),[]);const D=[{title:"ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"area_name",key:"area_name"},{title:"Status",dataIndex:"status",key:"status",render:e=>e?Object(z.jsx)(h.a,{color:"green",children:"Active"}):Object(z.jsx)(h.a,{color:"red",children:"Inactive"})},{title:"Action",key:"action",render:(e,t)=>Object(z.jsx)(m.b,{size:"middle",children:Object(z.jsx)(x.a,{overlay:Z(t.id),placement:"bottomRight",trigger:["hover"],children:Object(z.jsx)(c.a,{})})})}],Z=t=>Object(z.jsxs)(j.a,{children:[Object(z.jsxs)(j.a.Item,{onClick:()=>{e.push(`/app/operator-master/operational-areas/edit/${t}`)},children:[Object(z.jsx)(l.a,{})," Edit"]},"edit"),Object(z.jsx)(v.a,{title:"Are you sure you want to delete this item?",description:"This action cannot be undone.",okText:"Yes",cancelText:"No",onConfirm:()=>F(t),children:Object(z.jsx)(j.a.Item,{children:Object(z.jsxs)("span",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[Object(z.jsx)(s.a,{})," Delete"]})},"delete")})]}),F=async e=>{console.log(e);try{200===(await E.axiosInstance.delete(`api/web/operational-area/${e}`)).status&&(u.b.success("Area deleted successfully"),Y())}catch(t){console.error("Error deleting row:",t)}};var V="";return Object(z.jsxs)("div",{children:[Object(z.jsxs)("h4",{children:[" ",Object(z.jsx)(n.a,{}),Object(z.jsx)("span",{style:{color:"#6a6a6a",fontWeight:"300"},children:" Operation Master "}),"/ Area  "]}),Object(z.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[Object(z.jsxs)("div",{className:"",style:{display:"flex"},children:[Object(z.jsx)(m.b,{direction:"vertical",children:Object(z.jsx)(p.a,{placeholder:"Search",allowClear:!0,value:U,onChange:e=>{J(e.target.value),clearTimeout(V),V=setTimeout((()=>{Y(e.target.value)}),500)},style:{width:200},prefix:Object(z.jsx)(i.a,{style:{marginRight:8}})})}),Object(z.jsx)(k.a,{filters:G,children:Object(z.jsx)(O.a,{icon:Object(z.jsx)(o.a,{component:C.k}),className:"d-flex align-items-center ml-2",children:"Filters"})})]}),Object(z.jsx)("div",{className:"mb-2 d-flex align-items-center",children:Object(z.jsx)(O.a,{className:"ml-3 bg-primary d-flex align-items-center rounded text-white font-weight-semibold px-4",children:Object(z.jsx)(B.Link,{to:"operational-areas/add-new",children:"+ Add New"})})})]}),Object(z.jsx)("div",{children:Object(z.jsx)(f.a,{columns:D,dataSource:T})}),Object(z.jsxs)(g.a,{visible:r,onCancel:()=>d(!1),footer:!1,children:[Object(z.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(z.jsx)("img",{style:{width:"60px"},src:I.a,alt:"..."}),Object(z.jsx)("h4",{style:{fontWeight:"300",width:"250px"},className:"text-center",children:"Are you sure you want to delete user records?"})]}),Object(z.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(z.jsx)(O.a,{className:"",onClick:()=>{d(!1)},children:"No"}),Object(z.jsx)(O.a,{className:"bg-primary text-white ml-2",onClick:()=>{d(!1),P(),setTimeout((()=>{W()}),1500)},children:"Yes"})]})]}),Object(z.jsxs)(g.a,{visible:w,onCancel:()=>S(!1),footer:!1,children:[Object(z.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(z.jsx)(C.E,{}),Object(z.jsx)("h4",{style:{fontWeight:"300",width:"250px"},className:"text-center",children:"Admin account deleted successfully!"})]}),Object(z.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(z.jsx)(O.a,{className:"bg-primary text-white ml-2",onClick:W,children:"Close"})})]})]})}}}]);
//# sourceMappingURL=46.3be69854.chunk.js.map