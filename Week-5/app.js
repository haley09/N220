//Code Challenge
let course = {
courseName: "N220",
courseTitle: "Introduction to Media Application Development",
totalSeat: 20,
enrolled: 18,
availability: function() {
    return this.enrolled < this.totalSeat;
    }
};

console.log(course.courseName + "Open: " + course.availability());

course.enrolled += 2;
console.log("Enrolled students: " + course.enrolled);

console.log(course.courseName + "Open: " + course.availability());

//Built-in Objects
function IUPUIWebsite() {
    console.log(`Inner Width: ${window.innerWidth}`);
    console.log(`Outer Width: ${window.outerWidth}`);

    console.log(window.location);
}
function printPage() {
    window.print();
}

document.getElementById("dpDetails").innerHTML +=
course.courseTitle

document.querySelector("#domain").innerHTML += "HI";

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100), length, 100);
console.log(String(100).includes("2"), 100);
console.log(String(100).replace("1", "2"), 100);