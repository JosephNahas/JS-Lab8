let student = {
    name: "Joseph",
    age: 32,
    enrolled: true,
    courses: ['javascript', 'web dev', 'operating systems', 'algorithms', 'databases'],
    displayInfo: function(){
        console.log(this.name, this.age);
    },
    addCourse: function(course){
        courses.push(course);
    }
};

console.log(student.name, student.age);
student.displayInfo();

let jsonString = JSON.stringify(student);
console.log(jsonString);

let parsedStudent = JSON.parse(jsonString);
console.log(parsedStudent);

let { name, age, enrolled , courses} = student;

let scores = [85, 92, 78, 90];

let [first, second, , ] = scores;
console.log(first, second);

let clonedStudent = { ...student };
clonedStudent.graduationYear = '2027';
console.log(clonedStudent.graduationYear);

let newCourses = ['front end dev', 'object-oriented programming', 'numeric computing'];

let combinedCourses = [...student.courses, ...newCourses];