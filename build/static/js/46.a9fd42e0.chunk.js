(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[46,49],{651:function(e,t,s){"use strict";var a=s(240),r=s.n(a),n=s(11),o=s(745).a(),i=s(31),c=s(228);const l=r.a.create({baseURL:n.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((e=>{const t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(o.push(d),window.location.reload()),e}),(e=>{c.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((e=>e.data),(e=>{let t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),o.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),c.a.error(t),Promise.reject(e)}));var m=l;const h={login:function(e){return m({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return m({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},749:function(e,t,s){"use strict";var a=s(0),r=s.n(a),n=s(37),o=s(568),i=s(102),c=s(593),l=s(623),d=s(515),m=s(892),h=s(313),u=s(673),g=s(1);var b=r.a.forwardRef(((e,t)=>Object(g.jsx)(u.a,{component:e.svg,className:e.className}))),j=s(54),p=s(651),x=s(39),O=s(748);const w=e=>{let t=Object(x.useHistory)();const{otherSignIn:s,showForgetPassword:r,hideAuthMessage:n,onForgetPasswordClick:u,showLoading:j,extra:w,loading:f,showMessage:v,message:y,authenticated:k,showAuthMessage:N,token:S,redirect:I,allowRedirect:T}=e;Object(a.useEffect)((()=>{null!==S&&T&&t.push(I),v&&setTimeout((()=>{n()}),3e3)}));const C=Object(g.jsxs)("div",{children:[Object(g.jsx)(o.a,{children:Object(g.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(g.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(g.jsx)(i.a,{onClick:()=>{j()},className:"mr-2",disabled:f,icon:Object(g.jsx)(b,{svg:h.l}),children:"Google"}),Object(g.jsx)(i.a,{onClick:()=>{j()},icon:Object(g.jsx)(b,{svg:h.j}),disabled:f,children:"Facebook"})]})]});return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:v?1:0,marginBottom:v?20:0},children:Object(g.jsx)(c.a,{type:"error",showIcon:!0,message:y})}),Object(g.jsxs)(l.a,{layout:"vertical",name:"login-form",onFinish:e=>{j();p.a.login(e).then((e=>{k("fakeToken")})).then((e=>{N(e)}))},children:[Object(g.jsx)(l.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(g.jsx)(d.a,{prefix:Object(g.jsx)(m.a,{className:"text-primary"})})}),Object(g.jsx)(l.a.Item,{children:Object(g.jsx)(i.a,{type:"primary",htmlType:"submit",block:!0,loading:f,children:"Sign In"})}),s?C:null,w]})]})};w.defaultProps={otherSignIn:!0,showForgetPassword:!1};const f={showAuthMessage:j.c,showLoading:j.d,hideAuthMessage:j.b,authenticated:j.a};t.a=Object(n.b)((e=>{let{auth:t}=e;const{loading:s,message:a,showMessage:r,token:n,redirect:o}=t;return{loading:s,message:a,showMessage:r,token:n,redirect:o}}),f)(w)},797:function(e,t,s){"use strict";s.r(t);var a=s(0),r=(s(749),s(130)),n=s(227),o=s(515),i=s(102),c=s(37),l=s.p+"static/media/Logo.395390b5.svg",d=s(760),m=s(313),h=s(790),u=s.n(h),g=(s(793),s(794),s(795)),b=s.n(g),j=s(214),p=s(796);s(798);var x={apiKey:"AIzaSyBW4y5A8HAiboG6UJjtlj9sMUc0Zuh-Ns0",authDomain:"jdworks-49200.firebaseapp.com",projectId:"jdworks-49200",storageBucket:"jdworks-49200.firebasestorage.app",messagingSenderId:"997372637377",appId:"1:997372637377:web:cf324cadf69546016de440",measurementId:"G-QVDVQPRZLT"};const O=Object(p.a)(x),w=Object(d.b)(O);var f=s(572),v=s(1);const y={backgroundImage:"url(/img/others/wave.svg)",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"top",backgroundColor:"white"},k={position:"absolute",top:"1rem",left:"1rem"},{Option:N}=r.a;t.default=e=>{Object(c.c)((e=>e.theme.currentTheme));const[t,s]=Object(a.useState)(1),[h,g]=Object(a.useState)(""),[p,x]=Object(a.useState)("+65"),O=Object(f.useHistory)(),[S,I]=Object(a.useState)("");Object(a.useEffect)((()=>{localStorage.getItem("token")&&O.push("/app")}));const T=Object(v.jsxs)(r.a,{onChange:e=>{x(e)},value:p,style:{width:80},children:[Object(v.jsx)(N,{value:"+91",children:"IND"}),Object(v.jsx)(N,{value:"+65",children:"SG"})]});const C=async()=>{if(I(""),h.length<8)n.b.error("Please enter a valid phone number");else try{const e=await j.axiosInstance.post("/api/firebase/auth/check-phone",{phoneNumber:p+h});console.log(e.data),0==e.data.item.exists?n.b.error(e.data.message):(document.getElementById("recaptcha-container")?window.recaptchaVerifier||(window.recaptchaVerifier=new d.a(w,"recaptcha-container",{size:"invisible",callback:e=>{console.log("recaptcha resolved")}})):console.error("Error: recaptcha-container element not found!"),(async()=>{const e=await window.recaptchaVerifier,t=`${p}${h}`;Object(d.c)(w,t,e).then((e=>{window.confirmationResult=e,console.log("confirmationResult",e),s(2)})).catch((e=>{console.log("error",e),e&&n.b.error("Invalid number entered ! please confirm country code and registered number")}))})())}catch(e){console.log(e),n.b.error("Something went wrong. Please try again later")}},P=()=>{S.length<6?n.b.error("Please enter a valid OTP"):window.confirmationResult.confirm(S).then((e=>{(async e=>{try{var t;const a=await j.axiosInstance.post("/api/web/auth/login",{uid:e});var s;console.log(a.data),(null===(t=a.data.item.token)||void 0===t?void 0:t.token)?(n.b.success("Logged in successfully"),localStorage.setItem("token",null===(s=a.data.item.token)||void 0===s?void 0:s.token),window.location.reload()):n.b.error(a.data.message)}catch(a){console.log(a),n.b.error("Something went wrong. Please try again later")}})(e.user.uid)})).catch((e=>{n.b.error("Invalid OTP entered")}))};return Object(v.jsxs)("div",{className:"h-100",style:y,children:[Object(v.jsx)("div",{id:"recaptcha-container"}),Object(v.jsxs)("div",{style:k,children:[" ",Object(v.jsx)("img",{src:l,alt:"..."})]}),Object(v.jsxs)("div",{className:"row d-flex h-100",style:{paddingTop:"110px"},children:[Object(v.jsx)("div",{style:{marginTop:"80px",width:"50%"},className:"d-flex flex-column justify-content-start align-items-center",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"d-flex justify-content-center mb-4",children:Object(v.jsx)(m.u,{})}),Object(v.jsx)("h2",{className:"text-center mt-2",children:1===t?"LOGIN":"Enter OTP"}),Object(v.jsxs)("p",{className:"text-center",children:[" ",1===t?"Please enter your phone number below to get started.":`Please enter 4 digit OTP sent to ${p} ${h} below.`]}),1===t&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{style:{marginTop:"2.7rem"},className:"font-bolder ",children:"Phone Number"}),Object(v.jsx)(o.a,{addonBefore:T,onChange:e=>g(e.target.value),value:h}),Object(v.jsx)(i.a,{style:{backgroundColor:"#3CA6C1",color:"white",marginTop:"4rem",marginBottom:"1.9rem"},className:"w-100",onClick:C,children:"Continue"})]}),2===t&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{style:{marginTop:"2.7rem"},className:"font-bolder ",children:"OTP Verification"}),Object(v.jsx)(b.a,{className:"OtpInput",value:S,onChange:e=>I(e),autoFocus:!0,OTPLength:6,isNumberInput:!0,shouldAutoFocus:!0,isInputNum:!0,inputStyle:{border:"1px solid #ccc",borderRadius:"4px",padding:"0.5rem",boxShadow:"0 0 5px rgba(0, 0, 0, 0.2)",outline:"none"},containerStyle:{justifyContent:"space-between"},inputContainerStyle:{margin:"0 0.5rem"},inputClassName:"custom-otp-input",disabled:!1,hasErrored:!1,errorStyle:{borderColor:"red"},focusStyle:{borderColor:"blue"},onComplete:e=>P()}),Object(v.jsxs)("p",{className:"text-center mt-2",children:["Don't receive OTP? ",Object(v.jsx)("span",{style:{color:"#3CA6C1",cursor:"pointer"},className:"text-center",onClick:()=>{C()},children:"Request Again"})]}),Object(v.jsx)(i.a,{style:{backgroundColor:"#3CA6C1",color:"white",marginTop:"4rem",marginBottom:"1.9rem"},className:"w-100",onClick:()=>P(),children:"Submit"})]}),Object(v.jsx)("p",{className:"text-center",children:"By continuing, you agree to the JD Works Terms & Services"}),Object(v.jsx)("a",{className:"text-center d-block w-100",href:"#",children:"Terms & Services"})]})}),Object(v.jsx)("div",{style:{width:"50%"},className:"loginRightSlider",children:Object(v.jsx)("div",{children:Object(v.jsxs)(u.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,children:[Object(v.jsx)("div",{children:Object(v.jsxs)("div",{style:{backgroundImage:"url(/img/others/Rectanglepurple.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"5rem",backgroundPosition:"center"},children:[Object(v.jsx)("h2",{className:"text-white mt-2",style:{textTransform:"uppercase",fontSize:"1.6rem"},children:"Machine conditions monitoring get easy"}),Object(v.jsx)("p",{className:"text-white mb-5",style:{fontSize:"1rem",width:"80%",lineHeight:"18px",fontWeight:"100"},children:"Enhancing productivity and efficiency with smart mobile applications"}),Object(v.jsx)("img",{style:{width:"65%",margin:"auto"},src:"/img/others/machinefirst.svg",alt:"..."})]})}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{style:{backgroundImage:"url(/img/others/Rectanglegreen.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"5rem",backgroundPosition:"center"},children:[Object(v.jsx)("h2",{className:"text-white mt-2",style:{textTransform:"uppercase",fontSize:"1.6rem",width:"80%"},children:"Get ON-SITE MAINTENANCE SERVICES"}),Object(v.jsx)("p",{className:"text-white mb-5",style:{fontSize:"1rem",width:"70%",lineHeight:"18px",fontWeight:"100"},children:"Our expert team deliver best on site maintenance services "}),Object(v.jsx)("img",{style:{width:"65%",margin:"auto"},src:"/img/others/machinetwo.svg",alt:"..."})]})}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{style:{backgroundImage:"url(/img/others/Rectangleorange.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",padding:"5rem",height:"100%"},children:[Object(v.jsx)("h2",{className:"text-white mt-2",style:{textTransform:"uppercase",fontSize:"1.6rem",width:"80%"},children:"Get INSTANT QUOTATION ON INQURIY"}),Object(v.jsx)("p",{className:"text-white mb-5",style:{fontSize:"1rem",width:"70%",lineHeight:"18px",fontWeight:"100"},children:"Generate quick quotation for your problems you inquire."}),Object(v.jsx)("img",{style:{width:"65%",margin:"auto"},src:"/img/others/machinethree.svg",alt:"..."})]})})]})})})]})]})}},916:function(e,t,s){"use strict";s.r(t);s(0);var a=s(797),r=s(1);t.default=()=>Object(r.jsx)(a.default,{allowRedirect:!0})}}]);
//# sourceMappingURL=46.a9fd42e0.chunk.js.map