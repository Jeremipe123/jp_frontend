(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{9988:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return s(3597)}])},9470:function(e,t,s){"use strict";var i=s(5893),r=s(9583);s(7294),t.Z=()=>(0,i.jsx)("footer",{className:"bg-black text-white py-4",children:(0,i.jsx)("div",{className:"container mx-auto px-4",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center",children:[(0,i.jsx)("div",{className:"text-center md:text-left",children:(0,i.jsx)("div",{className:"flex items-center justify-center md:justify-start",children:(0,i.jsx)("img",{src:"/assets/img/logo.png",alt:"JP Logo",className:"w-12 h-12 mr-2"})})}),(0,i.jsxs)("div",{className:"flex justify-center ml-6",children:[(0,i.jsx)("a",{href:"https://wa.me/+584241939329",className:"mr-4",children:(0,i.jsx)(r.xpo,{size:24,className:"text-white hover:text-gray-300"})}),(0,i.jsx)("a",{className:"mr-4",children:(0,i.jsx)(r.V2E,{size:24,className:"text-white hover:text-gray-300"})}),(0,i.jsx)("a",{href:"https://www.instagram.com/jeremiperez19",children:(0,i.jsx)(r.Zf_,{size:24,className:"text-white hover:text-gray-300"})})]}),(0,i.jsx)("div",{className:"text-center md:text-right",children:(0,i.jsx)("p",{className:"text-xs",children:" Jeremi Perez \xa9 2023   | Todos los derechos reservados."})})]})})})},7713:function(e,t,s){"use strict";var i=s(5893),r=s(9008),a=s.n(r);t.Z=()=>(0,i.jsxs)(a(),{children:[(0,i.jsx)("link",{rel:"icon",href:"/assets/img/logo.png"}),(0,i.jsx)("title",{children:"JEREMI PEREZ"}),(0,i.jsx)("meta",{name:"description",content:"Marca personal"})]})},4020:function(e,t,s){"use strict";var i=s(5893);s(7294),t.Z=e=>{let{label:t}=e;return(0,i.jsx)("div",{className:"w-full md:w-1/5 md:mt-6 flex items-center justify-center",children:(0,i.jsx)("button",{className:"bg-primary-800 hover:bg-gray-900 text-white py-2 px-4 focus:outline-none focus:shadow-outline",type:"button",children:t})})}},3597:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var i=s(5893);s(7468),s(878);var r=s(7713),a=s(7294),c=s(1664),l=s.n(c),n=s(1163);let o=[{href:"/",label:"Inicio"},{href:"/services",label:"Servicios"},{href:"/proyectos",label:"Proyectos"}];var x=()=>{let e=(0,n.useRouter)();return(0,i.jsx)("nav",{className:"bg-primary-100 text-white py-4",children:(0,i.jsxs)("div",{className:"container mx-auto flex items-center justify-between",children:[(0,i.jsx)("div",{className:"text-center md:text-left",children:(0,i.jsx)("div",{className:"flex items-center justify-center md:justify-start",children:(0,i.jsx)(l(),{href:o[0].href,children:(0,i.jsx)("img",{src:"/assets/img/logo.png",alt:"JP Logo",className:"w-12 h-12 ml-4"})})})}),(0,i.jsx)("div",{className:"text-lg flex space-x-10",children:o.map((t,s)=>{let{href:r,label:a}=t;return(0,i.jsx)(l(),{href:r,children:(0,i.jsx)("p",{className:"hover:text-primary-300 ".concat(e.pathname===r?"underline underline-offset-4 text-white":""),children:a})},s)})})]})})},d=s(9470),m=s(4020);let h=[{title:"Gu\xeda B\xe1sica",cards:[{title:"Consultor\xeda",description:"1 hora",description2:"100$",buttonText:"Reservar"},{title:"Creaci\xf3n de p\xe1gina web",description:"Nos adaptamos a su necesidad, con nuestra originalidad",buttonText:"Solicitar"}]},{title:"Gu\xeda Personalizada",cards:[{title:"Asesor\xeda",description:"1 hora",description2:"300$",buttonText:"Reservar"},{title:"Modificaciones",description:"Te ayudamos a mejorar tu p\xe1gina al m\xe1ximo",buttonText:"Solicitar"}]}];var u=()=>{let[e,t]=(0,a.useState)(0),s=h[e];return(0,i.jsxs)("section",{className:"bg-primary-500 py-12 text-white text-center relative",children:[(0,i.jsx)("div",{className:"absolute left-1/3 w-1/3 ".concat(0===e?"bg-black":"bg-white"," h-0.5 top-32 transition-all duration-300")}),(0,i.jsx)("div",{className:"absolute right-1/3 w-1/6 ".concat(0===e?"bg-white":"bg-black"," h-0.5 top-32 transition-all duration-300")}),(0,i.jsx)("div",{className:"flex flex-row justify-center mb-16",children:h.map((s,r)=>(0,i.jsx)("p",{onClick:()=>t(r),className:"mt-24 text-lg text-white cursor-pointer mx-6 ml-16 ".concat(e===r?"":"text-gray-300"),children:s.title},r))}),(0,i.jsx)("div",{className:"flex flex-row justify-center",children:s.cards.map((e,t)=>(0,i.jsx)("div",{className:"mx-4",children:(0,i.jsxs)("div",{className:"mx-auto w-[240px] h-[265px] mb-5 bg-white px-4 py-6 shadow-lg text-black text-center flex flex-col items-center",children:[(0,i.jsx)("p",{className:"font-semibold mb-5",children:e.title}),(0,i.jsx)("p",{className:"mb-2",children:e.description}),e.description2&&(0,i.jsx)("p",{children:e.description2}),(0,i.jsx)(m.Z,{label:e.buttonText})]})},t))})]})},j=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(x,{}),(0,i.jsx)(u,{}),(0,i.jsx)(d.Z,{})]})},878:function(){},1163:function(e,t,s){e.exports=s(8645)}},function(e){e.O(0,[774,445,923,888,179],function(){return e(e.s=9988)}),_N_E=e.O()}]);