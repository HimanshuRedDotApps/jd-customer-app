(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[39],{551:function(e,t,s){"use strict";var a=s(321);t.a=a.a},552:function(e,t,s){"use strict";var a=s(320);t.a=a.a},570:function(e,t,s){"use strict";var a=s(2),n=s(3),c=s(0),r=s(6),i=s.n(r),o=s(52),l=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]])}return s};t.a=function(e){return c.createElement(o.a,null,(function(t){var s,r=t.getPrefixCls,o=t.direction,d=e.prefixCls,m=e.type,u=void 0===m?"horizontal":m,h=e.orientation,j=void 0===h?"center":h,b=e.className,g=e.children,p=e.dashed,x=e.plain,O=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=r("divider",d),v=j.length>0?"-".concat(j):j,w=!!g,y=i()(f,"".concat(f,"-").concat(u),(s={},Object(n.a)(s,"".concat(f,"-with-text"),w),Object(n.a)(s,"".concat(f,"-with-text").concat(v),w),Object(n.a)(s,"".concat(f,"-dashed"),!!p),Object(n.a)(s,"".concat(f,"-plain"),!!x),Object(n.a)(s,"".concat(f,"-rtl"),"rtl"===o),s),b);return c.createElement("div",Object(a.a)({className:y},O,{role:"separator"}),g&&c.createElement("span",{className:"".concat(f,"-inner-text")},g))}))}},736:function(e,t,s){"use strict";var a=s(239),n=s.n(a),c=s(11),r=s(751).a(),i=s(31),o=s(225);const l=n.a.create({baseURL:c.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((e=>{const t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(r.push(d),window.location.reload()),e}),(e=>{o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((e=>e.data),(e=>{let t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),r.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var m=l;const u={login:function(e){return m({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return m({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=u},743:function(e,t,s){"use strict";var a=s(2),n=s(4),c=s(3),r=s(12),i=s(0),o=s(6),l=s.n(o),d=s(36),m=s(142),u=s(66),h=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],j=i.forwardRef((function(e,t){var s=e.className,o=e.component,j=e.viewBox,b=e.spin,g=e.rotate,p=e.tabIndex,x=e.onClick,O=e.children,f=Object(r.a)(e,h),v=i.useRef(),w=Object(d.d)(v,t);Object(u.g)(Boolean(o||O),"Should have `component` prop or `children`."),Object(u.f)(v);var y=i.useContext(m.a),N=y.prefixCls,k=void 0===N?"anticon":N,C=y.rootClassName,I=l()(C,k,s),P=l()(Object(c.a)({},"".concat(k,"-spin"),!!b)),E=g?{msTransform:"rotate(".concat(g,"deg)"),transform:"rotate(".concat(g,"deg)")}:void 0,S=Object(n.a)(Object(n.a)({},u.e),{},{className:P,style:E,viewBox:j});j||delete S.viewBox;var B=p;return void 0===B&&x&&(B=-1),i.createElement("span",Object(a.a)({role:"img"},f,{ref:w,tabIndex:B,onClick:x,className:I}),o?i.createElement(o,S,O):O?(Object(u.g)(Boolean(j)||1===i.Children.count(O)&&i.isValidElement(O)&&"use"===i.Children.only(O).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),i.createElement("svg",Object(a.a)({},S,{viewBox:j}),O)):null)}));j.displayName="AntdIcon",t.a=j},755:function(e,t,s){"use strict";var a=s(0),n=s.n(a),c=s(37),r=s(570),i=s(104),o=s(592),l=s(635),d=s(516),m=s(896),u=s(314),h=s(743),j=s(1);var b=n.a.forwardRef(((e,t)=>Object(j.jsx)(h.a,{component:e.svg,className:e.className}))),g=s(54),p=s(736),x=s(39),O=s(754);const f=e=>{let t=Object(x.useHistory)();const{otherSignIn:s,showForgetPassword:n,hideAuthMessage:c,onForgetPasswordClick:h,showLoading:g,extra:f,loading:v,showMessage:w,message:y,authenticated:N,showAuthMessage:k,token:C,redirect:I,allowRedirect:P}=e;Object(a.useEffect)((()=>{null!==C&&P&&t.push(I),w&&setTimeout((()=>{c()}),3e3)}));const E=Object(j.jsxs)("div",{children:[Object(j.jsx)(r.a,{children:Object(j.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)(i.a,{onClick:()=>{g()},className:"mr-2",disabled:v,icon:Object(j.jsx)(b,{svg:u.l}),children:"Google"}),Object(j.jsx)(i.a,{onClick:()=>{g()},icon:Object(j.jsx)(b,{svg:u.j}),disabled:v,children:"Facebook"})]})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:Object(j.jsx)(o.a,{type:"error",showIcon:!0,message:y})}),Object(j.jsxs)(l.a,{layout:"vertical",name:"login-form",onFinish:e=>{g();p.a.login(e).then((e=>{N("fakeToken")})).then((e=>{k(e)}))},children:[Object(j.jsx)(l.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(j.jsx)(d.a,{prefix:Object(j.jsx)(m.a,{className:"text-primary"})})}),Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(i.a,{type:"primary",htmlType:"submit",block:!0,loading:v,children:"Sign In"})}),s?E:null,f]})]})};f.defaultProps={otherSignIn:!0,showForgetPassword:!1};const v={showAuthMessage:g.c,showLoading:g.d,hideAuthMessage:g.b,authenticated:g.a};t.a=Object(c.b)((e=>{let{auth:t}=e;const{loading:s,message:a,showMessage:n,token:c,redirect:r}=t;return{loading:s,message:a,showMessage:n,token:c,redirect:r}}),v)(f)},923:function(e,t,s){"use strict";s.r(t);s(0);var a=s(755),n=s(551),c=s(552),r=s(37),i=s(1);const o={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=e=>{const t=Object(r.c)((e=>e.theme.currentTheme));return Object(i.jsx)("div",{className:"h-100 "+("light"===t?"bg-white":""),children:Object(i.jsxs)(n.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(i.jsx)(c.a,{xs:20,sm:20,md:24,lg:16,children:Object(i.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(i.jsx)(n.a,{justify:"center",children:Object(i.jsxs)(c.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(i.jsx)("h1",{children:"Sign In"}),Object(i.jsxs)("p",{children:["Don't have an account yet? ",Object(i.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(a.a,{...e})})]})})})}),Object(i.jsx)(c.a,{xs:0,sm:0,md:0,lg:8,children:Object(i.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:o,children:[Object(i.jsx)("div",{className:"text-right",children:Object(i.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(i.jsx)(n.a,{justify:"center",children:Object(i.jsxs)(c.a,{xs:0,sm:0,md:0,lg:20,children:[Object(i.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(i.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(i.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(i.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(i.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(i.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=39.e4ef4326.chunk.js.map