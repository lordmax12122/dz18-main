function t(t){e.innerHTML=t.map(t=>`<tr>
          <th>${t.id}</th>
          <th>${t.name}</th>
          <th>${t.age}</th>
          <th>${t.course}</th>
          <th>${t.skills}</th>
          <th>${t.email}</th>
          <th>${t.isEnrolled}</th>
          <th>
            <button class="edit" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <button class="delete" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
          </th>
        </tr>
      `).join("")}const e=document.querySelector("#students-table"),n=document.getElementById("get-students-btn"),u=document.getElementById("add-student-form"),a=document.getElementById("name"),s=document.getElementById("age"),d=document.getElementById("course"),l=document.getElementById("skills"),c=document.getElementById("email"),i=document.getElementById("isEnrolled");async function o(){await fetch("http://localhost:3000/students").then(t=>t.json()).then(t)}async function h(t){await fetch(`http://localhost:3000/students/${t}`).then(t=>t.json()).then(({name:t,age:e,course:n,skill:u,email:o,isEnrolled:h})=>{a.value=t,s.value=e,d.value=n,l.value=u,c.value=o,i.checked=h})}async function m(t){return fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"})}async function r(t){return fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(t)})}n.addEventListener("click",o),u.addEventListener("submit",t=>{r({name:a.value.trim(),age:s.value,course:d.value.trim(),skill:l.value,email:c.value.trim(),isEnrolled:i.checked}).then(()=>{u.reset(),o()})}),e.addEventListener("click",t=>{t.target.classList.contains("delete")?m(t.target.dataset.id).then(()=>o()):t.target.classList.contains("edit")&&h(t.target.dataset.id)});
//# sourceMappingURL=dz18-main.8d1fbc11.js.map
