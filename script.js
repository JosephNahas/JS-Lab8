let student = {
    name: "Joseph",
    age: 32,
    enrolled: true,
    courses: ['javascript', 'web dev', 'operating systems', 'algorithms', 'databases'],
    displayInfo: function(){
        console.log(this.name, this.age);
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