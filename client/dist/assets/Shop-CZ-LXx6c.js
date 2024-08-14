import{r,c as p,u as w,f as y,j as e,L as m,B as C,z as S,P as j,e as k,A as T,k as E}from"./index-iwJBcb3x.js";import{c as I,L}from"./Spinner-Voe-17H8.js";const P=({product:t})=>{const{addToCart:a,cart:d}=r.useContext(p),{handleCheckout:i}=w(),{handleCalculateDates:s,borrowDate:c,returnDate:n,isExpired:h}=y();r.useState(null);const{id:o,authur:N,coverId:D,edition_count:f,first_publish_year:g,cover_img:b,title:x}=t,v=async()=>{s();let u=[];u.push({itemId:t.id,productName:t.title,borrowDate:c,returnDate:n});try{await a(t,o),await i(u),console.log("Successfully added to cart and handled checkout")}catch(l){console.error("Error occurred during add to cart or checkout:",l)}(async()=>{try{"Notification"in window?await Notification.requestPermission()==="granted"&&new window.Notification("YCT Library",{body:`You have borrowed "${x}". Please return it by ${n}.`,data:"Borrowed an item from the library",tag:"borrow indicator",icon:S}):console.log("Browser doesn't support notification")}catch(l){console.error("Error requesting notification permission:",l)}})()};return e.jsx("div",{className:"col-lg-4 col-md-6 col-sm-6",children:e.jsxs("div",{className:"single-product-box mb-30",children:[e.jsxs("div",{className:"product-image",children:[e.jsx("div",{children:e.jsx("img",{src:b,alt:"product image",className:"w-100"})}),e.jsxs(m,{to:`/reading/${o}`,className:"add-to-cart-btn d-flex flex-nowrap align-items-center gap-2 text-capitalize",onClick:v,children:["Borrow ",e.jsx(C,{})]})]}),e.jsxs("div",{className:"product-content",children:[e.jsx("h3",{children:e.jsx(m,{to:`/product/${o}`,children:x})}),e.jsx("div",{className:"d-flex flex-nowrap gap-2 justify-content-center align-items-center",children:e.jsxs("span",{className:"new",children:[N.join(", ")," "]})}),e.jsxs("div",{className:"book-item-info-item edition-count",children:[e.jsx("span",{className:"text-capitalize fw-bold",children:"Total Editions: "}),e.jsxs("span",{children:[" ",f," "]})]}),e.jsxs("div",{className:"book-item-info-item edition-count",children:[e.jsx("span",{className:"text-capitalize fw-bold",children:"First Publish Year: "}),e.jsxs("span",{children:[" ",g," "]})]})]})]})},o)},$=()=>{const{setSearchTerm:t,setResultTitle:a,resultTitle:d,setLoading:i}=r.useContext(j);k();const s=r.useRef("");r.useEffect(()=>{s.current.focus()},[]);const c=n=>{n.preventDefault(),i(!0);let h=s.current.value.trim();h.length===0?(t("the lost world"),a("Please Enter Something")):(t(h),i(!1))};return e.jsxs("form",{onSubmit:c,children:[e.jsx("input",{type:"text",placeholder:"the lost world...",ref:s}),e.jsx("button",{type:"submit","aria-label":"Search",children:e.jsx(T,{className:"pt-0"})})]})},B=()=>e.jsx("div",{className:"container",children:e.jsx("div",{className:"d-table",children:e.jsx("div",{className:"d-table-cell",children:e.jsxs("div",{className:"title-content",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(m,{to:"/",className:"text-decoration-none text-dark",children:"Home"})}),e.jsx("li",{children:e.jsxs("span",{children:[" ",e.jsx(E,{})," "]})}),e.jsx("li",{children:e.jsx("span",{className:"page-name",children:"Books"})})]}),e.jsx("h2",{className:"page-name",children:"Books"})]})})})}),F=()=>{const{products:t,books:a,loading:d}=r.useContext(j);r.useContext(p);const i=a.map(s=>({...s,id:s.id.replace("/works/",""),cover_img:s.coverId?`https://covers.openlibrary.org/b/id/${s.coverId}-L.jpg`:I}));return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"shop page-title-area",children:e.jsx(B,{})}),e.jsx("section",{className:"shop-products pb-100 pt-5 pt-lg-0",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"woocommerce-topbar",children:e.jsxs("div",{className:"row align-items-center justify-content-between",children:[e.jsx("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:e.jsx("div",{className:"topbar-result-count",children:e.jsxs("p",{className:"mb-0 d-flex flex-nowrap align-items-center gap-2",children:[e.jsx("span",{children:" Showing "}),e.jsxs("span",{children:[a.length?1:0," - ",`${a.length} of ${a.length}`]})]})})}),e.jsx("div",{className:"col-12 col-md-6",children:e.jsx("div",{className:"topbar-ordering-and-search",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"topbar-search",children:e.jsx($,{})})})})})]})}),e.jsx("div",{className:"row",children:d?e.jsx("div",{className:"d-flex justify-content-center",style:{height:"100%"},children:e.jsx(L,{})}):i.slice(0,20).map((s,c)=>e.jsx(P,{product:s},c))})]})})]})};export{F as default};
