import{i as x,r as a,j as e,L as r,a4 as j}from"./index-CoPL2P1k.js";import{S as N}from"./SocialAuth-CKXz_hqX.js";const v=()=>{const{activateErrMsg:n,errParagraph:c,handleSignup:m}=x(),[l,d]=a.useState(""),[t,u]=a.useState(""),[o,p]=a.useState(""),[i,h]=a.useState("");console.log("SIGNUP COMPONENT ");const g=s=>{s.preventDefault(),m({name:l,email:t,password:i,phone:o})};return e.jsxs("form",{onSubmit:g,children:[n&&e.jsx("div",{className:"ui error message text-start",children:e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"header fw-bold",children:"Oops!"}),e.jsx("p",{className:"form-ui-error",children:c})]})}),e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter Full Name",autoComplete:"off",autoCapitalize:"on",className:"form-control text-capitalize",value:l,onChange:s=>d(s.target.value),required:!0}),e.jsx("span",{className:"form-email-feedback"})]}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Your email address",autoComplete:"on",className:"form-control",value:t,onChange:s=>u(s.target.value),required:!0})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"tel",placeholder:"Phone Number",id:"phone",name:"phone",className:"form-control",value:o,onChange:s=>p(s.target.value),required:!0})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"password",name:"password",id:"password",placeholder:"Create a password",className:"form-control",value:i,onChange:s=>h(s.target.value),required:!0})}),e.jsx("button",{type:"submit",children:"Sign Up"}),e.jsx(N,{})]})},f="/assets/register-bg-Cih_0jC3.jpg",b=()=>e.jsx("section",{className:"register-area",children:e.jsxs("div",{className:"row m-0 h-100",children:[e.jsx("div",{className:"col-lg-6 col-md-12 p-0",children:e.jsx("div",{className:"register-image",children:e.jsx("img",{src:f,className:"img-fluid",alt:"image"})})}),e.jsx("div",{className:"col-lg-6 col-md-12 p-0",children:e.jsx("div",{className:"register-content",children:e.jsx("div",{className:"d-table",children:e.jsx("div",{className:"d-table-cell",children:e.jsxs("div",{className:"register-form",children:[e.jsxs("div",{className:"logo",children:[e.jsx(r,{to:"/",children:e.jsx(j,{})}),e.jsx(r,{to:"/",className:"d-none",children:e.jsx("img",{src:"assets/img/logo.png",className:"white-logo",alt:"image"})})]}),e.jsx("h3",{children:"Open up your Raque Account now"}),e.jsxs("p",{children:["Already signed up? ",e.jsx(r,{to:"/login",children:"Log in"})]}),e.jsx(v,{})]})})})})})]})});export{b as default};
