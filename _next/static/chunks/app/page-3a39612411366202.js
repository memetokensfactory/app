(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1756:function(e,t,r){Promise.resolve().then(r.bind(r,83593)),Promise.resolve().then(r.bind(r,80330))},4312:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(44839),s=r(96164);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}},11707:function(e,t,r){"use strict";r.d(t,{S:function(){return d},V:function(){return i}});var a=r(48646),s=r(21432);function n(){let e=(0,a._)(["\n  query GetAllTokens {\n    tokens {\n      symbol\n      name\n      dataFileId\n      tokenAddress\n      createdAt\n      supply\n      createdBy\n      migrated\n    }\n  }\n"]);return n=function(){return e},e}function l(){let e=(0,a._)(["\n  query GetToken($id: ID!) {\n    token(id: $id) {\n      symbol\n      name\n      dataFileId\n      tokenAddress\n      createdAt\n      supply\n      createdBy\n      migrated\n    }\n  }\n"]);return l=function(){return e},e}let i=(0,s.Ps)(n()),d=(0,s.Ps)(l())},17170:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(55355),s=r(38472),n=r(43653),l=r(16463),i=r(41164),d=r(56884),o=r(11707),c=r(28540);function u(e){let t;let{signer:r}=(0,i.Z)(),u=(0,l.useSearchParams)(),{data:m,loading:x}=function(e){let{data:t,...r}=(0,d.aM)(o.S,{variables:{id:e.toLowerCase()}});return{...r,data:(null==t?void 0:t.token)?{...t.token,progress:(0,c.C)(t.token),supply:{wei:t.token.supply,formatted:(0,n.HZ)(t.token.supply)},maxSupply:{wei:n.UR,formatted:(0,n.np)(n.UR).toLocaleString(void 0,{maximumFractionDigits:2})}}:void 0}}(t=e||u.get("address")),{data:f,isLoading:p,isError:h}=(0,a.a)({queryKey:["ipfsData",null==m?void 0:m.dataFileId],queryFn:()=>m?s.Z.get("https://gateway.pinata.cloud/ipfs/".concat(null==m?void 0:m.dataFileId)).then(e=>e.data):void 0,enabled:!!m&&!!m.dataFileId}),{data:g}=(0,a.a)({queryKey:["calculatePrice",t],queryFn:()=>(0,n.e_)(r,t,1),enabled:!!t});return{data:{...m,...f,address:t,image:f&&"https://gateway.pinata.cloud/ipfs/".concat(f.imageHash),price:g},isLoading:p||x,isError:h||x}}},28540:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return l}});var a=r(56884),s=r(11707),n=r(58789);function l(){let{data:e,...t}=(0,a.aM)(s.V);return{...t,data:(null==e?void 0:e.tokens.map(e=>({...e,progress:i(e)})))||[]}}function i(e){return(parseFloat(n.dF(e.supply))-5e8)/5e8}},91570:function(e,t,r){"use strict";var a=r(57437);r(2265),t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"mx-auto",style:{maxWidth:"1280px"},children:t})}},99966:function(e,t,r){"use strict";var a=r(57437);r(2265);var s=r(91570);t.Z=()=>(0,a.jsx)("div",{className:"bg-c_blue500 mt-[80px] pt-[24px] pb-[40px] text-white",children:(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"t_detail",children:"\xa9 2024 Meme Factory. All rights reserved"}),(0,a.jsxs)("p",{className:"t_detail",children:["This site is protected by reCAPTCHA and the Google"," ",(0,a.jsx)("a",{href:"#",className:"underline underline-offset-2",children:"Privacy Policy"})," ","and"," ",(0,a.jsx)("a",{href:"#",className:"underline underline-offset-2",children:"Terms"})," ","of Service apply."]})]})})})},83593:function(e,t,r){"use strict";r.d(t,{default:function(){return x}});var a=r(57437);r(53054),r(2265);var s=r(66648),n=r(87138),l=r(16463),i=r(41164),d=r(89733),o=r(89896),c=r(42873),u={src:"/_next/static/media/logo.e9333541.svg",height:32,width:256,blurWidth:0,blurHeight:0},m=r(91570),x=()=>{let{connected:e,truncatedWalletAddress:t,connect:r,disconnect:x}=(0,i.Z)(),f=(0,l.usePathname)(),p=e=>f===e?"font-bold":"transition-all hover:font-bold";return(0,a.jsx)("header",{className:"bg-c_blue500 py-[20px]",children:(0,a.jsx)(m.Z,{children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(s.default,{src:u,alt:"Logo",priority:!0})}),(0,a.jsxs)("nav",{className:"hidden md:flex space-x-[64px] text-white",children:[(0,a.jsx)(n.default,{href:"/",className:p("/"),children:"Home"}),(0,a.jsx)(n.default,{href:"/token/create",className:p("/launch"),children:"Launch"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(d.z,{onClick:()=>{e?x():r()},className:"bg-white text-c_slate900 cursor-pointer transition-all duration-300 border border-transparent hover:bg-transparent hover:text-white hover:border-white",children:e?(0,a.jsxs)(a.Fragment,{children:[t," ",(0,a.jsx)(o.Z,{className:"w-4 h-4 ml-2"})]}):"Connect Wallet"}),(0,a.jsx)(d.z,{variant:"ghost","aria-label":"Menu",className:"ml-[36px] text-white",children:(0,a.jsx)(c.Z,{"aria-hidden":"true"})})]})]})})})}},80330:function(e,t,r){"use strict";r.d(t,{default:function(){return P}});var a=r(57437),s=r(2265),n=r(91570),l=r(4312);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-row justify-start items-center gap-4 p-5",r),...s})}).displayName="CardHeader";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-base font-medium leading-none tracking-tight",r),...s})});d.displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-base font-normal text-secondary leading-none tracking-tight",r),...s})}).displayName="CardSubTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("button",{ref:t,className:(0,l.cn)("text-base font-normal ml-auto leading-none tracking-tight",r),...s})}).displayName="CardTitleAction";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...s})});o.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("p-5 pt-0 flex flex-col gap-2",r),...s})});c.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-5 pt-0",r),...s})}).displayName="CardFooter";var u=r(66648),m={src:"/_next/static/media/homeImage.373cd999.jpg",height:248,width:188,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAkh5H/8QAFhAAAwAAAAAAAAAAAAAAAAAAABRh/9oACAEBAAE/AGqf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAQUUv/aAAgBAgEBPwCJfB//xAAXEQADAQAAAAAAAAAAAAAAAAAABBRS/9oACAEDAQE/ALWNn//Z",blurWidth:6,blurHeight:8},x={src:"/_next/static/media/tooltip.c1e1cf8d.svg",height:14,width:14,blurWidth:0,blurHeight:0},f=r(95717),p=r(61617),h=r(16463),g=r(47304),b=r(28540),j=r(77209),A=r(19357),N=r(42421),v=r(14392),y=r(22468);let w=A.fC;A.ZA;let _=A.B4,k=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(A.xz,{ref:t,className:(0,l.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...n,children:[s,(0,a.jsx)(A.JO,{asChild:!0,children:(0,a.jsx)(N.Z,{className:"h-4 w-4 opacity-50"})})]})});k.displayName=A.xz.displayName;let C=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(A.u_,{ref:t,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",r),...s,children:(0,a.jsx)(v.Z,{className:"h-4 w-4"})})});C.displayName=A.u_.displayName;let R=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(A.$G,{ref:t,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",r),...s,children:(0,a.jsx)(N.Z,{className:"h-4 w-4"})})});R.displayName=A.$G.displayName;let F=s.forwardRef((e,t)=>{let{className:r,children:s,position:n="popper",...i}=e;return(0,a.jsx)(A.h_,{children:(0,a.jsxs)(A.VY,{ref:t,className:(0,l.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:n,...i,children:[(0,a.jsx)(C,{}),(0,a.jsx)(A.l_,{className:(0,l.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,a.jsx)(R,{})]})})});F.displayName=A.VY.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(A.__,{ref:t,className:(0,l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...s})}).displayName=A.__.displayName;let E=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(A.ck,{ref:t,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(A.wU,{children:(0,a.jsx)(y.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(A.eT,{children:s})]})});E.displayName=A.ck.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(A.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",r),...s})}).displayName=A.Z0.displayName;var I=r(89733),T={src:"/_next/static/media/rearrangeIcon.111f90c4.svg",height:22,width:22,blurWidth:0,blurHeight:0},B={src:"/_next/static/media/refreshIcon.635ac888.svg",height:20,width:22,blurWidth:0,blurHeight:0},D={src:"/_next/static/media/searchIcon.d2750644.svg",height:20,width:20,blurWidth:0,blurHeight:0};let Z=(e,t)=>e.length<=t?e:e.slice(0,t)+"...";var S={src:"/_next/static/media/arrow.c8651a39.svg",height:6,width:8,blurWidth:0,blurHeight:0},L=r(17170),H=e=>{let t=(0,h.useRouter)(),r=e=>{t.push("/token?address=".concat(e))},{data:s,isLoading:n,isError:l}=(0,L.Z)(e.token.tokenAddress);return(0,a.jsxs)(g.SC,{onClick:()=>r(e.token.tokenAddress),className:"grid grid-cols-6 items-center py-[32px]",children:[(0,a.jsx)("div",{className:"col-span-2 flex justify-center",children:(0,a.jsx)(u.default,{src:s.image,width:"200",height:"200",className:"rounded-[6px]",alt:"Token Image"})}),(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsxs)("h3",{className:"font-semibold text-[24px] leading-[24px] tracking-[-0.6%]",children:[e.token.name," $",e.token.symbol]}),(0,a.jsxs)("div",{className:"max-w-[268px] mt-[24px]",children:[(0,a.jsx)("p",{className:"font-regular text-[14px] leading-[24px] inline",children:s.description}),(0,a.jsx)("button",{className:"ml-2 font-bold",children:"Read More"})]})]}),(0,a.jsxs)("div",{className:"col-span-1",children:[(0,a.jsxs)("p",{className:"font-normal text-[16px] min-w-[240px]",children:[(0,a.jsx)("span",{className:"opacity-40",children:"Created by:"}),(0,a.jsx)("span",{className:"ml-[4px] text-c_slate500 font-bold",children:Z(e.token.tokenAddress,13)})]}),(0,a.jsxs)("p",{className:"font-normal text-[16px] my-[24px] flex items-center",children:[(0,a.jsx)("span",{className:"opacity-40",children:"Price:"}),(0,a.jsx)("span",{className:"text-c_slate900 font-bold ml-[4px]",children:"$0,8621"}),(0,a.jsxs)("span",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"ml-[12px] text-[#22C55E] font-bold",children:"3.0%"}),(0,a.jsx)(u.default,{className:"ml-[4px]",src:S,alt:"arrow"})]})]}),(0,a.jsxs)("p",{className:"font-normal text-[16px]",children:[(0,a.jsx)("span",{className:"opacity-40",children:"Market Cap:"}),(0,a.jsx)("span",{className:"text-c_slate900 font-bold ml-[4px] mr-[4px]",children:"$6.38k"}),(0,a.jsx)("span",{children:"(4.8%)"})]}),(0,a.jsx)(p.E,{value:100*e.token.progress,className:"mt-[24px] bg-[#BAE6FD] [&>div]:bg-c_sky500"})]}),(0,a.jsxs)("div",{className:"col-span-1 flex flex-col items-end",children:[(0,a.jsx)(f.H,{}),(0,a.jsx)(I.z,{className:"block mt-[96px] w-[62px] ml-auto t_body-bold bg-c_orange500 border border-transparent hover:bg-transparent hover:border-c_orange500 hover:text-c_orange500",children:"Buy"})]})]},e.token.tokenAddress)};function z(){let{data:e}=(0,b.Z)();(0,h.useRouter)();let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)(!1),i=e.filter(e=>{let r=t.toLowerCase();return e.symbol.toLowerCase().includes(r)||e.name.toLowerCase().includes(r)||e.tokenAddress.toLowerCase().includes(r)});return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"mb-4 flex items-center justify-between gap-4",children:[(0,a.jsxs)("div",{className:"relative w-[61%]",children:[(0,a.jsx)(u.default,{src:D,alt:"Search",className:"absolute left-[14px] top-1/2 transform -translate-y-1/2"}),(0,a.jsx)(j.I,{placeholder:"Search for tokens...",value:t,onChange:e=>r(e.target.value),className:"w-full placeholder:text-[#94A3B8] t_subtle py-[10px] pl-[44px] rounded-[6px] border-[#CBD5E1]"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-[16px]",children:[(0,a.jsx)("div",{className:"flex items-center gap-2",children:(0,a.jsxs)("div",{className:"flex items-center gap-[8px]",children:[(0,a.jsx)("input",{type:"checkbox",id:"listed",checked:n,onChange:e=>l(e.target.checked),className:"w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-c_slate200 checked:bg-primary checked:border-transparent relative after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-0 checked:after:opacity-100"}),(0,a.jsx)("label",{htmlFor:"listed",className:"text-sm text-gray-500 cursor-pointer",children:"Listed on:"})]})}),(0,a.jsxs)(w,{children:[(0,a.jsx)(k,{className:"w-[204px] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0",children:(0,a.jsx)(_,{placeholder:"Trading Volume"})}),(0,a.jsxs)(F,{children:[(0,a.jsx)(E,{value:"all",children:"Trading Volume"}),(0,a.jsx)(E,{value:"ethereum",children:"Trading Volume"}),(0,a.jsx)(E,{value:"bsc",children:"Trading Volume"})]})]}),(0,a.jsx)(I.z,{variant:"outline",size:"icon",className:"w-[40px] h-[40px] rounded-[7.5px]",children:(0,a.jsx)(u.default,{src:T,alt:"Rearrange Icon"})}),(0,a.jsx)(I.z,{variant:"outline",size:"icon",className:"w-[40px] h-[40px] rounded-[7.5px]",children:(0,a.jsx)(u.default,{src:B,alt:"Refresh Icon"})})]})]}),(0,a.jsx)(g.iA,{children:(0,a.jsx)(g.RM,{children:i.map(e=>(0,a.jsx)(H,{token:e}))})})]})}var Q=r(22353),M=r(99966),P=function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)("div",{className:"py-[80px] flex justify-between gap-[40px]",children:[(0,a.jsx)("h1",{className:"text-[56px] leading-[64px] tracking-[-0.25] text-c_sky600 max-w-[400px] uppercase",children:"The place where all funny coins are made in!"}),(0,a.jsx)(i,{className:"w-full",children:(0,a.jsx)(c,{className:"relative py-[48px] px-[32px] border border-c_orange500 text-c_orange500 rounded-[6px]",children:(0,a.jsxs)("div",{className:"flex items-center gap-[24px]",children:[(0,a.jsx)(u.default,{src:m,alt:"Image",width:188,height:248,priority:!0}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex items-center w-full",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("p",{className:"t_h3",children:"Not an adv, just the best of them"}),(0,a.jsx)(u.default,{className:"ml-[8px] cursor-pointer",src:x,alt:"Tooltip"})]}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsx)(f.H,{})})]}),(0,a.jsxs)("p",{className:"t_subtle mt-[24px]",children:["Created by:",(0,a.jsx)("span",{className:"t_small",children:"TVEKMB...2ncj"})]}),(0,a.jsxs)("div",{className:"my-[24px]",children:[(0,a.jsxs)(d,{className:"t_h4",children:["Tron Toad\uD83D\uDC38 ",(0,a.jsx)("span",{children:"($TTOAD)"})]}),(0,a.jsx)(o,{className:"t_subtle text-c_orange500 mt-[8px] max-w-[564px]",children:Z("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi ipsa minus velit! Dolorem illum inventore rerum. Doloremque, error maiores?",100)})]}),(0,a.jsxs)("p",{className:"t_subtle",children:["Market Cap: ",(0,a.jsx)("span",{className:"t_small",children:"$6.38k(4.8%)"})]}),(0,a.jsx)(p.E,{value:66,className:"mt-[8px]"})]})]})})})]}),(0,a.jsx)(z,{}),(0,a.jsx)(Q.Z,{})]}),(0,a.jsx)(M.Z,{})]})}},95717:function(e,t,r){"use strict";r.d(t,{H:function(){return d}});var a=r(57437),s=r(66648),n={src:"/_next/static/media/xLogo.4bd0bbe7.svg",height:16,width:16,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/telegramLogo.bbaf74a6.svg",height:16,width:18,blurWidth:0,blurHeight:0},i={src:"/_next/static/media/linkLogo.3d3e8fe3.svg",height:16,width:16,blurWidth:0,blurHeight:0};function d(){return(0,a.jsxs)("div",{className:"flex items-center gap-[16px]",children:[(0,a.jsx)(s.default,{src:n,alt:"X",className:"cursor-pointer"}),(0,a.jsx)(s.default,{src:l,alt:"Telegram",className:"cursor-pointer"}),(0,a.jsx)(s.default,{src:i,alt:"Link",className:"cursor-pointer"})]})}},22353:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var a=r(57437),s=r(2265),n=r(39343),l=r(89733),i=r(71538),d=r(4312),o=r(38364);let c=(0,r(12218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.f,{ref:t,className:(0,d.cn)(c(),r),...s})});u.displayName=o.f.displayName;let m=e=>{let{form:t,children:r}=e;return(0,a.jsx)(n.RV,{...t,children:r})},x=s.createContext({}),f=e=>{let{...t}=e;return(0,a.jsx)(x.Provider,{value:{name:t.name},children:(0,a.jsx)(n.Qr,{...t,render:e=>{var r;let n=null===(r=t.render)||void 0===r?void 0:r.call(t,e);return n?s.createElement(s.Fragment,{},n):(0,a.jsx)(a.Fragment,{})}})})},p=()=>{let e=s.useContext(x),t=s.useContext(h),{getFieldState:r,formState:a}=(0,n.Gc)(),l=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...l}},h=s.createContext({}),g=s.forwardRef((e,t)=>{let{className:r,...n}=e,l=s.useId();return(0,a.jsx)(h.Provider,{value:{id:l},children:(0,a.jsx)("div",{ref:t,className:(0,d.cn)(r),...n})})});g.displayName="FormItem";let b=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:n,formItemId:l}=p();return(0,a.jsx)(u,{ref:t,className:(0,d.cn)(n&&"text-destructive",r),htmlFor:l,...s})});b.displayName="FormLabel";let j=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:n,formDescriptionId:l,formMessageId:d}=p();return(0,a.jsx)(i.g7,{ref:t,id:n,"aria-describedby":s?"".concat(l," ").concat(d):"".concat(l),"aria-invalid":!!s,...r})});j.displayName="FormControl";let A=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:n}=p();return(0,a.jsx)("p",{ref:t,id:n,className:(0,d.cn)("text-sm text-muted-foreground",r),...s})});A.displayName="FormDescription",s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e,{error:l,formMessageId:i}=p(),o=l?String(null==l?void 0:l.message):s;return o?(0,a.jsx)("p",{ref:t,id:i,className:(0,d.cn)("text-sm font-medium text-destructive",r),...n,children:o}):null}).displayName="FormMessage";var N=r(77209),v=()=>{let e=(0,n.cI)({defaultValues:{email:""}});return(0,a.jsxs)("div",{className:"border border-c_sky600 rounded-[6px] py-[48px] px-6 mt-[80px]",children:[(0,a.jsx)("h2",{className:"font-regular text-[48px] tracking-[-0.012em] text-c_sky600 text-center uppercase mb-8",children:"Stay tuned or be poor!"}),(0,a.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,a.jsx)(m,{form:e,children:(0,a.jsx)("form",{onSubmit:e.handleSubmit(e=>{console.log(e)}),children:(0,a.jsx)("div",{children:(0,a.jsx)(f,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,a.jsxs)(g,{children:[(0,a.jsx)(b,{className:"font-medium text-[14px]",children:"Email"}),(0,a.jsx)(j,{children:(0,a.jsxs)("div",{className:"flex items-center mt-[6px]",children:[(0,a.jsx)(N.I,{...t,className:"w-[632px] placeholder:text-[#94A3B8] t_p-ui py-[8px] pl-[12px] rounded-[6px]",style:{marginTop:"0 !important",borderColor:"#CBD5E1"},type:"email",placeholder:"Email"}),(0,a.jsx)(l.z,{className:"block ml-[8px] w-[112px] t_body-bold bg-c_orange500 border border-transparent hover:bg-transparent hover:border-c_orange500 hover:text-c_orange500",type:"submit",children:"Subscribe"})]})}),!t.value&&(0,a.jsx)(A,{className:"mt-[6px] t_subtle text-c_slate500",children:"Enter your email address"})]})}})})})})})]})}},89733:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var a=r(57437),s=r(2265),n=r(71538),l=r(12218),i=r(4312);let d=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:o=!1,...c}=e,u=o?n.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(d({variant:s,size:l,className:r})),ref:t,...c})});o.displayName="Button"},77209:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var a=r(57437),s=r(2265),n=r(4312);let l=s.forwardRef((e,t)=>{let{className:r,type:s,...l}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex w-full border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},61617:function(e,t,r){"use strict";r.d(t,{E:function(){return d}});var a=r(57437),s=r(2265),n=r(52431),l=r(74080),i=r(4312);let d=s.forwardRef((e,t)=>{let{className:r,value:s,...d}=e;return(0,a.jsx)(l.zt,{children:(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,children:(0,a.jsx)(n.fC,{ref:t,className:(0,i.cn)("relative h-4 w-full overflow-hidden rounded-full bg-[#F1F5F9]",r),...d,children:(0,a.jsx)(n.z$,{className:"h-full w-full flex-1 bg-c_orange500 transition-all rounded-full",style:{transform:"translateX(-".concat(100-(s||0),"%)")}})})}),(0,a.jsx)(l.h_,{children:(0,a.jsxs)(l.VY,{className:"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[4px] bg-black px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",sideOffset:5,children:["".concat(Math.round(s||0),"%"),(0,a.jsx)(l.Eh,{className:"fill-black"})]})})]})})});d.displayName=n.fC.displayName},47304:function(e,t,r){"use strict";r.d(t,{RM:function(){return d},SC:function(){return o},iA:function(){return l},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var a=r(57437),s=r(2265),n=r(4312);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto bg-middleground",children:(0,a.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",r),...s})})});l.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,n.cn)("bg-background [&_tr]:border-b",r),...s})});i.displayName="TableHeader";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",r),...s})});d.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors",r),...s})});o.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,n.cn)("px-6 py-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});c.displayName="TableHead";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,n.cn)("p-6 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});u.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption"},53054:function(){}},function(e){e.O(0,[842,54,307,183,180,607,306,896,14,977,971,23,744],function(){return e(e.s=1756)}),_N_E=e.O()}]);