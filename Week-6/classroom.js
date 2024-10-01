const classroom = {
  students: [],
  name: "",
  showStudents() {
    document.getElementById("students").innerHTML = "";
    this.students.forEach(function (studentName) {
      document.getElementById("students").innerHTML += studentName + "<br />";
    });
  },
  maxStudents: 2,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;
  if (currentStudents >= classroom.maxStudents) {
    console.log("No seats available");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
