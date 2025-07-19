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
      `).join("")}const e=document.querySelector("#students-table"),n=document.getElementById("get-students-btn"),d=document.getElementById("add-student-form"),u=document.getElementById("name"),a=document.getElementById("age"),s=document.getElementById("course"),c=document.getElementById("skills"),i=document.getElementById("email"),l=document.getElementById("isEnrolled");async function o(){await fetch("https://687bd2dfb4bc7cfbda876303.mockapi.io/students/student").then(t=>t.json()).then(t)}async function m(t){await fetch(`https://687bd2dfb4bc7cfbda876303.mockapi.io/students/student/${t}`).then(t=>t.json()).then(({name:t,age:e,course:n,skill:d,email:o,isEnrolled:m})=>{u.value=t,a.value=e,s.value=n,c.value=d,i.value=o,l.checked=m})}async function h(t){return fetch(`https://687bd2dfb4bc7cfbda876303.mockapi.io/students/student/${t}`,{method:"DELETE"})}async function r(t){return fetch("https://687bd2dfb4bc7cfbda876303.mockapi.io/students/student",{method:"POST",body:JSON.stringify(t)})}n.addEventListener("click",o),d.addEventListener("submit",t=>{r({name:u.value.trim(),age:a.value,course:s.value.trim(),skill:c.value,email:i.value.trim(),isEnrolled:l.checked}).then(()=>{d.reset(),o()})}),e.addEventListener("click",t=>{t.target.classList.contains("delete")?h(t.target.dataset.id).then(()=>o()):t.target.classList.contains("edit")&&m(t.target.dataset.id)});
//# sourceMappingURL=dz18-main.546e0d4b.js.map
