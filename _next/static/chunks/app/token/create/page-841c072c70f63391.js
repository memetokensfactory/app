(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[509],{3301:function(e,t,r){Promise.resolve().then(r.bind(r,22222)),Promise.resolve().then(r.bind(r,83593))},4312:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var s=r(44839),n=r(96164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}},78030:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(2265);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:x,...m}=e;return(0,s.createElement)("svg",{ref:t,...l,width:n,height:n,stroke:r,strokeWidth:o?24*Number(i)/Number(n):i,className:a("lucide",c),...m},[...x.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let r=(0,s.forwardRef)((r,l)=>{let{className:o,...c}=r;return(0,s.createElement)(i,{ref:l,iconNode:t,className:a("lucide-".concat(n(e)),o),...c})});return r.displayName="".concat(e),r}},89896:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(78030).Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},42873:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(78030).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},91570:function(e,t,r){"use strict";var s=r(57437);r(2265),t.Z=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"mx-auto",style:{maxWidth:"1280px"},children:t})}},22222:function(e,t,r){"use strict";r.d(t,{default:function(){return f}});var s=r(57437),n=r(2265),a=r(39343),l=r(41164),i=r(16463),o=r(43653),c=r(38472),d=r(25566);async function x(e){let t=new FormData;t.append("file",e);let r=JSON.stringify({name:e.name});t.append("pinataMetadata",r);let s=JSON.stringify({cidVersion:0});t.append("pinataOptions",s);try{return(await c.Z.post("https://api.pinata.cloud/pinning/pinFileToIPFS",t,{maxBodyLength:1/0,headers:{"Content-Type":"multipart/form-data; boundary=".concat(t._boundary),Authorization:"Bearer ".concat(d.env.NEXT_PUBLIC_PINATA_JWT)}})).data.IpfsHash}catch(e){throw console.log(e),e}}async function m(e){try{return(await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.env.NEXT_PUBLIC_PINATA_JWT)},body:JSON.stringify(e)}).then(e=>e.json())).IpfsHash}catch(e){throw console.error(e),Error("Something wrong with upload.")}}var u=r(91570),p=r(22353),h=r(99966),f=()=>{let e=(0,i.useRouter)(),{signer:t}=(0,l.Z)(),{register:r,handleSubmit:c,formState:{errors:d},setValue:f}=(0,a.cI)(),b=(0,n.useRef)(null),[g,j]=(0,n.useState)(0),[v,y]=(0,n.useState)(""),[N,w]=(0,n.useState)(0),[k,_]=(0,n.useState)(0),[F,B]=(0,n.useState)(0),C=async r=>{try{let s=r.image[0],n=await x(s),a={name:r.name,symbol:r.symbol,description:r.description,imageHash:n,website:r.website,telegram:r.telegram,twitter:r.twitter},l=await m(a),{tokenAddress:i}=await (0,o.V3)(t,r.symbol,r.name,l);e.push("/token?address="+i)}catch(e){console.error("Error creating token:",e)}},E=e=>{if(e.target.files&&e.target.files[0]){j(e.target.files[0].size);let t=e.target.files[0];y(URL.createObjectURL(t))}};return(0,n.useEffect)(()=>()=>{v&&URL.revokeObjectURL(v)},[v]),(0,s.jsxs)("div",{className:"mt-[80px]",children:[(0,s.jsxs)(u.Z,{children:[(0,s.jsx)("h1",{className:"font-normal text-[56px] tracking-[-0.25px] text-center uppercase text-c_sky500",children:"Launch your token on Meme Factory"}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-[40px] mt-[80px]",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"w-[400px] h-[200px] bg-[#FFFBEB] rounded-[6px]"}),(0,s.jsx)("p",{className:"mt-[16px] font-normal text-[30px] tracking-[-0.75%] uppercase text-center text-c_orange500",children:"No Presale"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"w-[400px] h-[200px] bg-[#FFFBEB] rounded-[6px]"}),(0,s.jsx)("p",{className:"mt-[16px] font-normal text-[30px] tracking-[-0.75%] uppercase text-center text-c_orange500",children:"No Team Allocation"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"w-[400px] h-[200px] bg-[#FFFBEB] rounded-[6px]"}),(0,s.jsx)("p",{className:"mt-[16px] font-normal text-[30px] tracking-[-0.75%] uppercase text-center text-c_orange500",children:"Lower Gas"})]})]}),(0,s.jsxs)("form",{className:"mt-[80px] flex gap-[48px]",onSubmit:c(C),children:[(0,s.jsxs)("div",{className:"min-w-[26%]",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block font-regular text-[14px] text-c_slate500 mb-2",children:"Image"}),(0,s.jsx)("div",{className:"w-full h-[311px] bg-[#BAE6FD] rounded-[6px] cursor-pointer flex items-center justify-center overflow-hidden",onClick:()=>{var e;return null===(e=b.current)||void 0===e?void 0:e.click()},children:v?(0,s.jsx)("img",{src:v,alt:"Preview",className:"w-full h-full object-cover"}):(0,s.jsxs)("div",{className:"text-white",children:[(0,s.jsx)("p",{className:"text-[14px] font-normal text-center",children:"JPEG / PNG / WEBP / GIF"}),(0,s.jsx)("p",{className:"text-[14px] font-normal mt-[8px] text-center",children:"Less than 4 MB"})]})}),(0,s.jsx)("input",{id:"image",type:"file",accept:"image/*",...r("image",{required:"Image is required",validate:{lessThan1MB:e=>(null==e?void 0:e[0])?e[0].size<=1048576||"Image must be less than 1MB":"Image is required"}}),ref:b,className:"hidden",onChange:e=>{E(e),e.target.files&&f("image",e.target.files)}}),d.image&&(0,s.jsx)("span",{className:"text-red-500 text-xs",children:d.image.message||"Image is required (max 1MB)"}),g>0&&(0,s.jsxs)("span",{className:"text-xs",children:[(g/1048576).toFixed(2)," MB"]})]}),(0,s.jsx)("button",{type:"submit",className:"w-full bg-c_orange500 py-[8px] rounded-[6px] text-white font-bold text-[16px] mt-[24px]",children:"Launch"})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-[14px] font-normal text-c_slate500",children:"Token name"}),(0,s.jsxs)("span",{className:"text-[14px] text-c_slate500",children:[N,"/20"]})]}),(0,s.jsx)("input",{id:"name",type:"text",...r("name",{required:!0,minLength:2,maxLength:20,onChange:e=>w(e.target.value.length)}),className:"w-full text-normal text-[14px] py-[8px] px-[12px] border border-[#CBD5E1] rounded-[8px] mt-[8px] focus-visible:outline-none",maxLength:20}),d.name&&(0,s.jsx)("span",{className:"text-red-500 text-xs",children:"Name is required (2-20 characters)"})]}),(0,s.jsxs)("div",{className:"mt-[24px]",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("label",{htmlFor:"symbol",className:"block text-[14px] font-normal text-c_slate500",children:"Token symbol ($Ticker)"}),(0,s.jsxs)("span",{className:"text-[14px] font-normal text-c_slate500",children:[k,"/5"]})]}),(0,s.jsx)("input",{id:"symbol",type:"text",...r("symbol",{required:!0,minLength:2,maxLength:5,onChange:e=>_(e.target.value.length)}),className:"w-full text-normal text-[14px] py-[8px] px-[12px] border border-[#CBD5E1] rounded-[8px] mt-[8px] focus-visible:outline-none"}),d.symbol&&(0,s.jsx)("span",{className:"text-red-500 text-xs",children:"Symbol is required (2-5 characters)"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mt-[24px]",children:[(0,s.jsx)("label",{htmlFor:"description",className:"block text-[14px] font-normal text-c_slate500",children:"Token Description"}),(0,s.jsxs)("span",{className:"text-[14px] font-normal text-c_slate500",children:[F,"/256"]})]}),(0,s.jsx)("textarea",{id:"description",...r("description",{required:!0,maxLength:256,onChange:e=>B(e.target.value.length)}),className:"w-full text-normal text-[14px] min-h-[76px] py-[8px] px-[12px] border border-[#CBD5E1] rounded-[8px] mt-[8px] focus-visible:outline-none"}),d.description&&(0,s.jsx)("span",{className:"text-red-500 text-xs",children:"Description is required (max 256 characters)"})]}),(0,s.jsxs)("div",{className:"mt-[24px]",children:[(0,s.jsx)("label",{htmlFor:"website",className:"block text-[14px] font-normal text-c_slate500",children:"Website"}),(0,s.jsx)("input",{id:"website",type:"url",placeholder:"Optional",...r("website"),className:"w-full text-normal text-[14px] py-[8px] px-[12px] border border-[#CBD5E1] rounded-[8px] mt-[8px] focus-visible:outline-none placeholder:text-[#94A3B8]"})]}),(0,s.jsxs)("div",{className:"mt-[24px]",children:[(0,s.jsx)("label",{htmlFor:"telegram",className:"block text-[14px] font-normal text-c_slate500",children:"Telegram"}),(0,s.jsx)("input",{id:"telegram",type:"text",placeholder:"Optional",...r("telegram"),className:"w-full text-normal text-[14px] py-[8px] px-[12px] border border-[#CBD5E1] rounded-[8px] mt-[8px] focus-visible:outline-none placeholder:text-[#94A3B8]"})]}),(0,s.jsxs)("div",{className:"mt-[24px]",children:[(0,s.jsx)("label",{htmlFor:"twitter",className:"block text-[14px] font-normal text-c_slate500",children:"Twitter"}),(0,s.jsx)("input",{id:"twitter",type:"text",placeholder:"Optional",...r("twitter"),className:"w-full text-normal text-[14px] py-[8px] px-[12px] border border-[#CBD5E1] rounded-[8px] mt-[8px] focus-visible:outline-none placeholder:text-[#94A3B8]"})]})]})]}),(0,s.jsx)(p.Z,{})]}),(0,s.jsx)(h.Z,{})]})}},99966:function(e,t,r){"use strict";var s=r(57437);r(2265);var n=r(91570);t.Z=()=>(0,s.jsx)("div",{className:"bg-c_blue500 mt-[80px] pt-[24px] pb-[40px] text-white",children:(0,s.jsx)(n.Z,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("p",{className:"t_detail",children:"\xa9 2024 Meme Factory. All rights reserved"}),(0,s.jsxs)("p",{className:"t_detail",children:["This site is protected by reCAPTCHA and the Google"," ",(0,s.jsx)("a",{href:"#",className:"underline underline-offset-2",children:"Privacy Policy"})," ","and"," ",(0,s.jsx)("a",{href:"#",className:"underline underline-offset-2",children:"Terms"})," ","of Service apply."]})]})})})},83593:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var s=r(57437);r(53054),r(2265);var n=r(66648),a=r(87138),l=r(16463),i=r(41164),o=r(89733),c=r(89896),d=r(42873),x={src:"/_next/static/media/logo.e9333541.svg",height:32,width:256,blurWidth:0,blurHeight:0},m=r(91570),u=()=>{let{connected:e,truncatedWalletAddress:t,connect:r,disconnect:u}=(0,i.Z)(),p=(0,l.usePathname)(),h=e=>p===e?"font-bold":"transition-all hover:font-bold";return(0,s.jsx)("header",{className:"bg-c_blue500 py-[20px]",children:(0,s.jsx)(m.Z,{children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)(n.default,{src:x,alt:"Logo",priority:!0})}),(0,s.jsxs)("nav",{className:"hidden md:flex space-x-[64px] text-white",children:[(0,s.jsx)(a.default,{href:"/",className:h("/"),children:"Home"}),(0,s.jsx)(a.default,{href:"/token/create",className:h("/launch"),children:"Launch"})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(o.z,{onClick:()=>{e?u():r()},className:"bg-white text-c_slate900 cursor-pointer transition-all duration-300 border border-transparent hover:bg-transparent hover:text-white hover:border-white",children:e?(0,s.jsxs)(s.Fragment,{children:[t," ",(0,s.jsx)(c.Z,{className:"w-4 h-4 ml-2"})]}):"Connect Wallet"}),(0,s.jsx)(o.z,{variant:"ghost","aria-label":"Menu",className:"ml-[36px] text-white",children:(0,s.jsx)(d.Z,{"aria-hidden":"true"})})]})]})})})}},22353:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var s=r(57437),n=r(2265),a=r(39343),l=r(89733),i=r(71538),o=r(4312),c=r(38364);let d=(0,r(12218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(c.f,{ref:t,className:(0,o.cn)(d(),r),...n})});x.displayName=c.f.displayName;let m=e=>{let{form:t,children:r}=e;return(0,s.jsx)(a.RV,{...t,children:r})},u=n.createContext({}),p=e=>{let{...t}=e;return(0,s.jsx)(u.Provider,{value:{name:t.name},children:(0,s.jsx)(a.Qr,{...t,render:e=>{var r;let a=null===(r=t.render)||void 0===r?void 0:r.call(t,e);return a?n.createElement(n.Fragment,{},a):(0,s.jsx)(s.Fragment,{})}})})},h=()=>{let e=n.useContext(u),t=n.useContext(f),{getFieldState:r,formState:s}=(0,a.Gc)(),l=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...l}},f=n.createContext({}),b=n.forwardRef((e,t)=>{let{className:r,...a}=e,l=n.useId();return(0,s.jsx)(f.Provider,{value:{id:l},children:(0,s.jsx)("div",{ref:t,className:(0,o.cn)(r),...a})})});b.displayName="FormItem";let g=n.forwardRef((e,t)=>{let{className:r,...n}=e,{error:a,formItemId:l}=h();return(0,s.jsx)(x,{ref:t,className:(0,o.cn)(a&&"text-destructive",r),htmlFor:l,...n})});g.displayName="FormLabel";let j=n.forwardRef((e,t)=>{let{...r}=e,{error:n,formItemId:a,formDescriptionId:l,formMessageId:o}=h();return(0,s.jsx)(i.g7,{ref:t,id:a,"aria-describedby":n?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!n,...r})});j.displayName="FormControl";let v=n.forwardRef((e,t)=>{let{className:r,...n}=e,{formDescriptionId:a}=h();return(0,s.jsx)("p",{ref:t,id:a,className:(0,o.cn)("text-sm text-muted-foreground",r),...n})});v.displayName="FormDescription",n.forwardRef((e,t)=>{let{className:r,children:n,...a}=e,{error:l,formMessageId:i}=h(),c=l?String(null==l?void 0:l.message):n;return c?(0,s.jsx)("p",{ref:t,id:i,className:(0,o.cn)("text-sm font-medium text-destructive",r),...a,children:c}):null}).displayName="FormMessage";var y=r(77209),N=()=>{let e=(0,a.cI)({defaultValues:{email:""}});return(0,s.jsxs)("div",{className:"border border-c_sky600 rounded-[6px] py-[48px] px-6 mt-[80px]",children:[(0,s.jsx)("h2",{className:"font-regular text-[48px] tracking-[-0.012em] text-c_sky600 text-center uppercase mb-8",children:"Stay tuned or be poor!"}),(0,s.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,s.jsx)(m,{form:e,children:(0,s.jsx)("form",{onSubmit:e.handleSubmit(e=>{console.log(e)}),children:(0,s.jsx)("div",{children:(0,s.jsx)(p,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,s.jsxs)(b,{children:[(0,s.jsx)(g,{className:"font-medium text-[14px]",children:"Email"}),(0,s.jsx)(j,{children:(0,s.jsxs)("div",{className:"flex items-center mt-[6px]",children:[(0,s.jsx)(y.I,{...t,className:"w-[632px] placeholder:text-[#94A3B8] t_p-ui py-[8px] pl-[12px] rounded-[6px]",style:{marginTop:"0 !important",borderColor:"#CBD5E1"},type:"email",placeholder:"Email"}),(0,s.jsx)(l.z,{className:"block ml-[8px] w-[112px] t_body-bold bg-c_orange500 border border-transparent hover:bg-transparent hover:border-c_orange500 hover:text-c_orange500",type:"submit",children:"Subscribe"})]})}),!t.value&&(0,s.jsx)(v,{className:"mt-[6px] t_subtle text-c_slate500",children:"Enter your email address"})]})}})})})})})]})}},89733:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var s=r(57437),n=r(2265),a=r(71538),l=r(12218),i=r(4312);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:c=!1,...d}=e,x=c?a.g7:"button";return(0,s.jsx)(x,{className:(0,i.cn)(o({variant:n,size:l,className:r})),ref:t,...d})});c.displayName="Button"},77209:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var s=r(57437),n=r(2265),a=r(4312);let l=n.forwardRef((e,t)=>{let{className:r,type:n,...l}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex w-full border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},53054:function(){}},function(e){e.O(0,[842,54,307,183,180,306,977,971,23,744],function(){return e(e.s=3301)}),_N_E=e.O()}]);