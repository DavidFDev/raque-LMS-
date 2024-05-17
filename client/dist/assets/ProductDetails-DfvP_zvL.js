import{r as l,d as v,j as s,L as r,_ as F,H as n,u as A,P as R,i as B,h as L,$ as e,a0 as E,a1 as T,a2 as h}from"./index-CoPL2P1k.js";const H=({data:c})=>{const{id:t,mainProduct:o,mainProduct2:m,productName:x,price:i}=c,{addToCart:d}=l.useContext(v);return s.jsx("div",{className:"col-lg-4 col-md-6 col-sm-6",children:s.jsxs("div",{className:"single-product-box mb-30",children:[s.jsxs("div",{className:"product-image",children:[s.jsxs(r,{to:`/product/${t}`,children:[s.jsx("img",{src:o,alt:"image",className:"img-fluid"}),s.jsx("img",{src:m,alt:"image",className:"img-fluid"})]}),s.jsxs("button",{type:"button",onClick:()=>d(c,t),className:"add-to-cart-btn",children:["Borrow ",s.jsx(F,{className:"bx bx-cart"})]})]}),s.jsxs("div",{className:"product-content",children:[s.jsx("h3",{children:s.jsx("a",{href:"single-product.html",children:x})}),s.jsx("div",{className:"price",children:s.jsx("span",{className:"new",children:i})}),s.jsxs("div",{className:"rating",children:[s.jsx(n,{className:""}),s.jsx(n,{className:""}),s.jsx(n,{className:""}),s.jsx(n,{className:""}),s.jsx(n,{className:""})]})]})]})})},z=()=>{const{id:c}=A(),{products:t}=l.useContext(R),{addToCart:o}=l.useContext(v),{isLoggedIn:m,handleLogoutButton:x}=B(),[i,d]=l.useState(1),[j,b]=l.useState({}),[g,f]=l.useState([]),[I,C]=l.useState([]);l.useState([]),l.useEffect(()=>{const a=t.find(D=>D.id===c);b(a);const k=t.slice(0,5);f(k);const y=t.slice(0,3);C(y)},[c]);const{productName:u,price:P,mainProduct:w,description:N,rating:p}=j,S=a=>{a.preventDefault(),x({id:c})};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"productDetails-page",children:[s.jsx("div",{className:"page-title-area",children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"d-table",children:s.jsx("div",{className:"d-table-cell",children:s.jsxs("div",{className:"title-content",children:[s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(r,{to:"/",className:"text-decoration-none text-dark",children:"Home"})}),s.jsx("li",{children:s.jsx("span",{children:s.jsx(L,{})})}),s.jsx("li",{children:s.jsx("span",{children:"Product Details"})})]}),s.jsx("h2",{className:"text-capitalize",children:"Product Details"})]})})})})}),s.jsxs("div",{className:"container py-5 py-lg-0",children:[s.jsxs("div",{className:"row align-items-center",children:[s.jsx("div",{className:"col-lg-6 mb-4 mb-lg-0",children:s.jsxs("div",{className:"d-flex flex-column gap-3",children:[s.jsx("div",{className:"products-details-image",children:s.jsx("div",{className:"product-image",children:s.jsx("img",{src:w,alt:"",style:{width:"100%"}})})}),s.jsx("div",{className:"d-flex gap-2",children:g.map(a=>s.jsx(r,{to:`/product/${a.id}`,children:s.jsx("img",{src:a.mainProduct,alt:u,className:"img-fluid"})},a.id))})]})}),s.jsx("div",{className:"col-lg-6",children:s.jsxs("div",{className:"product-details-desc",children:[s.jsx("h3",{children:u}),s.jsx("span",{className:"new-price",children:P}),s.jsxs("div",{className:"product-review",children:[p===5?s.jsxs("div",{className:"rating",children:[s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"})]}):p===4&&s.jsxs("div",{className:"rating",children:[s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"}),s.jsx(e,{className:"star-icon"}),s.jsx(E,{className:"star-icon"})]}),s.jsx("a",{href:"#",className:"rating-count",children:"3 reviews"})]}),s.jsx("p",{children:N}),s.jsxs("div",{className:"product-meta",children:[s.jsxs("span",{children:["SKU: ",s.jsx("span",{className:"sku",children:"10"})]}),s.jsxs("span",{children:["Availability: ",s.jsx("span",{className:"in-stock",children:"In Stock"})]}),s.jsxs("span",{children:["Category: ",s.jsx("a",{href:"#",children:"Business"})]}),s.jsxs("span",{children:["Tag: ",s.jsx("a",{href:"#",children:"Book"})]})]}),s.jsxs("div",{className:"product-add-to-cart",children:[s.jsxs("div",{className:"input-counter",children:[s.jsx("span",{className:"minus-btn",onClick:()=>d(i-1),children:s.jsx(T,{})}),s.jsx("p",{"aria-valuemin":i,children:i}),s.jsx("span",{className:"plus-btn",onClick:()=>d(i+1),children:s.jsx(h,{})})]}),m?s.jsxs("button",{type:"submit",className:"default-btn",onClick:()=>o(j,j.id),children:[s.jsx(h,{className:"start-icon"}),s.jsx("span",{className:"label",children:"Add to Cart"}),s.jsx(h,{className:"end-icon"})]}):s.jsx("form",{onSubmit:S,children:s.jsx("button",{type:"submit",className:"default-btn",children:s.jsx(r,{to:"/login",children:s.jsx("span",{className:"label",children:"Login"})})})})]})]})})]}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsxs("div",{className:"nav nav-tabs products-details-tab mb-4",children:[s.jsxs("ul",{className:"nav nav-tabs",id:"navId",role:"tablist",children:[s.jsx("li",{className:"nav-item",role:"representation",children:s.jsxs("a",{href:"#tab1Id",className:"nav-link active","data-bs-toggle":"tab","aria-controls":"collapseExample","aria-current":"page",children:[s.jsx("div",{className:"dot"}),s.jsx("span",{className:"",children:"Description"})]})}),s.jsx("li",{className:"nav-item",role:"representation",children:s.jsxs("a",{href:"#tab2Id",className:"nav-link","data-bs-toggle":"tab",role:"button","aria-haspopup":"true","aria-expanded":"false",children:[s.jsx("div",{className:"dot"}),s.jsx("span",{className:"",children:"Additional Information"})]})}),s.jsx("li",{className:"nav-item",role:"representation",children:s.jsxs("a",{href:"#tab5Id",className:"nav-link text-capitalize","data-bs-toggle":"tab",children:[s.jsx("div",{className:"dot"}),s.jsx("span",{children:"Reviews"})]})})]}),s.jsxs("div",{className:"tab-content w-100",id:"myTabContent",children:[s.jsx("div",{className:"tab-pane fade show active",id:"tab1Id",role:"tabpanel",children:s.jsx("p",{children:N})}),s.jsx("div",{className:"tab-pane fade main-orders",id:"tab2Id",role:"tabpanel",children:s.jsx("div",{className:"order-form overflow-auto"})}),s.jsx("div",{className:"tab-pane fade",id:"tab4Id",role:"tabpanel",children:s.jsx("div",{className:"address"})}),s.jsx("div",{className:"tab-pane fade",id:"tab5Id",role:"tabpanel",children:s.jsx("div",{className:"user-details",children:s.jsx("div",{className:"userAccount-content"})})})]})]})})}),s.jsxs("div",{className:"related-products-area",children:[s.jsxs("div",{className:"section-title text-left",children:[s.jsx("span",{className:"sub-title",children:"Our Shop"}),s.jsx("h2",{children:"Related Products"})]}),s.jsx("div",{className:"row align-items-center ",children:I.map(a=>s.jsx(H,{data:a},a.id))})]})]})]})})};export{z as default};