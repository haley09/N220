//Initial Object
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
console.log(course.enrolled + 2);