import{b as M,r as n,u as z,c as E,j as e,a as N,g as B,S as I,P as S,D as U,h as _,T as x,V as k,i as H,F as L,k as O,f as G,l as J}from"./index-ec28138e.js";function V(){const t=M(s=>s.user.data),[o,r]=n.useState(""),[c,p]=n.useState(t.image),[i,l]=n.useState(t.userName),[u,m]=n.useState(""),[j,f]=n.useState(t.address),[v,C]=n.useState(t.contact),[b,w]=n.useState(t.gender),[y,D]=n.useState(t.age),P=localStorage.getItem("userToken"),g=z();n.useEffect(()=>{async function s(){P&&await N.get("https://medinet.website/userData").then(a=>{a.data=="blocked"&&g("/login")})}s()});const T=E(),A=async s=>{s.preventDefault();const a=new FormData;a.append("name",i),a.append("age",y),a.append("images",c),a.append("address",j),a.append("contact",v),a.append("gender",b);try{N.put("https://medinet.website/setProfile",a).then(h=>{h.data==="error"?m("Something went wrong"):h.data=="blocked"?(g("/login"),localStorage.removeItem("userToken")):(T(B(h.data)),m("Profile updated successfully"),setTimeout(()=>{m("")},4e3))})}catch(h){console.log(h)}};return e.jsx("div",{className:"row",children:e.jsxs("form",{className:"mx-auto w-75 setProfile border  shadow-lg",encType:"multipart/form-data",children:[e.jsx("div",{className:"text-center text-bold mb-3 mt-3",children:"SET PROFILE"}),e.jsxs("div",{className:"text-center  mb-3 mt-3",children:[o!=[]?e.jsx("img",{width:"150px",height:"200px",className:"text-wrap",src:o,alt:""}):t.image?e.jsx("img",{width:"150px",height:"200px",src:`https://medinet.website/images/${t.image}`,alt:"profile"}):e.jsx("img",{width:"150px",height:"200px",src:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",alt:"default"}),e.jsx("br",{}),e.jsx("input",{className:"form-control w-25 m-auto mt-3",type:"file",onChange:s=>{p(s.target.files[0]),r(URL.createObjectURL(s.target.files[0]))}}),u=="Profile updated successfully"?e.jsx("div",{className:"alert mt-3 alert-success",role:"alert",children:"Profile updated successfully"}):u?e.jsx("div",{className:"alert mt-3 alert-danger",role:"alert",children:u}):""]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("label",{htmlFor:"name",children:["Name",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",id:"name",value:i,onChange:s=>l(s.target.value),className:"form-control mb-2 form-control-sm",placeholder:"Name..."}),e.jsxs("label",{htmlFor:"age",children:["Age",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",id:"age",value:y,onChange:s=>D(s.target.value),className:"form-control mb-2 form-control-sm",placeholder:"Age..."}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{className:"",children:["Gender",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs("div",{className:"form-check form-check-inline",children:[e.jsx("input",{type:"radio",value:"male",checked:b==="male",onChange:s=>w(s.target.value),className:"form-check-input",id:"male"}),e.jsx("label",{htmlFor:"male",className:"form-check-label",children:"Male"})]}),e.jsxs("div",{className:"form-check form-check-inline",children:[e.jsx("input",{type:"radio",value:"female",checked:b==="female",onChange:s=>w(s.target.value),className:"form-check-input",id:"female"}),e.jsx("label",{htmlFor:"female",className:"form-check-label",children:"Female"})]}),e.jsx("br",{})]})}),e.jsxs("label",{htmlFor:"contact",children:["Contact",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"tel",id:"contact",value:v,onChange:s=>C(s.target.value),className:"form-control mb-2 form-control-sm",placeholder:"Contact..."})]}),e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("label",{htmlFor:"address",children:["Address",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("textarea",{id:"address",value:j,onChange:s=>f(s.target.value),className:"form-control h-25  mb-2 form-control-sm",placeholder:"Address..."}),"Created : ",t&&t.timeStamp]})]}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12 text-center",children:e.jsx("button",{className:"btn btn-outline-success mb-3",onClick:A,children:"Save"})})})]})})}const d=I.create({page:{backgroundColor:"white",padding:20},container:{display:"flex",flexDirection:"row"},column:{flex:1},label:{fontSize:16,fontWeight:"bold",marginBottom:5},value:{fontSize:16,marginBottom:5},prescription:{fontSize:20,fontWeight:"bold",marginBottom:5,marginTop:"20px"}});$.propTypes={data:S.object,user:S.object};function $({data:t,user:o}){return e.jsx(U,{children:e.jsxs(_,{size:"A4",style:d.page,children:[e.jsx("view",{children:e.jsx(x,{children:"MediNet"})}),e.jsxs(k,{style:d.container,children:[e.jsxs(k,{style:d.column,children:[e.jsxs(x,{style:d.label,children:["Name : ",o.userName]}),e.jsxs(x,{style:d.label,children:["Age : ",o.age]}),e.jsxs(x,{style:d.label,children:["Gender : ",o.gender]})]}),e.jsxs(k,{style:d.column,children:[e.jsxs(x,{style:d.label,children:["Doctor : ",t.docData[0].name]}),e.jsxs(x,{style:d.label,children:["Date : ",t.date]}),e.jsxs(x,{style:d.label,children:["Time : ",t.time]})]})]}),e.jsxs(k,{children:[e.jsx("hr",{}),e.jsx(x,{style:d.prescription,children:"Prescription"}),Object.entries(t.medicines)&&Object.entries(t.medicines).map((r,c)=>e.jsxs(x,{style:d.label,children:[r[0]&&r[0],":",r[1]&&r[1],e.jsx("br",{})]},c))]})]})})}R.propTypes={el:S.object,user:S.object};function R({el:t,user:o}){return e.jsx(e.Fragment,{children:e.jsx(H,{document:e.jsx($,{data:t,user:o}),fileName:"Prescription.pdf",children:({loading:r})=>r?"Loading document...":e.jsx("button",{className:"btn btn-success",children:e.jsx(L,{})})})})}function W(){const t=z(),o=M(l=>l.user.data),[r,c]=n.useState([]),p=localStorage.getItem("userToken"),i=n.useCallback(async()=>{await N.get("https://medinet.website/prescriptions",{headers:{Authorization:`Brearer ${p}`}}).then(l=>{l.data=="blocked"?(t("/login"),localStorage.removeItem("userToken")):(console.log(l.data),c(l.data))})},[t,p]);return n.useEffect(()=>{i()},[i]),e.jsxs("div",{children:[e.jsx("h1",{children:"Prescriptions"}),r.length!=0&&r.map((l,u)=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"card border  shadow-lg  p-3",children:e.jsxs("div",{className:"row ",children:[e.jsxs("div",{className:"col-md-4 ",children:[e.jsx("h4",{children:l.docData[0].name}),e.jsx("h6",{children:l.date}),e.jsx("h6",{children:l.time})]}),e.jsx("div",{className:"col-md-4",children:l.medicines&&Object.entries(l.medicines).map(([m,j])=>e.jsxs("div",{children:[e.jsx("b",{children:m}),":",j]},j.split(" ")[0]))}),e.jsx("div",{className:"col-md-4",children:l.medicines&&e.jsx(R,{el:l,user:o})})]})},u)}))]})}function q(){const[t,o]=n.useState(""),r=localStorage.getItem("userToken"),c=O(),p=z(),[i,l]=n.useState(null),u=M(s=>s.user.data.email),m=new Date,j=G(m,"dd-MM-yyyy"),f=m.getHours(),v=m.getMinutes(),C=f>=12?"PM":"AM",b=f%12===0?12:f%12,w=v.toString().padStart(2,"0"),y=`${b}.${w} ${C}`,D=n.useCallback(async s=>{console.log(s),await N.post(`https://medinet.website/cancelAppoint/${s}`,{headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}}).then(a=>{if(a.data=="blocked")history("/login"),localStorage.removeItem("userToken");else{const h=t.length!=0&&t.map(F=>F._id===s?(console.log(1),{...F,isCancelled:!0}):F);console.log(h),o(h)}})},[t,r]);n.useEffect(()=>{async function s(){await N.get("https://medinet.website/appointments",{}).then(a=>{console.log(a.data),a.data=="blocked"?(localStorage.removeItem("userToken"),history("/login")):(o(a.data.appointments),l(a.data.user))})}s()},[r]);const P=n.useCallback(s=>{const a=s;c.emit("room:join",{email:u,room:a})},[c,u]),g=n.useCallback(s=>{const{room:a}=s;p(`/call/${a}`)},[p]);n.useEffect(()=>(c.on("room:join",g),()=>{c.off("room:join",g)}),[c,g]);const T=E(),A=(s,a)=>{if(i&&t&&a){c.emit("setup",i),c.emit("join-chat",s,i,a);const h=()=>{T(J(s)),p(`/chat/${a}`)};return c.on("chat-connected",h),()=>{c.off("chat-connected",h)}}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"appoints text-center p-3 m-5 border  shadow-lg ",children:[e.jsx("h2",{children:"Appointments"}),t?t.length!=0&&t.map(s=>e.jsx("div",{className:"appointCard text-center   border  shadow-lg  mt-3 p-3",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4 text-start",children:[e.jsx("h4",{children:s.docData[0].name}),e.jsxs("h6",{className:"subText p-0 m-0",children:["Qualification:",s.docData[0].qualification]}),e.jsxs("h6",{className:"subText",children:["Gender:",s.docData[0].gender]}),e.jsxs("h6",{className:"subText",children:["Fees:",s.docData[0].fee]})]}),e.jsxs("div",{className:"col-md-4",children:[e.jsxs("h6",{children:["Date : ",s.date]}),e.jsxs("h6",{children:["Time : ",s.time]})]}),e.jsx("div",{className:"col-md-4",children:e.jsxs(e.Fragment,{children:[" ",e.jsx("br",{}),j>=s.date||s.time<y?"Expired":s.isAttended?"Attended":s.isCancelled?"cancelled":e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn bg-danger text-white ps-2 pe-2 ",onClick:()=>D(s._id),style:{fontSize:"15px"},children:"Cancel"})," ",e.jsx("button",{style:{fontSize:"15px"},className:"btn ps-2 pe-2 btn-outline-success",onClick:()=>P(s._id+s.user),children:"Join"}),e.jsx("button",{style:{fontSize:"15px"},className:"btn ps-2 pe-2 btn-outline-success",onClick:()=>A(s._id,s.doctor),children:"Chat"})]})]})})]})},s._id)):e.jsx("p",{children:"No appointments found."})]})})}function K(){const[t,o]=n.useState(!0),[r,c]=n.useState(!1),[p,i]=n.useState(!1),l=()=>{o(!0),c(!1),i(!1)},u=()=>{o(!1),c(!0),i(!1)},m=()=>{o(!1),c(!1),i(!0)};return e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 col-md-3",children:e.jsx("div",{className:"row text-center",children:e.jsxs("div",{className:"list-group p-4  mt-5",children:[e.jsx("div",{className:"border  shadow-lg list-group-item btn btn-outline-success lists list-group-item-action text-wrap text-break",onClick:l,children:"Profile"}),e.jsx("br",{}),e.jsx("div",{className:"border  shadow-lg  list-group-item btn btn-outline-success lists list-group-item-action text-wrap text-break",onClick:u,children:"Appointments"}),e.jsx("br",{}),e.jsx("div",{className:"border  shadow-lg list-group-item btn btn-outline-success lists list-group-item-action text-wrap text-break",onClick:m,children:"Prescriptions"})]})})}),e.jsxs("div",{className:"col-12 col-md-9 bg-light",children:[t&&e.jsx(V,{}),r&&e.jsx(q,{}),p&&e.jsx(W,{})]})]})}export{K as default};
