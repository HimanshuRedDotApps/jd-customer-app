(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[45],{572:function(e,t,a){"use strict";var c=a(2),n=a(5),s=a(0),l=a(6),i=a.n(l),r=a(44),o=a(214),d=a(30),j=a(211),b=a(102),h=a(212),u=a(129),m=a(75),x=a(52),p=a(554),v=a(24),O=a(101),f=a(562),g=void 0,y=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},A=s.forwardRef((function(e,t){var a=s.useContext(x.b).getPrefixCls,l=Object(r.a)(!1,{value:e.visible,defaultValue:e.defaultVisible}),o=Object(n.a)(l,2),A=o[0],C=o[1],k=function(t,a){var c;C(t),null===(c=e.onVisibleChange)||void 0===c||c.call(e,t,a)},N=function(e){k(!1,e)},I=function(t){var a;return null===(a=e.onConfirm)||void 0===a?void 0:a.call(g,t)},B=function(t){var a;k(!1,t),null===(a=e.onCancel)||void 0===a||a.call(g,t)},R=e.prefixCls,E=e.placement,z=e.children,Q=e.overlayClassName,w=y(e,["prefixCls","placement","children","overlayClassName"]),S=a("popover",R),U=a("popconfirm",R),J=i()(U,Q),P=s.createElement(u.a,{componentName:"Popconfirm",defaultLocale:m.a.Popconfirm},(function(t){return function(t,n){var l=e.okButtonProps,i=e.cancelButtonProps,r=e.title,o=e.cancelText,d=e.okText,j=e.okType,u=e.icon;return s.createElement("div",{className:"".concat(t,"-inner-content")},s.createElement("div",{className:"".concat(t,"-message")},u,s.createElement("div",{className:"".concat(t,"-message-title")},Object(p.a)(r))),s.createElement("div",{className:"".concat(t,"-buttons")},s.createElement(b.a,Object(c.a)({onClick:B,size:"small"},i),o||n.cancelText),s.createElement(f.a,{buttonProps:Object(c.a)(Object(c.a)({size:"small"},Object(h.a)(j)),l),actionFn:I,close:N,prefixCls:a("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},d||n.okText)))}(S,t)})),W=a();return s.createElement(j.a,Object(c.a)({},w,{prefixCls:S,placement:E,onVisibleChange:function(t){e.disabled||k(t)},visible:A,overlay:P,overlayClassName:J,ref:t,transitionName:Object(O.b)(W,"zoom-big",e.transitionName)}),Object(v.a)(z,{onKeyDown:function(e){var t,a;s.isValidElement(z)&&(null===(a=null===z||void 0===z?void 0:(t=z.props).onKeyDown)||void 0===a||a.call(t,e)),function(e){e.keyCode===d.a.ESC&&A&&k(!1,e)}(e)}}))}));A.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:s.createElement(o.a,null),disabled:!1},t.a=A},614:function(e,t,a){"use strict";var c=a(513),n=(a(0),a(1));t.a=e=>Object(n.jsx)(c.a,{overlay:e.filters,placement:"bottomLeft",children:e.children})},745:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABZCAYAAAC6yeORAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5SSURBVHgB7VwHjB3FGf7mvevF12yffcZ3GFwwNg4xLYgWx0AiiCNCRBEBJDokwQkhQQ4kIJFCNUSAiCghEEUkgigREhCBUygiShxTDhsjikxkYTvgBudy98ru5N8+szuzu+/u3XsP6X3W886/szvlm3+/+Wd2dUAdddRRRx111FFHHTUIhs8I+DCm50x0NWeRJfMjtgS78RlATRP8ycvo6erBFdzA+dTSReBuBrebvZ5x9ltw83G2FFtRo6hZgsljv0E8PkDJvuAkHHJdorl9ZJszjP2Ufd54GDWIDGoQxjCuJx7/CBW5numQa50fNA3+kPGfzPWoQdScB5PnXkI8yt4oSgN3Tc+ThbyMyb7Cjik+hxpCTRHM38EsnscrRNqQnIEQuQi8mUv2zkzOmMdOqJ0JsLYkYgzXaMlV2b4H+3YfmhpuRA2hZjw49xYWNRpYR8kW/2Sgs473hmwpH941bCSbzRzHjspvQA2gZjyYyL0dEXIRkBs+r7jOGQBMKRbMX6JGUBME8/U4kw6nRTNSS4PkzfT/8uK/s6ejBlB1ieBPIMsX4H1qyYHBSUhkxkqDHxOzkNez/2a3FOays2Ggiqi+Bx+CH0TIFdKSNPgGk65TkGulDjRnNXwXVUZVPZhvxExexDuU7AxOIrpa42opCPQ5GhPbaYad+Xzh8LZl+BBVQlU92Czi51CR65kxOusPQMibxcGBib6mhsZVqCKq5sH8VRxhNmKd34Dwai3sjZG0VhqkxQcditzgxzYtK6xDFVAVD7Yn+ibcFRldcbXm2cJNipAsyItc55PdwDK4k/PqOFN1JGI9zqcOn+jbIWlIDMng2irdVQ0CZyflXmiuSthW8VGlzZx2GtaN1PlB5wRiQ7JikWHtOzPwz7dnYv9oI0y6oKMlj6Pmf4wTFv0PLDQpCtIgSQVhS0NjbiE7HntQQTSgwjA5VjGRXA+KkGzbrjbc8eQReP39aWRydwC4nX7qX4NYNLQTN537BmZ0jwX3IURu4Pmz8vmm7wD5W1BBVNSD+VrM5i34gJJZ5wSi3uva+UIWF69eji07OmxSrQtscr2fax88YwT3XbEWnS1FtxwmSINcPkUV+xs4W8hOGduMCqGyGtxqh2V6cgWd/d3fFvjkWj+TXN+006ZzznTS721tx5OvzHbvY6GnIKTjjLUZzN7zqBgqRjDfgGXEywWOIWZAuVr762uzAzLto/OzSDY923TIf3rtTMRIA8T4mW45Z98zbUeiQqgIwfZ+g4k75ZOaDXQ43rx1Z6vrtWYgCyaXiHbOmaTVzXQt00cYocVIU5N5PyqEihBszsdVdFhqGylCMkb/shkj5Lmy13rnPNlgjEtlyOW7SS/C4LRb/HzLpagAJp1g2orsZ4w2dGxDzIjqrgPH2zpbc4H+ho7hX0drPhySRaSCh2JkeuX/M/7n7m5MMirhwSupj0ORpbCXq/G23s5R12NNtScLv2lTcm4BmsUIojYR3p9vzv8Qk4xJJXhsPQ6mjlzrnyhhtTarb6+gs+JE50QUoj27b1QhDSwiDeG6SVauHv1Ly4GYREwqwU0m7qZDc1JI5kCemHo6coLOChOd58lu2GblTe3MKQbLNUPSEBqEzgZk7sMkYtII5m/iDOJsRZqQLEoKw5S2vKSzQUQhRhWO3dlWDJUT2pGL2dKk20/f+3T7yZgkTB7BwOrA0IdkaqkAum2Cw3GwuNgw/dXclNaCXnd1W5qubQ1mE3A/fwCNmARMCsEUOVivag5Skon4XTJvA72nMy+v3CJabPp2H10rlmEnI3Kgqcu5dl5hoO1yTALKTjB/DQPU/p+oQzIgbgEgbqDPnrrfloBI1OBrrysZZA9NzUnl6aUBcbJ0/WSEbeX34EasAnc/2pvABroVenlea0rhGY+EbdO787IUCHUHdUWlQW4HGyhki7eizCgrwblhLKb+fyudzsZHEZ2tBoVR8qQmeq13zrqmi65NCsnEurmubhPfzD3VvgRlRFkJbmS4ixqaFclLE5JxhfdlmbOxHmivEKIhSA9052hZ7ZUjlgGFBosTbVCXkEfbd+yOcr5eKhvBxfU4m1p4im34nuIiXvu0j3JvRz60agvCM28R0t9T0BIWsZXeHUpzdmruT50rUCaUhWD+HpozprvPqns8PRvqBYEqPdA7GpKF8GRnOiGad0tC3UppCNn2U8BwC3+2dwrKgPJ48Kgdlg3FrtY8W5SGhJi1vycvxL+mu0QW5ILs3o6iRhrU4V+cpwuRzqG50cJlKAMmTLD9dQ7HzcEJjTSk+9wpsOl6yzvDEhEO27rbC+496UOyaJ7C863dtt+3zsYEMWGCzQJug73fkLRaU6QBTcedsgb68qEtSjkOts7N6i1gHCFZpG7FwqQll226CRPEhAjmb+BoauoF412t6R9Xp8NDU8cica8UTdBvVl8htm6e4nsKrpMp8Ityf+hYjAlgYgQz3BsYCHRXJQ0xIZlYhvjisrej4EcMprSbFnh1d5sJ7eMPQKvxmrrl+1iGZzITer00boJpv+FiOhyddgPdNiN5UU/nQhmdbfKeg7+iEyKKvg4jWp5rc54csXBtnrf4YCfknuw6C+PEuAi2JjaK9n9c0mpN6d1A3OTT3WYovVZczfW0G+WXBinSsb8CvY8/0dOFcWB8HpzHleQdc7wWpFqtpdhGlJ8C2kZsIAJJJhxCQ5s+9K+v00Bzg8BEuC6uqMu1eahuQGEHjjF9rMi/j3GgZIL5MOZQ/T/yGiCRoulQmpCMS2UEBB02NBrargwKntNfjNanekLi8mImZOdSp2xaua/c9VjLIErEeDz4F9ShRr8BSsKEdKIcxE+KX1qy19dfLhUAXHjSCGJXa5oniyeRLvXNP93d0tBa8ldBJRFMYdmXqQPnSI1Ju1rTPq6ap8C1zztxBBcv/xQZJpO76uu7seLI/UI7FHUhRhq8tiDaFw4oB4eacM6ex6YuQwlgpVxsDmMjNWqhpLs68niMNHDIuqvzZuFr93e3NGHNcBvtsgHHHTKKwwbz6vrEuhR1c1VdIZuLfQm1hf5/u+WC3YciJVITbLyBq+lF9z1KaeBROzIAqpBMNTiKweIxhAWk6AnzyuNaZ9CQK9Yl2shc1HrhzkeRAqkI5hvQyw32FhU+wyePJ0gDj/du7UyuGKgPPp6CNesHsGOkCUWDlsc9+3Digh2Y1783Sq5YV5hcsfxxe7d97bbWjsJh7Mw9O5GAdB9gFzPXUdEzJM/0GodQg4CSVmsIlyd0fO9YI+59bhFeensGRkkRTNOAYYVrdPz1P2bha0u34crlm9HVYqgHMmxzRVsSY3UWaRf9Zo6ONN5AqcTQLdGDaWKbT6O2gQptTCcN+ryINGgeZW8gr3v8C3j1gz4i1ooiiFzDsMk1BPuQmXvw4CXvoq3RnHRpCPVtf8HIfq7r0u3vIwYpogi22iJXqjSoBDrvk71Il6f3tgf/fqiGXMO3LY/esLkZj744TS5PJQ2h8qUnDqr2JoZ/bQ0Z81dIQCzB/HWcRWV91U6neJxiV2uuLUmDZkA+2deEp9YNRsk1HII9ck3D8eZHXuxBrpBJqEsTkmn6ktRGK01h28l7H+5bjhhoCaaKM5yxW73HFQkxZuJqjcd8gS6UZ9W1cUs39uVczQ2Ra5MukGvl7RvlWLepNVq39ilL0tn0fWO0o8jvmdsMDfQePIxvU2EHBbUIebpRBvQdku6L79D2T5vtvQeDdlk8WTC44eymed5r70l4pBvYvCMbIgWx3qfUXc8WruMJkyKjdcFo2ydXQwMlwfxZNNPjfrPf0JJXa4h0SCkNgJKUbMa0iXNI9rzW9VzBi32pILs5a/oExa7WvJAMQJIcJMuZ/9Rds/22qZ1QQO3BAziPbuwuWRo0HdJKA5ca6Zc/t3+PEC2Yvpfa3stNQToc4q38Y+eNIVUIBuifpBRziFy+P1ADrd1QvupXEky+cAwPFSQ3FCFSIHlHEplJHVpAodf8mZ/aEhGe0OyjEXi39VsymMPMbmfjnSd4W7mkIbwSpdzjoYCSYGayxeMjLJrmKbxD9bnTtadZ4aURmdBE6bB+7c0Gbj93VwppEJoX4zTOAJQ+KdI9yv0JtQYD7RMKyURpkMpAZEB03zQsPmAfbjxjE1oaChK5pjfp0c/6fu2hS3Zg/oxiqC61Y/DUhCHFIAj9hh2ydUAB5VKZQo+tJHWHC2eg1V2F9yk30P08ICmK8NIrlu7E4UN7cPcz/Xh1UzO27Wa25lovQ7+4cD8uWzaCudPFd3KhulJ6X6RvKKVv/nEbFFASTJUMw/orUHEjCSSOclKHfC2EokPuPQf0FrD6/A8xlmdEcIO9XWm96Gxv4n55PEUbOULnFe0vebNecDx62fImFFBKRMYwnx+XNLi2UhqAqDREBkTukBj+tdBOyJxpRQz2FUl3FeRqvE2ua+LSIPVbQAOD8m9mqie5o/ACteqtsq7WhA7qJz7EdxYxdVdPGiy80nrl9peggHYll8nwq+JHNvlxUnbQLyN+sJJnciSv1iDIkM77OMBTREs6aWDWp4+Mr4QGWoLZEXiZdiNWcu4NXKiRzkm5oeJ5DZlc4x3ifTxNWBRDWHQDXdEubV4Jnk9vY02euaH9ih2vQYPY3bTskea9Wca/Z/3BzThvS5YGrz1QdEhO++WorvM6GKobsXXHE8Y1EYxYBlflAblMll3WcdVHdyMGifvB7GjznqJRXEqp31AFeyfaocTlZ6L0aDxTKsM7FVMXkG61hnBfLK/lD+xv5Ae1Xr79ESSAoQTwNegy2rOn0svPgynOb4HpjI/p/+fCT2eCdFK+e96Urslo7hPyNWU7bdLnpy2bwm4rQjDpVeAoUbspX8CavpW7RlBHHXXUUUcdddRRRx111FFHHXWMB/8HQi4UnYvFM9oAAAAASUVORK5CYII="},910:function(e,t,a){"use strict";a.r(t);var c=a(743),n=a(746),s=a(739),l=a(535),i=a(529),r=a(656),o=a.n(r),d=a(130),j=a(227),b=a(553),h=a(623),u=a(513),m=a(177),x=a(572),p=a(557),v=a(515),O=a(102),f=a(625),g=a(588),y=a(657),A=a.n(y),C=a(313),k=a(614),N=a(0),I=a(745),B=a(593),R=a(215),E=a(570),z=a.n(E),Q=a(219),w=a(1);const{Option:S}=d.a;t.default=()=>{const e=Object(Q.useHistory)(),[t,a]=Object(N.useState)(!1),[r,d]=Object(N.useState)(!1),[y,E]=Object(N.useState)(!1),[S,U]=Object(N.useState)(""),[J,P]=Object(N.useState)([]),W=()=>{E(!0)},T=()=>{E(!1)},[H,q]=Object(N.useState)([]),Y=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=`?search=${e}`;""!==t&&"all"!=t&&(a+=`&status=${t}`);try{const e=await R.axiosInstance.get(`/api/web/jobsites${a}`);q(e.data.items)}catch(c){console.log(c),j.b.error("Something went wrong")}};Object(N.useEffect)((()=>{Y()}),[]);const M=[{title:"ID",dataIndex:"id",key:"id"},{title:"Jobsite Name",dataIndex:"jobsite_name",key:"jobsite_name"},{title:"Area",dataIndex:"operational_area",key:"operational_area",render:(e,t)=>Object(w.jsx)("span",{children:t.operational_area.area_name})},{title:"Mobile Number",dataIndex:"phone_no",key:"phone_no",render:(e,t)=>Object(w.jsx)("span",{children:t.phone_code+" "+t.phone_no})},{title:"Created On",dataIndex:"created_at",key:"created_at",render:e=>z()(e).format("DD-MM-YYYY")},{title:"Status",dataIndex:"status",key:"status",render:e=>e?Object(w.jsx)(b.a,{color:"green",children:"Active"}):Object(w.jsx)(b.a,{color:"red",children:"Inactive"})},{title:"Action",key:"action",render:(e,t)=>Object(w.jsx)(h.b,{size:"middle",children:Object(w.jsx)(u.a,{overlay:X(t.id),placement:"bottomRight",trigger:["hover"],children:Object(w.jsx)(c.a,{})})})}],X=t=>Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(m.a.Item,{onClick:()=>{e.push(`/app/operator-master/jobsites/edit/${t}`)},children:[Object(w.jsx)(n.a,{})," Edit"]},"edit"),Object(w.jsx)(x.a,{title:"Are you sure you want to delete this item?",description:"This action cannot be undone.",okText:"Yes",cancelText:"No",onConfirm:()=>D(t),children:Object(w.jsx)(m.a.Item,{children:Object(w.jsxs)("span",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[Object(w.jsx)(s.a,{})," Delete"]})},"delete")})]}),D=async e=>{console.log(e);try{200===(await R.axiosInstance.delete(`api/web/jobsites/${e}`)).status&&(j.b.success("Area deleted successfully"),Y())}catch(t){console.error("Error deleting row:",t)}};var G="";const[Z,F]=Object(N.useState)("all"),[V,K]=Object(N.useState)("all"),L=e=>{F(e),Y(S,"active"==e?1:"inactive"==e?0:"all",V),console.log(`Applied status filter: ${e}`)},_=Object(w.jsx)(m.a,{mode:"horizontal",children:Object(w.jsxs)(A.a,{title:"Status",children:[Object(w.jsx)(m.a.Item,{children:Object(w.jsx)(p.a,{checked:"all"===Z,onChange:()=>L("all"),children:"All"})},"status-all"),Object(w.jsx)(m.a.Item,{children:Object(w.jsx)(p.a,{checked:"active"===Z,onChange:()=>L("active"),children:"Active"})},"status-active"),Object(w.jsx)(m.a.Item,{children:Object(w.jsx)(p.a,{checked:"inactive"===Z,onChange:()=>L("inactive"),children:"Inactive"})},"status-inactive")]},"status")});return Object(w.jsxs)("div",{children:[Object(w.jsxs)("h4",{children:[" ",Object(w.jsx)(l.a,{}),Object(w.jsx)("span",{style:{color:"#6a6a6a",fontWeight:"300"},children:" Operational Master "}),"/ Jobsites  "]}),Object(w.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[Object(w.jsxs)("div",{className:"",style:{display:"flex"},children:[Object(w.jsx)(h.b,{direction:"vertical",children:Object(w.jsx)(v.a,{placeholder:"Search",allowClear:!0,value:S,onChange:e=>{U(e.target.value),clearTimeout(G),G=setTimeout((()=>{Y(e.target.value,Z)}),500)},style:{width:200},prefix:Object(w.jsx)(i.a,{style:{marginRight:8}})})}),Object(w.jsx)(k.a,{filters:_,children:Object(w.jsx)(O.a,{icon:Object(w.jsx)(o.a,{component:C.k}),className:"d-flex align-items-center ml-2",children:"Filters"})})]}),Object(w.jsx)("div",{className:"mb-2 d-flex align-items-center",children:Object(w.jsx)(O.a,{className:"ml-3 bg-primary d-flex align-items-center rounded text-white font-weight-semibold px-4",children:Object(w.jsx)(B.Link,{to:"jobsites/add-new",children:"+ Add New"})})})]}),Object(w.jsx)("div",{children:Object(w.jsx)(f.a,{columns:M,dataSource:H})}),Object(w.jsxs)(g.a,{visible:r,onCancel:()=>d(!1),footer:!1,children:[Object(w.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(w.jsx)("img",{style:{width:"60px"},src:I.a,alt:"..."}),Object(w.jsx)("h4",{style:{fontWeight:"300",width:"250px"},className:"text-center",children:"Are you sure you want to delete user records?"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)(O.a,{className:"",onClick:()=>{d(!1)},children:"No"}),Object(w.jsx)(O.a,{className:"bg-primary text-white ml-2",onClick:()=>{d(!1),W(),setTimeout((()=>{T()}),1500)},children:"Yes"})]})]}),Object(w.jsxs)(g.a,{visible:y,onCancel:()=>E(!1),footer:!1,children:[Object(w.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(w.jsx)(C.D,{}),Object(w.jsx)("h4",{style:{fontWeight:"300",width:"250px"},className:"text-center",children:"Admin account deleted successfully!"})]}),Object(w.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(w.jsx)(O.a,{className:"bg-primary text-white ml-2",onClick:T,children:"Close"})})]})]})}}}]);
//# sourceMappingURL=45.5b3525c0.chunk.js.map