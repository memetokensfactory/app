(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{25551:function(e,t,r){Promise.resolve().then(r.bind(r,83771))},4312:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(44839),s=r(96164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},83771:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(57437),s=r(2265),a=r(43653),i=r(33225),c=r(41164);function l(){let{signer:e}=(0,c.Z)(),[t,r]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async function(){try{let t=await (0,a.T6)(e);r(t.formatted)}catch(e){console.error("Error fetching fee collector balance:",e),r("Error fetching balance")}})()},[]),(0,n.jsx)(i.default,{children:(0,n.jsxs)("div",{className:"max-w-[500px] mx-auto mt-8",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Fee Collector Balance"}),null===t?(0,n.jsx)("p",{children:"Loading balance..."}):(0,n.jsxs)("p",{className:"text-xl",children:["Current balance: ",(0,n.jsxs)("span",{className:"font-bold",children:[t," ETH"]})]})]})})}},91570:function(e,t,r){"use strict";var n=r(57437);r(2265),t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"mx-auto",style:{maxWidth:"1280px"},children:t})}},83593:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var n=r(57437);r(53054),r(2265);var s=r(66648),a=r(87138),i=r(16463),c=r(41164),l=r(89733),o=r(89896),d=r(42873),u={src:"/_next/static/media/logo.e9333541.svg",height:32,width:256,blurWidth:0,blurHeight:0},f=r(91570),h=()=>{let{connected:e,truncatedWalletAddress:t,connect:r,disconnect:h}=(0,c.Z)(),x=(0,i.usePathname)(),m=e=>x===e?"font-bold":"transition-all hover:font-bold";return(0,n.jsx)("header",{className:"bg-c_blue500 py-[20px]",children:(0,n.jsx)(f.Z,{children:(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)(s.default,{src:u,alt:"Logo",priority:!0})}),(0,n.jsxs)("nav",{className:"hidden md:flex space-x-[64px] text-white",children:[(0,n.jsx)(a.default,{href:"/",className:m("/"),children:"Home"}),(0,n.jsx)(a.default,{href:"/token/create",className:m("/launch"),children:"Launch"})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(l.z,{onClick:()=>{e?h():r()},className:"bg-white text-c_slate900 cursor-pointer transition-all duration-300 border border-transparent hover:bg-transparent hover:text-white hover:border-white",children:e?(0,n.jsxs)(n.Fragment,{children:[t," ",(0,n.jsx)(o.Z,{className:"w-4 h-4 ml-2"})]}):"Connect Wallet"}),(0,n.jsx)(l.z,{variant:"ghost","aria-label":"Menu",className:"ml-[36px] text-white",children:(0,n.jsx)(d.Z,{"aria-hidden":"true"})})]})]})})})}},33225:function(e,t,r){"use strict";r.r(t);var n=r(57437),s=r(83593);t.default=function(e){let{children:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.default,{}),t]})}},89733:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(57437),s=r(2265),a=r(71538),i=r(12218),c=r(4312);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:o=!1,...d}=e,u=o?a.g7:"button";return(0,n.jsx)(u,{className:(0,c.cn)(l({variant:s,size:i,className:r})),ref:t,...d})});o.displayName="Button"},53054:function(){}},function(e){e.O(0,[842,54,307,183,421,977,971,23,744],function(){return e(e.s=25551)}),_N_E=e.O()}]);