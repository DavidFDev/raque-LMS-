import{G as S,i as o,a8 as P,r as c,j as e,a9 as v,L as g,h as D,aa as O,ab as z,ac as E,a6 as L,a7 as M,ad as B,ae as H,af as R,ag as _,ah as T,ai as U,aj as q}from"./index-CoPL2P1k.js";import{B as G}from"./BioForm-DXiyiAxV.js";const V="/assets/userImg-DRSv7z-e.png";function f(s){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M272 64h-16c-4.4 0-8 3.6-8 8v72c0 4.4 7.6 8 12 8h12c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8z"},child:[]},{tag:"path",attr:{d:"M433.9 130.1L382 78.2c-9-9-21.3-14.2-34.1-14.2h-28c-8.8 0-16 7.3-16 16.2v80c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V164c0-12.7-5.1-24.9-14.1-33.9zM322 400.1c0 8.8-8 16-17.8 16H143.8c-9.8 0-17.8-7.2-17.8-16v-96c0-8.8 8-16 17.8-16h160.4c9.8 0 17.8 7.2 17.8 16v96z"},child:[]}]})(s)}const J=()=>{const{email:s,name:t,password:a,handleUpdate:n,errParagraph:l,successPara:d,successMsg:h,activateErrMsg:i}=o(),{showNotification:x}=P(),[m,w]=c.useState(t),[j,k]=c.useState(s),[u,y]=c.useState(""),[p,F]=c.useState(""),[N,C]=c.useState(!1),[b,I]=c.useState(!1),A=r=>{r.preventDefault(),n({userEmail:j,currentPassword:u,newPassword:p,fullName:m}),i?x(l):h&&x(d)};return e.jsx(e.Fragment,{children:e.jsx("form",{className:"edit-account",onSubmit:A,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"name",children:["Full name ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",id:"name",name:"name",className:"form-control text-capitalize",value:m,autoComplete:"on",onChange:r=>w(r.target.value)})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"email",children:["Email address ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"email",id:"email",name:"email",className:"form-control",value:j,autoComplete:"on",onChange:r=>k(r.target.value)})]})}),e.jsx("div",{className:"col-12",children:e.jsx("legend",{children:"Password Change"})}),e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",children:"Current password (leave blank to leave unchanged)"}),e.jsxs("div",{className:"password",children:[e.jsx("input",{type:N?"text":"password",id:"password",className:"form-control",value:u,autoComplete:"on",onChange:r=>y(r.target.value)}),e.jsx(v,{onClick:()=>C(!N)})]}),i&&e.jsx("span",{className:"text-deepred",children:l})]})}),e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"newPassword",children:"New password (leave blank to leave unchanged)"}),e.jsxs("div",{className:"password",children:[e.jsx("input",{type:b?"text":"password",id:"newPassword",name:"newPassword",className:"form-control",value:p,autoComplete:"on",onChange:r=>F(r.target.value)}),e.jsx(v,{onClick:()=>I(!b)})]}),i&&e.jsx("span",{className:"text-deepred",children:l})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("button",{type:"submit",className:"default-btn",children:[e.jsx(f,{className:"start-icon"}),e.jsx("span",{className:"label",children:"Save Changes"}),e.jsx(f,{className:"end-icon"})]})})]})})})},W=()=>{const{orders:s}=o();return e.jsx(e.Fragment,{children:e.jsxs("table",{className:"table border text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Borrow Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Return Date"})]})}),e.jsx("tbody",{children:s&&s.length>0?s.map((t,a)=>{const{itemId:n,borrowDate:l,returnDate:d}=t;return e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:l}),e.jsx("td",{children:"Completed"}),e.jsx("td",{children:d})]},a)}):e.jsx("tr",{children:e.jsx("td",{colSpan:"4",children:"No orders found"})})})]})})},Y=()=>{const{recentOrders:s}=o(),[t,a]=c.useState([]);return c.useEffect(()=>{Array.isArray(s)?a(s.slice(0,6)||[]):a([])},[s]),e.jsxs("div",{className:"order-form",children:[e.jsx("h3",{children:"Recent Orders"}),e.jsx("div",{className:"main-table",children:e.jsxs("table",{className:"table border text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Borrow Date"}),e.jsx("th",{children:"Return Date"})]})}),e.jsx("tbody",{children:t.map((n,l)=>{const{itemId:d,borrowDate:h,returnDate:i}=n;return e.jsxs("tr",{children:[e.jsx("td",{style:{textOverflow:"ellipsis",overflow:"hidden"},children:d}),e.jsx("td",{children:h}),e.jsx("td",{children:i})]},l)})})]})})]})},X=()=>{const{isLoggedIn:s,handleLogout:t,name:a,email:n,phone:l}=o();return e.jsx(e.Fragment,{children:s?e.jsxs("section",{className:"user-account-area pb",children:[e.jsx("div",{className:"page-title-area",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"d-table",children:e.jsx("div",{className:"d-table-cell",children:e.jsxs("div",{className:"title-content",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(g,{to:"/",className:"text-decoration-none text-dark",children:"Home"})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx(D,{})})}),e.jsx("li",{children:e.jsx("span",{children:"My Account"})})]}),e.jsx("h2",{className:"text-capitalize",children:a})]})})})})}),e.jsx("div",{className:"main-userAccount mt-5 mt-lg-0",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"userAccount-profile",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-4 col-md-5",children:e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:V,className:"img-fluid rounded",alt:"image"})})}),e.jsx("div",{className:"col-lg-8 col-md-7",children:e.jsxs("div",{className:"profile-content",children:[e.jsx("h3",{className:"profile-name text-capitalize",children:a}),e.jsx(G,{}),e.jsxs("ul",{className:"contact-info",children:[e.jsxs("li",{children:[e.jsx(O,{className:"icon"}),e.jsx("a",{href:"#",children:n})]}),e.jsxs("li",{children:[e.jsx(z,{className:"icon"}),e.jsx("a",{href:"tel:+234 704 459 3001",children:s&&l})]}),e.jsxs("li",{children:[e.jsx(E,{className:"icon"}),e.jsx("a",{href:"#",target:"_blank",children:"www.digitaldove.com"})]})]}),e.jsxs("ul",{className:"social",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"d-block",target:"_blank",children:e.jsx(L,{className:"bx bxl-facebook"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"d-block",target:"_blank",children:e.jsx(M,{className:"bx bxl-twitter"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"d-block",target:"_blank",children:e.jsx(B,{className:"bx bxl-instagram"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"d-block",target:"_blank",children:e.jsx(H,{className:"bx bxl-linkedin"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"d-block",target:"_blank",children:e.jsx(R,{className:"bx bxl-pinterest-alt"})})})]}),e.jsx("button",{type:"button",onClick:t,className:"userAccount-logout",children:"Logout"})]})})]})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"nav nav-tabs userAccount-navigation mb-4",children:[e.jsxs("ul",{className:"nav nav-tabs",id:"navId",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"representation",children:e.jsxs("a",{href:"#tab1Id",className:"nav-link active","data-bs-toggle":"tab","aria-current":"page",children:[e.jsx(_,{}),e.jsx("span",{className:"",children:"Dashboard"})]})}),e.jsx("li",{className:"nav-item",role:"representation",children:e.jsxs("a",{href:"#tab2Id",className:"nav-link","data-bs-toggle":"tab",role:"button","aria-haspopup":"true","aria-expanded":"false",children:[e.jsx(T,{}),e.jsx("span",{className:"",children:"Orders"})]})}),e.jsx("li",{className:"nav-item",role:"representation",children:e.jsxs("a",{href:"#tab3Id",className:"nav-link text-capitalize","data-bs-toggle":"tab",children:[e.jsx(U,{}),e.jsx("span",{className:"",children:"Addresses"})]})}),e.jsx("li",{className:"nav-item",role:"representation",children:e.jsxs("a",{href:"#tab4Id",className:"nav-link text-capitalize","data-bs-toggle":"tab",children:[e.jsx(q,{}),e.jsx("span",{children:" Account Details"})]})})]}),e.jsxs("div",{className:"tab-content w-100 py-4",id:"myTabContent",children:[e.jsxs("div",{className:"tab-pane fade show active",id:"tab1Id",role:"tabpanel",children:[e.jsxs("p",{children:["Hello ",e.jsx("b",{className:"text-capitalize",children:a})," (not"," ",e.jsx("b",{className:"text-capitalize",children:a}),"?"," ",e.jsx(g,{to:"/login",onClick:t,className:"text-deepred",style:{cursor:"pointer"},children:"Logout"})," ",")"]}),e.jsxs("p",{children:["From your account dashboard you can view your"," ",e.jsx("span",{className:"text-deepred",children:"recent orders"}),", manage your",e.jsx("span",{className:"text-deepred",children:"shipping and billing addresses"}),", and",e.jsx("span",{className:"text-deepred",children:"edit your password and account details"}),"."]}),e.jsx(Y,{})]}),e.jsx("div",{className:"tab-pane fade main-orders",id:"tab2Id",role:"tabpanel",children:e.jsx("div",{className:"order-form overflow-auto",children:e.jsx(W,{})})}),e.jsx("div",{className:"tab-pane fade",id:"tab3Id",role:"tabpanel",children:e.jsx("div",{className:"address",children:e.jsxs("div",{className:"userAccount-content",children:[e.jsx("p",{children:"The following addresses will be used on the checkout page by default."}),e.jsx("div",{className:"userAccount-addresses",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6 col-md-6",children:[e.jsxs("div",{className:"addresses-title d-flex align-items-center justify-content-between",children:[e.jsx("h3",{children:"Billing address"}),e.jsx("a",{href:"#tab5Id",className:"edit","data-bs-toggle":"tab",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Edit"})]}),e.jsxs("address",{className:"text-capitalize",children:[a,e.jsx("br",{}),"ET",e.jsx("br",{}),"3774 Joy Lane Los Angeles, CA 90071"]})]}),e.jsxs("div",{className:"col-lg-6 col-md-6 mt-3 mt-lg-0",children:[e.jsxs("div",{className:"addresses-title d-flex align-items-center justify-content-between",children:[e.jsx("h3",{children:"Shipping address"}),e.jsx("a",{href:"#tab5Id",className:"edit","data-bs-toggle":"tab",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Add"})]}),e.jsx("address",{children:"You have not set up this type of address yet."})]})]})})]})})}),e.jsx("div",{className:"tab-pane fade",id:"tab4Id",role:"tabpanel",children:e.jsx("div",{className:"user-details",children:e.jsx("div",{className:"userAccount-content",children:e.jsx(J,{})})})})]})]})})})]})})]}):null})};export{X as default};
