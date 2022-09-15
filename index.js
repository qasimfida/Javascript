const classroom = {
  name: "Javascript",
  teacher: {
    first_name: "Qasim",
    last_name: "Fida",
    age: 25,
    dob: "10-22-3333",
  },
  students: [
    {
      first_name: "qasim",
      last_name: "fida",
      age: 25,
      dob: "11-22-3333",
    },
    {
      first_name: "ahsan",
      last_name: "fida",
      age: 15,
      dob: "11-22-2222",
    },
    {
      first_name: "sadain",
      last_name: "ahmed",
      age: 20,
      dob: "11-22-444",
    },
    {
      first_name: "Ali",
      last_name: "atta",
      age: 35,
      dob: "11-22-1111",
    },
    {
      first_name: "sher",
      last_name: "nadir",
      age: 21,
      dob: "11-11-3333",
    },
  ],
};
const { students, ...rest } = classroom;

const div = document.getElementById("students");
const search = document.getElementById("search");
const myClass = document.getElementsByClassName("classroom");

const handleChange = (e) => {
  const student = students.find((item) => item.first_name === e.target.value);
  console.log(student);
};
search.addEventListener("change", handleChange);
const renderStudents = (students) => {
  let str = ``;

  // for (let i = 0; i < students.length; i++) {
  //   str += `<li>
  //    Name: ${students[i].first_name} ${students[i].last_name} \n\n Dob: ${students[i].dob} </li> `;
  // }

  students.forEach((student, index) => {
    str += `<li> Name: ${student.first_name} ${student.last_name} Dob: ${student.dob} </li>`;
  });

  div.innerHTML = str;
};

const renderClassDetails = ({ students, ...detail }) => {
  let str = "";
  str += `<h2> ${detail.name} </h2>
  <div> Teacher : ${detail.teacher.first_name} ${detail.teacher.last_name} </div>
  `;
  console.log(myClass);
  myClass[0].innerHTML = str;

  renderStudents(students);
};
renderClassDetails(classroom);
