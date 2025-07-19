export const makeStudentsMarkup = (students) => {
  return students
    .map((student) => {
      return `<tr>
          <th>${student.id}</th>
          <th>${student.name}</th>
          <th>${student.age}</th>
          <th>${student.course}</th>
          <th>${student.skills}</th>
          <th>${student.email}</th>
          <th>${student.isEnrolled}</th>
          <th>
            <button class="edit" data-id="${student.id}">Редагувати</button>
            <button class="delete" data-id="${student.id}">Видалити</button>
          </th>
        </tr>
      `;
    }).join("");
}