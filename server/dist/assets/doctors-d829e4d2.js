import{r as l,j as a,m as N,a as v}from"./index-ec28138e.js";import{V as R}from"./view-5f976c04.js";function A(){const[n,r]=l.useState(""),[s,d]=l.useState([]),[m,f]=l.useState(""),[h,c]=l.useState([]),i=localStorage.getItem("adminToken"),u=e=>{const t=s.filter(o=>o._id==e._id);r(t[0])},x=e=>{const t=e.target.value.toLowerCase();f(t);const o=s.filter(g=>g.name.toLowerCase().startsWith(t));c(o)},p=l.useCallback(()=>{c(s.filter(e=>e.isApproved=="approved"))},[s]),j=l.useCallback(()=>{c(s.filter(e=>e.isApproved==""))},[s]),D=l.useCallback(()=>{c(s.filter(e=>e.isApproved=="rejected"))},[s]),b=()=>{c(s)},k=[{name:"ID",selector:e=>e._id},{name:"Name",selector:e=>a.jsxs("div",{className:"tip ","data-bs-toggle":"tooltip",title:e.name,children:[" ",e.name]})},{name:"Fee",selector:e=>e.fee&&e.fee},{name:"Contact",selector:e=>e.contact},{name:"Age",selector:e=>e.age},{name:"Department",selector:e=>{var t;return(t=e.dept[0])==null?void 0:t.name}},{name:"Action",cell:e=>a.jsx("button",{className:"btn btn-success",onClick:()=>u(e),children:"View"})}];return l.useEffect(()=>{(async()=>{await v.get("https://medinet.website/admin/doctors",{headers:{Authorization:`Bearer ${i}`}}).then(t=>{d(t.data),c(t.data)})})()},[i]),a.jsx(a.Fragment,{children:n?a.jsx(R,{user:n,setSelected:r,value:"doc"}):a.jsxs(a.Fragment,{children:[a.jsx("h3",{children:"Doctors"}),a.jsxs("div",{className:"d-flex",children:[a.jsxs("div",{className:"form-check ms-3",children:[a.jsx("input",{className:"form-check-input",onChange:p,type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),a.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Approved"})]}),a.jsxs("div",{className:"form-check ms-3",children:[a.jsx("input",{className:"form-check-input",onChange:j,type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),a.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:"Pending"})]}),a.jsxs("div",{className:"form-check ms-3",children:[a.jsx("input",{className:"form-check-input",onChange:D,type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),a.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:"Rejected"})]}),a.jsxs("div",{className:"form-check ms-3",children:[a.jsx("input",{className:"form-check-input",onChange:b,type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),a.jsx("label",{className:"form-check-label",htmlFor:"flexRadioDefault2",children:"All"})]})]}),a.jsx("input",{type:"text",value:m,onChange:x,placeholder:"Search...",className:"form-control w-25 mb-2"}),a.jsx(N,{columns:k,title:"Doctor",data:h})]})})}export{A as default};
