import { makeStudentsMarkup } from "../markup/markup.js";

function renderStudents(students) {
  studentsTable.innerHTML = makeStudentsMarkup(students);
}

const studentsTable = document.querySelector("#students-table");
const getStudentsBtn = document.getElementById("get-students-btn");
const addStudentForm = document.getElementById("add-student-form");
const studentName = document.getElementById("name");
const studentAge = document.getElementById("age");
const studentCourse = document.getElementById("course");
const studentSkill = document.getElementById("skills");
const studentEmail = document.getElementById("email");
const studentEnrolled = document.getElementById("isEnrolled");

let id = null;

async function getStudents() {
 await fetch("http://localhost:3000/students")
    .then((response) => response.json())
    .then(renderStudents)
}

getStudentsBtn.addEventListener("click", getStudents);

async function updateStudents(id) {
  await fetch(`http://localhost:3000/students/${id}`)
    .then((response) => response.json())
    .then(({ name, age, course, skill, email, isEnrolled }) => {
      studentName.value = name;
      studentAge.value = age;
      studentCourse.value = course;
      studentSkill.value = skill;
      studentEmail.value = email;
      studentEnrolled.checked = isEnrolled;
      id = id;
    });
}

addStudentForm.addEventListener("submit", (event) => {
  const studentData = {
    name: studentName.value.trim(),
    age: studentAge.value,
    course: studentCourse.value.trim(),
    skill: studentSkill.value,
    email: studentEmail.value.trim(),
    isEnrolled: studentEnrolled.checked,
  };

  if (id) {
    patchStudentsData(id, studentData)
      .then(() => {
        addStudentForm.reset();
        getStudents();
      })
  } else {
    addStudent(studentData)
      .then(() => {
        addStudentForm.reset();
        getStudents();
      })
  }
});

async function deleteStudent(id) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  })
}

async function addStudent(studentData) {
  return fetch("http://localhost:3000/students", {
    method: "POST",
    body: JSON.stringify(studentData),
  });
}

async function patchStudentsData(id, studentData) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "PATCH",
    body: JSON.stringify(studentData),
  });
}

studentsTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const id = event.target.dataset.id;
    deleteStudent(id).then(() => getStudents())
  } else if (event.target.classList.contains("edit")) {
    const id = event.target.dataset.id;
    updateStudents(id);
  }
});
