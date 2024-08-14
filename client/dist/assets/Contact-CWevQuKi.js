import{u as C,r as a,j as e,l as i,m as y,L as n,n as w,o as M,p as S,k}from"./index-iwJBcb3x.js";const q=()=>{const{handleMessage:d,successPara:m,errParagraph:h,activateErrMsg:x,successMsg:j,loading:u}=C(),[l,p]=a.useState(""),[c,N]=a.useState(""),[r,v]=a.useState(""),[t,f]=a.useState(""),[o,g]=a.useState(""),b=s=>{s.preventDefault(),d({email:c,name:l,phone:r,subject:t,message:o})};return e.jsxs("form",{id:"contactForm",onSubmit:b,children:[x?e.jsx("div",{className:"ui error message text-start",children:e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"header fw-bold",children:"Oops!"}),e.jsx("p",{className:"form-ui-error",children:h})]})}):j&&e.jsx("div",{className:"ui success message text-start",children:e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"header fw-bold",children:"Success!"}),e.jsx("p",{className:"form-ui-success",children:m})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6 col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",name:"name",id:"name",className:"form-control",required:!0,"data-error":"Please enter your name",placeholder:"Your Name",onChange:s=>p(s.target.value),value:l,autoComplete:"on"}),e.jsx("div",{className:"help-block with-errors"})]})}),e.jsx("div",{className:"col-lg-6 col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"email",name:"email",id:"email",className:"form-control",required:!0,"data-error":"Please enter your email",placeholder:"Your Email",onChange:s=>N(s.target.value),value:c,autoComplete:"on"}),e.jsx("div",{className:"help-block with-errors"})]})}),e.jsx("div",{className:"col-lg-6 col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",name:"phone_number",id:"phone_number",required:!0,"data-error":"Please enter your number",className:"form-control",placeholder:"Your Phone",onChange:s=>v(s.target.value),value:r,autoComplete:"on"}),e.jsx("div",{className:"help-block with-errors"})]})}),e.jsx("div",{className:"col-lg-6 col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",name:"msg_subject",id:"msg_subject",className:"form-control",required:!0,"data-error":"Please enter your subject",placeholder:"Your Subject",onChange:s=>f(s.target.value),value:t,autoComplete:"on"}),e.jsx("div",{className:"help-block with-errors"})]})}),e.jsx("div",{className:"col-lg-12 col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx("textarea",{name:"message",className:"form-control",id:"message",cols:"30",rows:"5",required:!0,"data-error":"Write your message",placeholder:"Your Message",onChange:s=>g(s.target.value),value:o,autoComplete:"on"}),e.jsx("div",{className:"help-block with-errors"})]})}),e.jsxs("div",{className:"col-lg-12 col-md-12",children:[e.jsxs("button",{type:"submit",className:"default-btn",children:[e.jsx(i,{className:"start-icon before"}),e.jsx("span",{className:"label",children:u?e.jsx(y,{}):"Send Message"}),e.jsx(i,{className:"end-icon after"})]}),e.jsx("div",{id:"msgSubmit",className:"h3 text-center hidden"}),e.jsx("div",{className:"clearfix"})]})]})]})},P=()=>e.jsx("section",{className:"contact-area-form ",style:{paddingBottom:"100px"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title text-center",children:[e.jsx("span",{className:"sub-title",children:"Contact Us"}),e.jsx("h2",{children:"Drop us Message for any Query"}),e.jsxs("p",{style:{textOverflow:"ellipsis"},children:["Already use ",e.jsx("span",{className:"text-altlemon",children:"Yctlibrary"}),"? ",e.jsx(n,{to:"/login",children:"Sign In"})," so we can tailor your support experiences. If it's not possible, we'd still like to hear from you."]})]}),e.jsx("div",{className:"contact-form",children:e.jsx(q,{id:"form"})})]})}),Y=()=>e.jsx("div",{className:"contact-area-info pt-5 mt-5 pt-lg-0 mt-lg-0 pb-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 col-sm-6 col-lg-4",children:e.jsxs("div",{className:"contact-info-box mb-30 ",children:[e.jsx("div",{className:"icon",children:e.jsx(w,{})}),e.jsx("h3",{children:"Email Here"}),e.jsx("p",{children:e.jsx("a",{href:"mailto:hello@raque.com",children:"raquereinforce@gmail.com"})}),e.jsx("p",{children:e.jsx("a",{href:"mailto:raque@hello.com",children:"raquereinforce@gmail.com"})})]})}),e.jsx("div",{className:"col-12 col-sm-6 col-lg-4",children:e.jsxs("div",{className:"contact-info-box mb-30",children:[e.jsx("div",{className:"icon",children:e.jsx(M,{})}),e.jsx("h3",{children:"Location Here"}),e.jsx("p",{children:e.jsx("a",{href:"https://goo.gl/maps/Mii9keyeqXeNH4347",target:"_blank",children:"YCT. Herbert Macaulay Rd, Yaba Lagos"})})]})}),e.jsx("div",{className:"col-12 col-sm-6 col-lg-4 offset-sm-3 offset-md-3 offset-lg-0",children:e.jsxs("div",{className:"contact-info-box mb-30",children:[e.jsx("div",{className:"icon",children:e.jsx(S,{})}),e.jsx("h3",{children:"Call Here"}),e.jsx("p",{children:e.jsx("a",{href:"tel:2347044593001",children:"+234 704 459 3001"})}),e.jsx("p",{children:e.jsx("a",{href:"tel:2347018573905",children:"+241 452 4526"})})]})})]})})}),E=()=>e.jsx("div",{id:"map",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359536.14502592356!2d-76.08043413946686!3d45.25029749557496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament%20Hill!5e0!3m2!1sen!2sbd!4v1593691677634!5m2!1sen!2sbd"})}),L=()=>e.jsxs("div",{id:"contact",children:[e.jsxs("div",{className:"all-contact-info",children:[e.jsx("section",{className:"contact-area",children:e.jsx("div",{className:"page-title-area",children:e.jsx("div",{className:"container p-lg-0",children:e.jsx("div",{className:"d-table",children:e.jsx("div",{className:"d-table-cell",children:e.jsxs("div",{className:"title-content",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{to:"/",className:"text-decoration-none text-dark",children:"Home"})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx(k,{})})}),e.jsx("li",{children:e.jsx("span",{children:"Contact"})})]}),e.jsx("h2",{children:"Contact Us"})]})})})})})}),e.jsx("section",{className:"contact-info",children:e.jsx(Y,{})}),e.jsx("section",{className:"contact-form-section",children:e.jsx(P,{})})]}),e.jsx("section",{className:"map",children:e.jsx(E,{})})]});export{L as default};
